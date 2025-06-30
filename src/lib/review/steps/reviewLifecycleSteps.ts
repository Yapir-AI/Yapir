import type { FetchDiffStepOutput } from "@/lib/review/steps/fetchDiffStep";
import type { ReviewService } from "@/lib/review/service";
import type {
  ProcessReviewersOutput,
  ReviewOperationInput,
} from "@/lib/review/operation";
import { Prisma, type ReviewStatus } from "@/generated/prisma/client";
import type { ProjectForReview } from "@/lib/review/types";

type InitReviewStepInput = FetchDiffStepOutput & ReviewOperationInput;
export type InitReviewStepOutput = { reviewId: string };

type UpdateReviewStepInput = InitReviewStepOutput & ProcessReviewersOutput;

export class ReviewLifecycleSteps {
  private readonly reviewService: ReviewService;
  private readonly project: ProjectForReview;

  constructor(opts: {
    reviewService: ReviewService;
    project: ProjectForReview;
  }) {
    this.reviewService = opts.reviewService;
    this.project = opts.project;
  }

  init = async (
    context: InitReviewStepInput,
  ): Promise<InitReviewStepOutput> => {
    const { mergeRequestId, diffs } = context;

    const reviewId = await this.reviewService.initReview({
      reviewerIds: this.project.reviewers.map((r) => r.id),
      mergeRequestId,
      diffs: diffs,
    });

    return { reviewId };
  };

  update = async ({ reviewId, reviews }: UpdateReviewStepInput) => {
    let status: ReviewStatus = "REVIEWED";
    if (reviews.some((r) => !r.output.success)) status = "ERROR";

    const comments = reviews.flatMap(this.toDbComment);

    await this.reviewService.updateReview({
      data: {
        status,
        comments: {
          create: comments,
        },
      },
      where: { id: reviewId },
    });
  };

  private toDbComment({
    reviewer,
    output,
  }: ProcessReviewersOutput["reviews"][number]) {
    if (!output.success) return [];

    return output.comments.map(
      (c): Prisma.CommentUncheckedCreateWithoutReviewInput => ({
        location: c.location,
        fileId: c.fileId,
        line: c.line,
        text: c.text,
        reviewerId: reviewer.id,
      }),
    );
  }
}
