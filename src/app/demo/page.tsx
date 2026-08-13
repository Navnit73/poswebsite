import type { Metadata } from "next";
import Link from "next/link";
import DemoForm from "@/components/DemoForm";

export const metadata: Metadata = {
  title: "Start 7-Day Free Trial | Medishelf Pharmacy Software",
  description:
    "Try Medishelf free for 7 days. Full access to pharmacy inventory management, batch tracking, and POS system. No credit card required.",
  alternates: {
    canonical: "https://medishelf.co/demo",
  },
  openGraph: {
    type: "website",
    siteName: "Medishelf",
    title: "Start 7-Day Free Trial — Medishelf Pharmacy POS",
    description:
      "Full access to Medishelf for 7 days. No credit card required, no download needed.",
    url: "https://medishelf.co/demo",
    images: [{ url: "/images/hero-pos.png", width: 1200, height: 630, alt: "Medishelf Free Trial Demo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Start 7-Day Free Trial — Medishelf Pharmacy POS",
    description: "Try Medishelf free for 7 days. No credit card required.",
    images: ["/images/hero-pos.png"],
  },
};

export default function DemoPage() {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medishelf.co/" },
      { "@type": "ListItem", position: 2, name: "Free Trial", item: "https://medishelf.co/demo" },
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
            <Link href="/" className="hover:text-brand-deep">Home</Link> <span aria-hidden="true">/</span> Free trial
          </nav>
          <span className="label-tag mt-4 inline-block rounded-[var(--radius-label)] border border-brand/25 bg-brand-mist px-2.5 py-1 text-[11px] font-medium text-brand-deep">
            7-DAY FREE TRIAL
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Start your free trial today.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Full access to Medishelf for 7 days. No credit card required, no download needed, cancel anytime.
          </p>
        </div>
      </section>

      {/* Form and Trust Info */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.1fr_1fr] lg:px-10">
          <div>
            <DemoForm />
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col justify-center gap-8">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
              </div>
              <div>
                <h3 className="font-display font-semibold text-ink">Live in an afternoon</h3>
                <p className="mt-1 text-sm text-ink-soft">Import your product CSV, add opening batches, and open the register. Most stores go live in under 3 hours.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V8a5 5 0 0110 0v3"/></svg>
              </div>
              <div>
                <h3 className="font-display font-semibold text-ink">No credit card required</h3>
                <p className="mt-1 text-sm text-ink-soft">Your 7-day trial is completely free. Upgrade when you&apos;re ready, or walk away — no questions asked.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/></svg>
              </div>
              <div>
                <h3 className="font-display font-semibold text-ink">Your data, your pharmacy</h3>
                <p className="mt-1 text-sm text-ink-soft">Tenant-isolated from day one. Your products, batches, and sales are scoped to your account and no one else&apos;s.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-mist text-brand-deep">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div>
                <h3 className="font-display font-semibold text-ink">Bring your whole team</h3>
                <p className="mt-1 text-sm text-ink-soft">Invite staff during the trial — cashiers, pharmacists, managers. Everyone gets their own login and role.</p>
              </div>
            </div>

            <div className="mt-4 rounded-[var(--radius-card)] border border-line bg-paper p-5">
              <div className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 shrink-0 text-amber"><path d="M7 7h5v5c0 3-2 5-5 5v-2c1.5 0 2.5-1 2.5-2.5H7V7zm9 0h5v5c0 3-2 5-5 5v-2c1.5 0 2.5-1 2.5-2.5H16V7z"/></svg>
                <div>
                  <p className="text-sm leading-relaxed text-ink-soft">&quot;We imported 1,200 SKUs from a spreadsheet and were billing by lunchtime. I didn&apos;t think it would be that quick.&quot;</p>
                  <p className="mt-2 text-xs text-ink-soft/70">— Pharmacist owner, Chicago, IL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
