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
    title: `Plumbers in ${site.city} | Free Consultation | ${site.name}`,
    description: `${site.yearsExperience}+ years of plumbing in ${site.city}: sewer and drainage, gutters, sanitary fittings, water and sewer reticulation, geysers, water tanks and pumps, bathrooms. Free consultation — WhatsApp us.`,
  },
  "/services": {
    title: `Plumbing Services in ${site.city} — Drainage, Geysers, Tanks | ${site.name}`,
    description: `Sewer and drainage, gutters, sanitary fittings and water closet sets, water and sewer reticulation, geyser and water tank installations, pumps and bathrooms across ${site.city}. Free consultation.`,
  },
  "/our-work": {
    title: `Our Work — Completed Plumbing Projects in ${site.city} | ${site.name}`,
    description: `Photographs of finished bathrooms, showers, sanitaryware, solar geysers, water tanks and pump installations handed over across ${site.city}. Filter by type of work.`,
  },
  "/about": {
    title: `About Us — ${site.yearsExperience}+ Years Plumbing in ${site.city} | ${site.name}`,
    description: `${site.yearsExperience}+ years in the trade: free consultations, itemised written quotes in USD, correct gradients and waterproofing, pressure-tested installations, and a named contact from start to handover.`,
  },
  "/contact": {
    title: `Contact — Free Plumbing Consultation in ${site.city} | ${site.name}`,
    description: `WhatsApp a photo of the job for honest advice and a free consultation at your property — no call-out fee. Serving ${site.city} and surrounding areas, ${site.hours}.`,
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
