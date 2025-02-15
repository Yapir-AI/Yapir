"use server";

import { auth } from "@/lib/auth/index";
import { headers } from "next/headers";
import { forbidden } from "next/navigation";

export async function assertAuthenticated() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) throw forbidden();
}
