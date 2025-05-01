import { glass } from "@dicebear/collection";
import type { Options } from "@dicebear/core";
import { Avatar } from "@/lib/avatar/index";
import { className } from "postcss-selector-parser";

export function ProjectAvatar({
  options,
  projectName,
  className,
}: {
  projectName: string;
  options?: Partial<glass.Options & Options>;
  className?: string;
}) {
  return (
    <div className="relative size-fit shrink-0">
      <Avatar
        className={className}
        style={glass}
        options={{ seed: projectName, radius: 10, size: 64, ...options }}
      />
    </div>
  );
}
