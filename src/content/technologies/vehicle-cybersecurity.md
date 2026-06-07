---
title: 'Vehicle Cybersecurity'
summary: 'The risk-management discipline for protecting connected, software-controlled vehicle functions across design, production, operation, and update workflows.'
status: 'source-review'
lastReviewed: '2026-06-07'
sources:
  - 'nhtsa-cybersecurity-practices'
  - 'unece-cyber-security-regulation'
  - 'unece-software-update-regulation'
  - 'iso-15118-1-2019'
category: 'software-diagnostics'
eras:
  - 'software-defined-connected-vehicles'
relatedTechnologies:
  - 'over-the-air-software-updates'
  - 'controller-area-network'
  - 'zonal-electrical-architecture'
  - 'charging-communication-protocols'
  - 'autonomous-driving-system-stack'
relatedVehicles: []
---

## Definition

Vehicle cybersecurity is the discipline of identifying, reducing, monitoring,
and responding to risks that could affect vehicle software, networks, data,
diagnostics, updates, charging, connected services, or safety-relevant control
systems.

It is not a single firewall or encrypted radio link. It is a lifecycle process
that includes architecture, suppliers, software updates, incident response,
service tools, and post-production monitoring.

## Attack Surfaces

Modern vehicles can include telematics, Bluetooth, Wi-Fi, cellular modems,
diagnostic ports, mobile apps, cloud services, charging communication, roadside
interfaces, infotainment systems, and multiple internal networks. Not every
interface has equal risk, but each creates a path that must be understood.

The core engineering question is:

$$
\text{Risk} = \text{likelihood} \times \text{impact}
$$

For vehicles, impact can include safety, privacy, theft, service disruption,
regulatory compliance, or loss of update integrity.

## Regulatory And Technical Context

NHTSA guidance frames cybersecurity as risk-based and safety-aware. UNECE
Regulation No. 155 adds a management-system view: cybersecurity has to be
handled through processes across the vehicle lifecycle, not only through final
product testing.

Charging and software updates make the boundary more visible. ISO 15118
includes communication use cases involving identification, payment,
cybersecurity, load management, and vehicle-to-grid interaction. UNECE
Regulation No. 156 treats software update management as a parallel lifecycle
topic.

## Neutral Framing

Connected vehicles are neither automatically unsafe nor automatically secure.
The archive should describe what the attack surface is, what mitigations exist,
and what evidence supports a claim. It should avoid sensational language unless
the source is a regulator, court record, or technical paper describing a
specific event.

## Evidence Boundary

The cited regulatory and technical sources support process, lifecycle, and
interface framing. They do not prove that any individual vehicle is secure or
insecure.

## Study Next

- [Over-the-Air Software Updates](/technologies/over-the-air-software-updates/)
  for update-channel controls.
- [Controller Area Network](/technologies/controller-area-network/) for older
  in-vehicle bus assumptions.
- [Charging Communication Protocols](/technologies/charging-communication-protocols/)
  for plug-in vehicle communication boundaries.
