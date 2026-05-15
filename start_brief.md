# Technical Brief: Automotive Technology Evolution Website

## 1. Executive Summary

This brief defines a neutral, educational website for documenting the evolution of automotive technology. The project should help readers understand how vehicles moved from early mechanical experiments and piston-driven internal combustion engines toward gasoline, diesel, hybrid, plug-in hybrid, and battery-electric powertrains.

The site is not a review publication, buyer guide, enthusiast ranking, market-price tracker, or brand advocacy project. Its purpose is historical and technical: to explain technologies, engineering milestones, regulatory pressures, controversies, and design tradeoffs as part of the broader story of human mobility.

The recommended implementation is a static-first content website built with open standards, Markdown or MDX content files, a typed content schema, generated search, and optional backend services only where they add clear value. A student or solo developer should be able to build, host, and maintain the first version using free or low-cost services such as GitHub Pages, Netlify, Vercel, Supabase, and similar platforms.

## 2. Project Assumptions

These assumptions should guide implementation unless the project owner later revises them:

| Area              | Assumption                                                                                         |
| ----------------- | -------------------------------------------------------------------------------------------------- |
| Primary format    | Public educational website, not a private app.                                                     |
| Initial language  | English. Internationalization may be added later.                                                  |
| Content ownership | Original explanatory writing with cited references.                                                |
| Editorial stance  | Neutral, evidence-led, and non-promotional.                                                        |
| Vehicle coverage  | Vehicles are examples of broader technologies, not review subjects.                                |
| Hosting target    | Free static hosting for the first release.                                                         |
| Backend scope     | No backend required for the MVP unless submissions, accounts, or structured admin tools are added. |
| Monetization      | None in the first release. Avoid ads that may weaken perceived neutrality.                         |
| User accounts     | Not required for the public MVP.                                                                   |
| Data persistence  | Git-backed Markdown and JSON first; database later if content workflow requires it.                |

## 3. Website Purpose and Mission

### 3.1 Mission Statement

The website exists to document, explain, and contextualize the development of automotive technology from early self-propelled vehicles to modern electric-drive systems. It should make technical ideas understandable without stripping away the engineering details that make them historically important.

### 3.2 Purpose

The site should:

- Preserve a clear chronological record of major automotive technologies.
- Explain how systems work at a component and vehicle level.
- Connect engineering changes to social, regulatory, environmental, manufacturing, and infrastructure conditions.
- Present important vehicle models only as examples of broader technological development.
- Provide readers with reliable starting points for independent research.
- Treat major controversies, including Dieselgate, as historical and regulatory case studies rather than opinion pieces.

### 3.3 Non-Goals

The site should not:

- Rank vehicles, brands, engineers, countries, or technologies as "best" or "worst."
- Publish vehicle reviews, ownership advice, purchasing advice, restoration advice, tuning advice, or market-value commentary.
- Present brand marketing claims as facts without independent context.
- Use unsupported claims about motives, intent, reliability, or superiority.
- Frame the history of automotive technology as a simple story of linear progress.
- Treat one propulsion type as the inevitable endpoint of mobility.

## 4. Success Criteria

The project is successful when:

- A reader can trace how major automotive systems evolved across eras.
- Each era page explains the dominant technologies, constraints, and transitions of that period.
- Each technology page explains the underlying mechanism, historical use, advantages, limitations, and related systems.
- Each vehicle example clearly states why it is included and what broader technology it illustrates.
- Every major factual claim is backed by a source or clearly marked as a general explanation.
- Dieselgate and similar controversies are presented with dates, regulatory context, affected technologies, and documented outcomes.
- The website can be deployed on a free static hosting service.
- Pages meet accessibility, performance, and citation-quality standards.
- Another developer can add new eras, technologies, sources, and vehicle examples by following documented schemas and editorial rules.

## 5. Target Audience

### 5.1 Primary Readers

| Audience                | Needs                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------ |
| Students                | Clear explanations, timelines, definitions, and source links for assignments or self-study.      |
| Automotive hobbyists    | Technical context beyond model trivia or brand-centered storytelling.                            |
| General readers         | An approachable path into engineering history without assuming specialist knowledge.             |
| Educators               | Neutral pages that can support lessons about engines, electrification, regulation, and mobility. |
| Early-stage researchers | Curated starting points for deeper reading.                                                      |

### 5.2 Secondary Readers

| Audience                                | Needs                                                                                        |
| --------------------------------------- | -------------------------------------------------------------------------------------------- |
| Web developers contributing to the site | Clear content schemas, page templates, contribution rules, and quality checks.               |
| Museums or local history groups         | Reusable summaries and references for public education.                                      |
| Policy-curious readers                  | Context about emissions, safety, fuel economy, and electrification without advocacy framing. |

### 5.3 Reader Journeys

The website should support these common journeys:

1. A reader starts with "How did cars move from carburetors to fuel injection?" and lands on a technology page that links to emissions, electronics, fuel economy, and example vehicles.
2. A reader starts with "What was Dieselgate?" and lands on a controversy page that explains diesel emissions controls, laboratory testing, defeat devices, regulatory timelines, and downstream effects.
3. A reader starts with "Why did hybrids matter before EVs became common?" and lands on an era page that explains regenerative braking, motor-generators, battery sizing, and control strategies.
4. A reader starts with a vehicle model and learns why that model is historically relevant without being pulled into a review, ranking, or fan narrative.
5. A student browses the eras chronology and follows links from early piston engines to gasoline engines, diesel engines, hybrids, plug-in hybrids, and battery electric vehicles.

## 6. Editorial Tone and Content Principles

### 6.1 Tone

The writing should be:

- Neutral but not lifeless.
- Technical but readable.
- Chronological where time matters.
- Precise about uncertainty.
- Careful with claims about causation.
- Interested in systems, not personalities alone.

Use active, concrete language when explaining mechanisms. Avoid vague praise such as "revolutionary," "legendary," "game-changing," "best-in-class," or "ahead of its time" unless directly quoted from a source and clearly attributed.

### 6.2 Neutrality Rules

Writers and editors must:

- Attribute claims to sources when claims are specific, disputed, numerical, legal, or historical.
- Separate engineering facts from interpretation.
- Avoid language that implies brand preference.
- Avoid moralizing tone in controversy pages.
- Avoid simplifying regulatory or engineering topics into heroes and villains.
- Present technologies as responses to constraints, including cost, materials, fuel supply, emissions regulation, infrastructure, manufacturing capability, consumer expectations, and safety requirements.

### 6.3 Evidence Hierarchy

When sources conflict, prefer this order:

1. Primary technical sources, such as patents, engineering papers, standards, regulatory filings, service manuals, and official technical documents.
2. Government and regulatory documents, such as EPA, NHTSA, CARB, EU, UNECE, and national transport-agency materials.
3. Academic books and peer-reviewed publications.
4. Manufacturer technical documents and archived press material, with marketing language treated cautiously.
5. Museum collections, historical archives, and reputable encyclopedic references.
6. Specialist journalism, used mainly for contemporary context and chronology.

### 6.4 Citation Requirements

Every article should include a "Sources and Further Reading" section. Source entries should include:

- Title.
- Author or organization.
- Publication date when available.
- URL or bibliographic identifier.
- Accessed date for web sources.
- Notes explaining what the source supports.

Use a source only for what it can reasonably support. For example, a manufacturer press release can support the date a model was announced, but it should not be treated as independent proof that the model was technically superior.

### 6.5 Handling Uncertainty

Historical automotive claims often involve conflicting firsts, regional differences, and varied definitions. The site should use language such as:

