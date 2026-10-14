import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { SITE_URL, TRUST_PAGES, formatPolicyDate, type TrustGroup } from "@/lib/trustPages";

const TITLE = "Trust Center — Policies, Security & Support";
const DESCRIPTION =
  "Every Medishelf policy in one place: privacy, terms, refunds, cookies, acceptable use, security, accessibility, editorial standards, support levels and FAQ.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/legal` },
  openGraph: { type: "website", siteName: "Medishelf", title: `${TITLE} | Medishelf`, description: DESCRIPTION, url: `${SITE_URL}/legal` },
  twitter: { card: "summary_large_image", title: `${TITLE} | Medishelf`, description: DESCRIPTION },
};

const GROUPS: { id: TrustGroup; heading: string; blurb: string; icon: JSX.Element }[] = [
  {
    id: "Trust",
    heading: "Trust & transparency",
    blurb: "How we protect your data, write our content and build for everyone.",
    icon: <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />,
  },
  {
    id: "Legal",
    heading: "Legal policies",
    blurb: "The agreements and policies that govern your use of Medishelf.",
    icon: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></>,
  },
  {
    id: "Help",
    heading: "Help & support",
    blurb: "Answers, response times and how to reach a real person.",
    icon: <><circle cx="12" cy="12" r="9" /><path d="M9.1 9a3 3 0 015.8 1c0 2-3 3-3 3M12 17h.01" /></>,
  },
];

const PROMISES = [
  { stat: "30 days", label: "Money-back guarantee on your first payment" },
  { stat: "100%", label: "Of your data exportable, anytime, in CSV or JSON" },
  { stat: "0", label: "Advertising cookies or data sales — ever" },
  { stat: "< 1 day", label: "First reply from a human on every plan" },
];

export default function TrustCenterPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Trust Center", item: `${SITE_URL}/legal` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/legal#webpage`,
      url: `${SITE_URL}/legal`,
      name: "Medishelf Trust Center",
      description: DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      hasPart: TRUST_PAGES.map((p) => ({ "@type": "WebPage", name: p.title, url: `${SITE_URL}${p.href}`, dateModified: p.lastUpdated })),
    },
  ];

  return (
    <>
      {jsonLd.map((schema, idx) => (
        <script key={idx} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-surface py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-48 mx-auto h-96 max-w-4xl rounded-full bg-brand-mist blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
          <nav aria-label="Breadcrumb" className="label-tag text-xs text-ink-soft">
            <Link href="/" className="hover:text-brand-deep">Home</Link> <span aria-hidden="true">/</span> Trust Center
          </nav>
          <span className="label-tag mt-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-mist px-3 py-1 text-xs uppercase text-brand-deep">
            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-brand" aria-hidden="true" />
            Trust center
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
            Policies you can actually read.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Every promise we make to your pharmacy — on data, money, security and support — written in plain language and kept in one place.
          </p>
        </div>
      </section>

      {/* Promises */}
      <section className="border-b border-line py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 lg:grid-cols-4 lg:px-10">
          {PROMISES.map((p) => (
            <ScrollReveal key={p.label} className="rounded-[var(--radius-card)] border border-line bg-surface p-5 text-center">
              <p className="font-display text-3xl font-bold tracking-tight text-brand-deep">{p.stat}</p>
              <p className="mt-1.5 text-sm leading-snug text-ink-soft">{p.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Groups */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl space-y-16 px-6 lg:px-10">
          {GROUPS.map((group) => (
            <div key={group.id}>
              <ScrollReveal className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {group.icon}
                  </svg>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-ink">{group.heading}</h2>
                  <p className="mt-1 text-ink-soft">{group.blurb}</p>
                </div>
              </ScrollReveal>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {TRUST_PAGES.filter((p) => p.group === group.id).map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    id={`trust-link-${p.href.replace(/\W+/g, "") || "home"}`}
                    className="group flex flex-col rounded-[var(--radius-card)] border border-line bg-surface p-6 transition duration-200 hover:-translate-y-1 hover:border-brand/40"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold text-ink group-hover:text-brand-deep">{p.title}</h3>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1 shrink-0 text-ink-soft transition group-hover:translate-x-0.5 group-hover:text-brand" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </div>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{p.summary}</p>
                    <p className="mt-4 text-xs text-ink-soft/80">
                      Updated <time dateTime={p.lastUpdated}>{formatPolicyDate(p.lastUpdated)}</time>
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-line bg-surface py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink">Need something we haven&apos;t covered?</h2>
            <p className="mt-4 text-lg text-ink-soft">
              Security questionnaires, data processing terms or a policy question — our team answers every message personally.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="mailto:support@medishelf.co" className="btn-focus rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-deep">
                support@medishelf.co
              </a>
              <Link href="/contact" className="btn-focus rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-brand/40">
                Contact page
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
