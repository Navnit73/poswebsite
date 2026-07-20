---
title: "Hello World: Our first blog post"
slug: "hello-world"
metaDescription: "This is a sample blog post showing how the dynamic markdown rendering works."
category: "Announcement"
date: "Aug 01, 2026"
readTime: 3
---

## Welcome to the new blog

This is the first dynamic blog post in our system. It is written completely in **Markdown** and automatically converted to an HTML page by our build script.

### Why Markdown?

Writing in Markdown allows you to focus on the content without worrying about the HTML structure. You can easily add:
- Bullet points
- **Bold text**
- [Links](/)
- Code blocks:

```javascript
console.log("Hello World");
```

> "The best inventory system is the one you actually use."

### What's next?

Whenever you want to add a new article, simply create a new `.md` file in the `content/blog/` directory with the frontmatter at the top (like this file), and run `npm run build:blog`. The index page and the post page will automatically be generated!
