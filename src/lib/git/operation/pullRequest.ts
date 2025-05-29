import type { ReviewService } from "@/lib/review/service";
import type { PromptService } from "@/lib/prompt/service";
import type { ModelService } from "@/lib/model/service";
import { AISDKError, generateObject } from "ai";
import { z } from "zod";
import {
  type NoteDefinition,
  type Prisma,
  type Reviewer,
  type ReviewStatus,
} from "@prisma/client";
import type { GitMergeRequestAdapter } from "@/lib/git/model/GitPullRequestAdapter";
import { routes } from "@/lib/route";
import { env } from "@/lib/env";
import type { GitMergeRequestDiffs } from "@/lib/git/parsing/model/GitMergeRequestDiffs";

type ReviewerResult = { reviewer: Reviewer } & (
  | {
      success: true;
      comments: Prisma.CommentUncheckedCreateWithoutReviewInput[];
      reviewNotes: Prisma.ReviewNoteUncheckedCreateWithoutReviewInput[];
    }
  | {
      success: false;
      error: string;
    }
);

export namespace PullRequestHandle {
  export class Operation {
    private readonly reviewService: ReviewService;
    private readonly promptService: PromptService;
    private readonly modelService: ModelService;
    private readonly gitMergeRequestAdapter: GitMergeRequestAdapter;
    private readonly project: ProjectForReview;

    constructor(opts: {
      reviewService: ReviewService;
      promptService: PromptService;
      modelService: ModelService;
      gitMergeRequestAdapter: GitMergeRequestAdapter;
      project: ProjectForReview;
    }) {
      this.reviewService = opts.reviewService;
      this.promptService = opts.promptService;
      this.modelService = opts.modelService;
      this.gitMergeRequestAdapter = opts.gitMergeRequestAdapter;
      this.project = opts.project;
    }

    async execute(mergeRequestId: string) {
      // Create a single review with all reviewers
      const diffs = await this.gitMergeRequestAdapter.getDiffs();

      const reviewId = await this.reviewService.initReview({
        reviewerIds: this.project.reviewers.map((r) => r.id),
        mergeRequestId,
        diffs,
      });

      // Process each reviewer in parallel
      const reviewResults = await Promise.all(
        this.project.reviewers.map((reviewer) =>
          this.processReviewer(reviewer, diffs),
        ),
      );

      // Separate successful results from errors
      const allComments: Prisma.CommentUncheckedCreateWithoutReviewInput[] = [];
      const allReviewNotes: Prisma.ReviewNoteUncheckedCreateWithoutReviewInput[] =
        [];
      const errorMessages: string[] = [];

      for (const result of reviewResults) {
        if (result.success) {
          allComments.push(...result.comments);
          allReviewNotes.push(...result.reviewNotes);
        } else {
          errorMessages.push(result.error);
        }
      }

      let status: ReviewStatus = "REVIEWED";

      if (errorMessages.length > 0) {
        status = "ERROR";
      }

      await this.reviewService.updateReview({
        data: {
          status,
          comments: { create: allComments },
          reviewNotes: { create: allReviewNotes },
        },
        where: { id: reviewId },
      });

      await this.postReviewSummary({ results: reviewResults, reviewId });
    }

    private async processReviewer(
      reviewer: ProjectForReview["reviewers"][number],
      diffs: GitMergeRequestDiffs,
    ): Promise<ReviewerResult> {
      try {
        const model = this.modelService.toModel(reviewer.aiProvider);
        const prompt = await this.promptService.createPrompt(reviewer, diffs);

        let schema = reviewSchema;
        if (reviewer.noteDefinitions.length > 0) {
          schema = schema.extend({
            notes: this.createNoteSchema(reviewer.noteDefinitions),
          });
        }

        const { object } = await generateObject({
          model: model,
          schema,
          messages: prompt,
        });

        const commentsWithReviewer: Prisma.CommentUncheckedCreateWithoutReviewInput[] =
          object.comments.map((comment) => ({
            ...comment,
            reviewerId: reviewer.id,
          }));

        const reviewNotes = this.parseResultNotes(
          object,
          reviewer.noteDefinitions,
          reviewer.id,
        );

        return {
          success: true,
          reviewer,
          comments: commentsWithReviewer,
          reviewNotes,
        };
      } catch (error) {
        console.warn(`Error processing reviewer ${reviewer.name}:`, error);

        let errorMessage: string;
        if (AISDKError.isInstance(error)) {
          errorMessage = `${error.name}: ${error.message}`;
        } else {
          errorMessage = String(error);
        }

        return {
          reviewer,
          success: false,
          error: errorMessage,
        };
      }
    }

