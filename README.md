# AutoEvolve

AutoEvolve is a static-first educational website that documents the evolution of automotive technology: early self-propelled vehicles, internal-combustion systems, diesel and emissions controls, hybrids, plug-in hybrids, battery-electric platforms, manufacturing and supply systems, and the software-defined vehicles now reshaping mobility.

The current release is `0.2`: an expanded MVP content release with broader technology guides, controversy case studies, vehicle examples, sourced media panels, and eras as the chronological structure. The durable rule is simple: every meaningful update should keep the product, documentation, and maintenance workflow moving together instead of letting the code outrun the explanation.

The project follows the implementation brief in [start_brief.md](start_brief.md): neutral editorial tone, source-backed technical explanations, vehicle models as examples of broader systems, and architecture that remains friendly to free static hosting.

The v1 redesign direction is captured in [v1alldetails.md](v1alldetails.md).
It uses [themes/Shrimp-color-heavy.md](themes/Shrimp-color-heavy.md) as the
default visual theme reference and centers the interface on interactive,
system-first learning.

## Current Version

| Field                | Value                                                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Project stage        | `0.2` expanded MVP content release                                                                                               |
| Primary goal         | Maintain a deployable educational archive with source-backed eras, technologies, controversies, and vehicle examples.            |
| Product stance       | Historical, technical, neutral, and evidence-led.                                                                                |
| Architecture stance  | Static-first Astro site, Git-backed content, typed schemas, generated search, and no backend until the workflow truly needs one. |
| Documentation stance | README and `AGENTS.md` stay current with every meaningful change; deeper editorial rules live under `docs/`.                     |

For this release stage, the operating equation is:

$$
\text{MVP Readiness} =
\frac{\text{Useful Content} \times \text{Source Quality} \times \text{Navigability}}
{\text{Maintenance Burden} + \text{Editorial Drift}}
$$

If source quality or navigability is low, the project is not ready just because pages render.

## Tech Stack

- Astro with TypeScript for static-first rendering.
- MDX and typed content collections for long-form articles.
- Pagefind for generated static search, including quick header results and the
  full advanced search route.
- Zod-backed schemas through Astro content collections.
- Reusable sourced media panels for attributed reference images.
- AI-generated explanatory image panels for abstract systems, stored with
  visible model, prompt-summary, generation-date, and "not source evidence"
  metadata.
- Original mechanism-flow panels for selected complex technology explainers.
- Accessible Astro component scripts for small static-first interactions, such
  as the clickable car systems explorer with sourced AFDC cutaway images.
- Vitest and Playwright for verification.
- ESLint, Prettier, and markdownlint for project hygiene.

## Quick Start

```bash
npm install
npm run dev
```

The development server prints the local URL, usually `http://localhost:4321`.

## Commands

| Command                 | Action                                                                          |
| ----------------------- | ------------------------------------------------------------------------------- |
| `npm run dev`           | Start the local development server.                                             |
| `npm run build`         | Run Astro type/content checks, build the site, and generate the Pagefind index. |
| `npm run preview`       | Preview the production build locally.                                           |
| `npm run check`         | Run Astro checks without building.                                              |
| `npm run typecheck`     | Run Astro type and content checks without building.                             |
| `npm run check:content` | Validate source IDs and cross-content slug references.                          |
| `npm run lint`          | Run ESLint and markdownlint.                                                    |
| `npm run format`        | Format project files with Prettier.                                             |
| `npm run test`          | Run unit tests.                                                                 |
| `npm run test:e2e`      | Run Playwright end-to-end tests.                                                |

Before submitting meaningful changes, run:

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

Use `npm run test:e2e` when routes, navigation, search behavior, or browser-visible layout change.

## Project Structure

