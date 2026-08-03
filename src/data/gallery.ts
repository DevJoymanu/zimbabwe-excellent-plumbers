import basinMixerTap from "@/assets/img/basin-mixer-tap.jpg";
import bathroomTilingDetail from "@/assets/img/bathroom-tiling-detail.jpg";
import bathroomVanityBasin from "@/assets/img/bathroom-vanity-basin.jpg";
import bathtubTiledSurround from "@/assets/img/bathtub-tiled-surround.jpg";
import completedBathroomWideView from "@/assets/img/completed-bathroom-wide-view.jpg";
import fullBathroomRenovation from "@/assets/img/full-bathroom-renovation.jpg";
import fullHeightShowerEnclosure from "@/assets/img/full-height-shower-enclosure.jpg";
import plumbingPipeworkInstall from "@/assets/img/plumbing-pipework-install.jpg";
import showerMixerTapware from "@/assets/img/shower-mixer-tapware.jpg";
import toiletInstallationBathroom from "@/assets/img/toilet-installation-bathroom.jpg";
import walkInShowerTiled from "@/assets/img/walk-in-shower-tiled.jpg";

export const galleryCategories = [
  "All",
  "Bathrooms",
  "Showers",
  "Hot Water & Solar",
  "Water Storage & Pumps",
  "Commercial",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: Exclude<GalleryCategory, "All">;
};

/**
 * Filenames and subjects don't always line up — several photos were added
 * under a reused asset name. The pairing below matches the published site.
 */
export const galleryItems: GalleryItem[] = [
  {
    src: walkInShowerTiled,
    alt: "Renovated bathroom in Harare with white marble-effect tiling, black freestanding bath, wall-hung WC and black vessel basin",
    caption: "Marble-effect bathroom with freestanding bath and matt black fittings.",
    category: "Bathrooms",
  },
  {
    src: fullBathroomRenovation,
    alt: "Fully tiled family bathroom in Harare with quadrant shower enclosure, bath, toilet and basin",
    caption: "A full family bathroom: shower, bath, WC and basin in one fit-out.",
    category: "Bathrooms",
  },
  {
    src: bathtubTiledSurround,
    alt: "Tiled shower enclosure in Harare with matt black rainfall shower head, hand shower and glass door",
    caption: "Shower enclosure with rainhead and hand shower, neatly set out.",
    category: "Showers",
  },
  {
    src: fullHeightShowerEnclosure,
    alt: "Matt black freestanding bath filler tap running water into a white bath in a Harare bathroom",
    caption: "Freestanding bath filler, tested and running.",
    category: "Bathrooms",
  },
  {
    src: completedBathroomWideView,
    alt: "Shower enclosure and close-coupled toilet being installed in a Harare bathroom",
    caption: "Shower enclosure and WC going in — the install stage.",
    category: "Showers",
  },
  {
    src: plumbingPipeworkInstall,
    alt: "Freestanding bath, pedestal basin and toilet positioned in an unfinished bathroom during a Harare renovation",
    caption: "Sanitaryware set out before tiling and finishing.",
    category: "Bathrooms",
  },
  {
    src: bathroomVanityBasin,
    alt: "Technician installing an evacuated-tube solar geyser on a metal roof in Harare",
    caption: "Solar geyser installed and commissioned on a Harare rooftop.",
    category: "Hot Water & Solar",
  },
  {
    src: toiletInstallationBathroom,
    alt: "Water storage tank on a steel stand with booster pump and blue supply pipework at a Harare home",
    caption: "Elevated storage tank with booster pump and changeover valving.",
    category: "Water Storage & Pumps",
  },
  {
    src: showerMixerTapware,
    alt: "Commercial water storage tanks with twin booster pumps and pressure vessels installed in Zimbabwe",
    caption: "Twin storage tanks, pressure vessels and duty pumps for a commercial site.",
    category: "Water Storage & Pumps",
  },
  {
    src: basinMixerTap,
    alt: "Water tank on a tall fabricated steel stand plumbed into a home water supply in Harare",
    caption: "Tank stand fabricated, erected and plumbed in.",
    category: "Water Storage & Pumps",
  },
  {
    src: bathroomTilingDetail,
    alt: "Row of three wall-hung toilets with concealed cisterns in a tiled commercial washroom in Harare",
    caption: "Wall-hung WC bank for a commercial washroom.",
    category: "Commercial",
  },
];

/** The four tiles shown in the homepage teaser. */
export const featuredWork = galleryItems.slice(0, 4);
