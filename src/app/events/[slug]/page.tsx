import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/lib/components/Container";
import { Reveal } from "@/lib/components/Reveal";
import { Button } from "@/lib/components/Button";
import { EventCard } from "@/lib/components/cards";
import { Icon } from "@/lib/icons";
import { blurProps } from "@/lib/image";
import { formatDate } from "@/lib/format";
import { events, site } from "@/content";

type Params = { slug: string };

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return { title: "Event not found" };
  return {
    title: event.title,
    description: event.summary,
    openGraph: { images: [event.image] },
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  const others = events.filter((e) => e.slug !== event.slug).slice(0, 3);
  const shareUrl = `${site.url}/events/${event.slug}`;
  const shareText = "Check out this event from Grandma's Love, Inc.";

  const shares = [
    {
      name: "facebook" as const,
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: "linkedin" as const,
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`,
    },
  ];

  return (
    <>
      {/* Hero image */}
      <section className="relative">
        <div className="relative h-[42vh] min-h-[320px] w-full overflow-hidden sm:h-[52vh]">
          <Image
            src={event.image}
            alt={event.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            {...blurProps(event.image)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
        </div>
        <Container className="relative -mt-28 pb-2">
          <Reveal className="rounded-card border border-line bg-paper p-7 shadow-lift sm:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/events"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
              >
                <Icon name="arrow" className="h-4 w-4 rotate-180" />
                All events
              </Link>
              {event.status === "past" && (
                <span className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-ink-soft">
                  Past event
                </span>
              )}
            </div>
            <h1 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-5xl">
              {event.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {event.summary}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink">
              About the event
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              {event.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-line pt-6">
              <span className="text-sm font-semibold text-ink">Share:</span>
              {shares.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink-soft transition hover:border-brand/40 hover:bg-brand-soft hover:text-brand"
                >
                  <Icon name={s.name} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Details card */}
          <Reveal delay={100}>
            <aside className="sticky top-24 rounded-card border border-line bg-white p-7 shadow-soft">
              <h2 className="font-display text-lg font-semibold text-ink">
                Time & location
              </h2>
              <dl className="mt-5 space-y-5 text-sm">
                <div className="flex gap-3">
                  <Icon name="calendar" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <dt className="font-semibold text-ink">Date</dt>
                    <dd className="text-ink-soft">
                      {formatDate(event.date)}
                      {event.time ? ` · ${event.time}` : ""}
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <dt className="font-semibold text-ink">Location</dt>
                    <dd className="text-ink-soft">{event.venue}</dd>
                    <dd className="text-ink-soft">{event.address}</dd>
                  </div>
                </div>
              </dl>
              <div className="mt-6 border-t border-line pt-6">
                <Button href={site.donateHref} variant="primary" withArrow className="w-full">
                  Support our cause
                </Button>
              </div>
            </aside>
          </Reveal>
        </Container>
      </section>

      {others.length > 0 && (
        <section className="bg-cream py-16 sm:py-20">
          <Container>
            <h2 className="font-display text-2xl font-semibold text-ink">
              More events
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((e, i) => (
                <Reveal key={e.slug} delay={i * 90}>
                  <EventCard event={e} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
