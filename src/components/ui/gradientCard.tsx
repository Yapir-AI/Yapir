import type { PropsWithChildren } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function GradientCard({
  children,
  className,
}: PropsWithChildren<{
  className?: string;
}>) {
  return (
    <Card
      className={cn(
        "from-primary/5 to-card flex h-full flex-col bg-gradient-to-t px-6 py-3",
        className,
      )}
    >
      {children}
    </Card>
  );
}
