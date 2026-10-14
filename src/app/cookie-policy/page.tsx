import type { Metadata } from "next";
import Link from "next/link";
import PolicyShell, { PolicySection, CheckList, Callout, DataTable, linkClass } from "@/components/PolicyShell";

const TITLE = "Cookie Policy";
const DESCRIPTION =
  "Every cookie and tracking technology used on medishelf.co and the Medishelf app — what it does, how long it lasts, and how to control or opt out of analytics cookies.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://medishelf.co/cookie-policy" },
  openGraph: { type: "website", siteName: "Medishelf", title: `${TITLE} | Medishelf`, description: DESCRIPTION, url: "https://medishelf.co/cookie-policy" },
  twitter: { card: "summary_large_image", title: `${TITLE} | Medishelf`, description: DESCRIPTION },
};

const TOC = [
  { id: "what", label: "What cookies are" },
  { id: "categories", label: "Categories we use" },
  { id: "list", label: "Full cookie list" },
  { id: "not-used", label: "What we don't use" },
  { id: "control", label: "How to control cookies" },
  { id: "changes", label: "Changes & contact" },
];

export default function CookiePolicyPage() {
  return (
    <PolicyShell
      path="/cookie-policy"
      eyebrow="Legal"
      heading="Cookie policy"
      intro="A short, complete list of the cookies and scripts we use on medishelf.co and inside the Medishelf app — and how to switch the optional ones off."
      reviewedBy="Maintained by the Medishelf security & compliance team"
      toc={TOC}
      highlights={[
        { title: "No ad cookies", text: "No advertising, retargeting or cross-site tracking cookies — ever." },
        { title: "Two analytics tools", text: "Google Analytics 4 and Microsoft Clarity, used only to improve the site." },
        { title: "Easy to opt out", text: "Block analytics with browser settings or the official opt-out tools." },
      ]}
    >
      <PolicySection id="what" number={1} title="What cookies are">
        <p>
          Cookies are small text files a website stores in your browser. Some are essential — they keep you signed in. Others help the site owner understand how pages are used. Similar technologies such as local storage and tracking scripts are covered by this policy too, and we refer to them all as &quot;cookies&quot; for simplicity.
        </p>
      </PolicySection>

      <PolicySection id="categories" number={2} title="Categories we use">
        <DataTable
          caption="Cookie categories"
          head={["Category", "Purpose", "Can you turn it off?"]}
          rows={[
            ["Strictly necessary", "Sign-in sessions, security tokens and load balancing inside the Medishelf app.", "No — the app can't work without them."],
            ["Analytics", "Understand which pages are visited, how visitors navigate and where pages are confusing, so we can improve them.", "Yes — see section 5."],
            ["Preferences", "Remember choices such as store, language or dismissed notices inside the app.", "Yes, but some settings will reset."],
          ]}
        />
      </PolicySection>

      <PolicySection id="list" number={3} title="Full cookie list">
        <DataTable
          caption="Cookies set on medishelf.co and in the Medishelf app"
          head={["Cookie", "Provider", "Purpose", "Duration"]}
          rows={[
            ["Session cookie", "Medishelf (app only)", "Keeps you securely signed in to your pharmacy account.", "Session / until sign-out"],
            ["CSRF token", "Medishelf (app only)", "Protects forms against cross-site request forgery.", "Session"],
            ["_ga", "Google Analytics 4", "Distinguishes unique visitors with a random ID.", "Up to 2 years"],
            ["_ga_<container-id>", "Google Analytics 4", "Keeps session state for analytics.", "Up to 2 years"],
            ["_clck", "Microsoft Clarity", "Stores a random user ID and Clarity preferences.", "1 year"],
            ["_clsk", "Microsoft Clarity", "Connects page views into one session recording.", "1 day"],
            ["CLID, MUID, ANONCHK, SM", "Microsoft Clarity / Microsoft", "Identify the first Clarity visit and sync anonymous IDs across Microsoft services used by Clarity.", "Session to 1 year"],
          ]}
        />
        <p>
          Microsoft Clarity records anonymised interactions on our marketing website (clicks, scrolls, mouse movement) to produce heatmaps and session replays. Text typed into form fields is masked by Clarity by default. Google Analytics and Clarity are loaded on medishelf.co marketing pages only after the page has finished loading.
        </p>
      </PolicySection>

      <PolicySection id="not-used" number={4} title="What we don't use">
        <CheckList
          items={[
            "No advertising or retargeting pixels (Meta, Google Ads, LinkedIn, TikTok or similar).",
            "No selling or sharing of cookie data with data brokers.",
            "No fingerprinting techniques to identify you without cookies.",
            "No analytics on patient, prescription or customer records inside the app.",
          ]}
        />
      </PolicySection>

      <PolicySection id="control" number={5} title="How to control cookies">
        <p>You can block or delete cookies at any time. Blocking strictly necessary cookies will stop the Medishelf app from signing you in, but the marketing site will still work.</p>
        <CheckList
          items={[
            <>Use your browser&apos;s privacy settings to block third-party cookies or clear cookies for medishelf.co.</>,
            <>Install the <a href="https://tools.google.com/dlpage/gaoptout" className={linkClass} rel="noopener noreferrer" target="_blank">Google Analytics opt-out browser add-on</a>.</>,
            <>Read how Microsoft Clarity handles data in the <a href="https://privacy.microsoft.com/privacystatement" className={linkClass} rel="noopener noreferrer" target="_blank">Microsoft Privacy Statement</a>.</>,
            <>Use a content blocker or privacy-focused browser that blocks analytics scripts.</>,
          ]}
        />
        <Callout title="Visiting from the UK or EU?">
          You have the right to refuse analytics cookies. Use any of the options above, or email{" "}
          <a href="mailto:support@medishelf.co" className={linkClass}>support@medishelf.co</a> and we&apos;ll delete analytics data associated with your visits where we can identify it.
        </Callout>
      </PolicySection>

      <PolicySection id="changes" number={6} title="Changes & contact">
        <p>
          If we add a new tool that sets cookies, we update this page and the &quot;Last updated&quot; date before it goes live. For how we handle personal data more broadly, see our <Link href="/privacy" className={linkClass}>Privacy Policy</Link>. Questions: <a href="mailto:support@medishelf.co" className={linkClass}>support@medishelf.co</a>.
        </p>
      </PolicySection>
    </PolicyShell>
  );
}
