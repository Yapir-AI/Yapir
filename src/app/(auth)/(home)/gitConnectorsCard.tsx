import type { ConnectorPage } from "@/lib/git/connectors/service";
import Link from "next/link";
import { routes } from "@/lib/route";
import { cn } from "@/lib/utils";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { GitBranchIcon } from "lucide-react";
import type { GitProviderType } from "@/generated/prisma/client";
import type { ReactElement } from "react";
import { GitLabIcon } from "@/components/icons/gitlab";
import { GitHubIcon } from "@/components/icons/github";
import { Badge } from "@/components/ui/badge";
import { GradientCard } from "@/components/ui/gradientCard";
import { NoCard } from "@/app/(auth)/(home)/noCard";
import type { OnboardingStep } from "@/app/(auth)/(home)/onboarding";
import { H3 } from "@/components/ui/typography";

export function GitConnectorsCard({
  page,
  enabled = true,
}: {
  page: ConnectorPage;
  enabled?: boolean;
}) {
  const connectors = [...new Set(page.connectors.map((c) => c.type))];
  return (
    <Link href={routes.git}>
      <GradientCard
        className={cn("justify-between gap-8", !enabled && "opacity-50")}
      >
        <CardTitle className="flex items-center gap-2">
          <H3>Git Connectors</H3>
        </CardTitle>
        <div className="flex items-center justify-evenly">
          {connectors.map((type) => (
            <GitElement key={type} type={type} />
          ))}
        </div>
        <CardDescription className="flex items-center gap-2">
          <GitBranchIcon className="stroke-muted-foreground size-5" />
          {page.count} Git source connected.
        </CardDescription>
      </GradientCard>
    </Link>
  );
}

const icons: Record<
  GitProviderType,
  ({ className }: { className: string }) => ReactElement
> = {
  GITLAB: GitLabIcon,
  GITHUB: GitHubIcon,
};

function GitElement({ type }: { type: GitProviderType }) {
  const Icon = icons[type];
  return (
    <div className="flex flex-col items-center gap-4">
      <Icon className="fill-primary/70 size-16"></Icon>
      <Badge variant="outline">{type}</Badge>
    </div>
  );
}

export const NoGitConnectorsCard = ({ step }: { step: OnboardingStep }) => (
  <NoCard
    href={routes.git}
    Icon={GitBranchIcon}
    enabled={step === "CONNECTORS"}
    title="Git Connectors"
    description={"Connect your Git repositories."}
  />
);
