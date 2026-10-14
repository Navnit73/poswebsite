import type { Metadata } from "next";
import Link from "next/link";
import PolicyShell, { PolicySection, CheckList, Callout, DataTable, linkClass } from "@/components/PolicyShell";

const TITLE = "Security & Data Protection";
const DESCRIPTION =
  "How Medishelf protects pharmacy data: tenant isolation, TLS 1.3 and AES-256 encryption, bcrypt password hashing, rate limiting, audit logs, backups, incident response and responsible disclosure.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://medishelf.co/security" },
  openGraph: { type: "website", siteName: "Medishelf", title: `${TITLE} | Medishelf`, description: DESCRIPTION, url: "https://medishelf.co/security" },
  twitter: { card: "summary_large_image", title: `${TITLE} | Medishelf`, description: DESCRIPTION },
};

const TOC = [
  { id: "approach", label: "Our approach" },
  { id: "isolation", label: "Tenant isolation" },
  { id: "encryption", label: "Encryption" },
  { id: "access", label: "Account & access security" },
  { id: "application", label: "Application security" },
  { id: "audit", label: "Audit logging" },
  { id: "availability", label: "Backups & availability" },
  { id: "people", label: "People & vendors" },
  { id: "incidents", label: "Incident response" },
  { id: "your-part", label: "What you can do" },
  { id: "disclosure", label: "Report a vulnerability" },
];

