import { eq } from "drizzle-orm";
import type { CurrentUser } from "#api/lib/current-user";
import { noteTemplateTable } from "#api/lib/db/schema";
import type { Db } from "#api/lib/db";

export function noteTemplateDeleteOperation({
  db,
  currentUser,
}: {
  db: Db;
  currentUser: CurrentUser;
}) {
  async function execute(id: string) {
    currentUser.assertRole("admin");

    await db.delete(noteTemplateTable).where(eq(noteTemplateTable.id, id));
  }

  return { execute };
}
