import { JSONPath } from "jsonpath-plus";
import { notFound } from "next/navigation";
import { ProjectJson } from "project-json";

import { ProjectInfo } from "@/scratch/project";

import { JsonView } from "./json-view";

export default async function ProjectPage(props: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{
    path?: string;
  }>;
}) {
  const { id } = await props.params;
  const { path } = await props.searchParams;
  console.log(path);

  if (isNaN(Number(id)) || Number(id) < 0 || Number(id) === Infinity) {
    return notFound();
  }

  const info: ProjectInfo = await fetch(
    `https://api.scratch.mit.edu/projects/${id}`
  ).then((r) => r.json());
  let json: ProjectJson = await fetch(
    `https://projects.scratch.mit.edu/${id}?token=${info.project_token}`
  ).then((r) => r.json());

  json = path ? JSONPath({ path: path, json: json }) : json;

  return (
    <main className="min-h-screen w-full">
      <JsonView json={json} />
    </main>
  );
}
