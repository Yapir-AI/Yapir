import { gitFileDiffSchema } from "@/lib/git/parsing/model/GitFileDiff";
import { z } from "zod";

export const gitMergeRequestDiffsSchema = z
  .object({
    fileDiffs: z.array(gitFileDiffSchema),
  })
  .transform((t) => ({
    ...t,
    toLLMString: () =>
      t.fileDiffs.map((diff) => diff.toLLMString()).join("\n\n\n"),
  }));

export type GitMergeRequestDiffs = z.infer<typeof gitMergeRequestDiffsSchema>;

export const gitMergeRequestDiffs = (
  input: z.input<typeof gitMergeRequestDiffsSchema>,
) => gitMergeRequestDiffsSchema.parse(input);
