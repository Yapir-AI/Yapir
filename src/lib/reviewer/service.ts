import { Prisma, PrismaClient } from "@prisma/client";
import type { YapirPrismaClient } from "@/lib/db";

export class ReviewerService {
  private readonly prisma: YapirPrismaClient;

  constructor({ prisma }: { prisma: PrismaClient }) {
    this.prisma = prisma;
  }

  findById<S extends Prisma.ReviewerInclude>(id: string, include: S) {
    return this.prisma.reviewer.findUniqueOrThrow({
      where: { id },
      include,
    });
  }

  listReviewers({
    excludedIds,
    search,
  }: { excludedIds?: string[]; search?: string } = {}) {
    return this.prisma.reviewer.findMany({
      where: {
        id: {
          notIn: excludedIds,
        },
        name: {
          mode: "insensitive",
          contains: search,
        },
      },
      include: {
        aiProvider: {
          omit: { apiKey: true },
        },
      },
    });
  }
}

export type ReviewersList = Awaited<
  ReturnType<typeof ReviewerService.prototype.listReviewers>
>;

export type ReviewerListElement = ReviewersList[number];
