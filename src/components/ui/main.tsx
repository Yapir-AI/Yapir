import type { ReactNode } from "react";
import { SidebarInset } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function Main({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <>
      <SidebarInset className="px-10 py-8">
        <div className={cn("container mx-auto", className)}>{children}</div>
      </SidebarInset>
    </>
  );
}
