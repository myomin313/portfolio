"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { GithubIcon } from "./icons";
import ProjectCover from "./ProjectCover";
import type { Project } from "@/data/portfolio";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // Simple focus trap
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <m.div
          className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <m.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-zinc-200 bg-white shadow-2xl sm:rounded-2xl dark:border-zinc-800 dark:bg-zinc-900"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-zinc-700 shadow hover:text-zinc-950 dark:bg-zinc-800/90 dark:text-zinc-300 dark:hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <ProjectCover project={project} className="aspect-[16/8]" sizes="672px" />

            <div className="p-6 sm:p-8">
              <p className="font-mono text-xs text-accent-700 dark:text-accent-400">
                {project.subtitle}
              </p>
              <h3
                id="project-modal-title"
                className="mt-1 text-2xl font-bold text-zinc-900 dark:text-zinc-50"
              >
                {project.title}
              </h3>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">{project.summary}</p>

              <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
                Highlights
              </h4>
              <ul className="mt-3 space-y-2">
                {project.details.map((d) => (
                  <li key={d} className="flex gap-3 text-zinc-700 dark:text-zinc-300">
                    <span aria-hidden="true" className="text-accent-600 dark:text-accent-400">▹</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
                Tech Stack
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 font-mono text-xs text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              {(project.liveUrl || project.githubUrl) && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-accent-700 px-4 py-2 text-sm font-semibold text-white hover:bg-accent-800 dark:bg-accent-500 dark:text-zinc-950 dark:hover:bg-accent-400"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" /> Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 hover:border-accent-500 dark:border-zinc-700 dark:text-zinc-200"
                    >
                      <GithubIcon className="h-4 w-4" /> Source Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
