import { describe, expect, it } from 'vitest';
import { glossaryTerms } from '../../src/data/glossary';
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

  it('keeps the source library populated for cited archive pages', () => {
    expect(sources.length).toBeGreaterThanOrEqual(10);
  });
});
