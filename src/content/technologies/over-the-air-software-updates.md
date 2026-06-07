---
title: 'Over-the-Air Software Updates'
summary: 'Remote vehicle software update workflows that deliver, verify, install, and audit changed software without a conventional service visit.'
status: 'source-review'
lastReviewed: '2026-06-07'
sources:
  - 'unece-software-update-regulation'
  - 'nhtsa-cybersecurity-practices'
  - 'tesla-software-updates'
  - 'bosch-vehicle-computer'
category: 'software-diagnostics'
eras:
  - 'software-defined-connected-vehicles'
relatedTechnologies:
  - 'software-defined-vehicle-architecture'
  - 'vehicle-cybersecurity'
  - 'zonal-electrical-architecture'
  - 'controller-area-network'
  - 'on-board-diagnostics'
relatedVehicles:
  - 'tesla-model-s'
---

## Definition

An over-the-air software update changes vehicle software through a remote data
connection rather than through a conventional workshop-only reflash. The update
workflow can involve downloading, authenticity checks, compatibility checks,
installation scheduling, rollback behavior, diagnostics, and owner notification.

OTA does not make a vehicle purely digital. It changes how software reaches
embedded controllers that still operate physical brakes, motors, lighting,
charging hardware, thermal systems, and displays.

## Mechanism

A simplified update path is:

```text
release package -> vehicle download -> authenticity check -> install -> verify
```

For safety-relevant functions, the hard question is not only whether bits can be
delivered. It is whether the vehicle can prove the right software is installed
on the right hardware, under the right conditions, with a known fallback if the
process fails.

## Regulatory Role

UNECE Regulation No. 156 treats software updates and software update management
as regulated vehicle topics. This matters historically because updates moved
from convenience features toward safety, emissions, cybersecurity, and
compliance-sensitive vehicle behavior.

NHTSA cybersecurity guidance also frames updates as part of a broader security
process. Update channels can repair vulnerabilities, but they are themselves
attack surfaces if authentication, authorization, monitoring, or supplier
processes are weak.

## Tradeoffs

OTA can reduce service friction and support post-sale fixes, but it also adds
release-management obligations. A vehicle may need enough low-voltage battery
energy, stable connectivity, parked-state checks, user consent, diagnostic
preconditions, and rollback logic before installation.

## Evidence Boundary

Tesla is cited as a manufacturer example of connected update workflows. UNECE
and NHTSA support the regulatory and cybersecurity boundaries. This page does
not treat OTA capability as inherently good, bad, or equivalent across brands.

## Study Next

- [Vehicle Cybersecurity](/technologies/vehicle-cybersecurity/) for the update
  channel risk model.
- [Software-Defined Vehicle Architecture](/technologies/software-defined-vehicle-architecture/)
  for why centralized compute changes update scope.
- [On-Board Diagnostics](/technologies/on-board-diagnostics/) for the older
  service-facing software visibility layer.
