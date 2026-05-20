import Image from "next/image";
import Link from "next/link";
import { Container } from "@/lib/components/Container";
import { Button } from "@/lib/components/Button";
import { Reveal } from "@/lib/components/Reveal";
import { SectionHeading } from "@/lib/components/SectionHeading";
import { CountUp } from "@/lib/components/CountUp";
import { ProgramCard, PostCard } from "@/lib/components/cards";
import { Icon } from "@/lib/icons";
import { blurProps } from "@/lib/image";
import {
  site,
  impactStats,
  missionStatements,
  programs,
  howItWorks,
  posts,
  founderStory,
  involveWays,
} from "@/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <MissionSection />
      <ProgramsPreview />
      <HowItWorks />
      <FounderStory />
      <GetInvolvedBand />
      <LatestStories />
    </>
  );
}

/* ---------------------------------- Hero --------------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream bg-grain">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand-soft blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-pine-soft blur-3xl" aria-hidden />
      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-brand" />
            Brooklyn 501(c)(3) · Since {site.founded}
          </span>
          <h1 className="mt-6 text-balance font-display text-[2.65rem] font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-[4.1rem]">
            Nourishing bodies,{" "}
            <span className="italic text-brand">feeding minds.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Grandma&rsquo;s Love, Inc. fights childhood hunger and promotes
            literacy across underserved New York City communities — making sure
            kids have enough food to eat and books to call their own.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={site.donateHref} variant="primary" size="lg" withArrow>
              Donate today
            </Button>
            <Button href="/get-involved" variant="ghost" size="lg">
              Get involved
            </Button>
          </div>
          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {impactStats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-semibold text-ink">
                  <CountUp value={s.value} />
                </dt>
                <dd className="text-sm text-ink-soft">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-white/60 shadow-lift">
            <Image
              src="/images/hero-children.webp"
              alt="Classmates smiling together"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 460px"
              className="object-cover"
              {...blurProps("/images/hero-children.webp")}
            />
          </div>
          {/* Floating impact card */}
          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-line bg-white/95 p-4 shadow-lift backdrop-blur sm:flex sm:items-center sm:gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-pine-soft text-pine">
              <Icon name="meal" className="h-6 w-6" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold leading-none text-ink">
                <CountUp value="5,000+" />
              </p>
              <p className="text-xs text-ink-soft">grocery bags delivered</p>
            </div>
          </div>
          {/* Heart badge */}
          <div className="absolute -right-3 -top-3 grid h-16 w-16 place-items-center rounded-full bg-brand text-white shadow-lift sm:h-20 sm:w-20">
            <Icon name="heart" filled className="h-8 w-8 sm:h-10 sm:w-10" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ------------------------------- Stats band ------------------------------ */
