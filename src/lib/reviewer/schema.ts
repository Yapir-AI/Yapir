import { z } from "zod";

export const searchReviewerSchema = z.object({
  search: z.string(),
  excludedIds: z.array(z.string().uuid()),
});
