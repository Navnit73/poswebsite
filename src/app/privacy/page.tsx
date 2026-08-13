import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy — How Medishelf Handles Your Data | Medishelf",
  description:
    "Medishelf's privacy policy: what data we collect, how we use it, who we share it with, and your rights as a pharmacy owner using our software.",
  alternates: {
    canonical: "https://medishelf.co/privacy",
  },
  openGraph: {
    type: "website",
    siteName: "Medishelf",
    title: "Privacy Policy — How Medishelf Handles Your Data | Medishelf",
    description: "Medishelf's privacy policy: what data we collect, how we use it, and your rights.",
    url: "https://medishelf.co/privacy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — How Medishelf Handles Your Data | Medishelf",
    description: "Medishelf privacy policy and data security.",
  },
};

export default function PrivacyPage() {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medishelf.co/" },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://medishelf.co/privacy" },
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
            <Link href="/" className="hover:text-brand-deep">Home</Link> <span aria-hidden="true">/</span> Privacy Policy
          </nav>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-ink-soft">Last updated: July 25, 2026 · Maintained by the Medishelf security &amp; compliance team</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="prose-policy space-y-10">
            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">1. Who we are</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Medishelf Software (&quot;Medishelf&quot;, &quot;we&quot;) builds cloud-based inventory and point-of-sale software for retail pharmacies. Handling pharmacy data means handling sensitive customer and health-adjacent records, so this policy is written to be specific about what we do and don&apos;t do with it — not just legally sufficient, but genuinely readable.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">2. Data we collect</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-soft">
                <p><strong className="text-ink">Account data:</strong> name, email, phone number, and pharmacy name, used to create your tenant.</p>
                <p><strong className="text-ink">Business data:</strong> product catalogues, batch and expiry records, sales, customer records, and staff profiles you enter. This is scoped to your tenant ID and never visible to other accounts.</p>
                <p><strong className="text-ink">Usage data:</strong> anonymized analytics on features and session length, used to prioritize what we build next — never used for advertising or resold.</p>
                <p><strong className="text-ink">Technical data:</strong> IP address, browser, and device details, logged for security monitoring and audit trails.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">3. How we use it</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> To run the application you&apos;re paying for</li>
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> To send transactional emails — login links, daily reports, low-stock alerts</li>
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> To improve the product from anonymized, aggregate usage patterns</li>
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> To meet legal obligations and enforce our <Link href="/tmc" className="text-brand-deep hover:underline">Terms</Link></li>
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> To detect and stop abuse, fraud, and security threats</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">4. Who we share it with</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                We never sell your data. We share it only with the vendors that keep Medishelf running — hosting, email delivery, and payment processing — and only what each needs to do its job. Every one of them signs a data processing agreement holding them to our standards, not just theirs.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">5. How we secure it</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Business data is isolated per tenant at the database layer. Passwords are hashed with bcrypt. API input is validated against strict schemas, and endpoints are rate-limited against abuse. Emails, passwords, and tokens are automatically redacted from audit logs. Everything is encrypted in transit with TLS 1.3 and at rest with AES-256 — the same baseline used across regulated industries handling comparable data.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">6. How long we keep it</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Active accounts keep their data as long as the subscription runs. After cancellation, data is exportable for 30 days, then permanently deleted from production and, within 90 days, from backups — full detail in our <Link href="/refundPolicy" className="text-brand-deep hover:underline">Refund Policy</Link>.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">7. Your rights</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> <strong className="text-ink">Access:</strong> export everything, anytime, from account settings.</li>
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> <strong className="text-ink">Correction:</strong> edit account and business data directly in the app.</li>
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> <strong className="text-ink">Deletion:</strong> email us to request full account and data deletion.</li>
                <li className="flex gap-2.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg> <strong className="text-ink">Portability:</strong> CSV and JSON exports, so you&apos;re never locked in.</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">8. Cookies</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                We use essential cookies for login sessions and anonymized analytics cookies to see how the product is used. No advertising or cross-site tracking cookies. Disable non-essential cookies anytime in your browser settings.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-display text-xl font-bold text-ink">9. Updates and contact</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                We&apos;ll email the account owner at least 14 days before any material change takes effect. Questions about your data or this policy: <a href="mailto:support@medishelf.co" className="text-brand-deep hover:underline">support@medishelf.co</a> or our <Link href="/contact" className="text-brand-deep hover:underline">contact page</Link>.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
