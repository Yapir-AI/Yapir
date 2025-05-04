import type { YapirPrismaClient } from "@/lib/db";

export class ConnectorService {
  private readonly prisma: YapirPrismaClient;

  constructor(opts: { prisma: YapirPrismaClient }) {
    this.prisma = opts.prisma;
  }

  async listConnectors() {
    const [connectors, count] = await this.prisma.$transaction([
      this.prisma.gitConnector.findMany(),
      this.prisma.gitConnector.count(),
    ]);

    return { count, connectors: connectors.map(({ type }) => ({ type })) };
  }
}

export type ConnectorPage = Awaited<
  ReturnType<typeof ConnectorService.prototype.listConnectors>
>;
