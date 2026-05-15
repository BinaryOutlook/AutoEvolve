import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const contentRoot = path.resolve('src/content');
const flaggedTerms = [
  'best',
  'worst',
  'legendary',
  'iconic',
  'game-changing',
  'revolutionary',
  'must-buy',
  'beautiful',
  'ugly',
  'superior',
  'inferior',
];

async function collectMarkdownFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectMarkdownFiles(fullPath)));
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      files.push(fullPath);
    }
  }

  return files;
}

const files = await collectMarkdownFiles(contentRoot);
const warnings = [];

for (const file of files) {
  const lines = (await readFile(file, 'utf8')).split('\n');

  lines.forEach((line, index) => {
    const normalized = line.toLowerCase();
    for (const term of flaggedTerms) {
      if (normalized.includes(term)) {
        warnings.push(
          `${file}:${index + 1} contains review-like term "${term}"`,
        );
      }
    }
  });
}

if (warnings.length > 0) {
  console.warn('Editorial language warnings:');
  for (const warning of warnings) {
    console.warn(`- ${warning}`);
  }
} else {
  console.log('Editorial language check passed without warnings.');
}
