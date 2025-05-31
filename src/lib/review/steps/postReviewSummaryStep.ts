import type { GitMergeRequestAdapter } from "@/lib/git/model/GitPullRequestAdapter";
import type { ProcessReviewersOutput } from "@/lib/review/operation";
import { routes } from "@/lib/route";
import { env } from "@/lib/env";
import type { InitReviewStepOutput } from "@/lib/review/steps/reviewLifecycleSteps";
import type { ProjectForReview } from "@/lib/review/types";

type PostReviewSummaryStepInput = ProcessReviewersOutput & InitReviewStepOutput;

export class PostReviewSummaryStep {
  private readonly gitMergeRequestAdapter: GitMergeRequestAdapter;
  private readonly project: ProjectForReview;

  constructor(opts: {
    gitMergeRequestAdapter: GitMergeRequestAdapter;
    project: ProjectForReview;
  }) {
    this.gitMergeRequestAdapter = opts.gitMergeRequestAdapter;
    this.project = opts.project;
  }

  postReviewSummary = async (context: PostReviewSummaryStepInput) => {
    const { reviews, reviewId } = context;
    const reviewUrl = env.appUrl + routes.review(this.project.id, reviewId);

    const messages = reviews
      .map(({ reviewer, output }) => ({
        reviewer: reviewer.name,
        message: output.success
          ? `${output.comments.length} comments`
          : "❌ " + output.errorMessage,
        summary: output.success ? output.summary : undefined,
      }))
      .map(
        (r) =>
          `**${r.reviewer}** - ${r.message}` +
          (r.summary ? `\n>${r.summary}` : ""),
      )
      .join("\n\n");

    await this.gitMergeRequestAdapter.postNote({
      content:
        `## Yapir review\n\n` +
        messages +
        `\n\n[see complete review](${reviewUrl})`,
    });

    return { posted: true };
  };
}
