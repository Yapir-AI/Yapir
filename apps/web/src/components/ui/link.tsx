import { createLink } from "@tanstack/react-router";

import { cn } from "#web/lib/utils";

function LinkPrimitive({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      className={cn(
        "text-primary underline-offset-4 hover:underline",
        className,
      )}
      {...props}
    />
  );
}

export const Link = createLink(LinkPrimitive);
