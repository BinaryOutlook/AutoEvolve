import { describe, expect, it } from 'vitest';
import { glossaryTerms } from '../../src/data/glossary';
import { milestones } from '../../src/data/milestones';
import { sources } from '../../src/data/sources';

describe('archive data', () => {
  it('keeps source identifiers unique', () => {
    const ids = sources.map((source) => source.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('ships with a useful starter glossary', () => {
    expect(glossaryTerms.length).toBeGreaterThanOrEqual(30);
    expect(
      glossaryTerms.some((term) => term.slug === 'regenerative-braking'),
    ).toBe(true);
  });

  it('keeps milestone source references resolvable', () => {
    const sourceIds = new Set(sources.map((source) => source.id));
    for (const milestone of milestones) {
      expect(
        milestone.sources.every((sourceId) => sourceIds.has(sourceId)),
      ).toBe(true);
    }
  });
});
