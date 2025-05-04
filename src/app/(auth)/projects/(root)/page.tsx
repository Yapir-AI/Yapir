import { container } from "@/lib/di/container";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { EmptyCard } from "@/components/rich/emptyCard";
import { ProjectCard } from "@/lib/project/components/projectCard";
import {
  CardList,
  CardListTitle,
  EmptyCardList,
} from "@/components/ui/card-list";
import { ProjectList } from "@/lib/project/components/ProjectList";

export default async function ProjectsPage() {
  const projects = await container.cradle.projectService.listProjects();

  if (projects.length === 0) {
    return (
      <CardList>
        <CardListTitle>Projects</CardListTitle>

        <EmptyCardList>
          <CardTitle>Currently no Project...</CardTitle>
          <CardDescription>
            Open a Merge/Pull Request on one of your git projects. <br />
            The Project will appear here.
          </CardDescription>
        </EmptyCardList>
      </CardList>
    );
  }

  return <ProjectList projects={projects} />;
}