- "One of the earliest documented examples..."
- "Often cited as..."
- "In the United States market..."
- "Under the definition used by..."
- "Available evidence indicates..."

Avoid unsupported absolutes such as:

- "The first ever..."
- "The most important..."
- "The best..."
- "The car that changed everything..."

### 6.6 Technical Explanation Standard

Technology pages should explain concepts with short formulas when useful. Do not force mathematics into every page, but use it where it clarifies engineering relationships.

Examples:

Engine power can be introduced with:

$$
P = T \omega
$$

Where:

- \(P\) is power.
- \(T\) is torque.
- \(\omega\) is angular speed.

Thermal efficiency can be introduced with:

$$
\eta = \frac{W_\text{out}}{Q_\text{in}}
$$

Where:

- \(\eta\) is efficiency.
- \(W\_\text{out}\) is useful work output.
- \(Q\_\text{in}\) is heat energy supplied by the fuel.

Battery energy capacity can be introduced with:

$$
E = V \times Q
$$

Where:

- \(E\) is energy.
- \(V\) is voltage.
- \(Q\) is charge capacity.

Vehicle-level energy use can be simplified as:

$$
E_\text{use} = E_\text{rolling} + E_\text{aero} + E_\text{grade} + E_\text{accessory} - E_\text{regen}
$$

This helps readers understand why tires, drag, road grade, accessories, and regenerative braking all affect efficiency.

## 7. Suggested Site Structure

### 7.1 Primary Navigation

The main navigation should be simple and content-led:

- Home
- Eras
- Technologies
- Vehicles as Examples
- Controversies
- Glossary
- Sources
- About

### 7.2 Route Map

Recommended routes:

| Route                    | Purpose                                                                           |
| ------------------------ | --------------------------------------------------------------------------------- |
| `/`                      | Overview, mission, featured era entry points, latest added pages.                 |
| `/eras/`                 | Index of historical eras.                                                         |
| `/eras/[slug]/`          | Era detail page.                                                                  |
| `/technologies/`         | Technology index grouped by powertrain, chassis, safety, emissions, and software. |
| `/technologies/[slug]/`  | Deep technical explainer for one technology or component.                         |
| `/vehicles/`             | Index of example vehicles, filtered by era and technology.                        |
| `/vehicles/[slug]/`      | Example page focused on what the vehicle illustrates.                             |
| `/controversies/`        | Index of historical controversies and regulatory case studies.                    |
| `/controversies/[slug]/` | Neutral case study, such as Dieselgate.                                           |
| `/glossary/`             | Definitions of technical terms.                                                   |
| `/sources/`              | Source library and citation policy.                                               |
| `/about/`                | Mission, editorial policy, contribution policy, and project status.               |
| `/search/`               | Search interface if search is not embedded in the header.                         |

### 7.3 Home Page Requirements

The home page should immediately communicate that this is an educational automotive technology history site. It should include:

- A concise mission statement.
- A prominent era chronology entry point.
- Links to major eras.
- Links to core technology clusters.
- A short explanation of the editorial approach.
- Recently updated content.
- A source-policy link.

Avoid a marketing-style hero page. The first screen should make the archive usable, not merely decorative.

### 7.4 Era Chronology Requirements

The eras index is the primary chronological structure. It should support:

- Chronological browsing by historical era.
- Era entries that link to detail pages, technology pages, vehicle examples, or controversy pages where appropriate.
- Approximate dates when exact dates are contested or unnecessary.
- Clear distinction between invention, commercialization, regulation, and mass adoption.

Era chronology should not imply that a technology became universal at the moment it was invented.

### 7.5 Era Page Template

Each era page should include:

1. Title and approximate date range.
2. Short summary.
3. Historical context.
4. Major propulsion technologies.
5. Major component changes.
6. Manufacturing and infrastructure context.
7. Regulation and safety context where relevant.
8. Representative vehicle examples.
9. Key technologies linked from the era.
10. "What changed from the previous era."
11. "What remained unresolved."
12. Sources and further reading.

### 7.6 Technology Page Template

Each technology page should include:

1. Definition.
2. Historical context.
3. How it works.
4. Main components.
5. Why it emerged.
6. Engineering tradeoffs.
7. Relationship to other technologies.
8. Example vehicles or applications.
9. Diagrams or schematics where practical.
10. Common misconceptions.
11. Sources and further reading.

### 7.7 Vehicle Example Page Template

Vehicle pages should be deliberately constrained:

1. Vehicle name, manufacturer, production period, and market context.
2. Why the vehicle is included.
3. Technologies illustrated.
4. Historical role.
5. Technical summary.
6. Links to relevant era and technology pages.
7. Source notes.

Do not include:

- Star ratings.
- Buying recommendations.
- Exhaustive trim comparisons.
- Used-market prices.
- Subjective driving impressions.
- Brand-fan language.

### 7.8 Controversy Page Template

Controversy pages should use a structured, source-led format:

1. Summary.
2. Timeline of events.
3. Technical background.
4. Regulatory or legal background.
5. Affected technologies.
6. Documented findings.
7. Outcomes and industry response.
8. Longer-term technical implications.
9. Open questions or disputed interpretations, if any.
10. Sources and official documents.

For Dieselgate, the page should explain diesel emissions control, NOx formation, test cycles, exhaust aftertreatment, engine control software, and the difference between laboratory certification and real-world operation. The page should avoid reducing the topic to scandal storytelling alone.

## 8. Main Historical Eras to Cover

The site should organize history into eras that are useful for readers, while acknowledging that technologies overlap across periods and regions.

### 8.1 Early Self-Propelled Mobility and Piston Experiments

Approximate range: pre-1880s.

Coverage should include:

- Steam road vehicles and early self-propelled carriages.
- Early electric experiments.
- Internal combustion research before mass automobile production.
- Limits of materials, roads, fuel supply, ignition, and manufacturing.
- The difference between invention, demonstration, and practical transport.

Topics:

- External combustion versus internal combustion.
- Early boilers and steam power.
- Early batteries and electric motors.
- Piston, crank, connecting rod, and flywheel fundamentals.
- Steering, braking, and road-surface limitations.

### 8.2 Birth of the Practical Automobile

Approximate range: 1880s to 1910s.

Coverage should include:

- Four-stroke gasoline engines.
- Early carburetion and ignition systems.
- Chain and shaft drive.
- Pneumatic tires.
- Early transmissions.
- Standardization of driver controls.
- Early vehicle manufacturing.

Potential example vehicles:

- Benz Patent-Motorwagen as an example of early gasoline automobile packaging.
- Ford Model T as an example of mass production, maintainability, and standardization.
- Early electric taxis or city cars as examples of battery-electric mobility before modern lithium-ion cells.

### 8.3 Standardization, Mass Production, and Mechanical Maturity

Approximate range: 1910s to 1945.

Coverage should include:

- Assembly-line manufacturing.
- More durable engines and drivetrains.
- Electric starters.
- Improved lubrication and cooling.
- Hydraulic brakes.
- Closed body construction.
- Early diesel passenger and commercial applications.
- Supercharging and early forced induction.

Topics:

- Why electric starters mattered for usability.
- The spread of synchromesh transmissions.
- Body-on-frame construction versus early unitized structures.
- Commercial diesel adoption and fuel-economy logic.

### 8.4 Postwar Expansion and Consumer-Scale Engineering

Approximate range: 1945 to early 1970s.

Coverage should include:

- High-volume global automobile manufacturing.
- Automatic transmissions.
- Unibody construction.
- Radial tires.
- Improved suspension systems.
- Engine architecture diversification.
- Early emissions awareness.
- Growing highway infrastructure.

Topics:

