/**
 * Single source of truth for every trust / E-E-A-T page on the site.
 * Used by the footer, the /legal hub, "related policies" blocks and the sitemap,
 * so adding a page here wires it up everywhere at once.
 */
export type TrustGroup = "Legal" | "Trust" | "Help";

export interface TrustPage {
  href: string;
  title: string;
  shortTitle: string;
  summary: string;
  group: TrustGroup;
  lastUpdated: string; // ISO date (YYYY-MM-DD)
}

export const SITE_URL = "https://medishelf.co";

export const TRUST_PAGES: TrustPage[] = [
  {
    href: "/faq",
    title: "Frequently Asked Questions",
    shortTitle: "FAQ",
    summary: "Answers on setup, batch tracking, billing, data, security and support.",
    group: "Help",
    lastUpdated: "2026-10-14",
  },
  {
    href: "/support",
    title: "Support & Service Levels",
    shortTitle: "Support & SLA",
    summary: "Support channels, response times by plan, uptime target and escalation path.",
    group: "Help",
    lastUpdated: "2026-10-14",
  },
  {
    href: "/security",
    title: "Security & Data Protection",
    shortTitle: "Security",
    summary: "How pharmacy data is isolated, encrypted, backed up, monitored and disclosed.",
    group: "Trust",
    lastUpdated: "2026-10-14",
  },
  {
    href: "/editorial-policy",
    title: "Editorial Policy",
    shortTitle: "Editorial policy",
    summary: "How our guides are researched, written, fact-checked, updated and corrected.",
    group: "Trust",
    lastUpdated: "2026-10-14",
  },
  {
    href: "/accessibility",
    title: "Accessibility Statement",
    shortTitle: "Accessibility",
    summary: "Our WCAG 2.1 AA commitment, known limitations and how to report a barrier.",
    group: "Trust",
    lastUpdated: "2026-10-14",
  },
  {
    href: "/privacy",
    title: "Privacy Policy",
    shortTitle: "Privacy policy",
    summary: "What data we collect, why, who processes it and the rights you have.",
    group: "Legal",
    lastUpdated: "2026-07-25",
  },
  {
    href: "/tmc",
    title: "Terms & Conditions",
    shortTitle: "Terms & conditions",
    summary: "The agreement covering accounts, billing, data ownership and liability.",
    group: "Legal",
    lastUpdated: "2026-07-25",
  },
  {
    href: "/refundPolicy",
    title: "Refund Policy",
    shortTitle: "Refund policy",
    summary: "30-day money-back guarantee, annual proration and data export after leaving.",
    group: "Legal",
    lastUpdated: "2026-07-25",
  },
  {
    href: "/cookie-policy",
    title: "Cookie Policy",
    shortTitle: "Cookie policy",
    summary: "Every cookie and tracking script we use, what it does and how to opt out.",
    group: "Legal",
    lastUpdated: "2026-10-14",
  },
  {
    href: "/acceptable-use",
    title: "Acceptable Use Policy",
    shortTitle: "Acceptable use",
    summary: "What you can and can't do on Medishelf to keep every pharmacy safe.",
    group: "Legal",
    lastUpdated: "2026-10-14",
  },
  {
    href: "/disclaimer",
    title: "Disclaimer",
    shortTitle: "Disclaimer",
    summary: "Not medical, legal or tax advice; how to read case studies and examples.",
    group: "Legal",
    lastUpdated: "2026-10-14",
  },
];

export function getTrustPage(href: string): TrustPage | undefined {
  return TRUST_PAGES.find((page) => page.href === href);
}

/** Formats an ISO date like 2026-10-14 as "October 14, 2026". */
export function formatPolicyDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
