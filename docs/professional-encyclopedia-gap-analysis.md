# Professional Encyclopedia Gap Analysis

## Purpose

This document analyzes the distance between AutoEvolve `0.2` and a
professional-grade encyclopedia for automotive-industry knowledge. It answers
two questions:

1. What are the specific differences between the current project and a
   professional encyclopedia?
2. What work is needed to bridge those gaps without weakening AutoEvolve's
   source-backed, static-first identity?

The phrase "all automotive industry-related items" is broader than the current
product identity. AutoEvolve is now an educational archive about automotive
technology history, not a complete industry encyclopedia covering every company,
factory, executive, designer, regulation, supplier, motorsport program, market,
platform, engine family, battery chemistry, component, and incident. Becoming a
professional encyclopedia would therefore require both quality improvement and a
controlled scope expansion.

The operating target can be expressed as:

$$
\text{Encyclopedia Readiness} =
\text{Coverage} \times \text{Verifiability} \times
\text{Review Discipline} \times \text{Findability}
$$

If any term is weak, the project may still be useful, but it is not yet
professional-grade.

## External Benchmarks

The benchmark is not one site or one visual style. It is a quality model drawn
from established reference-work practices:

- Britannica describes a professional editorial process involving expert
  writers, editor review, fact-checking, continuous updating, and public article
  history.
- World History Encyclopedia describes multi-editor review, source verification,
  copy editing, revision, correction handling, and editorial independence.
- Stanford Encyclopedia of Philosophy uses subject editors, qualified authors,
  referee review, maintenance expectations, and entry retirement when updates do
  not happen.
- Wikipedia's core content policies emphasize verifiability, neutral point of
  view, and no original research.

AutoEvolve should adapt those practices to a static, Git-backed project. It
should not copy every institutional mechanism, but it does need the same
underlying virtues: traceable claims, careful scope, visible review state,
revision discipline, and strong navigation through a large knowledge base.

## Current Baseline

As of June 7, 2026, the repository is a serious expanded MVP, not a blank
prototype.

| Area                         | Current state                                                                     |
| ---------------------------- | --------------------------------------------------------------------------------- |
| Version                      | `0.2.0` expanded MVP                                                              |
| Architecture                 | Astro, TypeScript, MDX, typed content collections, Pagefind, static routes        |
| Public article count         | 114                                                                               |
| Era pages                    | 10                                                                                |
| Technology pages             | 74                                                                                |
| Vehicle example pages        | 20                                                                                |
| Controversy pages            | 10                                                                                |
| Source records               | 179                                                                               |
| Average sources per article  | 3.81                                                                              |
| Source-free articles         | 0                                                                                 |
| Articles with `lastReviewed` | 114                                                                               |
| Current tests                | Vitest unit tests and Playwright route, media, overflow, and accessibility checks |
| Current validation           | Source ID checks, cross-content slug checks, and review-language warnings         |

The strongest existing foundations are:

- static-first implementation with low hosting burden
- typed frontmatter and predictable route families
- neutral editorial policy and source style guide
- source records with reuse metadata
- Pagefind search and route-level navigation
- visual attribution expectations
- end-to-end tests that cover responsive layout and sourced media

The project already has editorial taste. The remaining question is whether it
has enough editorial machinery to scale.

## Specific Differences

### 1. Scope And Coverage

Current AutoEvolve covers a curated technology-history slice. A professional
automotive encyclopedia would need systematic coverage of the industry:

- technologies and components
- vehicle examples and platform families
- manufacturers, suppliers, and joint ventures
- people, engineering teams, and institutions
- factories, production systems, and labor context
- regulations, standards, test cycles, and safety programs
- motorsport and proving-ground technology transfer where relevant
- regional markets and infrastructure systems
- controversies, recalls, litigation, and regulatory actions
- terminology, abbreviations, aliases, and disambiguation pages

The gap is not just article count. It is the absence of an explicit coverage
map. Without a coverage map, new pages can accumulate as interesting essays
rather than forming an encyclopedia.

### 2. Article Depth

Current articles are readable and often well structured, but many are short by
professional reference standards. The current average is roughly 500 to 650
words depending on collection. Some technology pages are below 300 words, and
some vehicle pages have only one or two sources.

