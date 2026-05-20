import type { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

/** Consistent header band for interior pages. */
export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-cream">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-soft blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-pine-soft blur-3xl" aria-hidden />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              <span className="h-px w-6 bg-brand/50" aria-hidden />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </Container>
    </section>
  );
}
