"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ProjectsPage() {
  const [value, setValue] = useState("");
  const router = useRouter();

  function inspect() {
    router.push(`/projects/${value}`);
  }

  return (
    <div className="grid min-h-screen w-full items-center p-8">
      <main>
        <div className="flex max-w-[400px] gap-2">
          <Input
            placeholder="Project ID"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button onClick={inspect}>Inspect</Button>
        </div>
      </main>
    </div>
  );
}