| Path                                                   | Purpose                                                                                                                  |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| [src/pages/](src/pages/)                               | Astro routes for home, era-led chronology, technologies, vehicles, controversies, glossary, sources, about, and search.  |
| [src/content/](src/content/)                           | Markdown and MDX content collections for eras, technologies, vehicles, and controversies.                                |
| [src/data/](src/data/)                                 | Structured source and glossary data.                                                                                     |
| [src/components/](src/components/)                     | Shared UI for record rows, sourced media panels, mechanism flows, headers, source lists, atlas, and linked lists.        |
| [src/layouts/](src/layouts/)                           | Base and article layout shells.                                                                                          |
| [public/images/generated/](public/images/generated/)   | AI-generated explanatory image assets copied into the project after visual inspection.                                   |
| [public/images/systems/](public/images/systems/)       | Sourced AFDC cutaway images used by the interactive car systems atlas.                                                   |
| [docs/](docs/)                                         | Current editorial, source, and contribution guidance.                                                                    |
| [themes/](themes/)                                     | Visual theme references, including the Shrimp-derived v1 default theme.                                                  |
| [scripts/](scripts/)                                   | Project validation scripts for content and language rules.                                                               |
| [tests/](tests/)                                       | Unit and end-to-end tests.                                                                                               |
| [v1alldetails.md](v1alldetails.md)                     | Detailed v1 implementation, audit, source-gathering, subagent, and commit-cadence plan.                                  |
| [refrence/Future Roadmap/](refrence/Future%20Roadmap/) | Imported reference workflow for roadmap-style documentation. Treat this as inspiration, not this project’s active queue. |

## Documentation Map

| Document                                                     | Authority                                                                               |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| [README.md](README.md)                                       | Current v0.2 overview, commands, status, structure, and maintenance wayfinding.         |
| [AGENTS.md](AGENTS.md)                                       | Agent operating rules for documentation, implementation, and future planning.           |
| [v1alldetails.md](v1alldetails.md)                           | Active v1 redesign plan and contractor-ready implementation guidance.                   |
| [themes/Shrimp-color-heavy.md](themes/Shrimp-color-heavy.md) | Default v1 theme reference for color, type, spacing, cards, and interaction states.     |
| [start_brief.md](start_brief.md)                             | Durable product brief for mission, scope, routes, content model, and editorial posture. |
| [docs/editorial-policy.md](docs/editorial-policy.md)         | Editorial neutrality, vehicle-example boundaries, and tone.                             |
| [docs/source-style-guide.md](docs/source-style-guide.md)     | Source hierarchy, citation metadata, and support rules.                                 |
| [docs/contribution-guide.md](docs/contribution-guide.md)     | Local setup and pre-submission checks.                                                  |

Keep documentation current in the same pass as code whenever a change affects commands, routes, content schemas, editorial rules, product scope, or architecture.

## Editorial Standard

AutoEvolve should explain automotive systems and production processes before discussing vehicle examples. Vehicle pages are not reviews; they are case studies showing how a broader technology entered production, changed over time, or exposed tradeoffs.

Use specific sources for specific claims. Regulatory records support regulatory history. Manufacturer material may support dates or specifications, but marketing claims need context. When a topic is recent or unsettled, mark it with a clear last-reviewed date. Visuals should be educational: sourced images require alt text, visible captioned attribution, source links, and reuse details.

Technical pages may use short equations when they clarify a system. For example, power can be introduced as:

$$
P = T \omega
$$

where \(P\) is power, \(T\) is torque, and \(\omega\) is angular speed.

## Planning Workflow

The imported reference folder uses a controlled roadmap queue before GitHub issues. AutoEvolve should follow that design trend as complexity grows:

```text
idea or request
-> clarify value, scope, risks, and affected docs
-> decide whether it is small enough to implement directly
-> for larger work, create or update a scoped planning note before implementation
-> implement in a focused change
-> run checks
-> update docs in the same pass
```

Small changes can be handled directly. Larger changes, such as new sections, route families, schema changes, major visual redesigns, content workflow changes, or backend decisions, should get a short planning packet before implementation. That packet should capture scope, non-goals, acceptance criteria, test plan, documentation impact, and rollback path.

Future versioned planning should preserve that scoped style and avoid treating loose ideas as active work before they are ready to build.

## Project Status

The repository is labeled `0.2` after the expanded MVP content pass. It now centers the chronology on eras, keeps static search and contribution guidance in place, carries source-backed coverage across technologies, manufacturing and supply topics, controversies, and vehicle examples, renders at least one attributed educational media artifact on each generated page, and provides quick header search with `/search/` retained as the advanced search workspace.

Current docs are expected to describe the present state. If a feature, command, route, or workflow changes, update the relevant document before considering the work complete.
