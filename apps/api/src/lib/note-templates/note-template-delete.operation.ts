import { eq } from "drizzle-orm";
import type { CurrentUser } from "@/lib/current-user";
import { noteTemplateTable } from "@/lib/db/schema";
import type { Db } from "@/lib/db";
import { forbidden } from "@/lib/errors/error.factory";

export function noteTemplateDeleteOperation({
  db,
  currentUser,
}: {
  db: Db;
  currentUser: CurrentUser;
}) {
  async function execute(id: string) {
    if (currentUser.role !== "admin") {
      throw forbidden("FORBIDDEN");
    }

    await db.delete(noteTemplateTable).where(eq(noteTemplateTable.id, id));
  }

  return { execute };
}
