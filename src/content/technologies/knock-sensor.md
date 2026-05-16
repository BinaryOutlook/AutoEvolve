---
title: 'Knock Sensor'
summary: 'A vibration sensor that helps the engine controller identify abnormal combustion and adjust ignition, boost, or torque strategy.'
status: 'published'
lastReviewed: '2026-05-16'
sources:
  [
    'bosch-knock-sensor',
    'sae-knock-detector-boost-control-1980',
    'sae-combustion-knock-sensing-1990',
  ]
category: 'engine-subsystem'
eras: ['emissions-and-electronic-control']
relatedTechnologies:
  ['engine-control-unit', 'fuel-injection', 'petrol-gasoline-engine']
relatedVehicles: ['saab-99-turbo']
---

## Definition

A knock sensor detects high-frequency engine vibration associated with abnormal combustion in spark-ignition engines. The ECU uses the signal to adjust ignition timing, boost pressure, or torque strategy so the engine can operate near its calibrated limits without allowing sustained knock.

## Mechanism

Most production knock sensors use a piezoelectric element mounted to the engine block or crankcase. When the block vibrates at frequencies characteristic of knock, the element produces an electrical signal. The ECU filters that signal by crank angle, engine speed, load, and cylinder event timing, then decides whether to retard spark, reduce boost, enrich mixture, or apply another protective response.

Knock control is therefore a selective feedback loop. The controller tries to keep combustion timing efficient while leaving a margin against damaging pressure oscillations.

## Historical Context

Knock sensing became prominent as electronic engine control made adaptive ignition and boost strategies practical. Turbocharged gasoline engines made the value especially clear because boost, charge temperature, fuel octane, and spark timing strongly affect knock margin. SAE work in the early 1980s documented knock-detection systems used to control maximum charge pressure in turbocharged engines, while later papers treated sensor selection and calibration as production concerns.

The historical shift is subtle but important. Earlier engines often relied on conservative fixed timing or mechanical distributors. Knock feedback allowed calibration to respond to fuel quality and operating conditions rather than assuming the same margin at all times.

## Tradeoffs and Constraints

A knock sensor must separate harmful combustion vibration from normal engine noise, valvetrain events, road inputs, and accessory vibration. False knock can cause unnecessary timing retard and torque loss. Missed knock can risk thermal and mechanical damage. Calibration therefore depends on sensor placement, frequency windows, cylinder identification, and engine-specific noise models.

Knock control also exposes a tradeoff between efficiency and protection. Advancing ignition timing can improve combustion phasing up to a point, but operation too close to the knock limit reduces robustness. Modern ECUs use learned corrections and safety margins because fuel quality, deposits, temperature, and aging can change the real limit.

## Representative Uses

Knock sensors are widely used on spark-ignition engines, including naturally aspirated, turbocharged, direct-injection, and flexible-fuel designs. A representative historical use is knock-controlled boost management on turbocharged gasoline engines, where the controller could reduce charge pressure when knock was detected.

## What It Teaches

The knock sensor teaches that modern engine control is not only about emissions hardware. It is also about protecting combustion inside the cylinder while meeting torque, fuel, and regulatory demands. The sensor turns a destructive acoustic phenomenon into a signal that software can interpret, but the decision remains probabilistic and calibration-dependent.
