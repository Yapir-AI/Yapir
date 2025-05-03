import type { PropsWithChildren } from "react";
import { Card } from "@/components/ui/card";
import { H3 } from "@/components/ui/typography";
import type { YapirRoute } from "@/lib/route";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function CardList({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <Card className={cn("flex flex-col divide-y", className)}>{children}</Card>
  );
}

export function CardListTitle({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <H3
      className={cn(
        "from-accent to-background rounded-t-xl border-b bg-gradient-to-br px-6 py-3",
        className,
      )}
    >
      {children}
    </H3>
  );
}

export function CardListItem({
  children,
  href,
  className,
}: PropsWithChildren<{ href: YapirRoute; className?: string }>) {
  return (
    <Link
      href={href}
      className={cn("hover:bg-accent px-6 py-3 last:rounded-b-xl", className)}
    >
      {children}
    </Link>
  );
}