- Torque converters and planetary gearsets.
- Overhead valve and overhead camshaft layouts.
- Vehicle packaging, comfort, and safety structures.
- Fuel availability and regional market differences.

### 8.5 Emissions, Fuel Economy, and Electronic Control

Approximate range: 1970s to 1990s.

Coverage should include:

- Oil crises and fuel-economy pressure.
- Catalytic converters.
- Unleaded gasoline.
- Oxygen sensors.
- Electronic fuel injection.
- Engine control units.
- On-board diagnostics.
- Anti-lock braking systems.
- Airbags and crash-safety regulation.

Topics:

- Why carburetors gave way to electronic fuel control.
- Feedback loops in engine management.
- Three-way catalytic converter operation.
- The relationship between regulation and sensor-driven control.

### 8.6 Modern Diesel, Common Rail, and Emissions Aftertreatment

Approximate range: 1990s to 2010s.

Coverage should include:

- Turbocharged direct-injection diesel engines.
- Common-rail injection.
- High-pressure injection and atomization.
- Exhaust gas recirculation.
- Diesel particulate filters.
- Selective catalytic reduction.
- Lean NOx traps.
- Passenger diesel expansion in some markets.
- Dieselgate as a technical and regulatory case study.

Dieselgate should be framed around:

- NOx emissions formation and control.
- The role of software in emissions systems.
- Certification testing versus in-use emissions.
- Defeat device definitions.
- Settlement and regulatory consequences.
- The effect on diesel passenger-vehicle policy and public trust.

### 8.7 Hybridization and Regenerative Braking

Approximate range: late 1990s to 2010s.

Coverage should include:

- Hybrid electric vehicles.
- Series, parallel, and power-split architectures.
- Regenerative braking.
- Motor-generators.
- Nickel-metal hydride and lithium-ion hybrid batteries.
- Engine stop-start.
- Power electronics.
- Control software.

Potential example vehicles:

- Toyota Prius as an example of power-split hybrid commercialization.
- Honda Insight as an example of early lightweight hybrid packaging.
- Hybrid buses and fleet vehicles as examples of stop-start duty cycles.

### 8.8 Plug-In Hybrids and Transitional Electric-Drive Vehicles

Approximate range: late 2000s to 2020s.

Coverage should include:

- Plug-in hybrid electric vehicles.
- Extended-range electric vehicle concepts.
- Larger traction batteries.
- Onboard charging.
- Charge-depleting and charge-sustaining operation.
- Electric-only range as a design variable.
- Real-world use dependence on charging behavior.

Potential example vehicles:

- Chevrolet Volt as an example of range-extended plug-in architecture.
- Mitsubishi Outlander PHEV as an example of plug-in hybrid SUV packaging.
- Toyota Prius Plug-in/Prime as an example of adapting a hybrid platform to external charging.

### 8.9 Battery Electric Vehicles and the Modern EV Era

Approximate range: late 2000s onward.

Coverage should include:

- Lithium-ion traction batteries.
- Battery management systems.
- AC and DC charging.
- Permanent magnet, induction, and wound-field motors.
- Inverters and power electronics.
- Thermal management.
- Regenerative braking integration.
- Charging infrastructure.
- Vehicle software and over-the-air updates.
- Battery recycling and second-life considerations.

Potential example vehicles:

- Nissan Leaf as an example of mass-market battery-electric packaging.
- Tesla Roadster as an example of lithium-ion performance application.
- Tesla Model S as an example of long-range EV architecture and software integration.
- BYD and other battery-focused manufacturers as examples of vertical integration and battery chemistry strategy.

### 8.10 Software-Defined, Connected, and Electrified Mobility

Approximate range: 2020s onward.

Coverage should include:

- Vehicle domain controllers.
- Software-defined vehicle architecture.
- Over-the-air updates.
- Advanced driver assistance systems.
- High-voltage platforms.
- Heat pumps.
- 800 V electrical architectures.
- Bidirectional charging.
- Charging networks and interoperability.
- Battery chemistries such as NMC, NCA, LFP, sodium-ion where historically relevant.

This era should be updated carefully over time because recent developments can change quickly. The site should mark fast-moving pages with a "last reviewed" date.

## 9. Key Automotive Technologies and Components

The technology taxonomy should let readers browse by system rather than by brand.

### 9.1 Power Generation and Propulsion

Pages to create:

- Steam power and external combustion.
- Four-stroke spark-ignition engine.
- Two-stroke engine.
- Diesel compression-ignition engine.
- Rotary engine.
- Turbocharging and supercharging.
- Direct injection.
- Common-rail injection.
- Hybrid electric drive.
- Plug-in hybrid drive.
- Battery electric drive.
- Fuel cell electric drive, as a related branch of electric propulsion.

### 9.2 Engine Subsystems

Pages to create:

- Pistons, rings, cylinders, and compression.
- Crankshaft and connecting rods.
- Valve trains, camshafts, pushrods, and variable valve timing.
- Carburetors.
- Port fuel injection.
- Gasoline direct injection.
- Ignition systems.
- Lubrication systems.
- Cooling systems.
- Engine control units.
- Sensors and feedback control.

### 9.3 Fuels and Energy Storage

Pages to create:

- Gasoline as an automotive fuel.
- Diesel fuel and compression ignition.
- Leaded and unleaded gasoline.
- Biofuels and blended fuels.
- Hydrogen as an automotive energy carrier.
- Nickel-metal hydride batteries.
- Lithium-ion batteries.
- LFP, NMC, NCA, and other battery chemistries.
- Battery pack architecture.
- Battery degradation and thermal control.

### 9.4 Transmission and Driveline

Pages to create:

- Clutch and manual transmission.
- Synchromesh.
- Torque converter.
- Planetary automatic transmission.
- Continuously variable transmission.
- Dual-clutch transmission.
- Differential.
- Limited-slip differential.
- All-wheel drive systems.
- Electric single-speed reduction drive.
- Integrated e-axles.

### 9.5 Emissions and Environmental Controls

Pages to create:

- Tailpipe emissions categories.
- Carbon monoxide, hydrocarbons, NOx, particulates, and \(CO_2\).
- Exhaust gas recirculation.
- Three-way catalytic converter.
- Oxygen sensor.
- Diesel oxidation catalyst.
- Diesel particulate filter.
- Selective catalytic reduction.
- Lean NOx trap.
- On-board diagnostics.
- Real-world emissions testing.

### 9.6 Chassis, Safety, and Control

Pages to create:

- Body-on-frame and unibody construction.
- Suspension layouts.
- Hydraulic brakes.
- Disc brakes and drum brakes.
- Anti-lock braking systems.
- Electronic stability control.
- Airbags.
- Seat belts and restraint systems.
- Crumple zones.
- Power steering and electric power steering.
- Tire technology.

### 9.7 Electric-Drive Components

Pages to create:

- Traction motor.
- Inverter.
- DC/DC converter.
- Onboard charger.
- Charge port and EVSE.
- Battery management system.
- High-voltage safety.
- Regenerative braking.
- Thermal management.
- Heat pump.
- Charging standards and connector families.

### 9.8 Software, Diagnostics, and Networks

Pages to create:

- Electronic control units.
- CAN bus.
- OBD-II.
- Domain controllers.
- Over-the-air updates.
- Sensor fusion basics.
- Advanced driver assistance systems.
- Cybersecurity basics for connected vehicles.
- Data logging and telematics.

## 10. Use of Example Vehicles

### 10.1 Principle

Vehicles should be used as concrete examples of broader technologies. A vehicle is included because it illustrates an engineering transition, commercialization milestone, regulatory issue, or system architecture.

### 10.2 Inclusion Criteria

A vehicle example should meet at least one of these criteria:

