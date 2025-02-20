import { z } from "zod";
import type { ProviderService } from "@/lib/provider/service";
import { ProviderCreate } from "@/lib/provider/operation/create";
import { PrismaClient } from "@prisma/client";

export namespace ProviderUpdate {
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

    async execute(id: string, requestDto: Schema) {
      return await this.prisma.$transaction(async (tx) => {
        if (requestDto.enabled)
          await this.providerService.disableAllProviders(tx);

        return tx.aiProvider.update({ data: requestDto, where: { id: id } });
      });
    }
  }

  export const schema = ProviderCreate.schema.partial();

  export type Schema = z.infer<typeof schema>;
}
