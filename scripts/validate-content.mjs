import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'yaml';

const contentRoot = path.resolve('src/content');
const sourcesText = await readFile(path.resolve('src/data/sources.ts'), 'utf8');
const sourceIds = new Set(
  [...sourcesText.matchAll(/id:\s*'([^']+)'/g)].map((match) => match[1]),
);
const collectionDirs = ['eras', 'technologies', 'vehicles', 'controversies'];

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

function slugForFile(filePath) {
  return path.basename(filePath).replace(/\.mdx?$/, '');
}

function readFrontmatter(text, filePath) {
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  if (!match) {
    throw new Error(`${filePath} is missing frontmatter`);
  }

  return parse(match[1]);
}

const slugsByCollection = new Map();
const frontmatterByFile = new Map();

for (const collection of collectionDirs) {
  const dir = path.join(contentRoot, collection);
  const files = await collectMarkdownFiles(dir);
  slugsByCollection.set(collection, new Set(files.map(slugForFile)));

  for (const file of files) {
    const text = await readFile(file, 'utf8');
    frontmatterByFile.set(file, readFrontmatter(text, file));
  }
}

const errors = [];

for (const [file, data] of frontmatterByFile.entries()) {
  for (const sourceId of data.sources ?? []) {
    if (!sourceIds.has(sourceId)) {
      errors.push(`${file} references unknown source "${sourceId}"`);
    }
  }

  const checks = [
    ['relatedTechnologies', 'technologies'],
    ['affectedTechnologies', 'technologies'],
    ['relatedVehicles', 'vehicles'],
    ['relatedEras', 'eras'],
    ['eras', 'eras'],
  ];

  for (const [field, collection] of checks) {
    if (!Array.isArray(data[field])) {
      continue;
    }

    const knownSlugs = slugsByCollection.get(collection);
    for (const slug of data[field]) {
      if (!knownSlugs.has(slug)) {
        errors.push(
          `${file} references unknown ${collection} slug "${slug}" in ${field}`,
        );
      }
    }
  }
}

if (errors.length > 0) {
  console.error('Content validation failed:');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(
  `Content validation passed for ${frontmatterByFile.size} articles.`,
);
