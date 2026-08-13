import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  date: string;
  readTime: number;
  contentHtml: string;
  parsedDate: Date;
}

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  const files = fs.readdirSync(CONTENT_DIR).filter((file) => file.endsWith(".md"));
  const posts: BlogPost[] = [];

  for (const file of files) {
    const filePath = path.join(CONTENT_DIR, file);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const parsed = matter(fileContent);
    const data = parsed.data;
    const slug = data.slug || file.replace(/\.md$/, "");
    const contentHtml = marked.parse(parsed.content) as string;

    posts.push({
      slug,
      title: data.title || "Untitled",
      metaDescription: data.metaDescription || data.description || "",
      category: data.category || "Update",
      date: data.date || "",
      readTime: Number(data.readTime) || 5,
      contentHtml,
      parsedDate: new Date(data.date || Date.now()),
    });
  }

  return posts.sort((a, b) => b.parsedDate.getTime() - a.parsedDate.getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug);
}
