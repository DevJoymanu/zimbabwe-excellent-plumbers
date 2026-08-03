import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { metaForPath, siteUrl } from "@/data/meta";

/** Creates the tag on first use, then reuses it on every later route change. */
function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  for (const [key, value] of Object.entries(attrs)) el.setAttribute(key, value);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

/**
 * Keeps the document head in step with the current route. Rendered once from
 * the layout rather than per page, so a new route only needs an entry in
 * `src/data/meta.ts`.
 */
export default function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = metaForPath(pathname);
    const canonical = `${siteUrl}${pathname === "/" ? "" : pathname}`;

    document.title = meta.title;
    upsertMeta('meta[name="description"]', {
      name: "description",
      content: meta.description,
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: meta.title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: meta.description,
    });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
    upsertLink("canonical", canonical);

    // Unknown routes render the not-found page; keep them out of the index.
    const robots = document.head.querySelector('meta[name="robots"]');
    if (meta.noindex) {
      upsertMeta('meta[name="robots"]', { name: "robots", content: "noindex, follow" });
    } else if (robots) {
      robots.remove();
    }
  }, [pathname]);

  return null;
}
