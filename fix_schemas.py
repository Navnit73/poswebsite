import os
import json
import re

target_dir = '/Users/navnitrai/Desktop/pharmacy_pos'

def fix_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all json-ld blocks
    pattern = re.compile(r'(<script type="application/ld\+json">\s*)(.*?)(\s*</script>)', re.DOTALL)
    
    def replacer(match):
        prefix = match.group(1)
        json_str = match.group(2)
        suffix = match.group(3)
        
        try:
            data = json.loads(json_str)
        except json.JSONDecodeError:
            return match.group(0) # skip if invalid json
            
        # 1. Organization
        if data.get('@type') == 'Organization':
            if '@id' not in data:
                # Add @id right after @type if possible, but dict order is fine in Python 3.7+
                new_data = {}
                for k, v in data.items():
                    new_data[k] = v
                    if k == '@type':
                        new_data['@id'] = 'https://www.formulary.app/#organization'
                data = new_data
                
        # 2. WebSite
        if data.get('@type') == 'WebSite':
            data['publisher'] = { "@id": "https://www.formulary.app/#organization" }
            if 'potentialAction' not in data:
                data['potentialAction'] = {
                    "@type": "SearchAction",
                    "target": "https://www.formulary.app/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
                
        # 3. publisher link for others
        types_needing_publisher = [
            "SoftwareApplication", "Product", "WebPage", "FAQPage", 
            "AboutPage", "ContactPage", "CollectionPage", "Article", "BlogPosting"
        ]
        if data.get('@type') in types_needing_publisher:
            # Add publisher if not exists
            if 'publisher' not in data:
                data['publisher'] = { "@id": "https://www.formulary.app/#organization" }
                
        # 4. Remove aggregateRating from Product
        if data.get('@type') == 'Product':
            if 'aggregateRating' in data:
                del data['aggregateRating']

        # Format JSON with 2 spaces, and keep the script tag clean
        # Add a newline after { and before } to match typical formatting
        new_json_str = json.dumps(data, indent=2)
        # Indent everything by 2 spaces to match typical html spacing, except the first line which starts after prefix
        new_json_str = new_json_str.replace('\n', '\n  ')
        return prefix + new_json_str + suffix

    new_content = pattern.sub(replacer, content)
    
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file_path}")

for root, dirs, files in os.walk(target_dir):
    # skip node_modules etc if they exist
    if 'node_modules' in root or '.git' in root:
        continue
    for file in files:
        if file.endswith('.html'):
            fix_file(os.path.join(root, file))

print("Done")
