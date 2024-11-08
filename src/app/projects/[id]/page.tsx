import { notFound } from "next/navigation";
import { ProjectJson } from "project-json";

import { ProjectInfo } from "@/scratch/project";

import { JsonView } from "./json-view";

export default async function ProjectPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  if (isNaN(Number(id)) || Number(id) < 0 || Number(id) === Infinity) {
    return notFound();
  }

  const info: ProjectInfo = await fetch(
    `https://api.scratch.mit.edu/projects/${id}`
  ).then((r) => r.json());
  console.log(info);
  const json: ProjectJson = await fetch(
    `https://projects.scratch.mit.edu/${id}?token=${info.project_token}`
  ).then((r) => r.json());

  return (
    <main className="min-h-screen w-full">
      <JsonView json={json} />
    </main>
  );
}
