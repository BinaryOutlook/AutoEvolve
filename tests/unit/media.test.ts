import { existsSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  mediaAssets,
  mediaForArchiveEntry,
  vehicleMediaBySlug,
} from '../../src/lib/media';

describe('sourced media registry', () => {
  it('keeps every registered media asset accessible and attributed', () => {
    for (const asset of Object.values(mediaAssets)) {
      expect(asset.id).toMatch(/^[a-z0-9-]+$/u);
      expect(asset.src).toMatch(/^\/images\/.+\.(jpg|jpeg|png|webp)$/iu);
      expect(existsSync(path.join('public', asset.src.slice(1)))).toBe(true);
      expect(asset.alt.length).toBeGreaterThan(40);
      expect(asset.caption.length).toBeGreaterThan(30);
      expect(asset.sourceLabel.length).toBeGreaterThan(10);
      expect(asset.sourceUrl).toMatch(/^https:\/\//u);
      expect(asset.rights.length).toBeGreaterThan(30);
    }
  });

  it('maps known vehicle slugs to actual vehicle photographs', () => {
    expect(vehicleMediaBySlug['toyota-prius']).toBe(mediaAssets.toyotaPrius);
    expect(vehicleMediaBySlug['tesla-model-s']).toBe(mediaAssets.teslaModelS);
    expect(vehicleMediaBySlug['byd-atto-3-yuan-plus']).toBe(
      mediaAssets.bydAtto3,
    );
    expect(vehicleMediaBySlug['hyundai-ioniq-5']).toBe(
      mediaAssets.hyundaiIoniq5,
    );
  });

  it('selects system images by article context instead of silent generic diagrams', () => {
    expect(
      mediaForArchiveEntry({
        collection: 'technologies',
        slug: 'power-inverter',
        title: 'Power Inverter',
        category: 'electric-drive',
        relatedTechnologies: [],
      }).asset,
    ).toBe(mediaAssets.electricCutaway);

    expect(
      mediaForArchiveEntry({
        collection: 'controversies',
        slug: 'dieselgate',
        title: 'Volkswagen Dieselgate',
        affectedTechnologies: ['diesel-engine'],
      }).asset,
    ).toBe(mediaAssets.dieselCutaway);

    expect(
      mediaForArchiveEntry({
        collection: 'vehicles',
        slug: 'toyota-prius',
        title: 'Toyota Prius',
        manufacturer: 'Toyota',
        relatedTechnologies: ['hybrid-electric-vehicle'],
      }).asset,
    ).toBe(mediaAssets.toyotaPrius);
  });
});
