import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/lib/components/Container";
import { PageHero } from "@/lib/components/PageHero";
import { Reveal } from "@/lib/components/Reveal";
import { SectionHeading } from "@/lib/components/SectionHeading";
import { Button } from "@/lib/components/Button";
import { CountUp } from "@/lib/components/CountUp";
import { Icon } from "@/lib/icons";
import { blurProps } from "@/lib/image";
import type { IconName } from "@/content/types";
import {
  site,
  missionStatements,
  impactStats,
  founderStory,
  impactNarrative,
  literacyStatement,
} from "@/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 2015 by Theresa Monforte-Caraballo, Grandma's Love, Inc. combats childhood hunger and promotes literacy across New York City.",
};

const pillars: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "meal",
    title: "Nourishing",
    body: "Over 15,000 meals provided to our families each year.",
  },
  {
    icon: "book",
    title: "Literacy",
    body: "Over 10,000 books given to children to keep and create memories with.",
  },
  {
    icon: "lifebuoy",
    title: "Emergency Assistance",
    body: "When a challenge arises in our community, we are there to help.",
  },
  {
    icon: "users",
    title: "Community Connections",
    body: "Creating connections and bridges to help wherever we are needed.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Empowering children, one meal and one book at a time."
        description={site.brandLine}
      />

      {/* Mission & Vision */}
      <section className="py-20 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-card border border-line bg-white p-8 shadow-soft">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-soft text-brand">
                <Icon name="heart" className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-semibold text-ink">
                Our Mission
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                {missionStatements.mission}
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex h-full flex-col rounded-card border border-line bg-white p-8 shadow-soft">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-pine-soft text-pine">
                <Icon name="sparkle" className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-semibold text-ink">
                Our Vision
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                {missionStatements.vision}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Founder story */}
      <section className="bg-cream py-20 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift">
              <Image
                src="/images/beanie-book.webp"
                alt="A child in a beanie hat holding a book"
                fill
                sizes="(max-width: 1024px) 90vw, 460px"
                className="object-cover"
                {...blurProps("/images/beanie-book.webp")}
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Our founder"
              title={`Started by ${founderStory.name}`}
            />
            <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
              {founderStory.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Impact narrative + stats */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Our impact"
              title="A holistic approach to hunger and literacy"
              className="mx-auto"
            />
          </Reveal>
          <div className="mx-auto mt-8 max-w-3xl space-y-4 text-center leading-relaxed text-ink-soft">
            {impactNarrative.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {impactStats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 80}
                className="rounded-card border border-line bg-white p-6 text-center shadow-soft"
              >
                <p className="font-display text-3xl font-semibold text-brand sm:text-4xl">
                  <CountUp value={s.value} />
                </p>
                <p className="mt-1 font-semibold text-ink">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <section className="bg-ink py-20 text-paper sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="What sets us apart"
              title={<span className="text-paper">More than a meal</span>}
              description={
                <span className="text-paper/70">
                  We care for the whole child — body and mind, in school and at
                  home.
                </span>
              }
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 80}
                className="rounded-card border border-white/10 bg-white/[0.04] p-7"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-brand text-white">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-paper">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Literacy + CTA */}
      <section className="py-20 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="Empowering through literacy"
              title="Feeding the minds of our future"
            />
            <p className="mt-6 leading-relaxed text-ink-soft">
              {literacyStatement}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/programs" variant="secondary" withArrow>
                Explore our programs
              </Button>
              <Button href={site.donateHref} variant="ghost">
                Support our work
              </Button>
            </div>
          </Reveal>
          <Reveal delay={100} className="order-1 lg:order-2">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-lift">
              <Image
                src="/images/grass-reading.webp"
                alt="A student reading a book on the grass"
                fill
                sizes="(max-width: 1024px) 90vw, 560px"
                className="object-cover"
                {...blurProps("/images/grass-reading.webp")}
              />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
