import type { CurrentUser } from "@/lib/current-user";
import type { AppEnv } from "@/lib/env";

export function githubConnectorInstallationStartOperation({
  currentUser,
  env,
}: {
  currentUser: CurrentUser;
  env: AppEnv;
}) {
  async function execute(state: string) {
    currentUser.assertRole("admin");

    const url = new URL(
      `/apps/${encodeURIComponent(env.githubApp.appSlug)}/installations/new`,
      "https://github.com",
    );
    url.searchParams.set("state", state);

    return url.href;
  }

  return { execute };
}
