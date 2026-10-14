import type { Metadata } from "next";
import PolicyShell, { PolicySection, CheckList, Callout, linkClass } from "@/components/PolicyShell";

const TITLE = "Accessibility Statement";
const DESCRIPTION =
  "Medishelf's accessibility commitment: we aim to meet WCAG 2.1 Level AA across our website and pharmacy POS app. Measures we take, known limitations and how to report a barrier.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://medishelf.co/accessibility" },
  openGraph: { type: "website", siteName: "Medishelf", title: `${TITLE} | Medishelf`, description: DESCRIPTION, url: "https://medishelf.co/accessibility" },
  twitter: { card: "summary_large_image", title: `${TITLE} | Medishelf`, description: DESCRIPTION },
};

const TOC = [
  { id: "commitment", label: "Our commitment" },
  { id: "standard", label: "Standard we follow" },
  { id: "measures", label: "What we've built in" },
  { id: "limitations", label: "Known limitations" },
  { id: "testing", label: "How we test" },
  { id: "feedback", label: "Report a barrier" },
];

export default function AccessibilityPage() {
  return (
    <PolicyShell
      path="/accessibility"
      eyebrow="Trust center"
      heading="Accessibility statement"
      intro="Pharmacy teams include people of every ability, often working fast under pressure. Medishelf should be usable by all of them — with a keyboard, a screen reader or a zoomed-in screen."
      reviewedBy="Maintained by the Medishelf product & design team"
      toc={TOC}
      highlights={[
        { title: "WCAG 2.1 AA target", text: "The internationally recognised standard for accessible web content." },
        { title: "Keyboard-first POS", text: "Every checkout action is reachable without a mouse." },
        { title: "Reduced motion respected", text: "Animations switch off when your system asks for less motion." },
      ]}
    >
      <PolicySection id="commitment" number={1} title="Our commitment">
        <p>
          We want medishelf.co and the Medishelf app to be usable by everyone, including people who use assistive technology. Accessibility is considered when we design new features, not bolted on afterwards.
        </p>
      </PolicySection>

      <PolicySection id="standard" number={2} title="Standard we follow">
        <p>
          We aim to conform to the <a href="https://www.w3.org/TR/WCAG21/" className={linkClass} target="_blank" rel="noopener noreferrer">Web Content Accessibility Guidelines (WCAG) 2.1, Level AA</a>. This standard underpins accessibility laws such as the ADA in the USA, the Equality Act in the UK, the European Accessibility Act and the Disability Discrimination Act in Australia.
        </p>
        <p>We consider the website and app <strong className="text-ink">partially conformant</strong>: most content meets the standard, and the known gaps are listed below.</p>
      </PolicySection>

      <PolicySection id="measures" number={3} title="What we've built in">
        <CheckList
          items={[
            "Semantic HTML with a single H1 per page, logical heading order and labelled landmarks.",
            "Keyboard-first POS: search, add-to-cart and checkout work entirely from the keyboard.",
            "Visible focus outlines on buttons, links and form fields.",
            "Text and interactive elements designed to meet AA colour-contrast ratios.",
            "Form fields with programmatic labels and clear error messages.",
            "Accordions and menus that expose their open/closed state to screen readers.",
            "Layouts that reflow on small screens and remain usable at 200% zoom.",
            "Animations disabled automatically when 'reduce motion' is set in your operating system.",
          ]}
        />
      </PolicySection>

      <PolicySection id="limitations" number={4} title="Known limitations">
        <p>We&apos;re honest about where we fall short today and are working to fix:</p>
        <CheckList
          items={[
            "Some product screenshots and illustrations on marketing pages have brief alternative text rather than full descriptions of every on-screen detail.",
            "Complex report charts in the app may be hard to interpret with a screen reader; the same figures are available in exportable tables.",
            "Downloadable PDF reports are not yet fully tagged for assistive technology; CSV exports are available as an alternative.",
          ]}
        />
      </PolicySection>

      <PolicySection id="testing" number={5} title="How we test">
        <p>
          We check new pages and features with automated tools (such as Lighthouse and axe), manual keyboard-only testing, and screen readers including VoiceOver on macOS and iOS. Accessibility issues are tracked and prioritised alongside other bugs.
        </p>
      </PolicySection>

      <PolicySection id="feedback" number={6} title="Report a barrier">
        <p>
          If something on our website or in the app is hard to use, please tell us. Email <a href="mailto:support@medishelf.co?subject=Accessibility%20feedback" className={linkClass}>support@medishelf.co</a> with the page address and a short description of the problem. We aim to reply within 2 business days and, where we can&apos;t fix something quickly, to give you the information in another format.
        </p>
        <Callout title="Need information in another format?">
          We can provide policies, invoices and reports as plain text, large print or a format that works with your assistive technology — just ask.
        </Callout>
      </PolicySection>
    </PolicyShell>
  );
}