function StatsBand() {
  return (
    <section className="border-y border-line bg-white">
      <Container className="grid grid-cols-2 gap-px overflow-hidden lg:grid-cols-4">
        {impactStats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 80}
            className="px-4 py-8 text-center sm:py-10"
          >
            <p className="font-display text-3xl font-semibold text-brand sm:text-4xl">
              <CountUp value={s.value} />
            </p>
            <p className="mt-1 font-semibold text-ink">{s.label}</p>
            <p className="mx-auto mt-1 max-w-[18ch] text-sm text-ink-soft">
              {s.detail}
            </p>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}

/* ------------------------------- Mission --------------------------------- */
function MissionSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-lift">
            <Image
              src="/images/children-tablets.webp"
              alt="Children learning together with tablets"
              fill
              sizes="(max-width: 1024px) 90vw, 560px"
              className="object-cover"
              {...blurProps("/images/children-tablets.webp")}
            />
          </div>
          <div className="absolute -right-4 bottom-8 hidden max-w-[15rem] rounded-2xl border border-line bg-paper p-5 shadow-lift md:block">
            <Icon name="sparkle" className="h-7 w-7 text-gold" />
            <p className="mt-2 font-display text-lg font-semibold leading-snug text-ink">
              A nourished child has a greater ability to learn.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100} className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Our mission"
            title="Hunger and literacy, solved together."
            description={missionStatements.mission}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <FocusPill
              icon="meal"
              tone="pine"
              title="Nourish"
              body="Weekend food backpacks and food distribution so no child goes hungry."
            />
            <FocusPill
              icon="book"
              tone="brand"
              title="Read"
              body="Book vending machines and literacy programs that spark a love of reading."
            />
          </div>
          <div className="mt-8">
            <Button href="/about" variant="secondary" withArrow>
              Read our story
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function FocusPill({
  icon,
  title,
  body,
  tone,
}: {
  icon: "meal" | "book";
  title: string;
  body: string;
  tone: "pine" | "brand";
}) {
  const toneClasses =
    tone === "pine" ? "bg-pine-soft text-pine" : "bg-brand-soft text-brand";
  return (
    <div className="rounded-2xl border border-line bg-white p-5 shadow-soft">
      <span className={`grid h-11 w-11 place-items-center rounded-full ${toneClasses}`}>
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-3 font-display text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}

/* --------------------------- Programs preview ---------------------------- */
function ProgramsPreview() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="Programs that meet every need"
              description="From the dinner table to the bookshelf, our programs care for the whole child."
            />
          </Reveal>
          <Reveal delay={80}>
            <Button href="/programs" variant="ghost" withArrow>
              All programs
            </Button>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.slice(0, 3).map((program, i) => (
            <Reveal key={program.slug} delay={i * 90}>
              <ProgramCard program={program} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ How it works ----------------------------- */
function HowItWorks() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Why Grandma's Love feeds"
            title="From a quiet need to a brighter Monday"
            description="Our weekend food program is built on dignity, discretion, and real results for kids in the classroom."
            className="mx-auto"
          />
        </Reveal>
        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-line md:block" aria-hidden />
          {howItWorks.map((step, i) => (
            <Reveal key={step.label} delay={i * 110} className="relative">
              <div className="flex h-full flex-col rounded-card border border-line bg-white p-7 shadow-soft">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-brand font-display text-lg font-semibold text-white shadow-soft">
                  {step.label}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ Founder story ---------------------------- */
function FounderStory() {
  return (
    <section className="bg-ink py-20 text-paper sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift">
            <Image
              src="/images/child-writing.webp"
              alt="A child being helped to write by an adult"
              fill
              sizes="(max-width: 1024px) 90vw, 460px"
              className="object-cover"
              {...blurProps("/images/child-writing.webp")}
            />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            <span className="h-px w-6 bg-gold/60" aria-hidden />
            Our beginning
          </span>
          <blockquote className="mt-5 font-display text-2xl font-medium leading-snug text-paper sm:text-3xl">
            &ldquo;Theresa began to see children asking for extra meals — and
            realized hunger was a major issue for many school children.&rdquo;
          </blockquote>
          <p className="mt-6 leading-relaxed text-paper/75">
            {founderStory.paragraphs[1]}
          </p>
          <div className="mt-7 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-brand font-display text-lg font-semibold text-white">
              TM
            </span>
            <div>
              <p className="font-semibold text-paper">{founderStory.name}</p>
              <p className="text-sm text-paper/60">
                {founderStory.role}, {site.shortName}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ----------------------------- Get involved ------------------------------ */
function GetInvolvedBand() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Get involved"
            title="There's a place for everyone"
            description="Lend your time, host a drive, or bring our programs to your school. Together we reach more children."
            className="mx-auto"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {involveWays.map((way, i) => (
            <Reveal key={way.title} delay={i * 90}>
              <div className="flex h-full flex-col rounded-card border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-soft text-brand">
                  <Icon name={way.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {way.title}
                </h3>
                <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                  {way.description}
                </p>
                {way.cta && (
                  <Link
                    href={way.cta.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                  >
                    {way.cta.label}
                    <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ Latest stories --------------------------- */
function LatestStories() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="From the blog"
              title="Stories from our community"
            />
          </Reveal>
          <Reveal delay={80}>
            <Button href="/blog" variant="ghost" withArrow>
              Read all stories
            </Button>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 90}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
