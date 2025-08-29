import { z } from 'zod/v3';
import { PrismaClient } from "@/generated/prisma/client";

export namespace ReviewerCreate {
  export class Operation {
    private readonly prisma: PrismaClient;

    constructor({ prisma }: { prisma: PrismaClient }) {
      this.prisma = prisma;
    }

    async execute(request: Schema) {
      const { id } = await this.prisma.reviewer.create({ data: request });
      return id;
    }
  }

  export const schema = z.object({
    name: z.string(),
    aiProviderId: z.string().uuid().describe("Provider"),
  });

  export type Schema = z.infer<typeof schema>;
}
