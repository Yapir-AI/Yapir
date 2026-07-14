import { createDb } from "#api/lib/db";
import { createAuth } from "#api/lib/auth/auth.factory";

// Do not import me, i'm just here for better auth CLI.
export const auth = createAuth(createDb());
