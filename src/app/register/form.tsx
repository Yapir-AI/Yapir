"use client";

import { authClient } from "@/lib/auth/client";
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import { routes } from "@/lib/route";

export const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export function RegisterForm() {
  const router = useRouter();

  const { mutateAsync: signUp, isPending } = useMutation({
    mutationFn: ({ email, password }: z.infer<typeof schema>) =>
      authClient.signUp.email(
        {
          email,
          password: password,
          name: "admin",
        },
        {
          onSuccess: () => router.push(routes.providers),
        },
      ),
  });

  return (
    <AutoForm
      formSchema={schema}
      fieldConfig={{
        email: {
          inputProps: {
            placeholder: "email@yapir.ai",
            disabled: isPending,
          },
        },
        password: {
          inputProps: {
            type: "Password",
            placeholder: "password",
            disabled: isPending,
          },
        },
      }}
      onSubmit={(values) => signUp(values)}
    >
      <AutoFormSubmit
        className={cn("w-full", isPending && "animate-pulse")}
        disabled={isPending}
      >
        Register
      </AutoFormSubmit>
    </AutoForm>
  );
}
