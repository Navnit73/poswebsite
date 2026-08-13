import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Terms & Conditions — Medishelf Software | Medishelf",
  description:
    "Terms and conditions for using Medishelf pharmacy inventory and POS software. Covers account usage, billing, data ownership, liability, and termination.",
  alternates: {
    canonical: "https://medishelf.co/tmc",
  },
  openGraph: {
    type: "website",
    siteName: "Medishelf",
    title: "Terms & Conditions — Medishelf Software | Medishelf",
    description: "Terms and conditions for using Medishelf pharmacy inventory and POS software.",
    url: "https://medishelf.co/tmc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions — Medishelf Software | Medishelf",
    description: "Terms and conditions for using Medishelf pharmacy inventory and POS software.",
  },
};

export default function TermsPage() {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medishelf.co/" },
      { "@type": "ListItem", position: 2, name: "Terms & Conditions", item: "https://medishelf.co/tmc" },
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
            <Link href="/" className="hover:text-brand-deep">Home</Link> <span aria-hidden="true">/</span> Terms &amp; Conditions
          </nav>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">Terms &amp; Conditions</h1>
          <p className="mt-4 text-sm text-ink-soft">Last updated: July 25, 2026 · Drafted with counsel and reviewed quarterly by the Medishelf legal team</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="space-y-10">
            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">1. Agreement to these terms</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Creating a Medishelf account means you agree to these Terms. If you&apos;re signing up for a pharmacy or business, you&apos;re confirming you have the authority to bind that business. We&apos;ve kept the language as plain as a contract can be, because a policy no one understands protects no one.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">2. Your account and responsibilities</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                You control your account credentials and are responsible for activity under them — this is standard for any system handling pharmacy inventory and sales data. Register with accurate information, and email <a href="mailto:support@medishelf.co" className="text-brand-deep hover:underline">support@medishelf.co</a> immediately if you suspect unauthorized access. We monitor for suspicious login patterns and will notify you of anything unusual we detect first.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">3. What the Service includes</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Medishelf is cloud-based pharmacy inventory and point-of-sale software: product catalogue management, batch and expiry tracking, a POS terminal, role-based access control, reporting, and audit logging. Exact features depend on your plan, listed on our <Link href="/pricing" className="text-brand-deep hover:underline">pricing page</Link>, and we&apos;ll always tell you in advance if a feature you rely on is being changed or retired.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">4. Billing, trials, and price changes</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-soft">
                <p>Every account starts with a 7-day free trial, no card required. Paid plans bill monthly or annually in advance. We give at least 30 days&apos; notice before any price increase reaches your next billing cycle — existing subscriptions are never repriced mid-term without warning.</p>
                <p>If a payment fails, we retry for 7 days before suspending access; your data is kept safe throughout suspension and for 30 days after cancellation, per our <Link href="/refundPolicy" className="text-brand-deep hover:underline">Refund Policy</Link>.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">5. Your data is yours</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                You own every product, batch, sale, and customer record you enter. We claim no rights over it and use it only to run and improve the Service, as detailed in our <Link href="/privacy" className="text-brand-deep hover:underline">Privacy Policy</Link>. You can export it in full at any time — we don&apos;t hold your records hostage to keep you subscribed.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">6. Acceptable use</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                To keep the platform safe for every pharmacy on it, you agree not to reverse-engineer the Service, access another tenant&apos;s data, use it unlawfully, introduce malware, or resell access without our written consent. These rules exist to protect your data as much as ours.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">7. Uptime and support</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                We target 99.9% uptime and announce planned maintenance in advance. Enterprise plans can include a formal uptime SLA with defined remedies — ask <Link href="/contact" className="text-brand-deep hover:underline">our team</Link> for details.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">8. Suspension and termination</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-soft">
                <p>Cancel anytime from account settings; it takes effect at the end of your current billing cycle, and your data stays exportable for 30 days after.</p>
                <p>We may suspend accounts that violate these Terms. Except in cases of serious abuse (e.g., attempted unauthorized data access), we give notice and a chance to fix the issue before any termination.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">9. Liability and governing law</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Our total liability for any claim is capped at what you paid us in the preceding 12 months, and we&apos;re not liable for indirect or consequential damages — standard limits that let us offer the Service at an accessible price. These Terms are governed by Delaware law; disputes go through binding arbitration in Wilmington, Delaware, unless eligible for small claims court.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">10. Changes and contact</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                We&apos;ll email you at least 14 days before any material change takes effect. Continuing to use Medishelf after that means you accept the update. Questions any time: <a href="mailto:support@medishelf.co" className="text-brand-deep hover:underline">support@medishelf.co</a> or our <Link href="/contact" className="text-brand-deep hover:underline">contact page</Link>.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
