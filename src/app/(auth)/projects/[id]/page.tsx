import { container } from "@/lib/di/container";
import { notFound } from "next/navigation";
import { Main } from "@/components/ui/main";
import { TitleSection } from "@/components/rich/titleSection";
import { H1, HSub } from "@/components/ui/typography";
import { ProjectReviewers } from "@/app/(auth)/projects/[id]/pageContent";

import { BreadCrumbHelper } from "@/components/rich/BreadCrumbHelper";
import { ProjectAvatar } from "@/lib/avatar/project";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { projectService, reviewerService } = container.cradle;
  const projectId = (await params).id;

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
      <BreadCrumbHelper items={["Home", "Projects", { label: project.name }]} />
      <Main>
        <TitleSection>
          <div className="flex gap-8">
            <ProjectAvatar projectName={project.name} options={{ size: 80 }} />
            <div className="flex flex-col justify-evenly">
              <H1>{project.name}</H1>
              <HSub>Manage your project reviewers</HSub>
            </div>
          </div>
        </TitleSection>
        <ProjectReviewers
          reviewers={reviewers}
          activeReviewers={activeReviewers}
          projectId={projectId}
        />
      </Main>
    </>
  );
}
