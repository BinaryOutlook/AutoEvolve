import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'yaml';

const contentRoot = path.resolve('src/content');
const collectionNames = ['eras', 'technologies', 'vehicles', 'controversies'];
const publicStatuses = new Set([
  'published',
  'source-review',
  'technical-review',
  'needs-update',
]);
const strict = process.argv.includes('--strict');
const json = process.argv.includes('--json');

const standards = {
  eras: {
    label: 'Era',
    minSources: 3,
    targetSources: 6,
    minWords: 550,
    targetWords: 1200,
    maxReviewAgeDays: 1095,
    requiredHeadings: [/^Historical Context$/iu, /^Representative/iu],
  },
  technologies: {
    label: 'Technology',
    minSources: 2,
    targetSources: 5,
    minWords: 450,
    targetWords: 1000,
    maxReviewAgeDays: 730,
    requiredHeadings: [
      /^Definition$/iu,
      /^How It Works$/iu,
      /^Tradeoffs/iu,
      /^Study Next$/iu,
    ],
  },
  vehicles: {
    label: 'Vehicle example',
    minSources: 2,
    targetSources: 4,
    minWords: 500,
    targetWords: 900,
    maxReviewAgeDays: 1095,
    requiredHeadings: [
      /^Why It Is Included$/iu,
      /^Technologies Illustrated$/iu,
      /^Neutral Reading$/iu,
    ],
  },
  controversies: {
    label: 'Controversy',
    minSources: 3,
    targetSources: 6,
    minWords: 600,
    targetWords: 1200,
    maxReviewAgeDays: 365,
    requiredHeadings: [
      /^Summary$/iu,
      /^Historical Context$/iu,
      /^Findings/iu,
      /^Consequences$/iu,
    ],
  },
};

async function collectMarkdownFiles(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });

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
  return path.basename(filePath).replace(/\.mdx?$/u, '');
}

function readFrontmatter(text, filePath) {
  const match = text.match(/^---\n([\s\S]*?)\n---/u);

  if (!match) {
    throw new Error(`${filePath} is missing frontmatter`);
  }

  return parse(match[1]);
}

function articleBody(text) {
  return text.replace(/^---\n[\s\S]*?\n---/u, '').trim();
}

function wordCount(text) {
  return text
    .replace(/```[\s\S]*?```/gu, ' ')
    .replace(/\$\$[\s\S]*?\$\$/gu, ' ')
    .replace(/<[^>]+>/gu, ' ')
    .split(/\s+/u)
    .filter(Boolean).length;
}

function headings(text) {
  return [...text.matchAll(/^#{2,3}\s+(.+)$/gmu)].map((match) =>
    match[1].trim(),
  );
}

function countLinks(data) {
  return [
    'relatedTechnologies',
    'affectedTechnologies',
    'relatedVehicles',
    'relatedEras',
    'eras',
    'illustrates',
  ].reduce(
    (total, field) =>
      total + (Array.isArray(data[field]) ? data[field].length : 0),
    0,
  );
}

function daysSince(dateText) {
  const timestamp = Date.parse(dateText);

  if (Number.isNaN(timestamp)) {
    return Number.POSITIVE_INFINITY;
  }

  const now = Date.now();
  return Math.floor((now - timestamp) / 86_400_000);
}

function sourceTypeCounts(sourceText) {
  const types = [...sourceText.matchAll(/type:\s*'([^']+)'/gu)].map(
    (match) => match[1],
  );

  return Object.fromEntries(
    [...new Set(types)]
      .sort()
      .map((type) => [
        type,
        types.filter((candidate) => candidate === type).length,
      ]),
  );
}

const records = [];
const hardErrors = [];

