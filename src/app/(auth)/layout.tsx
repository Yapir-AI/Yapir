import type { ReactNode } from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSideBar } from "@/components/rich/AppSideBar";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) return redirect("/login");

  return (
    <SidebarProvider>
      <AppSideBar />
      <SidebarInset>
        <div className="container mx-auto">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
