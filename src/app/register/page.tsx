import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { H1, HSub } from "@/components/ui/typography";
import { RegisterForm } from "@/app/register/form";

export default function RegisterPage() {
  return (
    <main className="flex h-dvh w-full flex-col items-center justify-center gap-5">
      <Card className="w-full max-w-md">
        <CardHeader>
          <H1>Create your account</H1>
          <HSub>Enter an email and password and keep them safe.</HSub>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
      <HSub className="text-center">
        Yet Yapir only supports a single account.
        <br />
        Make sure not to use a personal password if you intend to share it.
      </HSub>
    </main>
  );
}
