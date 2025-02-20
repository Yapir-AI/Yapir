import { z } from "zod";
import type { ProviderService } from "@/lib/provider/service";
import { AiProviderType, PrismaClient } from "@prisma/client";

export namespace ProviderCreate {
  export class Operation {
    private readonly prisma: PrismaClient;
    private readonly providerService: ProviderService;

    constructor(opts: {
      prisma: PrismaClient;
      providerService: ProviderService;
    }) {
      this.prisma = opts.prisma;
      this.providerService = opts.providerService;
    }

    execute = (requestDto: Schema) =>
      this.prisma.$transaction(async (tx) => {
        if (requestDto.enabled) {
          await this.providerService.disableAllProviders(tx);
        }
        const { id } = await tx.aiProvider.create({ data: requestDto });
        return id;
      });
  }

  export const schema = z.object({
    type: z
      .enum(
        Object.values(AiProviderType) as [AiProviderType, ...AiProviderType[]],
      )
      .default("ANTHROPIC")
      .describe("Provider"),
    baseUrl: z.string().url().optional(),
    apiKey: z.string().optional(),
    model: z.string(),
    enabled: z.boolean().default(false),
  });

  export type Schema = z.infer<typeof schema>;
}
