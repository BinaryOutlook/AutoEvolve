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

Original AutoEvolve diagrams can be based on page metadata, collection relationships, and cited-source context where present. Their captions should identify them as original diagrams, so no external image license is required.

Technology detail pages are stricter: each published technology slug needs an explicit curated visual configuration in `src/lib/visuals.ts`. Do not use a category-wide or silent fallback for technology pages. The visual labels should describe the page's mechanism, signal path, material flow, or control loop directly—for example, exhaust gas to turbine to compressor for a turbocharger, soot capture to monitoring to regeneration for a diesel particulate filter, or sensors to following-gap logic to throttle and brake requests for adaptive cruise control.

If an externally sourced image or figure is added, record the creator or rights holder, source URL, license or reuse basis, caption, and alt text near the content that uses it. Add a matching source record when the image is part of a page's source list. Do not use an image to imply a claim that the listed sources do not support.
