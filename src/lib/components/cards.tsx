import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { Icon } from "@/lib/icons";
import { formatDate, dateParts } from "@/lib/format";
import { blurProps } from "@/lib/image";
import type { EventItem, PostItem, Program } from "@/content/types";

/* --------------------------------- Program ------------------------------- */
export function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={program.image}
          alt={program.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          {...blurProps(program.image)}
        />
        <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/95 text-brand shadow-soft backdrop-blur">
          <Icon name={program.icon} className="h-6 w-6" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-ink">
          {program.title}
        </h3>
        <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
          {program.summary}
        </p>
        <Link
          href={`/programs#${program.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
        >
          Learn more
          <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

/* ---------------------------------- Event -------------------------------- */
export function EventCard({ event }: { event: EventItem }) {
  const { month, day } = dateParts(event.date);
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          {...blurProps(event.image)}
        />
        <div className="absolute left-4 top-4 flex flex-col items-center rounded-2xl bg-white/95 px-3.5 py-2 text-center shadow-soft backdrop-blur">
          <span className="text-xs font-bold uppercase tracking-wide text-brand">{month}</span>
          <span className="font-display text-xl font-semibold leading-none text-ink">{day}</span>
        </div>
        {event.status === "past" && (
          <span className="absolute right-4 top-4 rounded-full bg-ink/75 px-3 py-1 text-xs font-medium text-paper backdrop-blur">
            Past event
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-ink">{event.title}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-soft">
          <Icon name="pin" className="h-4 w-4 text-brand" />
          {event.venue}, {event.city}
        </p>
        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
          {event.summary}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          View details
          <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

/* ----------------------------------- Post -------------------------------- */
export function PostCard({ post, featured = false }: { post: PostItem; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex overflow-hidden rounded-card border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
        featured ? "flex-col md:flex-row" : "flex-col",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          featured ? "aspect-[16/10] md:aspect-auto md:w-1/2" : "aspect-[16/10]",
        )}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          {...blurProps(post.image)}
        />
      </div>
      <div className={cn("flex flex-1 flex-col p-6", featured && "md:justify-center md:p-9")}>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand">
          <span>{formatDate(post.date)}</span>
          <span className="text-line">•</span>
          <span className="text-ink-soft">{post.readingTime}</span>
        </div>
        <h3
          className={cn(
            "mt-3 font-display font-semibold text-ink",
            featured ? "text-2xl sm:text-3xl" : "text-xl",
          )}
        >
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
          {post.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          Read story
          <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
