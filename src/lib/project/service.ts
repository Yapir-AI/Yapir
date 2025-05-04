import { z } from "zod";
import { Prisma, PrismaClient } from "@prisma/client";

export class ProjectService {
  private readonly prisma: PrismaClient;

  constructor({ prisma }: { prisma: PrismaClient }) {
    this.prisma = prisma;
  }

  get listProjects() {
    return this.prisma.gitProject.findMany;
  }

  async findById(id: string) {
    return this.prisma.gitProject.findUniqueOrThrow({ where: { id } });
  }

  async findByIdIncluding<T extends Prisma.GitProjectInclude>(
    id: string,
    include: T,
  ) {
    return this.prisma.gitProject.findUniqueOrThrow({ where: { id }, include });
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

  async updateIgnoreSettings({
    projectId,
    ignore,
    ignoreList,
    ignorePattern,
  }: UpdateIgnoreSchema) {
    await this.prisma.gitProject.update({
      where: { id: projectId },
      data: {
        ignoreDraft: ignore,
        ignoreList,
        ignorePattern,
      },
    });
  }
}

export type ProjectPage = Awaited<
  ReturnType<typeof ProjectService.prototype.listProjects>
>;

export type ProjectListElement = ProjectPage[number];

export const toggleProjectReviewerSchema = z.object({
  projectId: z.string().uuid(),
  reviewerId: z.string().uuid(),
  enable: z.boolean(),
});
type ToggleProviderSchema = z.infer<typeof toggleProjectReviewerSchema>;

export const updateIgnoreSchema = z.object({
  projectId: z.string().uuid(),
  ignore: z.boolean().optional(),
  ignoreList: z.string().optional(),
  ignorePattern: z.string().optional(),
});
type UpdateIgnoreSchema = z.infer<typeof updateIgnoreSchema>;
