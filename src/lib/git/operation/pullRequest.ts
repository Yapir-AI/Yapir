import type { ReviewService } from "@/lib/review/service";
import type { PromptService } from "@/lib/prompt/service";
import type { ModelService } from "@/lib/model/service";
import { AISDKError, generateObject } from "ai";
import { z } from "zod";
import type { Prisma } from "@prisma/client";
import type { GitMergeRequestAdapter } from "@/lib/git/model/GitPullRequestAdapter";
import { routes } from "@/lib/route";
import { env } from "@/lib/env";

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
      await Promise.all(
        this.project.reviewers.map((reviewer) =>
          this.review(reviewer, mergeRequestId),
        ),
      );
    }

    async review(
      reviewer: ProjectForReview["reviewers"][number],
      mergeRequestId: string,
    ) {
      const diffs = await this.gitMergeRequestAdapter.getDiffs();
      const model = this.modelService.toModel(reviewer.aiProvider);
      const prompt = await this.promptService.createPrompt(reviewer, diffs);

      const reviewId = await this.reviewService.initReview({
        reviewerId: reviewer.id,
        mergeRequestId,
        diffs,
      });

      try {
        const { object } = await generateObject({
          model: model,
          schema: reviewSchema,
          messages: prompt,
        });

        const { comments } = object;

        await this.gitMergeRequestAdapter.postNote({
          content: `${reviewer.name} just [reviewed your code](${env.appUrl + routes.review(this.project.id, reviewId)}).`,
        });
        await this.reviewService.completeReview(reviewId, comments);
      } catch (e) {
        let message: string | undefined;
        if (AISDKError.isInstance(e)) message = e.name + ": " + e.message;
        await this.reviewService.failReview(reviewId, message);
        throw e;
      }
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
