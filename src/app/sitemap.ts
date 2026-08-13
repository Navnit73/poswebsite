import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://medishelf.co";

  const staticPages = [
    "",
    "/aboutus",
    "/blog",
    "/casestudy",
    "/contact",
    "/demo",
    "/features",
    "/inventory",
    "/pricing",
    "/privacy",
    "/refundPolicy",
    "/sales",
    "/tmc",
  ];

  const routes: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/features" || route === "/pricing" ? 0.9 : 0.8,
  }));

  const posts = getAllPosts();
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.parsedDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...routes, ...blogRoutes];
}
