import type { Metadata } from "next";
import Link from "next/link";
import PricingToggle from "@/components/PricingToggle";
import FaqAccordion from "@/components/FaqAccordion";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Pricing for Pharmacies & Chains | Medishelf",
  description:
    "Medishelf pricing: Starter at $50/mo for one store, Growth at $99/mo for up to three stores. 7-day free trial, no card required.",
  alternates: {
    canonical: "https://medishelf.co/pricing",
  },
  openGraph: {
    type: "website",
    siteName: "Medishelf",
    title: "Pricing — Medishelf Pharmacy Inventory & POS",
    description: "Plans for one store or a whole chain, starting at $50/month with a 7-day free trial.",
    url: "https://medishelf.co/pricing",
    images: [{ url: "/images/hero-pos.png", width: 1200, height: 630, alt: "Medishelf Pricing Plans" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — Medishelf Pharmacy Inventory & POS",
    description: "Plans for one store or a whole chain, starting at $50/month.",
    images: ["/images/hero-pos.png"],
  },
};

const PRICING_FAQS = [
  {
    question: "Is there a free trial?",
    answer:
      "Every plan starts with a 7-day free trial, no card required. You can invite staff and load real stock during the trial.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes. You can move between Starter and Growth at any time from account settings, and the change is prorated for the current billing cycle.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "Your data stays available for export for 30 days after cancellation. After that, it's permanently deleted from our systems.",
  },
];

export default function PricingPage() {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medishelf.co/" },
      { "@type": "ListItem", position: 2, name: "Pricing", item: "https://medishelf.co/pricing" },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PRICING_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <section className="border-b border-line bg-surface py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <nav aria-label="Breadcrumb" className="label-tag text-xs text-ink-soft/70">
            <Link href="/" className="hover:text-brand-deep">Home</Link> <span aria-hidden="true">/</span> Pricing
          </nav>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Priced by store, not by headache.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Every plan includes batch tracking, FEFO billing and the full POS terminal. Purpose-built for small to medium size pharmacies and medical stores. Trial for 14 days, no card required.
          </p>
        </div>
      </section>

      {/* Plan Cards & Toggle */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <PricingToggle />
        </div>
      </section>

      {/* Comparison table */}
      <section className="border-t border-line bg-surface py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <ScrollReveal>
            <h2 className="text-center font-display text-2xl font-bold text-ink">Compare plans in detail</h2>
            <div className="mt-8 overflow-x-auto rounded-[var(--radius-card)] border border-line bg-paper">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-line text-ink-soft">
                    <th scope="col" className="px-5 py-4 font-medium">Feature</th>
                    <th scope="col" className="px-5 py-4 font-medium">Starter</th>
                    <th scope="col" className="px-5 py-4 font-medium">Growth</th>
                    <th scope="col" className="px-5 py-4 font-medium">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  <tr><th scope="row" className="px-5 py-4 font-normal text-ink-soft">Stores</th><td className="px-5 py-4 text-ink">1</td><td className="px-5 py-4 text-ink">Up to 3</td><td className="px-5 py-4 text-ink">Unlimited</td></tr>
                  <tr><th scope="row" className="px-5 py-4 font-normal text-ink-soft">Staff logins</th><td className="px-5 py-4 text-ink">3</td><td className="px-5 py-4 text-ink">Unlimited</td><td className="px-5 py-4 text-ink">Unlimited</td></tr>
                  <tr><th scope="row" className="px-5 py-4 font-normal text-ink-soft">Custom roles</th><td className="px-5 py-4 text-ink-soft/50">—</td><td className="px-5 py-4 text-ink">✓</td><td className="px-5 py-4 text-ink">✓</td></tr>
                  <tr><th scope="row" className="px-5 py-4 font-normal text-ink-soft">Daily PDF reports</th><td className="px-5 py-4 text-ink-soft/50">—</td><td className="px-5 py-4 text-ink">✓</td><td className="px-5 py-4 text-ink">✓</td></tr>
                  <tr><th scope="row" className="px-5 py-4 font-normal text-ink-soft">Audit log</th><td className="px-5 py-4 text-ink">Basic</td><td className="px-5 py-4 text-ink">Full</td><td className="px-5 py-4 text-ink">Full</td></tr>
                  <tr><th scope="row" className="px-5 py-4 font-normal text-ink-soft">SSO</th><td className="px-5 py-4 text-ink-soft/50">—</td><td className="px-5 py-4 text-ink-soft/50">—</td><td className="px-5 py-4 text-ink">✓</td></tr>
                  <tr><th scope="row" className="px-5 py-4 font-normal text-ink-soft">Support</th><td className="px-5 py-4 text-ink">Email</td><td className="px-5 py-4 text-ink">Priority</td><td className="px-5 py-4 text-ink">Phone + dedicated manager</td></tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <ScrollReveal>
            <h2 className="text-center font-display text-2xl font-bold text-ink">Pricing questions</h2>
            <div className="mt-8">
              <FaqAccordion items={PRICING_FAQS} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink">Still deciding? Try it with your own data.</h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/demo" className="btn-focus rounded-lg bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-deep">Start free trial</Link>
              <Link href="/contact" className="btn-focus rounded-lg border border-line px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-brand/40">Talk to sales</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
