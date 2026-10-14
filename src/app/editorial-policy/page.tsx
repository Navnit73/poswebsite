import type { Metadata } from "next";
import Link from "next/link";
import PolicyShell, { PolicySection, CheckList, CrossList, Callout, DataTable, linkClass } from "@/components/PolicyShell";

const TITLE = "Editorial Policy";
const DESCRIPTION =
  "How Medishelf researches, writes, fact-checks, updates and corrects its pharmacy inventory and POS guides. Our sourcing standards, review process, AI use and independence rules.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://medishelf.co/editorial-policy" },
  openGraph: { type: "website", siteName: "Medishelf", title: `${TITLE} | Medishelf`, description: DESCRIPTION, url: "https://medishelf.co/editorial-policy" },
  twitter: { card: "summary_large_image", title: `${TITLE} | Medishelf`, description: DESCRIPTION },
};

const TOC = [
  { id: "mission", label: "Why we publish" },
  { id: "who", label: "Who writes our content" },
  { id: "process", label: "Our 5-step process" },
  { id: "sources", label: "Sourcing standards" },
  { id: "ai", label: "Use of AI tools" },
  { id: "independence", label: "Independence & product mentions" },
  { id: "updates", label: "Updates & corrections" },
  { id: "feedback", label: "Feedback" },
];

export default function EditorialPolicyPage() {
  return (
    <PolicyShell
      path="/editorial-policy"
      eyebrow="Trust center"
      heading="Editorial policy"
      intro="Our guides help pharmacy owners make real decisions about stock, money and software. This is the standard every article has to meet before — and after — it's published."
      reviewedBy="Owned by the Medishelf Editorial Team"
      toc={TOC}
      highlights={[
        { title: "Written from experience", text: "Grounded in how real pharmacy counters and stock rooms run." },
        { title: "Primary sources first", text: "Regulators, standards bodies and official guidance over blogs." },
        { title: "Reviewed before publishing", text: "Every guide is fact-checked by a second reviewer." },
        { title: "Kept current", text: "Revisited at least every 12 months, and sooner when rules change." },
      ]}
    >
      <PolicySection id="mission" number={1} title="Why we publish">
        <p>
          Independent pharmacies rarely have an operations department. Our <Link href="/blog" className={linkClass}>blog and guides</Link> exist to give owners and managers practical, accurate answers on inventory control, expiry management, stocktakes, purchasing and pharmacy software — whether or not they ever use Medishelf.
        </p>
      </PolicySection>

      <PolicySection id="who" number={2} title="Who writes our content">
        <p>
          Articles are published by the <strong className="text-ink">Medishelf Editorial Team</strong>: the people who design, build and support Medishelf every day, working alongside the pharmacy owners and staff who use it. Topics come from real support conversations, onboarding calls and the questions pharmacies ask before switching software.
        </p>
        <p>
          Where an article draws on specialist knowledge — for example regulation in a specific country — it is reviewed by someone with direct experience in that area before publication.
        </p>
      </PolicySection>

      <PolicySection id="process" number={3} title="Our 5-step process">
        <DataTable
          caption="Editorial process"
          head={["Step", "What happens"]}
          rows={[
            ["1. Topic & brief", "We start from a real pharmacy question and define who the article is for and what decision it should help them make."],
            ["2. Research", "We gather primary sources, product data and practical examples from pharmacy operations."],
            ["3. Writing", "The draft uses plain language, worked examples and clear steps. Jargon is explained the first time it's used."],
            ["4. Fact-check & review", "A second team member checks every figure, regulation and claim against its source and flags anything unverifiable for removal."],
            ["5. Publish & maintain", "Articles show their publish date, are reviewed at least every 12 months, and are updated sooner when rules or the product change."],
          ]}
        />
      </PolicySection>

      <PolicySection id="sources" number={4} title="Sourcing standards">
        <p>We prioritise sources in this order:</p>
        <CheckList
          items={[
            "Regulators and government bodies — e.g. FDA, DEA, MHRA, GPhC, the European Medicines Agency and the TGA.",
            "Standards and professional bodies — e.g. GS1, pharmacy associations and official industry guidance.",
            "Peer-reviewed research and established industry reports.",
            "Aggregated, anonymised data from the Medishelf platform — clearly labelled as our own data.",
          ]}
        />
        <p>We don&apos;t present opinions as facts, and we avoid citing anonymous forums or content farms as evidence.</p>
      </PolicySection>

      <PolicySection id="ai" number={5} title="Use of AI tools">
        <p>
          We may use AI tools to help with research, outlining, grammar or summarising long regulatory documents. AI is never the final author: a person on our team writes or rewrites the content, verifies every factual claim against a source, and takes responsibility for what is published.
        </p>
      </PolicySection>

      <PolicySection id="independence" number={6} title="Independence & product mentions">
        <p>Medishelf is a commercial product, and we&apos;re open about that. Our rules:</p>
        <CheckList
          items={[
            "Advice comes first. Guides must be useful to a reader who never buys Medishelf.",
            "When we mention Medishelf, we do so where it is genuinely relevant, and it's obvious that it's our product.",
            "When we compare approaches or tools, we describe trade-offs honestly, including where a different option may suit you better.",
          ]}
        />
        <CrossList
          items={[
            "We don't accept payment for coverage, links or reviews.",
            "We don't publish sponsored content or undisclosed affiliate links.",
          ]}
        />
      </PolicySection>

      <PolicySection id="updates" number={7} title="Updates & corrections">
        <p>
          If we find or are told about an error, we correct it promptly. Minor fixes (typos, broken links) are made quietly. Substantive corrections — a wrong figure, a changed regulation, outdated advice — are fixed and the article&apos;s date is updated so readers know it has changed.
        </p>
        <Callout title="Not professional advice">
          Our guides cover business operations and are not medical, legal or tax advice. See our <Link href="/disclaimer" className={linkClass}>Disclaimer</Link> for details.
        </Callout>
      </PolicySection>

      <PolicySection id="feedback" number={8} title="Feedback">
        <p>
          Spotted an error, or have a question you&apos;d like us to cover? Email <a href="mailto:support@medishelf.co" className={linkClass}>support@medishelf.co</a> with the article link. Every message is read by the editorial team.
        </p>
      </PolicySection>
    </PolicyShell>
  );
}
