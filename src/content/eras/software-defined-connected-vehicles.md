---
title: 'Software-Defined and Connected Vehicles'
summary: 'Domain controllers, OTA updates, driver assistance, high-voltage platforms, and charging networks made software a primary vehicle system.'
status: 'published'
lastReviewed: '2026-05-16'
sources:
  [
    'nhtsa-safety-tech',
    'unece-software-update-regulation',
    'nhtsa-cybersecurity-practices',
    'tesla-software-updates',
    'hyundai-ioniq5-egmp',
    'mercedes-drive-pilot',
  ]
dateRange: '2020s onward'
order: 100
keyThemes:
  [
    'domain controllers',
    'over-the-air updates',
    'ADAS',
    '800 V architectures',
    'bidirectional charging',
  ]
relatedTechnologies:
  ['battery-electric-vehicle', 'ev-charging', 'engine-control-unit']
relatedVehicles: []
---

## Historical Context

Modern vehicles increasingly depend on software architecture, networks, sensors, and update systems. Electrification accelerated this shift because high-voltage powertrains already require sophisticated power electronics and control software.

The phrase "software-defined vehicle" can sound abstract, but the change is practical. More vehicle behavior now depends on software that can be updated, validated, secured, and sometimes changed after sale. Driver assistance, charging, battery preconditioning, route planning, diagnostics, infotainment, thermal control, and even braking feel may involve multiple controllers exchanging data.

This era also changed the maintenance question. A mechanical repair once centered on parts, fluids, adjustments, and replacement procedures. Modern maintenance can involve software versions, calibration files, cybersecurity protections, sensor alignment, cloud connectivity, and update policies.

## Representative Cars

**Tesla Model S and later Tesla vehicles.** Tesla's over-the-air update model made remote vehicle software changes visible to a broad audience. The example is useful because it shows the vehicle as a maintained software product, not because every manufacturer follows the same implementation.

**Hyundai IONIQ 5 and E-GMP vehicles.** Dedicated high-voltage EV platforms show how charging speed, vehicle-to-load functions, battery placement, and platform electronics can shape the vehicle around electrical architecture rather than simply replacing an engine with a motor.

**Mercedes-Benz vehicles with DRIVE PILOT availability.** Conditionally automated driving features show why sensors, maps, driver monitoring, legal operating domains, and validation processes are now part of vehicle technology history.

## Prominent Design Choices

Manufacturers are moving from many isolated electronic control units toward domain or zonal architectures. That change can reduce duplicated wiring and make software integration easier, but it also concentrates responsibility in fewer controllers. Ethernet, high-speed gateways, and centralized compute platforms are becoming more important than the old mental model of separate boxes doing separate jobs.

User interfaces are also changing. Large displays, app-style menus, voice control, phone keys, remote diagnostics, and connected services can make a vehicle feel less like a fixed appliance. Those choices create new design obligations: readable controls, long-term support, privacy protections, update transparency, and fallback behavior when connectivity fails.

## Engineering Changes

Vehicle functions that were once isolated across many control units are moving toward more centralized domain or zonal architectures. Driver assistance, charging, thermal control, diagnostics, and infotainment now interact through software-defined systems.

The engineering boundary now looks less like a single drivetrain and more like an operating environment:

$$
\text{Sensors}
\rightarrow
\text{Networks}
\rightarrow
\text{Compute}
\rightarrow
\text{Actuators}
\rightarrow
\text{Updates and Validation}
$$

The last term matters. If software can change after production, then validation is not a one-time factory event. Update management, cybersecurity, regression testing, driver communication, and legal responsibility become part of the technical system.

## Why This Era Connects The Archive

This era loops back through the entire archive. Combustion vehicles introduced control systems through emissions needs. Hybrids made energy management central. BEVs made high-voltage electronics unavoidable. Connected vehicles bring those threads together with software release management, cybersecurity, automated driving features, and charging-network coordination.

## What Remains Unresolved

Cybersecurity, long-term software support, repairability, data governance, update ownership, and validation of driver assistance systems are active engineering and policy questions. Pages in this era should be reviewed frequently because the field changes quickly and because software can alter vehicle behavior after the original production date.
