import { z } from "zod";

export type CreateSchemaStepOutput = {
  schema: typeof baseSchema;
};

export class CreateSchemaStep {
  createSchema = async (): Promise<CreateSchemaStepOutput> => ({
    schema: baseSchema,
  });
}

const baseSchema = z.object({
  comments: z
    .array(
      z.object({
        fileId: z.string().describe("The file ID - uuid format"),
        line: z.number().describe("The line number"),
        text: z
          .string()
          .describe(
            "Markdown content, the comment to put on the PR. Give quick fix to the user if possible.",
          ),
        location: z
          .enum(["OLD", "NEW"])
          .describe(
            "If the comment is on the old or new line. Use new for current",
          ),
      }),
    )
    .describe("The list of inline comments for specific lines of code"),
  summary: z
    .string()
    .describe(
      "Short funny summary of the review to publish on the PR. One sentence max. Ex: 'Great job around the code, I like it!' or 'The security really needs to be improved, oopsie!' or 'Just a little thing and we're good to go!'",
    ),
});
