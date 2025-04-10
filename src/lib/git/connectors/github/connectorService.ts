import { forbidden } from "next/navigation";
import { PrismaClient } from "@prisma/client";

export class GithubConnectorService {
  private readonly prisma: PrismaClient;

  constructor(opts: { prisma: PrismaClient }) {
    this.prisma = opts.prisma;
  }

  async listConnectors() {
    const installations = await this.prisma.githubConnector.findMany();

    return installations.map(({ id, slug, createdAt }) => ({
      id,
      slug,
      createdAt,
    }));
  }

  async findById(id: number) {
    const app = await this.prisma.githubConnector.findUniqueOrThrow({
      where: { id },
    });

    if (!app) throw forbidden();

    return app;
  }
}

export type GithubConnectorListElement = Awaited<
  ReturnType<typeof GithubConnectorService.prototype.listConnectors>
>[number];
