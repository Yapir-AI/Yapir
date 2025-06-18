import { BreadCrumbHelper } from "@/components/rich/BreadCrumbHelper";
import { breadCrumbFactory } from "@/components/rich/BreadCrumbFactory";
import { container } from "@/lib/di/container";
import { Main } from "@/components/ui/main";
import { ProjectChat } from "@/app/(auth)/projects/[projectId]/chat/ProjectChat";

export default async function ProjectChatPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectService, reviewerService } = container.cradle;
  const { projectId } = await params;
  const [project, reviewers] = await Promise.all([
    projectService.findById(projectId),
    reviewerService.listReviewers(),
  ]);

  return (
    <>
      <BreadCrumbHelper
        items={[
          "Projects",
          breadCrumbFactory.project(project),
          { label: "Chat" },
        ]}
      />
      <Main className="max-w-5xl">
        <ProjectChat projectName={project.name} reviewers={reviewers} />
      </Main>
    </>
  );
}
