import { PrismaClient } from "@prisma/client";
import { reviewerWithProvider } from "@/lib/reviewer/types";

export class ReviewerService {
  private readonly prisma: PrismaClient;

  constructor({ prisma }: { prisma: PrismaClient }) {
    this.prisma = prisma;
  }

  getProjectReviewers(projectId: string) {
    return this.prisma.reviewer.findMany({
      where: {
        projects: {
          some: { id: projectId },
        },
      },
    });
  }

  findById(id: string) {
    return this.prisma.reviewer.findUniqueOrThrow({
      where: { id },
      include: reviewerWithProvider,
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
