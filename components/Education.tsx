import { GraduationCap, MapPin } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education" eyebrow="05. education" title="Education">
      <ul className="grid gap-5 md:grid-cols-3">
        {education.map((e, i) => (
          <li key={e.degree}>
            <Reveal delay={0.05 * i} className="h-full">
              <article className="flex h-full gap-4 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-400">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{e.degree}</h3>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{e.school}</p>
                  <p className="mt-2 inline-flex items-center gap-1 text-xs text-zinc-600 dark:text-zinc-400">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {e.location}
                  </p>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
