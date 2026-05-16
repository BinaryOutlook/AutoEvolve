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

## Content Checklist

- Use the correct content collection and frontmatter fields.
- Add source identifiers for factual claims.
- Link vehicle examples to technologies and eras.
- Avoid review-style language.
- Keep controversy pages chronological, technical, and regulatory.
- Keep page visuals educational, captioned, and accessible; SVG figures need a title and description, while external images need alt text and attribution.
- Write inline equations as `$E = mc^2$` and block equations with `$$`
  fences so Astro's Markdown math pipeline renders them through KaTeX.
- Run `npm run test:e2e` after layout or math changes; the suite captures
  desktop and mobile screenshots in ignored Playwright output directories.
