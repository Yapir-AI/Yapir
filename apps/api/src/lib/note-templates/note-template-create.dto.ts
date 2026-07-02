import { type } from "arktype";

export const noteTemplateCreateRequestSchema = type({
  title: "string >= 3",
  prompt: "string >= 3",
});

export type NoteTemplateCreateRequestDto =
  typeof noteTemplateCreateRequestSchema.infer;
