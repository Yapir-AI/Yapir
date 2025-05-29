import { Prisma, PrismaClient } from "@prisma/client";
import {
  gitMergeRequestDiffs,
  type GitMergeRequestDiffs,
} from "@/lib/git/parsing/model/GitMergeRequestDiffs";

export class ReviewService {
  private readonly prisma: PrismaClient;

  constructor(opts: { prisma: PrismaClient }) {
    this.prisma = opts.prisma;
  }

  get listReviews() {
    return this.prisma.review.findMany;
  }

  async findById<T extends Prisma.ReviewInclude>(id: string, include: T) {
    const r = await this.prisma.review.findUniqueOrThrow({
      where: { id },
      include,
    });
    return { ...r, diffs: gitMergeRequestDiffs(r.diffs) };
  }

  async initReview({
    reviewerIds,
    diffs,
    mergeRequestId,
  }: {
    reviewerIds: string[];
    mergeRequestId: string;
    diffs: GitMergeRequestDiffs;
  }) {
    const { added, removed } = diffs.getChangedLines();

    const { id } = await this.prisma.review.create({
      data: {
        diffs: JSON.parse(JSON.stringify(diffs)),
        addedLines: added,
        removedLines: removed,
        status: "PENDING",
        mergeRequestId,
        reviewers: {
          connect: reviewerIds.map((id) => ({ id })),
        },
      },
    });

    return id;
  }

  get updateReview() {
    return this.prisma.review.update;
  }

  async completeReview(
    reviewId: string,
    comments: Prisma.CommentUncheckedCreateWithoutReviewInput[],
    reviewNotes?: Prisma.ReviewNoteUncheckedCreateWithoutReviewInput[],
  ) {
    return this.prisma.review.update({
      data: {
        status: "REVIEWED",
        comments: {
          create: comments,
        },
        ...(reviewNotes && {
          reviewNotes: {
            create: reviewNotes,
          },
        }),
      },
      where: { id: reviewId },
    });
  }

  async failReview(
    reviewId: string,
    comments: Prisma.CommentUncheckedCreateWithoutReviewInput[],
    message?: string,
    reviewNotes?: Prisma.ReviewNoteUncheckedCreateWithoutReviewInput[],
  ) {
    return this.prisma.review.update({
      data: {
        status: "ERROR",
        errorMessage: message,
        comments: { create: comments },
        ...(reviewNotes && {
          reviewNotes: {
            create: reviewNotes,
          },
        }),
      },
      where: { id: reviewId },
    });
  }
}
