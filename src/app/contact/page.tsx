import type { Metadata } from "next";
import { Container } from "@/lib/components/Container";
import { PageHero } from "@/lib/components/PageHero";
import { Reveal } from "@/lib/components/Reveal";
import { ContactForm } from "@/lib/components/ContactForm";
import { Icon } from "@/lib/icons";
import type { IconName } from "@/content/types";
import { site } from "@/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Grandma's Love, Inc. in Brooklyn, NY — call, email, or send us a message to volunteer, donate, or partner.",
};

const details: {
  icon: IconName;
  label: string;
  value: string;
  href?: string;
}[] = [
  {
    icon: "pin",
    label: "Visit us",
    value: site.contact.addressLines.join(", "),
    href: site.contact.mapsHref,
  },
  {
    icon: "phone",
    label: "Call us",
    value: site.contact.phone,
    href: site.contact.phoneHref,
  },
  {
    icon: "mail",
    label: "Email us",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
];

const socials = [
  { name: "facebook" as const, href: site.social.facebook, label: "Facebook" },
  { name: "instagram" as const, href: site.social.instagram, label: "Instagram" },
  { name: "linkedin" as const, href: site.social.linkedin, label: "LinkedIn" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's chat"
        description="Have a question, want to volunteer, or hoping to partner with us? We'd love to hear from you."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Details */}
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Reach out
            </h2>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Grandma&rsquo;s Love, Inc. is based in Brooklyn, New York. Drop by,
              call, or send a note — we&rsquo;re always glad to connect with
              neighbors and supporters.
            </p>

            <ul className="mt-8 space-y-4">
              {details.map((d) => (
                <li key={d.label}>
                  <a
                    href={d.href}
                    target={d.icon === "pin" ? "_blank" : undefined}
                    rel={d.icon === "pin" ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                      <Icon name={d.icon} className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">
                        {d.label}
                      </span>
                      <span className="block text-ink-soft">{d.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="text-sm font-semibold text-ink">Follow along</p>
              <div className="mt-3 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink-soft transition hover:border-brand/40 hover:bg-brand-soft hover:text-brand"
                  >
                    <Icon name={s.name} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={100}>
            <div className="rounded-card border border-line bg-paper p-7 shadow-soft sm:p-9">
              <h2 className="font-display text-2xl font-semibold text-ink">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-ink-soft">
                Fill out the form and your email app will open with your message
                ready to send.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
