import { EmptyCard } from "@/components/rich/emptyCard";
import { CardDescription, CardTitle } from "@/components/ui/card";
import Arrow2 from "@/components/rich/arrow";
import { GitlabCard } from "@/app/(auth)/git/gitlabCard";
import type { Metadata } from "next";
import { container } from "@/lib/di/container";
import { GithubCard } from "@/app/(auth)/git/githubCard";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Git | Yapir",
};

export default async function GitPage() {
  const { gitlabConnectorService, githubConnectorService } = container.cradle;

  const [gitlabInstalls, githubInstalls] = await Promise.all([
    gitlabConnectorService.listConnectors(),
    githubConnectorService.listConnectors(),
  ]);

  if (gitlabInstalls.length === 0 && githubInstalls.length === 0)
    return <NoGit />;
  return (
    <div className="space-y-2">
      {gitlabInstalls.map((install) => (
        <GitlabCard key={install.id} {...install} />
      ))}
      {githubInstalls.map((install) => (
        <GithubCard key={install.id} {...install} />
      ))}
    </div>
  );
}

function NoGit() {
  return (
    <EmptyCard>
      <CardTitle>No Git connection yet.</CardTitle>
      <CardDescription>Create your first one to continue.</CardDescription>
      <Arrow2 className="absolute top-[15%] right-[8%] size-32" />
    </EmptyCard>
  );
}
