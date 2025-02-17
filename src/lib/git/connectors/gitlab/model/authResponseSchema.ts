import { z } from "zod";

export const gitlabAuthResponseSchema = z.object({
  access_token: z.string(),
  refresh_token: z.string(),
  expires_in: z.number(),
});
