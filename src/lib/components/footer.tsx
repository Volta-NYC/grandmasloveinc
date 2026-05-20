import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { Button } from "./Button";
import { Icon } from "@/lib/icons";
import { site, footerLinks } from "@/content/site";

const socials = [
  { name: "facebook" as const, href: site.social.facebook, label: "Facebook" },
  { name: "instagram" as const, href: site.social.instagram, label: "Instagram" },
  { name: "linkedin" as const, href: site.social.linkedin, label: "LinkedIn" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-ink text-paper">
      {/* Donate banner */}
      <Container className="relative -translate-y-12">
        <div className="overflow-hidden rounded-[1.75rem] bg-brand px-7 py-10 shadow-lift sm:px-12 sm:py-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                A little love goes a long way.
              </h2>
              <p className="mt-2 text-white/85">
                Every gift helps a child in New York City eat well and fall in
                love with reading. Join us today.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={site.donateHref} variant="white" size="lg" withArrow>
                Donate now
              </Button>
              <Button
                href="/get-involved"
                size="lg"
                className="bg-white/15 text-white ring-1 ring-inset ring-white/30 hover:bg-white/25"
              >
                Get involved
              </Button>
            </div>
          </div>
        </div>
      </Container>

      <Container className="-mt-4 pb-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white p-1.5 shadow-soft">
                <Image
                  src="/images/logo-mark.webp"
                  alt="Grandma's Love, Inc. logo"
                  width={302}
                  height={274}
                  className="h-full w-full object-contain"
                />
              </span>
              <div>
                <p className="font-display text-xl font-semibold text-white">
                  Grandma&rsquo;s Love, Inc.
                </p>
                <p className="text-sm text-paper/60">{site.tagline}</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/70">
              {site.brandLine} A registered {site.legal} serving Brooklyn and
              greater New York City since {site.founded}.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-paper transition hover:bg-brand hover:text-white"
                >
                  <Icon name={s.name} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-paper/50">
              Explore
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-paper/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-paper/50">
              Visit & Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-paper/75">
              <li className="flex gap-3">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <a href={site.contact.mapsHref} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {site.contact.addressLines.join(", ")}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <a href={site.contact.phoneHref} className="hover:text-white">
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <a href={`mailto:${site.contact.email}`} className="break-all hover:text-white">
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <Link
            href="https://nyc.voltanpo.org"
            target="_blank"
            rel="noreferrer"
            className="link-underline text-paper/70 hover:text-white"
          >
            Website made by @VoltaNYC
          </Link>
        </div>
      </Container>
    </footer>
  );
}
