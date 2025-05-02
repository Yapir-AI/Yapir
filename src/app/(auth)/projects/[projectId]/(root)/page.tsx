import { Main } from "@/components/ui/main";
import { BreadCrumbHelper } from "@/components/rich/BreadCrumbHelper";
import { container } from "@/lib/di/container";
import {
  CogIcon,
  ExternalLinkIcon,
  GitPullRequestIcon,
  MessageSquareIcon,
  MessagesSquareIcon,
  MoveDownRightIcon,
  MoveUpRightIcon,
  SquarePenIcon,
  ThumbsUpIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProjectAvatar } from "@/lib/avatar/project";
import { Suspense } from "react";
import { RecentReviews } from "@/app/(auth)/projects/[projectId]/(root)/recentReviews";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AvatarBackground } from "@/lib/avatar";
import { glass } from "@dicebear/collection";
import type { ProjectStats } from "@/lib/stats/service";
import { cn } from "@/lib/utils";
import type { Reviewer } from "@prisma/client";
import { ReviewerAvatar } from "@/lib/avatar/reviewer";
import { routes } from "@/lib/route";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectService, statsService } = container.cradle;
  const { projectId } = await params;
  const [project, stats] = await Promise.all([
    projectService.findByIdIncluding(projectId, {
      connector: true,
      reviewers: true,
    }),
    statsService.getProjectStats(projectId),
  ]);

  return (
    <>
      <BreadCrumbHelper items={["Projects", { label: project.name }]} />
      <Main className="max-w-5xl space-y-10">
        <div className="grid grid-cols-10 gap-2">
          <Card className="col-span-4 row-span-2 flex flex-col gap-6 p-6">
            <div className="flex items-center justify-between">
              <Badge variant="secondary">{project.connector.type}</Badge>
              <Button asChild variant="link" size="icon">
                <Link target="_blank" href={project.url}>
                  <ExternalLinkIcon />
                </Link>
              </Button>
            </div>
            <div className="flex flex-col items-center">
              <ProjectAvatar
                projectName={project.name}
                options={{ size: 120, radius: 100 }}
              />
              <CardTitle className="mt-4 text-xl">{project.name}</CardTitle>
              <CardDescription>{project.fullName}</CardDescription>
            </div>
            <div className="mt-6 mb-1 flex justify-evenly">
              <Badge variant="outline" className="gap-2">
                <GitPullRequestIcon className="size-3" />{" "}
                {stats.mergeRequestCount}
              </Badge>
              <Badge variant="outline" className="gap-2">
                <SquarePenIcon className="size-3" /> {stats.reviewCount}
              </Badge>
              <Badge variant="outline" className="gap-2">
                <MessageSquareIcon className="size-3" /> {stats.commentCount}
              </Badge>
            </div>
          </Card>
          <CommentRate {...stats} />
          <ThumbsUpRate projectName={project.name} {...stats} />
          <Reviewers reviewers={project.reviewers} projectId={projectId} />
        </div>
        <Suspense>
          <RecentReviews projectId={projectId} />
        </Suspense>
      </Main>
    </>
  );
}

function CommentRate({
  currentCommentPerLine,
  previousCommentPerLine,
}: Pick<ProjectStats, "currentCommentPerLine" | "previousCommentPerLine">) {
  const evolution = currentCommentPerLine - previousCommentPerLine;

  return (
    <Card className="from-primary/20 to-accent col-span-3 flex min-h-64 flex-col justify-between bg-linear-to-bl p-8">
      <div className="flex items-center justify-between">
        <CardTitle>Comment rate</CardTitle>
        <MessagesSquareIcon className="text-muted-foreground size-5" />
      </div>
      <div>
        <CardTitle className="text-4xl">{currentCommentPerLine}</CardTitle>
        <Evolution value={evolution} />
      </div>
    </Card>
  );
}

function ThumbsUpRate({
  currentThumbsUpRate,
  previousThumbsUpRate,
  projectName,
}: Pick<ProjectStats, "currentThumbsUpRate" | "previousThumbsUpRate"> & {
  projectName: string;
}) {
  const evolution = currentThumbsUpRate - previousThumbsUpRate;

  return (
    <Card className="col-span-3 overflow-hidden">
      <AvatarBackground
        style={glass}
        options={{ seed: projectName }}
        className="flex h-full flex-col justify-between p-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Thumbs up rate</CardTitle>
          </div>
          <ThumbsUpIcon className="text-muted-foreground size-5" />
        </div>
        <div>
          <CardTitle className="text-4xl">{currentThumbsUpRate}%</CardTitle>
          <Evolution value={evolution} suffix="%" />
        </div>
      </AvatarBackground>
    </Card>
  );
}

function Evolution({ value, suffix }: { value: number; suffix?: string }) {
  const evolutionClass = value > 0 ? "text-success" : "text-error";
  const Icon = value > 0 ? MoveUpRightIcon : MoveDownRightIcon;
  return (
    <div className={cn(evolutionClass, "flex items-center gap-1 text-xs")}>
      <Icon className="size-3" />
      {value}
      {suffix}
    </div>
  );
}

function Reviewers({
  reviewers,
  projectId,
}: {
  reviewers: Reviewer[];
  projectId: string;
}) {
  return (
    <Card className="col-span-6 flex items-center gap-4 px-6 py-4">
      <div>
        <CardTitle>Reviewers on project</CardTitle>
        <CardDescription>{reviewers.length} active reviewers</CardDescription>
      </div>
      <div className="grow" />
      <div className="gap flex flex-row-reverse">
        {reviewers.reverse().map((r) => (
          <ReviewerAvatar
            className="-ml-5 rounded-full border"
            key={r.id}
            reviewerName={r.name}
            options={{ size: 35, radius: 100 }}
          />
        ))}
      </div>
      <Link href={routes.projectSettings(projectId)}>
        <CogIcon className="text-muted-foreground" />
      </Link>
    </Card>
  );
}
