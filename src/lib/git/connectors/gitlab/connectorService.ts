import type { gitlabAuthResponseSchema } from "@/lib/git/connectors/gitlab/model/authResponseSchema";
import { z } from "zod";
import type { YapirPrismaClient } from "@/lib/db";

export class GitlabConnectorService {
  private readonly prisma: YapirPrismaClient;

  constructor(opts: { prisma: YapirPrismaClient }) {
    this.prisma = opts.prisma;
  }

  async listConnectors() {
    const installations = await this.prisma.gitConnector.findMany({
      where: { type: "GITLAB" },
    });

    return installations.map(({ id, createdAt, config }) => ({
      id,
      createdAt,
      ...safeSchema.parse(JSON.parse(config)),
    }));
  }

  async updateToken(
    connectorId: string,
    {
      access_token,
      expires_in,
      refresh_token,
    }: z.infer<typeof gitlabAuthResponseSchema>,
  ) {
    const expiresAt = Math.floor(Date.now() / 1000) + expires_in;

    const connector = await this.prisma.gitConnector.findUniqueOrThrow({
      where: { id: connectorId },
    });

    const config = gitlabConnectorConfigSchema.parse(
      JSON.parse(connector.config),
    );
    config.accessToken = access_token;
    config.expiresAt = new Date(expiresAt * 1000);
    config.refreshToken = refresh_token;

    await this.prisma.gitConnector.update({
      data: { config: JSON.stringify(config) },
      where: { id: connectorId },
    });
    return config;
  }

  async findById(id: string) {
    const connector = await this.prisma.gitConnector.findUniqueOrThrow({
      where: { id },
    });

    return {
      ...connector,
      ...gitlabConnectorConfigSchema.parse(JSON.parse(connector.config)),
    };
  }
}

export type GitLabConnectorListElement = Awaited<
  ReturnType<typeof GitlabConnectorService.prototype.listConnectors>
>[number];

export type GitlabConnectorConfig = z.infer<typeof gitlabConnectorConfigSchema>;
export type GitlabConnector = Awaited<
  ReturnType<typeof GitlabConnectorService.prototype.findById>
>;

export const gitlabConnectorConfigSchema = z.object({
  url: z.string(),
  applicationId: z.string(),
  applicationSecret: z.string(),
  displayName: z.string(),
  accessToken: z.string().optional(),
  refreshToken: z.string().optional(),
  expiresAt: z.coerce.date().optional(),
  groupName: z.string().optional(),
  redirectUri: z.string(),
});

const safeSchema = gitlabConnectorConfigSchema
  .omit({ applicationSecret: true, refreshToken: true })
  .transform((i) => ({ ...i, accessToken: undefined, ready: !!i.accessToken }));