- It demonstrates a technology in an early, influential, or unusually clear form.
- It helped commercialize a system that later became widespread.
- It shows how a technology was adapted to a specific market or regulatory context.
- It appears in official regulatory or legal documents related to a technical controversy.
- It provides a useful comparison point between architectures.

### 10.3 Required Vehicle Page Framing

Every vehicle page should answer:

- What broader technology does this vehicle illustrate?
- What historical period does it belong to?
- Which systems are relevant?
- What should readers study next?

### 10.4 Example Vehicle List

This list is not exhaustive and should not be framed as a ranking.

| Vehicle                                      | Use as Example Of                                                         |
| -------------------------------------------- | ------------------------------------------------------------------------- |
| Benz Patent-Motorwagen                       | Early gasoline automobile integration.                                    |
| Ford Model T                                 | Mass production, standardization, maintainability.                        |
| Detroit Electric or similar early EV         | Early battery-electric urban mobility.                                    |
| Mercedes-Benz 260 D                          | Early diesel passenger-car application.                                   |
| Citroen Traction Avant                       | Front-wheel drive and unitized body concepts.                             |
| Oldsmobile Hydra-Matic-equipped models       | Early mass-market automatic transmission.                                 |
| Toyota Prius                                 | Power-split hybrid commercialization.                                     |
| Honda Insight                                | Early lightweight hybrid design.                                          |
| GM EV1                                       | Late-20th-century battery-electric development and infrastructure limits. |
| Chevrolet Volt                               | Plug-in hybrid and range-extended architecture.                           |
| Nissan Leaf                                  | Mass-market battery electric vehicle.                                     |
| Tesla Roadster                               | Lithium-ion battery pack use in a modern EV sports car.                   |
| Tesla Model S                                | Long-range EV architecture, power electronics, software integration.      |
| Volkswagen TDI models affected by Dieselgate | Diesel emissions control, software, and regulation.                       |
| BYD plug-in and battery-electric models      | Battery integration and electrified platform strategy.                    |

### 10.5 Vehicle Content Rules

Do:

- Link vehicles to technology pages.
- Describe production dates and markets precisely.
- Explain why the vehicle matters in a system-level history.
- Include citations for technical specifications.
- Use neutral terms such as "illustrates," "demonstrates," "adopted," or "commercialized."

Do not:

- Use review language.
- Compare vehicles as winners and losers.
- Center the article on horsepower, acceleration, collectability, or styling unless directly relevant to a technical development.
- Treat manufacturer narratives as independent historical conclusions.

## 11. Information Architecture and Content Model

### 11.1 Core Content Types

The site should define these content types:

| Content Type    | Description                                                                 |
| --------------- | --------------------------------------------------------------------------- |
| Era             | A period of automotive technology history.                                  |
| Technology      | A specific system, component, process, or architecture.                     |
| Vehicle Example | A vehicle used to illustrate a technology or era.                           |
| Controversy     | A structured case study involving technical, legal, or regulatory conflict. |
| Glossary Term   | Short definition of a technical term.                                       |
| Source          | Bibliographic or web reference.                                             |
| Diagram         | Reusable visual explanation linked to technologies.                         |

### 11.2 Recommended Frontmatter Schema

Each Markdown or MDX article should use typed frontmatter.

```yaml
title: 'Common-Rail Diesel Injection'
slug: 'common-rail-diesel-injection'
contentType: 'technology'
summary: 'A high-pressure diesel fuel injection architecture that separates pressure generation from injection timing.'
status: 'draft'
era:
  - 'modern-diesel-and-aftertreatment'
technologyCategory:
  - 'fuel-systems'
  - 'diesel'
relatedTechnologies:
  - 'diesel-engine'
  - 'turbocharging'
  - 'exhaust-gas-recirculation'
  - 'diesel-particulate-filter'
relatedVehicles:
  - 'volkswagen-tdi-dieselgate-example'
lastReviewed: '2026-05-15'
readingLevel: 'general-technical'
sources:
  - 'source-id-001'
  - 'source-id-002'
editorialFlags:
  requiresLegalReview: false
  fastMovingTopic: false
  controversyRelated: true
```

### 11.3 Source Schema

Sources may be stored in `src/data/sources.json` or a `sources` content collection.

```json
{
  "id": "epa-vw-clean-air-act-settlement",
  "title": "Volkswagen Clean Air Act Civil Settlement",
  "organization": "U.S. Environmental Protection Agency",
  "type": "government",
  "url": "https://www.epa.gov/enforcement/volkswagen-clean-air-act-civil-settlement",
  "publishedDate": null,
  "accessedDate": "2026-05-15",
  "supports": [
    "Volkswagen settlement timeline",
    "defeat device allegations",
    "NOx emissions context"
  ],
  "notes": "Use for documented settlement details, not for broad claims about all diesel vehicles."
}
```

### 11.4 Relationship Rules

The content graph should support:

- Era to technologies.
- Era to vehicle examples.
- Technology to vehicle examples.
- Technology to glossary terms.
- Controversy to technologies.
- Source to every page it supports.

The site should generate "related reading" automatically from these relationships where practical.

## 12. Frontend Requirements

### 12.1 Recommended Frontend Approach

Use a content-first static site generator. Recommended stack:

- Astro.
- TypeScript.
- Markdown or MDX content collections.
- Zod or equivalent schema validation.
- Pagefind for static search.
- CSS modules, vanilla CSS, or a restrained utility framework such as Tailwind CSS.
- Minimal client-side JavaScript.

Astro is well-suited because most pages are documents, not application screens. It can render static pages by default while allowing small interactive components for search, era chronology, diagrams, or comparison tools.

### 12.2 Alternative Frontend Options

| Option                | Best For                                                    | Notes                                                |
| --------------------- | ----------------------------------------------------------- | ---------------------------------------------------- |
| Astro                 | Content-rich educational site with selective interactivity. | Recommended.                                         |
| Eleventy              | Very simple static site with Markdown-first workflow.       | Strong low-complexity option.                        |
| Docusaurus            | Documentation-style site with sidebars and versioning.      | Good if the site feels more like a technical manual. |
| MkDocs Material       | Documentation-heavy site with Python workflow.              | Excellent for a student familiar with Python.        |
| Next.js static export | If future app-like behavior is expected.                    | More complexity than needed for the MVP.             |

### 12.3 Layout System

Use a restrained educational design:

- Header with persistent navigation and search.
- Content pages with a readable article column.
- Right-side table of contents on desktop.
- Inline glossary definitions.
- Source callouts where needed.
- Related-technology links at the end of pages.
- Responsive layout that becomes single-column on mobile.

Avoid heavy decorative cards, oversized hero sections, and visual clutter. The site should feel like a public technical archive: calm, clear, and durable.

### 12.4 Core Components

Build these reusable components:

| Component            | Purpose                                                  |
| -------------------- | -------------------------------------------------------- |
| `SiteHeader`         | Navigation, search entry, mobile menu.                   |
| `SiteFooter`         | About links, source policy, repository link.             |
| `ArticleLayout`      | Standard content page wrapper.                           |
| `EraHeader`          | Era summary, date range, key themes.                     |
| `EraTimeline`        | Chronological era index or section spine.                |
| `TechnologyHeader`   | Technology definition, category, related systems.        |
| `SourceList`         | Sources and further reading.                             |
| `GlossaryTooltip`    | Short term definitions with accessible fallback.         |
| `RelatedLinks`       | Generated links to related pages.                        |
| `VehicleExampleCard` | Compact vehicle example summary without review language. |
| `SystemDiagram`      | Reusable diagram wrapper with caption and alt text.      |
| `CitationBadge`      | Inline link to a source note where appropriate.          |
| `StatusBanner`       | Draft, needs review, or fast-moving topic notice.        |

