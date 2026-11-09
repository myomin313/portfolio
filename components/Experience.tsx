import { Calendar, MapPin } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="03. experience" title="Work Experience">
      <ol className="relative ml-2 border-l border-zinc-200 sm:ml-3 dark:border-zinc-800">
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.start}`} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
            <span
              aria-hidden="true"
              className={
                "absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 " +
                (i === 0
                  ? "border-accent-500 bg-accent-500 shadow-[0_0_0_4px] shadow-accent-500/20"
                  : "border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-950")
              }
            />
            <Reveal>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {job.role}{" "}
                  <span className="text-accent-700 dark:text-accent-400">@ {job.company}</span>
                </h3>
                <p className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-600 dark:text-zinc-400">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  <time>{job.start}</time> – <time>{job.end}</time>
                </p>
              </div>
              <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {job.location}
              </p>
              <ul className="mt-4 space-y-2">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-zinc-600 dark:text-zinc-400">
                    <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
