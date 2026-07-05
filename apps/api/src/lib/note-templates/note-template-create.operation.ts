import type { CurrentUser } from "@/lib/current-user";
import { noteTemplateTable } from "@/lib/db/schema";
import type { Db } from "@/lib/db";
import { forbidden } from "@/lib/errors/error.factory";
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
    if (currentUser.role !== "admin") {
      throw forbidden("FORBIDDEN");
    }

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
