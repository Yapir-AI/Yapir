import { PrismaClient } from "@prisma/client";

export class ProviderService {
  private readonly prisma: PrismaClient;

  constructor(opts: { prisma: PrismaClient }) {
    this.prisma = opts.prisma;
  }

  async listProviders() {
    const providers = await this.prisma.aiProvider.findMany();

    return providers.reverse().map(({ id, baseUrl, type, model }) => ({
      id,
      baseUrl,
      type,
      model,
    }));
  }
}

export type AiProviderPage = Awaited<
  ReturnType<typeof ProviderService.prototype.listProviders>
>;

export type ProviderListElement = AiProviderPage[number];
