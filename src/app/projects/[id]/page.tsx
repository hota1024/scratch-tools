import { notFound } from "next/navigation";

import { ProjectInfo } from "@/scratch/project";

export default async function ProjectPage(props: { params: { id: string } }) {
  console.log(props);
  const { id } = props.params;

  if (isNaN(Number(id)) || Number(id) < 0 || Number(id) === Infinity) {
    return notFound();
  }

  const info: ProjectInfo = await fetch(
    `https://api.scratch.mit.edu/projects/${id}`
  ).then((r) => r.json());
  const sb3 = await fetch(
    `https://projects.scratch.mit.edu/${id}?token=${info.project_token}`
  ).then((r) => r.arrayBuffer());
  console.log(sb3.byteLength);

  return <main>{id}</main>;
}
