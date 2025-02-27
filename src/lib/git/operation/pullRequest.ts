import type { GitPullRequestAdapter } from "@/lib/git/model/pullRequestAdapter";
import type { ReviewService } from "@/lib/review/service";
import type { PromptService } from "@/lib/prompt/service";
import type { ModelService } from "@/lib/model/service";
import { AISDKError, generateObject } from "ai";
import { z } from "zod";
import type { GitProjectWithReviewersAndProviders } from "@/lib/git/types";
import type { ReviewerWithProvider } from "@/lib/reviewer/types";

export namespace PullRequestHandle {
  export class Operation {
    private readonly reviewService: ReviewService;
    private readonly promptService: PromptService;
    private readonly modelService: ModelService;

    constructor(opts: {
      reviewService: ReviewService;
      promptService: PromptService;
      modelService: ModelService;
    }) {
      this.reviewService = opts.reviewService;
      this.promptService = opts.promptService;
      this.modelService = opts.modelService;
    }

    async execute(
      gitAdapter: GitPullRequestAdapter,
      project: GitProjectWithReviewersAndProviders,
    ) {
      await Promise.all(
        project.reviewers.map((reviewer) =>
          this.review(project.id, gitAdapter, reviewer),
        ),
      );
    }

    async review(
      projectId: string,
      gitAdapter: GitPullRequestAdapter,
      reviewer: ReviewerWithProvider,
    ) {
      const model = this.modelService.toModel(reviewer.aiProvider);
      const prompt = await this.promptService.createPrompt(gitAdapter);

      const reviewId = await this.reviewService.initReview({
        reviewerId: reviewer.id,
        projectId: projectId,
        messages: prompt,
        reviewInfo: await gitAdapter.getReviewInformation(),
      });

      try {
        const { object } = await generateObject({
          model: model,
          schema: reviewSchema,
          messages: prompt,
        });

        const { brokenRequirements: comments } = object;

        await gitAdapter.createReview(
          `Yapir Review with ${model.modelId} \n found ${comments?.length ?? 0} issues`,
          comments.map((c) => ({ ...c, body: `${reviewer.name}:\n${c.body}` })),
        );
        await this.reviewService.completeReview(reviewId, object, prompt);
      } catch (e) {
        let message: string | undefined;
        if (AISDKError.isInstance(e)) message = e.name + ": " + e.message;
        await this.reviewService.failReview(reviewId, message);
        throw e;
      }
    }
  }

  const reviewSchema = z.object({
    brokenRequirements: z
      .array(
        z.object({
          path: z.string().describe("file path"),
          line: z.number().describe("The line number"),
          body: z
            .string()
            .describe(
              "Markdown content, the comment to put on the PR. Give quick fix to the user if possible.",
            ),
        }),
      )
      .describe("The list of violations"),
  });
}
