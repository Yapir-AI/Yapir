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
  const initials = projectName
    .split(/[-\s_]/)
    .filter((part) => part.length > 0)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 3); // Limit to first 3 characters to avoid overcrowding

  return (
    <div className="relative size-fit">
      <p className="absolute inset-0 z-10 flex items-center justify-center text-3xl font-bold text-white mix-blend-exclusion">
        {initials}
      </p>
      <Avatar
        style={glass}
        options={{ seed: projectName, radius: 10, size: 64, ...options }}
      />
    </div>
  );
}
