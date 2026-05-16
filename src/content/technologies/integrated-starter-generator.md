---
title: 'Integrated Starter Generator'
summary: 'An electric machine that combines engine starting, electrical generation, and sometimes torque assist in a hybridized combustion drivetrain.'
status: 'published'
lastReviewed: '2026-05-16'
sources:
  [
    'doe-afdc-hybrid',
    'epa-2022-2025-ldv-ghg-tsd-mild-hybrids',
    'sae-bisg-mild-hybrid-2014',
  ]
category: 'electric-drive'
eras: ['hybridization']
relatedTechnologies:
  [
    'mild-hybrid-system',
    'hybrid-electric-vehicle',
    'power-inverter',
    'regenerative-braking',
  ]
relatedVehicles: []
---

## Definition

An integrated starter generator, often shortened to ISG, is an electric machine that replaces or supplements the conventional starter and alternator. It starts the engine, generates electricity, and may provide limited propulsion assist or regenerative braking depending on where it is mounted and how powerful the electrical system is.

## Mechanism

An ISG works in two directions. In motor mode, power electronics send current to the machine so it applies torque to the engine or driveline. In generator mode, mechanical rotation drives the machine and electrical energy flows back to the battery or low-voltage network.

Common placements include:

- **Belt integrated starter generator:** mounted on the front-end accessory drive and connected by a belt.
- **Crankshaft-mounted unit:** mounted on or near the engine crankshaft for more direct coupling.
- **Transmission-side unit:** placed between engine and gearbox or integrated into a hybrid transmission.

The control system decides when the ISG starts the engine, absorbs braking or overrun energy, supports electrical loads, and contributes torque. Smoothness is part of the engineering task; a restart that saves fuel but feels abrupt can undermine the vehicle's drivability.

## Historical Context

Starter-generator ideas are old, but modern ISG systems gained importance as emissions, fuel-consumption, and accessory-load requirements tightened. Start-stop systems made restart quality more visible to drivers. Mild hybrids then expanded the starter-generator role from occasional cranking to frequent engine-off operation, regeneration, and torque smoothing.

48 V architectures helped make belt-driven ISGs more practical by raising power capability without adopting the full cost and safety envelope of high-voltage traction systems.

## Tradeoffs

An ISG can remove some duplicated hardware, restart the engine faster than a conventional starter in many designs, and recover limited energy during deceleration. It also places new demands on belts, tensioners, bearings, cooling, electromagnetic compatibility, and battery controls. Belt systems are comparatively easy to package but must handle slip and bidirectional torque. Transmission-mounted systems can deliver stronger assist but usually require deeper driveline integration.

The ISG also sits near several competing design priorities: engine vibration, accessory packaging, crash structure, service access, and cost. Its benefits depend on duty cycle and calibration, not just peak power.

## Representative Uses

ISGs are representative of mild hybrid passenger cars, start-stop combustion vehicles, and some commercial-vehicle hybrid concepts. A compact city car may use the system mainly for restart and accessory support; a larger 48 V vehicle may add torque fill during launch or gear changes.

## Common Misconceptions

An ISG is not always a traction motor in the full-hybrid sense. Some units can add torque, but their placement and power rating may prevent engine-off propulsion. Conversely, it is more than a starter motor when it is tied into battery management, regeneration, and torque-control strategies.

## Study Next

- [Mild Hybrid System](/technologies/mild-hybrid-system/) for the complete architecture around an ISG.
- [Power Inverter](/technologies/power-inverter/) for motor-control electronics.
- [Hybrid Electric Vehicle](/technologies/hybrid-electric-vehicle/) for higher-power hybrid layouts.
