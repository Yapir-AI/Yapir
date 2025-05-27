import type { ReviewService } from "@/lib/review/service";
import type { PromptService } from "@/lib/prompt/service";
import type { ModelService } from "@/lib/model/service";
import { AISDKError, generateObject } from "ai";
import { z } from "zod";
import type { Prisma } from "@prisma/client";
import type { GitMergeRequestAdapter } from "@/lib/git/model/GitPullRequestAdapter";
import { routes } from "@/lib/route";
import { env } from "@/lib/env";
import type { GitMergeRequestDiffs } from "@/lib/git/parsing/model/GitMergeRequestDiffs";

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
      const reviewResults = await Promise.allSettled(
        this.project.reviewers.map((reviewer) =>
          this.processReviewer(reviewer, diffs),
        ),
      );

      // Check if all reviewers succeeded
      const allSucceeded = reviewResults.every(
        (result) => result.status === "fulfilled",
      );

      const successfulResults = reviewResults.filter(
        (
          result,
        ): result is PromiseFulfilledResult<{
          comments: any[];
          reviewNotes: any[];
        }> => result.status === "fulfilled",
      );

      const allComments = successfulResults.flatMap(
        (result) => result.value.comments,
      );
      const allReviewNotes = successfulResults.flatMap(
        (result) => result.value.reviewNotes,
      );

      if (allSucceeded) {
        await this.reviewService.completeReview(
          reviewId,
          allComments,
          allReviewNotes,
        );

        // Post summary note
        const reviewerNames = this.project.reviewers
          .map((r) => r.name)
          .join(", ");
        await this.gitMergeRequestAdapter.postNote({
          content: `${reviewerNames} reviewed your code and found [${allComments.length} issue(s)](${env.appUrl + routes.review(this.project.id, reviewId)})`,
        });
      } else {
        // Collect error messages
        const errorMessages = reviewResults
          .filter(
            (result): result is PromiseRejectedResult =>
              result.status === "rejected",
          )
          .map((result) => {
            console.warn(result);
            if (AISDKError.isInstance(result.reason)) {
              return result.reason.name + ": " + result.reason.message;
            }
            return String(result.reason);
          });

        await this.reviewService.failReview(
          reviewId,
          allComments,
          errorMessages.join("; "),
          allReviewNotes,
        );
      }
    }

    async processReviewer(
      reviewer: ProjectForReview["reviewers"][number],
      diffs: GitMergeRequestDiffs,
    ) {
      const model = this.modelService.toModel(reviewer.aiProvider);
      const prompt = await this.promptService.createPrompt(reviewer, diffs);

      const { object } = await generateObject({
        model: model,
        schema: reviewSchema,
        messages: prompt,
      });

      // Add reviewerId to each comment
      const commentsWithReviewer: Prisma.CommentUncheckedCreateWithoutReviewInput[] =
        object.comments.map((comment) => ({
          ...comment,
          reviewerId: reviewer.id,
        }));

      // Create review notes
      const reviewNotes: Prisma.ReviewNoteUncheckedCreateWithoutReviewInput[] =
        [
          {
            type: "TECHNICAL_SUMMARY",
            content: object.technicalSummary,
            reviewerId: reviewer.id,
          },
          {
            type: "GENERAL_ASSESSMENT",
            content: object.generalAssessment,
            reviewerId: reviewer.id,
          },
        ];

      return { comments: commentsWithReviewer, reviewNotes };
    }
  }

  export const projectForReview = {
    reviewers: {
      include: {
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
    technicalSummary: z
      .string()
      .describe(
        "Provide a high-level technical overview of this change from a system design perspective. Focus on the big picture: What is this change trying to accomplish? How does it fit into the larger system architecture? Are there any significant technical trade-offs or design decisions? Consider scalability, maintainability, and integration with existing systems. Avoid nitpicking individual lines of code or specific user guidelines - instead think about the overall technical approach and whether it's sound.",
      ),
    generalAssessment: z
      .string()
      .describe(
        "Give your overall professional assessment as if you were a senior engineer reviewing this for production readiness. What's your gut feeling about this change? Any new library introduced? Does it feel well thought out and ready to ship? Are there any red flags or areas of concern from a business or user impact perspective? Consider the bigger picture: does this change align with good engineering practices and does it move the product in the right direction? Be honest about your confidence level in this implementation.",
      ),
  });
}
