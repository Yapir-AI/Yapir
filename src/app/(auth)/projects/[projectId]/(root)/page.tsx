import { container } from "@/lib/di/container";
import { notFound } from "next/navigation";
import { Main } from "@/components/ui/main";
import { TitleSection } from "@/components/rich/titleSection";
import { H1, HSub } from "@/components/ui/typography";

import { BreadCrumbHelper } from "@/components/rich/BreadCrumbHelper";
import { ProjectAvatar } from "@/lib/avatar/project";
import { ProjectReviewers } from "@/app/(auth)/projects/[projectId]/(root)/pageContent";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";
import { ProjectSettings } from "@/app/(auth)/projects/[projectId]/(root)/projectSettings";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectService, reviewerService } = container.cradle;
  const projectId = (await params).projectId;

  const [project, _reviewers] = await Promise.all([
    projectService.findById(projectId),
    reviewerService.listReviewers(),
  ]);

  if (!project) throw notFound();

  const projectReviewerIds = project.reviewers.map((reviewer) => reviewer.id);
  const activeReviewers = projectReviewerIds.length;
  const reviewers = _reviewers.map((r) => ({
    ...r,
    enabled: projectReviewerIds.includes(r.id),
  }));

  return (
    <>
      <BreadCrumbHelper items={["Projects", { label: project.name }]} />
      <Main>
        <TitleSection>
          <div className="flex items-center gap-4">
            <ProjectAvatar projectName={project.name} options={{ size: 40 }} />
            <div className="flex flex-col justify-evenly">
              <H1>{project.name}</H1>
              <HSub>Manage your project reviewers</HSub>
            </div>
          </div>
          <Button asChild variant="link" size="icon">
            <Link target="_blank" href={project.url}>
              <ExternalLinkIcon />
            </Link>
          </Button>
        </TitleSection>
        <div className="space-y-16">
          <ProjectSettings {...project} />
          <ProjectReviewers
            reviewers={reviewers}
            activeReviewers={activeReviewers}
            projectId={projectId}
          />
        </div>
      </Main>
    </>
  );
}
