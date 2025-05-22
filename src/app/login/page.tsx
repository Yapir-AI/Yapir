import { H1, HSub } from "@/components/ui/typography";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import prismaClient from "@/lib/db";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { LoginForm } from "@/app/login/form";
import { routes } from "@/lib/route";

export default async function LoginPage() {
  const [user, session] = await Promise.all([
    prismaClient.user.findFirst(),
    auth.api.getSession({ headers: await headers() }),
  ]);
  if (session) return redirect(routes.providers);
  if (!user) return redirect(routes.register);

  return (
    <main className="flex h-dvh w-full flex-col items-center justify-center gap-5">
      <Card className="w-full max-w-md">
        <CardHeader>
          <H1>Log In</H1>
          <HSub>Enter your credentials to access your account</HSub>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </main>
  );
}
