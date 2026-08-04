export const site = {
  name: "Zimbabwe Excellent Plumbers",
  shortName: "ZEP",
  city: "Harare",
  country: "Zimbabwe",
  hours: "Mon–Sat, 07:30–17:30",
  yearsExperience: 21,
} as const;

/**
 * The single offer the whole site drives toward. Every CTA is a route into it,
 * so the wording lives here rather than being retyped page by page.
 */
export const offer = {
  name: "free consultation",
  headline: "Free consultation, no obligation",
  /** Used under CTAs to remove the last bit of hesitation before tapping. */
  reassurance:
    "Free consultation and a written quote — no call-out fee, no obligation to book.",
} as const;

export const serviceAreas = [
  "Borrowdale",
  "Borrowdale Brooke",
  "Mount Pleasant",
  "Highlands",
  "Chisipite",
  "Glen Lorne",
  "Avondale",
  "Milton Park",
  "Marlborough",
  "Greendale",
  "Eastlea",
  "Belvedere",
  "Hatfield",
  "Waterfalls",
  "Msasa",
  "Harare CBD",
  "Ruwa",
  "Norton",
] as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Our Work", to: "/our-work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export type Stat = { value: number; suffix: string; label: string };

export const stats: Stat[] = [
  { value: site.yearsExperience, suffix: "+", label: "Years in the trade" },
  { value: 103, suffix: "+", label: "Bathrooms completed" },
  { value: 300, suffix: "+", label: "Projects delivered" },
  { value: 13, suffix: " min", label: "Average WhatsApp reply" },
];

/**
 * The live number is supplied at build time. Until it is set, the buttons stay
 * clickable against a placeholder so the layout can be reviewed as-is.
 */
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "000000000000";

export const whatsappConfigured = Boolean(import.meta.env.VITE_WHATSAPP_NUMBER);

const DEFAULT_MESSAGE = `Hi ${site.name}, I'd like to book my free consultation for plumbing work in ${site.city}.`;

/** Prefilled message for a named job type, so the chat opens already useful. */
export function consultMessage(subject: string): string {
  return `Hi ${site.name}, I'd like to book my free consultation about ${subject} in ${site.city}.`;
}

export function whatsappHref(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
