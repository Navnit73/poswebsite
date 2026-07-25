import os
import glob

clarity_script = """  <!-- Microsoft Clarity -->
  <script type="text/javascript">
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "xrutgigzx0");
  </script>
</head>"""

html_files = sorted(glob.glob("./index.html") + glob.glob("./pages/**/*.html", recursive=True) + glob.glob("./templates/**/*.html", recursive=True))

count = 0
for filepath in html_files:
    if "dist/" in filepath or "header.html" in filepath or "footor.html" in filepath:
        continue
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    if "xrutgigzx0" in content:
        print(f"Skipping {filepath} (Clarity script already present)")
        continue
    
    if "</head>" in content:
        new_content = content.replace("</head>", clarity_script, 1)
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Added Clarity to {filepath}")
        count += 1

print(f"\nDone! Clarity script added to {count} files.")