### 12.5 Era Chronology Interaction

The era chronology should be accessible without requiring pointer precision. Requirements:

- Plain list fallback if JavaScript fails.
- Date ranges visible to screen readers.
- Clear color and text labels for major era themes.
- No reliance on color alone.

### 12.6 Search

The MVP should use static search:

- Generate a Pagefind index after the production build.
- Search title, summary, body, glossary terms, and tags.
- Show content type labels in results.
- Prioritize exact title matches and glossary matches where possible.
- Include a no-results state that suggests browsing eras or technologies.

### 12.7 Visual Design Direction

Recommended visual qualities:

- Neutral background.
- High-contrast body text.
- A small set of semantic colors for eras and content types.
- Technical line diagrams.
- Tables for specifications and timelines.
- Dense but breathable information layout.

Avoid:

- Brand-colored fan styling.
- Aggressive gradients.
- Excessive animation.
- One-note color palettes.
- Hero images that obscure content.
- Decorative visuals that do not teach.

### 12.8 Accessibility

Target WCAG 2.1 AA or stronger.

Requirements:

- Semantic headings in order.
- One `h1` per page.
- Keyboard-accessible navigation and filters.
- Visible focus states.
- Alt text for all informative images.
- Empty alt text for decorative images.
- Captions for diagrams.
- Sufficient text contrast.
- Tables with headers.
- Skip-to-content link.
- Reduced-motion support.
- No content hidden only inside hover interactions.

### 12.9 Performance Targets

Set these initial budgets:

| Metric                      | Target                                                                  |
| --------------------------- | ----------------------------------------------------------------------- |
| Lighthouse Performance      | 90 or higher on key pages.                                              |
| Lighthouse Accessibility    | 95 or higher.                                                           |
| Largest Contentful Paint    | Under 2.5 seconds on a simulated mid-tier mobile connection.            |
| Cumulative Layout Shift     | Under 0.1.                                                              |
| JavaScript per article page | Keep minimal; target under 100 KB compressed for non-interactive pages. |
| Image format                | Use AVIF or WebP where possible, with fallbacks when needed.            |

## 13. Backend and Data Strategy

### 13.1 MVP Backend Recommendation

The MVP should not require a traditional backend. Use:

- Markdown or MDX files for articles.
- JSON or YAML for shared source records.
- Static generation for pages.
- Generated search index.
- GitHub Issues or a simple form for content suggestions.

This keeps the project easy to host and maintain.

### 13.2 When to Add a Backend

Add a backend only if the project needs:

- Public content submissions.
- Moderated corrections.
- User accounts.
- Saved reading lists.
- Admin editing outside Git.
- Structured source review workflows.
- Analytics beyond privacy-friendly static tools.

### 13.3 Optional Supabase Architecture

If a database is needed, Supabase is a practical student-friendly choice because it provides hosted PostgreSQL, authentication, storage, and APIs.

Potential tables:

```sql
create table eras (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  date_start text,
  date_end text,
  summary text not null,
  status text not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table technologies (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text not null,
  summary text not null,
  status text not null default 'draft',
  last_reviewed date
);

create table vehicle_examples (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  manufacturer text,
  production_start text,
  production_end text,
  market_context text,
  inclusion_reason text not null,
  status text not null default 'draft'
);

create table sources (
  id uuid primary key default gen_random_uuid(),
  citation_key text unique not null,
  title text not null,
  organization text,
  author text,
  source_type text not null,
  url text,
  published_date date,
  accessed_date date,
  notes text
);

create table page_sources (
  id uuid primary key default gen_random_uuid(),
  page_slug text not null,
  source_id uuid not null references sources(id),
  claim_supported text not null
);

create table submissions (
  id uuid primary key default gen_random_uuid(),
  page_slug text,
  submitter_email text,
  submission_type text not null,
  message text not null,
  source_url text,
  moderation_status text not null default 'pending',
  created_at timestamptz not null default now()
);
```

Security requirements:

- Enable row level security on all public-write tables.
- Do not expose admin keys in frontend code.
- Allow anonymous inserts only into a moderated `submissions` table.
- Rate-limit submissions using serverless functions or platform protection.
- Keep editorial content in Git unless a full CMS workflow is intentionally adopted.

### 13.4 API Strategy

For the MVP:

- Generate JSON indexes during build.
- Avoid runtime API dependencies.

For a backend version:

- `GET /api/search-index` if dynamic search is needed.
- `POST /api/submissions` for corrections or source suggestions.
- `GET /api/sources/:id` for source detail overlays.

Public APIs should be read-only unless moderation is implemented.

### 13.5 CMS Options

Possible content editing workflows:

| CMS/Workflow             | Fit                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------ |
| GitHub web editor        | Best for a solo developer or student. Free and transparent.                          |
| Decap CMS                | Useful for Git-backed editing through a browser. Requires setup and auth decisions.  |
| TinaCMS                  | Useful if visual editing is important. More setup complexity.                        |
| Supabase admin dashboard | Useful for structured source or submission tables, not ideal for long-form articles. |
| No CMS                   | Best MVP option if the maintainer is comfortable editing Markdown.                   |

Recommendation: Start with Git-backed Markdown. Add a CMS later only if non-technical contributors need editing access.

## 14. Recommended Technical Stack

### 14.1 Preferred MVP Stack

| Layer            | Recommendation                     | Reason                                                                 |
| ---------------- | ---------------------------------- | ---------------------------------------------------------------------- |
| Framework        | Astro                              | Static-first, content collections, selective interactivity.            |
| Language         | TypeScript                         | Safer schemas, clearer data transformations.                           |
| Content          | Markdown/MDX                       | Easy to author, review, diff, and version.                             |
| Styling          | CSS modules or Tailwind CSS        | Fast development with consistent design tokens.                        |
| Search           | Pagefind                           | Static search without a hosted search service.                         |
| Validation       | Zod with Astro content collections | Prevents incomplete metadata.                                          |
| Testing          | Vitest and Playwright              | Unit tests for data logic, browser tests for key pages.                |
| Linting          | ESLint, Prettier, markdownlint     | Consistent code and content formatting.                                |
| Hosting          | GitHub Pages, Netlify, or Vercel   | Free static hosting options.                                           |
| Optional backend | Supabase                           | Hosted PostgreSQL and auth if submissions or admin features are added. |

### 14.2 Platform Notes as of 2026-05-15

Free-tier details can change. Verify official pricing before launch.

| Platform      | Use in This Project                                                                | Notes                                                                                                                 |
| ------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| GitHub Pages  | Static hosting from a repository.                                                  | Official GitHub documentation describes it as static hosting for HTML, CSS, and JavaScript files from a repository.   |
| Vercel Hobby  | Static hosting, previews, and optional serverless functions for personal projects. | Official documentation describes the Hobby plan as free for personal and small-scale applications, with usage limits. |
| Netlify Free  | Static hosting, deploy previews, forms/functions depending on current limits.      | Official pricing lists a free plan with deployment and monthly usage credits.                                         |
| Supabase Free | Optional database, auth, and storage for prototype features.                       | Official pricing lists a free plan suitable for simple projects, with resource limits and inactivity behavior.        |

