import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Refund Policy | Medishelf",
  description:
    "Medishelf's refund and cancellation policy. 30-day money-back guarantee on all plans. Export your data after cancellation.",
  alternates: {
    canonical: "https://medishelf.co/refundPolicy",
  },
  openGraph: {
    type: "website",
    siteName: "Medishelf",
    title: "Refund Policy | Medishelf",
    description: "Medishelf's refund and cancellation policy. 30-day money-back guarantee on all plans.",
    url: "https://medishelf.co/refundPolicy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy | Medishelf",
    description: "Medishelf's refund policy.",
  },
};

export default function RefundPolicyPage() {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medishelf.co/" },
      { "@type": "ListItem", position: 2, name: "Refund Policy", item: "https://medishelf.co/refundPolicy" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <section className="border-b border-line bg-surface py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <nav aria-label="Breadcrumb" className="label-tag text-xs text-ink-soft/70">
            <Link href="/" className="hover:text-brand-deep">Home</Link> <span aria-hidden="true">/</span> Refund Policy
          </nav>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">Refund Policy</h1>
          <p className="mt-4 text-sm text-ink-soft">Last updated: July 25, 2026 · Reviewed quarterly by the Medishelf billing &amp; compliance team</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="space-y-10">
            <ScrollReveal className="rounded-[var(--radius-card)] border-2 border-brand bg-brand-mist p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/></svg>
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-brand-deep">30-day money-back guarantee</h2>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">Try Medishelf risk-free. If it isn&apos;t the right fit within 30 days of your first paid charge, tell us and we&apos;ll refund that payment in full. This guarantee applies once per pharmacy account and covers your first payment on a plan.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">1. Before you pay: the free trial</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Every plan starts with a 7-day free trial and no card is required to begin. If Medishelf isn&apos;t for you, simply let the trial lapse — there is nothing to cancel, nothing is billed, and no refund process is needed. We built it this way so the decision to pay only happens once you&apos;re confident.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">2. Monthly plans</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-soft">
                <p>Cancel within <strong className="text-ink">30 days of your first payment</strong> and we refund it in full, no forms or reasons required. Cancel after day 30 and your access continues through the end of the billing cycle you already paid for; that portion is non-refundable, since it covers infrastructure, support, and data storage already provisioned for your pharmacy that month.</p>
                <p>Cancellation is self-serve from account settings, so you&apos;re never dependent on reaching a person to stop billing.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">3. Annual plans</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-soft">
                <p>Annual plans are paid upfront. Cancel within <strong className="text-ink">30 days of that payment</strong> for a full refund. After 30 days, we refund the unused whole months from your cancellation date, prorated — for example, cancelling after 4 months and 15 days into a 12-month term refunds the remaining 7 full months. Partial months are not prorated, to keep the calculation transparent and consistent for every customer.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">4. How and when you&apos;re paid back</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> We initiate refunds within 2 business days of approval, credited to your original payment method</li>
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> You&apos;ll get an email confirming the amount and expected timing, so there&apos;s a written record on both sides</li>
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> Full funds typically land within 5–10 business days; banks occasionally add 2–5 more</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">5. Your data after you leave</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Cancelling doesn&apos;t mean losing your records. Your product catalogue, batch and expiry history, sales data, and customer records stay exportable in CSV or JSON for 30 days after cancellation, so you can move to another system or keep records for compliance on your own terms. After 30 days, data is permanently removed from production systems in line with our <Link href="/privacy" className="text-brand-deep hover:underline">Privacy Policy</Link>.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">6. When a refund won&apos;t apply</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                We don&apos;t refund accounts terminated for violating our <Link href="/tmc" className="text-brand-deep hover:underline">Terms &amp; Conditions</Link> — for example, unauthorized access attempts or reselling access — since these terminations protect every other pharmacy on the platform. If you think a termination was a mistake, <Link href="/contact" className="text-brand-deep hover:underline">contact us</Link> and a human will review the account history before the decision is finalized.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">7. Talk to a real person</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Email <a href="mailto:support@medishelf.co" className="text-brand-deep hover:underline">support@medishelf.co</a> for anything refund-related. A member of our billing team — not a bot — replies within one business day, and most refund requests are resolved in a single email.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
