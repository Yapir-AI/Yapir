import { eq } from "drizzle-orm";
import type { CurrentUser } from "#api/lib/current-user";
import { noteTemplateTable } from "#api/lib/db/schema";
import type { Db } from "#api/lib/db";
import { notFound } from "#api/lib/errors/error.factory";
import type { NoteTemplateUpdateRequestDto } from "./note-template-update.dto";
import { toNoteTemplateResponseDto } from "./note-template.dto";

export function noteTemplateUpdateOperation({
  db,
  currentUser,
}: {
  db: Db;
  currentUser: CurrentUser;
}) {
  async function execute(id: string, requestDto: NoteTemplateUpdateRequestDto) {
    currentUser.assertRole("admin");

    const noteTemplate = await db.query.noteTemplateTable.findFirst({
      where: { id },
    });

    if (!noteTemplate) throw notFound("NOTE_TEMPLATE_NOT_FOUND");

    if (!requestDto.hasAnyChange)
      return toNoteTemplateResponseDto(noteTemplate);

    const [updatedNoteTemplate] = await db
      .update(noteTemplateTable)
      .set({
        title: requestDto.title?.trim(),
        prompt: requestDto.prompt?.trim(),
        updatedAt: new Date(),
        updatedBy: currentUser.id,
      })
      .where(eq(noteTemplateTable.id, id))
      .returning();

    return toNoteTemplateResponseDto(updatedNoteTemplate);
  }

  return { execute };
}
