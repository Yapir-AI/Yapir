import { db, type Db } from "@/lib/db";
import type { gitlabAuthResponseSchema } from "@/lib/git/connectors/gitlab/model/authResponseSchema";
import { z } from "zod";
import { gitlabConnector } from "@/lib/db/schema";
import { eq } from "drizzle-orm/sql/expressions/conditions";
import { notFound } from "next/navigation";

export class GitlabConnectorService {
  private readonly db: Db;

  constructor(opts: { db: Db }) {
    this.db = opts.db;
  }

  async listConnectors() {
    const installations = await this.db.query.gitlabConnector.findMany();

    return installations.map(
      ({
        id,
        displayName,
        creation_date,
        url,
        applicationId,
        accessToken,
      }) => ({
        id,
        displayName,
        applicationId,
        creation_date,
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

    await this.db
      .update(gitlabConnector)
      .set({
        accessToken: access_token,
        expiresAt: new Date(expiresAt * 1000),
        refreshToken: refresh_token,
      })
      .where(eq(gitlabConnector.id, connectorId));
  }

  async findById(id: string) {
    const connector = await db.query.gitlabConnector.findFirst({
      where: eq(gitlabConnector.id, id),
    });

    if (!connector) throw notFound();

    return connector;
  }
}

export type GitLabConnectorListElement = Awaited<
  ReturnType<typeof GitlabConnectorService.prototype.listConnectors>
>[number];
