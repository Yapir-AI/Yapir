import Link from "next/link";
import { routes } from "@/lib/route";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitBranchIcon, MessageSquareIcon } from "lucide-react";
import { ReviewerAvatar } from "@/lib/avatar/reviewer";
import { formatDistanceToNow } from "date-fns";
import { H3 } from "@/components/ui/typography";
import { container } from "@/lib/di/container";

const listRecentReviews = async (projectId: string) =>
  container.cradle.reviewService.listReviews({
    include: {
      reviewer: true,
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
    <div>
      <H3 className="mb-3">Recent Reviews</H3>
      <div className="flex flex-col gap-4">
        {recentReviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
}

function ReviewCard(props: ReviewCardProps) {
  return (
    <Link href={routes.review(props.mergeRequest.projectId, props.id)}>
      <Card className="flex flex-col gap-2 p-6">
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
          <ReviewerAvatar
            reviewerName={props.reviewer.name}
            options={{ radius: 50, size: 25 }}
          />
          <p>{props.reviewer.name}</p>
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
      </Card>
    </Link>
  );
}
