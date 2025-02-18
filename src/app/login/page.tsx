import { Main } from "@/components/ui/main";
import { H1, HSub } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { LoginForm } from "@/app/login/form";
import { routes } from "@/lib/route";

export default async function LoginPage() {
  const [user, session] = await Promise.all([
    db.query.user.findFirst(),
    auth.api.getSession({ headers: await headers() }),
  ]);
  if (session) return redirect(routes.providers);
  if (!user) return redirect(routes.register);

  return (
    <Main className="flex h-dvh flex-col items-center justify-center gap-5">
      <H1>Log In</H1>
      <HSub>Enter your credentials to access your account</HSub>
      <Card className="w-full max-w-lg">
        <CardContent className="py-8">
          <LoginForm />
        </CardContent>
      </Card>
    </Main>
  );
}
