---
title: 'Brake-by-Wire'
summary: 'A braking architecture that transmits pedal demand as electrical signals and uses controlled actuators to build brake pressure.'
status: 'source-review'
lastReviewed: '2026-06-07'
sources:
  - 'bosch-brake-by-wire'
  - 'bosch-esp-history'
  - 'nhtsa-fmvss-126-final-rule-2007'
  - 'nhtsa-cybersecurity-practices'
category: 'chassis-safety'
eras:
  - 'software-defined-connected-vehicles'
relatedTechnologies:
  - 'anti-lock-braking-system'
  - 'electronic-stability-control'
  - 'regenerative-braking'
  - 'adaptive-cruise-control'
  - 'vehicle-cybersecurity'
relatedVehicles: []
---

## Definition

Brake-by-wire replaces a direct mechanical or hydraulic pedal-to-brake path with
electrical demand signals and controlled brake actuators. Depending on the
design, the system may still use hydraulic pressure at the wheel brakes, but the
driver's request is measured and interpreted electronically.

This makes braking a software-mediated control problem. Pedal feel, pressure
build-up, stability control, regenerative blending, diagnostics, and fallback
behavior all have to be engineered together.

## Mechanism

The basic control path is:

```text
pedal sensors -> brake controller -> actuator pressure -> wheel brakes
```

In electrified vehicles, the controller may first ask how much deceleration can
come from regenerative braking. Friction brakes then cover the remainder, or all
of the request when regeneration is unavailable.

A useful deceleration split is:

$$
a_\text{request} = a_\text{regen} + a_\text{friction}
$$

The equality is only conceptual. Real systems also account for tire grip, pedal
feel, battery charge acceptance, wheel slip, stability control, temperature,
actuator faults, and legal requirements.

## Why It Emerged

Brake-by-wire follows earlier electronic brake-control history. ABS proved that
electronic modulation could improve wheel-slip control. ESC showed that
individual wheel braking could support directional stability. Hybrid and
battery-electric vehicles then made brake blending more valuable because
deceleration could be split between energy recovery and friction braking.

## Constraints

The hard part is trust under fault. A brake-by-wire system must preserve braking
availability when a sensor, actuator, power supply, or network path fails. It
also has to prevent cybersecurity and diagnostic access from becoming a path to
unsafe brake behavior.

## Evidence Boundary

Bosch supports the component and operating-principle description. NHTSA and
Bosch ESC sources support the broader stability-control background. This page
does not claim that one brake-by-wire supplier architecture is universal.

## Study Next

- [Anti-Lock Braking System](/technologies/anti-lock-braking-system/) for
  wheel-slip modulation.
- [Electronic Stability Control](/technologies/electronic-stability-control/)
  for individual-wheel intervention.
- [Regenerative Braking](/technologies/regenerative-braking/) for brake-energy
  blending in electrified vehicles.
