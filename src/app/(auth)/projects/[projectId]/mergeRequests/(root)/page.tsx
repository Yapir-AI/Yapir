import { container } from "@/lib/di/container";
import { Main } from "@/components/ui/main";
import { TitleSection } from "@/components/rich/titleSection";
import { GitBranchIcon, GitPullRequestIcon } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { routes } from "@/lib/route";
import { H1, HSub } from "@/components/ui/typography";
import { BreadCrumbHelper } from "@/components/rich/BreadCrumbHelper";
import { breadCrumbFactory } from "@/components/rich/BreadCrumbFactory";
import {
  CardList,
  CardListItem,
  CardListTitle,
} from "@/components/ui/card-list";

export default async function ProjectMergeRequestsPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { mergeRequestService, projectService } = container.cradle;
  const { projectId } = await params;

  const [mergeRequests, project] = await Promise.all([
    mergeRequestService.list({ projectId }),
    projectService.findById(projectId),
  ]);

  return (
    <>
      <BreadCrumbHelper
        items={[
          "Projects",
          breadCrumbFactory.project(project),
          breadCrumbFactory.mergeRequests({ projectId }),
        ]}
      />
      <Main className="max-w-5xl">
        <TitleSection>
          <div className="flex items-center gap-4">
            <GitPullRequestIcon size={40} className="text-muted-foreground" />
            <div className="flex flex-col justify-evenly">
              <H1>Merge Requests</H1>
              <HSub>{project.fullName}</HSub>
            </div>
          </div>
        </TitleSection>
        <CardList>
          <CardListTitle>Last 10 Merge Requests</CardListTitle>
          {mergeRequests.map((mr) => (
            <CardListItem
              className="grid grid-cols-2"
              href={routes.mergeRequest(projectId, mr.id)}
              key={mr.id}
            >
              <CardTitle className="line-clamp-1">{mr.name}</CardTitle>
              <div className="flex items-center justify-end gap-2">
                <p>{mr.authorName}</p>
                <Avatar>
                  <AvatarImage src={mr.authorAvatarUrl ?? undefined} />
                  <AvatarFallback>{mr.authorName.at(0)}</AvatarFallback>
                </Avatar>
              </div>
              <CardDescription>
                <GitBranchIcon className="mr-2 inline-block size-4" />
                {mr.sourceBranch} {"->"} {mr.targetBranch}
              </CardDescription>
              <CardDescription className="justify-self-end">
                {formatDistanceToNow(mr.createdAt, {
                  addSuffix: true,
                })}
              </CardDescription>
            </CardListItem>
          ))}
        </CardList>
      </Main>
    </>
  );
}
