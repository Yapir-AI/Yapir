import { Prisma } from "@prisma/client";
import type { YapirPrismaClient } from "@/lib/db";

export class MergeRequestService {
  private readonly prisma: YapirPrismaClient;

  constructor(opts: { prisma: YapirPrismaClient }) {
    this.prisma = opts.prisma;
  }

  create(data: Prisma.MergeRequestCreateInput) {
    return this.prisma.mergeRequest.upsert({
      create: data,
      update: data,
      where: {
        originId_projectId: {
          originId: data.originId,
          projectId: data.project.connect!.id!,
        },
      },
    });
  }

  list(where: Prisma.MergeRequestWhereInput) {
    return this.prisma.mergeRequest.findMany({
      where: where,
      take: 10,
      orderBy: { createdAt: "desc" },
    });
  }

  findById<T extends Prisma.MergeRequestInclude>(id: string, include: T) {
    return this.prisma.mergeRequest.findUniqueOrThrow({
      where: { id },
      include,
    });
  }
}
