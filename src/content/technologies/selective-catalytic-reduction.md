---
title: 'Selective Catalytic Reduction'
summary: 'A diesel aftertreatment process that uses a reductant and catalyst to convert NOx into nitrogen and water.'
status: 'published'
lastReviewed: '2026-05-16'
sources:
  [
    'epa-vw-settlement',
    'epa-vw-violations',
    'icct-vw-real-world-emissions-2014',
    'doe-afdc-diesel-vehicle',
    'doe-vto-emission-control',
  ]
category: 'emissions'
eras: ['modern-diesel-and-aftertreatment']
relatedTechnologies:
  ['diesel-engine', 'engine-control-unit', 'common-rail-diesel-injection']
relatedVehicles: ['volkswagen-tdi-dieselgate-example']
---

## Definition

Selective catalytic reduction, often abbreviated SCR, is an exhaust aftertreatment process for reducing NOx emissions. In many automotive systems, a urea-water solution is dosed into the exhaust stream and converted into ammonia, which reacts over a catalyst.

## Place In A Diesel System

SCR sits downstream of the combustion event. A light-duty diesel vehicle may combine high-pressure fuel injection, turbocharging, exhaust-gas recirculation, diesel oxidation catalyst, diesel particulate filter, diesel exhaust fluid dosing, SCR catalyst, ammonia slip catalyst, and sensors. The result is not one emissions device but a staged exhaust system whose pieces depend on temperature, flow, load, and calibration.

The simplified goal is:

$$
\text{NOx} + \text{reductant} \rightarrow \text{nitrogen} + \text{water}
$$

That equation hides many practical constraints. The reductant must be dosed at the right rate, the catalyst must be hot enough, the exhaust flow must be understood, deposits and aging must be managed, and diagnostic systems must detect faults without creating false alarms.

## Engineering Role

SCR must be coordinated with exhaust temperature, engine load, dosing strategy, catalyst condition, and onboard diagnostics. It is not just a passive component; it is a controlled system.

The dosing system estimates how much diesel exhaust fluid is needed from engine operating state and downstream sensor feedback. Too little reductant can leave excess NOx. Too much can lead to ammonia slip, deposits, or inefficient use of fluid. Low exhaust temperature can reduce conversion efficiency, while very high temperature, sulfur exposure, contamination, or aging can change catalyst performance.

This makes SCR a useful example of modern emissions engineering: the hardware is visible, but the achieved emissions result depends heavily on sensors, thermal management, software strategy, and maintenance of the complete system.

## Relationship To Engine Calibration

Diesel engines often trade NOx, particulate matter, fuel consumption, drivability, exhaust temperature, and aftertreatment requirements against one another. Calibration choices can shift the burden between in-cylinder control and exhaust aftertreatment. Common-rail injection timing, boost pressure, exhaust-gas recirculation, catalyst heating strategy, and SCR dosing can all interact.

For that reason, SCR should not be described as a magic cleanup box installed after the engine. It is one part of a larger emissions-control architecture.

Maintenance and diagnostics are part of that architecture. Diesel exhaust fluid must be stored, thawed in cold weather where necessary, metered accurately, and kept from forming deposits in the exhaust path. Sensors must monitor NOx, temperature, pressure, and dosing behavior closely enough to detect faults. If the fluid is missing, contaminated, frozen, or poorly dosed, the chemistry may be theoretically sound while the vehicle-level result falls short.

## Historical Role

SCR became important as diesel emissions standards tightened and lean-combustion engines needed better NOx control. The ICCT real-world emissions work and the Volkswagen enforcement record made a public issue out of the gap between certified behavior and observed in-use diesel emissions.

Dieselgate made the operation of diesel aftertreatment systems more visible to the public and regulators. It also showed why aftertreatment pages need both technical detail and compliance context: the relevant question is not only whether SCR can reduce NOx, but under what conditions it is active, durable, monitored, and honestly represented.

## Neutral Reading

SCR is neither a blanket defense of diesel vehicles nor proof that diesel technology is inherently unacceptable. It is a capable NOx-control technology with real operating boundaries. Neutral analysis should distinguish the chemistry, the hardware, the calibration, the regulatory test procedure, and the manufacturer's compliance behavior.

## Evidence Boundary

The sources support SCR as a diesel aftertreatment technology and connect it to the Volkswagen enforcement and real-world emissions context. They do not let this page generalize every diesel system's legality, effectiveness, or durability without vehicle-specific evidence.
