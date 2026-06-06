# Contribution Guide

## Local Setup

```bash
npm install
npm run dev
```

## Before Submitting Changes

Run:

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

For browser coverage, run:

```bash
npx playwright install
npm run test:e2e
```

For v1 UI work, also perform a browser pass on:

- the homepage car systems explorer
- the technologies catalogue
- one technology detail page
- one vehicle detail page
- one controversy detail page

Check keyboard focus, selected states, expanded cards, mobile wrapping, and page
overflow before treating the change as complete.

## Content Checklist

- Use the correct content collection and frontmatter fields.
- Add source identifiers for factual claims.
- Link vehicle examples to technologies and eras.
- Avoid review-style language.
- Keep controversy pages chronological, technical, and regulatory.
- Keep page visuals educational, captioned, and accessible; sourced images need alt text, visible attribution, a source link, and reuse notes.
- For downloaded system images, keep the local asset, visible source caption,
  original source URL, and reuse basis together in the component or page where
  the image appears.
- Keep interactive media static-first where practical. Prefer native HTML and
  Astro component scripts before adding a client framework.
- Write inline equations as `$E = mc^2$` and block equations with `$$`
  fences so Astro's Markdown math pipeline renders them through KaTeX.
- Run `npm run test:e2e` after layout or math changes; the suite captures
  desktop and mobile screenshots in ignored Playwright output directories and
  sweeps every generated route for page-level horizontal overflow, readable
  figure captions, and sourced images with non-empty alt text and dimensions.
