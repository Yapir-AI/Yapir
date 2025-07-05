import type { ProjectPage } from "@/lib/project/service";
import {
  CardList,
  CardListItem,
  CardListTitle,
} from "@/components/ui/card-list";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { routes } from "@/lib/route";
import { ProjectAvatar } from "@/lib/project/components/project-avatar";

export function ProjectList({
  projects,
  className,
  title,
}: {
  title?: string;
  projects: ProjectPage;
  className?: string;
}) {
  return (
    <CardList className={className}>
      <CardListTitle>{title ?? "Projects"}</CardListTitle>
      <div className="overflow-y-auto">
        {projects.map((project) => (
          <CardListItem
            href={routes.project(project.id)}
            className="flex gap-4"
            key={project.id}
          >
            <ProjectAvatar
              name={project.name}
              square
              className="size-16 rounded"
            />
            <div className="flex flex-col justify-evenly">
              <CardTitle className="group-hover:underline">
                {project.name}
              </CardTitle>
              <CardDescription>{project.fullName}</CardDescription>
            </div>
          </CardListItem>
        ))}
      </div>
    </CardList>
  );
}
