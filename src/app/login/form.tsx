"use client";

import { authClient } from "@/lib/auth/client";
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import { routes } from "@/lib/route";

export const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type LoginSchema = z.infer<typeof schema>;

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string>();

  const { mutate: login, isPending } = useMutation({
    mutationFn: (values: LoginSchema) =>
      authClient.signIn.email(values, {
        onError: ({ error }) => setError(error.message),
        onSuccess: () => router.push(routes.home),
      }),
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
      onSubmit={(values) => login(values)}
    >
      <p className="text-destructive text-[0.8rem] font-medium">{error}</p>
      <AutoFormSubmit
        className={cn("w-full", isPending && "animate-pulse")}
        disabled={isPending}
      >
        {isPending ? "Connecting..." : "Login"}
      </AutoFormSubmit>
    </AutoForm>
  );
}
