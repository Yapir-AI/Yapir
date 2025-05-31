import { z } from "zod";

export const createNoteSchema = z.object({
  title: z.string(),
  tag: z.string(),
});
export type CreateNoteSchema = z.infer<typeof createNoteSchema>;

export const updateNoteSchema = z.object({
  id: z.string().uuid(),
  systemPrompt: z.string().optional(),
});
export type UpdateNoteSchema = z.infer<typeof updateNoteSchema>;

export const toggleReviewerNoteSchema = z.object({
  noteId: z.string().uuid(),
  reviewerId: z.string().uuid(),
  enabled: z.boolean(),
});
export type ToggleReviewerNoteSchema = z.infer<typeof toggleReviewerNoteSchema>;
