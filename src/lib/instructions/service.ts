import { PrismaClient } from "@prisma/client";

export class InstructionService {
  private readonly prisma: PrismaClient;

  constructor(opts: { prisma: PrismaClient }) {
    this.prisma = opts.prisma;
  }

  async getDefaultInstructions() {
    return (
      (await this.prisma.instructions.findFirst()) ??
      this.prisma.instructions.create({
        data: {
          title: "Default instructions",
        },
      })
    );
  }
}
