import { providerConfigs } from "@/lib/provider/model/configs";
import { PrismaClient } from "@prisma/client";

export class ProviderService {
  private readonly prisma: PrismaClient;

  constructor(opts: { prisma: PrismaClient }) {
    this.prisma = opts.prisma;
  }

  async listProviders() {
    const providers = await this.prisma.aiProvider.findMany();

    return providers
      .reverse()
      .map(({ id, baseUrl, type, model }) => ({
        id,
        baseUrl,
        type,
        model,
      }))
      .map((provider) => ({
        ...provider,
        ...providerConfigs[provider.type],
      }));
  }
}

export type ProviderListElement = Awaited<
  ReturnType<typeof ProviderService.prototype.listProviders>
>[number];
