import { ArrowUp } from "lucide-react";
import SocialLinks from "./SocialLinks";
import { site } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} {site.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <SocialLinks />
          <a
            href="#top"
            aria-label="Back to top"
            title="Back to top"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-700 text-white transition-colors hover:bg-accent-800 dark:bg-accent-500 dark:text-zinc-950 dark:hover:bg-accent-400"
          >
            <ArrowUp className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
