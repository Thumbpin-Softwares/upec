import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import JsonLd from "@/components/JsonLd";
import { abs } from "@/lib/site";

export const container = "mx-auto max-w-295 px-6";

const btnBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border-2 border-transparent px-6.5 py-3.25 text-[.95rem] font-semibold cursor-pointer transition-[translate,box-shadow,background-color,color,border-color] hover:-translate-y-0.5";

const btnVariants = {
  primary: "bg-cyan-500 text-navy-900 hover:bg-cyan-400 hover:shadow-md",
  outline: "border-white/55 text-white hover:bg-white/12",
  dark: "bg-navy-800 text-white hover:bg-navy-700 hover:shadow-md",
};

export const btn = (variant: keyof typeof btnVariants) => `${btnBase} ${btnVariants[variant]}`;

export const cardSurface =
  "h-full rounded-card border border-grey-200 bg-white transition-[translate,box-shadow,border-color] hover:-translate-y-1.5 hover:border-transparent hover:shadow-md";

export const cardClass = `${cardSurface} px-6.5 py-7.5`;

const sectionTones = {
  white: "",
  grey: "bg-grey-100",
  navy: "bg-linear-135 from-navy-900 to-navy-800 text-white [&_h2]:text-white [&_h3]:text-white [&_p]:text-[#c8d6e5]",
};

export function Section({
  id,
  tone = "white",
  className = "",
  children,
}: {
  id?: string;
  tone?: keyof typeof sectionTones;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`py-11 sm:py-14 md:py-21 ${sectionTones[tone]}`}>
      <div className={`${container} ${className}`}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children, center }: { children: ReactNode; center?: boolean }) {
  return (
    <div
      className={`${center ? "flex justify-center" : "inline-flex"} mb-2.5 items-center gap-2 text-[.78rem] font-bold uppercase tracking-[.12em] text-cyan-500 before:inline-block before:h-0.5 before:w-6.5 before:bg-cyan-500`}
    >
      {children}
    </div>
  );
}

export function IconBadge({ children, small }: { children: ReactNode; small?: boolean }) {
  return (
    <div
      className={`flex flex-none items-center justify-center text-cyan-400 [&_svg]:size-6.5 ${
        small ? "size-10.5 rounded-xl bg-white/10" : "size-13.5 rounded-xl bg-linear-135 from-navy-800 to-blue-600"
      }`}
    >
      {children}
    </div>
  );
}

export function PageHeader({
  title,
  crumb,
  path,
  lead,
  image,
  leadMaxWidth = 620,
}: {
  title: string;
  crumb: string;
  /** This page's URL path, for the breadcrumb structured data */
  path: string;
  lead: string;
  image: string;
  leadMaxWidth?: number;
}) {
  return (
    <section
      // Tint is only as dark as the text needs: even on phones (text spans the full width),
      // weighted to the left on wider screens so the photo shows through on the right.
      className="relative bg-navy-900 bg-[image:linear-gradient(rgba(6,26,51,.68),rgba(6,26,51,.56)),var(--banner-img)] bg-cover bg-center pt-26 pb-10.5 text-white sm:pt-30 sm:pb-12.5 md:bg-[image:linear-gradient(90deg,rgba(6,26,51,.8)_0%,rgba(6,26,51,.52)_50%,rgba(10,44,84,.18)_100%),var(--banner-img)] md:pt-37.5 md:pb-17.5"
      style={{ "--banner-img": `url('${image}')` } as CSSProperties}
    >
      <div className={`${container} [text-shadow:0_1px_14px_rgb(6_26_51/.6)]`}>
        <nav aria-label="Breadcrumb" className="text-[.9rem] text-[#b7c8d9]">
          <ol className="m-0 flex list-none flex-wrap items-center gap-1.5 p-0">
            <li>
              <Link href="/" className="text-[#b7c8d9] transition-colors hover:text-white">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-cyan-400">{crumb}</li>
          </ol>
        </nav>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
              { "@type": "ListItem", position: 2, name: crumb, item: abs(path) },
            ],
          }}
        />
        <h1 className="text-white">{title}</h1>
        <p className="text-[#d7e5f2]" style={{ maxWidth: leadMaxWidth }}>
          {lead}
        </p>
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="reveal mx-auto mb-11 max-w-180 text-center">
      <Eyebrow center>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

