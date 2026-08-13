import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us | Medishelf Pharmacy Software",
  description:
    "Learn about Medishelf: built by people who've counted tablets to give independent pharmacies and medical stores software that actually fits.",
  alternates: {
    canonical: "https://medishelf.co/aboutus",
  },
  openGraph: {
    type: "website",
    siteName: "Medishelf",
    title: "About Us — Medishelf Pharmacy Inventory & POS",
    description: "Built for independent and small-chain pharmacies.",
    url: "https://medishelf.co/aboutus",
    images: [{ url: "/images/hero-pos.png", width: 1200, height: 630, alt: "About Medishelf" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Medishelf Pharmacy Inventory & POS",
    description: "Built for independent and small-chain pharmacies.",
    images: ["/images/hero-pos.png"],
  },
};

export default function AboutUsPage() {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medishelf.co/" },
      { "@type": "ListItem", position: 2, name: "About Us", item: "https://medishelf.co/aboutus" },
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
            <Link href="/" className="hover:text-brand-deep">Home</Link> <span aria-hidden="true">/</span> About us
          </nav>
          <span className="label-tag mt-4 inline-block rounded-[var(--radius-label)] border border-brand/25 bg-brand-mist px-2.5 py-1 text-[11px] font-medium text-brand-deep">
            OUR STORY
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Built by people who&apos;ve counted tablets.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Medishelf started because small to medium independent pharmacies &amp; medical stores were tracking expiry dates on whiteboards or notebooks. We thought software could do better.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
          <ScrollReveal>
            <span className="label-tag text-xs font-medium text-brand-deep">MISSION</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">
              Inventory software that fits a pharmacy, not the other way around.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              General-purpose POS tools don&apos;t know what a batch number is. They don&apos;t understand that the same molecule can sit on two shelves at two prices, expiring on two different dates. We built Medishelf because pharmacies deserve software that speaks their language — batches, expiry, FEFO, schedule classes, and rack locations.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Our goal is simple: if something sits on a pharmacy shelf, Medishelf should be able to track it, sell it, and report on it — without forcing you to bend your workflow around a generic tool.
            </p>
          </ScrollReveal>

          <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-surface p-8">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <p className="font-display text-3xl font-bold text-brand-deep">2024</p>
                <p className="mt-1 text-sm text-ink-soft">Founded</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-brand-deep">12,000+</p>
                <p className="mt-1 text-sm text-ink-soft">SKUs tracked</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-brand-deep">99.9%</p>
                <p className="mt-1 text-sm text-ink-soft">Uptime</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-brand-deep">3.2s</p>
                <p className="mt-1 text-sm text-ink-soft">Avg checkout</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-line bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal className="max-w-2xl">
            <span className="label-tag text-xs font-medium text-brand-deep">VALUES</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">What we believe in.</h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/></svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">Pharmacy-first design</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">Every feature starts with how a pharmacist actually works, not how a generic POS works. Batch tracking isn&apos;t an add-on — it&apos;s the foundation.</p>
            </ScrollReveal>

            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V8a5 5 0 0110 0v3"/></svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">Secure by default</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">Tenant isolation, hashed credentials, rate-limited endpoints and validated inputs. Security isn&apos;t a feature — it&apos;s a prerequisite.</p>
            </ScrollReveal>

            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">Honest numbers</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">Every report shows real data with no vanity metrics. Stock counts are reconciled from atomic movements, so what you see is what&apos;s on the shelf.</p>
            </ScrollReveal>

            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">Speed at the counter</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">A pharmacy queue doesn&apos;t wait. Every interaction — search, add-to-cart, checkout — is optimized for keyboard-first speed.</p>
            </ScrollReveal>

            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">Built for the whole team</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">From the owner checking P&amp;L to the cashier at the register — roles and permissions ensure everyone sees exactly what they need.</p>
            </ScrollReveal>

            <ScrollReveal className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition hover:border-brand/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">Ship small, ship often</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">We deploy weekly, with incremental improvements driven by real feedback from pharmacy owners. No big-bang releases.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink">Want to know more?</h2>
            <p className="mt-4 text-lg text-ink-soft">We&apos;d love to hear about your pharmacy and show you how Medishelf fits.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/demo" className="btn-focus rounded-lg bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-deep">
                Start free trial
              </Link>
              <Link href="/contact" className="btn-focus rounded-lg border border-line px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-brand/40">
                Get in touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
