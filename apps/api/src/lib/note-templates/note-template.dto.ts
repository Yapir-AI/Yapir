import type { NoteTemplateSelect } from "#api/lib/db/schema";

export function toNoteTemplateResponseDto(noteTemplate: NoteTemplateSelect) {
  return {
    id: noteTemplate.id,
    title: noteTemplate.title,
    prompt: noteTemplate.prompt,
    createdAt: noteTemplate.createdAt.toISOString(),
    updatedAt: noteTemplate.updatedAt.toISOString(),
    createdBy: noteTemplate.createdBy,
    updatedBy: noteTemplate.updatedBy,
  };
}

export type NoteTemplateResponseDto = ReturnType<
  typeof toNoteTemplateResponseDto
>;
