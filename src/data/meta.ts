import { site } from "./site";

export type PageMeta = {
  title: string;
  description: string;
  /** Keeps thin or non-canonical pages out of the index. */
  noindex?: boolean;
};

/**
 * Per-route metadata. A single-page app serves one HTML shell for every route,
 * so without this every page would share the shell's title and description —
 * and every search result would look like the same page.
 */
export const pageMeta: Record<string, PageMeta> = {
  "/": {
    title: `Premium Bathrooms & Plumbing in ${site.city} | ${site.name}`,
    description: `Bathroom renovations and plumbing in ${site.city}, quoted in writing and finished properly. See real completed work and message us on WhatsApp for a price.`,
  },
  "/services": {
    title: `Bathroom & Plumbing Services in ${site.city} | ${site.name}`,
    description: `Bathroom renovations, showers and wet areas, tapware, hot water and solar geysers, storage tanks and pumps, and commercial plumbing across ${site.city}.`,
  },
  "/our-work": {
    title: `Our Work — Completed Bathrooms & Plumbing in ${site.city} | ${site.name}`,
    description: `Photographs of finished bathrooms, showers, solar geysers, pump installations and commercial plumbing handed over across ${site.city}. Filter by type of work.`,
  },
  "/about": {
    title: `About Us — Engineering-Led Plumbing in ${site.city} | ${site.name}`,
    description: `How ${site.name} works: scoped written quotes, waterproofing and falls done correctly, pressure-tested installations, and a named contact from start to handover.`,
  },
  "/contact": {
    title: `Contact — Get a Plumbing Quote in ${site.city} | ${site.name}`,
    description: `Send a photo of your bathroom on WhatsApp for honest advice and a clear price. Serving ${site.city} and surrounding suburbs, ${site.hours}.`,
  },
};

export const notFoundMeta: PageMeta = {
  title: `Page not found | ${site.name}`,
  description: `That page isn't here. Browse our plumbing and bathroom services in ${site.city} instead.`,
  noindex: true,
};

export function metaForPath(pathname: string): PageMeta {
  return pageMeta[pathname] ?? notFoundMeta;
}

/**
 * Absolute base for canonical and og:url. Set VITE_SITE_URL once a custom
 * domain is in place; until then the deployed origin is the canonical home.
 */
export const siteUrl: string =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") ??
  (typeof window !== "undefined" ? window.location.origin : "");
