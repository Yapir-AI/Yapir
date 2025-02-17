import { createInsertSchema } from "drizzle-zod";
import { gitlabConnector } from "@/lib/db/schema";
import { z } from "zod";
import type { Db } from "@/lib/db";

export namespace GitlabConnectorCreate {
  export class Operation {
    private readonly db: Db;

    constructor(opts: { db: Db }) {
      this.db = opts.db;
    }

    async execute(request: Schema) {
      await this.db.insert(gitlabConnector).values(request);
    }
  }

  export const schema = createInsertSchema(gitlabConnector, {
    url: z.string().describe("GitLab URL").default("https://gitlab.com"),
  });

  export type Schema = z.infer<typeof schema>;
}
