import { Main } from "@/components/ui/main";
import { container } from "@/lib/di/container";
import { BreadCrumbHelper } from "@/components/rich/BreadCrumbHelper";
import { routes } from "@/lib/route";
import { TitleSection } from "@/components/rich/titleSection";
import { H1, HSub } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLinkIcon, MessagesSquareIcon } from "lucide-react";
import { ReviewerAvatar } from "@/lib/avatar/reviewer";
import { CardTitle } from "@/components/ui/card";
import { breadCrumbFactory } from "@/components/rich/BreadCrumbFactory";

export default async function MergeRequestPage({
  params,
}: {
  params: Promise<{ projectId: string; mergeRequestId: string }>;
}) {
  const { mergeRequestService } = container.cradle;
  const { projectId, mergeRequestId } = await params;

  const mergeRequest = await mergeRequestService.findById(mergeRequestId, {
    reviews: {
      include: { reviewer: true, _count: { select: { comments: true } } },
    },
    project: true,
  });

  return (
    <>
      <BreadCrumbHelper
        items={[
          "Projects",
          breadCrumbFactory.project(mergeRequest.project),
          breadCrumbFactory.mergeRequests({ projectId }),
          {
            label: mergeRequest.name,
          },
        ]}
      />

      <Main>
        <TitleSection>
          <div>
            <H1>{mergeRequest.name}</H1>
            <HSub>
              {mergeRequest.authorName} requested to merge{" "}
              <Badge variant="secondary">{mergeRequest.sourceBranch}</Badge>{" "}
              into{" "}
              <Badge variant="secondary">{mergeRequest.targetBranch}</Badge>{" "}
              {formatDistanceToNow(mergeRequest.createdAt, { addSuffix: true })}
            </HSub>
          </div>
          <div>
            <Button variant="link" asChild size="icon">
              <Link href={mergeRequest.url}>
                <ExternalLinkIcon />
              </Link>
            </Button>
          </div>
        </TitleSection>
        <div className="flex flex-col gap-2 divide-y">
          {mergeRequest.reviews.reverse().map((review) => (
            <Link
              href={routes.review(projectId, review.id)}
              key={review.id}
              className="group"
            >
              <div className="flex flex-row justify-between px-1 py-5">
                <CardTitle className="flex items-center gap-2 group-hover:underline">
                  <ReviewerAvatar
                    reviewerName={review.reviewer.name}
                    options={{ size: 30, radius: 60 }}
                  />
                  {review.reviewer.name}{" "}
                  {formatDistanceToNow(review.at, { addSuffix: true })}
                </CardTitle>
                <Badge variant="outline">
                  <MessagesSquareIcon className="mr-2 size-4" />{" "}
                  {review._count.comments}
                </Badge>
              </div>
            </Link>
          ))}
        </div>
      </Main>
    </>
  );
}
