import { describe, expect, it } from 'vitest';
import {
  compactLabel,
  labelFromSlug,
  pickVisualItems,
  technologyVisualForCategory,
  visualId,
} from '../../src/lib/visuals';

describe('visual helper data', () => {
  it('maps technology categories to educational diagram flows', () => {
    const electricDrive = technologyVisualForCategory('electric-drive');

    expect(electricDrive.flow).toEqual([
      'Stored electricity',
      'Power electronics',
      'Motor and charging loop',
    ]);
    expect(electricDrive.theme).toBe('Electric-drive energy path');
  });

  it('falls back to a neutral systems flow for unknown categories', () => {
    const fallback = technologyVisualForCategory('future-category');

    expect(fallback.flow).toEqual([
      'Inputs and constraints',
      'System mechanism',
      'Vehicle-level effect',
    ]);
  });

  it('keeps visible labels compact without hiding short labels', () => {
    expect(compactLabel('Engine Control Unit', 24)).toBe('Engine Control Unit');
    expect(compactLabel('software-defined-connected-vehicles', 18)).toBe(
      'software-defined…',
    );
  });

  it('converts metadata slugs and ids into readable labels', () => {
    expect(labelFromSlug('battery-management-system')).toBe(
      'Battery Management System',
    );
    expect(visualId('Battery Electric Vehicle!')).toBe(
      'visual-battery-electric-vehicle',
    );
  });

  it('selects a limited metadata sample with an editorial fallback', () => {
    expect(pickVisualItems(['a', 'b', 'c'], ['fallback'], 2)).toEqual([
      'a',
      'b',
    ]);
    expect(pickVisualItems([], ['fallback'], 2)).toEqual(['fallback']);
  });
});
