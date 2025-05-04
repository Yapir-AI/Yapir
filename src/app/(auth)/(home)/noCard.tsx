import Link from "next/link";
import { type YapirRoute } from "@/lib/route";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { GradientCard } from "@/components/ui/gradientCard";
import { CardList, CardListTitle } from "@/components/ui/card-list";
import { H3 } from "@/components/ui/typography";

export function NoCard({
  href,
  Icon,
  title,
  description,
  enabled = false,
}: {
  href: YapirRoute;
  Icon: LucideIcon;
  title: string;
  description: string;
  enabled?: boolean;
}) {
  return (
    <Link href={href}>
      <GradientCard
        className={cn(
          "items-center justify-between gap-8 pb-8",
          enabled ? "shadow-primary/80" : "opacity-50",
        )}
      >
        <CardTitle className="self-start">
          <H3>{title}</H3>
        </CardTitle>
        <Icon className="stroke-primary-400 animate-in zoom-in size-16 duration-1000" />
        <CardDescription className={cn(enabled && "animate-bounce")}>
          {description}
        </CardDescription>
      </GradientCard>
    </Link>
  );
}

export function NoCardList({
  href,
  Icon,
  title,
  description,
  enabled = false,
}: {
  href: YapirRoute;
  Icon: LucideIcon;
  title: string;
  description: string;
  enabled?: boolean;
}) {
  return (
    <Link href={href} className={cn(!enabled && "opacity-50")}>
      <CardList className={cn(enabled && "shadow-primary/80")}>
        <CardListTitle>{title}</CardListTitle>
        <div className="flex h-full flex-col items-center justify-evenly gap-8 p-8">
          <Icon className="stroke-primary-400 animate-in zoom-in size-16 duration-1000" />
          <CardDescription className={cn(enabled && "animate-bounce")}>
            {description}
          </CardDescription>
        </div>
      </CardList>
    </Link>
  );
}
