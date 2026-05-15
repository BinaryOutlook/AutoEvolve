# AutoEvolve

AutoEvolve is a static-first educational website for documenting the evolution of automotive technology. It follows the implementation brief in [start_brief.md](start_brief.md): neutral editorial tone, source-backed technical explanations, vehicle models as examples of broader systems, and free-hosting-friendly architecture.

## Tech Stack

- Astro with TypeScript for static-first rendering.
- MDX and typed content collections for long-form articles.
- Pagefind for generated static search.
- Zod-backed schemas through Astro content collections.
- Vitest and Playwright for verification.
- ESLint, Prettier, and markdownlint for project hygiene.

## Commands

| Command            | Action                                                                          |
| ------------------ | ------------------------------------------------------------------------------- |
| `npm run dev`      | Start the local development server.                                             |
| `npm run build`    | Run Astro type/content checks, build the site, and generate the Pagefind index. |
| `npm run preview`  | Preview the production build locally.                                           |
| `npm run check`    | Run Astro checks without building.                                              |
| `npm run lint`     | Run ESLint and markdownlint.                                                    |
| `npm run format`   | Format project files with Prettier.                                             |
| `npm run test`     | Run unit tests.                                                                 |
| `npm run test:e2e` | Run Playwright end-to-end tests.                                                |

## Project Status

The repository is being built incrementally from the brief. The first implementation target is a deployable static MVP with core page templates, seed content, timeline browsing, static search, contribution guidance, and automated quality checks.
