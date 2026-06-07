---
title: 'Supercharger'
summary: 'A mechanically driven compressor that raises intake-air density without relying on exhaust-gas turbine energy.'
status: 'published'
lastReviewed: '2026-05-16'
sources:
  [
    'eaton-tvs-supercharger-overview',
    'eaton-tvs-performance-automotive',
    'sae-application-superchargers-automotive-1928',
  ]
category: 'engine-subsystem'
eras:
  [
    'standardization-and-mass-production',
    'postwar-expansion',
    'emissions-and-electronic-control',
  ]
relatedTechnologies:
  [
    'petrol-gasoline-engine',
    'four-stroke-engine',
    'turbocharger',
    'engine-control-unit',
  ]
relatedVehicles: []
---

## Definition

A supercharger is a forced-induction compressor driven mechanically by the engine, commonly through a belt, gears, shaft, or chain. Like a turbocharger, it increases intake-air density. Unlike a turbocharger, it does not wait for exhaust flow to drive a turbine.

## Mechanism

Most automotive superchargers use Roots-type, twin-screw, or centrifugal compressor layouts. A Roots-type unit moves air from inlet to outlet with meshing lobes; a twin-screw unit compresses air internally between rotors; a centrifugal unit resembles a belt-driven compressor side of a turbocharger.

Because the crankshaft supplies the compressor work, supercharger speed is tied to engine speed unless clutches, bypass valves, or multi-speed drives intervene. This direct drive can give rapid boost response, but the compressor load also consumes engine output.

Supporting components matter as much as the compressor housing. A production installation may include an intercooler, bypass valve, belt tensioner, drive pulley set, intake ducting, manifold pressure sensing, knock control, and ECU torque management. Boost is only useful if the engine can manage the added air, fuel, heat, and cylinder pressure.

## Historical Context

Supercharging was discussed in automotive engineering by the 1920s as a way to increase output from a given displacement, particularly when higher power was needed only part of the time. It later appeared in racing, luxury, sports, and some downsized or compound-boosted engines.

Modern supercharger discussions often focus less on novelty and more on matching. A mechanically driven compressor can fill low-speed airflow gaps, while turbochargers can recover exhaust energy at higher flow. Some engines combine both approaches, though the extra hardware increases control and packaging demands.

## Tradeoffs and Constraints

The main advantage is response: boost can be available as soon as the drive system turns the compressor fast enough. The main cost is parasitic load. Power used to drive the compressor must come through the crankshaft, so net engine efficiency depends on operating point, bypass strategy, compression efficiency, temperature, and knock control.

Superchargers also add heat to the intake charge, require robust belt or gear drives, and can increase noise. Intercooling, bypass valves, and careful calibration reduce those issues but do not erase them.

Operating limits include compressor efficiency, maximum rotor speed, belt slip, intake temperature, knock margin, emissions strategy, and durability of the drive system. At light load, bypassing the compressor can reduce pumping work, but packaging and control details determine how much benefit is realized.

## Representative Uses

Representative uses include high-output gasoline engines, engines that need strong low-speed air delivery, and compound systems where a supercharger and turbocharger operate in different parts of the map. The technology is therefore a packaging and response choice, not a universal performance hierarchy.

## Common Misconceptions

A supercharger is not automatically better or worse than a turbocharger. The two systems move through different energy paths: the supercharger takes mechanical work from the crankshaft, while the turbocharger extracts energy from exhaust flow. The right comparison depends on response targets, thermal limits, emissions controls, durability, cost, and vehicle mission.

## Neutral Reading

The neutral historical reading is that supercharging solves an airflow-response problem in exchange for mechanical load and heat. It can be elegant in one duty cycle and inefficient in another. Its significance comes from how engineers match the compressor map, drive ratio, bypass strategy, fuel system, and vehicle purpose.

## Study Next

- [Turbocharger](/technologies/turbocharger/) for exhaust-driven forced induction.
- [Variable Valve Timing](/technologies/variable-valve-timing/) for another way engines manage airflow.
- [Petrol / Gasoline Engine](/technologies/petrol-gasoline-engine/) for the spark-ignition context.
