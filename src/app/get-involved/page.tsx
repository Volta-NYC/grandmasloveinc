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
import {
  site,
  involveIntro,
  involveWays,
  partnershipOptions,
} from "@/content";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, host a food or book drive, or partner your school with Grandma's Love, Inc. to help children in underserved NYC communities.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Be a difference maker"
        description={involveIntro}
      >
        <div className="flex flex-wrap gap-2">
          {partnershipOptions.map((opt) => (
            <span
              key={opt}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink shadow-soft"
            >
              <Icon name="check" className="h-4 w-4 text-pine" />
              {opt}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Ways to help */}
      <section className="py-20 sm:py-24">
        <Container className="space-y-16 sm:space-y-24">
          {involveWays.map((way, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={way.title}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal className={cn(flip && "lg:order-2")}>
                  <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-lift">
                    {way.image && (
                      <Image
                        src={way.image}
                        alt={way.title}
                        fill
                        sizes="(max-width: 1024px) 90vw, 560px"
                        className="object-cover"
                        {...blurProps(way.image)}
                      />
                    )}
                  </div>
                </Reveal>
                <Reveal delay={100} className={cn(flip && "lg:order-1")}>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-soft text-brand">
                    <Icon name={way.icon} className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 font-display text-3xl font-semibold text-ink">
                    {way.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                    {way.description}
                  </p>
                  {way.cta && (
                    <div className="mt-6">
                      <Button href={way.cta.href} variant="secondary" withArrow>
                        {way.cta.label}
                      </Button>
                    </div>
                  )}
                </Reveal>
              </div>
            );
          })}
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-cream py-20 sm:py-24">
        <Container size="narrow">
          <Reveal className="rounded-card border border-line bg-white p-8 text-center shadow-soft sm:p-12">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand text-white">
              <Icon name="heart" filled className="h-7 w-7" />
            </span>
            <SectionHeading
              align="center"
              title="Ready to make a difference?"
              description="Tell us how you'd like to help and we'll be in touch. Every drive, every hour, every gift moves us closer to a community where no child goes hungry."
              className="mx-auto mt-6"
            />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/contact" variant="primary" size="lg" withArrow>
                Contact our team
              </Button>
              <Button href={site.donateHref} variant="ghost" size="lg">
                Make a donation
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