### 14.3 Suggested Package Scripts

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro check && astro build && pagefind --site dist",
    "preview": "astro preview",
    "lint": "eslint . && markdownlint \"**/*.md\"",
    "format": "prettier --write .",
    "test": "vitest run",
    "test:e2e": "playwright test",
    "check:links": "lychee --no-progress \"src/**/*.md\" \"src/**/*.mdx\"",
    "check:content": "astro check"
  }
}
```

### 14.4 Setup Commands

The developer should be able to start from an empty repository with commands similar to:

```bash
npm create astro@latest autoevolve
cd autoevolve
npm install @astrojs/mdx pagefind zod
npm install -D typescript vitest playwright eslint prettier markdownlint-cli2 lychee
npx playwright install
npm run dev
```

If using Tailwind CSS, add it only after confirming the team wants utility-first styling:

```bash
npx astro add tailwind
```

## 15. Suggested Project Structure

```text
.
├── docs/
│   ├── editorial-policy.md
│   ├── contribution-guide.md
│   └── source-style-guide.md
├── public/
│   ├── images/
│   └── diagrams/
├── src/
│   ├── components/
│   │   ├── article/
│   │   ├── navigation/
│   │   └── diagrams/
│   ├── content/
│   │   ├── eras/
│   │   ├── technologies/
│   │   ├── vehicles/
│   │   ├── controversies/
│   │   └── glossary/
│   ├── data/
│   │   └── sources.json
│   ├── layouts/
│   ├── lib/
│   │   ├── content.ts
│   │   ├── citations.ts
│   │   └── schema.ts
│   ├── pages/
│   │   ├── index.astro
│   │   ├── eras/
│   │   ├── technologies/
│   │   ├── vehicles/
│   │   ├── controversies/
│   │   ├── glossary.astro
│   │   └── sources.astro
│   └── styles/
│       ├── tokens.css
│       └── global.css
├── tests/
│   ├── unit/
│   └── e2e/
├── package.json
├── astro.config.mjs
├── tsconfig.json
└── README.md
```

## 16. Content Workflow

### 16.1 Article Lifecycle

Each article should move through these statuses:

1. `stub`: Topic exists but has minimal content.
2. `draft`: Written but not yet reviewed.
3. `source-review`: Citations and factual claims are being checked.
4. `technical-review`: Mechanisms and terminology are being checked.
5. `published`: Ready for public readers.
6. `needs-update`: Published but marked for revision.

### 16.2 Writing Workflow

For each article:

1. Define the article purpose in one sentence.
2. List the technologies, eras, vehicles, and sources connected to it.
3. Gather primary and secondary sources.
4. Draft the outline before writing the full page.
5. Write the explanation in original language.
6. Add citations.
7. Add diagrams or tables where they clarify.
8. Run content validation.
9. Review for neutrality.
10. Publish only after source metadata is complete.

### 16.3 Neutrality Review Checklist

Before publication, confirm:

- No unsupported "first," "best," "worst," "most important," or "revolutionary" claims.
- Vehicle examples are framed as examples, not reviews.
- Controversies distinguish allegations, findings, settlements, admissions, and outcomes.
- Technical claims have sources or are basic explanations.
- Marketing language has been removed or attributed.
- The page links to related technologies and glossary terms.
- The page states geographic scope where relevant.

### 16.4 Technical Review Checklist

Before publication, confirm:

- Component names are correct.
- Diagrams match the written explanation.
- Units are included.
- Equations define variables.
- Acronyms are expanded on first use.
- Time ranges are accurate or marked approximate.
- Related systems are linked.
- Claims about emissions, safety, or regulation cite official or authoritative sources.

## 17. Dieselgate Coverage Requirements

Dieselgate is a required topic and should be handled as a technical, regulatory, and historical case study.

### 17.1 Required Context

The Dieselgate page should explain:

- What diesel engines are and why they operate lean.
- Why NOx formation is associated with high combustion temperatures and excess oxygen.
- How EGR, DPF, SCR, diesel oxidation catalysts, and lean NOx traps work.
- What emissions certification testing is intended to measure.
- What a defeat device is in regulatory context.
- How software can alter emissions-control behavior.
- Why real-world emissions testing became more prominent after the scandal.

### 17.2 Required Case Chronology Points

The page should include:

- Pre-2015 context for passenger diesel popularity in some markets.
- 2015 EPA notice of violation.
- Subsequent investigations and settlements.
- U.S. civil settlement details.
- Effects on diesel passenger-car perception and regulation.
- Broader relevance to software-controlled vehicles.

### 17.3 Language Rules

Use terms such as:

- "EPA alleged..."
- "The settlement resolved..."
- "Regulators identified..."
- "Documents state..."
- "Affected vehicles..."

Avoid terms such as:

- "evil."
- "genius cheat."
- "the end of diesel."
- "proof that all diesel is bad."
- "the greatest scandal ever."

### 17.4 Technical Questions the Page Should Answer

- Why is NOx control difficult in diesel combustion?
- Why did laboratory and real-world operation differ?
- What role did engine control software play?
- What aftertreatment systems were relevant?
- How did the controversy affect testing and compliance practice?
- What does the case reveal about software as an automotive component?

## 18. Diagrams, Media, and Visual Assets

### 18.1 Diagram Types

Create original diagrams where possible:

- Four-stroke engine cycle.
- Diesel versus gasoline ignition.
- Carburetor versus fuel injection.
- Turbocharger airflow.
- Three-way catalytic converter feedback loop.
- Diesel aftertreatment chain.
- Series hybrid architecture.
- Parallel hybrid architecture.
- Power-split hybrid architecture.
- Battery electric powertrain.
- Battery pack and thermal management.
- AC versus DC charging path.

### 18.2 Image Rights

Rules:

- Prefer original diagrams created for the site.
- Use public-domain or openly licensed images only when license terms are clear.
- Track image source, author, license, and modification notes.
- Do not scrape manufacturer images without permission.
- Do not rely on copyrighted vehicle photos as essential content.

### 18.3 Diagram Metadata

Every diagram should have:

```yaml
title: 'Battery electric vehicle power flow'
file: '/diagrams/bev-power-flow.svg'
alt: 'Diagram showing a traction battery connected to an inverter, motor, reduction gear, and wheels.'
caption: 'Simplified energy flow in a battery electric vehicle.'
license: 'Original site diagram'
relatedTechnologies:
  - 'battery-electric-drive'
  - 'inverter'
  - 'traction-motor'
