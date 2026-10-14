import type { Metadata } from "next";
import Link from "next/link";
import PricingPlan from "@/components/PricingPlan";
import FaqAccordion from "@/components/FaqAccordion";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Pharmacy POS & Inventory Software Pricing | Medishelf",
  description:
    "Simple pharmacy software pricing: one plan at $49/month with everything included — batch tracking, FEFO POS billing, reports and unlimited staff.",
  alternates: {
    canonical: "https://medishelf.co/pricing",
  },
  openGraph: {
    type: "website",
    siteName: "Medishelf",
    title: "Pricing — Medishelf Pharmacy Inventory & POS Software",
    description: "One simple plan at $49/month with every feature included.",
    url: "https://medishelf.co/pricing",
    images: [{ url: "https://medishelf.co/images/hero-pos.png", width: 1200, height: 630, alt: "Medishelf Pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — Medishelf Pharmacy Inventory & POS Software",
    description: "One simple plan at $49/month with every feature included.",
    images: ["https://medishelf.co/images/hero-pos.png"],
  },
};

const PRICING_FAQS = [
  {
    question: "Is there a free trial?",
    answer:
      "Every plan starts with a 7-day free trial, no card required. You can invite staff and load real stock during the trial.",
  },
  {
    question: "Are there different plans or tiers?",
    answer:
      "No. There is one plan at $49 per month, billed monthly, and it includes every feature. No setup fees, no per-transaction charges and no long-term contract.",
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
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medishelf.co" },
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
          <nav aria-label="Breadcrumb" className="label-tag text-xs text-ink-soft">
            <Link href="/" className="hover:text-brand-deep">Home</Link> <span aria-hidden="true">/</span> Pricing
          </nav>
          <span className="label-tag mt-4 inline-block text-xs text-brand">
            SIMPLE, TRANSPARENT PRICING
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Pharmacy POS &amp; Inventory Software Pricing
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            One plan, $49 a month, with batch tracking, FEFO billing, the full POS terminal and every report included. Purpose-built for small to medium size pharmacies and medical stores.
          </p>
        </div>
      </section>

      {/* Plan */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <PricingPlan />
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
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink">Ready to run your pharmacy on Medishelf?</h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="https://core.medishelf.co/auth/register" className="btn-focus rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-deep">Register</a>
              <Link href="/contact" className="btn-focus rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-brand/40">Talk to sales</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
