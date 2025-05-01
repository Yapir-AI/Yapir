"use client";

import type { GitProject } from "@prisma/client";
import { SidebarPortal } from "@/components/rich/AppSideBar";
import { routes } from "@/lib/route";
import { CogIcon, GitPullRequestIcon } from "lucide-react";
import { ProjectAvatar } from "@/lib/avatar/project";

export function ProjectSidebar({ project }: { project: GitProject }) {
  return (
    <SidebarPortal
      navGroups={[
        {
          title: "Project",
          items: [
            {
              title: project.name,
              url: routes.project(project.id),
              strict: true,
              icon: () => (
                <ProjectAvatar
                  projectName={project.name}
                  options={{ size: 20 }}
                />
              ),
            },
            {
              title: "Merge Request",
              url: routes.mergeRequests(project.id),
              icon: GitPullRequestIcon,
            },
            {
              title: "Settings",
              url: routes.projectSettings(project.id),
              icon: CogIcon,
            },
          ],
        },
      ]}
    />
  );
}
