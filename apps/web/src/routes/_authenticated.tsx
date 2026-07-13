import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

import { sessionQueryOptions } from "#web/lib/auth/session";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ context, location }) => {
    const session =
      await context.queryClient.ensureQueryData(sessionQueryOptions);

    if (!session) {
      throw redirect({
        to: "/login",
        search: { redirect: location.href },
      });
    }

    return { session };
  },
  component: () => <Outlet />,
});
