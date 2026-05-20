import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/lib/components/Container";
import { Reveal } from "@/lib/components/Reveal";
import { Button } from "@/lib/components/Button";
import { PostCard } from "@/lib/components/cards";
import { Icon } from "@/lib/icons";
import { blurProps } from "@/lib/image";
import { formatDate } from "@/lib/format";
import { posts, site } from "@/content";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      images: [post.image],
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article>
        <Container size="narrow" className="pt-12 sm:pt-16">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
            >
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
              All stories
            </Link>
            <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand">
              <span>{formatDate(post.date)}</span>
              <span className="text-line">•</span>
              <span className="text-ink-soft">{post.readingTime}</span>
            </div>
            <h1 className="mt-4 font-display text-3xl font-semibold leading-[1.1] text-ink sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              {post.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-3 border-y border-line py-4">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-sm font-semibold text-white">
                GL
              </span>
              <div className="text-sm">
                <p className="font-semibold text-ink">{post.author}</p>
                <p className="text-ink-soft">{site.shortName}</p>
              </div>
            </div>
          </Reveal>
        </Container>

        <Container size="narrow" className="mt-10">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] shadow-lift">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                {...blurProps(post.image)}
              />
            </div>
          </Reveal>
        </Container>

        <Container size="narrow" className="py-12 sm:py-16">
          <div className="space-y-6 text-lg leading-relaxed text-ink/90">
            {post.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-12 rounded-card border border-line bg-cream p-8 text-center">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Help us write the next chapter
            </h2>
            <p className="mx-auto mt-2 max-w-md text-ink-soft">
              Your support puts food and books into the hands of children who
              need them most.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button href={site.donateHref} variant="primary" withArrow>
                Donate now
              </Button>
              <Button href="/get-involved" variant="ghost">
                Get involved
              </Button>
            </div>
          </div>
        </Container>
      </article>

      {more.length > 0 && (
        <section className="bg-cream py-16 sm:py-20">
          <Container>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Keep reading
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {more.map((p, i) => (
                <Reveal key={p.slug} delay={i * 90}>
                  <PostCard post={p} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
