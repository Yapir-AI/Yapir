import { container } from "@/lib/di/container";
import type { ProjectListElement } from "@/lib/project/service";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/lib/avatar";
import { glass } from "@dicebear/collection";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/route";
import { EmptyCard } from "@/components/rich/emptyCard";

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
        <Project {...project} key={project.id} />
      ))}
    </div>
  );
}

function Project({ name, fullName, url, id }: ProjectListElement) {
  return (
    <Card className="flex items-center justify-between p-4">
      <Link className="group flex grow gap-4" href={routes.project(id)}>
        <Avatar style={glass} options={{ seed: name, size: 64, radius: 10 }} />
        <div className="flex flex-col justify-evenly">
          <CardTitle className="group-hover:underline">{name}</CardTitle>
          <CardDescription>{fullName}</CardDescription>
        </div>
      </Link>
      <Button asChild size="icon" variant="ghost">
        <Link href={url} target="_blank">
          <ExternalLink />
        </Link>
      </Button>
    </Card>
  );
}
