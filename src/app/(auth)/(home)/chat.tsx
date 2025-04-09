"use client";

import { useChat } from "@ai-sdk/react";
import type { CoreMessage } from "ai";
import type { ReviewListElement } from "@/lib/review/service";
import { Chat as ChatComponent } from "@/components/ui/chat";

export function Chat(review: ReviewListElement) {
  const {
    messages,
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    isLoading,
    append,
    stop,
  } = useChat({
    initialMessages: [
      ...(review.messages as CoreMessage[]).map(({ content, role }, id) => ({
        content: content as string,
        role: role as "system" | "user" | "assistant",
        id: "" + id,
      })),
      {
        role: "assistant",
        content:
          "Now that I answered your review. You can know ask me anything about it, such as writing a summary. I'll be able to respond with proper text.",
        id: "released",
      },
    ],
    body: {
      reviewerId: review.reviewerId,
    },
    experimental_throttle: 100,
  });

  return (
    <ChatComponent
      append={append}
      className="max-h-[500px] min-h-[500px]"
      messages={messages}
      input={input}
      suggestions={["do things", "or other", "stuff"]}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      isGenerating={isLoading}
      stop={stop}
    />
  );
}
const summaryPrompt =
  "Can you write me a summary of the initial changes regardless of issues?";
const fixPrompt = "Can you help me fix the issues one by one?";
