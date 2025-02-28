import type { ReviewerListElement } from "@/lib/reviewer/service";
import { providerConfigs } from "@/lib/provider/model/configs";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/lib/avatar";
import { botttsNeutral } from "@dicebear/collection";
import type { ReactNode } from "react";
import Link from "next/link";
import { routes } from "@/lib/route";

export function ReviewerCard({
  name,
  aiProvider,
  children,
  id,
}: ReviewerListElement & { children?: ReactNode }) {
  const { name: providerName } = providerConfigs[aiProvider.type];

  return (
    <Card className="flex gap-4 p-4">
      <Link className="group flex grow gap-4" href={routes.reviewer(id)}>
        <Avatar
          style={botttsNeutral}
          options={{ seed: name, size: 64, radius: 10 }}
        />
        <div className="flex flex-col justify-evenly">
          <CardTitle className="group-hover:underline">{name}</CardTitle>
          <CardDescription>
            {providerName} | {aiProvider.model}
          </CardDescription>
        </div>
      </Link>
      {children && (
        <div className="ml-auto flex flex-col justify-center">{children}</div>
      )}
    </Card>
  );
}
