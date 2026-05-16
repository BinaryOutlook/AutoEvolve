---
title: 'Nickel-Metal Hydride Battery'
summary: 'A rechargeable battery chemistry that powered many early production hybrids through robust power delivery and tolerance of shallow cycling.'
status: 'published'
lastReviewed: '2026-05-16'
sources:
  ['doe-afdc-electric-batteries', 'doe-vto-batteries', 'toyota-prius-launch']
category: 'fuel-energy'
eras: ['hybridization']
relatedTechnologies:
  [
    'hybrid-electric-vehicle',
    'battery-management-system',
    'regenerative-braking',
    'lithium-ion-battery',
  ]
relatedVehicles: ['toyota-prius']
---

## Definition

A nickel-metal hydride battery, or NiMH battery, is a rechargeable cell type that uses a nickel oxyhydroxide positive electrode and a hydrogen-absorbing alloy negative electrode. In automotive use, it became closely associated with early mass-market hybrid vehicles.

## Mechanism

During charge and discharge, hydrogen moves in and out of the metal-hydride alloy while the nickel electrode changes oxidation state. Hybrid packs connect many cells into modules and operate them within a controlled state-of-charge window. The point is not to use all stored energy; it is to accept and deliver repeated bursts of power while preserving durability.

For a hybrid battery, useful power can matter more than stored energy:

$$
P = V I
$$

where $V$ is pack voltage and $I$ is current. A NiMH pack sized for a hybrid can provide torque assist and regenerative braking without being large enough for long electric-only range.

## Historical Context

NiMH arrived before modern automotive lithium-ion packs reached their later cost, energy-density, and supply-chain position. It offered a workable compromise for hybrids that needed frequent shallow cycling, moderate energy storage, and dependable power flow. The first-generation Toyota Prius is a representative historical example of the chemistry's role in bringing hybrid operation to volume production.

Lithium-ion later became more common in plug-in hybrids and battery-electric vehicles because it can provide higher energy density and pack-level flexibility. That shift does not make NiMH irrelevant; it marks a change in the design problem.

## Tradeoffs

NiMH is generally robust and tolerant of hybrid cycling, but it has lower specific energy than many lithium-ion chemistries. It also has self-discharge and heat-management considerations, and pack voltage must be monitored carefully. The chemistry can be a good fit when power pulses and durability matter more than long electric range.

Cost, packaging, cooling, recycling pathways, and supplier experience all affected its adoption. A hybrid pack is a system, not just a chemistry label.

## Representative Uses

NiMH batteries were widely used in non-plug-in hybrids, including early Prius generations and other hybrid cars. They also appeared in some early electric-vehicle and industrial applications. In the archive, NiMH is useful as a case study in how hybrids matured before lithium-ion became the default reference point for plug-in vehicles.

## Common Misconceptions

NiMH was not simply a temporary placeholder. It matched the needs of many early hybrids: shallow cycling, regenerative-braking acceptance, and long service life. It also was not enough by itself to create a hybrid vehicle. Power electronics, control software, motor design, cooling, and mechanical integration were equally important.

## Study Next

- [Hybrid Electric Vehicle](/technologies/hybrid-electric-vehicle/) for the architecture that made NiMH visible.
- [Battery Management System](/technologies/battery-management-system/) for monitoring and usable state-of-charge windows.
- [Lithium-Ion Battery](/technologies/lithium-ion-battery/) for the later dominant plug-in battery family.
