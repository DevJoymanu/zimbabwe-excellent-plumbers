import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
  type GalleryItem,
} from "@/data/gallery";

export default function Gallery() {
  const [active, setActive] = useState<GalleryCategory>("All");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const visible = useMemo(
    () =>
      active === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === active),
    [active],
  );

  return (
    <>
      <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {galleryCategories.map((category) => {
          const selectedTab = category === active;
          return (
            <button
              key={category}
              role="tab"
              type="button"
              aria-selected={selectedTab}
              onClick={() => setActive(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                selectedTab
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-card text-navy hover:border-accent-ink hover:text-accent-ink"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, index) => (
          // Keying on src remounts tiles when the filter changes, so a tile
          // that arrives already in view still runs its reveal.
          <Reveal as="li" key={item.src} delay={(index % 3) * 60}>
            <button
              type="button"
              onClick={() => setSelected(item)}
              className="group relative block w-full overflow-hidden rounded-xl bg-navy text-left"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-4 pt-12">
                <span className="block text-sm font-medium text-white">
                  {item.caption}
                </span>
                <span className="mt-1 block text-xs font-semibold tracking-wide text-accent uppercase">
                  {item.category}
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </ul>

      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </>
  );
}
