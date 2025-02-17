import { ProviderList } from "@/app/(auth)/providers/list";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { EmptyCard } from "@/components/rich/emptyCard";
import Arrow2 from "@/components/rich/arrow";
import type { Metadata } from "next";
import { container } from "@/lib/di/container";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Providers | Yapir",
};

export default async function ProvidersPage() {
  const providers = await container.resolve("providerService").listProviders();

  if (providers.length == 0) return <NoProvider />;

  return <ProviderList providers={providers} />;
}

function NoProvider() {
  return (
    <EmptyCard>
      <CardTitle>No AI Provider yet.</CardTitle>
      <CardDescription>Create your first one to continue.</CardDescription>
      <Arrow2 className="absolute right-[8%] top-[15%] size-32" />
    </EmptyCard>
  );
}
