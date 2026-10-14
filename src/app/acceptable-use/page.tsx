import type { Metadata } from "next";
import Link from "next/link";
import PolicyShell, { PolicySection, CheckList, CrossList, Callout, linkClass } from "@/components/PolicyShell";

const TITLE = "Acceptable Use Policy";
const DESCRIPTION =
  "Medishelf Acceptable Use Policy: what pharmacies and staff may and may not do with our inventory and POS software, how we enforce it, and how to report abuse.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://medishelf.co/acceptable-use" },
  openGraph: { type: "website", siteName: "Medishelf", title: `${TITLE} | Medishelf`, description: DESCRIPTION, url: "https://medishelf.co/acceptable-use" },
  twitter: { card: "summary_large_image", title: `${TITLE} | Medishelf`, description: DESCRIPTION },
};

const TOC = [
  { id: "purpose", label: "Why this policy exists" },
  { id: "allowed", label: "What you can do" },
  { id: "prohibited", label: "What's not allowed" },
  { id: "pharmacy", label: "Pharmacy-specific rules" },
  { id: "fair-use", label: "Fair use of resources" },
  { id: "enforcement", label: "Enforcement" },
  { id: "report", label: "Report abuse" },
];

export default function AcceptableUsePage() {
  return (
    <PolicyShell
      path="/acceptable-use"
      eyebrow="Legal"
      heading="Acceptable use policy"
      intro="Every pharmacy on Medishelf shares the same platform. These rules keep it fast, lawful and safe for all of them. They form part of our Terms & Conditions."
      reviewedBy="Reviewed by the Medishelf legal & security team"
      toc={TOC}
    >
      <PolicySection id="purpose" number={1} title="Why this policy exists">
        <p>
          This policy explains what is and isn&apos;t acceptable when using Medishelf. It applies to account owners and to every staff member they invite, and it supplements our <Link href="/tmc" className={linkClass}>Terms &amp; Conditions</Link>. The account owner is responsible for making sure their team follows it.
        </p>
      </PolicySection>

      <PolicySection id="allowed" number={2} title="What you can do">
        <CheckList
          items={[
            "Run the inventory, purchasing, POS and reporting of the pharmacies on your plan.",
            "Invite staff, contractors and accountants who work for your pharmacy, each with their own login.",
            "Export your data at any time and use it however you like — it's yours.",
            "Connect hardware such as barcode scanners, receipt printers and cash drawers.",
          ]}
        />
      </PolicySection>

      <PolicySection id="prohibited" number={3} title="What's not allowed">
        <CrossList
          items={[
            "Attempting to access another pharmacy's data, or probing for weaknesses outside our responsible disclosure process.",
            "Sharing one login between several people, or sharing credentials outside your business.",
            "Reverse-engineering, scraping, copying or reselling the software or access to it without written consent.",
            "Uploading malware, or interfering with the service's performance or security.",
            "Using Medishelf for anything unlawful, fraudulent or deceptive — including false invoices or manipulated records.",
            "Storing data you don't have the right to collect, or using customer contact details for spam.",
            "Using automated tools to create accounts or overload the service.",
          ]}
        />
      </PolicySection>

      <PolicySection id="pharmacy" number={4} title="Pharmacy-specific rules">
        <p>Because pharmacies are regulated businesses, a few extra rules apply:</p>
        <CheckList
          items={[
            "Only use Medishelf to sell products you are licensed to sell in your jurisdiction.",
            "Don't use the system to disguise the sale of controlled or prescription-only medicines, or to bypass legal record-keeping.",
            "Keep batch, expiry and supplier details accurate — other features (such as FEFO suggestions and alerts) depend on them.",
            "Comply with the privacy laws that apply to your customers' personal data.",
          ]}
        />
        <Callout title="You stay responsible for compliance" tone="amber">
          Medishelf helps you keep accurate records, but it does not replace your professional and legal obligations as a pharmacy. See our <Link href="/disclaimer" className={linkClass}>Disclaimer</Link>.
        </Callout>
      </PolicySection>

      <PolicySection id="fair-use" number={5} title="Fair use of resources">
        <p>
          Plans include generous limits for normal pharmacy use. If an account&apos;s usage — such as automated API calls or very large file imports — begins to affect other customers, we&apos;ll contact you first to find a solution, such as scheduling imports or moving to a more suitable plan, before applying any rate limits.
        </p>
      </PolicySection>

      <PolicySection id="enforcement" number={6} title="Enforcement">
        <p>
          Most issues are honest mistakes, so we start with a conversation. If a violation continues, we may restrict features or suspend the account. We act immediately, without prior notice, only where there is serious risk — for example attempted access to other tenants&apos; data, active malware, or illegal activity. Data in a suspended account stays protected and, unless the law requires otherwise, exportable. If you believe we got it wrong, <Link href="/contact" className={linkClass}>contact us</Link> and a person will review the decision.
        </p>
      </PolicySection>

      <PolicySection id="report" number={7} title="Report abuse">
        <p>
          To report misuse of Medishelf, email <a href="mailto:support@medishelf.co" className={linkClass}>support@medishelf.co</a>. For security vulnerabilities, use <a href="mailto:security@medishelf.co" className={linkClass}>security@medishelf.co</a> and see our <Link href="/security" className={linkClass}>Security</Link> page.
        </p>
      </PolicySection>
    </PolicyShell>
  );
}
