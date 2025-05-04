import type { AiProviderPage } from "@/lib/provider/service";
import Link from "next/link";
import { routes } from "@/lib/route";
import { cn } from "@/lib/utils";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { H3 } from "@/components/ui/typography";
import { BrainIcon } from "lucide-react";
import { GradientCard } from "@/components/ui/gradientCard";
import type { AiProviderType } from "@prisma/client";
import { providerConfigs } from "@/lib/provider/model/configs";
import { Badge } from "@/components/ui/badge";
import { NoCard } from "@/app/(auth)/(home)/noCard";

export function AiProvidersCard({
  page,
  enabled = true,
}: {
  page: AiProviderPage;
  enabled?: boolean;
}) {
  const providers = [...new Set(page.map((p) => p.type))];
  return (
    <Link href={routes.providers}>
      <GradientCard
        className={cn("justify-between gap-8", !enabled && "opacity-50")}
      >
        <CardTitle className="flex items-center justify-between gap-2">
          <H3>AI Providers</H3>
        </CardTitle>
        <div className="flex items-center justify-evenly">
          {providers.map((type) => (
            <ProviderElement key={type} type={type} />
          ))}
        </div>
        <CardDescription className="flex items-center">
          <BrainIcon className="stroke-muted-foreground mr-2 inline-block size-5" />
          {page.length} AI providers connected.
        </CardDescription>
      </GradientCard>
    </Link>
  );
}

function ProviderElement({ type }: { type: AiProviderType }) {
  const Icon = providerConfigs[type].Icon;

  return (
    <div className="flex flex-col items-center gap-4">
      <Icon className="fill-primary/70 size-16" />
      <Badge variant="outline">{type}</Badge>
    </div>
  );
}

export const NoProvidersCard = () => (
  <NoCard
    enabled={true}
    href={routes.providers}
    Icon={BrainIcon}
    title="No AI providers"
    description={"Connect your AI providers."}
  />
);
