export const site = {
  name: "Zimbabwe Excellent Plumbers",
  shortName: "ZEP",
  city: "Harare",
  country: "Zimbabwe",
  hours: "Mon–Sat, 07:30–17:30",
} as const;

export const serviceAreas = [
  "Borrowdale",
  "Mount Pleasant",
  "Highlands",
  "Avondale",
  "Marlborough",
  "Greendale",
  "Belvedere",
  "Waterfalls",
  "Msasa",
  "Harare CBD",
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
  { value: 103, suffix: "+", label: "Bathrooms completed" },
  { value: 9, suffix: "+", label: "Years of experience" },
  { value: 300, suffix: "+", label: "Projects delivered" },
  { value: 13, suffix: " min", label: "Average WhatsApp reply" },
];

/**
 * The live number is supplied at build time. Until it is set, the buttons stay
 * clickable against a placeholder so the layout can be reviewed as-is.
 */
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "000000000000";

export const whatsappConfigured = Boolean(import.meta.env.VITE_WHATSAPP_NUMBER);

const DEFAULT_MESSAGE = `Hello ${site.name}, I'd like a quote for plumbing work in ${site.city}.`;

export function whatsappHref(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
