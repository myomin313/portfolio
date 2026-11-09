import Image from "next/image";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/** Shows the project screenshot, or a tasteful placeholder when `image` is empty. */
export default function ProjectCover({
  project,
  className,
  sizes = "(min-width: 1024px) 384px, 100vw",
}: {
  project: Project;
  className?: string;
  sizes?: string;
}) {
  if (project.image) {
    return (
      <div className={cn("relative overflow-hidden bg-zinc-100 dark:bg-zinc-800", className)}>
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

  const initials = project.title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent-500/15 via-zinc-100 to-zinc-200 dark:from-accent-500/20 dark:via-zinc-900 dark:to-zinc-950",
        className
      )}
    >
      <div className="absolute inset-0 [background-image:radial-gradient(rgb(113_113_122/0.25)_1px,transparent_1px)] [background-size:16px_16px]" />
      <span className="relative font-mono text-4xl font-bold tracking-tight text-accent-700/70 dark:text-accent-400/70">
        {"{"}
        {initials}
        {"}"}
      </span>
    </div>
  );
}
