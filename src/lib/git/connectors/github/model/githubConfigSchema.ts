import { z } from 'zod/v3';

export const githubConfigSchema = z.object({
  id: z.number(),
  pem: z.string(),
  webhook_secret: z.string().nullable(),
  slug: z.string().optional(),
  installation_id: z.number().optional(),
});

export type GithubConfig = z.infer<typeof githubConfigSchema>;

export const githubConfig = (config: GithubConfig) =>
  githubConfigSchema.parse(config);
