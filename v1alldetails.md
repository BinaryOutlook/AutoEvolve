# AutoEvolve v1 All Details Implementation Plan

## 1. Executive Direction

AutoEvolve v1 turns the current archive into a more tactile, system-first
learning tool. The target is still static-first and neutral, but the experience
should feel more like a serious automotive workbench than a generic generated
content site.

The new product equation is:

$$
\text{AutoEvolve v1} =
\frac{\text{Technical Depth} \times \text{Interactive Orientation}}
{\text{Visual Noise} + \text{Editorial Drift}}
$$

The design should make a reader feel that every article is connected to an
actual vehicle system. The homepage should invite exploration. Index pages
should behave like dense, readable catalogues. Detail pages should open with a
mechanism notebook that explains where the topic sits in a car before the
article body expands into history, engineering context, tradeoffs, citations,
and related examples.

This is not a buyer guide, review site, ranking surface, or brand-fan project.
The Wikipedia-level ambition is about breadth, internal linking, source
discipline, and neutral explanation, not about copying Wikipedia's visual
language or allowing unsourced encyclopedic sprawl.

## 2. Version Target

- Target milestone: `v1` design and interaction foundation.
- Current repository stage: `0.2` expanded MVP.
- First build slice: redesign the shared UI shell, homepage, article shell,
  card expansion pattern, system explorer, and route index surfaces.
- Later content slices: add deeper article bodies family by family, using the
  source and subagent workflow below.

The first implementation does not need to finish every future encyclopedia page.
It does need to install the v1 experience pattern so future content expansion is
obvious, repeatable, and hard to misuse.

## 3. Scope

### 3.1 In Scope For The First v1 Implementation

- Adopt `themes/Shrimp-color-heavy.md` as the default visual theme reference.
- Translate the Shrimp theme into AutoEvolve semantic CSS tokens.
- Replace the beige/serif editorial look with a white, charcoal, orange, and
  mint technical interface.
- Rework `BaseLayout`, `SiteHeader`, `SiteFooter`, shared cards, article pages,
  and visual blocks around the new design system.
- Add a clickable car system explorer that works without a backend.
- Add a new expandable card pattern for system families and article previews.
- Improve homepage flow around the four requested technology groups:
  stages and piping, engines and transmissions, EV motors, gasoline and diesel
  systems.
- Improve technologies index navigation so readers can move by subsystem rather
  than scanning an undifferentiated grid.
- Improve article page openers with structured context panels for:
  status, source posture, related systems, mechanism path, and neutrality guard.
- Keep Pagefind, content collections, static routes, and MDX rendering intact.
- Update documentation that describes the new v1 plan, UI direction, and
  maintenance expectations.
- Run audit checks repeatedly until only minor or lower issues remain, or record
  any residual issue clearly.

### 3.2 Out Of Scope For The First Implementation

- No backend, accounts, comments, database, or submission queue.
- No ranking, scoring, review language, purchase advice, market values, or
  superiority claims.
- No large unsourced content expansion.
- No new route family unless it is required by the interaction model.
- No heavy client framework unless the interaction cannot be handled by Astro
  component scripts and accessible HTML.
- No decorative 3D scene unless the core pages are already stable and tested.

## 4. Design System Translation

The Shrimp theme is warm, direct, product-like, and restrained. AutoEvolve should
borrow its mechanics without pretending to be a marketplace. The tone becomes:
clear lab bench, practical archive, readable technical atlas.

### 4.1 Core Tokens

Use `--shrimp-*` tokens as the raw theme source and `--ae-*` tokens for
AutoEvolve semantic roles. The semantic layer prevents future components from
using orange everywhere just because it exists.

Recommended tokens:

- `--shrimp-orange: #ff5722`
- `--shrimp-orange-hover: #e64a19`
- `--shrimp-orange-active: #bf360c`
- `--shrimp-orange-tint: #ffebe6`
- `--shrimp-orange-soft: #fdb098`
- `--shrimp-mint: #00bfa5`
- `--shrimp-mint-surface: #d1f4ef`
- `--shrimp-charcoal: #212121`
- `--shrimp-gray-700: #4a4a4a`
- `--shrimp-gray-600: #616161`
- `--shrimp-gray-500: #757575`
- `--shrimp-border: #e0e0e0`
- `--shrimp-surface: #ffffff`
- `--shrimp-surface-warm: #fff7f4`

AutoEvolve semantic tokens:

- `--ae-bg`
- `--ae-surface`
- `--ae-surface-warm`
- `--ae-surface-muted`
- `--ae-text`
- `--ae-muted`
- `--ae-border`
- `--ae-action`
- `--ae-action-hover`
- `--ae-action-soft`
- `--ae-support`
- `--ae-support-soft`
- `--ae-danger`
- `--ae-warning`
- `--ae-focus`

### 4.2 Typography

Primary family:

```css
Avenir Next, Avenir, Montserrat, Helvetica Neue, Arial, sans-serif
```

Fallback body family:

```css
Inter, ui-sans-serif, system-ui, sans-serif
```

Monospace:

```css
ui-monospace, SFMono-Regular, Menlo, Consolas, monospace
```

Rules:

- Do not use negative letter spacing.
- Do not scale type directly with viewport width.
- Use display-scale type only for page heroes, not cards or dashboard panels.
- Keep article body text around 16px with comfortable line height.
- Use compact labels for technical metadata.

### 4.3 Shape, Depth, And Density

- Buttons: 6px radius, 44px to 48px target height.
- Cards: 8px radius maximum.
- Tool panels: 6px to 8px radius.
- Use borders first, shadows second.
- Keep orange as action, active state, and small emphasis.
- Use mint for source confidence, completion, verified citations, and calm
  secondary support.
- Avoid nested cards. Use full-width bands, tool panels, and repeated item
  cards only where they clarify structure.

## 5. UX Architecture

### 5.1 Homepage

The homepage should become the interactive orientation surface for the archive.

Required sections:

1. A compact hero with the literal product name `AutoEvolve` as the main signal.
2. A clickable car systems explorer.
3. Four technology family lanes:
   - stages and piping
   - engines and transmissions
   - EV motors and power electronics
   - gasoline and diesel systems
4. Archive counts and route links.
5. Starting points that prioritize mechanism learning over arbitrary recency.

The hero should not be a generic marketing splash. It should put the product and
system map in the first viewport. The next section must be visible on normal
desktop and mobile viewports.

### 5.2 Clickable Car Systems Explorer

The first implementation should use an accessible custom element in an Astro
component. Astro's official guidance allows client-side interactivity through
`<script>` tags in components, and its docs recommend custom elements when a
component needs instance-local behavior without a UI framework:
<https://docs.astro.build/en/guides/client-side-scripts/>

Primary mode:

- Start with a neutral composite vehicle map, not a claim that all vehicles have
  the same layout.
- Organize future refinements into layers: energy source, air and exhaust,
  thermal and fluids, driveline, electrical and control, and safety.
- Add future powertrain tabs only when source-backed content exists for each
  mode: gasoline, diesel, hybrid, and BEV.
- Shared parts should stay visible across modes; variant-specific parts should
  appear with clear labels.

The explorer should include at least these clickable parts:

- intake and air path
- fuel storage and delivery
- engine block or motor
- turbocharger or compressor path
- transmission or reduction gear
- battery pack
- inverter and power electronics
- exhaust and aftertreatment
- cooling and thermal loop
- control network and sensors

Interaction requirements:

- Use real `<button>` elements or keyboard-reachable controls.
- Update a detail panel on click and keyboard activation.
- Provide visible focus states.
- Avoid hover-only information.
- Keep labels readable on mobile.
- Keep SVG or diagram text inside stable boxes.
- Include links to related technology pages when corresponding slugs exist.
- Do not present one architecture as universal; label the diagram as a composite
  map of common systems.

