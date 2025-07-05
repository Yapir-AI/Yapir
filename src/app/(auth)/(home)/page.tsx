import { Main } from "@/components/ui/main";
import { BreadCrumbHelper } from "@/components/rich/BreadCrumbHelper";
import { container } from "@/lib/di/container";
import { TitleSection } from "@/components/rich/titleSection";
import { H1 } from "@/components/ui/typography";
import { ReviewerList } from "@/lib/reviewer/ReviewerList";
import { ProjectList } from "@/lib/project/components/ProjectList";
import {
  GitConnectorsCard,
  NoGitConnectorsCard,
} from "@/app/(auth)/(home)/gitConnectorsCard";
import {
  AiProvidersCard,
  NoProvidersCard,
} from "@/app/(auth)/(home)/aiProvidersCard";
import { getStep, type OnboardingStep } from "@/app/(auth)/(home)/onboarding";
import { NoCardList } from "@/app/(auth)/(home)/noCard";
import { routes } from "@/lib/route";
import { BotIcon, FolderGitIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default async function HomePage() {
  const { connectorService, providerService, projectService, reviewerService } =
    container.cradle;
  const [connectorPage, providers, projects, reviewers] = await Promise.all([
    connectorService.listConnectors(),
    providerService.listProviders(),
    projectService.listProjects({ take: 10 }),
    reviewerService.listReviewers(),
  ]);

  const step = getStep(connectorPage, providers, projects, reviewers);

  return (
    <>
      <BreadCrumbHelper items={["Home"]} />
      <Main className="max-w-5xl">
        <TitleSection>
          <H1>Home</H1>
        </TitleSection>
        <div className="grid gap-3 lg:grid-cols-2">
          {providers.length === 0 ? (
            <NoProvidersCard />
          ) : (
            <AiProvidersCard page={providers} enabled={step === undefined} />
          )}

          {connectorPage.count === 0 ? (
            <NoGitConnectorsCard step={step} />
          ) : (
            <GitConnectorsCard
              page={connectorPage}
              enabled={step === undefined}
            />
          )}
          {reviewers.length === 0 ? (
            <NoReviewerCard step={step} />
          ) : (
            <ReviewerList
              reviewers={reviewers}
              className={cn(step !== undefined && "opacity-50")}
            />
          )}
          {projects.length === 0 ? (
            <NoProjectCard step={step} />
          ) : (
            <ProjectList
              projects={projects}
              className={cn(step !== undefined && "opacity-50", "max-h-80")}
            />
          )}
        </div>
      </Main>
    </>
  );
}

function NoReviewerCard({ step }: { step: OnboardingStep }) {
  return (
    <NoCardList
      enabled={step === "REVIEWERS"}
      title="Reviewers"
      href={routes.reviewers}
      Icon={BotIcon}
      description={"Create a reviewer."}
    />
  );
}

function NoProjectCard({ step }: { step: OnboardingStep }) {
  return (
    <NoCardList
      enabled={step === "PROJECTS"}
      title="Projects"
      href={routes.projects}
      Icon={FolderGitIcon}
      description={"Create a project."}
    />
  );
}
