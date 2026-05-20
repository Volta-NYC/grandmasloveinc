import type { Metadata } from "next";
import { Container } from "@/lib/components/Container";
import { PageHero } from "@/lib/components/PageHero";
import { Reveal } from "@/lib/components/Reveal";
import { Button } from "@/lib/components/Button";
import { EventCard } from "@/lib/components/cards";
import { Icon } from "@/lib/icons";
import { events, site } from "@/content";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Community gatherings, benefit nights, and literacy events hosted by Grandma's Love, Inc. across Brooklyn and New York City.",
};

export default function EventsPage() {
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Gather for good"
        description="From pizza nights to charity concerts and storytime bonanzas, our events bring the community together to support children in need."
      />

      <section className="py-16 sm:py-20">
        <Container>
          {/* Upcoming */}
          <Reveal>
            <div className="flex items-center gap-3">
              <h2 className="font-display text-2xl font-semibold text-ink">
                Upcoming events
              </h2>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>

          {upcoming.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((event, i) => (
                <Reveal key={event.slug} delay={i * 90}>
                  <EventCard event={event} />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="mt-8 flex flex-col items-center gap-5 rounded-card border border-dashed border-line bg-cream px-6 py-14 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-brand shadow-soft">
                  <Icon name="calendar" className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    No events on the calendar right now
                  </h3>
                  <p className="mt-2 max-w-md text-ink-soft">
                    We&rsquo;re busy planning what&rsquo;s next. Get in touch to
                    hear about our next gathering first.
                  </p>
                </div>
                <Button href="/contact" variant="primary" withArrow>
                  Stay in the loop
                </Button>
              </div>
            </Reveal>
          )}

          {/* Past */}
          {past.length > 0 && (
            <div className="mt-20">
              <Reveal>
                <div className="flex items-center gap-3">
                  <h2 className="font-display text-2xl font-semibold text-ink">
                    Past gatherings
                  </h2>
                  <span className="h-px flex-1 bg-line" />
                </div>
              </Reveal>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {past.map((event, i) => (
                  <Reveal key={event.slug} delay={i * 90}>
                    <EventCard event={event} />
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

      <section className="bg-cream py-16">
        <Container size="narrow" className="text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Want to host an event for Grandma&rsquo;s Love?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-soft">
              Restaurants, schools, and community groups help us raise vital
              support. Let&rsquo;s plan something wonderful together.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button href="/contact" variant="primary" withArrow>
                Partner with us
              </Button>
              <Button href={site.donateHref} variant="ghost">
                Donate instead
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
