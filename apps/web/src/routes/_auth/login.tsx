import { createFileRoute } from "@tanstack/react-router";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "#web/components/ui/card";
import { Link } from "#web/components/ui/link";
import { authSearchSchema } from "#web/lib/auth/search";

export const Route = createFileRoute("/_auth/login")({
  validateSearch: authSearchSchema,
  component: LoginPlaceholder,
});

function LoginPlaceholder() {
  const { redirect } = Route.useSearch();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Log in</CardTitle>
        <CardDescription>
          Login will be available in the next step.
        </CardDescription>
      </CardHeader>
      <CardFooter className="justify-center text-sm">
        Need an account?&nbsp;
        <Link to="/signup" search={{ redirect }}>
          Sign up
        </Link>
      </CardFooter>
    </Card>
  );
}