A professional entry should usually include:

- a compact definition
- historical emergence and context
- mechanism or system explanation
- major variants
- tradeoffs and constraints
- regional or regulatory differences where relevant
- common misconceptions
- source boundaries
- related records
- useful diagrams, images, or tables
- revision and review metadata

Short pages can exist, but they should be clearly marked as stubs or scoped
summaries. A published article should not quietly look complete when it is only
a starting point.

### 3. Source Density And Claim Traceability

AutoEvolve has a source registry and no uncited articles. That is a meaningful
strength. The gap is precision.

Professional reference work needs a reader to answer:

- Which source supports this claim?
- Is this source primary, secondary, regulatory, technical, journalistic, or
  manufacturer-provided?
- Is a manufacturer source being used only for what it can support?
- Are conflicting accounts or regional definitions visible?
- Are exceptional or legal claims backed by strong evidence?

Current source lists are article-level. They do not yet provide claim-level
traceability, source-role notes per article section, or a durable way to flag
claims that need stronger evidence.

### 4. Editorial Governance

The current status model includes `stub`, `draft`, `source-review`,
`technical-review`, `published`, and `needs-update`. That is a good start.

A professional encyclopedia also needs visible governance:

- author or contributor attribution
- reviewer attribution or at least reviewer role
- review dates by role
- correction path
- article history or change summary
- conflict-of-interest handling
- update cadence for fast-moving topics
- criteria for retiring or demoting outdated entries

At present, `published` means "allowed to render publicly," but it does not
fully mean "professionally reviewed."

### 5. Ontology And Internal Linking

Current pages use broad categories and related slug arrays. This is enough for
an MVP, but an encyclopedia needs a deeper ontology:

- parent and child topic relationships
- aliases and alternate spellings
- disambiguation rules
- component-to-system relationships
- chronology links
- manufacturer, region, and regulation facets
- standard identifiers where possible
- "part of", "replaced by", "enabled by", and "regulated by" relationships

The current graph is useful, but it is not yet expressive enough for the full
automotive industry.

### 6. Search And Discovery

Pagefind search is a strong static-first choice. Professional-grade discovery
needs more than text search:

- faceted browsing by system, era, region, source type, and status
- controlled topic hubs
- glossary alias resolution
- "see also" and "compare" paths
- index pages that expose coverage gaps
- source-library filtering

The current search helps readers find known terms. It does not yet guide readers
through a large domain model.

### 7. Media, Diagrams, And Evidence Visuals

AutoEvolve already has sourced media panels, generated explanatory images, and
mechanism-flow panels. The gap is consistency and evidentiary separation at
scale.

A professional standard would require:

- a figure style guide
- diagram review rules
- rights-audit status for every reused image
- source evidence versus illustrative media labeling
- stable alt-text standards
- schematic conventions for flows, interfaces, and system boundaries
- image replacement plans when generated art is only a temporary explanation

### 8. Recency And Living Topics

The `lastReviewed` field is valuable. However, software-defined vehicles,
cybersecurity, automated driving, charging standards, battery safety, emissions
rules, and recalls change quickly.

Professional treatment needs review cadence by topic class:

| Topic type                                                     | Suggested cadence     |
| -------------------------------------------------------------- | --------------------- |
| Historical closed topics                                       | Every 24 to 36 months |
| Established technical systems                                  | Every 12 to 24 months |
| Active regulation or safety topics                             | Every 6 to 12 months  |
| Fast-moving software, charging, ADAS, and cybersecurity topics | Every 3 to 6 months   |

The goal is not endless churn. It is honest signaling when a page may be stale.

### 9. Editorial Independence And Neutrality Controls

The current policy correctly avoids rankings, buying advice, market pricing,
and review language. Professional scale will introduce harder neutrality
problems:

- manufacturer narratives
- national industry narratives
- litigation language
- environmental claims
- safety claims
- "first", "best", and "most important" claims
- unresolved technical debates

The language checker is a useful floor, but it cannot evaluate framing,
selection bias, source balance, or due weight. Those need human review and
clearer article templates.

