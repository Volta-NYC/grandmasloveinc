import Link from "next/link";
import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
  /** Tone for placement on dark vs light backgrounds. */
  tone?: "ink" | "paper";
}

/**
 * Typographic brand lockup: a heart mark + "Grandma's Love" wordmark, echoing
 * the raspberry script of the official logo. Cleaner and more scalable in site
 * chrome than the original raster heart illustration (which we feature in the
 * hero and footer instead).
 */
export function Logo({ className, tone = "ink" }: LogoProps) {
  const text = tone === "paper" ? "text-paper" : "text-ink";
  return (
    <Link
      href="/"
      aria-label="Grandma's Love, Inc. — home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-white shadow-soft transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-6">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
          <path d="M12 21s-7.5-4.7-9.7-9.5C.9 7.9 2.5 4.3 6.2 4.3c2.1 0 3.5 1.3 4.3 2.5.8-1.2 2.2-2.5 4.3-2.5 3.7 0 5.3 3.6 3.9 7.2C19.5 16.3 12 21 12 21Z" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-lg font-semibold tracking-tight", text)}>
          Grandma&rsquo;s <span className="italic text-brand">Love</span>
        </span>
        <span
          className={cn(
            "text-[0.6rem] font-semibold uppercase tracking-[0.28em]",
            tone === "paper" ? "text-paper/60" : "text-ink-soft",
          )}
        >
          Inc.
        </span>
      </span>
    </Link>
  );
}
