import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

const overlay = "linear-gradient(120deg, rgba(6,26,51,.93), rgba(10,44,84,.88))";

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
    <section className="page-header" style={{ backgroundImage: `${overlay}, url('${image}')` }}>
      <div className="container">
        <div className="breadcrumb">
          <Link href="/">Home</Link> / <span>{crumb}</span>
        </div>
        <h1>{title}</h1>
        <p className="lead" style={{ color: "#d7e5f2", maxWidth: leadMaxWidth }}>
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
    <div className="section-head center reveal">
      <div className="eyebrow" style={{ justifyContent: "center", display: "flex" }}>
        {eyebrow}
      </div>
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
  style,
}: {
  title: string;
  text: string;
  href: string;
  label: string;
  style?: CSSProperties;
}) {
  return (
    <div className="cta-banner reveal" style={style}>
      <h2>{title}</h2>
      <p>{text}</p>
      <Link href={href} className="btn btn-primary">
        {label}
      </Link>
    </div>
  );
}

export function ClientStrip({ clients }: { clients: string[] }) {
  return (
    <div className="client-strip reveal">
      {clients.map((c) => (
        <div className="client-badge" key={c}>
          {c}
        </div>
      ))}
    </div>
  );
}

export function Card({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="card reveal">
      <div className="icon-badge">{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export function Timeline({ items }: { items: { year?: string; title: string; text: string }[] }) {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <div className="timeline-item" data-step={i + 1} key={item.title}>
          {item.year && <span className="year">{item.year}</span>}
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export function TagCloud({ tags }: { tags: string[] }) {
  return (
    <div className="tag-cloud reveal" style={{ justifyContent: "center" }}>
      {tags.map((t) => (
        <span className="tag-pill" key={t}>
          {t}
        </span>
      ))}
    </div>
  );
}