### 10. Contributor Workflow

The contribution guide gives local commands and content checklists. Professional
growth needs a pipeline:

```text
topic proposal
-> source packet
-> outline
-> draft
-> source review
-> technical review
-> copy edit
-> publish
-> scheduled maintenance
```

That workflow can still live in Git. It does not require a backend at first.
But it does require shared conventions and review artifacts.

### 11. Technical Platform

The platform is stronger than the content governance. Current strengths include
Astro, typed content collections, Pagefind, Vitest, Playwright, ESLint,
markdownlint, and static-first deployment.

The platform gaps are:

- no generated coverage report
- no quality audit command
- no CI requirement documented beyond local commands
- no structured export for article metadata
- no article-history page or generated changelog
- limited automated checks for article section completeness
- no dead-link or source-freshness checking

### 12. Legal And Rights Handling

The source and media rules are already careful. Professional scale requires:

- per-asset rights status
- takedown path
- source URL freshness checks
- license compatibility review
- contributor warranty or attestation for submitted media
- stricter separation between generated explanatory visuals and historical
  evidence

## Bridge Plan

### Phase 1: Install The Editorial Operating System

Goal: make quality measurable before adding hundreds of pages.

Deliverables:

- quality audit command for article counts, source density, review dates, word
  counts, and section completeness
- professional article quality checklist
- topic proposal template
- source packet template
- correction and update policy
- `needs-update` criteria tied to review cadence
- recommended minimum source counts by collection
- source-role vocabulary for primary, regulatory, academic, manufacturer,
  museum, journalism, and image sources

Acceptance criteria:

- maintainers can run one command and see content-quality risks
- every new article has a stated source posture before publication
- low-source or short pages are visible rather than hidden

### Phase 2: Build A Domain Ontology

Goal: prevent broad expansion from becoming a pile of disconnected articles.

Deliverables:

- controlled taxonomy for systems, components, vehicle examples, companies,
  suppliers, regulations, people, standards, and regions
- alias and disambiguation rules
- relationship types such as `partOf`, `enabledBy`, `regulatedBy`,
  `usedBy`, `replacedBy`, and `illustratedBy`
- route-family decision memo for any expansion beyond technologies, eras,
  vehicles, and controversies

Acceptance criteria:

- every new topic can be placed in the ontology before drafting
- readers can move from a component to its system, era, regulation, examples,
  and related source records

### Phase 3: Raise Article Depth

Goal: move from useful summaries to reference-grade entries.

Deliverables:

- expanded templates per collection
- 10 to 20 pilot articles upgraded to professional structure
- source packets for each pilot
- section-level source notes where the claim burden is high
- diagrams or sourced media for mechanism-heavy topics

Acceptance criteria:

- pilot articles demonstrate repeatable depth, not one-off polish
- source density and source quality improve without promotional framing
- technical pages explain mechanism, variants, constraints, and evidence
  boundaries

### Phase 4: Improve Discovery

Goal: make the archive navigable when it grows past the current MVP.

Deliverables:

- facet-friendly index pages
- source-library filters
- topic hubs for powertrain, chassis safety, electrical architecture,
  manufacturing, regulation, and charging infrastructure
- glossary alias support
- coverage report published in docs or generated at build time

Acceptance criteria:

- readers can browse even when they do not know the exact term
- gaps are visible to contributors
- search remains static-first and accessible

### Phase 5: Professional Review And Maintenance

Goal: make publication status credible.

Deliverables:

- reviewer roles and review metadata
- correction policy and visible contact path
- periodic stale-content report
- article history or generated changelog
- source freshness checks
- external expert review for high-risk pages

Acceptance criteria:

- `published` means reviewed, not merely renderable
- fast-moving topics cannot silently age past their review window
- corrections can be received, evaluated, and recorded

## Recommended Minimum Standards

These are not hard gates for every historical stub, but they should become the
default target for published pages.

