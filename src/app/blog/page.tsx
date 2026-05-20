import type { Metadata } from "next";
import { Container } from "@/lib/components/Container";
import { PageHero } from "@/lib/components/PageHero";
import { Reveal } from "@/lib/components/Reveal";
import { PostCard } from "@/lib/components/cards";
import { posts } from "@/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stories and updates from Grandma's Love, Inc. on childhood hunger, literacy, and the children and families we serve.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="From the blog"
        title="Stories from our community"
        description="Reflections on the work, the children we serve, and the people who make it all possible."
      />

      <section className="py-16 sm:py-20">
        <Container>
          {featured && (
            <Reveal>
              <PostCard post={featured} featured />
            </Reveal>
          )}
          {rest.length > 0 && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {rest.map((post, i) => (
                <Reveal key={post.slug} delay={i * 90}>
                  <PostCard post={post} />
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
