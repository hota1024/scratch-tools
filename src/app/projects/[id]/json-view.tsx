"use client";

import Editor from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { ProjectJson } from "project-json";

export function JsonView(props: { json: ProjectJson }) {
  const { json } = props;
  const jsonText = JSON.stringify(json, null, 2);
  const theme = useTheme();

  return (
    <Editor
      className="min-h-screen w-full"
      value={jsonText}
      language="json"
      theme={theme.theme === "dark" ? "vs-dark" : "vs"}
    />
  );
}
