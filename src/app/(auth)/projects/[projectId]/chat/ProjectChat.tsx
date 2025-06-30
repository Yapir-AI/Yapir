"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useChat } from "@ai-sdk/react";
import { Chat } from "@/components/ui/chat";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Reviewer } from "@/generated/prisma/client";
import { H1, HSub } from "@/components/ui/typography";

export function ProjectChat({
  reviewers,
  projectName,
}: {
  reviewers: Reviewer[];
  projectName: string;
}) {
  const params = useParams();
  const projectId = params.projectId as string;
  const [selectedReviewerId, setSelectedReviewerId] = useState(
    reviewers[0]?.id,
  );

  const chat = useChat({
    api: "/api/chat",
    body: {
      reviewerId: selectedReviewerId,
      projectId,
    },
    experimental_throttle: 100,
  });

  return (
    <div className="h-[calc(100%-68px)] max-h-full space-y-4">
      <div className="flex justify-between">
        <div>
          <H1>{projectName}</H1>
          <HSub>Chat with your project.</HSub>
        </div>
        <div className="mp-4 flex items-center gap-2">
          <span className="text-sm font-medium">Reviewer:</span>
          <Select
            value={selectedReviewerId}
            onValueChange={setSelectedReviewerId}
          >
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select a reviewer" />
            </SelectTrigger>
            <SelectContent>
              {reviewers.map((reviewer) => (
                <SelectItem key={reviewer.id} value={reviewer.id}>
                  {reviewer.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      {!!selectedReviewerId && (
        <Chat
          className="h-full"
          handleSubmit={chat.handleSubmit}
          messages={chat.messages}
          input={chat.input}
          handleInputChange={chat.handleInputChange}
          isGenerating={chat.status === "streaming"}
          append={chat.append}
          stop={chat.stop}
          suggestions={[
            "I'm new to the project and want to discover things.",
            "What's the exception strategy?",
            "Can you give me an example of a test?",
          ]}
        />
      )}
    </div>
  );
}
