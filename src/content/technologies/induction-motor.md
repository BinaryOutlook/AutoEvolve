---
title: 'Induction Motor'
summary: 'An AC traction motor that induces rotor current instead of relying on permanent magnets, trading material simplicity against some efficiency and power-density limits.'
status: 'published'
lastReviewed: '2026-05-16'
sources:
  [
    'doe-vto-electric-drive-systems',
    'doe-vto-electric-motors-rd',
    'doe-vto-power-electronics-rd',
  ]
category: 'electric-drive'
eras: ['battery-electric-vehicles', 'plug-in-hybrids']
relatedTechnologies:
  [
    'power-inverter',
    'battery-electric-vehicle',
    'regenerative-braking',
    'permanent-magnet-synchronous-motor',
  ]
relatedVehicles: ['tesla-model-s']
---

## Definition

An induction motor is an AC electric machine in which the stator's rotating magnetic field induces current in the rotor. That induced current creates its own magnetic field, and the interaction between the stator and rotor fields produces torque.

Unlike many permanent-magnet traction motors, an induction motor does not require rotor magnets.

## Mechanism

The inverter sends three-phase alternating current into the stator. The stator field rotates at synchronous speed. The rotor turns slightly slower under load, creating slip. Slip is not a defect; it is what allows changing magnetic flux to induce current in the rotor conductors.

A simplified way to express the relationship is:

$$
s = \frac{n_s - n_r}{n_s}
$$

where $s$ is slip, $n_s$ is synchronous speed, and $n_r$ is rotor speed. If there were no speed difference under load, there would be little induced rotor current and therefore little torque.

## Historical Context

Induction motors are mature industrial machines, long used in factories, pumps, and rail applications. Automotive traction use became more practical as solid-state inverters improved. Variable-frequency control made it possible to deliver smooth launch torque, high-speed operation, and regeneration from a machine that once depended on fixed-frequency grid power in many settings.

In battery-electric vehicles, induction motors offered an important path around rare-earth magnets. They also worked well for high-power applications where robust rotors and controllable field behavior were attractive.

## Tradeoffs

Induction motors can provide high starting torque, good reliability, and freedom from permanent-magnet material supply. Their rotor is generally robust and avoids demagnetization concerns. The tradeoff is that rotor current must be induced, which creates rotor losses and heat. That can reduce efficiency and power density compared with many interior permanent-magnet motors.

At light loads, the inverter may reduce magnetizing current to improve efficiency, but the machine still needs careful control. Thermal management must handle stator and rotor heating, especially during sustained high power.

## Representative Uses

Induction motors have appeared in battery-electric passenger cars, commercial electric-drive systems, and auxiliary or secondary drive units. Some vehicles use induction machines on one axle and permanent-magnet machines on another, choosing the active motor based on speed, load, traction, and efficiency.

## Common Misconceptions

An induction motor is not old-fashioned simply because the principle is mature. Its behavior in an electric vehicle depends on modern inverter control, cooling, packaging, and software. At the same time, magnet-free construction is not automatically cheaper or more efficient once the full system is counted.

## Study Next

- [Power Inverter](/technologies/power-inverter/) for variable-frequency motor control.
- [Permanent-Magnet Synchronous Motor](/technologies/permanent-magnet-synchronous-motor/) for a common automotive contrast.
- [Battery Electric Vehicle](/technologies/battery-electric-vehicle/) for the traction system around the motor.
