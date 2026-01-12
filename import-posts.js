const fs = require('fs');
const path = require('path');

// Read the CSV file
const csvPath = '/Users/kimberlybella/Downloads/Daily(ish) GenAI Newsletter - Sheet1.csv';
const csvContent = fs.readFileSync(csvPath, 'utf-8');

// Parse CSV (simple parser for this format)
const lines = csvContent.split('\n');
const headers = lines[0].split(',');

// Find column indexes
const getColumnIndex = (name) => {
  const index = headers.findIndex(h => h.toLowerCase().includes(name.toLowerCase()));
  return index >= 0 ? index : null;
};

const titleIndex = getColumnIndex('title');
const dateIndex = getColumnIndex('date');
const toolsIndex = getColumnIndex('tools');
const newsletterIndex = getColumnIndex('newsletter');
const headerIndex = getColumnIndex('website header');
const summaryIndex = getColumnIndex('website summary');

console.log('Column indexes:', { titleIndex, dateIndex, toolsIndex, newsletterIndex, headerIndex, summaryIndex });

// Helper function to parse CSV line (handles quoted fields)
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);

  return result;
}

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

// Process each row (skip header)
let postsCreated = 0;
for (let i = 1; i < lines.length; i++) {
  if (!lines[i].trim()) continue;

  const fields = parseCSVLine(lines[i]);

  if (fields.length < 6) continue; // Skip incomplete rows

  const title = fields[titleIndex]?.trim();
  const date = fields[dateIndex]?.trim();
  const tools = fields[toolsIndex]?.trim();
  const newsletter = fields[newsletterIndex]?.trim();
  const websiteHeader = fields[headerIndex]?.trim();
  const websiteSummary = fields[summaryIndex]?.trim();

  if (!title) continue;

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
