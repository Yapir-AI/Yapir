import type { CurrentUser } from "#api/lib/current-user";
import { noteTemplateTable } from "#api/lib/db/schema";
import type { Db } from "#api/lib/db";
import type { NoteTemplateCreateRequestDto } from "./note-template-create.dto";
import { toNoteTemplateResponseDto } from "./note-template.dto";

export function noteTemplateCreateOperation({
  db,
  currentUser,
}: {
  db: Db;
  currentUser: CurrentUser;
}) {
  async function execute(requestDto: NoteTemplateCreateRequestDto) {
    currentUser.assertRole("admin");

    const [noteTemplate] = await db
      .insert(noteTemplateTable)
      .values({
        title: requestDto.title.trim(),
        prompt: requestDto.prompt.trim(),
        createdBy: currentUser.id,
        updatedBy: currentUser.id,
      })
      .returning();

    return toNoteTemplateResponseDto(noteTemplate);
  }

  return { execute };
}
