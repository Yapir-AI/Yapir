"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import {
  stackoverflowDark as darkTheme,
  stackoverflowLight as lightTheme,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import React from "react";
import { useTheme } from "next-themes";
import { dark } from "@/components/rich/ThemeToggle";

export function CodeHighlight({
  language,
  children,
  className,
}: {
  language: string;
  className?: string;
  children: string;
}) {
  const { theme } = useTheme();
  const isDark = theme === dark;

  return (
    <SyntaxHighlighter
      wrapLongLines={true}
      language={language}
      className={className}
      style={isDark ? darkTheme : lightTheme}
      customStyle={{
        background: "transparent",
        padding: 0,
        maxWidth: "100%",
        overflowWrap: "break-word",
        wordBreak: "break-word",
        overflow: "hidden",
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
}
