import { Mail } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { GithubIcon, LinkedinIcon } from "./icons";
import { contact, site } from "@/data/portfolio";

export default function Contact() {
  const hasForm = Boolean(contact.formspreeId);

  return (
    <Section
      id="contact"
      eyebrow="06. contact"
      title={contact.heading}
      className="bg-zinc-50/70 dark:bg-zinc-900/30"
    >
      <div className={hasForm ? "grid gap-10 lg:grid-cols-2" : "max-w-2xl"}>
        <Reveal>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">{contact.text}</p>
          <a
            href={site.socials.email}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-800 dark:bg-accent-500 dark:text-zinc-950 dark:hover:bg-accent-400"
          >
            <Mail className="h-4 w-4" aria-hidden="true" /> {site.email}
          </a>
          <ul className="mt-6 flex flex-wrap gap-3">
            <li>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition-colors hover:border-accent-500 hover:text-accent-700 dark:border-zinc-700 dark:text-zinc-200 dark:hover:text-accent-400"
              >
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
            </li>
            <li>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition-colors hover:border-accent-500 hover:text-accent-700 dark:border-zinc-700 dark:text-zinc-200 dark:hover:text-accent-400"
              >
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
            </li>
          </ul>
        </Reveal>

        {hasForm && (
          <Reveal delay={0.1}>
            <ContactForm formId={contact.formspreeId} />
          </Reveal>
        )}
      </div>
    </Section>
  );
}