```

## 19. Backend Feature Roadmap

### 19.1 Phase 1: Static MVP

Build:

- Home page.
- Era pages.
- Technology index.
- Ten to fifteen technology pages.
- Five to eight vehicle example pages.
- Dieselgate case study.
- Glossary.
- Source library.
- Static search.

No database is required.

### 19.2 Phase 2: Structured Data Improvements

Build:

- Generated relationship graph.
- Source completeness reports.
- Content status dashboard generated at build time.
- Link checker in CI.
- Simple correction form using GitHub Issues, Netlify Forms, or a serverless endpoint.

### 19.3 Phase 3: Optional Supabase Workflow

Build only if needed:

- Moderated source suggestions.
- Correction submissions.
- Admin-only source database.
- Authenticated editor dashboard.
- Row-level security policies.
- Scheduled database backups.

### 19.4 Phase 4: Educational Tools

Possible additions:

- Interactive engine-cycle animation.
- Hybrid power-flow simulator.
- EV charging-time calculator.
- Emissions-control system explorer.
- Printable reading guides.
- Classroom-friendly timelines.

Keep these tools secondary to the archive. They should teach specific concepts, not turn the site into a gadget collection.

## 20. Quality Assurance and Testing

### 20.1 Automated Checks

Implement:

- Type checking.
- Content schema validation.
- Markdown linting.
- Link checking.
- Unit tests for data transformations.
- Browser tests for core routes.
- Accessibility checks.
- Build test in CI.

### 20.2 Unit Test Targets

Test:

- Citation rendering.
- Era order sorting.
- Date precision handling.
- Related-content generation.
- Source completeness validation.
- Slug generation.
- Glossary term linking.

### 20.3 End-to-End Test Targets

Use Playwright to test:

- Home page loads.
- Main navigation works on desktop and mobile.
- Era chronology renders in order.
- Search returns relevant pages.
- Era pages render related technologies.
- Technology pages render sources.
- Dieselgate page includes required structural sections.
- Glossary is keyboard accessible.

### 20.4 Content Quality Checks

Add a custom script that warns on subjective or review-like wording:

```text
best
worst
legendary
iconic
game-changing
revolutionary
boring
beautiful
ugly
superior
inferior
must-buy
failure
```

The script should warn, not fail automatically, because these words may appear in quoted source titles or in a section explaining terms to avoid.

### 20.5 Manual Review

Before each release:

- Check pages on mobile and desktop.
- Verify no text overlaps.
- Verify tables scroll or reflow on small screens.
- Verify source links.
- Verify diagrams have alt text.
- Verify no draft pages appear in production unless intentionally marked.
- Review controversy pages for neutral language.

## 21. SEO and Discoverability

### 21.1 Metadata

Each page should include:

- Title.
- Meta description.
- Canonical URL.
- Open Graph title and description.
- Content type.
- Last reviewed date.
- Structured data where appropriate.

### 21.2 URL Style

Use stable, readable URLs:

- `/technologies/four-stroke-engine/`
- `/technologies/common-rail-diesel-injection/`
- `/eras/emissions-and-electronic-control/`
- `/controversies/dieselgate/`

Avoid dates in URLs unless the page is a dated article or release note.

### 21.3 Structured Data

Consider JSON-LD for:

- `Article`.
- `DefinedTerm` for glossary pages.
- `BreadcrumbList`.
- `FAQPage` only where there is a genuine FAQ section.

### 21.4 Sitemap and Feeds

Generate:

- `sitemap.xml`.
- `robots.txt`.
- RSS or Atom feed for new and updated pages.
- Optional `llms.txt` summarizing site purpose and key routes for AI-assisted discovery.

## 22. Privacy, Security, and Legal Considerations

### 22.1 Privacy

For the MVP:

- Avoid invasive analytics.
- Prefer privacy-friendly analytics or server logs only.
- Do not collect personal information unless necessary.
- If forms are added, explain what data is collected and why.

### 22.2 Security

If the site remains static:

- Keep dependencies updated.
- Use Dependabot or similar.
- Use HTTPS through the hosting provider.
- Avoid third-party scripts unless necessary.

If a backend is added:

- Validate all inputs.
- Rate-limit public forms.
- Use CAPTCHA or bot protection if spam appears.
- Use RLS for Supabase.
- Never expose service-role keys.
- Keep backups.

### 22.3 Copyright

The site should:

- Publish original explanatory text.
- Use quotations sparingly and only when needed.
- Track licenses for every image.
- Avoid reproducing long excerpts from manuals, books, or journalism.
- Link to sources rather than copying them.

### 22.4 Disclaimers

Include a short disclaimer:

> This website is an educational historical and technical reference. It does not provide vehicle purchasing, repair, legal, safety, regulatory compliance, or investment advice.

## 23. Implementation Plan

### 23.1 Phase 0: Repository Foundation

Tasks:

- Create Astro project.
- Configure TypeScript.
- Configure Markdown/MDX.
- Add content collections.
- Add global styles and design tokens.
- Add linting and formatting.
- Add CI build workflow.

Acceptance criteria:

- `npm run build` succeeds.
- Home page renders.
- Content schemas reject incomplete required fields.
- CI runs on pull requests.

### 23.2 Phase 1: Core Information Architecture

Tasks:

- Build layout components.
- Build navigation.
- Build route templates.
- Build era index.
- Build technology index.
- Build vehicle example index.
- Build source list rendering.

Acceptance criteria:

- All primary routes exist.
- Navigation works on mobile and desktop.
- Pages render content from collections.
- Draft pages are excluded from production unless configured otherwise.

### 23.3 Phase 2: Initial Content Set

Create:

- Mission and editorial policy.
- Glossary with at least 30 terms.
- Era pages for all major eras listed in this brief.
- Technology pages for:
  - Four-stroke engine.
  - Diesel engine.
  - Carburetor.
  - Fuel injection.
  - Catalytic converter.
  - Engine control unit.
  - Common-rail diesel injection.
  - Selective catalytic reduction.
  - Hybrid electric vehicle.
  - Plug-in hybrid electric vehicle.
  - Battery electric vehicle.
  - Regenerative braking.
  - Battery management system.
  - EV charging.
- Vehicle example pages for at least five representative vehicles.
- Dieselgate controversy page.

Acceptance criteria:

- Every page has sources.
- Every page has related links.
- Dieselgate page includes chronology, technical background, regulatory context, and sources.
- No article uses subjective ranking language.

### 23.4 Phase 3: Search and Era Chronology

Tasks:

- Strengthen era chronology entry points.
- Add static search.
- Add no-results states.

Acceptance criteria:

- Era entries sort correctly.
- Search works after production build.
- Search result pages identify content type.

### 23.5 Phase 4: Quality Gates

Tasks:

- Add link checker.
- Add subjective-language warning script.
- Add Playwright smoke tests.
- Add accessibility checks.
- Add Lighthouse budget check if feasible.

Acceptance criteria:

- CI fails on build errors.
- CI warns or fails on broken links according to configured severity.
- E2E tests cover major public routes.
- Manual review checklist is documented.

### 23.6 Phase 5: Deployment

Tasks:

- Choose hosting platform.
- Configure build command.
- Configure deploy previews.
- Configure custom domain if available.
- Generate sitemap and robots file.
- Confirm HTTPS.

Acceptance criteria:

- Production site deploys from main branch.
- Pull requests create previews if platform supports them.
- Sitemap is available.
- Core pages pass manual mobile and desktop checks.

## 24. Deployment Options

### 24.1 GitHub Pages

Best when:

- The site is fully static.
- The developer wants the simplest free hosting path.
- No serverless functions are needed.

Build flow:

- Push to GitHub.
- Use GitHub Actions to run `npm ci` and `npm run build`.
- Deploy `dist/` to GitHub Pages.

### 24.2 Netlify

Best when:

- Deploy previews are important.
- Simple forms may be useful.
- The developer wants easy branch deploys and redirects.

Build settings:

- Build command: `npm run build`
- Publish directory: `dist`

### 24.3 Vercel

Best when:

- The developer wants fast preview deployments.
- The site may later add serverless functions.
- The project might use Next.js or framework integrations in the future.

Build settings:

- Framework preset: Astro.
- Build command: `npm run build`
- Output directory: `dist`

### 24.4 Supabase

Best when:

- The project needs persistent submissions.
- The project needs an authenticated admin area.
- Structured source catalogs or correction submissions become easier to manage in relational tables.

Supabase should be treated as optional infrastructure, not a requirement for the first release.

## 25. Contribution Model

### 25.1 Contributor Roles

| Role                 | Responsibilities                                     |
| -------------------- | ---------------------------------------------------- |
| Maintainer           | Reviews content, merges changes, manages releases.   |
| Research contributor | Suggests sources, corrections, or new topics.        |
| Technical reviewer   | Checks engineering explanations and diagrams.        |
| Copy editor          | Improves clarity while preserving neutrality.        |
| Developer            | Maintains templates, schemas, tests, and deployment. |

### 25.2 Contribution Rules

Contributors should:

- Open an issue before adding large new sections.
- Include sources with factual claims.
- Follow page templates.
- Avoid review language.
- Keep vehicle examples tied to technologies.
- Add glossary terms for specialized vocabulary.
- Run validation before submitting changes.

### 25.3 Pull Request Checklist

```markdown
## Content

