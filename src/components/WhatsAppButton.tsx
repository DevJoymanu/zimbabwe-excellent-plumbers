import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/data/site";

type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

/**
 * Every button sells the same offer, but the header's small button has to
 * survive a 320px viewport — so the wording shortens with the size rather
 * than wrapping onto two lines.
 */
const LABELS: Record<Size, string> = {
  sm: "Free consultation",
  md: "Get your free consultation",
  lg: "Book my free consultation",
};

type Props = {
  children?: React.ReactNode;
  /** Prefilled WhatsApp message; falls back to the generic quote request. */
  message?: string;
  size?: Size;
  className?: string;
};

export default function WhatsAppButton({
  children,
  message,
  size = "md",
  className = "",
}: Props) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-[transform,background-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 bg-accent text-accent-foreground shadow-[0_8px_24px_-12px_rgba(16,80,45,0.7)] hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-ink ${SIZES[size]} ${className}`}
    >
      <MessageCircle className="size-[1.1em]" aria-hidden="true" />
      {children ?? LABELS[size]}
    </a>
  );
}
