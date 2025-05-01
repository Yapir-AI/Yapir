import type { PrismaClient } from "@prisma/client";
import { subDays } from "date-fns/subDays";

export class StatsService {
  private readonly prisma: PrismaClient;

  constructor(private readonly props: { prisma: PrismaClient }) {
    this.prisma = props.prisma;
  }

  async getProjectStats(projectId: string) {
    const now = new Date();
    const monthAgo = this.monthAgo();
    const monthBefore = this.monthBefore();

    const [
      commentCount,
      previousCommentCount,
      reviewCount,
      mergeRequestCount,
      currentThumbsUpRate,
      previousThumbsUpRate,
    ] = await Promise.all([
      this.countComments(projectId, monthAgo, now),
      this.countComments(projectId, monthBefore, monthAgo),
      this.countReviews(projectId),
      this.countMergeRequests(projectId),
      this.thumbsUpRate(projectId, monthAgo, now),
      this.thumbsUpRate(projectId, monthBefore, monthAgo),
    ]);

    const [currentCommentPerLine, previousCommentPerLine] = await Promise.all([
      this.commentPerLineChange(projectId, commentCount, monthAgo, now),
      this.commentPerLineChange(
        projectId,
        previousCommentCount,
        monthBefore,
        monthAgo,
      ),
    ]);

    return {
      commentCount,
      reviewCount,
      mergeRequestCount,
      currentThumbsUpRate,
      previousThumbsUpRate,
      currentCommentPerLine,
      previousCommentPerLine,
    };
  }

  private countComments = (projectId: string, from: Date, to: Date) =>
    this.prisma.comment.count({
      where: {
        review: { mergeRequest: { projectId } },
        createdAt: { gte: from, lte: to },
      },
    });

  private countReviews = (projectId: string) =>
    this.prisma.review.count({
      where: {
        mergeRequest: { projectId },
        at: { gt: this.monthAgo() },
      },
    });

  private countMergeRequests = (projectId: string) =>
    this.prisma.mergeRequest.count({
      where: {
        projectId,
        createdAt: { gt: this.monthAgo() },
      },
    });

  private thumbsUpRate = async (projectId: string, from: Date, to: Date) => {
    const { _sum } = await this.prisma.comment.aggregate({
      where: {
        review: { mergeRequest: { projectId } },
        createdAt: { gte: from, lte: to },
      },
      _sum: { thumbsUp: true, thumbsDown: true },
    });

    const up = _sum.thumbsUp ?? 0;
    const down = _sum.thumbsDown ?? 0;
    const total = up + down;

    return this.round(total === 0 ? 0 : (up / total) * 100);
  };

  private commentPerLineChange = async (
    projectId: string,
    commentCount: number,
    from: Date,
    to: Date,
  ) => {
    const { _sum } = await this.prisma.review.aggregate({
      where: { mergeRequest: { projectId }, at: { gte: from, lte: to } },
      _sum: { addedLines: true, removedLines: true },
    });

    const changedLines = (_sum.addedLines ?? 0) + (_sum.removedLines ?? 0);
    if (changedLines === 0) return 0;

    console.log(
      "Found changed lines: ",
      changedLines,
      " for ",
      commentCount,
      " comments. In period: ",
      from,
      " to ",
      to,
      "",
    );

    return this.round((commentCount / changedLines) * 100);
  };

  private monthAgo = () => subDays(new Date(), 30);
  private monthBefore = () => subDays(new Date(), 60);
  private round = (value: number) => Number(value.toFixed(1));
}

export type ProjectStats = Awaited<
  ReturnType<typeof StatsService.prototype.getProjectStats>
>;
