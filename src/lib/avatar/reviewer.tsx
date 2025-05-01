import { botttsNeutral } from "@dicebear/collection";
import type { Options } from "@dicebear/core";
import { Avatar } from "@/lib/avatar/index";
import { className } from "postcss-selector-parser";

export function ReviewerAvatar({
  options,
  reviewerName,
  className,
}: {
  reviewerName: string;
  options?: Partial<botttsNeutral.Options & Options>;
  className?: string;
}) {
  return (
    <Avatar
      className={className}
      style={botttsNeutral}
      options={{ seed: reviewerName, size: 80, radius: 10, ...options }}
    />
  );
}
