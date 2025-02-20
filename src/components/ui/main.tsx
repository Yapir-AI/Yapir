import type { ReactNode } from "react";
import { SidebarInset } from "@/components/ui/sidebar";

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
        <div className="container mx-auto">{children}</div>
      </SidebarInset>
    </>
  );
}
