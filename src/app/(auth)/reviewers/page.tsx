import { container } from "@/lib/di/container";
import type { ReviewerListElement } from "@/lib/reviewer/service";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { useMemo } from "react";
import { createAvatar } from "@dicebear/core";
import { botttsNeutral } from "@dicebear/collection";
import { providerConfigs } from "@/lib/provider/model/configs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviewers | Yapir",
};

export default async function ReviewersPage() {
  const reviewers = await container.cradle.reviewerService.listReviewers();

  return (
    <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {reviewers.map((reviewer) => (
        <Reviewer {...reviewer} key={reviewer.id} />
      ))}
    </div>
  );
}

function Reviewer({ name, provider }: ReviewerListElement) {
  const avatar = useMemo(() => {
    return createAvatar(botttsNeutral, {
      seed: name,
      size: 64,
      radius: 10,
    }).toDataUri();
  }, []);

  const { name: providerName } = providerConfigs[provider.type];

  return (
    <Card className="flex gap-6 p-4">
      <img src={avatar} alt={`${name}-avatar`} />
      <div className="flex flex-col justify-evenly">
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          {providerName} | {provider.model}
        </CardDescription>
      </div>
    </Card>
  );
}
