import { gitLineChangeSchema } from "@/lib/git/parsing/model/GitLineChange";
import { z } from "zod";

export const gitFileDiffSchema = z
  .object({
    lineChanges: z.array(gitLineChangeSchema),
    oldPath: z.string().optional(),
    newPath: z.string().optional(),
  })
  .transform((d) => ({
    ...d,
    isNew: () => !d.oldPath,
    isDeleted: () => !d.newPath,
    isRenamed: () => d.oldPath !== d.newPath,
  }))
  .transform((d) => ({
    ...d,
    toLLMString() {
      let header: string;
      if (d.isNew()) header = `created: ${d.newPath}`;
      else if (d.isDeleted()) header = `deleted: ${d.oldPath}`;
      else if (d.isRenamed()) header = `renamed: ${d.oldPath} -> ${d.newPath}`;
      else header = `updated: ${d.newPath}`;

      const lines = d.lineChanges.map((line) => line.toLLMString()).join("\n");

      return `${header}\n\n${lines}`;
    },
  }));

export type GitFileDiff = z.infer<typeof gitFileDiffSchema>;

export const gitFileDiff = (
  input: z.input<typeof gitFileDiffSchema>,
): GitFileDiff => gitFileDiffSchema.parse(input);
