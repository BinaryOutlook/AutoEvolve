# Source Style Guide

## Preferred Sources

Use official technical, regulatory, court, academic, archival, or manufacturer technical material where possible. Manufacturer material can support dates, specifications, and company admissions, but marketing language should not be repeated as independent fact. Reputable journalism may be used as supplemental context for contemporary public reaction or reporting gaps that primary records do not cover.

## Required Metadata

Each source record should include:

- Title.
- Organization or author.
- Source type.
- URL.
- Accessed date.
- Notes about what the source supports when helpful.

## Citation Rule

Use a source only for what it can reasonably support. A regulatory document can support enforcement history; it should not be stretched into a general claim about every vehicle using a similar technology.

For controversies, keep source roles distinct: regulator findings, court findings, company-commissioned investigations, and journalism are related evidence streams, not interchangeable authorities.

## Visual Source and Attribution Rules

Current v1 pages use sourced reference images and original mechanism-flow diagrams. The shared registry in `src/lib/media.ts` records local image paths, alt text, captions, source URLs, original-file URLs where available, and reuse notes. Original flow diagrams live in `src/lib/system-flows.ts` and should describe only relationships supported by the article's cited sources.

Technology detail pages should show an appropriate system reference image based on the article's category, slug, and related systems. When a page needs a more specific image than the registry can infer, add a sourced asset to `src/lib/media.ts` rather than reviving metadata-generated diagrams or silently using decorative imagery.

When adding an original diagram, keep the sequence simple, caption it as an AutoEvolve diagram, and state when it simplifies real-world variants. If an AI-generated image is ever used for an explanatory visual, cite it visibly with the model, generation date, editing notes, and a statement that it is illustrative rather than source evidence.

If an externally sourced image or figure is added, record the creator or rights holder, source URL, license or reuse basis, caption, and alt text near the content that uses it. Add a matching source record when the image is part of a page's source list. Do not use an image to imply a claim that the listed sources do not support.
