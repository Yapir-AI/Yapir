import type { ConnectorPage } from "@/lib/git/connectors/service";
import type { AiProviderPage } from "@/lib/provider/service";
import type { ProjectPage } from "@/lib/project/service";
import type { ReviewersList } from "@/lib/reviewer/service";

export function getStep(
  connectorPage: ConnectorPage,
  providers: AiProviderPage,
  projects: ProjectPage,
  reviewers: ReviewersList,
) {
  if (providers.length === 0) return "PROVIDERS";
  if (connectorPage.count === 0) return "CONNECTORS";
  if (reviewers.length === 0) return "REVIEWERS";
  if (projects.length === 0) return "PROJECTS";
}
export type OnboardingStep = ReturnType<typeof getStep>;
