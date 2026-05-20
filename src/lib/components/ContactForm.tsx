"use client";

import { useState } from "react";
import { Icon } from "@/lib/icons";
import { cn } from "@/lib/cn";
import { site, interestAreas } from "@/content";

const fieldClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink shadow-sm outline-none transition placeholder:text-ink-soft/60 focus:border-brand focus:ring-2 focus:ring-brand/20";

/**
 * Contact form that composes a pre-filled email via `mailto:` — fully
 * functional on a static export with no backend. The visitor's email client
 * opens with their message ready to send to the organization.
 */
export function ContactForm() {
  const [interests, setInterests] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggle = (value: string) =>
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const first = (data.get("firstName") as string) || "";
    const last = (data.get("lastName") as string) || "";
    const email = (data.get("email") as string) || "";
    const phone = (data.get("phone") as string) || "";
    const message = (data.get("message") as string) || "";
    const newsletter = data.get("newsletter") ? "Yes" : "No";

    const body = [
      `Name: ${first} ${last}`.trim(),
      `Email: ${email}`,
      phone && `Phone: ${phone}`,
      interests.length && `Interested in: ${interests.join(", ")}`,
      `Subscribe to newsletter: ${newsletter}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const subject = `Website inquiry from ${first} ${last}`.trim();
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">
            First name
          </span>
          <input name="firstName" required className={fieldClass} autoComplete="given-name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">
            Last name
          </span>
          <input name="lastName" required className={fieldClass} autoComplete="family-name" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Email</span>
          <input name="email" type="email" required className={fieldClass} autoComplete="email" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">
            Phone <span className="text-ink-soft">(optional)</span>
          </span>
          <input name="phone" type="tel" className={fieldClass} autoComplete="tel" />
        </label>
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-ink">
          I&rsquo;d like more information on:
        </legend>
        <div className="flex flex-wrap gap-2">
          {interestAreas.map((area) => {
            const active = interests.includes(area);
            return (
              <button
                key={area}
                type="button"
                onClick={() => toggle(area)}
                aria-pressed={active}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-medium transition",
                  active
                    ? "border-brand bg-brand text-white"
                    : "border-line bg-white text-ink-soft hover:border-brand/40 hover:text-brand",
                )}
              >
                {active && <Icon name="check" className="h-3.5 w-3.5" />}
                {area}
              </button>
            );
          })}
        </div>
      </fieldset>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-ink">Message</span>
        <textarea
          name="message"
          rows={4}
          required
          className={cn(fieldClass, "resize-y")}
          placeholder="Tell us how you'd like to get involved…"
        />
      </label>

      <label className="flex items-start gap-3 text-sm text-ink-soft">
        <input
          name="newsletter"
          type="checkbox"
          className="mt-0.5 h-5 w-5 rounded border-line text-brand focus:ring-brand/30"
        />
        Yes, subscribe me to the Grandma&rsquo;s Love newsletter.
      </label>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lift sm:w-auto"
      >
        Send message
        <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>

      {submitted && (
        <p className="flex items-center gap-2 text-sm text-pine">
          <Icon name="check" className="h-4 w-4" />
          Your email app should have opened with your message ready to send.
        </p>
      )}
    </form>
  );
}
