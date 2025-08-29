"use client";

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai/conversation";
import { Message, MessageContent } from "@/components/ai/message";
import {
  PromptInput,
  PromptInputModelSelect,
  PromptInputModelSelectContent,
  PromptInputModelSelectItem,
  PromptInputModelSelectTrigger,
  PromptInputModelSelectValue,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
} from "@/components/ai/prompt-input";
import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import type { UIMessage, InferUITools } from "ai";
import type { ChatTools } from "@/app/api/chat/tools";
import { lastAssistantMessageIsCompleteWithToolCalls } from "ai";
import { Response } from "@/components/ai/response";
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/components/ai/reasoning";
import { Loader } from "@/components/ai/loader";
import type { Reviewer } from "@/generated/prisma/client";
import { useParams } from "next/navigation";
import {
  Tool,
  ToolContent,
  ToolHeader,
  ToolInput,
  ToolOutput,
} from "@/components/ai/tool";
import { CodeBlock } from "@/components/ai/code-block";

type ChatUITools = InferUITools<ChatTools>;
type ChatUIMessage = UIMessage<unknown, Record<string, unknown>, ChatUITools>;

export const Chat = ({
  reviewers,
  projectName,
}: {
  reviewers: Reviewer[];
  projectName: string;
}) => {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat<ChatUIMessage>({
    // Auto-submit when all tool results are available (server-side tools)
    sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithToolCalls,
  });

  const params = useParams();
  const projectId = params.projectId as string;

  const [selectedReviewerId, setSelectedReviewerId] = useState(
    reviewers[0]?.id,
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(
        { text: input },
        {
          body: {
            reviewerId: selectedReviewerId,
            projectId,
          },
        },
      );
      setInput("");
    }
  };

  return (
    <div className="relative mx-auto size-full h-full max-h-full max-w-4xl p-6">
      <div className="flex h-full flex-col">
        <Conversation className="h-full">
          <ConversationContent>
            {messages.map((message) => (
              <div key={message.id}>
                <Message from={message.role} key={message.id}>
                  <MessageContent>
                    {message.parts.map((part, i) => {
                      switch (part.type) {
                        case "text":
                          return (
                            <Response key={`${message.id}-${i}`}>
                              {part.text}
                            </Response>
                          );
                        case "reasoning":
                          return (
                            <Reasoning
                              key={`${message.id}-${i}`}
                              className="w-full"
                              isStreaming={status === "streaming"}
                            >
                              <ReasoningTrigger />
                              <ReasoningContent>{part.text}</ReasoningContent>
                            </Reasoning>
                          );
                        case "step-start":
                          return (
                            <div
                              key={`${message.id}-${i}`}
                              className="text-gray-500"
                            >
                              <hr className="my-2 border-gray-300" />
                            </div>
                          );
                        case "tool-getFile": {
                          return (
                            <Tool key={`${message.id}-${i}`}>
                              <ToolHeader
                                type={`Reading: ${part.input?.path}`}
                                state={part.state}
                              />
                              <ToolContent>
                                <ToolInput input={part.input} />
                                <ToolOutput
                                  errorText={part.errorText}
                                  output={
                                    <CodeBlock
                                      className="max-h-96 overflow-y-auto"
                                      code={part.output ?? ""}
                                      language={
                                        part.input?.path?.split(".").pop()!
                                      }
                                    />
                                  }
                                />
                              </ToolContent>
                            </Tool>
                          );
                        }
                        case "tool-searchContent": {
                          return (
                            <Tool key={`${message.id}-${i}`}>
                              <ToolHeader
                                type={`Searching: ${part.input?.search}`}
                                state={part.state}
                              />
                              <ToolContent>
                                <ToolInput input={part.input} />
                                <ToolOutput
                                  errorText={part.errorText}
                                  output={
                                    <CodeBlock
                                      code={JSON.stringify(
                                        part.output,
                                        null,
                                        2,
                                      )}
                                      language="json"
                                    />
                                  }
                                />
                              </ToolContent>
                            </Tool>
                          );
                        }
                        default:
                          return null;
                      }
                    })}
                  </MessageContent>
                </Message>
              </div>
            ))}
            {status === "submitted" && <Loader />}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>

        <PromptInput onSubmit={handleSubmit} className="mt-4">
          <PromptInputTextarea
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <PromptInputToolbar>
            <PromptInputTools>
              <PromptInputModelSelect
                onValueChange={(value) => {
                  setSelectedReviewerId(value);
                }}
                value={selectedReviewerId}
              >
                <PromptInputModelSelectTrigger>
                  <PromptInputModelSelectValue />
                </PromptInputModelSelectTrigger>
                <PromptInputModelSelectContent>
                  {reviewers.map((reviewer) => (
                    <PromptInputModelSelectItem
                      key={reviewer.id}
                      value={reviewer.id}
                    >
                      {reviewer.name}
                    </PromptInputModelSelectItem>
                  ))}
                </PromptInputModelSelectContent>
              </PromptInputModelSelect>
            </PromptInputTools>
            <PromptInputSubmit disabled={!input} status={status} />
          </PromptInputToolbar>
        </PromptInput>
      </div>
    </div>
  );
};