for (const collection of collectionNames) {
  const files = await collectMarkdownFiles(path.join(contentRoot, collection));

  for (const file of files) {
    const text = await readFile(file, 'utf8');
    const data = readFrontmatter(text, file);
    const body = articleBody(text);
    const sourceCount = Array.isArray(data.sources) ? data.sources.length : 0;
    const headingList = headings(body);

    records.push({
      collection,
      file,
      headings: headingList,
      links: countLinks(data),
      public: publicStatuses.has(data.status),
      reviewAgeDays: daysSince(data.lastReviewed),
      slug: slugForFile(file),
      sourceCount,
      status: data.status ?? 'draft',
      title: data.title ?? slugForFile(file),
      wordCount: wordCount(body),
    });

    if (!data.lastReviewed) {
      hardErrors.push(`${file} is missing lastReviewed`);
    }

    if (sourceCount === 0) {
      hardErrors.push(`${file} has no sources`);
    }
  }
}

const sourceText = await readFile(path.resolve('src/data/sources.ts'), 'utf8');
const sourceIds = [...sourceText.matchAll(/id:\s*'([^']+)'/gu)].map(
  (match) => match[1],
);
const publicRecords = records.filter((record) => record.public);
const publishedRecords = records.filter(
  (record) => record.status === 'published',
);

const collectionSummary = Object.fromEntries(
  collectionNames.map((collection) => {
    const entries = records.filter(
      (record) => record.collection === collection,
    );
    const sourceTotal = entries.reduce(
      (total, record) => total + record.sourceCount,
      0,
    );
    const wordTotal = entries.reduce(
      (total, record) => total + record.wordCount,
      0,
    );

    return [
      collection,
      {
        averageSources: Number((sourceTotal / entries.length).toFixed(2)),
        averageWords: Math.round(wordTotal / entries.length),
        count: entries.length,
        statuses: Object.fromEntries(
          [...new Set(entries.map((entry) => entry.status))]
            .sort()
            .map((status) => [
              status,
              entries.filter((entry) => entry.status === status).length,
            ]),
        ),
      },
    ];
  }),
);

const floorRisks = publishedRecords.flatMap((record) => {
  const standard = standards[record.collection];
  const risks = [];

  if (record.sourceCount < standard.minSources) {
    risks.push(
      `${record.collection}/${record.slug} has ${record.sourceCount} sources; minimum is ${standard.minSources}`,
    );
  }

  if (record.wordCount < standard.minWords) {
    risks.push(
      `${record.collection}/${record.slug} has ${record.wordCount} words; minimum is ${standard.minWords}`,
    );
  }

  return risks;
});

const sectionGaps = publishedRecords.flatMap((record) => {
  const standard = standards[record.collection];
  const missingHeadings = standard.requiredHeadings.filter(
    (pattern) => !record.headings.some((heading) => pattern.test(heading)),
  );

  return missingHeadings.length > 0
    ? [
        `${record.collection}/${record.slug} may be missing ${missingHeadings.length} core section(s)`,
      ]
    : [];
});

const staleRecords = publicRecords.filter((record) => {
  const standard = standards[record.collection];
  return record.reviewAgeDays > standard.maxReviewAgeDays;
});

const targetGaps = publicRecords
  .filter((record) => {
    const standard = standards[record.collection];
    return (
      record.sourceCount < standard.targetSources ||
      record.wordCount < standard.targetWords
    );
  })
  .sort(
    (a, b) =>
      a.sourceCount - b.sourceCount ||
      a.wordCount - b.wordCount ||
      a.slug.localeCompare(b.slug),
  );

const leastSourced = [...publicRecords]
  .sort(
    (a, b) =>
      a.sourceCount - b.sourceCount ||
      a.wordCount - b.wordCount ||
      a.slug.localeCompare(b.slug),
  )
  .slice(0, 12);

const shortest = [...publicRecords]
  .sort(
    (a, b) =>
      a.wordCount - b.wordCount ||
      a.sourceCount - b.sourceCount ||
      a.slug.localeCompare(b.slug),
  )
  .slice(0, 12);

const reviewQueue = publicRecords
  .filter((record) => record.status !== 'published')
  .sort(
    (a, b) =>
      a.collection.localeCompare(b.collection) || a.slug.localeCompare(b.slug),
  );

