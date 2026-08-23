import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Pharmacy Software & Inventory Management Blog | Medishelf",
  description:
    "Guides, insights, and practical tips on pharmaceutical stock management, FEFO expiry reduction, POS efficiency, and GST compliance for medical store owners.",
  alternates: {
    canonical: "https://medishelf.co/blog",
  },
  openGraph: {
    type: "website",
    siteName: "Medishelf",
    title: "Pharmacy Software & Inventory Management Blog | Medishelf",
    description:
      "Guides, insights, and practical tips on pharmaceutical stock management, FEFO expiry reduction, and POS efficiency.",
    url: "https://medishelf.co/blog",
    images: [{ url: "/images/hero-pos.png", width: 1200, height: 630, alt: "Medishelf Pharmacy Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmacy Software & Inventory Management Blog | Medishelf",
    description: "Guides, insights, and practical tips on pharmaceutical stock management.",
    images: ["https://medishelf.co/images/hero-pos.png"],
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medishelf.co" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://medishelf.co/blog" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <section className="border-b border-line bg-surface py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <nav aria-label="Breadcrumb" className="label-tag text-xs text-ink-soft/70">
            <Link href="/" className="hover:text-brand-deep">Home</Link> <span aria-hidden="true">/</span> Blog
          </nav>
          <span className="label-tag mt-4 inline-block rounded-[var(--radius-label)] border border-brand/25 bg-brand-mist px-2.5 py-1 text-[11px] font-medium text-brand-deep">
            PHARMACY MANAGEMENT ARTICLES &amp; GUIDES
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Pharmacy Management &amp; Inventory Insights
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft leading-relaxed">
            Practical advice, strategies, and industry guides on using{" "}
            <Link href="/" className="font-semibold text-brand hover:underline">
              small pharmacy inventory software
            </Link>{" "}
            to stop expiry write-offs, speed up counter checkout, and grow retail dispensary profit margins.
          </p>
        </div>
      </section>

      {/* Featured Callout Banner linking to Homepage */}
      <section className="border-b border-line bg-paper py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-deep">
              Looking for modern pharmacy software?
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              Discover how{" "}
              <Link href="/" className="font-semibold text-ink hover:text-brand">
                Medishelf&apos;s all-in-one pharmacy inventory &amp; POS software
              </Link>{" "}
              helps small independent pharmacies manage stock, batch expiry, and counter sales.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <Link
              href="/"
              className="btn-focus rounded-lg border border-line bg-surface px-4 py-2 text-xs font-semibold text-ink transition hover:border-brand/40"
            >
              Explore Medishelf Home
            </Link>
            <Link
              href="/demo"
              className="btn-focus rounded-lg bg-brand px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-brand-deep"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {posts.length === 0 ? (
            <p className="text-center text-ink-soft">No blog posts found.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <ScrollReveal key={post.slug} className="h-full">
                  <Link href={`/blog/${post.slug}`} className="block h-full group">
                    <article className="group rounded-[var(--radius-card)] border border-line bg-surface transition hover:border-brand/30 hover:shadow-md h-full flex flex-col overflow-hidden">
                      <div className="h-44 bg-gradient-to-br from-brand-mist to-brand/20 shrink-0 flex items-center justify-center p-6 text-center">
                        <span className="font-display text-lg font-bold text-brand-deep opacity-80 group-hover:scale-105 transition-transform">
                          {post.title}
                        </span>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div>
                          <span className="label-tag rounded-full bg-brand-mist px-2.5 py-1 text-[11px] font-medium uppercase text-brand-deep">
                            {post.category}
                          </span>
                          <h2 className="mt-3 font-display text-lg font-semibold text-ink group-hover:text-brand-deep transition">
                            {post.title}
                          </h2>
                          <p className="mt-2 text-sm leading-relaxed text-ink-soft line-clamp-3">
                            {post.metaDescription}
                          </p>
                        </div>
                        <div className="mt-auto pt-6 flex items-center justify-between text-xs text-ink-soft/70 border-t border-line/40">
                          <span>{post.date}</span>
                          <span>{post.readTime} min read</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}

          {/* Bottom internal linking block */}
          <div className="mt-20 rounded-2xl border border-line bg-surface p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Take Control of Your Pharmacy Inventory Today
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
              Learn why hundreds of community chemists and independent drugstores choose{" "}
              <Link href="/" className="font-semibold text-brand hover:underline">
                Medishelf small pharmacy inventory software
              </Link>{" "}
              to eliminate expired stock, speed up customer billing, and keep shelf counts 100% accurate.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/"
                className="btn-focus rounded-lg border border-line bg-paper px-5 py-2.5 text-xs font-semibold text-ink transition hover:border-brand/40"
              >
                Learn About Medishelf
              </Link>
              <Link
                href="/inventory"
                className="btn-focus rounded-lg border border-line bg-paper px-5 py-2.5 text-xs font-semibold text-ink transition hover:border-brand/40"
              >
                Inventory Module
              </Link>
              <Link
                href="/sales"
                className="btn-focus rounded-lg border border-line bg-paper px-5 py-2.5 text-xs font-semibold text-ink transition hover:border-brand/40"
              >
                POS Billing Terminal
              </Link>
              <Link
                href="/demo"
                className="btn-focus rounded-lg bg-brand px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-brand-deep"
              >
                Start 7-Day Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
