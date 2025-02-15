import type { ReactNode } from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { BrainIcon, CogIcon, GitBranchIcon } from "lucide-react";
import ActiveLink from "@/components/rich/ActiveLink";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) return redirect("/login");

  return (
    <>
      <div className="fixed w-full border-b backdrop-blur">
        <nav className="container mx-auto flex h-16 items-center gap-2 border-x px-6 backdrop-blur *:flex *:items-center *:rounded *:px-4 *:py-2">
          <ActiveLink
            href="/"
            className="text-xl font-bold"
            activeClassName="underline"
          >
            Yapir
          </ActiveLink>
          <ActiveLink href="/providers" activeClassName="bg-accent">
            <BrainIcon className="mr-2 inline size-5" />
            Providers
          </ActiveLink>
          <ActiveLink href="/git" activeClassName="bg-accent">
            <GitBranchIcon className="mr-2 inline size-5" />
            Git
          </ActiveLink>
          <ActiveLink href="/settings" activeClassName="bg-accent">
            <CogIcon className="mr-2 inline size-5" />
            Settings
          </ActiveLink>
        </nav>
      </div>
      <div className="container mx-auto min-h-dvh border-x border-border pt-16">
        {children}
      </div>
    </>
  );
}
