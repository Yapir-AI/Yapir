import { container } from "@/lib/di/container";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { EmptyCard } from "@/components/rich/emptyCard";
import { ProjectCard } from "@/lib/project/components/projectCard";

export default async function ProjectsPage() {
  const projects = await container.cradle.projectService.listProjects();

  if (projects.length === 0) {
    return (
      <EmptyCard>
        <CardTitle>Currently no Project...</CardTitle>
        <CardDescription>
          Open a Merge/Pull Request on one of your git projects. <br />
          The Project will appear here.
        </CardDescription>
      </EmptyCard>
    );
  }

  return (
    <div className="grid gap-2 xl:grid-cols-2 2xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard {...project} key={project.id} />
      ))}
    </div>
  );
}
