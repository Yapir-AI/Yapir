import type { Db } from "@/lib/db";
import { z } from "zod";
import { ProviderType } from "@/lib/provider/model/type";
import { provider } from "@/lib/db/schema";
import type { ProviderService } from "@/lib/provider/service";

export namespace ProviderCreate {
  export class Operation {
    private readonly db: Db;
    private readonly providerService: ProviderService;

    constructor(opts: { db: Db; providerService: ProviderService }) {
      this.db = opts.db;
      this.providerService = opts.providerService;
    }

    async execute(requestDto: Schema) {
      return await this.db.transaction(async (tx) => {
        if (requestDto.enabled) {
          await this.providerService.disableAllProviders(tx);
        }
        const [{ id }] = await tx
          .insert(provider)
          .values(requestDto)
          .returning();
        return id;
      });
    }
  }

  export const schema = z.object({
    type: z.enum(ProviderType).default("anthropic").describe("Provider"),
    baseUrl: z.string().url().optional(),
    apiKey: z.string().optional(),
    model: z.string(),
    enabled: z.boolean().default(false),
  });

  export type Schema = z.infer<typeof schema>;
}
