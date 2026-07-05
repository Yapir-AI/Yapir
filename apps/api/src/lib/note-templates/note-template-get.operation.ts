import type { Db } from "@/lib/db";
import { notFound } from "@/lib/errors/error.factory";
import { toNoteTemplateResponseDto } from "./note-template.dto";

export function noteTemplateGetOperation({ db }: { db: Db }) {
  async function execute(id: string) {
    const noteTemplate = await db.query.noteTemplateTable.findFirst({
      where: { id },
    });

    if (!noteTemplate) {
      throw notFound("NOTE_TEMPLATE_NOT_FOUND");
    }

    return toNoteTemplateResponseDto(noteTemplate);
  }

  return { execute };
}
