import {
  Brain,
  Cloud,
  Database,
  MonitorSmartphone,
  Radio,
  Server,
  type LucideIcon,
} from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { skillGroups, type SkillGroupIcon } from "@/data/portfolio";

const icons: Record<SkillGroupIcon, LucideIcon> = {
  frontend: MonitorSmartphone,
  backend: Server,
  messaging: Radio,
  database: Database,
  ai: Brain,
  devops: Cloud,
};

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02. skills"
      title="Skills & Technologies"
      className="bg-zinc-50/70 dark:bg-zinc-900/30"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon];
          return (
            <Reveal key={group.title} delay={0.05 * i}>
              <article className="h-full rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-accent-500/60 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-400">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {group.title}
                  </h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                  {group.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 font-mono text-xs text-zinc-700 dark:border-zinc-700/70 dark:bg-zinc-800/60 dark:text-zinc-300"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
