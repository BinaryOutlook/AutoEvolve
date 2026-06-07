---
title: 'Axial-Flux Motor'
summary: 'An electric-machine layout with magnetic flux running mainly along the shaft axis, offering compact torque density while posing manufacturing and cooling challenges.'
status: 'published'
lastReviewed: '2026-05-16'
sources:
  [
    'doe-vto-electric-motors-rd',
    'ornl-axial-flux-ev-comparison-2023',
    'ornl-axial-flux-review-2023',
  ]
category: 'electric-drive'
eras: ['battery-electric-vehicles']
relatedTechnologies:
  [
    'power-inverter',
    'permanent-magnet-synchronous-motor',
    'induction-motor',
    'battery-electric-vehicle',
  ]
relatedVehicles: []
---

## Definition

An axial-flux motor is an electric machine in which the main magnetic flux travels roughly parallel to the motor shaft. Many familiar traction motors are radial-flux machines, where flux crosses the air gap radially between an inner rotor and outer stator. Axial-flux machines often use disc-like rotors and stators facing each other across a flat air gap.

## Mechanism

The inverter energizes stator windings to create a rotating magnetic field. In a permanent-magnet axial-flux design, rotor magnets interact with that field and produce torque. The short axial length and large effective radius can be attractive because torque rises with force applied farther from the shaft center.

A simplified torque relationship is:

$$
T = F r
$$

where $F$ is tangential force and $r$ is effective radius. Axial-flux layouts try to use geometry efficiently, but real output also depends on magnet material, winding design, air-gap control, rotor stiffness, cooling, and manufacturability.

## Historical Context

Axial-flux machines are not new, but they have drawn renewed automotive interest as electric-drive packaging has tightened. Dedicated EV platforms, wheel-adjacent drive units, hybrid modules, and performance-oriented e-axles all encourage engineers to ask whether shorter motors with high torque density could help.

Current research and development still treat axial-flux traction motors as an active engineering field rather than a settled industry replacement for radial-flux machines. Studies compare axial and radial layouts for specific vehicle use cases, while reviews continue to highlight manufacturing, thermal, structural, and high-speed design questions.

## Tradeoffs

Axial-flux machines can offer high torque density and a thin package. They may suit applications where axial length is scarce but diameter is available. The constraints are substantial: keeping a flat, narrow air gap can be difficult; disc rotors must handle mechanical stress; cooling windings and magnets can be harder than in familiar cylindrical machines; and high-volume manufacturing methods are less mature than for many radial-flux motors.

Permanent-magnet axial-flux designs also share magnet-material tradeoffs with other PMSMs. Reduced mass does not remove rare-earth supply, cost, or demagnetization concerns.

Operating speed deserves careful treatment. A large effective radius can help torque, but rotor stress and peripheral speed rise with diameter and rotational speed. Disc-shaped parts must remain flat enough to preserve the air gap while also surviving vibration, thermal expansion, and manufacturing tolerance stackups. Cooling can be attractive if large surfaces are available, yet heat still has to leave windings, magnets, resin, bearings, and power electronics under real duty cycles.

## Representative Uses

Representative uses include prototype and limited-production traction drives, compact hybrid modules, aerospace-adjacent electric propulsion, and motors proposed for high-torque EV drive units. In passenger cars, axial-flux technology should be described carefully: it is present in selected applications and supplier programs, but broad adoption remains more limited than conventional radial-flux machines.

## Common Misconceptions

Axial flux is not a magic geometry. The layout changes the engineering problem; it does not cancel the need for inverter control, cooling, mechanical durability, acoustic tuning, and scalable production. Claims about high power density should be read with operating speed, duty cycle, cooling assumptions, and cost in view.

## Evidence Boundary

The cited ORNL and DOE material supports comparison and research framing. It should not be stretched into a prediction that axial-flux machines will replace radial-flux motors across the market.

## Study Next

- [Permanent-Magnet Synchronous Motor](/technologies/permanent-magnet-synchronous-motor/) for the magnet-machine family most axial-flux traction concepts belong to.
- [Power Inverter](/technologies/power-inverter/) for motor-control electronics.
- [Battery Electric Vehicle](/technologies/battery-electric-vehicle/) for the vehicle architecture around compact drive units.
