import { FileTextIcon } from "lucide-react";
import Link from "next/link";

import { GitHubIcon } from "@/components/icons/github";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-6xl font-bold font-mono">scratch-tools</h1>
        <p>Scratch tools collection.</p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/docs"
          >
            <FileTextIcon className="w-5" />
            Documents
          </Link>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://github.com/hota1024/scratch-tools"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="w-5 fill-current mr-2" />
            GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
