#!/usr/bin/env python3
import csv
import os
import re
from datetime import datetime

# Paths
csv_path = '/Users/kimberlybella/Downloads/Daily(ish) GenAI Newsletter - Sheet1.csv'
posts_dir = '/Users/kimberlybella/Library/Mobile Documents/com~apple~CloudDocs/Daily(ish) GenAI Experiments/dailyish-genai-experiments/posts'

# Create posts directory if it doesn't exist
os.makedirs(posts_dir, exist_ok=True)

def create_slug(title):
    """Create URL-friendly slug from title"""
    slug = title.lower()
    slug = re.sub(r'[^a-z0-9]+', '-', slug)
    slug = slug.strip('-')
    return slug

def format_date(date_str):
    """Convert date from M/D/YYYY to YYYY-MM-DD"""
    if not date_str:
        return datetime.now().strftime('%Y-%m-%d')

    try:
        parts = date_str.split('/')
        if len(parts) == 3:
            month, day, year = parts
            return f"{year}-{month.zfill(2)}-{day.zfill(2)}"
    except:
        pass

    return date_str

def extract_tags(tools_str):
    """Extract tool names as tags"""
    if not tools_str:
        return []

    tags = []
    tool_names = ['Claude', 'ChatGPT', 'Gemini', 'Perplexity', 'NotebookLM', 'DALL-E', 'Midjourney']

    for tool in tool_names:
        if tool.lower() in tools_str.lower():
            tags.append(tool)

    return tags

# Read CSV
posts_created = 0

with open(csv_path, 'r', encoding='utf-8') as file:
    # Use csv.reader to properly handle quoted fields
    reader = csv.DictReader(file)

    for row in reader:
        title = row.get('Title', '').strip()
        if not title:
            continue

        date = row.get('Date Published', '').strip()
        tools = row.get('Tools Tested', '').strip()
        newsletter = row.get('Newsletter', '').strip()
        website_header = row.get('Website Header', '').strip()
        website_summary = row.get('Website Summary', '').strip()

        # Create slug
        slug = create_slug(title)

        # Format date
        formatted_date = format_date(date)

        # Create excerpt
        excerpt = website_summary if website_summary else ''
        if not excerpt and newsletter:
            # Use first paragraph
            first_para = newsletter.split('\n\n')[0]
            excerpt = first_para[:200] + ('...' if len(first_para) > 200 else '')

        # Extract tags
        tags = extract_tags(tools)

        # Escape quotes in strings
        title_escaped = title.replace('"', '\\"')
        excerpt_escaped = excerpt.replace('"', '\\"').replace('\n', ' ')

        # Create markdown content
        content = f'''---
title: "{title_escaped}"
date: "{formatted_date}"
category: "Tool Comparison"
excerpt: "{excerpt_escaped}"
image: "/images/posts/{slug}.jpg"
tags: {tags}
---

{f"## {website_header}\n\n" if website_header else ""}

{newsletter if newsletter else "Content coming soon..."}

{f"\n\n## Tools Used\n\n{tools}\n" if tools else ""}
'''

        # Write to file
        file_path = os.path.join(posts_dir, f'{slug}.md')
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

        posts_created += 1
        print(f"✅ Created: {slug}.md")

print(f"\n🎉 Successfully created {posts_created} blog posts!")
print(f"\n📸 Next steps:")
print(f"   1. Add your cover images to: public/images/posts/")
print(f"   2. Name them to match the post slug: [post-name].jpg")
print(f"   3. Push to GitHub and your site will update automatically!")
