import { z } from "zod";
import type { Db } from "@/lib/db";
import { reviewer } from "@/lib/db/schema";

export namespace ReviewerCreate {
  export class Operation {
    private readonly db: Db;

    constructor({ db }: { db: Db }) {
      this.db = db;
    }

    async execute(request: Schema) {
      const [{ id }] = await this.db
        .insert(reviewer)
        .values(request)
        .returning();

      return id;
    }
  }

  export const schema = z.object({
    name: z.string(),
    providerId: z.string().uuid().describe("Provider"),
    // overrides: z
    //   .object({
    //     systemPrompt: z.string().optional(),
    //   })
    //   .optional(),
  });

  export type Schema = z.infer<typeof schema>;
}
