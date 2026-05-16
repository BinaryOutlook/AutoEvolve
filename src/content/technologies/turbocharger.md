---
title: 'Turbocharger'
summary: 'An exhaust-driven compressor system that increases intake-air density so an engine can burn more fuel-air mixture for a given displacement.'
status: 'published'
lastReviewed: '2026-05-16'
sources:
  [
    'cummins-how-turbocharger-works',
    'doe-vto-energy-recovery-exhaust-materials',
    'epa-nhtsa-2017-2025-technical-assessment',
    'saab-car-museum-history-99-turbo',
    'saab-99-turbo-period-brochure',
  ]
category: 'engine-subsystem'
eras:
  [
    'standardization-and-mass-production',
    'emissions-and-electronic-control',
    'modern-diesel-and-aftertreatment',
  ]
relatedTechnologies:
  [
    'petrol-gasoline-engine',
    'diesel-engine',
    'direct-injection-petrol-engine',
    'exhaust-gas-recirculation',
    'engine-control-unit',
    'supercharger',
  ]
relatedVehicles: ['saab-99-turbo']
---

## Definition

A turbocharger is a forced-induction device that uses exhaust-gas energy to spin a turbine connected by a shaft to an intake compressor. The compressor raises intake-air pressure before the air enters the cylinders, increasing charge density when the engine and control system can supply matching fuel, ignition, cooling, and emissions control.

A useful shorthand is:

$$
\dot{m}_\text{air} \propto \rho_\text{intake} V_d N
$$

where $\dot{m}_\text{air}$ is air mass flow, $\rho_\text{intake}$ is intake-air density, $V_d$ is displacement, and $N$ is engine speed. Turbocharging mainly works by raising $\rho_\text{intake}$.

## Mechanism

Exhaust gas leaves the cylinders with pressure and heat energy that would otherwise mostly pass into the exhaust stream. The turbine extracts part of that energy. The compressor then pushes more air into the intake tract, usually through an intercooler that lowers charge temperature after compression.

Modern systems rarely operate as simple spinning hardware alone. Wastegates, variable-geometry turbines, bypass valves, boost sensors, knock sensors, oxygen sensors, and the engine control unit coordinate boost pressure with fuel delivery, spark timing, exhaust temperature, catalyst needs, and diagnostic limits.

## Historical Context

Turbocharging appeared first where extra air was valuable enough to justify heat, cost, and control complexity, including aircraft, commercial engines, competition engines, and later production passenger vehicles. The Saab 99 Turbo is one representative late-1970s production example because Saab framed turbocharging around usable mid-range torque rather than only peak output.

From the 2000s onward, regulators and manufacturers increasingly discussed turbocharging with engine downsizing and gasoline direct injection. In that package, a smaller engine can operate at more efficient loads during everyday driving while boost helps preserve torque when demand rises.

## Tradeoffs and Constraints

Turbocharging is not free energy. It recovers exhaust energy, but it also raises exhaust back pressure, intake temperature, peak cylinder pressure, and calibration complexity. Engineers must manage knock in gasoline engines, turbine temperature, lubricant heat, compressor surge, transient response, and aftertreatment warm-up.

Older discussions often centered on turbo lag, the delay between a load request and boost response. Contemporary designs reduce that delay with smaller turbines, twin-scroll housings, variable geometry, electric assistance, or hybrid strategies, but every choice changes cost, durability, and thermal behavior.

## Representative Uses

Turbochargers are common in modern diesel engines because compression-ignition operation benefits from excess air and high-load torque. They are also common in downsized gasoline engines, especially when paired with direct injection, variable valve timing, intercooling, and electronic boost control.

## Common Misconceptions

A turbocharger is not simply a power accessory bolted onto any engine. The engine structure, cooling system, exhaust hardware, fuel system, combustion chamber, emissions hardware, and calibration all determine whether boost can be used safely and cleanly. Turbocharging also does not automatically mean poor efficiency; in downsized packages it can reduce pumping and friction losses in some operating ranges, while increasing stress and complexity in others.

## Study Next

- [Supercharger](/technologies/supercharger/) for mechanically driven forced induction.
- [Direct Injection Petrol Engine](/technologies/direct-injection-petrol-engine/) for a fuel system often paired with turbocharged gasoline engines.
- [Exhaust Gas Recirculation](/technologies/exhaust-gas-recirculation/) for knock and NOx-control strategies that interact with boost.
