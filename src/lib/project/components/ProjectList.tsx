import type { ProjectPage } from "@/lib/project/service";
import {
  CardList,
  CardListItem,
  CardListTitle,
} from "@/components/ui/card-list";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { routes } from "@/lib/route";
import { ProjectAvatar } from "@/lib/avatar/project";

export function ProjectList({
  projects,
  className,
}: {
  projects: ProjectPage;
  className?: string;
}) {
  return (
    <CardList className={className}>
      <CardListTitle>Projects</CardListTitle>
      {projects.map((project) => (
        <CardListItem
          href={routes.project(project.id)}
          className="flex gap-4"
          key={project.id}
        >
          <ProjectAvatar projectName={project.name} />
          <div className="flex flex-col justify-evenly">
            <CardTitle className="group-hover:underline">
              {project.name}
            </CardTitle>
            <CardDescription>{project.fullName}</CardDescription>
          </div>
        </CardListItem>
      ))}
    </CardList>
  );
}
