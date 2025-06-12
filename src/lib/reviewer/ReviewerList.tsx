import {
  CardList,
  CardListItem,
  CardListTitle,
  EmptyCardList,
} from "@/components/ui/card-list";
import { routes } from "@/lib/route";
import type {
  ReviewerListElement,
  ReviewersList,
} from "@/lib/reviewer/service";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { providerConfigs } from "@/lib/provider/model/configs";
import { cn } from "@/lib/utils";
import React from "react";
import { ReviewerAvatar } from "@/lib/reviewer/reviewer-avatar";

export function ReviewerList({
  reviewers,
  className,
  title,
}: {
  title?: string;
  reviewers: ReviewersList;
  className?: string;
}) {
  return (
    <CardList className={className}>
      <CardListTitle>{title ?? "Reviewers"}</CardListTitle>
      {reviewers.length === 0 && <EmptyCardList>No Reviewers</EmptyCardList>}
      {reviewers.map((reviewer) => {
        return <ReviewerListItem reviewer={reviewer} key={reviewer.id} />;
      })}
    </CardList>
  );
}

export function ReviewerListItem({
  reviewer,
  className,
  outerClassName,
  Action,
}: {
  outerClassName?: string;
  reviewer: ReviewerListElement;
  className?: string;
  Action?: () => React.ReactElement;
}) {
  const { name: providerName } = providerConfigs[reviewer.aiProvider.type];

  return (
    <CardListItem
      href={routes.reviewer(reviewer.id)}
      key={reviewer.id}
      className={cn("flex gap-4", className)}
      outerClassName={outerClassName}
      Action={Action}
    >
      <ReviewerAvatar name={reviewer.name} className="size-16 rounded" square />
      <div className="flex flex-col justify-evenly">
        <CardTitle className="group-hover:underline">{reviewer.name}</CardTitle>
        <CardDescription>
          {providerName} | {reviewer.aiProvider.model}
        </CardDescription>
      </div>
    </CardListItem>
  );
}
