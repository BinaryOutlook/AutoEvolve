---
title: 'Exhaust Gas Recirculation'
summary: 'An emissions and combustion-control strategy that routes a measured amount of exhaust gas back into the intake charge.'
status: 'published'
lastReviewed: '2026-05-16'
sources:
  [
    'doe-vto-advanced-combustion-strategies',
    'epa-nhtsa-2017-2025-technical-assessment',
    'doe-afdc-diesel-biodiesel',
  ]
category: 'emissions'
eras: ['emissions-and-electronic-control', 'modern-diesel-and-aftertreatment']
relatedTechnologies:
  [
    'diesel-engine',
    'petrol-gasoline-engine',
    'turbocharger',
    'lean-burn-combustion',
    'direct-injection-petrol-engine',
    'engine-control-unit',
    'selective-catalytic-reduction',
  ]
relatedVehicles: ['volkswagen-tdi-dieselgate-example']
---

## Definition

Exhaust gas recirculation, usually shortened to EGR, sends a controlled amount of exhaust gas back into the intake charge. The recirculated gas contains less oxygen than fresh air and acts mainly as a diluent rather than as new fuel.

## Mechanism

EGR lowers peak combustion temperature by increasing the heat capacity of the intake charge and reducing oxygen concentration. Lower peak temperature can reduce formation of nitrogen oxides, or NOx. In gasoline engines, cooled EGR can also suppress knock, allowing different boost, compression-ratio, and spark-timing choices.

Systems may use high-pressure EGR from the exhaust manifold to the intake manifold, low-pressure EGR from downstream exhaust plumbing back to the compressor inlet, or both. Coolers, valves, pressure sensors, temperature sensors, and ECU diagnostics control the flow.

The system is metered rather than merely open or closed. The ECU may infer flow from pressure differences, valve position, temperature change, air-mass readings, oxygen sensing, or dedicated sensors. Cooled systems add a heat exchanger and sometimes bypass control so exhaust temperature can be matched to the operating condition.

## Historical Context

EGR became important as emissions regulations forced engines to address NOx formation inside the combustion process, not only after exhaust left the engine. Diesel engines use EGR with fuel injection and aftertreatment strategies, while newer gasoline assessments discuss cooled EGR with turbocharging, direct injection, variable valve timing, and valve lift.

The technology is historically significant because it shows how emissions control moved into the combustion chamber. It is not only an exhaust add-on; it changes how the flame or diesel spray develops.

## Tradeoffs and Constraints

Too little EGR may leave NOx or knock constraints unresolved. Too much EGR can slow combustion, increase particulate matter, destabilize idle, reduce torque response, contaminate intake plumbing, or make turbocharger control harder. Cooling the recirculated gas helps temperature control but adds heat exchangers, plumbing, condensation concerns, and durability requirements.

EGR also interacts with aftertreatment. A diesel calibration that uses more EGR may lower engine-out NOx but increase soot or exhaust-temperature challenges. A different calibration may favor downstream SCR operation. The system has to be calibrated as a whole.

Operating limits include cooler fouling, condensation, valve sticking, low-temperature deposits, transient response, and the effect of recirculated gas on turbocharger compressor flow. In gasoline engines, too much dilution can cause misfire; in diesel engines, the NOx-soot-temperature balance can become narrow.

## Representative Uses

Representative uses include light-duty gasoline engines using cooled EGR to manage knock and efficiency, diesel engines using EGR to reduce engine-out NOx, and advanced boosted gasoline concepts where EGR helps support downsizing without relying on fuel enrichment at high load.

## Common Misconceptions

EGR does not mean feeding dirty exhaust back into an engine carelessly. A working EGR system meters, cools, and diagnoses flow within defined limits. Another misconception is that EGR and aftertreatment are substitutes. In many engines they are partners: EGR shapes engine-out emissions, while catalysts, filters, or SCR systems treat what remains.

## Neutral Reading

EGR is a compromise-management tool. It can lower combustion temperature and reduce NOx formation, but it can also complicate soot, response, deposits, and aftertreatment temperature. Its historical value is that it made emissions control part of combustion design rather than only tailpipe cleanup.

## Study Next

- [Lean-Burn Combustion](/technologies/lean-burn-combustion/) for oxygen-rich combustion and NOx-control challenges.
- [Turbocharger](/technologies/turbocharger/) for the boost systems often coordinated with cooled EGR.
- [Selective Catalytic Reduction](/technologies/selective-catalytic-reduction/) for downstream NOx treatment.
