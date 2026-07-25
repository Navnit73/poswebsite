import os
import glob

ga_script = """  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-KLHGBEKNMQ"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-KLHGBEKNMQ');
  </script>
</head>"""

html_files = sorted(glob.glob("./index.html") + glob.glob("./pages/**/*.html", recursive=True) + glob.glob("./templates/**/*.html", recursive=True))

count = 0
for filepath in html_files:
    if "dist/" in filepath or "header.html" in filepath or "footor.html" in filepath:
        continue
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    if "G-KLHGBEKNMQ" in content:
        print(f"Skipping {filepath} (GA tag already present)")
        continue
    
    if "</head>" in content:
        new_content = content.replace("</head>", ga_script, 1)
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Added Google Analytics to {filepath}")
        count += 1

print(f"\nDone! Google Analytics tag added to {count} files.")
