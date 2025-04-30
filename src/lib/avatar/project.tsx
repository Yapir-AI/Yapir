import { glass } from "@dicebear/collection";
import type { Options } from "@dicebear/core";
import { Avatar } from "@/lib/avatar/index";

export function ProjectAvatar({
  options,
  projectName,
}: {
  projectName: string;
  options?: Partial<glass.Options & Options>;
}) {
  return (
    <div className="relative size-fit shrink-0">
      <Avatar
        style={glass}
        options={{ seed: projectName, radius: 10, size: 64, ...options }}
      />
    </div>
  );
}
