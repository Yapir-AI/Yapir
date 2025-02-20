"use server";

import { actionClient } from "@/lib/safeAction/client";
import { z } from "zod";

const schema = z.object({ content: z.string().optional() });

export const updateInstruction = actionClient
  .schema(schema)
  .bindArgsSchemas<[id: z.ZodString]>([z.string().uuid()])
  .action(
    async ({ parsedInput, bindArgsParsedInputs: [id], ctx: { prisma } }) =>
      prisma.instructions.update({ data: parsedInput, where: { id } }),
  );
