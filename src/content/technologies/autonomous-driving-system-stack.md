---
title: 'Autonomous Driving System Stack'
summary: 'The layered sensing, planning, control, monitoring, and fallback architecture behind automated-driving functions.'
status: 'source-review'
lastReviewed: '2026-06-07'
sources:
  - 'nhtsa-automated-vehicle-safety'
  - 'iihs-advanced-driver-assistance'
  - 'nhtsa-driver-assistance-shoppers-guide-2018'
  - 'mercedes-drive-pilot'
  - 'nhtsa-cybersecurity-practices'
category: 'software-diagnostics'
eras:
  - 'software-defined-connected-vehicles'
relatedTechnologies:
  - 'adaptive-cruise-control'
  - 'adas-sensor-fusion'
  - 'zonal-electrical-architecture'
  - 'over-the-air-software-updates'
  - 'vehicle-cybersecurity'
  - 'controller-area-network'
relatedVehicles: []
---

## Definition

An autonomous driving system stack is the set of hardware, software, controls,
driver interface, and safety processes that let a vehicle perform part of the
driving task under defined conditions. It is better understood as a bounded
engineering stack than as a single "self-driving" feature.

The stack usually includes perception, localization, prediction, planning,
motion control, diagnostics, driver or occupant communication, cybersecurity,
and fallback behavior. Which layers are active depends on the automation level,
road type, speed range, weather, and legal operating domain.

## How The Stack Works

At a high level, the control question is:

$$
\text{Driving action} = f(\text{sensed scene}, \text{vehicle state}, \text{rules}, \text{fallback limits})
$$

Sensors estimate the surrounding scene. Software classifies lanes, vehicles,
objects, free space, signs, and relevant road boundaries. Prediction logic asks
what nearby road users might do next. Planning chooses a path and speed profile,
then lower-level controllers request steering, braking, propulsion, and signals.

The system also monitors itself. A stack that can steer or brake must know when
its sensors, maps, compute hardware, network messages, actuators, or operating
domain are no longer sufficient.

## Boundaries

Driver assistance and automated driving are not the same thing. Adaptive cruise
control can manage speed and gap, while lane centering can help with steering.
Together they may create partial automation, but the human driver can still be
responsible for supervision. A conditionally automated system has a narrower
operating domain and a different fallback contract.

This boundary is central to neutral writing. The article should explain who or
what is responsible for monitoring, what conditions define use, and what happens
when the system reaches a limit.

## Historical Role

The autonomous-driving stack grew from earlier electronic control systems:
anti-lock braking, stability control, radar cruise control, electric power
steering, camera-based assistance, in-vehicle networks, and increasingly
centralized compute. Its history is therefore not a sudden jump from manual
driving to autonomy. It is a gradual stacking of sensing and control functions.

## Evidence Boundary

The cited NHTSA and IIHS sources support automation-level and driver-assistance
framing. The Mercedes source is used only as an example of a production
conditionally automated system, not as proof that all vehicles or markets have
the same capabilities.

## Study Next

- [Adaptive Cruise Control](/technologies/adaptive-cruise-control/) for a
  narrow longitudinal-control function.
- [ADAS Sensor Fusion](/technologies/adas-sensor-fusion/) for how perception
  inputs are combined.
- [Vehicle Cybersecurity](/technologies/vehicle-cybersecurity/) for the risk
  management layer around connected automation.
