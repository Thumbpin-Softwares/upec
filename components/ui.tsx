import Link from "next/link";
import type { ReactNode } from "react";

const overlay = "linear-gradient(120deg, rgba(6,26,51,.93), rgba(10,44,84,.88))";

export const container = "mx-auto max-w-295 px-6";

const btnBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border-2 border-transparent px-6.5 py-3.25 text-[.95rem] font-semibold cursor-pointer transition-[translate,box-shadow,background-color,color,border-color] hover:-translate-y-0.5";

const btnVariants = {
  primary: "bg-cyan-500 text-navy-900 hover:bg-cyan-400 hover:shadow-md",
  outline: "border-white/55 text-white hover:bg-white/12",
  dark: "bg-navy-800 text-white hover:bg-navy-700 hover:shadow-md",
};

export const btn = (variant: keyof typeof btnVariants) => `${btnBase} ${btnVariants[variant]}`;

export const cardClass =
  "h-full rounded-card border border-grey-200 bg-white px-6.5 py-7.5 transition-[translate,box-shadow,border-color] hover:-translate-y-1.5 hover:border-transparent hover:shadow-md";

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
  lead,
  image,
  leadMaxWidth = 620,
}: {
  title: string;
  crumb: string;
  lead: string;
  image: string;
  leadMaxWidth?: number;
}) {
  return (
    <section
      className="relative bg-navy-900 bg-cover bg-center pt-26 pb-10.5 text-white sm:pt-30 sm:pb-12.5 md:pt-37.5 md:pb-17.5"
      style={{ backgroundImage: `${overlay}, url('${image}')` }}
    >
      <div className={container}>
        <div className="text-[.9rem] text-[#b7c8d9]">
          <Link href="/" className="text-[#b7c8d9]">Home</Link> / <span className="text-cyan-400">{crumb}</span>
        </div>
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
  className = "",
}: {
  title: string;
  text: string;
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`reveal relative overflow-hidden rounded-2xl bg-linear-120 from-navy-900 to-navy-700 px-4.5 py-8 text-center text-white before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_15%_20%,rgba(23,179,217,.28),transparent_40%)] *:relative *:z-2 xs:px-5.5 xs:py-10 md:p-14 ${className}`}
    >
      <h2 className="text-white max-md:text-[1.5rem]">{title}</h2>
      <p className="text-[#cfe0ef]">{text}</p>
      <Link href={href} className={btn("primary")}>
        {label}
      </Link>
    </div>
  );
}

export function ClientStrip({ clients }: { clients: string[] }) {
  return (
    <div className="reveal grid grid-cols-2 gap-2.5 xs:gap-3.5 md:grid-cols-3 lg:grid-cols-6">
      {clients.map((c) => (
        <div
          className="flex items-center justify-center rounded-lg border border-grey-200 bg-white px-1.5 py-3.5 text-center font-display text-[.82rem] font-bold text-navy-800 transition-all hover:-translate-y-0.75 hover:border-cyan-500 hover:text-blue-600 xs:px-2.5 xs:py-4.5 xs:text-[.98rem]"
          key={c}
        >
          {c}
        </div>
      ))}
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
  tag,
  text,
  cover,
  titleClassName = "",
}: {
  src: string;
  alt: string;
  title: string;
  tag?: string;
  text?: string;
  cover?: boolean;
  titleClassName?: string;
}) {
  return (
    <div className="reveal overflow-hidden rounded-card border border-grey-200 bg-white shadow-sm transition-[box-shadow,translate] hover:-translate-y-1.25 hover:shadow-md">
      <div className="aspect-4/3 overflow-hidden bg-grey-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className={`size-full ${cover ? "object-cover" : "object-contain p-3.5"}`} />
      </div>
      <div className="px-5.5 py-5">
        {tag && (
          <span className="mb-2.5 inline-block rounded-[20px] bg-[#e6f2fb] px-2.5 py-1 text-[.7rem] font-bold uppercase tracking-wider text-blue-600">
            {tag}
          </span>
        )}
        <h3 className={titleClassName}>{title}</h3>
        {text && <p>{text}</p>}
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
