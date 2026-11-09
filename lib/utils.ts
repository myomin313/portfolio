export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Prefixes local paths (e.g. "/profile.jpg") with the deploy base path, e.g. "/portfolio". */
export function withBase(path: string) {
  if (!path.startsWith("/")) return path;
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
}
