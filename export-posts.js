const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDirectory = path.join(__dirname, 'posts');
const postFiles = fs.readdirSync(postsDirectory);

// CSV header
let csv = 'title,date,category,excerpt,image,tags,slug\n';

postFiles.forEach(filename => {
  if (!filename.endsWith('.md')) return;

  const filePath = path.join(postsDirectory, filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);

  const slug = filename.replace(/\.md$/, '');

  // Escape quotes and commas for CSV
  const escapeCSV = (str) => {
    if (!str) return '';
    str = String(str);
    if (str.includes(',') || str.includes('"') || str.includes('\n')) {
      return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
  };

  const row = [
    escapeCSV(data.title || ''),
    escapeCSV(data.date || ''),
    escapeCSV(data.category || ''),
    escapeCSV(data.excerpt || ''),
    escapeCSV(data.image || ''),
    escapeCSV(data.tags ? data.tags.join(', ') : ''),
    escapeCSV(slug)
  ].join(',');

  csv += row + '\n';
});

// Write to CSV file
fs.writeFileSync(path.join(__dirname, 'posts-export.csv'), csv);
console.log('Posts exported to posts-export.csv');
