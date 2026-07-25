import os
import glob
import json
import re

html_files = sorted(glob.glob("./index.html") + glob.glob("./pages/**/*.html", recursive=True) + glob.glob("./templates/**/*.html", recursive=True))

print(f"Auditing {len(html_files)} HTML files...\n")

total_issues = 0

for filepath in html_files:
    if "dist/" in filepath:
        continue
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    file_issues = []
    
    # Exclude partial components like header.html and footor.html from page-level checks
    is_partial = "header.html" in filepath or "footor.html" in filepath
    
    if not is_partial:
        # 1. Title tag
        title_match = re.search(r"<title>(.*?)</title>", content, re.IGNORECASE | re.DOTALL)
        if not title_match:
            file_issues.append("SEO ISSUE: Missing <title> tag")
        elif not title_match.group(1).strip():
            file_issues.append("SEO ISSUE: Empty <title> tag")
        elif len(title_match.group(1).strip()) > 70:
            file_issues.append(f"SEO WARNING: Title tag very long ({len(title_match.group(1).strip())} chars): {title_match.group(1).strip()}")

        # 2. H1 Count
        h1_matches = re.findall(r"<h1[\s>]", content, re.IGNORECASE)
        if len(h1_matches) == 0:
            file_issues.append("SEO ISSUE: Missing <h1> tag")
        elif len(h1_matches) > 1:
            file_issues.append(f"SEO ISSUE: Multiple ({len(h1_matches)}) <h1> tags found")

        # 3. Canonical URL
        canonical_match = re.search(r'<link\s+[^>]*rel=["\']canonical["\'][^>]*>', content, re.IGNORECASE)
        if not canonical_match:
            file_issues.append("SEO ISSUE: Missing canonical tag (<link rel=\"canonical\">)")

        # 4. Meta Description
        meta_desc = re.search(r'<meta\s+[^>]*name=["\']description["\'][^>]*>', content, re.IGNORECASE)
        if not meta_desc:
            file_issues.append("SEO ISSUE: Missing <meta name=\"description\">")

        # 5. OpenGraph & Twitter tags
        og_title = re.search(r'<meta\s+[^>]*property=["\']og:title["\'][^>]*>', content, re.IGNORECASE)
        og_desc = re.search(r'<meta\s+[^>]*property=["\']og:description["\'][^>]*>', content, re.IGNORECASE)
        og_image = re.search(r'<meta\s+[^>]*property=["\']og:image["\'][^>]*>', content, re.IGNORECASE)
        og_url = re.search(r'<meta\s+[^>]*property=["\']og:url["\'][^>]*>', content, re.IGNORECASE)
        tw_card = re.search(r'<meta\s+[^>]*name=["\']twitter:card["\'][^>]*>', content, re.IGNORECASE)

        if not og_title: file_issues.append("SEO ISSUE: Missing og:title")
        if not og_desc: file_issues.append("SEO ISSUE: Missing og:description")
        if not og_image: file_issues.append("SEO ISSUE: Missing og:image")
        if not og_url: file_issues.append("SEO ISSUE: Missing og:url")
        if not tw_card: file_issues.append("SEO ISSUE: Missing twitter:card")

    # 6. JSON-LD Schemas Validation
    json_ld_blocks = re.findall(r'<script\s+type=["\']application/ld\+json["\']\s*>(.*?)</script>', content, re.DOTALL | re.IGNORECASE)
    if not is_partial and not json_ld_blocks:
        file_issues.append("SCHEMA ISSUE: No JSON-LD schema found on page")
    else:
        for idx, block in enumerate(json_ld_blocks):
            try:
                data = json.loads(block.strip())
                def check_schema_obj(obj, prefix=""):
                    if isinstance(obj, dict):
                        if "@type" not in obj:
                            file_issues.append(f"SCHEMA ISSUE: JSON-LD block #{idx+1} {prefix} missing @type")
                        # Check schema url formats or broken refs
                        for k, v in obj.items():
                            if isinstance(v, (dict, list)):
                                check_schema_obj(v, prefix=f"{prefix}.{k}")
                            elif isinstance(v, str) and ("yourdomain" in v or "yourcompany" in v or "yourhandle" in v):
                                file_issues.append(f"SCHEMA BUG: Placeholder ref '{v}' in property '{prefix}.{k}'")
                    elif isinstance(obj, list):
                        for item_idx, item in enumerate(obj):
                            check_schema_obj(item, prefix=f"{prefix}[{item_idx}]")

                check_schema_obj(data)

            except json.JSONDecodeError as e:
                file_issues.append(f"SCHEMA BUG: Invalid JSON syntax in block #{idx+1}: {e}")

    # 7. Check for placeholders
    placeholders = ["yourhandle", "yourcompany", "yourdomain", "TODO", "FIXME"]
    for ph in placeholders:
        if ph in content:
            file_issues.append(f"CONTENT BUG: Placeholder text '{ph}' found in file")

    # 8. Check for broken internal anchor or page links
    hrefs = re.findall(r'href=["\']([^"\'#]+)(?:#([^"\']+))?["\']', content)
    for href, anchor in hrefs:
        if href.startswith("http://") or href.startswith("https://") or href.startswith("mailto:") or href.startswith("tel:"):
            continue
        if href.startswith("/"):
            target_path = "." + href
        else:
            target_path = os.path.normpath(os.path.join(os.path.dirname(filepath), href))
        
        if not os.path.exists(target_path) and not os.path.exists(target_path + ".html"):
            file_issues.append(f"BROKEN LINK BUG: href='{href}' targets non-existent file path '{target_path}'")

    if file_issues:
        print(f"=== {filepath} ===")
        for iss in file_issues:
            print("  -", iss)
            total_issues += 1
        print()

print(f"Audit completed. Total issues found: {total_issues}")
