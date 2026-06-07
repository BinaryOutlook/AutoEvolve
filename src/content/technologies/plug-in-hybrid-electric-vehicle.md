---
title: 'Plug-In Hybrid Electric Vehicle'
summary: 'A hybrid vehicle with a traction battery that can be charged from an external electrical source.'
status: 'published'
lastReviewed: '2026-05-16'
sources:
  [
    'doe-afdc-phev',
    'doe-afdc-hybrid',
    'doe-afdc-bev',
    'doe-afdc-electric-batteries',
    'doe-afdc-electricity-stations',
    'doe-chevrolet-volt-operation-data',
  ]
category: 'electric-drive'
eras: ['plug-in-hybrids']
relatedTechnologies:
  ['hybrid-electric-vehicle', 'ev-charging', 'battery-management-system']
relatedVehicles: ['chevrolet-volt']
---

## Definition

A plug-in hybrid electric vehicle, or PHEV, combines hybrid propulsion with external charging. It usually has a larger battery than a conventional hybrid and can operate for some distance using grid electricity.

## Architecture

A PHEV combines two energy pathways: electricity stored in a traction battery and liquid fuel carried on board. The electric path includes a charge port, onboard charger, battery pack, battery management system, inverter, and one or more electric machines. The fuel path includes a fuel tank, combustion engine, exhaust system, and often an emissions-control system. The transmission or power-split device determines how engine torque and electric torque reach the wheels.

This makes the PHEV more complex than either a simple gasoline vehicle or a basic BEV. Its value comes from flexibility, but that flexibility requires careful control software and honest reporting of how the vehicle is actually used.

## Operating Modes

PHEVs may run in charge-depleting mode, where stored grid energy is used, and charge-sustaining mode, where the vehicle behaves more like a conventional hybrid.

Charge-depleting mode does not always mean the engine is never used. Depending on design, the engine may start for high power demand, low temperature, battery protection, catalyst heating, cabin heating, or other system needs. Charge-sustaining mode does not mean the vehicle has stopped using electricity; it means the control system is trying to maintain battery state of charge while operating as a hybrid.

The operating question is:

$$
\text{Trip Energy} =
\text{grid electricity used} + \text{liquid fuel used}
$$

The balance between those terms depends on battery size, charging access, trip length, weather, speed, driver behavior, accessory load, and calibration.

## Components To Study

Important PHEV components include the traction battery, onboard charger, battery management system, inverter, DC/DC converter, electric motor-generator, engine, transmission or power-split mechanism, fuel tank, exhaust aftertreatment, thermal-management hardware, and control software. The charge port and charging equipment are part of the practical system because they determine how often the vehicle can start a trip with useful electric energy.

The Chevrolet Volt is a useful historical example because published operation data and DOE materials show the importance of distinguishing electric operation, gasoline-supported operation, and driver charging behavior. The point is not to rank the Volt; it is to make the PHEV category concrete.

## Strengths And Constraints

PHEVs can reduce fuel use for drivers who charge regularly and often travel within the electric range. They can also avoid some range-anxiety and infrastructure constraints by retaining a liquid-fuel pathway. The same vehicle can perform poorly as an electric-drive strategy if it is rarely charged, if the battery is small relative to trip length, if the engine starts frequently in nominal electric mode, or if added mass reduces efficiency.

## Historical Role

PHEVs acted as transitional electric-drive vehicles by reducing some fuel use while retaining liquid-fuel range. They also complicated public discussion because "electric range," "hybrid operation," "engine start," and "real-world charging behavior" can differ sharply between models and drivers.

## Neutral Reading

A PHEV is not automatically a compromise done well or a compromise done badly. It is a dual-system vehicle whose environmental and user value depends on use pattern, charging availability, battery durability, electric-mode capability, combustion efficiency, and calibration transparency. Neutral coverage should keep those variables visible.
