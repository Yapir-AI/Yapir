"use client";

import { Accordion } from "@/components/ui/accordion";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import type { ProviderListElement } from "@/lib/provider/service";
import { ProviderCard } from "@/app/(auth)/providers/providerCard";

export function ProviderList({
  providers,
}: {
  providers: ProviderListElement[];
}) {
  const [ref] = useAutoAnimate();

  return (
    <Accordion type="multiple">
      <div className="space-y-2" ref={ref}>
        {providers.map((provider) => (
          <ProviderCard {...provider} key={provider.id} />
        ))}
      </div>
    </Accordion>
  );
}
