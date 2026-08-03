import { Link } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton";
import { serviceAreas, site, whatsappConfigured } from "@/data/site";

const EXPLORE = [
  { to: "/services", label: `Plumbing and bathroom services in ${site.city}` },
  { to: "/our-work", label: "Our finished bathroom projects" },
  { to: "/about", label: `About ${site.name}` },
  { to: "/contact", label: "Contact and request a quote" },
];

const HEADING = "text-sm font-semibold tracking-wide text-accent uppercase";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/75">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl text-white">{site.name}</p>
          <p className="measure mt-3 text-sm leading-relaxed">
            Premium bathroom renovations and civil-engineering-grade plumbing for
            homes and commercial property across {site.city}.
          </p>
          <WhatsAppButton className="mt-5" />
        </div>

        <div>
          <h2 className={HEADING}>Contact</h2>
          <address className="mt-4 space-y-1.5 text-sm not-italic">
            <p>{site.name}</p>
            <p>
              {site.city}, {site.country}
            </p>
            <p>{whatsappConfigured ? "WhatsApp us any time" : "WhatsApp number coming soon"}</p>
            <p>{site.hours}</p>
          </address>
          {!whatsappConfigured && (
            <p className="mt-3 text-xs text-white/50">
              WhatsApp number pending — set{" "}
              <code>VITE_WHATSAPP_NUMBER</code> to go live.
            </p>
          )}
        </div>

        <div>
          <h2 className={HEADING}>Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {EXPLORE.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-white/55">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Serving {serviceAreas.slice(0, 5).join(", ")} and surrounding areas.</p>
        </div>
      </div>
    </footer>
  );
}
