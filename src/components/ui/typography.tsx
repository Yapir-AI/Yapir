import type { ReactNode } from "react";

export function H1({ children }: { children?: ReactNode }) {
  return <h1 className="text-xl font-bold lg:text-3xl">{children}</h1>;
}

export function HSub({ children }: { children?: ReactNode }) {
  return <h2 className="text-muted-foreground text-sm">{children}</h2>;
}

export function H3({ children }: { children?: ReactNode }) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}
