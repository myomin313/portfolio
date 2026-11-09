"use client";

import { useState, type FormEvent } from "react";
import { CircleAlert, CircleCheck, LoaderCircle, Send } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "mt-1.5 block w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500";

/** Posts to Formspree (https://formspree.io). Set NEXT_PUBLIC_FORMSPREE_ID to enable. */
export default function ContactForm({ formId }: { formId: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { errors?: { message: string }[] }
          | null;
        throw new Error(data?.errors?.map((x) => x.message).join(", ") || "Something went wrong.");
      }
      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div>
        <label htmlFor="name" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
          Name
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="you@company.com" />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
          Message
        </label>
        <textarea id="message" name="message" required rows={5} className={inputClass} placeholder="Tell me about the role or project…" />
      </div>
      {/* honeypot field for spam bots */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-800 disabled:opacity-60 dark:bg-accent-500 dark:text-zinc-950 dark:hover:bg-accent-400"
      >
        {status === "submitting" ? (
          <>
            <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" /> Send Message
          </>
        )}
      </button>

      <div aria-live="polite" className="min-h-[1.25rem] text-sm">
        {status === "success" && (
          <p className="flex items-center gap-2 text-accent-700 dark:text-accent-400">
            <CircleCheck className="h-4 w-4" aria-hidden="true" /> Thanks! Your message has been sent.
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 text-red-600 dark:text-red-400">
            <CircleAlert className="h-4 w-4" aria-hidden="true" /> {error}
          </p>
        )}
      </div>
    </form>
  );
}
