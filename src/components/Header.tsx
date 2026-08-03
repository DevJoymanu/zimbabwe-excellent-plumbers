import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import { navLinks, site } from "@/data/site";

const DESKTOP_LINK =
  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/10 hover:text-white";
const MOBILE_LINK =
  "rounded-lg px-3 py-2.5 text-base font-medium transition-colors hover:bg-white/10 hover:text-white";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // A route change should never leave the drawer hanging open behind the page.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-deep/95 backdrop-blur supports-[backdrop-filter]:bg-navy-deep/85">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-3.5">
        <Link to="/" className="group flex items-center gap-2.5 text-white">
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-md bg-accent font-display text-sm font-semibold text-accent-foreground"
          >
            {site.shortName}
          </span>
          <span className="hidden text-sm leading-tight font-semibold tracking-tight sm:block">
            {site.name}
            <span className="block text-[0.7rem] font-medium tracking-wide text-accent">
              {site.city}
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="ml-auto hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `${DESKTOP_LINK} ${
                  isActive ? "bg-white/10 text-accent" : "text-white/80"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          {/* Always visible, at every width — the primary CTA must never be
              more than a glance away. (This previously carried
              `hidden sm:inline-flex`, which never took effect: the button's own
              base class already sets `inline-flex`, and Tailwind emits
              `.inline-flex` after `.hidden`, so the later rule won at equal
              specificity. Keeping it would have been a silent trap.) */}
          <WhatsAppButton size="sm" />
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-10 place-items-center rounded-md text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        hidden={!menuOpen}
        aria-label="Mobile"
        className="border-t border-white/10 bg-navy-deep lg:hidden"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `${MOBILE_LINK} ${
                  isActive ? "bg-white/10 text-accent" : "text-white/85"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <WhatsAppButton className="mt-2 sm:hidden" />
        </div>
      </nav>
    </header>
  );
}
