const fs = require('fs');
const path = require('path');
const marked = require('marked');
const matter = require('gray-matter');

const CONTENT_DIR = path.join(__dirname, '../content/blog');
const PAGES_DIR = path.join(__dirname, '../pages/blog');
const TEMPLATE_FILE = path.join(__dirname, '../templates/blog-post.html');
const BLOG_INDEX_FILE = path.join(__dirname, '../pages/blog.html');

// Ensure output directory exists
if (!fs.existsSync(PAGES_DIR)) {
  fs.mkdirSync(PAGES_DIR, { recursive: true });
}

const template = fs.readFileSync(TEMPLATE_FILE, 'utf8');

const files = fs.readdirSync(CONTENT_DIR).filter(file => file.endsWith('.md'));
const posts = [];

// Process each markdown file
for (const file of files) {
  const markdown = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8');
  const parsed = matter(markdown);
  
  const content = marked.parse(parsed.content);
  const data = parsed.data;
  
  const slug = data.slug || file.replace('.md', '');
  
  posts.push({
    ...data,
    slug,
    // Add date parsing for sorting
    parsedDate: new Date(data.date || Date.now())
  });
  
  let html = template
    .replace(/{{title}}/g, data.title || 'Untitled')
    .replace(/{{metaDescription}}/g, data.metaDescription || data.description || '')
    .replace(/{{category}}/g, data.category || 'Update')
    .replace(/{{date}}/g, data.date || '')
    .replace(/{{readTime}}/g, data.readTime ? `${data.readTime} min read` : '')
    .replace(/{{content}}/g, content);
    
  fs.writeFileSync(path.join(PAGES_DIR, `${slug}.html`), html);
  console.log(`Built ${slug}.html`);
}

// Sort posts by date descending
posts.sort((a, b) => b.parsedDate - a.parsedDate);

// Generate blog index grid
let gridHtml = '';
for (const post of posts) {
  gridHtml += `
          <a href="/pages/blog/${post.slug}.html" class="block">
            <article class="group rounded-[var(--radius-card)] border border-line bg-surface transition hover:border-brand/30 hover:shadow-sm h-full flex flex-col" data-reveal>
              <div class="h-44 rounded-t-[var(--radius-card)] bg-gradient-to-br from-brand-mist to-brand/10 shrink-0"></div>
              <div class="p-6 flex flex-col flex-1">
                <div>
                  <span class="label-tag rounded-full bg-brand-mist px-2.5 py-1 text-[11px] font-medium text-brand-deep uppercase">${post.category || 'Update'}</span>
                  <h2 class="mt-3 font-display text-lg font-semibold text-ink group-hover:text-brand-deep transition">${post.title || 'Untitled'}</h2>
                  <p class="mt-2 text-sm leading-relaxed text-ink-soft line-clamp-3">${post.description || post.metaDescription || ''}</p>
                </div>
                <div class="mt-auto pt-4 flex items-center justify-between text-xs text-ink-soft/70">
                  <span>${post.date || ''}</span>
                  <span>${post.readTime ? post.readTime + ' min read' : ''}</span>
                </div>
              </div>
            </article>
          </a>
`;
}

// Update blog.html
let blogIndex = fs.readFileSync(BLOG_INDEX_FILE, 'utf8');
const START_MARKER = '<!-- BLOG_GRID_START -->';
const END_MARKER = '<!-- BLOG_GRID_END -->';

const startIndex = blogIndex.indexOf(START_MARKER);
const endIndex = blogIndex.indexOf(END_MARKER);

if (startIndex !== -1 && endIndex !== -1) {
  const before = blogIndex.substring(0, startIndex + START_MARKER.length);
  const after = blogIndex.substring(endIndex);
  blogIndex = before + '\n' + gridHtml + '\n          ' + after;
  fs.writeFileSync(BLOG_INDEX_FILE, blogIndex);
  console.log('Updated blog.html index.');
} else {
  console.error('Could not find BLOG_GRID_START or BLOG_GRID_END in pages/blog.html');
}

console.log('Blog build complete!');
