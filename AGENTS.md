# AutoEvolve Agent Notes

Please keep documentation current as part of normal project maintenance. AutoEvolve is labeled `0.2`, so this repository should stay easy to understand while the expanded MVP keeps taking shape.

## Project Identity

AutoEvolve is a static-first educational archive about automotive technology history. It is not a review site, buyer guide, market tracker, brand advocacy project, or ranking engine.

The durable product rule is:

$$
\text{Editorial Trust} =
\text{Source Quality} \times \text{Neutral Framing} \times \text{Technical Clarity}
$$

If one factor collapses, the article or feature needs more work before it should be treated as complete.

## Documentation Priority

When making meaningful changes, update the relevant documentation in the same pass whenever practical.

The main documentation layers are:

- `README.md`: current overview, version status, commands, project structure, MVP direction, and documentation map.
- `AGENTS.md`: agent behavior, documentation maintenance rules, and planning workflow.
- `start_brief.md`: durable product brief and content architecture baseline.
- `docs/editorial-policy.md`: neutrality rules, tone, and vehicle-example boundaries.
- `docs/source-style-guide.md`: source hierarchy, citation metadata, and source-use rules.
- `docs/contribution-guide.md`: local setup and verification expectations.

## Version 0.2 Baseline

Treat `0.2` as the expanded MVP content release. The goal is a deployable, source-backed archive with clear navigation, static search, maintainable contribution rules, eras as the chronological structure, broader technology guides, controversy case studies, and vehicle examples with attributed images.

Prioritize:

- static-first pages that work without a backend
- typed content collections and predictable frontmatter
- era pages as the primary chronological structure
- neutral explanations of systems before vehicle examples
- citations for specific historical, technical, numerical, legal, and regulatory claims
- simple routes and reusable components over speculative platform features
- documentation that lets future maintainers re-enter without chat history

Avoid:

- vehicle rankings, star ratings, buying advice, market pricing, or review language
- unsupported claims about motives, superiority, causation, or inevitability
- backend services unless a concrete workflow justifies them
- large unsourced content expansions
- roadmap drift where loose ideas silently become active work

## Planning Workflow

Use the reference roadmap design trend as the project grows:

```text
idea / request
-> scoped note or explicit small-change decision
-> implementation
-> verification
-> documentation update
-> follow-up capture if needed
```

Small changes can proceed directly when scope is obvious and risk is low.

Larger changes should have a short planning packet before implementation. Use this for:

- new route families or major page templates
- content schema changes
- major visual redesigns
- search, build, deployment, or validation workflow changes
- backend, database, account, or submission-flow decisions
- broad content expansions that need sequencing

A planning packet should capture:

- summary and project value
- version or milestone target
- scope and non-goals
- expected touched areas
- technical difficulty and conflict risk
- source or editorial implications
- acceptance criteria
- test plan
- documentation impact
- rollback or revert path
- open questions

Do not treat unscoped ideas as active implementation work unless the user explicitly says to build them now.

## When To Update Which File

Update `README.md` when:

- setup steps change
- commands change
- routes or major features change
- repo structure changes
- important documentation locations change
- project status, MVP scope, or version framing changes

Update `AGENTS.md` when:

- the agent workflow changes
- documentation maintenance rules change
- planning or roadmap conventions change
- the definition of small versus large changes shifts

Update `start_brief.md` when:

- durable product scope changes
- non-goals change
- primary route or content model assumptions change
- the long-term educational mission changes

Update `docs/editorial-policy.md` when:

- editorial tone, neutrality rules, or vehicle-example boundaries change
- controversy handling changes
- rules for recent or fast-moving topics change

Update `docs/source-style-guide.md` when:

- accepted source types change
- citation metadata changes
- source hierarchy or claim-support rules change

Update `docs/contribution-guide.md` when:

- local setup changes
- required pre-submission commands change
- content contribution checks change
- browser or Playwright expectations change

## Content Rules

Every article should make its educational job obvious:

- Era pages explain context, transitions, unresolved constraints, and representative technologies.
- Technology pages explain definitions, mechanisms, components, emergence, tradeoffs, related systems, and misconceptions.
- Vehicle pages explain what broader technology the vehicle illustrates.
- Controversy pages stay chronological, technical, regulatory, and source-led.

Use LaTeX for equations where math clarifies the system, but do not force formulas into pages that do not need them.

## Implementation Rules

Prefer the existing Astro, TypeScript, MDX, content collection, Zod, Pagefind, Vitest, Playwright, ESLint, Prettier, and markdownlint patterns already present in the repository.

Before completing work, choose verification based on risk:

- Documentation-only changes: run `npm run lint` when practical because markdownlint covers docs.
- Content or schema changes: run `npm run lint`, `npm run test`, and `npm run build`.
- Route, layout, navigation, or search changes: also run `npm run test:e2e` when practical.
- Build, CI, or dependency changes: run the most complete local check set available.

If a check cannot be run, state that clearly in the final response.

## Maintenance Expectations

- Keep docs short, specific, and current.
- Do not let code structure drift away from the README.
- Do not add important files, folders, routes, commands, schemas, or workflows without updating the relevant docs.
- Preserve source-backed neutrality over speed when adding factual content.
- Keep PR-sized changes focused and reviewable.
- Capture follow-up work as scoped notes rather than expanding an already-complete change.
