"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { Icon } from "@/lib/icons";
import { primaryNav, site } from "@/content/site";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change + lock body scroll while open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line/80 bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-paper/0",
      )}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "text-brand"
                  : "text-ink-soft hover:text-ink",
              )}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-brand" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={site.donateHref} variant="primary" size="md" withArrow>
            Donate
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center rounded-full text-ink ring-1 ring-line transition hover:bg-cream lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 bg-current transition-all duration-300",
                open && "top-1.5 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-all duration-200",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-3 h-0.5 w-5 bg-current transition-all duration-300",
                open && "top-1.5 -rotate-45",
              )}
            />
          </span>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "fixed inset-0 top-[4.5rem] bg-ink/30 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "fixed inset-x-3 top-[5rem] origin-top rounded-3xl border border-line bg-paper p-4 shadow-lift transition-all duration-300",
            open
              ? "scale-100 opacity-100"
              : "pointer-events-none -translate-y-2 scale-95 opacity-0",
          )}
        >
          <div className="flex flex-col gap-1">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-brand-soft text-brand"
                    : "text-ink hover:bg-cream",
                )}
              >
                {item.label}
                <Icon name="arrow" className="h-4 w-4 opacity-40" />
              </Link>
            ))}
          </div>
          <div className="mt-3 border-t border-line pt-3">
            <Button
              href={site.donateHref}
              variant="primary"
              size="lg"
              withArrow
              className="w-full"
            >
              Donate
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
