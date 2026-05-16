---
title: 'Continuously Variable Transmission'
summary: 'A transmission that varies its effective ratio across a continuous range rather than stepping through fixed gear pairs.'
status: 'published'
lastReviewed: '2026-05-16'
sources:
  [
    'epa-advanced-gasoline-diesel',
    'epa-automotive-trends-2025',
    'nhtsa-transmission-technologies-2012',
    'britannica-transmission-engineering',
    'britannica-automobile-transmission',
  ]
category: 'transmission-driveline'
eras: ['emissions-and-electronic-control', 'hybridization']
relatedTechnologies:
  [
    'manual-transmission',
    'automatic-transmission',
    'dual-clutch-transmission',
    'hybrid-electric-vehicle',
    'torque-converter',
  ]
relatedVehicles: []
---

## Definition

A continuously variable transmission, or CVT, changes the effective ratio between engine speed and vehicle speed across a range rather than selecting one fixed gear pair at a time. The common belt-and-pulley form uses two variable-diameter pulleys connected by a steel belt or chain. Hybrid power-split systems can also create continuously variable behavior through mechanical and electrical paths.

## How It Works

In a pulley CVT, each pulley has two conical sheaves. Moving the sheaves closer together forces the belt to ride at a larger effective radius; moving them apart lets the belt ride lower. Changing the input and output pulley radii changes the ratio smoothly.

A simplified ratio view is:

$$
i_\text{CVT} \approx \frac{r_\text{out}}{r_\text{in}}
$$

where $r_\text{in}$ and $r_\text{out}$ are the effective belt radii at the input and output pulleys. Real CVTs also depend on belt clamping force, friction, torque capacity, hydraulic control, and thermal limits.

## Main Components

- **Primary and secondary pulleys:** adjust effective belt radius.
- **Steel belt or chain:** transfers torque between pulleys.
- **Hydraulic or electromechanical actuators:** set pulley position and clamping force.
- **Launch device:** often a torque converter or clutch, depending on design.
- **Control software:** selects ratio behavior for launch, acceleration, cruise, grade, and protection modes.
- **Fluid system:** manages friction characteristics, cooling, and pulley actuation.

## Why It Emerged

A combustion engine has speed-load regions where it can operate more efficiently, quietly, or responsively. Fixed gears force compromises between launch torque, acceleration, cruising speed, and engine noise. A CVT can decouple engine speed from road speed more flexibly, allowing the control system to choose an engine operating point and adjust vehicle acceleration through ratio change.

CVTs became especially visible as fuel-consumption and emissions requirements encouraged finer powertrain control. They also align naturally with some hybrid layouts, where electric machines help manage torque flow and engine operating points.

## Tradeoffs and Constraints

The central benefit of a CVT is ratio flexibility. Its constraints are torque capacity, belt or chain stress, clamping-force losses, heat rejection, control feel, and durability under repeated high-load events. Calibration must translate driver pedal input into a ratio and engine-speed response that feels understandable while protecting hardware.

Some CVTs simulate stepped shifts even though they do not require them mechanically. That behavior is a calibration choice, often used to make acceleration sound and feel more familiar.

## Common Misconceptions

A CVT is not gearless in the sense of having no ratio. It has a variable ratio. It also is not always a belt-and-pulley system; the term describes continuous ratio behavior, while the mechanism may be mechanical, electromechanical, or hybrid power-split.

## Study Next

- [Hybrid Electric Vehicle](/technologies/hybrid-electric-vehicle/) for power-split behavior and electric assist.
- [Automatic Transmission](/technologies/automatic-transmission/) for stepped ratio changes with clutches and gearsets.
- [Torque Converter](/technologies/torque-converter/) for one common CVT launch device.
