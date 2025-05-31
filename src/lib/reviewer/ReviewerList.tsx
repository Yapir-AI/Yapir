import {
  CardList,
  CardListItem,
  CardListTitle,
  EmptyCardList,
} from "@/components/ui/card-list";
import { routes } from "@/lib/route";
import type { ReviewersList } from "@/lib/reviewer/service";
import { ReviewerAvatar } from "@/lib/avatar/reviewer";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { providerConfigs } from "@/lib/provider/model/configs";

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
        const { name: providerName } =
          providerConfigs[reviewer.aiProvider.type];

        return (
          <CardListItem
            href={routes.reviewer(reviewer.id)}
            key={reviewer.id}
            className="flex gap-4"
          >
            <ReviewerAvatar
              reviewerName={reviewer.name}
              options={{ size: 64 }}
            />
            <div className="flex flex-col justify-evenly">
              <CardTitle className="group-hover:underline">
                {reviewer.name}
              </CardTitle>
              <CardDescription>
                {providerName} | {reviewer.aiProvider.model}
              </CardDescription>
            </div>
          </CardListItem>
        );
      })}
    </CardList>
  );
}
