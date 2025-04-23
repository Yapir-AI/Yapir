import { Prisma, PrismaClient } from "@prisma/client";
import { startOfYesterday } from "date-fns/startOfYesterday";
import {
  gitMergeRequestDiffs,
  type GitMergeRequestDiffs,
} from "@/lib/git/parsing/model/GitMergeRequestDiffs";

export class ReviewService {
  private readonly prisma: PrismaClient;

  constructor(opts: { prisma: PrismaClient }) {
    this.prisma = opts.prisma;
  }

  async findById<T extends Prisma.ReviewInclude>(id: string, include: T) {
    const r = await this.prisma.review.findUniqueOrThrow({
      where: { id },
      include,
    });
    return { ...r, diffs: gitMergeRequestDiffs(r.diffs) };
  }

  listReviews() {
    return this.prisma.review.findMany({
      include: {
        reviewer: {},
      },
      where: {
        at: {
          gte: startOfYesterday(),
        },
      },
      orderBy: [{ at: "desc" }],
    });
  }

  async initReview({
    reviewerId,
    diffs,
    mergeRequestId,
  }: {
    reviewerId: string;
    mergeRequestId: string;
    diffs: GitMergeRequestDiffs;
  }) {
    const { id } = await this.prisma.review.create({
      data: {
        diffs: JSON.parse(JSON.stringify(diffs)),
        status: "PENDING",
        reviewerId,
        mergeRequestId,
      },
    });

    return id;
  }

  async completeReview(
    reviewId: string,
    comments: Prisma.CommentCreateWithoutReviewInput[],
  ) {
    return this.prisma.review.update({
      data: {
        status: "REVIEWED",
        comments: { create: comments },
      },
      where: { id: reviewId },
    });
  }

  async failReview(reviewId: string, message?: string) {
    return this.prisma.review.update({
      data: { status: "ERROR", errorMessage: message },
      where: { id: reviewId },
    });
  }
}

export type ReviewListElement = Awaited<
  ReturnType<typeof ReviewService.prototype.listReviews>
>[number];