const report = {
  collectionSummary,
  floorRisks,
  hardErrors,
  leastSourced,
  reviewQueue,
  sectionGaps,
  shortest,
  sourceLibrary: {
    records: sourceIds.length,
    uniqueRecords: new Set(sourceIds).size,
    types: sourceTypeCounts(sourceText),
  },
  staleRecords,
  targetGaps: targetGaps.slice(0, 25),
  totals: {
    articles: records.length,
    publicArticles: publicRecords.length,
    publishedArticles: publishedRecords.length,
    sourceRecords: sourceIds.length,
  },
};

function line(text = '') {
  process.stdout.write(`${text}\n`);
}

function printRecord(record) {
  return `${record.collection}/${record.slug} (${record.status}, ${record.wordCount} words, ${record.sourceCount} sources)`;
}

if (json) {
  line(JSON.stringify(report, null, 2));
} else {
  line('AutoEvolve encyclopedia quality audit');
  line('======================================');
  line(
    `Articles: ${report.totals.articles} total, ${report.totals.publicArticles} public, ${report.totals.publishedArticles} published`,
  );
  line(
    `Source library: ${report.sourceLibrary.records} records, ${report.sourceLibrary.uniqueRecords} unique IDs`,
  );
  line();
  line('Collection summary');
  for (const [collection, summary] of Object.entries(collectionSummary)) {
    line(
      `- ${collection}: ${summary.count} articles, avg ${summary.averageWords} words, avg ${summary.averageSources} sources`,
    );
  }
  line();
  line('Source types');
  for (const [type, count] of Object.entries(report.sourceLibrary.types)) {
    line(`- ${type}: ${count}`);
  }
  line();
  line('Published floor risks');
  if (floorRisks.length === 0) {
    line('- None');
  } else {
    for (const risk of floorRisks.slice(0, 25)) {
      line(`- ${risk}`);
    }
    if (floorRisks.length > 25) {
      line(`- ... ${floorRisks.length - 25} more`);
    }
  }
  line();
  line('Published section-shape gaps, first 25');
  if (sectionGaps.length === 0) {
    line('- None');
  } else {
    for (const gap of sectionGaps.slice(0, 25)) {
      line(`- ${gap}`);
    }
    if (sectionGaps.length > 25) {
      line(`- ... ${sectionGaps.length - 25} more`);
    }
  }
  line();
  line('Least-sourced public articles');
  for (const record of leastSourced) {
    line(`- ${printRecord(record)}`);
  }
  line();
  line('Shortest public articles');
  for (const record of shortest) {
    line(`- ${printRecord(record)}`);
  }
  line();
  line('Public review queue');
  if (reviewQueue.length === 0) {
    line('- None');
  } else {
    for (const record of reviewQueue.slice(0, 20)) {
      line(`- ${printRecord(record)}`);
    }
    if (reviewQueue.length > 20) {
      line(`- ... ${reviewQueue.length - 20} more`);
    }
  }
  line();
  line('Professional target gaps, first 25');
  for (const record of report.targetGaps) {
    const standard = standards[record.collection];
    line(
      `- ${printRecord(record)}; target ${standard.targetWords} words and ${standard.targetSources} sources`,
    );
  }
  if (targetGaps.length > report.targetGaps.length) {
    line(`- ... ${targetGaps.length - report.targetGaps.length} more`);
  }
  line();
  line('Stale public articles');
  if (staleRecords.length === 0) {
    line('- None');
  } else {
    for (const record of staleRecords) {
      line(
        `- ${printRecord(record)}; reviewed ${record.reviewAgeDays} days ago`,
      );
    }
  }
  line();
  line('Hard errors');
  if (hardErrors.length === 0) {
    line('- None');
  } else {
    for (const error of hardErrors) {
      line(`- ${error}`);
    }
  }
}

if (
  strict &&
  (hardErrors.length > 0 || floorRisks.length > 0 || staleRecords.length > 0)
) {
  process.exitCode = 1;
}
