---
title: 'Anti-Lock Braking System'
summary: 'An electronically controlled braking system that reduces wheel lock during hard braking so the vehicle can retain steering authority.'
status: 'published'
lastReviewed: '2026-05-16'
sources:
  [
    'bosch-abs-history',
    'mercedes-benz-publicarchive-w116',
    'nhtsa-fmvss-126-final-rule-2007',
  ]
category: 'chassis-safety'
eras: ['emissions-and-electronic-control', 'software-defined-connected-vehicles']
relatedTechnologies:
  [
    'electronic-stability-control',
    'adaptive-cruise-control',
    'engine-control-unit',
  ]
relatedVehicles: ['mercedes-benz-s-class-w116']
---

## Definition

An anti-lock braking system, or ABS, is a braking-control system that reduces wheel lock during hard braking. Instead of allowing a braked wheel to stop rotating while the vehicle is still moving, ABS monitors wheel speed and modulates hydraulic brake pressure so the tire can keep generating useful longitudinal and lateral force.

The important historical point is control, not merely shorter stopping distance. A locked tire can lose steering authority. A rolling tire near its useful slip range can still help the driver guide the vehicle while braking.

## Mechanism

ABS uses wheel-speed sensors, an electronic control unit, hydraulic valves, and a pump or pressure modulator. When the controller detects that a wheel is decelerating toward lock, it can reduce brake pressure at that wheel, hold pressure, and then reapply pressure. This cycle can repeat many times during a stop.

The control target is related to slip:

$$
\text{slip} = \frac{v_\text{vehicle} - v_\text{wheel}}{v_\text{vehicle}}
$$

At zero slip, the tire is freely rolling. At full lock, wheel circumferential speed is near zero while the vehicle still moves. ABS tries to avoid the unstable locked condition while respecting sensor noise, road friction changes, and driver brake demand.

## Historical Context

Anti-skid ideas predated modern electronics, but early mechanical controls struggled to react quickly and reliably enough for road vehicles. Bosch's historical account describes work from the late 1960s onward, with robust electronic control becoming the turning point.

The production marker most relevant to this archive is the 1978 Mercedes-Benz S-Class W116 with Bosch ABS. It shows how semiconductor electronics, wheel-speed sensing, hydraulic modulation, and luxury-vehicle cost tolerance combined before the system spread more broadly.

## Tradeoffs and Constraints

ABS can preserve steering authority during hard braking, but it does not create tire grip. Road surface, tire condition, load transfer, brake balance, and driver input still matter. On loose gravel, snow, or split-friction surfaces, braking behavior can feel different because the system prevents wheel lock that might otherwise build a wedge of loose material in front of the tire.

The system adds sensors, wiring, valves, diagnostics, hydraulic complexity, and failure-mode requirements. If ABS is disabled by a fault, the foundation brakes must still operate, but the anti-lock modulation function is lost.

## Representative Uses

ABS is most visible during emergency braking, wet-road braking, icy-road braking, and split-friction stops where left and right wheels experience different grip. It also became a building block for later chassis controls. Traction control and electronic stability control reuse wheel-speed information and brake-pressure modulation concepts, then add more sensors and control logic.

Motorcycle and e-bike ABS adaptations show that the mechanism can migrate beyond passenger cars, though two-wheel vehicle dynamics make calibration and intervention strategy different.

## Regulatory and Standards Context

ABS itself spread through a mix of manufacturer adoption, market expectation, and regulation in particular vehicle classes and regions. In light vehicles, its broader regulatory importance is tied to later systems: U.S. FMVSS No. 126 for electronic stability control describes individual wheel braking as part of ESC operation. In practice, modern ESC depends on ABS-family hardware and software foundations.

## Study Next

- [Electronic Stability Control](/technologies/electronic-stability-control/) for yaw-control intervention built on brake modulation.
- [Adaptive Cruise Control](/technologies/adaptive-cruise-control/) for driver assistance that may request acceleration or braking through vehicle control systems.
- [Engine Control Unit](/technologies/engine-control-unit/) for the broader role of electronic control in vehicle behavior.
