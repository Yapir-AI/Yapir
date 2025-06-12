import { container } from "@/lib/di/container";
import { notFound } from "next/navigation";
import { Main } from "@/components/ui/main";
import { TitleSection } from "@/components/rich/titleSection";
import { H1, HSub } from "@/components/ui/typography";

import { BreadCrumbHelper } from "@/components/rich/BreadCrumbHelper";
import { ProjectReviewers } from "@/app/(auth)/projects/[projectId]/settings/project-reviewers";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CogIcon, ExternalLinkIcon } from "lucide-react";
import { ProjectSettings } from "@/app/(auth)/projects/[projectId]/settings/projectSettings";
import { breadCrumbFactory } from "@/components/rich/BreadCrumbFactory";

export default async function ProjectSettingsPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectService } = container.cradle;
  const projectId = (await params).projectId;

  const project = await projectService.findByIdIncluding(projectId, {
    reviewers: {
      include: { aiProvider: { omit: { apiKey: true } } },
    },
  });

  if (!project) throw notFound();

  return (
    <>
      <BreadCrumbHelper
        items={[
          "Projects",
          breadCrumbFactory.project(project),
          { label: "Settings" },
        ]}
      />
      <Main>
        <TitleSection>
          <div className="flex items-center gap-4">
            <CogIcon size={40} className="text-muted-foreground" />
            <div className="flex flex-col justify-evenly">
              <H1>Settings</H1>
              <HSub>{project.fullName}</HSub>
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
            reviewers={project.reviewers}
            projectId={projectId}
          />
        </div>
      </Main>
    </>
  );
}