- [ ] Page uses the correct template.
- [ ] Sources are included.
- [ ] Claims are neutral and specific.
- [ ] Vehicle examples are not written as reviews.
- [ ] Glossary links are added where helpful.

## Technical

- [ ] `npm run build` passes.
- [ ] `npm run lint` passes.
- [ ] New routes are reachable.
- [ ] Images have alt text and license metadata.
- [ ] No secrets or private data are committed.
```

## 26. Initial MVP Content Inventory

### 26.1 Era Pages

Create these first:

- Early self-propelled mobility and piston experiments.
- Birth of the practical automobile.
- Standardization and mass production.
- Postwar expansion.
- Emissions, fuel economy, and electronic control.
- Modern diesel and emissions aftertreatment.
- Hybridization.
- Plug-in hybrids.
- Battery electric vehicles.
- Software-defined and connected vehicles.

### 26.2 Technology Pages

Create these first:

- Four-stroke engine.
- Diesel engine.
- Carburetor.
- Fuel injection.
- Turbocharging.
- Catalytic converter.
- Engine control unit.
- On-board diagnostics.
- Common-rail diesel injection.
- Diesel particulate filter.
- Selective catalytic reduction.
- Hybrid electric vehicle.
- Regenerative braking.
- Plug-in hybrid electric vehicle.
- Battery electric vehicle.
- Lithium-ion battery.
- Battery management system.
- Inverter.
- Electric traction motor.
- EV charging.

### 26.3 Vehicle Example Pages

Create these first:

- Benz Patent-Motorwagen.
- Ford Model T.
- Mercedes-Benz 260 D.
- Toyota Prius.
- Honda Insight.
- Chevrolet Volt.
- Nissan Leaf.
- Tesla Roadster.
- Volkswagen TDI Dieselgate example.

### 26.4 Controversy Pages

Create first:

- Dieselgate.

Potential later pages:

- Leaded gasoline and public health.
- Safety regulation and crashworthiness debates.
- EV battery sourcing and recycling.
- Airbag deployment and recall history.
- Fuel economy test-cycle gaps.

## 27. Example Page Outline: Dieselgate

```markdown
# Dieselgate

## Summary

Short neutral summary of the emissions controversy.

## Why This Case Matters Technically

Explain diesel emissions control, software, and regulatory testing.

## Chronology

Chronological events with sources.

## Diesel Combustion and NOx Formation

Explain lean combustion, temperature, and NOx.

## Emissions Control Systems

Explain EGR, DPF, SCR, and lean NOx traps.

## Certification Testing and Real-World Operation

Explain why test cycles exist and why real-world testing matters.

## Defeat Devices and Software Control

Explain the regulatory concept and the software dimension.

## Legal and Regulatory Outcomes

Summarize documented settlements and regulatory responses.

## Broader Historical Significance

Discuss effects on diesel passenger cars, testing, trust, and software oversight.

## Related Technologies

Links.

## Sources and Further Reading

Sources.
```

## 28. Example Page Outline: Battery Electric Vehicle

```markdown
# Battery Electric Vehicle

## Definition

Explain BEV as a vehicle propelled by electric traction motors using stored electrical energy.

## Historical Background

Cover early EVs, decline relative to gasoline vehicles, late-20th-century experiments, lithium-ion era.

## How It Works

Explain battery, inverter, motor, reduction drive, charger, DC/DC converter, and thermal management.

## Energy Flow

Use equations and a diagram.

## Components

Component table.

## Engineering Tradeoffs

Discuss energy density, charging time, thermal control, cost, mass, and infrastructure.

## Example Vehicles

Use examples as architecture references only.

## Related Technologies

Links.

## Sources and Further Reading

Sources.
```

## 29. Risks and Mitigations

| Risk                                   | Impact                               | Mitigation                                                        |
| -------------------------------------- | ------------------------------------ | ----------------------------------------------------------------- |
| Scope creep                            | Site becomes too large to finish.    | Ship a static MVP with limited pages first.                       |
| Brand bias                             | Weakens educational neutrality.      | Enforce editorial rules and language checks.                      |
| Inaccurate technical explanations      | Misleads readers.                    | Use source review and technical review.                           |
| Copyright issues                       | Legal and ethical risk.              | Use original diagrams and licensed images only.                   |
| Free-tier limits change                | Deployment or backend cost surprise. | Verify platform terms before deployment and keep static fallback. |
| Recent EV information becomes outdated | Readers receive stale context.       | Mark fast-moving pages with last-reviewed dates.                  |
| Controversy pages become opinionated   | Undermines mission.                  | Use structured templates and official sources.                    |
| Search quality is poor                 | Readers cannot find topics.          | Use tags, summaries, and static search tuning.                    |
| Maintenance burden                     | Project stalls.                      | Keep architecture simple and Git-backed.                          |

## 30. Definition of Done for First Public Release

The first public release is done when:

- The site is deployed publicly.
- All primary navigation routes exist.
- At least eight era pages exist.
- At least fifteen technology pages exist.
- At least five vehicle example pages exist.
- Dieselgate page exists and follows the controversy template.
- Glossary contains at least thirty terms.
- Every page has metadata and sources.
- Static search works.
- Eras provide usable chronological navigation.
- Build, lint, and tests pass.
- The site has an editorial policy page.
- The site has a source policy page.
- The site has a contribution guide.
- Pages are usable on mobile and desktop.
- The project can be maintained without paid infrastructure.

## 31. Reference Links for Implementation Planning

These links are starting points for platform and topic verification. They should be revisited before launch because hosting plans and technical documentation change.

### 31.1 Platform and Tooling References

- [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Vercel Hobby plan documentation](https://vercel.com/docs/plans/hobby)
- [Netlify pricing](https://www.netlify.com/pricing/)
- [Supabase pricing](https://supabase.com/pricing)
- [Astro content collections documentation](https://docs.astro.build/en/guides/content-collections/)
- [Pagefind documentation](https://pagefind.app/docs/)

### 31.2 Technical Topic References

- [DOE Alternative Fuels Data Center: How Do Hybrid Electric Cars Work?](https://afdc.energy.gov/vehicles/how-do-hybrid-electric-cars-work)
- [DOE Alternative Fuels Data Center: How Do Plug-In Hybrid Electric Cars Work?](https://afdc.energy.gov/vehicles/how-do-plug-in-hybrid-electric-cars-work)
- [DOE Alternative Fuels Data Center: How Do All-Electric Cars Work?](https://afdc.energy.gov/vehicles/how-do-all-electric-cars-work)
- [EPA Volkswagen Clean Air Act Civil Settlement](https://www.epa.gov/enforcement/volkswagen-clean-air-act-civil-settlement)
- [EPA Learn About Volkswagen Violations](https://www.epa.gov/vw/learn-about-volkswagen-violations)

## 32. Final Guidance to Implementers

Build the site as a durable public reference, not a fast-moving blog. A strong implementation will feel like a careful map of automotive systems over time: each page should show what changed, why it changed, how the technology worked, and where the reader can look next.

When in doubt, prefer:

- Source-backed explanation over narrative flair.
- System-level context over brand-centered storytelling.
- Clear diagrams over decorative imagery.
- Static content over unnecessary backend complexity.
- Stable URLs over trendy page structures.
- Editorial discipline over volume.

The subject is broad enough to fill an encyclopedia, so the first release should be intentionally focused. Start with the central powertrain story, anchor it with emissions and electrification, treat Dieselgate as a major software-and-regulation case study, and expand outward only when the editorial model is working.
