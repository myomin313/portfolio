"use client";

import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Star } from "lucide-react";
import Section from "./Section";
import ProjectCover from "./ProjectCover";
import ProjectModal from "./ProjectModal";
import { projectFilters, projects, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type Filter = (typeof projectFilters)[number];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.categories.includes(filter)),
    [filter]
  );
  const featured = visible.filter((p) => p.featured);
  const others = visible.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      eyebrow="04. projects"
      title="Selected Projects"
      className="bg-zinc-50/70 dark:bg-zinc-900/30"
    >
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {projectFilters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              filter === f
                ? "border-accent-600 bg-accent-700 text-white dark:border-accent-500 dark:bg-accent-500 dark:text-zinc-950"
                : "border-zinc-300 text-zinc-700 hover:border-accent-500 hover:text-accent-700 dark:border-zinc-700 dark:text-zinc-300 dark:hover:text-accent-400"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} project{visible.length === 1 ? "" : "s"}
      </p>

      <AnimatePresence mode="wait">
        <m.div
          key={filter}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="mt-8 space-y-6"
        >
          {featured.length > 0 && (
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((p) => (
                <li key={p.slug}>
                  <ProjectCard project={p} large onOpen={setSelected} />
                </li>
              ))}
            </ul>
          )}
          {others.length > 0 && (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <li key={p.slug}>
                  <ProjectCard project={p} onOpen={setSelected} />
                </li>
              ))}
            </ul>
          )}
          {visible.length === 0 && (
            <p className="text-zinc-500">No projects in this category yet.</p>
          )}
        </m.div>
      </AnimatePresence>

      <ProjectModal project={selected} onClose={closeModal} />
    </Section>
  );
}

function ProjectCard({
  project,
  large,
  onOpen,
}: {
  project: Project;
  large?: boolean;
  onOpen: (p: Project) => void;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl border bg-white transition-all hover:-translate-y-1 hover:shadow-lg focus-within:ring-2 focus-within:ring-accent-500 dark:bg-zinc-900",
        large
          ? "border-accent-500/40 dark:border-accent-500/30"
          : "border-zinc-200 hover:border-accent-500/60 dark:border-zinc-800"
      )}
    >
      {large && <ProjectCover project={project} className="aspect-video" />}

      <div className="flex flex-1 flex-col p-6">
        {large && (
          <span className="mb-3 inline-flex w-fit items-center gap-1 rounded-full bg-accent-500/10 px-2.5 py-0.5 font-mono text-xs font-medium text-accent-700 dark:text-accent-400">
            <Star className="h-3 w-3 fill-current" aria-hidden="true" /> Featured
          </span>
        )}
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          <button
            type="button"
            onClick={() => onOpen(project)}
            aria-haspopup="dialog"
            className="text-left after:absolute after:inset-0 focus:outline-none"
          >
            {project.title}
          </button>
        </h3>
        <p className="font-mono text-xs text-accent-700 dark:text-accent-400">{project.subtitle}</p>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{project.summary}</p>

        <ul className="mt-4 space-y-1.5 text-sm">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex gap-2 text-zinc-700 dark:text-zinc-300">
              <span aria-hidden="true" className="text-accent-600 dark:text-accent-400">▹</span>
              {h}
            </li>
          ))}
        </ul>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-5" aria-label="Tech stack">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded bg-zinc-100 px-2 py-0.5 font-mono text-[11px] text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs font-medium text-zinc-500 group-hover:text-accent-700 dark:text-zinc-400 dark:group-hover:text-accent-400">
          View details →
        </p>
      </div>
    </article>
  );
}
