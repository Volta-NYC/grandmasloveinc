import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/lib/components/Container";
import { PageHero } from "@/lib/components/PageHero";
import { Reveal } from "@/lib/components/Reveal";
import { SectionHeading } from "@/lib/components/SectionHeading";
import { Button } from "@/lib/components/Button";
import { Icon } from "@/lib/icons";
import { blurProps } from "@/lib/image";
import { cn } from "@/lib/cn";
import { site, programs, howItWorks } from "@/content";

export const metadata: Metadata = {
  title: "Our Programs",
  description:
    "Food distribution, book vending machines, winter coat giveaways, cereal drives, emergency assistance, and community connections — the programs of Grandma's Love, Inc.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our programs"
        title="Care for the whole child"
        description="Since 2015 we've grown from a single backpack of food into a network of programs that nourish, educate, and uplift children across New York City."
      />

      {/* Program quick-nav */}
      <section className="border-b border-line bg-white">
        <Container className="flex flex-wrap gap-2 py-5">
          {programs.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink-soft transition hover:border-brand/40 hover:text-brand"
            >
              <Icon name={p.icon} className="h-4 w-4" />
              {p.title}
            </a>
          ))}
        </Container>
      </section>

      {/* Program detail sections */}
      <section className="py-16 sm:py-20">
        <Container className="space-y-20 sm:space-y-28">
          {programs.map((program, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={program.slug}
                id={program.slug}
                className="scroll-mt-28"
              >
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <Reveal className={cn(flip && "lg:order-2")}>
                    <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-lift">
                      <Image
                        src={program.image}
                        alt={program.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 90vw, 560px"
                        className="object-cover"
                        {...blurProps(program.image)}
                      />
                    </div>
                  </Reveal>
                  <Reveal delay={100} className={cn(flip && "lg:order-1")}>
                    <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1.5 text-brand">
                      <Icon name={program.icon} className="h-5 w-5" />
                      <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                        Program
                      </span>
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
                      {program.title}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                      {program.description}
                    </p>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-cream py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="How our food program works"
              title="Quiet, dignified, and effective"
              description="A simple, discreet process connects children in need with weekly nourishment — and better days in the classroom."
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {howItWorks.map((step, i) => (
              <Reveal
                key={step.label}
                delay={i * 110}
                className="rounded-card border border-line bg-white p-7 shadow-soft"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-brand font-display text-lg font-semibold text-white shadow-soft">
                  {step.label}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Button href={site.donateHref} variant="primary" size="lg" withArrow>
              Fund a program
            </Button>
            <Button href="/get-involved" variant="ghost" size="lg">
              Volunteer with us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
