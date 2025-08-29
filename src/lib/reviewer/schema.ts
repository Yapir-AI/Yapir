import { z } from 'zod/v3';

export const searchReviewerSchema = z.object({
  search: z.string(),
  excludedIds: z.array(z.string().uuid()),
});
