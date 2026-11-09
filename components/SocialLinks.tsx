import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { site } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const links = [
  { href: site.socials.github, label: "GitHub", Icon: GithubIcon, external: true },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon, external: true },
  { href: site.socials.email, label: "Email", Icon: Mail, external: false },
];

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {links.map(({ href, label, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:border-accent-500 hover:text-accent-600 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-accent-500 dark:hover:text-accent-400"
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
