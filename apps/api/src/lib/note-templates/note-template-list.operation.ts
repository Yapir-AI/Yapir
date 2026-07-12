import { desc } from "drizzle-orm";
import { noteTemplateTable } from "#api/lib/db/schema";
import type { Db } from "#api/lib/db";
import { toNoteTemplateResponseDto } from "./note-template.dto";

export function noteTemplateListOperation({ db }: { db: Db }) {
  async function execute() {
    // TODO: apply the standard LIST pagination contract once it exists.
    const noteTemplates = await db
      .select()
      .from(noteTemplateTable)
      .orderBy(desc(noteTemplateTable.createdAt));

    return noteTemplates.map(toNoteTemplateResponseDto);
  }

  return { execute };
}
