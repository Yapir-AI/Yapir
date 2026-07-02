import { eq } from "drizzle-orm";
import type { CurrentUser } from "@/lib/current-user";
import { noteTemplateTable } from "@/lib/db/schema";
import type { Db } from "@/lib/db";

export function noteTemplateDeleteOperation({
  db,
  currentUser,
}: {
  db: Db;
  currentUser: CurrentUser;
}) {
  async function execute(id: string) {
    if (currentUser.role !== "admin") {
      throw new Error("Forbidden");
    }

    await db.delete(noteTemplateTable).where(eq(noteTemplateTable.id, id));
  }

  return { execute };
}
