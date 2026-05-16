---
title: 'Mass Air Flow Sensor'
summary: 'An intake sensor that measures incoming air mass so the engine controller can calculate fuel delivery, load, and emissions behavior.'
status: 'published'
lastReviewed: '2026-05-16'
sources:
  [
    'bosch-hotfilm-air-mass-meter',
    'sae-engine-mass-air-flow-meter-1976',
    'sae-automotive-engine-control-sensor-1978',
  ]
category: 'engine-subsystem'
eras: ['emissions-and-electronic-control']
relatedTechnologies:
  [
    'fuel-injection',
    'engine-control-unit',
    'oxygen-sensor',
    'electronic-throttle-control',
  ]
relatedVehicles: []
---

## Definition

A mass air flow sensor, or MAF sensor, measures the mass rate of intake air entering an engine. The ECU uses that information to calculate engine load, choose fuel quantity, coordinate ignition and throttle behavior, and support emissions control.

## Mechanism

Many modern MAF sensors use a hot-wire or hot-film principle. Air passing over a heated element removes heat. The sensor electronics measure the resulting temperature difference or current requirement and convert it into an air-mass signal for the ECU. Because fuel metering is fundamentally about matching fuel mass to air mass, direct air-mass measurement can simplify parts of the control problem.

The simplified gasoline fueling relationship is:

$$
\dot{m}_\text{fuel} \approx \frac{\dot{m}_\text{air}}{\text{target air-fuel ratio}}
$$

where $\dot{m}$ denotes mass flow rate. Real ECUs add corrections for transient airflow, fuel film behavior, injector characterization, oxygen-sensor feedback, temperature, and diagnostic limits.

## Historical Context

Air measurement became more important as electronic fuel injection moved vehicles away from carburetor vacuum signals and toward computer-controlled fuel delivery. SAE technical papers from the 1970s treated mass air flow as one of the key sensor inputs for electronic engine management. Later hot-film designs reduced moving parts and improved integration with compact intake systems.

MAF history also illustrates a broader electronics shift: engine load stopped being only a mechanical state sensed indirectly through throttle and manifold pressure. It became a measured input in a digital control loop.

## Tradeoffs and Constraints

A MAF sensor gives useful load information, but it is exposed to intake pulsation, contamination, packaging constraints, and airflow disturbances caused by ducts or filters. Sensor drift or deposits can bias fuel calculations. The ECU may use oxygen-sensor feedback to correct some error during closed-loop operation, but transient conditions and diagnostics still depend on plausible air measurement.

Some engines use manifold absolute pressure and speed-density calculations instead of, or alongside, MAF sensing. Neither strategy is universally simpler; the choice depends on cost, packaging, turbocharging, exhaust-gas recirculation, calibration goals, and diagnostic requirements.

## Representative Uses

MAF sensors are common in gasoline port-injection, gasoline direct-injection, diesel, and natural-gas engine-management systems. They are especially useful where the ECU needs an intake-air estimate independent of throttle angle, manifold pressure alone, or assumed volumetric efficiency.

## What It Teaches

The MAF sensor teaches why modern engine control is measurement-heavy. Emissions and drivability targets depend on knowing what enters the engine, not only what leaves it. It also shows the layered nature of control: feedforward fueling can begin from measured air mass, while oxygen sensors and OBD monitors check whether the resulting exhaust behavior makes sense.
