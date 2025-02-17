import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function Main({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <>
      <main className={cn("mx-auto px-10 py-8", className)}>{children}</main>
    </>
  );
}