| Collection      | Minimum published target                                                                                             |
| --------------- | -------------------------------------------------------------------------------------------------------------------- |
| Era             | 1,200 or more words, 6 or more strong sources, representative technologies and vehicles, unresolved constraints      |
| Technology      | 1,000 or more words, 5 or more strong sources, mechanism, variants, tradeoffs, misconceptions, source boundary       |
| Vehicle example | 900 or more words, 4 or more sources, clear technology illustration, no review framing                               |
| Controversy     | 1,200 or more words, 6 or more sources, separate regulator, court, manufacturer, and journalism roles where relevant |
| Source record   | source type, organization, URL, accessed date, support notes, and source-role clarity                                |

For AutoEvolve, the article-quality equation should be:

$$
\text{Article Quality} =
\text{Scope Clarity} \times \text{Mechanism Depth} \times
\text{Source Fit} \times \text{Neutral Framing}
$$

Adding words without improving source fit or mechanism depth does not count.

## Highest-Leverage Immediate Work

The best immediate work is not a large unsourced content expansion. The best
work is to make the project harder to degrade and easier to expand well:

1. Add a quality audit command that reports content counts, source density,
   short pages, least-sourced pages, stale pages, and likely missing sections.
2. Update the contribution guide so new pages are written against an
   encyclopedia standard, not only an MVP checklist.
3. Add this document to the README documentation map.
4. Use the audit output to choose source-backed article upgrades in small
   batches.
5. Treat any new route family as a planning-packet decision, because "all
   automotive industry-related items" is a scope expansion.

## Professional-Grade Backlog

### Editorial And Governance

- Write a correction and update policy.
- Add reviewer-role metadata to schemas after deciding how public attribution
  should work.
- Add source packet and topic proposal templates.
- Define `published`, `technical-review`, and `source-review` gates more
  strictly.
- Add stale-topic reporting based on review cadence.

### Content And Sources

- Upgrade least-sourced vehicle pages first, especially pages with one source.
- Upgrade short `source-review` technology pages into full entries or mark them
  as stubs.
- Add more academic, standards, court, patent, and museum sources where they
  materially improve claim support.
- Add source-boundary sections to all high-risk pages.
- Build pilot professional entries for one complete subsystem family, such as
  fuel delivery or charging.

### Taxonomy And Routes

- Create an ontology note before adding company, supplier, people, regulation,
  standards, or region routes.
- Add aliases and disambiguation support.
- Add topic hubs for major system families.
- Add coverage reports by domain, not only by current route family.

### Technical Platform

- Add a quality audit script.
- Add source freshness and dead-link checks.
- Consider generated JSON metadata for articles, sources, and relationships.
- Add CI documentation once local checks stabilize.
- Consider a static article-history page or generated changelog.

### Design And Reader Experience

- Continue the v1 system-first redesign.
- Add richer index filtering without losing static-first simplicity.
- Make related paths more semantically meaningful.
- Keep accessible diagrams and sourced media as first-class article elements.

## Decision Point

The owner should decide whether AutoEvolve remains a professional encyclopedia
of automotive technology history or expands into a professional encyclopedia of
the full automotive industry.

The first path is narrower and immediately coherent. The second path is larger
and valuable, but it requires new route families, a stronger ontology, stricter
source governance, and a longer maintenance plan.

The recommended path is:

```text
professionalize the current technology-history archive
-> prove the workflow on one subsystem family
-> add ontology and quality reporting
-> expand into adjacent industry topics only after route-family planning
```

That sequence protects the project's central trust equation:

$$
\text{Editorial Trust} =
\text{Source Quality} \times \text{Neutral Framing} \times
\text{Technical Clarity}
$$

## References

- Britannica editorial process:
  <https://www.britannica.com/editor/The-Editors-of-Encyclopaedia-Britannica/4419>
- World History Encyclopedia editorial policy:
  <https://www.worldhistory.org/static/editorial-policy/>
- Stanford Encyclopedia of Philosophy editorial information:
  <https://plato.stanford.edu/info.html>
- Wikipedia verifiability policy:
  <https://en.wikipedia.org/wiki/Wikipedia:Verifiability>
- Wikipedia neutral point of view policy:
  <https://en.wikipedia.org/wiki/Wikipedia:Neutral_point_of_view>
- Wikipedia no original research policy:
  <https://en.wikipedia.org/wiki/Wikipedia:No_original_research>
