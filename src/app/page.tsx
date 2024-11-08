import { FileTextIcon } from "lucide-react";
import Link from "next/link";

import { GitHubIcon } from "@/components/icons/github";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <h1 className="font-mono text-6xl font-bold">scratch-tools</h1>
        <p>Scratch tools collection.</p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            className="flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent bg-foreground px-4 text-sm text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] sm:h-12 sm:px-5 sm:text-base"
            href="/docs"
          >
            <FileTextIcon className="w-5" />
            Documents
          </Link>
          <a
            className="flex h-10 items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm transition-colors hover:border-transparent hover:bg-[#f2f2f2] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] sm:h-12 sm:min-w-44 sm:px-5 sm:text-base"
            href="https://github.com/hota1024/scratch-tools"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="mr-2 w-5 fill-current" />
            GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
