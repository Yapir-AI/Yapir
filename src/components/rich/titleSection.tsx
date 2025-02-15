import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TitleSection({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-10 flex w-full items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
}
