import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Sales & Support | Medishelf Pharmacy Software",
  description:
    "Have questions about batch tracking, pricing, or setting up your store? Contact the Medishelf team — we reply within one business day.",
  alternates: {
    canonical: "https://medishelf.co/contact",
  },
  openGraph: {
    type: "website",
    siteName: "Medishelf",
    title: "Contact Sales & Support — Medishelf Pharmacy POS",
    description:
      "Talk to someone who knows pharmacy operations. Fast support and sales assistance for your medical store.",
    url: "https://medishelf.co/contact",
    images: [{ url: "/images/hero-pos.png", width: 1200, height: 630, alt: "Contact Medishelf Support" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sales & Support — Medishelf Pharmacy POS",
    description: "Talk to someone who knows pharmacy operations.",
    images: ["/images/hero-pos.png"],
  },
};

export default function ContactPage() {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medishelf.co/" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://medishelf.co/contact" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Header */}
      <section className="border-b border-line bg-surface py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <nav aria-label="Breadcrumb" className="label-tag text-xs text-ink-soft/70">
            <Link href="/" className="hover:text-brand-deep">Home</Link> <span aria-hidden="true">/</span> Contact
          </nav>
          <span className="label-tag mt-4 inline-block rounded-[var(--radius-label)] border border-brand/25 bg-brand-mist px-2.5 py-1 text-[11px] font-medium text-brand-deep">
            WE&apos;RE HERE TO HELP
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Talk to someone who knows pharmacy.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Have questions about batch tracking, pricing, or setting up your store? Drop us a note — our team replies within one business day.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="stat-chip inline-flex max-w-full items-center justify-center gap-1.5 rounded-full border border-line bg-paper px-3.5 py-1.5 text-xs font-medium text-ink-soft">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-brand"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Avg. reply time: under 1 hour</span>
            </span>
            <span className="stat-chip inline-flex max-w-full items-center justify-center gap-1.5 rounded-full border border-line bg-paper px-3.5 py-1.5 text-xs font-medium text-ink-soft">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-brand"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span>No bots — humans only</span>
            </span>
            <span className="stat-chip inline-flex max-w-full items-center justify-center gap-1.5 rounded-full border border-line bg-paper px-3.5 py-1.5 text-xs font-medium text-ink-soft">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-brand"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/></svg>
              <span>Austin, TX based</span>
            </span>
          </div>
        </div>
      </section>

      {/* Info Cards + Form */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          {/* Info cards */}
          <div className="grid gap-6 sm:grid-cols-3">
            <a href="mailto:sales@medishelf.co" className="contact-card group rounded-[var(--radius-card)] border border-line bg-surface p-6 text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-brand-mist text-brand-deep transition-colors group-hover:bg-brand group-hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <h3 className="mt-3 font-display font-semibold text-ink">Sales</h3>
              <p className="mt-1 text-xs text-ink-soft">Pricing, demos, enterprise</p>
              <span className="mt-2 block text-sm font-medium text-brand-deep group-hover:underline">sales@medishelf.co</span>
            </a>
            <a href="mailto:support@medishelf.co" className="contact-card group rounded-[var(--radius-card)] border border-line bg-surface p-6 text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-brand-mist text-brand-deep transition-colors group-hover:bg-brand group-hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.172l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              </div>
              <h3 className="mt-3 font-display font-semibold text-ink">Support</h3>
              <p className="mt-1 text-xs text-ink-soft">Technical issues, billing, refunds</p>
              <span className="mt-2 block text-sm font-medium text-brand-deep group-hover:underline">support@medishelf.co</span>
            </a>
            <div className="contact-card rounded-[var(--radius-card)] border border-line bg-surface p-6 text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 className="mt-3 font-display font-semibold text-ink">Office</h3>
              <p className="mt-1 text-xs text-ink-soft">Where the team works from</p>
              <span className="mt-2 block text-sm font-medium text-ink">Austin, Texas, United States</span>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