export function CtaBanner({
  title,
  text,
  href,
  label,
  image = "/assets/img/photos/okuma-machining-centre.webp",
  className = "",
}: {
  title: string;
  text: string;
  href: string;
  label: string;
  /** Photo on the right half (desktop); fades into the navy panel */
  image?: string;
  className?: string;
}) {
  return (
    <div
      className={`reveal relative isolate grid overflow-hidden rounded-card bg-navy-900 text-white shadow-lg md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] ${className}`}
    >
      {/* Faint engineering grid + glow behind the copy */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/.04)_1px,transparent_1px)] bg-size-[36px_36px] [mask-image:linear-gradient(to_bottom_right,black,transparent_70%)]" />
      <div className="absolute -top-32 -left-24 -z-10 size-96 rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="relative z-1 px-6 py-10 sm:px-10 md:py-14 lg:px-14 lg:py-16">
        <span className="mb-4 flex items-center gap-2.5 text-[.72rem] font-semibold tracking-[.16em] text-cyan-400 uppercase">
          <span className="h-px w-7 bg-cyan-400" />
          Let&apos;s work together
        </span>
        <h2 className="mb-3 text-[1.7rem] leading-tight text-balance text-white md:text-[2.15rem]">{title}</h2>
        <p className="mb-8 max-w-md text-[1.02rem] text-pretty text-[#b7c8d9]">{text}</p>
        <div className="flex max-sm:flex-col max-sm:items-stretch">
          <Link href={href} className={`${btn("primary")} group`}>
            {label}
            <ArrowRight className="size-4 transition-[translate] group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Photo side: hidden on phones, blends into the panel on the left edge */}
      <div className="relative max-md:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-80 [mask-image:linear-gradient(to_right,transparent,black_65%)]"
        />
      </div>
    </div>
  );
}

/**
 * Logo height in px for a given width/height ratio, so marks of every shape carry similar
 * visual weight: square ~60px tall, long wordmarks shorter but much wider.
 */
const logoHeight = (ratio = 2, scale = 1) => Math.round(60 * Math.pow(ratio, -0.45) * scale);

export function LogoGrid({ logos }: { logos: { src: string; name: string; ratio?: number; scale?: number }[] }) {
  return (
    // Inner lines only: every cell draws its right + bottom edge, and the wrapper
    // clips the last column's right edge and last row's bottom edge (-1px overhang)
    <div className="reveal overflow-hidden">
      <div className="-mr-px -mb-px grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {logos.map((logo) => (
          <div
            key={logo.src}
            className="flex h-28 items-center justify-center border-r border-b border-grey-400/50 px-3 sm:h-32 sm:px-5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              style={{ "--logo-h": `${logoHeight(logo.ratio, logo.scale)}px` } as CSSProperties}
              className="h-[calc(var(--logo-h)*0.8)] w-auto max-w-[90%] object-contain sm:h-(--logo-h) sm:max-w-[85%]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Card({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className={`reveal ${cardClass}`}>
      <div className="mb-4">
        <IconBadge>{icon}</IconBadge>
      </div>
      <h3 className="mb-2 text-[1.15rem]">{title}</h3>
      <p className="mb-0 text-[.94rem]">{children}</p>
    </div>
  );
}

export function ProductCard({
  src,
  alt,
  title,
  text,
  titleClassName = "",
  contain,
}: {
  src: string;
  alt: string;
  title: string;
  text?: string;
  titleClassName?: string;
  /** Show the whole image instead of cropping, for wide shots on a white background */
  contain?: boolean;
}) {
  return (
    <div className="reveal overflow-hidden rounded-card border border-grey-200 bg-white shadow-sm transition-[box-shadow,translate] hover:-translate-y-1.25 hover:shadow-md">
      <div className={`aspect-4/3 overflow-hidden ${contain ? "bg-white" : "bg-grey-100"}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className={`size-full ${contain ? "object-contain" : "object-cover"}`} />
      </div>
      <div className="px-5.5 py-5">
        {/* Forced colours: the card stays white even inside a navy section, which recolours h3/p */}
        <h3 className={`text-navy-800! ${titleClassName}`}>{title}</h3>
        {text && <p className="text-grey-600!">{text}</p>}
      </div>
    </div>
  );
}

export function Timeline({ items }: { items: { year?: string; title: string; text: string }[] }) {
  return (
    <div className="relative ml-1 border-l-3 border-grey-200 pl-8.5 md:ml-2.5 md:pl-10">
      {items.map((item, i) => (
        <div className="relative pb-10 last:pb-0" key={item.title}>
          <span className="absolute top-0 -left-8.5 flex size-7.5 items-center justify-center rounded-full bg-cyan-500 text-[.75rem] font-bold text-navy-900 shadow-[0_0_0_4px_var(--color-white)] md:-left-13.75 md:size-9 md:text-[.85rem] md:shadow-[0_0_0_6px_var(--color-white)]">
            {i + 1}
          </span>
          {item.year && (
            <span className="text-[.82rem] font-bold uppercase tracking-wider text-cyan-500">{item.year}</span>
          )}
          <h3 className="mb-1.5">{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export function TagCloud({ tags }: { tags: string[] }) {
  return (
    <div className="reveal flex flex-wrap justify-center gap-2.5">
      {tags.map((t) => (
        <span
          className="rounded-[30px] border border-grey-200 bg-grey-100 px-4 py-2.25 text-[.85rem] font-medium text-navy-800"
          key={t}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export function ContactLine({
  icon,
  label,
  children,
  last,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
  last?: boolean;
}) {
  return (
    <div className={`flex items-start gap-3.5 ${last ? "" : "mb-5.5"}`}>
      <IconBadge small>{icon}</IconBadge>
      <div className="text-[.9rem] text-[#b7c8d9] [&_a]:text-inherit [&_a:hover]:text-cyan-400">
        <strong className="block text-[.95rem] text-white">{label}</strong>
        {children}
      </div>
    </div>
  );
}
