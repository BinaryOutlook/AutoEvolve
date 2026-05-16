---
title: 'Combined Charging System'
summary: 'A plug-in vehicle charging architecture that combines AC charging and DC fast charging through a common inlet family and standardized communication.'
status: 'published'
lastReviewed: '2026-05-16'
sources:
  [
    'charin-ccs-technology',
    'charin-ccs-specification',
    'doe-afdc-electricity-stations',
    'iso-15118-1-2019',
    'dot-fhwa-nevi-standards-final-rule-2023',
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
    'ev-charging',
    'dc-fast-charging',
    'onboard-charger',
    'battery-electric-vehicle',
    'vehicle-to-grid',
  ]
relatedVehicles: ['hyundai-ioniq-5']
---

## Definition

The Combined Charging System, or CCS, is a charging architecture for plug-in vehicles that combines AC charging and DC fast charging within a related vehicle inlet and communication framework. In the North American form, the CCS connector is often described as the SAE J1772 combo connector because it extends the AC charging inlet with additional DC pins.

CCS is not only a plug shape. It includes safety checks, low-level signaling, high-level communication, and references to several standards that allow a vehicle and charger to negotiate energy transfer.

## Mechanism

A CCS session begins with a physical connection and proximity/control signaling. For AC charging, the vehicle's onboard charger converts AC to battery DC. For DC charging, offboard power electronics supply direct current through the larger DC contacts while the vehicle supervises battery limits.

The combined inlet expresses the central idea:

```text
shared vehicle inlet
  -> AC pins for Level 1 and Level 2 charging
  -> added DC pins for high-power DC charging
  -> communication and safety signaling across the session
```

High-level communication matters because fast charging is a controlled power-transfer process, not a simple live cable. The station needs to know whether the vehicle is ready, what voltage and current are allowed, whether contactors can close, and how the request changes as the battery warms, cools, fills, or detects a fault.

## Historical Context

CCS emerged as plug-in vehicles moved from early low-volume experimentation toward broader public charging networks. Combining AC and DC capability in one inlet reduced the need for separate charge ports and helped make one vehicle-side architecture serve home, workplace, destination, and corridor charging.

Its history is also a standards story. Automakers, suppliers, charging-equipment companies, and standards bodies needed common definitions for connectors, communication, safety behavior, and interoperability testing. That work was necessary because a charging ecosystem fails if vehicles and stations can physically connect but cannot communicate reliably.

## Tradeoffs and Constraints

The CCS approach simplifies vehicle-side port count, but it can make connectors and cables larger than AC-only hardware. High current creates heat, so cable design, contact resistance, liquid cooling in some charging equipment, and temperature monitoring become practical constraints.

Interoperability is another tradeoff. A common standard reduces fragmentation, but real deployments still depend on software versions, payment systems, network uptime, charger maintenance, and vehicle-specific charging behavior. CCS therefore addresses the interface; it does not by itself guarantee a flawless charging experience.

## Representative Uses

CCS has been used for AC charging, public DC fast charging, highway-corridor charging, fleet charging, and high-power charging hubs. It appears on many battery-electric vehicles and some plug-in hybrids, though connector use varies by market and model year.

The system is also a foundation for newer services such as Plug & Charge and some bidirectional-charging workflows, where identification, authorization, cybersecurity, and power-flow direction become more complex than a simple charge request.

## Regulatory and Standards Context

CharIN presents CCS as an implementation framework drawing on international standards. ISO 15118 is important to the communication side because it defines vehicle-to-grid communication use cases for high-level communication between the electric vehicle communication controller and the supply-equipment communication controller.

In the United States, the NEVI final rule tied federally funded public charging projects to minimum standards and interoperability expectations. That regulatory context gave CCS a policy role beyond the connector itself, especially for early corridor buildouts under federal funding.

## Study Next

- [DC Fast Charging](/technologies/dc-fast-charging/) for high-power offboard charging behavior.
- [Onboard Charger](/technologies/onboard-charger/) for the vehicle-side AC conversion path.
- [Vehicle-to-Grid](/technologies/vehicle-to-grid/) for bidirectional use cases that rely on richer charging communication.
