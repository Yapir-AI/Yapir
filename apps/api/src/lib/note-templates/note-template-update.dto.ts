import { type } from "arktype";
import { changeChecker } from "#api/lib/dto-helpers/change-checker";

export const noteTemplateUpdateRequestSchema = type({
  "title?": "string >= 3",
  "prompt?": "string >= 3",
}).pipe((o) => changeChecker(o));

export type NoteTemplateUpdateRequestDto =
  typeof noteTemplateUpdateRequestSchema.infer;
