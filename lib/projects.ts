/**
 * Mold projects by vehicle segment, from UPEC's "FINAL PART" presentation.
 * Images: public/assets/img/projects/<slug>-mold.webp (open mold) and <slug>-part.webp (molded part).
 * To add a project, drop both images in that folder and add { name, slug } to its segment.
 */

export type Project = { name: string; slug: string };

export type Segment = {
  id: string;
  title: string;
  /** Overview card image (public/assets/img/products) */
  cover: string;
  coverAlt: string;
  /** Typical parts in this segment */
  parts: string[];
  projects: Project[];
};

export const projectImage = (slug: string, kind: "mold" | "part") => `/assets/img/projects/${slug}-${kind}.webp`;

export const SEGMENTS: Segment[] = [
  {
    id: "id-decals-badges",
    title: "ID Decals & Badges (Emblems)",
    cover: "/assets/img/products/mold-badge.webp",
    coverAlt: "Injection mold for an emblem garnish",
    parts: ["Vehicle Name Emblem", "Identical Logo", "Transparent Emblem", "2K Logo", "IMD Part", "Machined Logo"],
    projects: [
      { name: "Vehicle Name Emblem", slug: "vehicle-name-emblem" },
      { name: "2K Logo", slug: "2k-logo" },
      { name: "IMD Part", slug: "imd-part" },
      { name: "Identical Logo", slug: "identical-logo" },
    ],
  },
  {
    id: "front-facia",
    title: "Front Facia Decoratives",
    cover: "/assets/img/products/mold-front-facia.webp",
    coverAlt: "Injection mold for a front grille",
    parts: ["Front Grille", "Chrome Garnish", "Bumper Garnish", "Fog Lamp Cover", "Intake", "Machined Logo"],
    projects: [
      { name: "Front Grille", slug: "front-grille" },
      { name: "Front Grille Garnish", slug: "front-grille-garnish" },
      { name: "Fog Lamp Cover", slug: "fog-lamp-cover" },
    ],
  },
  {
    id: "rear-module",
    title: "Rear Module Decoratives",
    cover: "/assets/img/products/mold-rear-module.webp",
    coverAlt: "Injection mold for a rear garnish",
    parts: ["Rear Bumper Garnish", "Rear Door Garnish", "Fog Lamp Cover", "Rear Appliques", "Rear Lamp Cover"],
    projects: [
      { name: "Rear Door Garnish", slug: "rear-door-garnish" },
      { name: "Rear Lamp Reflector", slug: "rear-lamp-reflector" },
    ],
  },
  {
    id: "side-panel-door",
    title: "Side Panel / Door Decoratives",
    cover: "/assets/img/products/mold-side-door.webp",
    coverAlt: "Injection mold for a side panel decorative",
    parts: ["Fender Cover (Front & Rear)", "Foot Rest Cover", "Body Side Molding", "Door Appliques", "Fender Embellishers", "Door Handles"],
    projects: [
      { name: "Front Door Body Side Garnish", slug: "front-door-body-side-garnish" },
      { name: "Rear Door Body Side Garnish", slug: "rear-door-body-side-garnish" },
    ],
  },
  {
    id: "cockpit",
    title: "Cockpit Decoratives & Parts",
    cover: "/assets/img/products/mold-cockpit.webp",
    coverAlt: "Injection mold for interior trim panels",
    parts: ["IP Garnishes", "Air Register Tools", "Console CTR", "Pillar Trims", "Scuff Plate", "Steering Cover", "Light Guides"],
    projects: [
      { name: "Floor Console", slug: "floor-console" },
      { name: "IP Garnish", slug: "ip-garnish" },
      { name: "IP CTR Garnish", slug: "ip-ctr-garnish" },
    ],
  },
  {
    id: "wheel",
    title: "Wheel Decoratives",
    cover: "/assets/img/products/mold-wheel.webp",
    coverAlt: "Injection mold for a wheel cover",
    parts: ["Wheel Cover", "Alloy Wheel Insert", "Alloy Cap", "Hub Cap"],
    projects: [
      { name: "Wheel Cover", slug: "wheel-cover" },
      { name: "Alloy Wheel Cap", slug: "alloy-wheel-cap" },
    ],
  },
  {
    id: "accessories-illumination",
    title: "Accessories & Illumination",
    cover: "/assets/img/products/mold-accessories.webp",
    coverAlt: "Injection mold for decorative accessory strips",
    parts: ["Chrome Garnish", "Illuminated Garnishes", "Cup Holder", "Fender Decals", "High Gloss Add-on"],
    projects: [
      { name: "Chrome Garnish", slug: "chrome-garnish" },
      { name: "Illuminated Garnish", slug: "illuminated-garnish" },
    ],
  },
  {
    id: "performance",
    title: "Performance Parts",
    cover: "/assets/img/products/mold-performance.webp",
    coverAlt: "Injection mold for air guide parts",
    parts: ["Bumper Holder", "Engine Cover", "Under Hood Cover", "Roof Rail Base", "Other Structural Parts"],
    projects: [
      { name: "Bumper Holder", slug: "bumper-holder" },
      { name: "Structural Part", slug: "structural-part" },
      { name: "Under Hood Cover", slug: "under-hood-cover" },
    ],
  },
];