### 5.3 Expandable Card Pattern

Use native `<details>` and `<summary>` for expandable education cards unless a
custom behavior is demonstrably needed. This preserves keyboard support, works
without hydration, and keeps the static-first promise.

Each expandable card should include:

- title
- short neutral summary
- "mechanism path" list
- related archive links
- source posture note
- common misconception or neutrality guard

Example structure:

```html
<details class="system-card">
  <summary>
    <span>Gasoline fuel system</span>
    <span>Tank -> pump -> injector -> spark ignition</span>
  </summary>
  <div>
    <p>Neutral explanation...</p>
  </div>
</details>
```

### 5.4 Detail Pages

Every generated article page should open with a detail surface before the body:

- page title and summary
- status and last-reviewed state
- mechanism map
- "why this page exists" note
- related systems
- source count and source types
- neutrality guard

The article text remains the authority, but the opening page should orient a
reader before they commit to long-form reading.

## 6. Route-By-Route Requirements

### 6.1 `/`

- New v1 home surface.
- Feature the interactive car systems explorer.
- Surface four technology lanes with expandable cards.
- Link to eras, technologies, vehicles, controversies, sources, and glossary.
- Make archive identity clear in the first viewport.

### 6.2 `/technologies/`

- Shift from simple grouped card grid to system catalogue.
- Preserve category grouping from the collection schema.
- Add family quick filters or jump links.
- Highlight the four requested families.
- Add compact metadata: guide count, category, related examples.

### 6.3 `/technologies/[slug]/`

- Preserve existing generated routes and content collection rendering.
- Add richer article preface using the shared `ArticleLayout`.
- Keep `ArticleDiagram` or its successor visually aligned with the v1 system.
- Add side rail or below-content related links that remain readable on mobile.

### 6.4 `/eras/` And `/eras/[slug]/`

- Keep eras as the chronological spine.
- Restyle the timeline to avoid the old ornamental visual language.
- Frame eras as overlapping adoption contexts, not a single global sequence.

### 6.5 `/vehicles/` And `/vehicles/[slug]/`

- Keep the "examples, not reviews" rule prominent.
- Use vehicle cards to explain what each model illustrates.
- Avoid ranking-like visual treatments.
- If images are present, keep captions and attribution visible.

### 6.6 `/controversies/` And `/controversies/[slug]/`

- Keep a source-led evidence flow.
- Treat controversies chronologically and technically.
- Avoid moral certainty beyond what sources support.
- Emphasize regulatory record, affected systems, and documented consequences.

### 6.7 `/sources/`, `/glossary/`, `/search/`, `/about/`

- Bring these utility pages into the v1 visual system.
- Keep search and glossary highly scannable.
- Keep source pages legible, dense, and non-decorative.

## 7. Automotive System Coverage Model

The v1 content model should grow through system families. Each family gets a
repeatable information architecture:

1. Definition.
2. Physical location in the vehicle.
3. Main components.
4. Inputs and outputs.
5. Mechanism sequence.
6. Control logic or feedback loop.
7. Historical emergence.
8. Tradeoffs and constraints.
9. Failure, maintenance, or diagnostic context where educational.
10. Related systems.
11. Vehicle examples.
12. Neutral misconceptions.
13. Sources by claim type.

### 7.1 Stages And Piping

Coverage should include:

- intake path
- boost path
- charge air cooling
- fuel path
- coolant loop
- lubrication loop
- exhaust path
- aftertreatment path
- evaporative emissions path
- brake hydraulic path
- HVAC refrigerant path
- EV thermal loop

Core explanation pattern:

$$
\text{Flow System} =
\text{Source} \rightarrow \text{Pressure Driver} \rightarrow
\text{Control Point} \rightarrow \text{Work Or Treatment} \rightarrow
\text{Return Or Exit}
$$

Neutrality risks:

- Do not imply more pipes or stages mean better engineering.
- Do not imply simplicity is automatically superior.
- Separate passenger-car context from heavy-duty and racing contexts.

### 7.2 Engines And Transmissions

Coverage should include:

- four-stroke cycle
- spark ignition
- compression ignition
- naturally aspirated engines
- turbocharging and supercharging
- variable valve timing and lift
- engine control units
- manual transmissions
- torque converters
- planetary automatic transmissions
- dual-clutch transmissions
- continuously variable transmissions
- differentials and final drives
- hybrid power-split systems

Core explanation pattern:

$$
P = T\omega
$$

where \(P\) is power, \(T\) is torque, and \(\omega\) is angular speed. Use this
only where it clarifies the relationship between engine output, gearing, and
wheel speed.

Neutrality risks:

- Do not rank transmission types universally.
- Explain context: cost, efficiency window, durability, controllability,
  smoothness, packaging, emissions strategy, and driver expectations.
- Avoid enthusiast shorthand unless it is defined.

### 7.3 EV Motors And Power Electronics

Coverage should include:

- permanent-magnet synchronous motors
- induction motors
- axial-flux motors
- inverters
- DC/DC converters
- onboard chargers
- traction battery packs
- battery management systems
- regenerative braking
- reduction gearing
- thermal management
- charging connectors and charging levels
- vehicle-to-grid where supported by sources

Core explanation pattern:

$$
\text{Battery DC} \rightarrow \text{Inverter} \rightarrow
\text{Controlled AC Phases} \rightarrow \text{Motor Torque}
$$

Neutrality risks:

- Do not imply EVs have no complexity because they have fewer liquid-fuel parts.
- Distinguish vehicle operating emissions from lifecycle and grid questions.
- Avoid current-market claims unless freshly sourced and dated.

### 7.4 Gasoline And Diesel Systems

Coverage should include:

- fuel tank, pump, lines, rail, injectors
- port fuel injection
- direct gasoline injection
- common-rail diesel injection
- spark plugs and ignition coils
- glow plugs where relevant
- oxygen sensors
- mass-air-flow and manifold-pressure sensing
- catalytic converters
- exhaust gas recirculation
- diesel oxidation catalysts
- diesel particulate filters
- selective catalytic reduction
- onboard diagnostics

Core explanation pattern:

$$
\text{Fuel} + \text{Air} + \text{Control} \rightarrow
\text{Combustion} \rightarrow \text{Work} + \text{Heat} + \text{Emissions}
$$

Neutrality risks:

- Do not frame gasoline and diesel as simple winners or losers.
- Explain why applications differ.
- Keep regulatory and emissions claims tied to sources and jurisdiction.

## 8. Source Strategy

Use the existing source hierarchy in `docs/source-style-guide.md`. Prefer
government, standards, academic, museum, and technical-reference sources for
core facts. Manufacturer sources may support dates, specifications, and
manufacturer-stated design intent, but marketing claims require context.

Recommended source targets for the first v1 content architecture:

- U.S. DOE AFDC, "How Do All-Electric Cars Work?"
  <https://afdc.energy.gov/vehicles/how-do-all-electric-cars-work>
- U.S. DOE AFDC, "How Do Gasoline Cars Work?"
  <https://afdc.energy.gov/vehicles/how-do-gasoline-cars-work>
- U.S. DOE AFDC, "How Do Diesel Vehicles Work?"
  <https://afdc.energy.gov/vehicles/how-do-diesel-cars-work>
- U.S. DOE, "Internal Combustion Engine Basics"
  <https://www.energy.gov/cmei/vehicles/articles/internal-combustion-engine-basics>
- U.S. DOE AFDC, "Electric Vehicle Charging Stations"
  <https://afdc.energy.gov/fuels/electricity-stations>
- NHTSA, "Electric and Hybrid Vehicles: Battery, Charging and Safety"
  <https://www.nhtsa.gov/vehicle-safety/electric-and-hybrid-vehicles>
