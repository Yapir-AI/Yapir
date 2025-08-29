import { z } from 'zod/v3';

export const reviewCommentSchema = z.object({
  id: z.string().uuid(),
  action: z.enum(["UP", "DOWN"]),
});

export type CommentReview = z.infer<typeof reviewCommentSchema>;
