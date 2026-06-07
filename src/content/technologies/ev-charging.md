---
title: 'EV Charging'
summary: 'The hardware, software, standards, and infrastructure used to transfer electrical energy into plug-in vehicle batteries.'
status: 'published'
lastReviewed: '2026-05-16'
sources:
  [
    'doe-afdc-bev',
    'doe-afdc-phev',
    'doe-afdc-electricity-stations',
    'charin-ccs-technology',
    'charin-ccs-specification',
    'dot-fhwa-nevi-standards-final-rule-2023',
    'nrel-electric-vehicle-grid-integration',
    'iso-15118-1-2019',
  ]
category: 'electric-drive'
eras:
  [
    'plug-in-hybrids',
    'battery-electric-vehicles',
    'software-defined-connected-vehicles',
  ]
relatedTechnologies:
  [
    'battery-electric-vehicle',
    'plug-in-hybrid-electric-vehicle',
    'battery-management-system',
    'charging-communication-protocols',
    'dc-fast-charging',
    'vehicle-to-grid',
    'battery-swapping',
  ]
relatedVehicles: ['chevrolet-volt', 'nissan-leaf']
---

## Definition

EV charging transfers electrical energy from external supply equipment to a vehicle battery. AC charging uses the vehicle's onboard charger, while DC fast charging uses offboard power electronics to supply direct current to the pack.

## System Boundaries

EV charging is not one component. It is a chain that includes the electrical grid, service connection, charging station, connector, communication protocol, vehicle inlet, onboard charger or DC charging interface, battery management system, thermal system, and the battery cells themselves. A weakness anywhere in the chain can reduce speed, reliability, accessibility, or safety.

For study purposes, the basic power relationship is:

$$
P = V \times I
$$

where \(P\) is charging power, \(V\) is voltage, and \(I\) is current. Real charging behavior is more complicated because stations and vehicles impose voltage limits, current limits, temperature limits, connector limits, pack-protection limits, and state-of-charge limits.

## Engineering Role

Charging speed depends on supply power, vehicle voltage, battery temperature, state of charge, connector limits, and battery management strategy. A nominal charger rating does not guarantee that the vehicle will accept that power throughout the session.

AC charging generally sends alternating current to the vehicle, where the onboard charger converts it to DC for the battery. This makes the vehicle's onboard charger rating a key limit. DC fast charging performs much of that conversion outside the vehicle and supplies controlled DC power to the pack, which can enable higher power but also increases demands on thermal management, connector design, communication, and station infrastructure.

Charging curves usually taper as the pack approaches higher state of charge. That taper is not just inconvenience; it is part of battery protection. The vehicle may slow charging to manage cell voltage, heat, aging risk, cell balancing, or limits imposed by the charging station.

## Interfaces And Communication

The connector is only the visible part of the interface. Charging also requires control signaling and, increasingly, higher-level communication. CCS materials describe the combined use of AC and DC charging paths, while ISO 15118 frames communication use cases such as identification, payment, cybersecurity, load management, and vehicle-to-grid interaction.

Public infrastructure adds another layer. Standards and funding rules can shape availability, uptime expectations, data reporting, connector support, payment access, and network communication. The National Electric Vehicle Infrastructure final rule is important historically because it treats charging as transportation infrastructure rather than only private accessory equipment.

## Grid And Site Constraints

Fast charging also belongs to the electricity system. A site may need transformer upgrades, demand management, battery buffering, careful power sharing across stalls, or utility coordination. NREL's grid-integration framing is useful here: charging is a vehicle problem, a building problem, and a grid problem at once.

Those constraints explain why charging access differs from gasoline refueling in more than time. Electricity supply can be distributed widely, but high-power, reliable, public charging requires site planning, interoperability, maintenance, user communication, and grid capacity.

## Historical Role

Charging infrastructure became part of vehicle history because electric mobility depends on both the vehicle and the energy network around it. Modern BEVs and PHEVs cannot be understood only through motor or battery specifications; they also depend on where energy can be obtained, how quickly it can be transferred, and whether the interface works across brands, sites, and regions.

## Neutral Reading

EV charging should not be described as either solved or hopeless. It is a maturing infrastructure system with strong technical potential and visible practical constraints. A neutral account separates home charging, workplace charging, corridor fast charging, fleet charging, and bidirectional or grid-managed use cases instead of treating all charging as one experience.
