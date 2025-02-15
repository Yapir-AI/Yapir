import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Main({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <main
      className={cn(
        "container mx-auto max-w-6xl p-8 font-[family-name:var(--font-geist-sans)]",
        className,
      )}
    >
      {children}
    </main>
  );
}
