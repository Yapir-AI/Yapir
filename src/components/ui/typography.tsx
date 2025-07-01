import type { PropsWithChildren, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function H1({ children }: { children?: ReactNode }) {
  return <h1 className="text-xl font-bold lg:text-3xl">{children}</h1>;
}

export function HSub({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("text-muted-foreground text-sm", className)}>
      {children}
    </h2>
  );
}

export function H3({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function H3Sub({ children }: PropsWithChildren) {
  return <p className="text-muted-foreground text-sm">{children}</p>;
}
