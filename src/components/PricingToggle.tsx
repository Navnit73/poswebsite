"use client";

import { useState } from "react";
import Link from "next/link";

export default function PricingToggle() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div>
      {/* Billing Switch Toggle */}
      <div className="flex items-center justify-center gap-3 text-sm font-medium text-ink-soft">
        <span className={!isAnnual ? "text-ink font-semibold" : ""}>Monthly</span>
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            checked={isAnnual}
            onChange={(e) => setIsAnnual(e.target.checked)}
            className="peer sr-only"
            aria-label="Toggle annual billing"
          />
          <span className="h-6 w-11 rounded-full bg-line transition peer-checked:bg-brand"></span>
          <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5"></span>
        </label>
        <span className={isAnnual ? "text-ink font-semibold" : ""}>
          Annual{" "}
          <span className="label-tag rounded-full bg-brand-mist px-2 py-0.5 text-[11px] font-semibold text-brand-deep">
            save 5%
          </span>
        </span>
      </div>

      {/* Plan cards */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {/* Starter */}
        <div className="rounded-[var(--radius-card)] border border-line bg-surface p-7 flex flex-col justify-between">
          <div>
            <h2 className="font-display font-semibold text-ink">Starter</h2>
            <p className="mt-1 text-sm text-ink-soft">For a single counter</p>
            <p className="mt-5 font-display text-4xl font-bold text-ink">
              <span>{isAnnual ? "$47" : "$50"}</span>
              <span className="text-base font-normal text-ink-soft">/mo</span>
            </p>
            <Link
              href="/demo"
              className="btn-focus mt-6 block rounded-lg border border-line py-2.5 text-center text-sm font-semibold text-ink transition hover:border-brand/40"
            >
              Start free trial
            </Link>
            <ul className="mt-6 space-y-3 text-sm text-ink-soft">
              <li className="flex gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg>
                1 store, up to 3 staff logins
              </li>
              <li className="flex gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg>
                Batch &amp; expiry tracking
              </li>
              <li className="flex gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg>
                POS terminal &amp; invoices
              </li>
              <li className="flex gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg>
                Core reports (sales, inventory)
              </li>
              <li className="flex gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg>
                Email support
              </li>
            </ul>
          </div>
        </div>

        {/* Growth */}
        <div className="relative rounded-[var(--radius-card)] border-2 border-brand bg-surface p-7 shadow-md flex flex-col justify-between">
          <span className="label-tag absolute -top-3 left-7 rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold text-white">
            Most popular
          </span>
          <div>
            <h2 className="font-display font-semibold text-ink">Growth</h2>
            <p className="mt-1 text-sm text-ink-soft">For 2–3 stores</p>
            <p className="mt-5 font-display text-4xl font-bold text-ink">
              <span>{isAnnual ? "$94" : "$99"}</span>
              <span className="text-base font-normal text-ink-soft">/mo</span>
            </p>
            <Link
              href="/demo"
              className="btn-focus mt-6 block rounded-lg bg-brand py-2.5 text-center text-sm font-semibold text-white transition hover:bg-brand-deep"
            >
              Start free trial
            </Link>
            <ul className="mt-6 space-y-3 text-sm text-ink-soft">
              <li className="flex gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg>
                Up to 3 stores, unlimited staff
              </li>
              <li className="flex gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg>
                Custom roles &amp; permissions
              </li>
              <li className="flex gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg>
                All 5 report types + daily PDF email
              </li>
              <li className="flex gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg>
                Full audit log &amp; activity history
              </li>
              <li className="flex gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg>
                Priority support
              </li>
            </ul>
          </div>
        </div>

        {/* Enterprise */}
        <div className="rounded-[var(--radius-card)] border border-line bg-surface p-7 flex flex-col justify-between">
          <div>
            <h2 className="font-display font-semibold text-ink">Enterprise</h2>
            <p className="mt-1 text-sm text-ink-soft">For chains, 10+ stores</p>
            <p className="mt-5 font-display text-4xl font-bold text-ink">Custom</p>
            <Link
              href="/contact"
              className="btn-focus mt-6 block rounded-lg border border-line py-2.5 text-center text-sm font-semibold text-ink transition hover:border-brand/40"
            >
              Talk to sales
            </Link>
            <ul className="mt-6 space-y-3 text-sm text-ink-soft">
              <li className="flex gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg>
                Unlimited stores, volume pricing
              </li>
              <li className="flex gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg>
                SSO &amp; centralized billing
              </li>
              <li className="flex gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg>
                Uptime SLA
              </li>
              <li className="flex gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg>
                Dedicated migration support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
