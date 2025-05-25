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
  const { projectService } = container.cradle;
  const { projectId } = await params;
  const project = await projectService.findByIdIncluding(projectId, {
    reviewers: true,
  });

  return (
    <>
      <BreadCrumbHelper
        items={[
          "Projects",
          breadCrumbFactory.project(project),
          { label: "Chat" },
        ]}
      />
      <Main className="max-w-4xl">
        <ProjectChat projectName={project.name} reviewers={project.reviewers} />
      </Main>
    </>
  );
}
