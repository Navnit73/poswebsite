import Link from "next/link";
import type { ReactNode } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import TocNav, { type TocItem } from "@/components/TocNav";
import { SITE_URL, TRUST_PAGES, formatPolicyDate, getTrustPage } from "@/lib/trustPages";

/* -------------------------------------------------------------------------- */
/*  Shared building blocks for every trust / E-E-A-T page                      */
/* -------------------------------------------------------------------------- */

interface Highlight {
  title: string;
  text: string;
}

interface PolicyShellProps {
  /** Route of the page, must exist in TRUST_PAGES (e.g. "/security"). */
  path: string;
  eyebrow: string;
  heading: string;
  intro: string;
  /** Who owns / reviews this page — shown under the title as an accountability signal. */
  reviewedBy: string;
  toc: TocItem[];
  highlights?: Highlight[];
  /** Override the auto-picked related pages. */
  related?: string[];
  /** Additional JSON-LD objects (e.g. FAQPage). */
  extraJsonLd?: object[];
  /** Hide the sticky table of contents (pages that bring their own nav). */
  hideToc?: boolean;
  children: ReactNode;
}

export default function PolicyShell({
  path,
  eyebrow,
  heading,
  intro,
  reviewedBy,
  toc,
  highlights,
  related,
  extraJsonLd = [],
  hideToc = false,
  children,
}: PolicyShellProps) {
  const page = getTrustPage(path);
  const title = page?.title ?? heading;
  const lastUpdated = page?.lastUpdated ?? new Date().toISOString().slice(0, 10);
  const url = `${SITE_URL}${path}`;

  const relatedPages = (
    related
      ? related.map((href) => getTrustPage(href)).filter((p): p is NonNullable<typeof p> => Boolean(p))
      : [
          ...TRUST_PAGES.filter((p) => p.group === page?.group && p.href !== path),
          ...TRUST_PAGES.filter((p) => p.group !== page?.group && p.href !== path),
        ]
  ).slice(0, 3);

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Trust Center", item: `${SITE_URL}/legal` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description: page?.summary ?? intro,
    inLanguage: "en-US",
    dateModified: lastUpdated,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <>
      {[jsonLdBreadcrumb, jsonLdWebPage, ...extraJsonLd].map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-surface py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-80 max-w-3xl rounded-full bg-brand-mist/70 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
          <nav aria-label="Breadcrumb" className="label-tag text-xs text-ink-soft">
            <Link href="/" className="hover:text-brand-deep">Home</Link> <span aria-hidden="true">/</span>{" "}
            <Link href="/legal" className="hover:text-brand-deep">Trust Center</Link> <span aria-hidden="true">/</span>{" "}
            {page?.shortTitle ?? heading}
          </nav>
          <span className="label-tag mt-5 inline-block text-xs uppercase text-brand">{eyebrow}</span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">{heading}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{intro}</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 text-xs font-medium text-ink-soft">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper px-3.5 py-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              Last updated <time dateTime={lastUpdated}>{formatPolicyDate(lastUpdated)}</time>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper px-3.5 py-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand" aria-hidden="true"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>
              {reviewedBy}
            </span>
          </div>
        </div>
      </section>

      {/* At a glance */}
      {highlights && highlights.length > 0 && (
        <section className="border-b border-line py-12">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <p className="label-tag text-center text-xs uppercase text-ink-soft">At a glance</p>
            <div className={`mt-6 grid gap-4 sm:grid-cols-2 ${highlights.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
              {highlights.map((h) => (
                <ScrollReveal
                  key={h.title}
                  className="rounded-[var(--radius-card)] border border-line bg-surface p-5 transition hover:-translate-y-0.5 hover:border-brand/30"
                >
                  <p className="font-display text-base font-semibold text-ink">{h.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{h.text}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Body */}
      <section className="py-16">
        <div
          className={`mx-auto px-6 lg:px-10 ${
            hideToc ? "max-w-3xl" : "grid max-w-6xl gap-14 lg:grid-cols-[220px_minmax(0,1fr)]"
          }`}
        >
          {!hideToc && (
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TocNav items={toc} />
              </div>
            </aside>
          )}
          <article className="max-w-3xl space-y-12">{children}</article>
        </div>
      </section>

      {/* Related */}
      {relatedPages.length > 0 && (
        <section className="border-t border-line bg-surface py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">Related pages</h2>
              <Link href="/legal" className="text-sm font-semibold text-brand hover:text-brand-deep">
                Visit the Trust Center →
              </Link>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {relatedPages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:-translate-y-0.5 hover:border-brand/40"
                >
                  <span className="label-tag text-[11px] uppercase text-brand">{p.group}</span>
                  <p className="mt-2 font-display text-lg font-semibold text-ink group-hover:text-brand-deep">{p.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact strip */}
      <section className="border-t border-line py-14">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-6 text-center sm:flex-row sm:justify-between sm:text-left lg:px-10">
          <div>
            <p className="font-display text-xl font-semibold text-ink">Questions about this page?</p>
            <p className="mt-1 text-sm text-ink-soft">A real person replies within one business day — no bots, no ticket maze.</p>
          </div>
          <div className="flex shrink-0 gap-3">
            <a
              href="mailto:support@medishelf.co"
              className="btn-focus rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-brand/40"
            >
              Email support
            </a>
            <Link
              href="/contact"
              className="btn-focus rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-deep"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* -------------------------------------------------------------------------- */

export function PolicySection({
  id,
  title,
  number,
  children,
}: {
  id: string;
  title: string;
  number?: number;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <ScrollReveal>
        <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
          {number !== undefined && <span className="mr-2 text-brand">{number}.</span>}
          {title}
        </h2>
        <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-soft">{children}</div>
      </ScrollReveal>
    </section>
  );
}

export function CheckList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, idx) => (
        <li key={idx} className="flex gap-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="mt-0.5 shrink-0 text-brand" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CrossList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, idx) => (
        <li key={idx} className="flex gap-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="mt-0.5 shrink-0 text-rust" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Callout({
  title,
  children,
  tone = "brand",
}: {
  title: string;
  children: ReactNode;
  tone?: "brand" | "amber";
}) {
  const styles =
    tone === "amber"
      ? "border-amber/30 bg-amber/5 [&_.callout-title]:text-amber-deep"
      : "border-brand/30 bg-brand-mist [&_.callout-title]:text-brand-deep";
  return (
    <div className={`rounded-[var(--radius-card)] border p-5 ${styles}`}>
      <p className="callout-title font-display text-base font-semibold">{title}</p>
      <div className="mt-1.5 text-sm leading-relaxed text-ink-soft">{children}</div>
    </div>
  );
}

export function DataTable({
  head,
  rows,
  caption,
}: {
  head: string[];
  rows: ReactNode[][];
  caption?: string;
}) {
  return (
    <div className="overflow-x-auto rounded-[var(--radius-card)] border border-line bg-surface">
      <table className="w-full min-w-[560px] text-left text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="border-b border-line bg-paper text-ink">
            {head.map((h) => (
              <th key={h} scope="col" className="px-4 py-3 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {rows.map((row, rIdx) => (
            <tr key={rIdx} className="align-top">
              {row.map((cell, cIdx) =>
                cIdx === 0 ? (
                  <th key={cIdx} scope="row" className="px-4 py-3 font-medium text-ink">{cell}</th>
                ) : (
                  <td key={cIdx} className="px-4 py-3 text-ink-soft">{cell}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const linkClass = "font-medium text-brand-deep underline-offset-2 hover:underline";
