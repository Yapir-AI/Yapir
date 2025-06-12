import React from "react";
import { Avatar } from "@/lib/avatar";

export function ProjectAvatar(props: React.ComponentProps<typeof Avatar>) {
  return <Avatar {...props} variant="marble" />;
}
