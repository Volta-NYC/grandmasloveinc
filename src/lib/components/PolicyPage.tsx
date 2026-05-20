import { Container } from "./Container";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";
import { site } from "@/content/site";

interface Policy {
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
}

export function PolicyPage({ policy }: { policy: Policy }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={policy.title} description={policy.intro} />
      <section className="py-16 sm:py-20">
        <Container size="narrow">
          <div className="space-y-10">
            {policy.sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 60}>
                <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                  {section.heading}
                </h2>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  {section.body}
                </p>
              </Reveal>
            ))}
          </div>
          <p className="mt-12 border-t border-line pt-6 text-sm text-ink-soft">
            Questions? Email us at{" "}
            <a
              href={`mailto:${site.contact.email}`}
              className="font-semibold text-brand link-underline"
            >
              {site.contact.email}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
