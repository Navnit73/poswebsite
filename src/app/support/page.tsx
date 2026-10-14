import type { Metadata } from "next";
import Link from "next/link";
import PolicyShell, { PolicySection, CheckList, Callout, DataTable, linkClass } from "@/components/PolicyShell";

const TITLE = "Support & Service Levels (SLA)";
const DESCRIPTION =
  "Medishelf support channels, response-time targets by plan and severity, 99.9% uptime target, planned maintenance, escalation path and onboarding help for pharmacies.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://medishelf.co/support" },
  openGraph: { type: "website", siteName: "Medishelf", title: `${TITLE} | Medishelf`, description: DESCRIPTION, url: "https://medishelf.co/support" },
  twitter: { card: "summary_large_image", title: `${TITLE} | Medishelf`, description: DESCRIPTION },
};

const TOC = [
  { id: "channels", label: "How to reach us" },
  { id: "plans", label: "Support by plan" },
  { id: "severity", label: "Severity & response targets" },
  { id: "uptime", label: "Uptime & maintenance" },
  { id: "onboarding", label: "Onboarding & migration" },
  { id: "escalation", label: "Escalation" },
  { id: "scope", label: "What's in scope" },
];

export default function SupportPage() {
  return (
    <PolicyShell
      path="/support"
      eyebrow="Help center"
      heading="Support & service levels"
      intro="When the counter is busy, you need answers, not a ticket number. Here's who helps you, how fast, and what we commit to on uptime."
      reviewedBy="Owned by the Medishelf customer support team"
      toc={TOC}
      highlights={[
        { title: "Humans only", text: "Every reply comes from a person on our team — never a bot." },
        { title: "< 1 business day", text: "First-response commitment on every plan, including Starter." },
        { title: "99.9% uptime target", text: "Planned maintenance announced in advance, outside trading hours." },
        { title: "Free onboarding", text: "Help importing your catalogue and opening stock at no extra cost." },
      ]}
    >
      <PolicySection id="channels" number={1} title="How to reach us">
        <DataTable
          caption="Support channels"
          head={["Channel", "Best for", "Details"]}
          rows={[
            ["Email", "Everything — how-to, bugs, billing, refunds", <a key="e" href="mailto:support@medishelf.co" className={linkClass}>support@medishelf.co</a>],
            ["Contact form", "Sales, demos, enterprise questions", <Link key="c" href="/contact" className={linkClass}>medishelf.co/contact</Link>],
            ["Phone", "Urgent issues for Enterprise customers", "Direct line shared with your account manager"],
            ["Security", "Reporting a vulnerability", <a key="s" href="mailto:security@medishelf.co" className={linkClass}>security@medishelf.co</a>],
          ]}
        />
        <p>Business hours are Monday to Friday, 9:00–18:00 US Central Time. Critical counter-down issues are monitored outside business hours.</p>
      </PolicySection>

      <PolicySection id="plans" number={2} title="Support by plan">
        <DataTable
          caption="Support included by plan"
          head={["", "Starter", "Growth", "Enterprise"]}
          rows={[
            ["Channel", "Email", "Priority email", "Email + phone"],
            ["First response", "Within 1 business day", "Within 4 business hours", "Within 1 hour (critical)"],
            ["Onboarding help", "Guided setup + import", "Guided setup + import", "Dedicated onboarding"],
            ["Account manager", "—", "—", "Dedicated manager"],
            ["Formal uptime SLA", "—", "—", "Available with service credits"],
          ]}
        />
        <p>
          See full plan details on our <Link href="/pricing" className={linkClass}>pricing page</Link>.
        </p>
      </PolicySection>

      <PolicySection id="severity" number={3} title="Severity & response targets">
        <DataTable
          caption="Severity levels"
          head={["Severity", "Example", "Target first response"]}
          rows={[
            [<span key="1" className="text-rust">Critical</span>, "Nobody can sign in or the POS can't complete sales", "Within 1 hour, any time"],
            [<span key="2" className="text-amber">High</span>, "A core feature (receiving, reports) is broken with no workaround", "Within 4 business hours"],
            ["Normal", "A bug with a workaround, or a billing question", "Within 1 business day"],
            ["Low", "How-to questions and feature requests", "Within 2 business days"],
          ]}
        />
        <p>Response targets are when a person first replies with a diagnosis or next step — not an automated acknowledgement. Most issues are resolved in the first reply.</p>
      </PolicySection>

      <PolicySection id="uptime" number={4} title="Uptime & maintenance">
        <CheckList
          items={[
            "We target 99.9% monthly availability for the Medishelf app — roughly 43 minutes of unplanned downtime a month at most.",
            "We deploy improvements weekly using releases designed to avoid downtime.",
            "Planned maintenance that needs downtime is announced by email at least 72 hours ahead and scheduled outside typical pharmacy trading hours.",
            "During an incident, we email account owners with updates until it's resolved, followed by a short written summary.",
          ]}
        />
        <Callout title="Enterprise SLA">
          Enterprise agreements can include a contractual uptime commitment with service credits if we miss it. <Link href="/contact" className={linkClass}>Talk to sales</Link> for terms.
        </Callout>
      </PolicySection>

      <PolicySection id="onboarding" number={5} title="Onboarding & migration">
        <p>
          Every new pharmacy gets help importing its product catalogue and opening stock from a spreadsheet or previous system, setting up staff roles, and running a first test sale. Most single stores are live the same afternoon. Our <Link href="/blog/switch-pharmacy-software-migration-checklist" className={linkClass}>migration checklist</Link> covers what to prepare.
        </p>
      </PolicySection>

      <PolicySection id="escalation" number={6} title="Escalation">
        <p>
          If you&apos;re not happy with how an issue is being handled, reply to your support thread with &quot;escalate&quot; in the subject line. It goes straight to a support lead, who will contact you within one business day. Billing disputes and refund requests are covered by our <Link href="/refundPolicy" className={linkClass}>Refund Policy</Link>.
        </p>
      </PolicySection>

      <PolicySection id="scope" number={7} title="What's in scope">
        <p>Support covers using Medishelf, account and billing questions, bugs and data imports/exports. It doesn&apos;t cover:</p>
        <CheckList
          items={[
            "Repairing your own hardware, network or printers (we'll gladly help confirm compatible devices).",
            "Clinical, legal, regulatory or tax advice — see our Disclaimer.",
            "Custom development or integrations outside an Enterprise agreement.",
          ]}
        />
      </PolicySection>
    </PolicyShell>
  );
}
