import type { gitlabAuthResponseSchema } from "@/lib/git/connectors/gitlab/model/authResponseSchema";
import { z } from "zod";
import { notFound } from "next/navigation";
import type { YapirPrismaClient } from "@/lib/db";

export class GitlabConnectorService {
  private readonly prisma: YapirPrismaClient;

  constructor(opts: { prisma: YapirPrismaClient }) {
    this.prisma = opts.prisma;
  }

  async listConnectors() {
    const installations = await this.prisma.gitlabConnector.findMany({
      select: {
        accessToken: true,
        id: true,
        displayName: true,
        createdAt: true,
        url: true,
        applicationId: true,
      },
    });

    return installations.map(
      ({ id, displayName, createdAt, url, applicationId, accessToken }) => ({
        id,
        displayName,
        applicationId,
        createdAt,
        url,
        ready: !!accessToken,
      }),
    );
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

    return this.prisma.gitlabConnector.update({
      data: {
        accessToken: access_token,
        expiresAt: new Date(expiresAt * 1000),
        refreshToken: refresh_token,
      },
      where: { id: connectorId },
    });
  }

  async findById(id: string) {
    const connector = await this.prisma.gitlabConnector.findUniqueOrThrow({
      where: { id },
    });

    if (!connector) throw notFound();

    return connector;
  }
}

export type GitLabConnectorListElement = Awaited<
  ReturnType<typeof GitlabConnectorService.prototype.listConnectors>
>[number];
