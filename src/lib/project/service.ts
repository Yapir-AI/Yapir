import { z } from "zod";
import { PrismaClient } from "@prisma/client";

export class ProjectService {
  private readonly prisma: PrismaClient;

  constructor({ prisma }: { prisma: PrismaClient }) {
    this.prisma = prisma;
  }

  listProjects() {
    return this.prisma.gitProject.findMany();
  }

  async findById(id: string) {
    return this.prisma.gitProject.findUniqueOrThrow({
      where: {
        id: id,
      },
      include: {
        reviewers: {
          include: { aiProvider: { omit: { apiKey: true } } },
        },
      },
    });
  }

  async toggleProjectReviewer({
    projectId,
    reviewerId,
    enable,
  }: ToggleProviderSchema) {
    if (enable) {
      await this.prisma.gitProject.update({
        where: { id: projectId },
        data: {
          reviewers: {
            connect: [{ id: reviewerId }],
          },
        },
      });

      return;
    }

    await this.prisma.gitProject.update({
      where: { id: projectId },
      data: {
        reviewers: {
          disconnect: [{ id: reviewerId }],
        },
      },
    });
  }
}

export type ProjectListElement = Awaited<
  ReturnType<typeof ProjectService.prototype.listProjects>
>[number];

export const toggleProjectReviewerSchema = z.object({
  projectId: z.string().uuid(),
  reviewerId: z.string().uuid(),
  enable: z.boolean(),
});
type ToggleProviderSchema = z.infer<typeof toggleProjectReviewerSchema>;
