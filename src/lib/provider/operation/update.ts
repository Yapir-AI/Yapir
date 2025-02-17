import type { Db } from "@/lib/db";
import { z } from "zod";
import { provider } from "@/lib/db/schema";
import type { ProviderService } from "@/lib/provider/service";
import { ProviderCreate } from "@/lib/provider/operation/create";
import { eq } from "drizzle-orm/sql/expressions/conditions";

export namespace ProviderUpdate {
  export class Operation {
    private readonly db: Db;
    private readonly providerService: ProviderService;

    constructor(opts: { db: Db; providerService: ProviderService }) {
      this.db = opts.db;
      this.providerService = opts.providerService;
    }

    async execute(id: string, requestDto: Schema) {
      return await this.db.transaction(async (tx) => {
        if (requestDto.enabled) {
          await this.providerService.disableAllProviders(tx);
        }
        await tx.update(provider).set(requestDto).where(eq(provider.id, id));
        return id;
      });
    }
  }

  export const schema = ProviderCreate.schema.partial();

  export type Schema = z.infer<typeof schema>;
}
