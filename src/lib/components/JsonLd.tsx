import { site } from "@/content/site";

/** Organization / NGO structured data for richer search results. */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    description: site.description,
    foundingDate: String(site.founded),
    founder: { "@type": "Person", name: site.founder },
    email: site.contact.email,
    telephone: site.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "261 68th Street, Ground Floor",
      addressLocality: "Brooklyn",
      addressRegion: "NY",
      postalCode: "11220",
      addressCountry: "US",
    },
    sameAs: [site.social.facebook, site.social.instagram, site.social.linkedin],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
