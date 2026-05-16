---
title: 'Hybrid Electric Vehicle'
summary: 'A propulsion architecture that blends combustion-engine power, electric-machine torque, battery storage, and control software.'
status: 'published'
lastReviewed: '2026-05-16'
sources: ['doe-afdc-hybrid', 'doe-afdc-phev', 'epa-automotive-trends-2025']
category: 'electric-drive'
eras: ['hybridization', 'plug-in-hybrids']
relatedTechnologies:
  [
    'regenerative-braking',
    'battery-management-system',
    'engine-control-unit',
    'plug-in-hybrid-electric-vehicle',
    'continuously-variable-transmission',
    'battery-electric-vehicle',
  ]
relatedVehicles: ['toyota-prius']
---

## Definition

A hybrid electric vehicle combines an internal-combustion engine, one or more electric machines, a traction battery, power electronics, and supervisory controls. The vehicle can use the engine, the motor, or both depending on speed, load, battery state, temperature, and calibration strategy.

The word hybrid should be read as a system description. It is not only an engine with a motor added; it is a coordinated energy-management architecture.

## How It Works

A hybrid controller decides how to meet driver demand while keeping the engine, battery, and electric machine inside safe operating limits. At launch or low load, the electric machine may propel the vehicle alone in some designs. During acceleration, the motor can add torque. During braking, the motor can work as a generator and return some kinetic energy to the battery. During cruising, the engine may power the wheels directly, generate electricity, or do both depending on architecture.

Regenerative braking is bounded by available kinetic energy:

$$
E_\text{recovered} < \frac{1}{2}mv^2
$$

where $m$ is vehicle mass and $v$ is speed. The inequality matters because tires, motor limits, battery temperature, state of charge, and conversion losses prevent full recovery.

## Main Architectures

- **Mild hybrid:** uses a smaller electric machine for start-stop, torque assist, and limited regeneration, but usually cannot drive far on electric power alone.
- **Parallel hybrid:** engine and motor can both deliver torque to the wheels through a shared driveline.
- **Series hybrid:** the engine drives a generator, and the electric motor drives the wheels.
- **Power-split hybrid:** mechanical and electrical paths are blended, often through a planetary gearset or electronically controlled continuously variable behavior.
- **Plug-in hybrid:** adds external charging and a larger battery, allowing more operation from grid energy.

## Main Components

- **Combustion engine:** supplies liquid-fuel energy and may be optimized for hybrid duty cycles.
- **Electric machine or machines:** provide traction, generation, or both.
- **Traction battery:** stores recovered and engine-generated electrical energy.
- **Inverter and DC/DC converter:** manage high-voltage motor power and low-voltage vehicle loads.
- **Transmission or power-split device:** routes mechanical torque.
- **Hybrid control software:** arbitrates engine starts, torque blending, regenerative braking, and battery limits.

## Why It Emerged

Hybrids emerged as a way to use electric-drive advantages without depending entirely on a large externally charged battery. They addressed specific inefficiencies of combustion vehicles: idling, low-speed transients, braking losses, and operation away from efficient engine regions. They also created a bridge between conventional drivetrains and plug-in electric propulsion.

## Tradeoffs and Constraints

A hybrid drivetrain can recover some braking energy and resize how the engine is used, but it adds mass, cost, cooling needs, high-voltage safety requirements, and control complexity. The benefit depends strongly on duty cycle. Stop-and-go operation gives more chances for regeneration and engine-off operation than steady highway cruising.

Battery power and energy are not the same. A small battery may deliver high short bursts of power but store limited energy. A larger plug-in hybrid battery stores more energy but changes mass, packaging, charging behavior, and thermal design.

## Common Misconceptions

Hybrid does not mean one fixed layout. Two hybrids can share the same public label while using very different torque paths. Another misconception is that regeneration replaces friction brakes. Friction brakes remain necessary for high deceleration, low-speed stopping, parking, and redundancy.

## Study Next

- [Regenerative Braking](/technologies/regenerative-braking/) for energy recovery limits.
- [Plug-In Hybrid Electric Vehicle](/technologies/plug-in-hybrid-electric-vehicle/) for externally charged hybrids.
- [Continuously Variable Transmission](/technologies/continuously-variable-transmission/) for power-split and ratio-control context.
