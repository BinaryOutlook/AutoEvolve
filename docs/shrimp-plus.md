# Shrimp Plus Implementation Note

## Purpose

This note turns the original `shrimp-plus` idea list into a scoped v1 follow-up
plan. The goal is to improve reader wayfinding and technical explanation
without turning AutoEvolve into an unsourced bulk-content generator.

## Implemented In Current Pass

- Header quick search now sits in the main header and returns inline Pagefind
  results without route navigation.
- `/search/` is now framed as **Advanced Search** for the full-page search
  workspace.
- Glossary and source-library links moved out of primary navigation and into
  footer utility navigation.
- Article pages now show an early related-path strip, giving readers
  Wikipedia-like cross-links before the end-of-page related-link lists.
- Selected complex technology pages now render original mechanism-flow panels
  from `src/lib/system-flows.ts`.
- Source guidance now covers original diagrams and the metadata required if an
  AI-generated explanatory image is ever used.
- The technology schema now includes a `manufacturing-supply` category for
  production and supply-system explainers that are not powertrain components.
- Fifteen source-reviewed modern technology and manufacturing pages were added:
  autonomous-driving system stack, ADAS sensor fusion, brake-by-wire, zonal
  electrical architecture, over-the-air software updates, vehicle
  cybersecurity, charging communication protocols, cell-to-pack and structural
  battery packaging, high-voltage safety disconnects, battery swapping, vehicle
  startup/shutdown/sleep states, software-defined vehicle architecture, large
  structural casting, supplier-tier manufacturing networks, and vertical
  integration in EV manufacturing.
- Representative new pages now have original mechanism-flow panels for charging
  negotiation, OTA updates, battery swapping, high-voltage isolation, zonal
  routing, and large structural casting.
- Suitable abstract technology pages now have AI-generated explanatory image
  plates registered in `src/lib/generated-media.ts`; each is visibly labeled as
  illustrative and not source evidence.

## Content Expansion Scope

The gap audit confirmed that several "top 20 modern technologies" ideas were
already covered by existing pages, while the missing high-value slice was mostly
software architecture, charging communication, safety state management, and
manufacturing/supply context.

| Candidate                                             | Status                                                                          |
| ----------------------------------------------------- | ------------------------------------------------------------------------------- |
| Autonomous-driving system stack                       | Implemented at `/technologies/autonomous-driving-system-stack/`.                |
| Brake-by-wire                                         | Implemented at `/technologies/brake-by-wire/`.                                  |
| Battery swapping                                      | Implemented at `/technologies/battery-swapping/`.                               |
| Steer-by-wire                                         | Deferred until direct steering-by-wire safety and regulatory sources are added. |
| Zonal electrical architecture                         | Implemented at `/technologies/zonal-electrical-architecture/`.                  |
| Over-the-air update systems                           | Implemented at `/technologies/over-the-air-software-updates/`.                  |
| ADAS sensor fusion                                    | Implemented at `/technologies/adas-sensor-fusion/`.                             |
| Cell-to-pack and structural battery packaging         | Implemented at `/technologies/cell-to-pack-structural-battery/`.                |
| Thermal-runaway mitigation                            | Deferred for a battery-safety source pass.                                      |
| Vehicle cybersecurity                                 | Implemented at `/technologies/vehicle-cybersecurity/`.                          |
| Software-defined vehicle architecture                 | Implemented at `/technologies/software-defined-vehicle-architecture/`.          |
| High-voltage safety disconnects                       | Implemented at `/technologies/high-voltage-safety-disconnects/`.                |
| Lidar and radar sensing                               | Deferred; adaptive cruise and ADAS fusion cover part of the ground.             |
| Electric axle drive units                             | Deferred; current motor and inverter pages cover the components.                |
| Large structural casting                              | Implemented at `/technologies/large-structural-casting/`.                       |
| Automated assembly and inspection                     | Deferred for a manufacturing-source pass.                                       |
| Supplier-tier manufacturing networks                  | Implemented at `/technologies/supplier-tier-manufacturing-networks/`.           |
| Vertical integration in EV manufacturing              | Implemented at `/technologies/vertical-integration-ev-manufacturing/`.          |
| Charging communication protocols                      | Implemented at `/technologies/charging-communication-protocols/`.               |
| Vehicle startup, shutdown, and sleep-state management | Implemented at `/technologies/vehicle-startup-shutdown-states/`.                |

Deferred candidates remain scoped notes, not active work. Each still needs
source records before implementation. Prefer official technical, regulatory,
standards, academic, or manufacturer engineering material, and keep
manufacturer claims bounded to what the source can support.

## Manufacturing Pages

Manufacturing coverage now begins inside the technology collection through the
`manufacturing-supply` category rather than a separate route family. The first
slice covers large structural casting, supplier-tier manufacturing networks, and
vertical integration in EV manufacturing.

Future manufacturing topics should still be planned before implementation.
Suitable topics include unibody versus body-on-frame construction, battery-pack
manufacturing, automated inspection, and global assembly logistics.

Acceptance criteria for the first manufacturing slice:

- explains the manufacturing process before naming vehicle examples
- includes at least three source records with distinct roles
- avoids brand-advocacy language about superiority
- links to relevant vehicle and technology pages
- includes sourced photos or original diagrams with visible attribution

## Diagram Rules

Use original HTML/CSS mechanism flows first because they are inspectable,
accessible, and easy to maintain. Use generated bitmap images only when a visual
cannot be explained cleanly with structured text, sourced photos, or original
site diagrams. Generated visuals must cite model, date, prompt/editing context,
and a clear note that they are illustrative.
