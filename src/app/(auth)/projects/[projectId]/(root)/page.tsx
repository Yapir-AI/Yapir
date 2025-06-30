import { Main } from "@/components/ui/main";
import { BreadCrumbHelper } from "@/components/rich/BreadCrumbHelper";
import { container } from "@/lib/di/container";
import {
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
import { Suspense } from "react";
import { RecentReviews } from "@/app/(auth)/projects/[projectId]/(root)/recentReviews";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ProjectStats } from "@/lib/stats/service";
import { cn } from "@/lib/utils";
import type { Reviewer } from "@/generated/prisma/client";
import { routes } from "@/lib/route";
import { GradientCard } from "@/components/ui/gradientCard";
import { ReviewerAvatar } from "@/lib/reviewer/reviewer-avatar";
import { ProjectAvatar } from "@/lib/project/components/project-avatar";

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
      <Main className="max-w-5xl space-y-3">
        <div className="grid grid-cols-10 gap-3">
          <Card className="from-primary/5 to-card col-span-4 row-span-2 flex flex-col gap-6 bg-gradient-to-t p-6">
            <div className="flex items-center justify-between">
              <Badge variant="secondary">{project.connector.type}</Badge>
              <Button asChild variant="link" size="icon">
                <Link target="_blank" href={project.url}>
                  <ExternalLinkIcon />
                </Link>
              </Button>
            </div>
            <div className="flex flex-col items-center">
              <ProjectAvatar name={project.name} className="size-32" />
              <CardTitle className="mt-4 text-xl">{project.name}</CardTitle>
              <CardDescription>{project.fullName}</CardDescription>
            </div>
            <div className="mt-6 mb-1 flex justify-evenly">
              <Badge variant="outline" className="bg-background gap-2">
                <GitPullRequestIcon className="size-3" />{" "}
                {stats.mergeRequestCount}
              </Badge>
              <Badge variant="outline" className="bg-background gap-2">
                <SquarePenIcon className="size-3" /> {stats.reviewCount}
              </Badge>
              <Badge variant="outline" className="bg-background gap-2">
                <MessageSquareIcon className="size-3" /> {stats.commentCount}
              </Badge>
            </div>
          </Card>
          <CommentRate {...stats} />
          <ThumbsUpRate {...stats} />
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
    <Card className="from-primary/5 to-card col-span-3 flex min-h-64 flex-col justify-between bg-gradient-to-t p-8">
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
}: Pick<ProjectStats, "currentThumbsUpRate" | "previousThumbsUpRate">) {
  const evolution = currentThumbsUpRate - previousThumbsUpRate;

  return (
    <Card className="from-primary/5 to-card col-span-3 flex min-h-64 flex-col justify-between bg-gradient-to-t p-8">
      <div className="flex items-center justify-between">
        <CardTitle>Thumbs up rate</CardTitle>
        <ThumbsUpIcon className="text-muted-foreground size-5" />
      </div>
      <div>
        <CardTitle className="text-4xl">{currentThumbsUpRate}%</CardTitle>
        <Evolution value={evolution} suffix="%" />
      </div>
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
    <Link href={routes.projectSettings(projectId)} className="col-span-6">
      <GradientCard className="flex flex-row items-center gap-4">
        <div>
          <CardTitle>Reviewers on project</CardTitle>
          <CardDescription>{reviewers.length} active reviewers</CardDescription>
        </div>
        <div className="grow" />
        <div className="gap flex w-fit shrink-0 flex-row-reverse">
          {reviewers.reverse().map((r) => (
            <ReviewerAvatar
              className="-ml-5 min-w-10 rounded-full border"
              key={r.id}
              name={r.name}
            />
          ))}
        </div>
      </GradientCard>
    </Link>
  );
}
