import { z } from "zod";
import { AiProviderType, PrismaClient } from "@/generated/prisma/client";

export namespace ProviderCreate {
  export class Operation {
    private readonly prisma: PrismaClient;

    constructor(opts: { prisma: PrismaClient }) {
      this.prisma = opts.prisma;
    }

    execute = (requestDto: Schema) =>
      this.prisma.aiProvider.create({ data: requestDto });
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
  });

  export type Schema = z.infer<typeof schema>;
}
