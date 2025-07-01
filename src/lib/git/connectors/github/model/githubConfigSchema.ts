import { z } from "zod";

export const githubConfigSchema = z.object({
  id: z.number(),
  pem: z.string(),
  webhook_secret: z.string().nullable(),
  slug: z.string().optional(),
});

export type GithubConfig = z.infer<typeof githubConfigSchema>;

export const githubConfig = (config: GithubConfig) =>
  githubConfigSchema.parse(config);
