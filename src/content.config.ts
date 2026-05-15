import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const statusSchema = z.enum([
  'stub',
  'draft',
  'source-review',
  'technical-review',
  'published',
  'needs-update',
]);
const sourceListSchema = z.array(z.string()).default([]);
const stringListSchema = z.array(z.string()).default([]);

const baseArticleSchema = z.object({
  title: z.string(),
  summary: z.string(),
  status: statusSchema.default('draft'),
  lastReviewed: z.string(),
  sources: sourceListSchema,
});

const eras = defineCollection({
  loader: glob({ base: './src/content/eras', pattern: '**/*.{md,mdx}' }),
  schema: baseArticleSchema.extend({
    dateRange: z.string(),
    order: z.number(),
    keyThemes: stringListSchema,
    relatedTechnologies: stringListSchema,
    relatedVehicles: stringListSchema,
  }),
});

const technologies = defineCollection({
  loader: glob({
    base: './src/content/technologies',
    pattern: '**/*.{md,mdx}',
  }),
  schema: baseArticleSchema.extend({
    category: z.enum([
      'propulsion',
      'engine-subsystem',
      'fuel-energy',
      'transmission-driveline',
      'emissions',
      'chassis-safety',
      'electric-drive',
      'software-diagnostics',
    ]),
    eras: stringListSchema,
    relatedTechnologies: stringListSchema,
    relatedVehicles: stringListSchema,
  }),
});

const vehicles = defineCollection({
  loader: glob({ base: './src/content/vehicles', pattern: '**/*.{md,mdx}' }),
  schema: baseArticleSchema.extend({
    manufacturer: z.string(),
    productionPeriod: z.string(),
    marketContext: z.string(),
    illustrates: stringListSchema,
    relatedEras: stringListSchema,
    relatedTechnologies: stringListSchema,
  }),
});

const controversies = defineCollection({
  loader: glob({
    base: './src/content/controversies',
    pattern: '**/*.{md,mdx}',
  }),
  schema: baseArticleSchema.extend({
    dateRange: z.string(),
    affectedTechnologies: stringListSchema,
    relatedVehicles: stringListSchema,
    regulatoryContext: z.string(),
  }),
});

export const collections = {
  eras,
  technologies,
  vehicles,
  controversies,
};
