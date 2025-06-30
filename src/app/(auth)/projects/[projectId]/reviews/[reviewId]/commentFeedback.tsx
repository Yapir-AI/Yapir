"use client";

import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import type { Comment } from "@/generated/prisma/client";
import { reviewCommentAction } from "@/lib/comment/action";
import type { CommentReview } from "@/lib/comment/schema";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function CommentFeedback(comment: Comment) {
  const [status, setStatus] = useState<CommentReview["action"] | "NONE">(
    comment.thumbsUp ? "UP" : comment.thumbsDown ? "DOWN" : "NONE",
  );

  async function review() {
    const newStatus = status === "UP" ? "DOWN" : "UP";
    setStatus(newStatus);
    await reviewCommentAction({ id: comment.id, action: newStatus });
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => review()}
        className={cn(
          "relative flex size-9 items-center justify-center rounded transition-colors",
          status === "UP" && "bg-success/10 text-success hover:bg-success/30",
          status === "DOWN" &&
            "bg-destructive/15 text-destructive hover:bg-destructive/30",
        )}
      >
        <ThumbsUpIcon
          className={cn(
            "absolute size-5 transition-transform duration-200",
            status !== "UP" && "scale-0 rotate-180",
          )}
        />
        <ThumbsUpIcon
          className={cn(
            "absolute size-5 transition-transform duration-200",
            status !== "NONE" && "scale-0 rotate-180",
          )}
        />
        <ThumbsDownIcon
          className={cn(
            "absolute size-5 transition-transform duration-200",
            status !== "DOWN" && "scale-0 rotate-180",
          )}
        />
      </button>
    </div>
  );
}
