import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import {
  compactLabel,
  labelFromSlug,
  pickVisualItems,
  technologyVisualForSlug,
  technologyVisuals,
  visualId,
  wrapLabel,
} from '../../src/lib/visuals';

const technologyContentDirectory = fileURLToPath(
  new URL('../../src/content/technologies/', import.meta.url),
);

const technologyPageSlugs = readdirSync(technologyContentDirectory)
  .filter((fileName) => fileName.endsWith('.md'))
  .map((fileName) => fileName.replace(/\.md$/u, ''))
  .sort();

const genericStageLabels = new Set([
  'Inputs and constraints',
  'System mechanism',
  'Vehicle-level effect',
  'Stored energy',
  'Prime mover',
  'Wheel torque',
  'Mechanical signal',
  'Control or actuation',
  'Combustion behavior',
]);

describe('visual helper data', () => {
  it('has curated technology visual config for every published technology page', () => {
    const configuredSlugs = Object.keys(technologyVisuals).sort();

    expect(configuredSlugs).toEqual(technologyPageSlugs);
  });

  it('keeps technology visuals mechanism-specific instead of generic metadata fallbacks', () => {
    for (const [slug, visual] of Object.entries(technologyVisuals)) {
      expect(visual.theme, slug).not.toMatch(
        /metadata|generic|system mechanism/i,
      );
      expect(visual.focus, slug).not.toMatch(/metadata|generic/i);
      expect(visual.grounding, slug).not.toMatch(/metadata|generic/i);
      expect(visual.stages.length, slug).toBeGreaterThanOrEqual(3);
      expect(visual.stages.length, slug).toBeLessThanOrEqual(4);

      const stageLabels = visual.stages.map((stage) => stage.label);
      expect(new Set(stageLabels).size, slug).toBe(stageLabels.length);

      for (const stage of visual.stages) {
        expect(stage.label.length, slug).toBeGreaterThan(3);
        expect(stage.detail.length, slug).toBeGreaterThan(3);
        expect(genericStageLabels.has(stage.label), slug).toBe(false);
      }
    }
  });

  it('uses explicit mechanism flows for representative audited technologies', () => {
    expect(
      technologyVisualForSlug('turbocharger').stages.map(
        (stage) => stage.label,
      ),
    ).toEqual([
      'Exhaust gas',
      'Turbine wheel',
      'Compressor wheel',
      'Denser intake air',
    ]);
    expect(
      technologyVisualForSlug('diesel-particulate-filter').stages.map(
        (stage) => stage.label,
      ),
    ).toEqual([
      'Soot-laden exhaust',
      'Porous wall capture',
      'Pressure and temperature monitoring',
      'Regeneration burn-off',
    ]);
    expect(
      technologyVisualForSlug('adaptive-cruise-control').stages.map(
        (stage) => stage.label,
      ),
    ).toEqual([
      'Radar or camera sensing',
      'Following gap logic',
      'Throttle and brake request',
    ]);
    expect(
      technologyVisualForSlug('power-inverter').stages.map(
        (stage) => stage.label,
      ),
    ).toEqual([
      'Battery DC bus',
      'Switching semiconductors',
      'Controlled AC phases',
      'Motor torque or regen DC',
    ]);
  });

  it('throws instead of silently rendering a technology page without curated visual config', () => {
    expect(() => technologyVisualForSlug('future-category')).toThrow(
      /Missing curated technology visual config/u,
    );
  });

  it('keeps visible labels compact without hiding short labels', () => {
    expect(compactLabel('Engine Control Unit', 24)).toBe('Engine Control Unit');
    expect(compactLabel('software-defined-connected-vehicles', 18)).toBe(
      'software-defined…',
    );
  });

  it('wraps diagram labels into bounded readable SVG lines', () => {
    expect(wrapLabel('Individual brake or torque request', 16, 3)).toEqual([
      'Individual brake',
      'or torque',
      'request',
    ]);
    expect(
      wrapLabel(
        'Pressure and temperature monitoring keeps loading visible',
        18,
        2,
      ),
    ).toEqual(['Pressure and', 'temperature monit…']);
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
