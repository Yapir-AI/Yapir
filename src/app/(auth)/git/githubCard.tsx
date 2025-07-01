import { GitHubIcon } from "@/components/icons/github";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import type { GithubConnectorListElement } from "@/lib/git/connectors/github/connectorService";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function GithubCard({ slug, createdAt }: GithubConnectorListElement) {
  return (
    <Card className="flex items-center gap-5 p-5">
      <GitHubIcon className="fill-foreground size-8" />
      <div>
        <CardTitle>GitHub</CardTitle>
        <CardDescription>{slug}</CardDescription>
        <CardDescription>
          Created {new Date(createdAt).toLocaleDateString()}
        </CardDescription>
      </div>
      <Button asChild variant="link" className="ml-auto">
        <Link
          href={`https://github.com/apps/${slug}/installations/new`}
          target="_blank"
        >
          Add to project
          <ExternalLink />
        </Link>
      </Button>
    </Card>
  );
}
