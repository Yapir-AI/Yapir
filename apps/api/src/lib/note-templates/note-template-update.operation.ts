import { eq } from "drizzle-orm";
import type { CurrentUser } from "@/lib/current-user";
import { noteTemplateTable } from "@/lib/db/schema";
import type { Db } from "@/lib/db";
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
    if (currentUser.role !== "admin") {
      throw new Error("Forbidden");
    }

    const noteTemplate = await db.query.noteTemplateTable.findFirst({
      where: { id },
    });

    if (!noteTemplate) throw new Error("Not Found");

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

    if (!updatedNoteTemplate) throw new Error("Not Found");

    return toNoteTemplateResponseDto(updatedNoteTemplate);
  }

  return { execute };
}
