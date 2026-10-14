const REGISTER_URL = "https://core.medishelf.co/auth/register";

const FEATURES = [
  "Unlimited staff logins",
  "Batch & expiry tracking with FEFO billing",
  "POS terminal & invoices",
  "All report types + daily PDF email",
  "Custom roles & permissions",
  "Full audit log & activity history",
  "Free onboarding & email support",
];

export default function PricingPlan() {
  return (
    <div className="mx-auto max-w-md rounded-[var(--radius-card)] border-2 border-brand bg-surface p-8 shadow-md">
      <h2 className="font-display font-semibold text-ink">Medishelf</h2>
      <p className="mt-1 text-sm text-ink-soft">One simple plan, everything included</p>
      <p className="mt-5 font-display text-5xl font-bold text-ink">
        $49<span className="text-base font-normal text-ink-soft">/month</span>
      </p>
      <a
        href={REGISTER_URL}
        className="btn-focus mt-6 block rounded-full bg-brand py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-deep"
      >
        Register
      </a>
      <ul className="mt-6 space-y-3 text-sm text-ink-soft">
        {FEATURES.map((feature) => (
          <li key={feature} className="flex gap-2.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand"><path d="M20 6L9 17l-5-5"/></svg>
            {feature}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-center text-xs text-ink-soft">No setup fees, no per-transaction charges, cancel anytime.</p>
    </div>
  );
}