    private async postReviewSummary({
      results,
      reviewId,
    }: {
      results: ReviewerResult[];
      reviewId: string;
    }) {
      const reviewUrl = env.appUrl + routes.review(this.project.id, reviewId);

      const messages = results
        .map((result) => ({
          reviewer: result.reviewer.name,
          message: result.success
            ? `Wrote ${result.comments.length} comments`
            : "❌ " + result.error,
        }))
        .map((r) => `${r.reviewer}: ${r.message}`)
        .join("\n\n");

      await this.gitMergeRequestAdapter.postNote({
        content: `[Yapir review completed](${reviewUrl}):\n\n` + messages,
      });
    }

    private parseResultNotes(
      review: z.infer<typeof reviewSchema>,
      notesDefinitions: NoteDefinition[],
      reviewerId: string,
    ): Prisma.ReviewNoteUncheckedCreateWithoutReviewInput[] {
      const result = noteSchema.safeParse(review);
      if (!result.success) {
        console.warn("Unable to parse review notes", result.error);
        return [];
      }

      const response = result.data.notes;
      if (!response) return [];

      const notes: Prisma.ReviewNoteUncheckedCreateWithoutReviewInput[] = [];

      notesDefinitions.forEach((def) => {
        const content = response[def.tag];
        notes.push({
          content,
          reviewerId,
          noteDefinitionId: def.id,
        });
      });

      return notes;
    }

    private createNoteSchema(notesDefinitions: NoteDefinition[]) {
      let notes = z.object({});

      notesDefinitions.forEach((def) => {
        notes = notes.extend({
          [def.tag]: z.string().describe(def.systemPrompt),
        });
      });

      return notes.describe(
        "Overall global notes. Do not relate directly to comments.",
      );
    }
  }

  export const projectForReview = {
    reviewers: {
      include: {
        noteDefinitions: true,
        aiProvider: {
          select: {
            apiKey: true,
            model: true,
            baseUrl: true,
            type: true,
            id: true,
          },
        },
      },
    },
  } as const satisfies Prisma.GitProjectSelect;

  export type ProjectForReview = Prisma.GitProjectGetPayload<{
    include: typeof projectForReview;
  }>;

  const noteSchema = z.object({
    notes: z.record(z.string()).optional(),
  });

  const reviewSchema = z.object({
    comments: z
      .array(
        z.object({
          fileId: z.string().describe("The file ID - uuid format"),
          line: z.number().describe("The line number"),
          text: z
            .string()
            .describe(
              "Markdown content, the comment to put on the PR. Give quick fix to the user if possible.",
            ),
          location: z
            .enum(["OLD", "NEW"])
            .describe(
              "If the comment is on the old or new line. Use new for current",
            ),
        }),
      )
      .describe("The list of inline comments for specific lines of code"),
    // technicalSummary: z
    //   .string()
    //   .describe(
    //     "Provide a high-level technical overview of this change from a system design perspective. Focus on the big picture: What is this change trying to accomplish? How does it fit into the larger system architecture? Are there any significant technical trade-offs or design decisions? Consider scalability, maintainability, and integration with existing systems. Avoid nitpicking individual lines of code or specific user guidelines - instead think about the overall technical approach and whether it's sound.",
    //   ),
    // generalAssessment: z
    //   .string()
    //   .describe(
    //     "Give your overall professional assessment as if you were a senior engineer reviewing this for production readiness. What's your gut feeling about this change? Any new library introduced? Does it feel well thought out and ready to ship? Are there any red flags or areas of concern from a business or user impact perspective? Consider the bigger picture: does this change align with good engineering practices and does it move the product in the right direction? Be honest about your confidence level in this implementation.",
    //   ),
  });
}
