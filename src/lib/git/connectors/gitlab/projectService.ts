import type { WebhookMergeRequestEventSchema } from "@gitbeaker/core";
import { PrismaClient } from "@prisma/client";
import { gitProjectWithReviewersAndProviders } from "@/lib/git/types";

export class GitlabProjectService {
  private readonly prisma: PrismaClient;

  constructor({ prisma }: { prisma: PrismaClient }) {
    this.prisma = prisma;
  }

  async getOrInitProject({ project }: WebhookMergeRequestEventSchema) {
    const url = project.web_url;
    const existingProject = await this.prisma.gitProject.findFirst({
      where: {
        url: url,
        providerType: "GITLAB",
      },
      include: gitProjectWithReviewersAndProviders,
    });

    if (existingProject) return existingProject;

    return this.prisma.gitProject.create({
      data: {
        originId: project.id.toString(),
        url,
        name: project.name,
        fullName: project.path_with_namespace,
        providerType: "GITLAB",
      },
      include: gitProjectWithReviewersAndProviders,
    });
  }
}
