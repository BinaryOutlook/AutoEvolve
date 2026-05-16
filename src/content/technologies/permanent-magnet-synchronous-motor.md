---
title: 'Permanent-Magnet Synchronous Motor'
summary: 'An AC traction motor that uses rotor magnets and synchronized stator fields to produce compact, efficient electric-drive torque.'
status: 'published'
lastReviewed: '2026-05-16'
sources:
  [
    'doe-vto-electric-drive-systems',
    'doe-vto-electric-motors-rd',
    'doe-vto-power-electronics-rd',
  ]
category: 'electric-drive'
eras: ['hybridization', 'plug-in-hybrids', 'battery-electric-vehicles']
relatedTechnologies:
  [
    'power-inverter',
    'battery-electric-vehicle',
    'hybrid-electric-vehicle',
    'regenerative-braking',
    'axial-flux-motor',
  ]
relatedVehicles: ['nissan-leaf', 'chevrolet-volt', 'hyundai-ioniq-5']
---

## Definition

A permanent-magnet synchronous motor, or PMSM, is an AC electric machine whose rotor carries permanent magnets. The stator produces a rotating magnetic field, and the rotor follows that field in synchronism. Many automotive traction motors are interior permanent-magnet designs, with magnets embedded in the rotor rather than simply mounted on its surface.

## Mechanism

The inverter sends three-phase current through stator windings. That current creates a rotating magnetic field. The rotor magnets align with and chase the rotating field, producing torque. In an interior permanent-magnet motor, rotor geometry can add reluctance torque, so the motor may use both magnet torque and saliency.

A useful simplified torque idea is:

$$
T \propto \Phi I
$$

where $\Phi$ is magnetic flux and $I$ is stator current. Real motor control is more complex because current is split into direct-axis and quadrature-axis components, especially during high-speed flux weakening.

## Historical Context

Permanent-magnet machines became attractive as hybrid and electric vehicles needed compact motors with high efficiency over broad operating ranges. The architecture matched the packaging pressure of front-wheel-drive hybrid transaxles, dedicated EV drive units, and compact rear e-axles.

Their growth is tied to magnet materials. Rare-earth magnets can provide strong flux density in a small rotor, but cost, supply concentration, mining impacts, and temperature limits all shaped research into reduced-rare-earth, magnet-free, and alternative motor designs.

## Tradeoffs

PMSMs can offer high power density, strong efficiency, and good torque response. The tradeoffs are magnet cost, rare-earth supply exposure in many designs, demagnetization risk at high temperature or fault current, and control complexity at high speed. The rotor can also create back electromotive force when spinning, so the inverter and safety system must handle fault cases carefully.

Compared with an induction motor, a PMSM does not need rotor current to create its main magnetic field, which can reduce losses. However, the permanent field is always present, even when the vehicle is coasting or being towed.

## Representative Uses

Permanent-magnet synchronous motors are common in hybrids, plug-in hybrids, and battery-electric vehicles. They are often chosen where packaging volume is tight or where efficiency over everyday driving loads matters. Some vehicles combine motor types, using a PMSM on one axle and a different machine on another to balance cost, efficiency, and traction needs.

## Common Misconceptions

Permanent magnets do not make a motor run by themselves. They provide rotor magnetic flux; the inverter and stator current still supply controlled electromagnetic interaction. Nor are PMSMs automatically the right answer for every vehicle. Cost, supply chain, thermal design, acoustic behavior, and duty cycle can favor other machines.

## Study Next

- [Power Inverter](/technologies/power-inverter/) for the electronics that control motor current.
- [Induction Motor](/technologies/induction-motor/) for a magnet-free AC traction alternative.
- [Regenerative Braking](/technologies/regenerative-braking/) for generator-mode operation in electric drive.
