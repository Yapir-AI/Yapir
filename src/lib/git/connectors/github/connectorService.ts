import type { Db } from "@/lib/db";
import { githubConnector } from "@/lib/db/schema";
import { eq } from "drizzle-orm/sql/expressions/conditions";
import { forbidden } from "next/navigation";

export class GithubConnectorService {
  private readonly db: Db;

  constructor(opts: { db: Db }) {
    this.db = opts.db;
  }

  async listConnectors() {
    const installations = await this.db.query.githubConnector.findMany();

    return installations.map(({ id, slug, creation_date }) => ({
      id,
      slug,
      creation_date,
    }));
  }

  async findById(id: number) {
    const app = await this.db.query.githubConnector.findFirst({
      where: eq(githubConnector.id, id),
    });

    if (!app) throw forbidden();

    return app;
  }
}

export type GithubConnectorListElement = Awaited<
  ReturnType<typeof GithubConnectorService.prototype.listConnectors>
>[number];