export default function SecurityPage() {
  return (
    <PolicyShell
      path="/security"
      eyebrow="Trust center"
      heading="Security & data protection"
      intro="A pharmacy's stock, sales and customer records are the business. Here is exactly how we protect them — in plain language, without vague promises."
      reviewedBy="Maintained by the Medishelf engineering & security team"
      toc={TOC}
      highlights={[
        { title: "Isolated per pharmacy", text: "Every record is scoped to your tenant at the database layer." },
        { title: "Encrypted everywhere", text: "TLS 1.3 in transit, AES-256 at rest, bcrypt for passwords." },
        { title: "Everything is logged", text: "Price, stock and role changes are written to an audit trail." },
        { title: "Your data, exportable", text: "Full CSV / JSON export anytime — no lock-in." },
      ]}
    >
      <PolicySection id="approach" number={1} title="Our approach">
        <p>
          Security at Medishelf is a design constraint, not a feature tier. Every plan — including Starter — gets the same isolation, encryption and logging. We follow a simple rule: collect only what the software needs, protect it in layers, and make it easy for you to take it with you.
        </p>
        <Callout title="Honest about certifications">
          We don&apos;t display badges we haven&apos;t earned. Medishelf does not currently hold a SOC 2 or ISO 27001 certificate. If your organisation needs a security questionnaire completed, email{" "}
          <a href="mailto:support@medishelf.co" className={linkClass}>support@medishelf.co</a> and we&apos;ll answer it in detail.
        </Callout>
      </PolicySection>

      <PolicySection id="isolation" number={2} title="Tenant isolation">
        <p>
          Each pharmacy is a separate tenant. Products, batches, sales, customers and staff are stored with a tenant identifier, and every database query is scoped to the signed-in user&apos;s tenant before it runs. One pharmacy cannot read, list or modify another&apos;s data — not through the interface, the API, or search.
        </p>
        <p>Multi-store accounts on Growth and Enterprise share a tenant across their own stores only, with per-store permissions for staff.</p>
      </PolicySection>

      <PolicySection id="encryption" number={3} title="Encryption">
        <DataTable
          caption="Encryption controls"
          head={["Layer", "Control"]}
          rows={[
            ["In transit", "All traffic between your browser and Medishelf is encrypted with TLS 1.3. Plain HTTP is redirected to HTTPS."],
            ["At rest", "Databases and backups are encrypted with AES-256."],
            ["Passwords", "Hashed with bcrypt and a per-user salt. We never store or can see your password."],
            ["Logs", "Emails, passwords and tokens are automatically redacted before logs are written."],
          ]}
        />
      </PolicySection>

      <PolicySection id="access" number={4} title="Account & access security">
        <CheckList
          items={[
            <><strong className="text-ink">Rate-limited logins</strong> — repeated failed attempts are throttled to block password guessing.</>,
            <><strong className="text-ink">Role-based access control</strong> — owners decide who can sell, receive stock, change prices or view profit.</>,
            <><strong className="text-ink">Self-service password reset</strong> through time-limited, single-use email links.</>,
            <><strong className="text-ink">Single sign-on (SSO)</strong> is available on Enterprise plans.</>,
            <><strong className="text-ink">Suspicious-login monitoring</strong> — we notify the account owner of unusual patterns we detect.</>,
          ]}
        />
      </PolicySection>

      <PolicySection id="application" number={5} title="Application security">
        <CheckList
          items={[
            "Every API request is validated against a strict schema before it reaches business logic.",
            "Public endpoints are rate-limited to resist abuse and automated attacks.",
            "Stock changes run as atomic transactions, so concurrent sales can't corrupt counts.",
            "Dependencies are monitored for known vulnerabilities and patched as part of our weekly release cycle.",
            "Code changes are peer-reviewed before they ship to production.",
          ]}
        />
      </PolicySection>

      <PolicySection id="audit" number={6} title="Audit logging">
        <p>
          If it changed, it&apos;s logged. Price edits, stock adjustments, voids, role changes and sign-ins are written to an audit log with the user, time and before/after values. Starter includes a basic audit log; Growth and Enterprise include the full log. Owners can review it at any time from the dashboard.
        </p>
      </PolicySection>

      <PolicySection id="availability" number={7} title="Backups & availability">
        <p>
          Data is backed up automatically, and backups are encrypted and stored separately from the primary database. We target 99.9% monthly uptime and announce planned maintenance in advance, scheduled outside typical pharmacy trading hours.
        </p>
        <p>
          After cancellation, your data remains exportable for 30 days, is then deleted from production, and is removed from backups within 90 days. Details are in our <Link href="/privacy" className={linkClass}>Privacy Policy</Link> and <Link href="/support" className={linkClass}>Support &amp; SLA</Link> page.
        </p>
      </PolicySection>

      <PolicySection id="people" number={8} title="People & vendors">
        <p>
          Access to production systems is limited to the engineers who need it to operate the service, and is reviewed regularly. Support staff only view customer data when you ask for help and only to the extent needed to resolve your request.
        </p>
        <p>
          We use a small number of infrastructure vendors — hosting, email delivery and payment processing. Each receives only the data it needs and is bound by a data processing agreement. We never sell data or share it for advertising.
        </p>
      </PolicySection>

      <PolicySection id="incidents" number={9} title="Incident response">
        <p>
          If we detect a security incident, we contain it first, then investigate. If your data is affected, we notify the account owner without undue delay — and within 72 hours of confirming a breach where the law requires it — with what happened, what data was involved, and what we&apos;re doing about it. A written post-incident summary follows once the investigation is complete.
        </p>
      </PolicySection>

      <PolicySection id="your-part" number={10} title="What you can do">
        <CheckList
          items={[
            "Give every staff member their own login — never share a cashier account.",
            "Use the least-privileged role that lets each person do their job.",
            "Remove staff access the day someone leaves.",
            "Use a unique, long password and a password manager.",
            "Review the audit log weekly for unexpected price or stock changes.",
          ]}
        />
      </PolicySection>

      <PolicySection id="disclosure" number={11} title="Report a vulnerability">
        <p>
          Found a security issue? Please email <a href="mailto:security@medishelf.co" className={linkClass}>security@medishelf.co</a> with steps to reproduce. We acknowledge reports within 2 business days, keep you updated while we fix it, and credit researchers who want recognition.
        </p>
        <Callout title="Safe-harbour guidelines" tone="amber">
          Act in good faith: don&apos;t access, modify or delete other customers&apos; data, don&apos;t degrade the service, and give us reasonable time to fix the issue before public disclosure. If you follow these rules, we won&apos;t pursue legal action over your research.
        </Callout>
      </PolicySection>
    </PolicyShell>
  );
}
