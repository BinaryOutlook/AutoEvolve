---
title: 'Differential'
summary: 'A driveline gear assembly that lets driven wheels rotate at different speeds while transmitting torque from the final drive.'
status: 'published'
lastReviewed: '2026-05-16'
sources: ['epa-automotive-trends-2025', 'britannica-differential-gear']
category: 'transmission-driveline'
eras: ['birth-of-practical-automobile', 'standardization-and-mass-production']
relatedTechnologies:
  [
    'manual-transmission',
    'automatic-transmission',
    'continuously-variable-transmission',
    'dual-clutch-transmission',
    'battery-electric-vehicle',
  ]
relatedVehicles: []
---

## Definition

A differential is a driveline gear assembly that transmits torque to two output shafts while allowing those shafts to rotate at different speeds. In a vehicle axle, that matters because the outside wheel travels a longer path than the inside wheel during a turn.

For a simple open differential, the carrier speed is related to the average wheel speed:

$$
\omega_\text{carrier} = \frac{\omega_\text{left} + \omega_\text{right}}{2}
$$

where \(\omega\) represents angular speed. This simplified relationship explains why one wheel can speed up while the other slows down in a corner.

## How It Works

The driveshaft or transaxle output turns a final-drive gearset. The differential carrier holds pinion gears that mesh with side gears connected to the axle shafts. When the vehicle travels straight with similar tire rolling radii, the internal pinion gears may rotate little relative to the carrier. In a turn, the pinions walk around the side gears, allowing different left and right wheel speeds.

The basic open differential equalizes torque across its two outputs. Limited-slip and locking designs add mechanisms that resist speed difference under selected conditions, but they still begin from the same problem: one torque input must serve two wheels that may need different speeds.

## Main Components

- **Ring and pinion or final-drive gear:** change torque direction and reduction ratio.
- **Carrier:** holds the internal differential gears.
- **Spider or pinion gears:** permit relative motion between side gears.
- **Side gears and axle shafts:** transfer torque to the wheels.
- **Bearings and housing:** maintain alignment and support loads.
- **Optional biasing devices:** clutches, helical gears, viscous couplings, or locking mechanisms in non-open designs.

## Why It Emerged

A rigid axle connecting two driven wheels would force both wheels to rotate at the same speed. That can cause tire scrub, steering resistance, and driveline stress during turns. The differential made driven axles practical for road vehicles by combining torque delivery with speed difference.

As vehicle layouts diversified, differentials appeared in live axles, transaxles, transfer cases, and electric-drive units. The location changed, but the kinematic need remained.

## Tradeoffs and Constraints

An open differential is mechanically predictable on high-grip surfaces, but it can route useful tractive effort through the wheel with less grip because both outputs receive similar torque. Limited-slip and locking differentials can improve traction management in some conditions, yet they add calibration, wear, noise, or handling tradeoffs.

Packaging also matters. A front-wheel-drive transaxle combines transmission, final drive, and differential in one housing. A rear-drive layout may separate the transmission from an axle-mounted differential. Electric drive units can integrate reduction gearing and differential hardware near the motor.

## Common Misconceptions

A differential is not a transmission, although both use gears and affect driveline speed and torque. The transmission changes the ratio between engine or motor and driveline output. The differential splits that output between wheels and manages speed difference across the axle.

## Study Next

- [Manual Transmission](/technologies/manual-transmission/) for ratio selection before the final drive.
- [Automatic Transmission](/technologies/automatic-transmission/) for automated ratio selection and launch coupling.
- [Battery Electric Vehicle](/technologies/battery-electric-vehicle/) for integrated electric drive units where reduction gear and differential packaging often change.
