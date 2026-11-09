import { Languages, MapPin, Briefcase } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { about, site } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" eyebrow="01. about" title="About Me">
      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
            <ul className="space-y-5 text-sm">
              <li className="flex gap-3">
                <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-accent-600 dark:text-accent-400" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100">Role</p>
                  <p>{site.title}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-600 dark:text-accent-400" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100">Location</p>
                  <p>{site.location}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Languages className="mt-0.5 h-5 w-5 shrink-0 text-accent-600 dark:text-accent-400" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100">Languages</p>
                  <ul>
                    {about.languages.map((l) => (
                      <li key={l.name}>
                        {l.name} <span className="text-zinc-500">({l.level})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}
