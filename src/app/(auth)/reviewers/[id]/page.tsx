import { TitleSection } from "@/components/rich/titleSection";
import { H1, H3, HSub } from "@/components/ui/typography";
import { Main } from "@/components/ui/main";
import { container } from "@/lib/di/container";
import { BreadCrumbHelper } from "@/components/rich/BreadCrumbHelper";
import { Avatar } from "@/lib/avatar";
import { botttsNeutral } from "@dicebear/collection";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateReviewer } from "@/lib/reviewer/action";
import {
  type ReviewerWithProviderAndProjects,
  reviewerWithProviderAndProjects,
} from "@/lib/reviewer/types";
import { ProjectCard } from "@/lib/project/components/projectCard";
import { SystemPrompt } from "@/app/(auth)/reviewers/[id]/SystemPrompt";
import Link from "next/link";
import { routes } from "@/lib/route";
import type { AiProviderType, Reviewer } from "@prisma/client";
import { Switch } from "@/components/ui/switch";
import { providerConfigs } from "@/lib/provider/model/configs";

export default async function ReviewerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { reviewerService, providerService } = container.cradle;
  const reviewerId = await params.then((p) => p.id);

  const [reviewer, providers] = await Promise.all([
    await reviewerService.findById(reviewerId, reviewerWithProviderAndProjects),
    await providerService.listProviders(),
  ]);

  return (
    <>
      <BreadCrumbHelper
        items={["Home", "Reviewers", { label: reviewer.name }]}
      />
      <Main>
        <TitleSection>
          <div className="flex gap-8">
            <Avatar
              style={botttsNeutral}
              options={{ seed: reviewer.name, size: 80, radius: 10 }}
            />
            <div className="flex flex-col justify-evenly">
              <H1>{reviewer.name}</H1>
              <HSub>{reviewer.aiProvider.model}</HSub>
            </div>
          </div>
          <div className="flex flex-col gap-2"></div>
        </TitleSection>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <ProjectInstructions {...reviewer} />
            <SystemPrompt {...reviewer} />
          </div>
          <div className="space-y-10">
            <ProviderSelect
              providers={providers}
              reviewerId={reviewerId}
              currentProviderId={reviewer.aiProviderId}
            />
            <Projects {...reviewer} />
          </div>
        </div>
      </Main>
    </>
  );
}

function ProviderSelect({
  providers,
  reviewerId,
  currentProviderId,
}: {
  currentProviderId: string;
  reviewerId: string;
  providers: { id: string; type: AiProviderType }[];
}) {
  async function updateProvider(providerId: string) {
    "use server";

    await updateReviewer({
      reviewerId,
      providerId,
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <H3>Provider</H3>
      <Select defaultValue={currentProviderId} onValueChange={updateProvider}>
        <SelectTrigger id="provider-select">
          <SelectValue placeholder="Select a provider" />
        </SelectTrigger>
        <SelectContent>
          {providers.map((provider) => (
            <SelectItem key={provider.id} value={provider.id}>
              {providerConfigs[provider.type].name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

function Projects(reviewer: ReviewerWithProviderAndProjects) {
  return (
    <div className="flex flex-col gap-4">
      <H3>Associated Projects</H3>
      {reviewer.projects.length === 0 && (
        <span className="text-muted-foreground mt-2 text-center text-sm">
          <p>No associated projects yet</p>
          <Link className="hover:underline" href={routes.projects}>
            Go to projects
          </Link>
        </span>
      )}
      {reviewer.projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}

function ProjectInstructions(reviewer: Reviewer) {
  async function toggleProjectInstructions(value: boolean) {
    "use server";
    await updateReviewer({
      reviewerId: reviewer.id,
      useProjectInstructions: value,
    });
  }

  return (
    <div className="flex items-center justify-between">
      <div className="space-y-4">
        <H3>Project Instructions</H3>
        <p className="text-muted-foreground text-sm">
          When enabled, the reviewer will use the{" "}
          <span className="italic">.yapir/instructions.md </span>
          file in the review.
        </p>
      </div>
      <Switch
        checked={reviewer.useProjectInstructions}
        onCheckedChange={toggleProjectInstructions}
      />
    </div>
  );
}
