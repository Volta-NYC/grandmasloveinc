import { Container } from "@/lib/components/Container";
import { Button } from "@/lib/components/Button";
import { Icon } from "@/lib/icons";

export default function NotFound() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container size="narrow" className="text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand text-white shadow-lift">
          <Icon name="heart" filled className="h-8 w-8" />
        </span>
        <p className="mt-8 font-display text-6xl font-semibold text-ink">404</p>
        <h1 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
          We couldn&rsquo;t find that page
        </h1>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">
          The page may have moved. Let&rsquo;s get you back to helping children
          in our community.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="primary" withArrow>
            Back home
          </Button>
          <Button href="/programs" variant="ghost">
            Explore programs
          </Button>
        </div>
      </Container>
    </section>
  );
}
