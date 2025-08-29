import { gitFileDiffSchema } from "@/lib/git/parsing/model/GitFileDiff";
import { z } from 'zod/v3';

export const gitMergeRequestDiffsSchema = z
  .object({
    fileDiffs: z.array(gitFileDiffSchema),
  })
  .transform((t) => ({
    ...t,
    toLLMString: () =>
      t.fileDiffs.map((diff) => diff.toLLMString()).join("\n\n\n"),
    getChangedLines: () => {
      const changes = t.fileDiffs.flatMap((diff) => diff.lineChanges);
      return {
        added: changes.filter((line) => line.isAdded()).length,
        removed: changes.filter((line) => line.isRemoved()).length,
        unchanged: changes.filter((line) => line.isUnchanged()).length,
      };
    },
    getFile: (fileId: string) => {
      return (
        t.fileDiffs.find((diff) => diff.id === fileId) ??
        t.fileDiffs.find((diff) => diff.newPath === fileId) ??
        t.fileDiffs.find((diff) => diff.oldPath === fileId)
      );
    },
  }));

export type GitMergeRequestDiffs = z.infer<typeof gitMergeRequestDiffsSchema>;

export const gitMergeRequestDiffs = (
  input: z.input<typeof gitMergeRequestDiffsSchema>,
) => gitMergeRequestDiffsSchema.parse(input);
