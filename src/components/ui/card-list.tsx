import React, { type PropsWithChildren, type ReactNode } from "react";
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
    <Card className={cn("flex h-fit max-h-fit flex-col divide-y", className)}>
      {children}
    </Card>
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
  Action,
}: PropsWithChildren<{
  href: YapirRoute;
  className?: string;
  Action?: () => React.ReactElement;
}>) {
  return (
    <div className="hover:bg-accent flex flex-row items-center gap-6 last:rounded-b-xl *:last:pr-6">
      <Link href={href} className={cn("grow py-3 pl-6", className)}>
        {children}
      </Link>
      {Action && (
        <div>
          <Action />
        </div>
      )}
    </div>
  );
}

export function EmptyCardList({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex min-h-32 flex-col items-center justify-center gap-2 text-center",
        className,
      )}
    >
      {children}
    </div>
  );
}
