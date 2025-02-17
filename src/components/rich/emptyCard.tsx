import { Card } from "@/components/ui/card";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function EmptyCard({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "relative flex min-h-96 flex-col items-center justify-center border-dashed",
        className,
      )}
    >
      {children}
    </Card>
  );
}
