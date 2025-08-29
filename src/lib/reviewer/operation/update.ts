import { z } from 'zod/v3';
import { PrismaClient } from "@/generated/prisma/client";

export namespace ReviewerUpdate {
  export class Operation {
    private readonly prisma: PrismaClient;

    constructor({ prisma }: { prisma: PrismaClient }) {
      this.prisma = prisma;
    }

    async execute(request: Schema) {
      const {
        reviewerId,
        providerId,
        systemPrompt,
        systemPromptEnabled,
        useProjectInstructions,
      } = request;

      await this.prisma.reviewer.update({
        where: { id: reviewerId },
        data: {
          aiProviderId: providerId,
          systemPrompt,
          systemPromptEnabled,
          useProjectInstructions,
        },
      });

      return { success: true };
    }
  }

  export const schema = z.object({
    reviewerId: z.string().uuid(),
    providerId: z.string().uuid().optional(),
    systemPrompt: z.string().optional(),
    systemPromptEnabled: z.boolean().optional(),
    useProjectInstructions: z.boolean().optional(),
  });

  export type Schema = z.infer<typeof schema>;
}
