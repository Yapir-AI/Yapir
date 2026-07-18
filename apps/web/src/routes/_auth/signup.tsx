import { useMutation } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { type } from "arktype";

import { useAppForm } from "#web/components/form/app-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "#web/components/ui/card";
import { Link } from "#web/components/ui/link";
import { authClient } from "#web/lib/auth/client";
import { authSearchSchema } from "#web/lib/auth/search";
import { sessionQueryOptions } from "#web/lib/auth/session";

const signupSchema = type({
  name: "string > 0",
  email: "string.email",
  password: "string >= 8",
  confirmPassword: "string > 0",
}).narrow(
  (data, ctx) =>
    data.password === data.confirmPassword ||
    ctx.reject({
      message: "Passwords must match",
      relativePath: ["confirmPassword"],
    }),
);

export const Route = createFileRoute("/_auth/signup")({
  validateSearch: authSearchSchema,
  component: SignupPage,
});

function SignupPage() {
  const navigate = useNavigate();
  const { redirect } = Route.useSearch();
  const { queryClient } = Route.useRouteContext();
  const signup = useMutation({
    mutationFn: async (values: typeof signupSchema.infer) => {
      const { error } = await authClient.signUp.email({
        name: values.name,
        email: values.email,
        password: values.password,
      });

      if (error) throw new Error(error.message);
    },
    onSuccess: async () => {
      await queryClient.fetchQuery(sessionQueryOptions);
      await navigate({ to: redirect ?? "/" });
    },
  });
  const form = useAppForm({
    schema: signupSchema,
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: ({ value }) => signup.mutateAsync(value),
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create your account</CardTitle>
        <CardDescription>Enter your details to get started.</CardDescription>
      </CardHeader>
      <CardContent>
        <form.AppForm>
          <form.Form>
            <form.AppField
              name="name"
              children={(field) => (
                <field.TextField label="Name" autoComplete="name" />
              )}
            />
            <form.AppField
              name="email"
              children={(field) => (
                <field.TextField
                  label="Email"
                  type="email"
                  autoComplete="email"
                />
              )}
            />
            <form.AppField
              name="password"
              children={(field) => (
                <field.TextField
                  label="Password"
                  type="password"
                  autoComplete="new-password"
                />
              )}
            />
            <form.AppField
              name="confirmPassword"
              children={(field) => (
                <field.TextField
                  label="Confirm password"
                  type="password"
                  autoComplete="new-password"
                />
              )}
            />
            <form.SubmitButton error={signup.error?.message}>
              Create account
            </form.SubmitButton>
          </form.Form>
        </form.AppForm>
      </CardContent>
      <CardFooter className="justify-center text-sm">
        Already have an account?&nbsp;
        <Link to="/login" search={{ redirect }}>
          Log in
        </Link>
      </CardFooter>
    </Card>
  );
}
