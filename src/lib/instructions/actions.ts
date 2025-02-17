"use server";

import { db } from "@/lib/db";
import { actionClient } from "@/lib/safeAction/client";
import { instructions, instructionUpdateSchema } from "@/lib/db/schema";
import { eq } from "drizzle-orm/sql/expressions/conditions";
import { z } from "zod";

export const updateInstruction = actionClient
  .schema(instructionUpdateSchema)
  .bindArgsSchemas<[id: z.ZodString]>([z.string().uuid()])
  .action(async ({ parsedInput, bindArgsParsedInputs: [id] }) =>
    db.update(instructions).set(parsedInput).where(eq(instructions.id, id)),
  );
