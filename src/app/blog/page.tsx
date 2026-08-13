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
    images: ["/images/hero-pos.png"],
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="border-b border-line bg-surface py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <nav aria-label="Breadcrumb" className="label-tag text-xs text-ink-soft/70">
            <Link href="/" className="hover:text-brand-deep">Home</Link> <span aria-hidden="true">/</span> Blog
          </nav>
          <span className="label-tag mt-4 inline-block rounded-[var(--radius-label)] border border-brand/25 bg-brand-mist px-2.5 py-1 text-[11px] font-medium text-brand-deep">
            PHARMACY MANAGEMENT ARTICLES &amp; GUIDES
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Insights for Modern Pharmacy Owners
          </h1>
          <p className="mt-4 text-lg text-ink-soft leading-relaxed">
            Practical advice on reducing drug expiry write-offs, speeding up POS counters, and growing retail medicine profit margins.
          </p>
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
        </div>
      </section>
    </>
  );
}
