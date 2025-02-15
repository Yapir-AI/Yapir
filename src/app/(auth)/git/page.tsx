import { GithubCard } from "@/app/(auth)/git/githubCard";
import { EmptyCard } from "@/components/rich/emptyCard";
import { CardDescription, CardTitle } from "@/components/ui/card";
import Arrow2 from "@/components/rich/arrow";
import { GitlabCard } from "@/app/(auth)/git/gitlabCard";
import type { Metadata } from "next";
import { container } from "@/lib/di/container";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Git | Yapir",
};

export default async function GitPage() {
  const gitlabService = container.resolve("gitlabConnectorService");
  const githubService = container.resolve("githubConnectorService");

  const [githubInstalls, gitlabInstalls] = await Promise.all([
    githubService.listConnectors(),
    gitlabService.listConnectors(),
  ]);

  if (githubInstalls.length === 0 && gitlabInstalls.length === 0)
    return <NoGit />;
  return (
    <div className="space-y-2">
      {githubInstalls.map((install) => (
        <GithubCard {...install} key={install.id} />
      ))}
      {gitlabInstalls.map((install) => (
        <GitlabCard key={install.id} {...install} />
      ))}
    </div>
  );
}

function NoGit() {
  return (
    <EmptyCard>
      <CardTitle>No Git connection yet.</CardTitle>
      <CardDescription>Create your first one to continue.</CardDescription>
      <Arrow2 className="absolute right-[8%] top-[15%] size-32" />
    </EmptyCard>
  );
}
