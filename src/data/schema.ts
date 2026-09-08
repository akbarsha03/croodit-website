/**
 * The site's entity graph. One Organization node and one WebSite node, each with a stable
 * `@id`, so every page's schema points at the same Croodit rather than re-declaring it.
 * `Base.astro` renders both on every page — pages only add what is specific to them.
 */
import { SITE } from "../site";

export const ORG_ID = `${SITE.url}/#organization`;
export const SITE_ID = `${SITE.url}/#website`;

/** Use wherever a publisher/author/provider is needed, instead of a second Organization. */
export const orgRef = { "@id": ORG_ID };

export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/brand/icon-square-lime.svg`,
  image: `${SITE.url}/og.png`,
  email: SITE.email,
  areaServed: { "@type": "Country", name: "India" },
  description:
    "Croodit makes WhatsApp invoicing and UPI payment tracking simple for solo service providers in India.",
};

export const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": SITE_ID,
  name: SITE.name,
  url: SITE.url,
  inLanguage: "en-IN",
  publisher: orgRef,
};

/**
 * Build a BreadcrumbList from a Home-first trail of [name, path] pairs.
 * The last entry is the current page, named after the page — not after its section.
 */
export const breadcrumb = (trail: [name: string, path: string][]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map(([name, path], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: path === "/" ? SITE.url : `${SITE.url}${path}`,
  })),
});
