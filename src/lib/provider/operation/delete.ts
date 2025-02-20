import { PrismaClient } from "@prisma/client";

export namespace ProviderDelete {
  export class Operation {
    private readonly prisma: PrismaClient;

    constructor(opts: { prisma: PrismaClient }) {
      this.prisma = opts.prisma;
    }

    async execute(id: string) {
      await this.prisma.aiProvider.delete({ where: { id: id } });
    }
  }
}
