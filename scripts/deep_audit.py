import os
import glob
import json
import re

html_files = sorted(glob.glob("./index.html") + glob.glob("./pages/**/*.html", recursive=True) + glob.glob("./templates/**/*.html", recursive=True))

report = {}

for filepath in html_files:
    if "dist/" in filepath:
        continue
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    file_issues = []
    is_partial = "header.html" in filepath or "footor.html" in filepath
    
    if not is_partial:
        # 1. Meta Viewport
        if not re.search(r'<meta\s+[^>]*name=["\']viewport["\']', content, re.IGNORECASE):
            file_issues.append("SEO ISSUE: Missing <meta name=\"viewport\">")

        # 2. Title Tag
        title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE | re.DOTALL)
        if not title_match:
            file_issues.append("SEO ISSUE: Missing <title> tag")
        else:
            title_text = title_match.group(1).strip()
            if not title_text:
                file_issues.append("SEO ISSUE: Empty <title> tag")
            elif len(title_text) > 70:
                file_issues.append(f"SEO WARNING: <title> too long ({len(title_text)} chars): '{title_text}'")

        # 3. Meta Description
        meta_desc = re.search(r'<meta\s+[^>]*name=["\']description["\'][^>]*content=["\']([^"\'\']+)["\']', content, re.IGNORECASE)
        if not meta_desc:
            file_issues.append("SEO ISSUE: Missing <meta name=\"description\">")
        else:
            desc_text = meta_desc.group(1).strip()
            if len(desc_text) > 170:
                file_issues.append(f"SEO WARNING: Meta description too long ({len(desc_text)} chars)")

        # 4. H1 Count & Content
        h1_matches = re.findall(r'<h1[^>]*>(.*?)</h1>', content, re.IGNORECASE | re.DOTALL)
        if len(h1_matches) == 0:
            file_issues.append("SEO ISSUE: Missing <h1> tag")
        elif len(h1_matches) > 1:
            file_issues.append(f"SEO ISSUE: Multiple ({len(h1_matches)}) <h1> tags found")

        # 5. Canonical Tag
        canonical_match = re.search(r'<link\s+[^>]*rel=["\']canonical["\'][^>]*href=["\']([^"\'\']+)["\']', content, re.IGNORECASE)
        if not canonical_match:
            file_issues.append("SEO ISSUE: Missing canonical tag (<link rel=\"canonical\">)")

        # 6. OpenGraph and Twitter Meta Tags
        og_title = re.search(r'<meta\s+[^>]*property=["\']og:title["\']', content, re.IGNORECASE)
        og_desc = re.search(r'<meta\s+[^>]*property=["\']og:description["\']', content, re.IGNORECASE)
        og_image = re.search(r'<meta\s+[^>]*property=["\']og:image["\']', content, re.IGNORECASE)
        og_url = re.search(r'<meta\s+[^>]*property=["\']og:url["\']', content, re.IGNORECASE)
        tw_card = re.search(r'<meta\s+[^>]*name=["\']twitter:card["\']', content, re.IGNORECASE)
        tw_title = re.search(r'<meta\s+[^>]*name=["\']twitter:title["\']', content, re.IGNORECASE)

        if not og_title: file_issues.append("SEO ISSUE: Missing og:title")
        if not og_desc: file_issues.append("SEO ISSUE: Missing og:description")
        if not og_image: file_issues.append("SEO ISSUE: Missing og:image")
        if not og_url: file_issues.append("SEO ISSUE: Missing og:url")
        if not tw_card: file_issues.append("SEO ISSUE: Missing twitter:card")
        if not tw_title: file_issues.append("SEO ISSUE: Missing twitter:title")

    # 7. JSON-LD Schemas Validation
    json_ld_blocks = re.findall(r'<script\s+type=["\']application/ld\+json["\']\s*>(.*?)</script>', content, re.DOTALL | re.IGNORECASE)
    if not is_partial and not json_ld_blocks:
        file_issues.append("SCHEMA ISSUE: No JSON-LD schema found on page")
    else:
        for idx, block in enumerate(json_ld_blocks):
            try:
                data = json.loads(block.strip())
                def check_schema(obj, path="root"):
                    if isinstance(obj, dict):
                        if "@type" not in obj and path != "root":
                            file_issues.append(f"SCHEMA ISSUE: JSON-LD block #{idx+1} object at '{path}' missing @type")
                        if "publisher" in obj:
                            pub = obj["publisher"]
                            if isinstance(pub, dict) and "@type" not in pub:
                                file_issues.append(f"SCHEMA ISSUE: JSON-LD block #{idx+1} 'publisher' object at '{path}' missing @type")
                        for k, v in obj.items():
                            check_schema(v, f"{path}.{k}")
                    elif isinstance(obj, list):
                        for i, item in enumerate(obj):
                            check_schema(item, f"{path}[{i}]")

                check_schema(data)

            except json.JSONDecodeError as e:
                file_issues.append(f"SCHEMA BUG: Invalid JSON syntax in block #{idx+1}: {e}")

    # 8. Content Placeholders
    placeholders = ["yourhandle", "yourcompany", "yourdomain", "twitter.com/yourhandle", "linkedin.com/company/yourcompany"]
    for ph in placeholders:
        if ph in content:
            file_issues.append(f"CONTENT BUG: Placeholder '{ph}' found")

    # 9. Images missing alt attributes
    img_matches = re.finditer(r'<img\s+([^>]+)>', content, re.IGNORECASE)
    for img in img_matches:
        img_attrs = img.group(1)
        if "alt=" not in img_attrs.lower():
            file_issues.append(f"SEO ISSUE: Image missing alt attribute: <img {img_attrs[:40]}...>")

    # 10. Links targeting non-existent files or anchors
    href_matches = re.finditer(r'href=["\']([^"\'#]+)(?:#([^"\']+))?["\']', content)
    for m in href_matches:
        href = m.group(1)
        if href.startswith(("http://", "https://", "mailto:", "tel:", "javascript:")):
            continue
        if href.startswith("/"):
            target_path = "." + href
        else:
            target_path = os.path.normpath(os.path.join(os.path.dirname(filepath), href))
        
        if not os.path.exists(target_path) and not os.path.exists(target_path + ".html") and not (target_path.endswith("/") and os.path.exists(target_path + "index.html")):
            file_issues.append(f"BROKEN LINK BUG: href='{href}' targets non-existent path '{target_path}'")

    if file_issues:
        report[filepath] = file_issues

print(f"=== DEEP AUDIT RESULTS ({len(report)} files with issues) ===\n")
for f, iss_list in report.items():
    print(f"File: {f}")
    for iss in iss_list:
        print(f"  • {iss}")
    print()
