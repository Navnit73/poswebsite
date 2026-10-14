import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://medishelf.co";

  const staticPages: { route: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] = [
    { route: "", priority: 1.0, changeFrequency: "daily" },
    { route: "/features", priority: 0.95, changeFrequency: "weekly" },
    { route: "/inventory", priority: 0.9, changeFrequency: "weekly" },
    { route: "/sales", priority: 0.9, changeFrequency: "weekly" },
    { route: "/pricing", priority: 0.9, changeFrequency: "weekly" },
    { route: "/demo", priority: 0.85, changeFrequency: "weekly" },
    { route: "/casestudy", priority: 0.85, changeFrequency: "monthly" },
    { route: "/blog", priority: 0.85, changeFrequency: "daily" },
    { route: "/aboutus", priority: 0.7, changeFrequency: "monthly" },
    { route: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { route: "/privacy", priority: 0.5, changeFrequency: "monthly" },
    { route: "/refundPolicy", priority: 0.5, changeFrequency: "monthly" },
    { route: "/tmc", priority: 0.5, changeFrequency: "monthly" },
    { route: "/faq", priority: 0.75, changeFrequency: "monthly" },
    { route: "/support", priority: 0.6, changeFrequency: "monthly" },
    { route: "/security", priority: 0.6, changeFrequency: "monthly" },
    { route: "/legal", priority: 0.5, changeFrequency: "monthly" },
    { route: "/editorial-policy", priority: 0.5, changeFrequency: "monthly" },
    { route: "/accessibility", priority: 0.4, changeFrequency: "monthly" },
    { route: "/cookie-policy", priority: 0.4, changeFrequency: "monthly" },
    { route: "/acceptable-use", priority: 0.4, changeFrequency: "monthly" },
    { route: "/disclaimer", priority: 0.4, changeFrequency: "monthly" },
  ];

  const routes: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page.route}`,
    lastModified: new Date("2026-08-20T00:00:00.000Z"),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const posts = getAllPosts();
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.parsedDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...routes, ...blogRoutes];
}

