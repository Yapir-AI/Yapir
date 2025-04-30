import { z } from "zod";
import { Prisma, PrismaClient } from "@prisma/client";

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

  async findOrCreate<T extends Prisma.GitProjectInclude>({
    create,
    include,
  }: {
    create: Prisma.GitProjectCreateInput;
    include: T;
  }) {
    return this.prisma.gitProject.upsert({
      where: {
        originId_connectorId: {
          originId: create.originId,
          connectorId: create.connector.connect!.id!,
        },
      },
      create,
      update: {},
      include,
    });
  }

  async toggleProjectReviewer({
    projectId,
    reviewerId,
    enable,
  }: ToggleProviderSchema) {
    await this.prisma.gitProject.update({
      where: { id: projectId },
      data: {
        reviewers: enable
          ? { connect: [{ id: reviewerId }] }
          : { disconnect: [{ id: reviewerId }] },
      },
    });
  }

  async toggleDraft({ projectId, ignore }: ToggleDraftSchema) {
    await this.prisma.gitProject.update({
      where: { id: projectId },
      data: {
        ignoreDraft: ignore,
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

export const toggleDraftSchema = z.object({
  projectId: z.string().uuid(),
  ignore: z.boolean(),
});
type ToggleDraftSchema = z.infer<typeof toggleDraftSchema>;