- EPA, "Emission Standards Reference Guide"
  <https://www.epa.gov/emission-standards-reference-guide/basic-information-about-emission-standards-reference-guide-road>
- SAE J1772 standard landing page
  <https://saemobilus.sae.org/standards/j1772_199610-sae-electric-vehicle-conductive-charge-coupler>
- U.S. EIA, "Diesel fuel explained"
  <https://www.eia.gov/energyexplained/diesel-fuel/>
- MIT OpenCourseWare, "Internal Combustion Engines"
  <https://ocw.mit.edu/courses/2-61-internal-combustion-engines-spring-2017/>
- Encyclopaedia Britannica technical cross-checks for gasoline engines,
  transmissions, and cooling systems
  <https://www.britannica.com/technology/gasoline-engine>
  <https://www.britannica.com/technology/transmission-engineering>
  <https://www.britannica.com/technology/automobile/Cooling-system>
- Federal Motor Vehicle Safety Standards for fuel systems, brake hoses, and EV
  electrical safety boundaries
  <https://www.law.cornell.edu/cfr/text/49/571.301>
  <https://www.law.cornell.edu/cfr/text/49/571.106>
  <https://www.law.cornell.edu/cfr/text/49/571.305>
- Existing AutoEvolve source library in `src/data/sources.ts`

Source claims should map to support levels:

- Component lists: AFDC, NHTSA, service-neutral technical references.
- Regulations: EPA, NHTSA, DOJ, CARB, court records.
- Standards: SAE, ISO, IEC where accessible.
- Historical firsts: museums, academic books, manufacturer archives with
  corroboration when possible.
- Recent adoption or market status: current government datasets or dated
  industry reports, never memory.

## 9. Implementation Phases

### Phase 0: Commit The Plan

Files:

- `v1alldetails.md`
- `themes/Shrimp-color-heavy.md`

Commit message:

```text
docs: add v1 redesign implementation plan
```

### Phase 1: Theme Foundation

Files:

- `src/styles/global.css`
- `src/layouts/BaseLayout.astro`
- `src/components/SiteHeader.astro`
- `src/components/SiteFooter.astro`

Known risk:

- `src/styles/global.css` currently owns almost the entire visual system. Keep
  the first pass centralized for speed, but leave clear token sections and
  component sections so a later split into component-level CSS is easy.

Acceptance criteria:

- New tokens exist.
- Header is compact, white, sticky, and keyboard-friendly.
- Footer matches v1 density.
- Focus state uses orange with adequate contrast.
- No route loses the skip link or landmarks.

### Phase 2: Interactive Explorer And Cards

Files:

- `src/components/CarSystemsExplorer.astro`
- `src/components/SystemFamilyCards.astro`
- `src/components/ContentCard.astro`
- `src/pages/index.astro`

Acceptance criteria:

- Explorer has at least 10 clickable parts.
- Keyboard selection updates the detail panel.
- Four requested technology families are visible.
- Cards expand without a framework dependency.
- Related links point to existing archive routes when available.

### Phase 3: Article And Index Surfaces

Files:

- `src/layouts/ArticleLayout.astro`
- `src/components/ArticleDiagram.astro`
- `src/components/StaticDiagram.astro`
- `src/pages/technologies/index.astro`
- other route indexes as needed

Acceptance criteria:

- Detail pages have a stronger mechanism-first preface.
- Index pages use v1 surfaces and avoid generic card-grid sameness.
- Existing content collection rendering remains intact.

### Phase 4: Documentation And Verification

Files:

- `README.md`
- `docs/contribution-guide.md`
- `docs/editorial-policy.md` if neutrality rules are changed
- `docs/source-style-guide.md` if source rules are changed
- tests only where behavior is changed or coverage needs support

Acceptance criteria:

- README mentions v1 UI direction and the plan file.
- Contribution guide mentions the audit loop and interactive UI checks.
- Build and tests pass or residual failures are documented.

