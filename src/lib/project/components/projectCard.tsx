import type { ProjectListElement } from "@/lib/project/service";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { routes } from "@/lib/route";
import { Avatar } from "@/lib/avatar";
import { glass } from "@dicebear/collection";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function ProjectCard({ name, fullName, url, id }: ProjectListElement) {
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
