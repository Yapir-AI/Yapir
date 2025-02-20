import type { ReviewerListElement } from "@/lib/reviewer/service";
import { providerConfigs } from "@/lib/provider/model/configs";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/lib/avatar";
import { botttsNeutral } from "@dicebear/collection";
import type { ReactNode } from "react";

export function ReviewerCard({
  name,
  aiProvider,
  children,
}: ReviewerListElement & { children?: ReactNode }) {
  const { name: providerName } = providerConfigs[aiProvider.type];

  return (
    <Card className="flex gap-4 p-4">
      <Avatar
        style={botttsNeutral}
        options={{ seed: name, size: 64, radius: 10 }}
      />
      <div className="flex flex-col justify-evenly">
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          {providerName} | {aiProvider.model}
        </CardDescription>
      </div>
      {children && (
        <div className="ml-auto flex flex-col justify-center">{children}</div>
      )}
    </Card>
  );
}
