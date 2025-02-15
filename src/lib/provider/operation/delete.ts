import type { Db } from "@/lib/db";
import { provider } from "@/lib/db/schema";
import { eq } from "drizzle-orm/sql/expressions/conditions";

export namespace ProviderDelete {
  export class Operation {
    private readonly db: Db;

    constructor(opts: { db: Db }) {
      this.db = opts.db;
    }

    async execute(id: string) {
      await this.db.delete(provider).where(eq(provider.id, id));
    }

    async greet(id: string) {
      console.log(`hello ${id}`);
    }
  }
}
