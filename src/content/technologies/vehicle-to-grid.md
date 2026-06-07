---
title: 'Vehicle-to-Grid'
summary: 'Bidirectional charging in which an electric vehicle battery can export energy to a grid, building, load, or managed energy system.'
status: 'published'
lastReviewed: '2026-05-16'
sources:
  [
    'doe-femp-bidirectional-charging-mobile-storage',
    'nrel-electric-vehicle-grid-integration',
    'iso-15118-1-2019',
    'hyundai-ioniq5-egmp',
  ]
category: 'fuel-energy'
eras:
  [
    'battery-electric-vehicles',
    'plug-in-hybrids',
    'software-defined-connected-vehicles',
  ]
relatedTechnologies:
  [
    'ev-charging',
    'battery-electric-vehicle',
    'battery-management-system',
    'combined-charging-system',
    'onboard-charger',
    'charging-communication-protocols',
    'vehicle-cybersecurity',
  ]
relatedVehicles: ['hyundai-ioniq-5']
---

## Definition

Vehicle-to-grid, or V2G, is a bidirectional-charging concept in which an electric vehicle can send energy from its traction battery to electric supply equipment and then to a grid service, building, microgrid, or other managed load. It belongs to a larger family that also includes vehicle-to-building, vehicle-to-home, and vehicle-to-load functions.

The technical idea is simple to state but difficult to deploy: the vehicle becomes mobile storage only when the vehicle, charger, building or grid connection, software controls, utility rules, and user needs all align.

## Mechanism

A bidirectional system must control energy in two directions:

$$
E_\text{exported} < E_\text{available pack}
$$

The inequality matters because the vehicle must preserve mobility reserve, battery protection margins, conversion losses, and safety limits. V2G is not a request to empty a traction battery into the grid; it is a managed exchange within negotiated boundaries.

The system needs a bidirectional power-conversion path. In some architectures, an offboard bidirectional charger handles grid AC conversion and controls DC exchange with the vehicle. In others, vehicle hardware may support AC export or local load support. Communication defines whether discharging is allowed, what power is available, when the vehicle must be ready to drive, and how faults or grid outages are handled.

## Historical Context

V2G became more visible as battery-electric vehicles increased pack capacity and as electric utilities began studying how vehicle charging affects distribution systems. A parked vehicle can represent significant stored energy, especially in fleets with predictable schedules such as school buses, delivery vehicles, municipal vehicles, and workplace commuter fleets.

The concept also reframed electric vehicles from one-way loads into potential grid-edge resources. That shift connected automotive design to building energy management, distributed energy resources, electricity markets, cybersecurity, and emergency resilience.

## Tradeoffs and Constraints

The central tradeoff is availability. A vehicle battery is only useful to the grid when it is plugged in, authorized, sufficiently charged, and not needed for immediate driving. Fleet applications can be easier to schedule than private household vehicles because routes, dwell windows, and reserve needs are more predictable.

Battery wear, warranty treatment, metering, compensation, interconnection approval, utility program design, cybersecurity, and emergency islanding all affect deployment. A technically capable vehicle is therefore not enough. The surrounding energy system must know how to use it safely and fairly.

## Representative Uses

V2G can support demand response, peak reduction, backup power, microgrid operation, and local resilience. Vehicle-to-building use may keep a facility or specific loads operating during outages. Vehicle-to-load functions, such as exporting limited AC power for tools or appliances, are related but do not necessarily place power back onto the utility grid.

A dedicated EV platform with bidirectional features illustrates the broader direction: high-voltage vehicles are increasingly designed as electrical systems that can interact with buildings and charging infrastructure, not only consume energy for propulsion.

## Regulatory and Standards Context

ISO 15118 is central to standards discussion because it includes use cases for energy transfer from vehicle supply equipment to the battery and from the battery back to supply equipment for homes, loads, or the grid. Its scope is communication at the vehicle-to-equipment interface rather than every internal battery message.

Regulatory context remains less settled than basic AC charging. Interconnection, anti-islanding protection, metering, compensation, and market participation rules differ by jurisdiction and utility program. For an educational archive, that means V2G should be described as a system integration topic rather than a guaranteed feature attached to every bidirectional-capable vehicle.

## Study Next

- [EV Charging](/technologies/ev-charging/) for the charging-system baseline.
- [Battery Management System](/technologies/battery-management-system/) for battery protection and state estimation.
- [Combined Charging System](/technologies/combined-charging-system/) for connector and communication context used by many bidirectional discussions.
