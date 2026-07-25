import os
import glob
import json
import re

# 1. Update fix_schemas.py
fix_schemas_path = "./fix_schemas.py"
if os.path.exists(fix_schemas_path):
    with open(fix_schemas_path, "r", encoding="utf-8") as f:
        code = f.read()
    code = code.replace('{ "@id": "https://medishelf.co/#organization" }', '{ "@type": "Organization", "@id": "https://medishelf.co/#organization" }')
    code = code.replace("target_dir = '/Users/navnitrai/Desktop/pharmacy_pos'", "target_dir = os.path.dirname(os.path.abspath(__file__))")
    with open(fix_schemas_path, "w", encoding="utf-8") as f:
        f.write(code)

# 2. Update scripts/build-blog.js to handle {{slug}}
build_blog_path = "./scripts/build-blog.js"
if os.path.exists(build_blog_path):
    with open(build_blog_path, "r", encoding="utf-8") as f:
        code = f.read()
    if ".replace(/{{slug}}/g, slug)" not in code:
        code = code.replace(".replace(/{{readTime}}/g, data.readTime ? `${data.readTime} min read` : '')", ".replace(/{{readTime}}/g, data.readTime ? `${data.readTime} min read` : '')\n    .replace(/{{slug}}/g, slug)")
        with open(build_blog_path, "w", encoding="utf-8") as f:
            f.write(code)

# 3. Update templates/blog-post.html
template_path = "./templates/blog-post.html"
if os.path.exists(template_path):
    with open(template_path, "r", encoding="utf-8") as f:
        tmpl = f.read()
    
    # Replace placeholder handle
    tmpl = tmpl.replace('<meta name="twitter:site" content="@yourhandle" />', '')
    
    # Add canonical & OG tags if missing
    old_meta = '<link rel="alternate" hreflang="en" href="https://medishelf.co/blog-post" />'
    new_meta = """<link rel="canonical" href="https://medishelf.co/pages/blog/{{slug}}.html" />
  <meta property="og:site_name" content="Medishelf" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{{title}} | Medishelf Blog" />
  <meta property="og:description" content="{{metaDescription}}" />
  <meta property="og:url" content="https://medishelf.co/pages/blog/{{slug}}.html" />
  <meta name="twitter:title" content="{{title}} | Medishelf Blog" />
  <meta name="twitter:description" content="{{metaDescription}}" />
  <link rel="alternate" hreflang="en" href="https://medishelf.co/pages/blog/{{slug}}.html" />"""
    
    tmpl = tmpl.replace(old_meta, new_meta)
    
    # Fix publisher schema
    tmpl = tmpl.replace('"publisher": {\n      "@id": "https://medishelf.co/#organization"\n    }', '"publisher": {\n      "@type": "Organization",\n      "@id": "https://medishelf.co/#organization"\n    }')
    tmpl = tmpl.replace('"publisher": {\n      "@id": "https://medishelf.co/#organization"\n    }', '"publisher": {\n      "@type": "Organization",\n      "@id": "https://medishelf.co/#organization"\n    }')
    
    with open(template_path, "w", encoding="utf-8") as f:
        f.write(tmpl)

# 4. Fix index.html trailing comma & placeholders & publisher schemas
index_path = "./index.html"
if os.path.exists(index_path):
    with open(index_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Fix trailing comma before ] in JSON-LD
    content = re.sub(r',\s*\]\s*\}\s*</script>', r'\n    ]\n  }\n  </script>', content)
    
    # Remove twitter:site placeholder
    content = content.replace('<meta name="twitter:site" content="@yourhandle" />', '')
    
    # Remove sameAs placeholder links if any
    content = content.replace('"https://twitter.com/yourhandle",', '')
    content = content.replace('"https://linkedin.com/company/yourcompany"', '')
    content = content.replace(',\n    "sameAs": [\n      \n    ]', '')
    content = re.sub(r'"sameAs":\s*\[\s*\]', '', content)

    # Fix publisher @type
    content = content.replace('"publisher": {\n      "@id": "https://medishelf.co/#organization"\n    }', '"publisher": {\n      "@type": "Organization",\n      "@id": "https://medishelf.co/#organization"\n    }')
    content = content.replace('"publisher": { "@id": "https://medishelf.co/#organization" }', '"publisher": { "@type": "Organization", "@id": "https://medishelf.co/#organization" }')

    with open(index_path, "w", encoding="utf-8") as f:
        f.write(content)

# 5. Fix all files in pages/ directory
pages_files = glob.glob("./pages/**/*.html", recursive=True)
for pfile in pages_files:
    with open(pfile, "r", encoding="utf-8") as f:
        pcontent = f.read()
    
    orig = pcontent
    
    # Fix publisher @type in JSON-LD
    pcontent = pcontent.replace('"publisher": {\n      "@id": "https://medishelf.co/#organization"\n    }', '"publisher": {\n      "@type": "Organization",\n      "@id": "https://medishelf.co/#organization"\n    }')
    pcontent = pcontent.replace('"publisher": { "@id": "https://medishelf.co/#organization" }', '"publisher": { "@type": "Organization", "@id": "https://medishelf.co/#organization" }')
    pcontent = pcontent.replace('"publisher": {\n        "@id": "https://medishelf.co/#organization"\n      }', '"publisher": {\n        "@type": "Organization",\n        "@id": "https://medishelf.co/#organization"\n      }')

    # Remove placeholders
    pcontent = pcontent.replace('<meta name="twitter:site" content="@yourhandle" />', '')
    pcontent = pcontent.replace('"https://twitter.com/yourhandle",', '')
    pcontent = pcontent.replace('"https://linkedin.com/company/yourcompany"', '')

    # Fix missing twitter:title and twitter:description in legal pages if missing
    if "<meta name=\"twitter:title\"" not in pcontent and "<meta property=\"og:title\"" in pcontent:
        og_t_match = re.search(r'<meta\s+property=["\']og:title["\']\s+content=["\']([^"\'\']+)["\']', pcontent)
        og_d_match = re.search(r'<meta\s+property=["\']og:description["\']\s+content=["\']([^"\'\']+)["\']', pcontent)
        if og_t_match and og_d_match:
            t_title = og_t_match.group(1)
            t_desc = og_d_match.group(1)
            tw_tags = f'<meta name="twitter:card" content="summary_large_image" />\n  <meta name="twitter:title" content="{t_title}" />\n  <meta name="twitter:description" content="{t_desc}" />'
            pcontent = pcontent.replace('<meta property="og:image"', tw_tags + '\n  <meta property="og:image"')

    if pcontent != orig:
        with open(pfile, "w", encoding="utf-8") as f:
            f.write(pcontent)
        print(f"Updated {pfile}")

print("Fix script completed.")
