import type { gitlabAuthResponseSchema } from "@/lib/git/connectors/gitlab/model/authResponseSchema";
import { z } from "zod";
import { notFound } from "next/navigation";
import { PrismaClient } from "@prisma/client";

export class GitlabConnectorService {
  private readonly prisma: PrismaClient;

  constructor(opts: { prisma: PrismaClient }) {
    this.prisma = opts.prisma;
  }

  async listConnectors() {
    const installations = await this.prisma.gitlabConnector.findMany();

    return installations.map(
      ({ id, displayName, creationDate, url, applicationId, accessToken }) => ({
        id,
        displayName,
        applicationId,
        creationDate,
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

    await this.prisma.gitlabConnector.update({
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
