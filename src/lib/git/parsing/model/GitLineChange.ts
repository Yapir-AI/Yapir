import { z } from 'zod/v3';

export const gitLineChangeSchema = z
  .object({
    type: z.enum(["added", "removed", "unchanged"]),
    content: z.string(),
    oldLineNumber: z.number().optional(),
    newLineNumber: z.number().optional(),
  })
  .transform((s) => ({
    ...s,
    isAdded: () => s.type === "added",
    isRemoved: () => s.type === "removed",
    isUnchanged: () => s.type === "unchanged",
    toLLMString: () => {
      switch (s.type) {
        case "unchanged":
          return `${s.oldLineNumber}:${s.newLineNumber} ${s.content}`;
        case "added":
          return `${s.newLineNumber}+ ${s.content}`;
        case "removed":
          return `${s.oldLineNumber}- ${s.content}`;
      }
    },
  }));

export const gitLineChange = (input: z.input<typeof gitLineChangeSchema>) =>
  gitLineChangeSchema.parse(input);

export type GitLineChange = z.infer<typeof gitLineChangeSchema>;
