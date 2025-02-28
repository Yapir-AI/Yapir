import { z } from "zod";
import type { ProviderService } from "@/lib/provider/service";
import { ProviderCreate } from "@/lib/provider/operation/create";
import { PrismaClient } from "@prisma/client";

export namespace ProviderUpdate {
  export class Operation {
    private readonly prisma: PrismaClient;

    constructor(opts: {
      prisma: PrismaClient;
      providerService: ProviderService;
    }) {
      this.prisma = opts.prisma;
    }

    async execute(id: string, requestDto: Schema) {
      return this.prisma.aiProvider.update({
        data: requestDto,
        where: { id: id },
      });
    }
  }

  export const schema = ProviderCreate.schema.partial();

  export type Schema = z.infer<typeof schema>;
}
