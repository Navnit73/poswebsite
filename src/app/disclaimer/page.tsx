import type { Metadata } from "next";
import Link from "next/link";
import PolicyShell, { PolicySection, CheckList, Callout, linkClass } from "@/components/PolicyShell";

const TITLE = "Disclaimer";
const DESCRIPTION =
  "Medishelf website disclaimer: our content is general pharmacy-operations information, not medical, legal, regulatory or tax advice. How to read case studies, statistics, examples and third-party links.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://medishelf.co/disclaimer" },
  openGraph: { type: "website", siteName: "Medishelf", title: `${TITLE} | Medishelf`, description: DESCRIPTION, url: "https://medishelf.co/disclaimer" },
  twitter: { card: "summary_large_image", title: `${TITLE} | Medishelf`, description: DESCRIPTION },
};

const TOC = [
  { id: "general", label: "General information only" },
  { id: "medical", label: "Not medical advice" },
  { id: "regulatory", label: "Not legal, regulatory or tax advice" },
  { id: "results", label: "Case studies & results" },
  { id: "software", label: "Software is a tool, not a safeguard" },
  { id: "third-party", label: "Third-party links & trademarks" },
  { id: "accuracy", label: "Accuracy & corrections" },
];

export default function DisclaimerPage() {
  return (
    <PolicyShell
      path="/disclaimer"
      eyebrow="Legal"
      heading="Disclaimer"
      intro="We write for pharmacy owners and managers about running the business side of a pharmacy. Here's what our content is — and what it isn't."
      reviewedBy="Reviewed by the Medishelf legal & editorial team"
      toc={TOC}
    >
      <Callout title="The short version" tone="amber">
        Nothing on medishelf.co is medical, clinical, legal, regulatory or tax advice. Always follow your pharmacy regulator, your local laws and a qualified professional for those decisions.
      </Callout>

      <PolicySection id="general" number={1} title="General information only">
        <p>
          The guides, blog posts, calculators, examples and product pages on this website are provided for general information about pharmacy inventory, stock control, point-of-sale and software. They are written in good faith and reviewed for accuracy, but they are not tailored to your pharmacy, jurisdiction or circumstances.
        </p>
      </PolicySection>

      <PolicySection id="medical" number={2} title="Not medical advice">
        <p>
          Medishelf is business software. Our content does not cover diagnosis, treatment, dosing, drug interactions or patient care, and must never be used as a substitute for professional clinical judgement. References to medicines, batches or expiry dates are operational examples only. Patients with health questions should speak to a pharmacist, doctor or other qualified healthcare professional.
        </p>
      </PolicySection>

      <PolicySection id="regulatory" number={3} title="Not legal, regulatory or tax advice">
        <p>
          Pharmacy regulation differs between countries and states — for example the DEA and state boards in the USA, the GPhC and MHRA in the UK, national competent authorities under the EU Falsified Medicines Directive, and state and territory rules in Australia. Where our articles describe regulations, they summarise them at a point in time and may not reflect later changes.
        </p>
        <p>Before acting on any compliance, record-keeping, controlled-drug or tax topic, confirm the current rules with your regulator or a qualified adviser.</p>
      </PolicySection>

      <PolicySection id="results" number={4} title="Case studies & results">
        <p>
          Our <Link href="/casestudy" className={linkClass}>case studies</Link> and statistics (for example reductions in expiry waste, checkout speed or uptime) describe outcomes measured for specific pharmacies or across our platform during a specific period. They are not a guarantee of the results your pharmacy will achieve, which depend on your stock mix, staff, processes and how the software is used.
        </p>
        <CheckList
          items={[
            "Where a customer is named or quoted, we have their permission.",
            "Some customers ask to stay anonymous; we may change identifying details but never the reported results.",
            "Product screenshots may show sample data rather than a real pharmacy's records.",
          ]}
        />
      </PolicySection>

      <PolicySection id="software" number={5} title="Software is a tool, not a safeguard">
        <p>
          Features such as FEFO batch suggestions, expiry alerts and low-stock alerts help your team work accurately, but they rely on the data entered into the system. Your pharmacy remains responsible for verifying stock, checking expiry dates and labels, and meeting its professional and legal obligations. Our full responsibilities are set out in our <Link href="/tmc" className={linkClass}>Terms &amp; Conditions</Link>.
        </p>
      </PolicySection>

      <PolicySection id="third-party" number={6} title="Third-party links & trademarks">
        <p>
          We link to regulators, standards bodies and other websites for reference. We don&apos;t control those sites and aren&apos;t responsible for their content or privacy practices. Product and company names mentioned on this site are trademarks of their respective owners; mentioning them does not imply endorsement or affiliation.
        </p>
      </PolicySection>

      <PolicySection id="accuracy" number={7} title="Accuracy & corrections">
        <p>
          We work hard to keep content current — see our <Link href="/editorial-policy" className={linkClass}>Editorial Policy</Link> for how articles are researched and reviewed. If you spot something wrong or out of date, email <a href="mailto:support@medishelf.co" className={linkClass}>support@medishelf.co</a> and we&apos;ll review it promptly.
        </p>
      </PolicySection>
    </PolicyShell>
  );
}