## 10. Continuous Audit Workflow

Run `/audit` style review after each large implementation phase and after final
verification. The intended threshold is:

- no critical issues
- no high issues
- medium issues only when explicitly documented and not user-blocking
- final state should be minor infringement and below

Audit categories:

- accessibility
- performance
- theming
- responsive behavior
- visual anti-patterns
- editorial neutrality
- static-first maintainability

Suggested local commands:

```bash
npm run typecheck
npm run lint
npm run test
npm run build
npm run test:e2e
```

The browser audit should include:

- desktop viewport around 1440px wide
- mobile viewport around 390px wide
- homepage explorer click path
- at least one technology detail page
- at least one vehicle detail page
- at least one controversy detail page
- no horizontal overflow
- visible focus outlines
- no unreadable diagram labels

## 11. Subagent Workflow

Subagents should be used at suitable times, especially when gathering materials
for future subpages. They should not replace the main implementer on tightly
coupled code edits unless the write scope is cleanly separated.

Good subagent tasks:

- gather source targets for one technology family
- compare existing pages against source coverage requirements
- audit one route family for neutrality drift
- inspect visual regressions after screenshots are available
- draft scoped content outlines for a single subsystem family

Bad subagent tasks:

- vague "make the site better" assignments
- broad edits across shared layout and global CSS while another agent edits the
  same files
- unsourced content writing
- market-status claims without current browsing

Prompt pattern:

```text
Read-only task. Gather source-backed material for [family].
Return: subsystem outline, key terms, neutrality risks, citation targets,
and pages that should be created or expanded. Do not edit files.
```

For coding workers, assign disjoint ownership:

```text
You own only [file set]. Other agents may be editing nearby files.
Do not revert their changes. List every changed path in your final answer.
```

## 12. Git Commit Cadence

Commit when a reviewable unit is complete and verified enough to stand alone.

Recommended commits:

1. `docs: add v1 redesign implementation plan`
2. `style: apply v1 theme foundation`
3. `feat: add interactive car systems explorer`
4. `feat: redesign archive index and article surfaces`
5. `docs: document v1 UI and audit workflow`
6. `test: update coverage for v1 interactions` if test changes are needed

Do not mix unrelated content expansion with shared UI changes unless the content
is required to demonstrate the UI. Keep commits small enough that a reviewer can
understand the motivation and rollback path.

## 13. Rollback Plan

Because the redesign is mostly shared components and CSS, rollback should be
straightforward:

- revert the v1 UI commits if visual regressions are unacceptable
- preserve `v1alldetails.md` as planning context unless the plan itself is
  superseded
- keep content files untouched unless a content-specific change is included
- use `git revert` rather than destructive checkout/reset commands

## 14. Definition Of Done

The first v1 implementation is done when:

- `v1alldetails.md` is committed with the theme file.
- Homepage has a new system-first visual experience.
- Users can click or keyboard-select car parts and learn what they do.
- The four requested technology families are visibly represented.
- Shared cards have a new expansion pattern.
- Detail pages feel structurally redesigned, not merely recolored.
- The Shrimp theme is reflected through disciplined tokens and component rules.
- Documentation explains the v1 plan and audit expectations.
- Verification has been run according to risk.
- Any remaining issues are minor or explicitly documented.

## 15. Immediate Build Slice

Start with these files:

- `src/styles/global.css`
- `src/components/CarSystemsExplorer.astro`
- `src/components/SystemFamilyCards.astro`
- `src/components/ContentCard.astro`
- `src/components/SiteHeader.astro`
- `src/components/SiteFooter.astro`
- `src/layouts/ArticleLayout.astro`
- `src/pages/index.astro`
- `src/pages/technologies/index.astro`
- `README.md`
- `docs/contribution-guide.md`

This slice gives the site a new body language, a useful interactive core, and a
clear path for deeper content work without forcing a schema migration on day one.
