import { botttsNeutral } from "@dicebear/collection";
import type { Options } from "@dicebear/core";
import { Avatar } from "@/lib/avatar/index";

export function ReviewerAvatar({
  options,
  reviewerName,
}: {
  reviewerName: string;
  options?: Partial<botttsNeutral.Options & Options>;
}) {
  return (
    <Avatar
      style={botttsNeutral}
      options={{ seed: reviewerName, size: 80, radius: 10, ...options }}
    />
  );
}
