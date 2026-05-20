import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/lib/components/Container";
import { PageHero } from "@/lib/components/PageHero";
import { Reveal } from "@/lib/components/Reveal";
import { SectionHeading } from "@/lib/components/SectionHeading";
import { Button } from "@/lib/components/Button";
import { Icon } from "@/lib/icons";
import { donateIntro, campaigns, givingLevels, site } from "@/content";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Grandma's Love, Inc. Every gift provides nutritious meals and books to children in underserved New York City communities.",
};

export default function DonatePage() {
  const featured = campaigns.find((c) => c.featured) ?? campaigns[0];
  const rest = campaigns.filter((c) => c !== featured);

  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Be a difference maker"
        description={donateIntro}
      />

      {/* Featured + giving levels */}
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <Reveal>
            <div className="overflow-hidden rounded-card bg-brand p-8 text-white shadow-lift sm:p-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]">
                <Icon name="heart" filled className="h-4 w-4" />
                Most impact
              </span>
              <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 leading-relaxed text-white/85">
                {featured.description}
              </p>
              {featured.highlight && (
                <p className="mt-5 text-lg font-semibold text-white">
                  {featured.highlight}
                </p>
              )}
              <div className="mt-7">
                <Button href={featured.href} variant="white" size="lg" withArrow>
                  Give now
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="font-display text-xl font-semibold text-ink">
              Your gift in action
            </h3>
            <ul className="mt-5 space-y-3">
              {givingLevels.map((level) => (
                <li
                  key={level.amount}
                  className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4 shadow-soft"
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-soft font-display text-lg font-semibold text-brand">
                    {level.amount}
                  </span>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {level.impact}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-4 flex items-start gap-2 text-sm text-ink-soft">
              <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-pine" />
              Donations are securely processed through Zeffy, so 100% of your
              intended gift reaches Grandma&rsquo;s Love.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Other ways to give */}
      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="More ways to give"
              title="Support a campaign close to your heart"
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {rest.map((campaign, i) => (
              <Reveal key={campaign.title} delay={i * 90}>
                <div className="flex h-full flex-col rounded-card border border-line bg-white p-7 shadow-soft">
                  {campaign.image ? (
                    <div className="mb-5 overflow-hidden rounded-2xl border border-line bg-paper p-3">
                      <Image
                        src={campaign.image}
                        alt={`Donation QR code for ${campaign.title}`}
                        width={200}
                        height={200}
                        className="mx-auto h-auto w-32"
                      />
                    </div>
                  ) : (
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-soft text-brand">
                      <Icon name="gift" className="h-6 w-6" />
                    </span>
                  )}
                  <h3 className="mt-1 font-display text-xl font-semibold text-ink">
                    {campaign.title}
                  </h3>
                  {campaign.highlight && (
                    <p className="mt-1 text-sm font-semibold text-brand">
                      {campaign.highlight}
                    </p>
                  )}
                  <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                    {campaign.description}
                  </p>
                  <div className="mt-5">
                    <Button href={campaign.href} variant="secondary" withArrow className="w-full">
                      Donate
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing */}
      <section className="py-16 sm:py-20">
        <Container size="narrow" className="text-center">
          <Reveal>
            <Image
              src="/images/logo-mark.webp"
              alt="Grandma's Love, Inc. logo"
              width={302}
              height={274}
              className="mx-auto h-28 w-auto object-contain"
            />
            <h2 className="mt-6 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Thank you for being part of our mission
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-soft">
              Every contribution, no matter the size, helps us reach more
              children and provide essential resources across New York City.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button href={site.donateHref} variant="primary" size="lg" withArrow>
                Make a donation
              </Button>
              <Button href="/contact" variant="ghost" size="lg">
                Other ways to help
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
