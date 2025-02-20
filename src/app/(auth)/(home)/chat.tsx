"use client";

import { cn } from "@/lib/utils";
import { useChat } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp } from "lucide-react";
import { type KeyboardEventHandler, useEffect, useRef } from "react";
import { extractJSON } from "@/lib/json/utils";
import type { CoreMessage } from "ai";
import type { Review } from "@prisma/client";

function Message({
  role,
  content,
  className,
}: {
  role: "user" | "assistant" | "system" | "data";
  content: string;
  className?: string;
}) {
  const { beforeJSON, json, afterJSON } =
    role === "system" ? { beforeJSON: content } : extractJSON(content);

  return (
    <div
      className={cn(
        "animate flex w-full max-w-full flex-col space-y-1",
        role === "user" && "items-end pl-2",
        role === "assistant" && "pr-2",
        role === "system" && "items-center",
        className,
      )}
    >
      <p>{role}</p>
      <div
        className={cn(
          "w-fit max-w-full overflow-x-auto whitespace-pre-line rounded p-4",
          role === "assistant" && "mr-2 rounded-r-2xl border",
          role === "system" && "w-full border bg-background",
          role === "user" && "rounded-l-2xl bg-accent",
        )}
      >
        {beforeJSON}
        {json && (
          <pre className="max-w-xs overflow-scroll text-xs sm:max-w-sm md:max-w-md lg:max-w-lg 2xl:max-w-3xl">
            {JSON.stringify(json, null, 2)}
          </pre>
        )}
        {afterJSON}
      </div>
    </div>
  );
}

export function Chat(review: Review) {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
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

  const thinking =
    isLoading && messages[messages.length - 1].role !== "assistant";

  const ref = useRef<HTMLDivElement>(null);

  const submitOnCmdEnter: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  useEffect(() => {
    ref.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="rounded-xl bg-accent/20">
      <div
        className="max-h-[500px] max-w-full space-y-3 overflow-y-scroll rounded p-2"
        ref={ref}
      >
        {messages.map((message) => (
          <Message {...message} key={message.id} />
        ))}
        {thinking && (
          <Message
            className="animate-pulse"
            role="assistant"
            content="Thinking..."
          />
        )}
      </div>
      <div className="my-2" />
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-row gap-2 p-2"
      >
        <Textarea
          className="bg-accent/60"
          name="prompt"
          value={input}
          placeholder="From now on, you can now respond with plain text..."
          onChange={handleInputChange}
          onKeyDown={submitOnCmdEnter}
        />
        {input && (
          <Button
            className={cn(
              "absolute right-4 top-4 rounded-full transition-all duration-500 animate-in fade-in",
            )}
            size="icon"
            variant="secondary"
            type="submit"
          >
            <ArrowUp />
          </Button>
        )}
      </form>
    </div>
  );
}
