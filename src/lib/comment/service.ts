import type { YapirPrismaClient } from "@/lib/db";
import type { CommentReview } from "@/lib/comment/schema";

export class CommentService {
  private readonly prisma: YapirPrismaClient;

  constructor(opts: { prisma: YapirPrismaClient }) {
    this.prisma = opts.prisma;
  }

  async reviewComment(commentReview: CommentReview) {
    await this.prisma.comment.update({
      where: {
        id: commentReview.id,
      },
      data: {
        thumbsUp: commentReview.action === "UP" ? 1 : 0,
        thumbsDown: commentReview.action === "DOWN" ? 1 : 0,
      },
    });
  }
}
