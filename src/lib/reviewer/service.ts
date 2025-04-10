import { Prisma, PrismaClient } from "@prisma/client";

export class ReviewerService {
  private readonly prisma: PrismaClient;

  constructor({ prisma }: { prisma: PrismaClient }) {
    this.prisma = prisma;
  }

  findById<S extends Prisma.ReviewerInclude>(id: string, include: S) {
    return this.prisma.reviewer.findUniqueOrThrow({
      where: { id },
      include,
    });
  }

  listReviewers() {
    return this.prisma.reviewer.findMany({
      include: {
        aiProvider: {
          omit: { apiKey: true },
        },
      },
    });
  }
}

export type ReviewerListElement = Awaited<
  ReturnType<typeof ReviewerService.prototype.listReviewers>
>[number];
