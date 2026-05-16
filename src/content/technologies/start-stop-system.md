---
title: 'Start-Stop System'
summary: 'A propulsion-control strategy that shuts an idling combustion engine off during stops and restarts it when the vehicle is ready to move.'
status: 'published'
lastReviewed: '2026-05-16'
sources: ['doe-afdc-idle-reduction-research', 'epa-automotive-trends-2025']
category: 'propulsion'
eras: ['hybridization', 'emissions-and-electronic-control']
relatedTechnologies:
  [
    'engine-control-unit',
    'electronic-throttle-control',
    'hybrid-electric-vehicle',
  ]
relatedVehicles: ['toyota-prius']
---

## Definition

A start-stop system shuts down a combustion engine when the vehicle is stopped or nearly stopped, then restarts it when the driver requests movement. The purpose is to reduce idle time, especially in urban driving with repeated traffic-light and congestion stops.

## Mechanism

The controller watches brake position, clutch or transmission state, vehicle speed, battery condition, cabin climate demand, engine temperature, steering or accessory loads, and restart readiness. If conditions are acceptable, it stops fuel and spark, opens or positions actuators for restart, and keeps vehicle electrical loads supplied from the battery. When the driver releases the brake, presses the clutch, or requests torque, the system restarts the engine through a starter, belt starter-generator, or integrated hybrid motor.

The energy logic is simple, although the control details are not:

$$
\text{fuel saved while stopped} > \text{fuel and wear cost of restart}
$$

The inequality depends on stop duration, accessory load, engine size, battery state, ambient temperature, and system design.

## Historical Context

Hybrids normalized engine-off operation because their electric machines and batteries could restart the engine and move the vehicle smoothly. Later, non-hybrid start-stop systems spread as manufacturers looked for incremental fuel-consumption and emissions reductions without changing the entire drivetrain. EPA Automotive Trends reporting shows start-stop moving beyond hybrids into conventional gasoline cars and light trucks after model year 2012.

The technology belongs in the same story as idle emissions, urban duty cycles, and more capable powertrain electronics. It treats idling as a controllable state rather than an unavoidable condition.

## Tradeoffs and Constraints

Start-stop reduces idle fuel use only when operating conditions allow engine-off time. Cabin heating or air conditioning, battery state, engine temperature, steering demand, grade, trailer loads, and repeated short stops can inhibit shutdowns. The system also needs durable starters, batteries, mounts, controls, and restart calibration so that frequent cycles do not create unacceptable wear or driver confusion.

There are emissions constraints too. A restart must preserve catalyst temperature and mixture control, and the system must avoid shutdowns that would compromise diagnostics or aftertreatment readiness. In some cases the engine stays running because emissions or thermal management is more important than saving a few seconds of idle fuel.

## Representative Uses

Start-stop appears in full hybrids, mild hybrids, and many non-hybrid combustion vehicles. Hybrid systems can often restart the engine with a larger electric machine, while non-hybrid systems may use enhanced starters, absorbed-glass-mat batteries, or belt starter-generators. In both cases, the visible behavior is simple: the engine turns off at a stop and returns when propulsion is requested.

## What It Teaches

Start-stop teaches that efficiency can come from controlling when an engine runs, not only from improving how it runs. It also shows how small user-visible features require a network of sensors, battery management, starter durability, emissions logic, and calibration. The engine is no longer assumed to idle whenever the vehicle is powered on; software decides whether idling is necessary.
