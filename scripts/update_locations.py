import os, glob

replacements = [
    # Contact & Footer
    ("Pune, Maharashtra, India", "Austin, Texas, United States"),
    ("+91 12345 67890", "+1 (555) 234-5678"),
    ("+91-12345-67890", "+1-555-234-5678"),
    ("tel:+911234567890", "tel:+15552345678"),

    # Homepage Testimonial
    ("independent pharmacy · Pune", "independent pharmacy · Austin, TX"),
    ("Store Manager, Pune", "Store Manager, Austin"),

    # Demo page
    ("Pharmacist owner, Hyderabad", "Pharmacist owner, Chicago, IL"),

    # Case Studies
    ("INDEPENDENT PHARMACY · PUNE", "INDEPENDENT PHARMACY · AUSTIN, TX"),
    ("Kothrud, Pune", "Downtown Austin, TX"),
    ("SMALL CHAIN · BANGALORE", "SMALL CHAIN · SEATTLE, WA"),
    ("Bangalore — Jayanagar, Indiranagar and HSR Layout", "Seattle, WA — Capitol Hill, Ballard and Bellevue"),
    ("single counter in Pune, a three-store chain in Bangalore", "single counter in Austin, a three-store chain in Seattle"),

    # TMC Terms & Governing Law
    ("These terms are governed by the laws of India. Any disputes will be resolved through binding arbitration in Pune, Maharashtra, under the Arbitration and Conciliation Act, 1996",
     "These terms are governed by the laws of the State of Delaware, United States. Any disputes will be resolved through binding arbitration in Wilmington, Delaware, under the rules of the American Arbitration Association"),
]

files = sorted(glob.glob("./index.html") + glob.glob("./README.md") + glob.glob("./pages/**/*.html", recursive=True) + glob.glob("./templates/**/*.html", recursive=True))

for filepath in files:
    if "dist/" in filepath:
        continue
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    orig = content
    for old_val, new_val in replacements:
        content = content.replace(old_val, new_val)
    
    if content != orig:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated locations in {filepath}")

print("Locations update complete.")
