import type { CoreMessage } from "ai";
import type { GitReviewInfo } from "@/lib/git/model/pullRequestAdapter";
import { PrismaClient } from "@prisma/client";
import type { InputJsonArray } from "@prisma/client/runtime/client";

export class ReviewService {
  private readonly prisma: PrismaClient;

  constructor(opts: { prisma: PrismaClient }) {
    this.prisma = opts.prisma;
  }

  listReviews() {
    return this.prisma.review.findMany({
      take: 10,
      include: {
        project: true,
        reviewer: true,
      },
      orderBy: [{ at: "desc" }],
    });
  }

  async initReview({
    reviewerId,
    projectId,
    messages,
    reviewInfo,
  }: {
    reviewerId: string;
    projectId: string;
    messages: CoreMessage[];
    reviewInfo: GitReviewInfo;
  }) {
    const { id } = await this.prisma.review.create({
      data: {
        messages: messages as InputJsonArray,
        pullNumber: reviewInfo.pullNumber,
        pullUrl: reviewInfo.pullUrl,
        pullName: reviewInfo.pullName,
        reviewerId,
        projectId,
      },
    });

    return id;
  }

  async completeReview(reviewId: string, object: any, messages: CoreMessage[]) {
    return this.prisma.review.update({
      data: {
        status: "REVIEWED",
        messages: [
          ...messages,
          { role: "assistant", content: JSON.stringify(object) },
        ] as InputJsonArray,
      },
      where: { id: reviewId },
    });
  }

  async failReview(reviewId: string) {
    return this.prisma.review.update({
      data: { status: "ERROR" },
      where: { id: reviewId },
    });
  }
}
