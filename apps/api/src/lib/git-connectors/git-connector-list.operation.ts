import { desc } from "drizzle-orm";
import type { CurrentUser } from "#api/lib/current-user";
import { gitConnectorTable } from "#api/lib/db/schema";
import type { Db } from "#api/lib/db";
import { toGitConnectorResponseDto } from "./git-connector.dto";

export function gitConnectorListOperation({
  db,
  currentUser,
}: {
  db: Db;
  currentUser: CurrentUser;
}) {
  async function execute() {
    currentUser.assertRole("admin");

    // TODO: apply the standard LIST pagination contract once it exists.
    const gitConnectors = await db
      .select()
      .from(gitConnectorTable)
      .orderBy(desc(gitConnectorTable.createdAt));

    return gitConnectors.map(toGitConnectorResponseDto);
  }

  return { execute };
}
