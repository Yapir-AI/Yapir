import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "#web/components/ui/card";
import { sessionQueryOptions } from "#web/lib/auth/session";

export const Route = createFileRoute("/_authenticated/")({
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(sessionQueryOptions),
  component: HomePage,
});

function HomePage() {
  const { data: session } = useSuspenseQuery(sessionQueryOptions);

  if (!session) return null;

  return (
    <main className="grid min-h-svh place-items-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome, {session.user.name}</CardTitle>
          <CardDescription>You are signed in to Yapir.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{session.user.email}</p>
        </CardContent>
      </Card>
    </main>
  );
}
