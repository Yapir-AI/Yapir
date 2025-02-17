import { createSafeActionClient } from "next-safe-action";
import { assertAuthenticated } from "@/lib/auth/check";
import { container } from "@/lib/di/container";

export const actionClient = createSafeActionClient().use(async ({ next }) => {
  await assertAuthenticated();

  return next({ ctx: container.cradle });
});
