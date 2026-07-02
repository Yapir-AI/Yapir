import type { Db } from "@/lib/db";
import { toNoteTemplateResponseDto } from "./note-template.dto";

export function noteTemplateGetOperation({ db }: { db: Db }) {
  async function execute(id: string) {
    const noteTemplate = await db.query.noteTemplateTable.findFirst({
      where: { id },
    });

    if (!noteTemplate) {
      throw new Error("Note template not found");
    }

    return toNoteTemplateResponseDto(noteTemplate);
  }

  return { execute };
}
