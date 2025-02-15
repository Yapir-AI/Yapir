import { Main } from "@/components/ui/main";
import { Card, CardContent } from "@/components/ui/card";
import { H1, HSub } from "@/components/ui/typography";
import { RegisterForm } from "@/app/register/form";

export default function RegisterPage() {
  return (
    <Main className="flex h-dvh flex-col items-center justify-center gap-5">
      <H1>Create your account</H1>
      <HSub>Enter an email and password and keep them safe.</HSub>
      <Card className="w-full max-w-lg">
        <CardContent className="pt-6">
          <RegisterForm />
        </CardContent>
      </Card>
    </Main>
  );
}
