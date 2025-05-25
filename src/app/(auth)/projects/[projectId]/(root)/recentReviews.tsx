import { routes } from "@/lib/route";
import { CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitBranchIcon, MessageSquareIcon } from "lucide-react";
import { ReviewerAvatar } from "@/lib/avatar/reviewer";
import { formatDistanceToNow } from "date-fns";
import { container } from "@/lib/di/container";
import {
  CardList,
  CardListItem,
  CardListTitle,
} from "@/components/ui/card-list";

const listRecentReviews = async (projectId: string) =>
  container.cradle.reviewService.listReviews({
    include: {
      reviewers: true,
      _count: { select: { comments: true } },
      mergeRequest: true,
    },
    where: { mergeRequest: { projectId: projectId } },
    take: 4,
    orderBy: { at: "desc" },
  });

type ReviewCardProps = Awaited<ReturnType<typeof listRecentReviews>>[number];

export async function RecentReviews({ projectId }: { projectId: string }) {
  const recentReviews = await listRecentReviews(projectId);

  return (
    <CardList>
      <CardListTitle>Recent Reviews</CardListTitle>
      {recentReviews.map((review) => (
        <ReviewCard key={review.id} {...review} />
      ))}
    </CardList>
  );
}

function ReviewCard(props: ReviewCardProps) {
  return (
    <CardListItem href={routes.review(props.mergeRequest.projectId, props.id)}>
      <CardTitle className="flex items-center text-lg">
        <div>
          {props.mergeRequest.name}{" "}
          <span className="text-muted-foreground font-normal">
            - {props.mergeRequest.authorName}
          </span>
        </div>
        <div className="grow" />
        <Badge
          variant={
            props.status === "REVIEWED"
              ? "secondary"
              : props.status === "ERROR"
                ? "destructive"
                : "outline"
          }
        >
          {props.status}
        </Badge>
      </CardTitle>
      <div className="text-muted-foreground mb-3 flex items-center gap-2 text-sm">
        <GitBranchIcon className="size-4" />
        {props.mergeRequest.sourceBranch} {"->"}{" "}
        {props.mergeRequest.targetBranch}
      </div>
      <div className="text-muted-foreground flex items-center gap-2 text-sm">
        <div className="flex -space-x-2">
          {props.reviewers.slice(0, 3).map((reviewer, index) => (
            <ReviewerAvatar
              key={reviewer.id}
              reviewerName={reviewer.name}
              options={{ radius: 50, size: 25 }}
              className="rounded-full border"
            />
          ))}
        </div>
        <p>{props.reviewers.map((r) => r.name).join(", ")}</p>
        <div></div>
        <div className="flex items-center gap-2">
          <MessageSquareIcon className="size-4" />
          {props._count.comments} Comments
        </div>
        <div className="grow" />
        <div className="flex justify-self-end">
          {formatDistanceToNow(props.at, { addSuffix: true })}
        </div>
      </div>
    </CardListItem>
  );
}
