---
title: 'Heat Pump'
summary: 'A reversible thermal system that moves heat into or out of the cabin or battery loop, reducing some heating-energy demand in electrified vehicles.'
status: 'published'
lastReviewed: '2026-05-16'
sources:
  [
    'nrel-edv-thermal-management',
    'doe-bev-cold-ambient-performance-2024',
    'nrel-ev-heat-pump-frost-2021',
  ]
category: 'electric-drive'
eras: ['plug-in-hybrids', 'battery-electric-vehicles']
relatedTechnologies:
  [
    'thermal-management-system',
    'battery-electric-vehicle',
    'lithium-ion-battery',
    'battery-management-system',
  ]
relatedVehicles: ['nissan-leaf', 'hyundai-ioniq-5']
---

## Definition

An automotive heat pump is a reversible refrigerant system that moves heat rather than only creating it through electrical resistance. In an electric vehicle, it can warm the cabin, condition the battery, or exchange heat among vehicle loops depending on the design.

## Mechanism

A heat pump uses compression, condensation, expansion, and evaporation. In heating mode, the refrigerant absorbs heat from outside air or another vehicle loop, the compressor raises its pressure and temperature, and a heat exchanger releases that heat into the cabin or coolant circuit. In cooling mode, the flow path can resemble conventional air conditioning.

The appeal is captured by the coefficient of performance:

$$
\text{COP} = \frac{Q_\text{delivered}}{W_\text{input}}
$$

A COP above 1 means the system delivers more heat than the electrical work supplied to the compressor because it is moving heat from another source. The exact COP depends on temperature difference, humidity, frost, compressor speed, and control strategy.

## Historical Context

Combustion vehicles could use engine waste heat for cabin heating, so resistive supplemental heaters were less central. Battery-electric vehicles made cabin heating a direct traction-energy issue. A resistive heater is simple and predictable, but every kilowatt used for heat comes from the battery. Heat pumps therefore became attractive as automakers looked for ways to preserve cold-weather range and comfort.

Heat pumps are not limited to BEVs, but their value becomes more visible when there is little waste heat available.

## Tradeoffs

A heat pump can reduce heating energy in mild or moderate cold, especially compared with pure resistive heating. It adds compressor, valve, sensor, heat-exchanger, refrigerant, and software complexity. Performance drops as outside temperature falls and the temperature lift grows. Frost can form on outdoor heat exchangers, requiring defrost strategies that consume energy and interrupt heating.

Some vehicles still use resistive heaters as backup or for rapid warmup. The practical design is often a hybrid thermal strategy rather than a heat pump alone.

The system also competes for heat sources. Waste heat from motors, inverters, onboard chargers, batteries, or cabin exhaust air may be useful, but those sources are not always available when the driver wants cabin heat. Battery preconditioning can also conflict with immediate cabin comfort or charging preparation. Valves, pumps, and controls decide which loop receives priority, so the user-visible result depends on software as much as refrigerant hardware.

## Representative Uses

Representative uses include BEV cabin heating, battery preconditioning, integrated thermal systems that move waste heat from motors or power electronics, and plug-in hybrids that heat the cabin while the engine remains off. In vehicles with fast charging, heat-pump hardware may be part of a larger thermal network that prepares the battery for charging and then removes heat during the session.

## Common Misconceptions

A heat pump does not create free heat. It moves heat using compressor work, and its advantage varies with ambient conditions. It also does not solve all winter range loss because batteries, tires, air density, road conditions, and driver behavior can change energy use at the same time.

## Evidence Boundary

The cited NREL and DOE sources support thermal-management and cold-ambient context. They do not establish a single cold-weather range effect for every EV, because vehicle mass, cabin size, battery chemistry, route, speed, humidity, and control strategy all matter.

## Study Next

- [Thermal Management System](/technologies/thermal-management-system/) for the full vehicle heat network.
- [Battery Electric Vehicle](/technologies/battery-electric-vehicle/) for why cabin heat affects usable range.
- [Battery Management System](/technologies/battery-management-system/) for temperature limits and preconditioning logic.
