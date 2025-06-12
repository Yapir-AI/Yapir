import { Avatar } from "@/lib/avatar";
import React from "react";

export function ReviewerAvatar(props: React.ComponentProps<typeof Avatar>) {
  return <Avatar {...props} variant="beam" />;
}
