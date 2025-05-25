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
      const allComments = reviewResults
        .filter((result) => result.status === "fulfilled")
        .flatMap((result) => result.value);

      if (allSucceeded) {
        await this.reviewService.completeReview(reviewId, allComments);

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
            if (AISDKError.isInstance(result.reason)) {
              return result.reason.name + ": " + result.reason.message;
            }
            return String(result.reason);
          });

        await this.reviewService.failReview(
          reviewId,
          allComments,
          errorMessages.join("; "),
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

      return commentsWithReviewer;
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
          fileId: z.string().uuid().describe("The file ID"),
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
      .describe("The list of comments"),
  });
}
