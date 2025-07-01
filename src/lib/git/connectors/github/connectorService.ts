import type { YapirPrismaClient } from "@/lib/db";
import { githubConfigSchema } from "@/lib/git/connectors/github/model/githubConfigSchema";

export class GithubConnectorService {
  private readonly prisma: YapirPrismaClient;

  constructor(opts: { prisma: YapirPrismaClient }) {
    this.prisma = opts.prisma;
  }

  async listConnectors() {
    const installations = await this.prisma.gitConnector.findMany({
      where: { type: "GITHUB" },
    });

    return installations.map(({ id, createdAt, config }) => {
      const { slug, id: originId } = githubConfigSchema.parse(
        JSON.parse(config),
      );

      return {
        id,
        createdAt,
        slug,
        originId,
      };
    });
  }

  async findById(id: string) {
    const connector = await this.prisma.gitConnector.findUniqueOrThrow({
      where: { id },
    });
    return {
      ...connector,
      ...githubConfigSchema.parse(JSON.parse(connector.config)),
    };
  }
}

export type GithubConnectorListElement = Awaited<
  ReturnType<typeof GithubConnectorService.prototype.listConnectors>
>[number];
