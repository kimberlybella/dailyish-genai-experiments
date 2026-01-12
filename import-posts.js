const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

// Read the CSV file
const csvPath = '/Users/kimberlybella/Downloads/Daily(ish) GenAI Newsletter - Sheet1.csv';
const csvContent = fs.readFileSync(csvPath, 'utf-8');

// Parse CSV properly with csv-parse library
const records = parse(csvContent, {
  columns: true,
  skip_empty_lines: true,
  relax_quotes: true,
});

console.log(`Found ${records.length} records to process`);

// Helper to create slug from title
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Helper to format date
function formatDate(dateStr) {
  if (!dateStr) return new Date().toISOString().split('T')[0];

  const parts = dateStr.split('/');
  if (parts.length === 3) {
    const month = parts[0].padStart(2, '0');
    const day = parts[1].padStart(2, '0');
    const year = parts[2];
    return `${year}-${month}-${day}`;
  }
  return dateStr;
}

// Process each row
let postsCreated = 0;

for (const row of records) {
  const title = row['Title']?.trim();
  if (!title) continue;

  const date = row['Date Published']?.trim();
  const tools = row['Tools Tested']?.trim();
  const newsletter = row['Newsletter']?.trim();
  const websiteHeader = row['Website Header']?.trim();
  const websiteSummary = row['Website Summary']?.trim();

  const slug = createSlug(title);
  const formattedDate = formatDate(date);

  // Use website summary if available, otherwise use first paragraph of newsletter
  let excerpt = websiteSummary || '';
  if (!excerpt && newsletter) {
    const firstPara = newsletter.split('\n\n')[0];
    excerpt = firstPara.substring(0, 200) + (firstPara.length > 200 ? '...' : '');
  }

  // Extract tool names for tags
  const toolTags = [];
  if (tools) {
    if (tools.includes('Claude')) toolTags.push('Claude');
    if (tools.includes('ChatGPT')) toolTags.push('ChatGPT');
    if (tools.includes('Gemini')) toolTags.push('Gemini');
    if (tools.includes('Perplexity')) toolTags.push('Perplexity');
    if (tools.includes('NotebookLM')) toolTags.push('NotebookLM');
  }

  // Create markdown content
  const content = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${formattedDate}"
category: "Tool Comparison"
excerpt: "${excerpt.replace(/"/g, '\\"').replace(/\n/g, ' ')}"
image: "/images/posts/${slug}.jpg"
tags: ${JSON.stringify(toolTags)}
---

${websiteHeader ? `## ${websiteHeader}\n\n` : ''}

${newsletter || 'Content coming soon...'}

${tools ? `\n\n## Tools Used\n\n${tools}\n` : ''}
`;

  // Write to file
  const postsDir = path.join(__dirname, 'posts');
  if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(postsDir, { recursive: true });
  }

  const filePath = path.join(postsDir, `${slug}.md`);
  fs.writeFileSync(filePath, content);

  postsCreated++;
  console.log(`✅ Created: ${slug}.md`);
}

console.log(`\n🎉 Successfully created ${postsCreated} blog posts!`);
console.log(`\n📸 Image placeholders created at: /images/posts/[post-name].jpg`);
console.log(`   Add your images to: public/images/posts/`);
