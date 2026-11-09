import Image from "next/image";
import { ArrowRight, Download, MapPin, Mail } from "lucide-react";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";
import { site, stats } from "@/data/portfolio";
import { withBase } from "@/lib/utils";

export default function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative -mt-16 overflow-hidden pt-16">
      {/* subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(to_right,rgb(161_161_170/0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgb(161_161_170/0.12)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-12 pb-16 sm:px-6 sm:pt-20 lg:grid-cols-[1fr_auto] lg:pb-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 font-mono text-xs text-accent-700 dark:text-accent-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            Open to new opportunities
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
            Hi, I&apos;m {site.name}.
          </h1>
          <p className="mt-3 text-xl font-semibold text-accent-700 sm:text-2xl dark:text-accent-400">
            {site.title}
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {site.tagline}
          </p>
          <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-400">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {site.location}
          </p>

          <Reveal delay={0.1} y={10}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-800 dark:bg-accent-500 dark:text-zinc-950 dark:hover:bg-accent-400"
              >
                View Projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={withBase(site.cvUrl)}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-800 transition-colors hover:border-accent-500 hover:text-accent-700 dark:border-zinc-700 dark:text-zinc-200 dark:hover:text-accent-400"
              >
                <Download className="h-4 w-4" aria-hidden="true" /> Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                <Mail className="h-4 w-4" aria-hidden="true" /> Contact Me
              </a>
            </div>
            <SocialLinks className="mt-6" />
          </Reveal>
        </div>

        <div className="relative mx-auto lg:mx-0">
          <div
            aria-hidden="true"
            className="absolute -inset-4 -z-10 rounded-full bg-accent-500/20 blur-3xl"
          />
          <Image
            src={withBase(site.profileImage)}
            alt={`Portrait of ${site.name}`}
            width={320}
            height={320}
            priority
            sizes="(min-width: 640px) 320px, 224px"
            className="h-56 w-56 rounded-full border-4 border-white object-cover shadow-xl ring-1 ring-zinc-200 sm:h-80 sm:w-80 dark:border-zinc-900 dark:ring-zinc-800"
          />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.08 * i}>
              <div className="flex flex-col rounded-xl border border-zinc-200 bg-white/60 p-5 text-center backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
                <dt className="text-sm text-zinc-600 dark:text-zinc-400">{s.label}</dt>
                <dd className="order-first font-mono text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                  {s.value}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
