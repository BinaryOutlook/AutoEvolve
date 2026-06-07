---
title: 'Lithium-Ion Battery'
summary: 'A rechargeable battery family that enabled modern electric-drive vehicles through relatively high energy density and power capability.'
status: 'published'
lastReviewed: '2026-05-16'
sources: ['doe-afdc-bev', 'doe-afdc-electric-batteries', 'doe-vto-batteries']
category: 'fuel-energy'
eras: ['battery-electric-vehicles', 'plug-in-hybrids']
relatedTechnologies:
  ['battery-electric-vehicle', 'battery-management-system', 'ev-charging']
relatedVehicles: ['nissan-leaf', 'chevrolet-volt']
---

## Definition

Lithium-ion batteries store and release electrical energy through movement of lithium ions between electrodes. Automotive packs combine many cells into modules and packs with monitoring, protection, and thermal systems.

In vehicle use, "lithium-ion" is a family, not a single chemistry. Different cathode, anode, electrolyte, separator, cell-format, and pack-design choices change energy density, cost, charging behavior, durability, material demand, and thermal behavior.

## Engineering Role

Battery design affects range, charging speed, safety, cost, mass, and durability. Chemistry, cell format, cooling method, and pack structure all shape vehicle design.

A vehicle battery must satisfy several competing requirements:

- store enough usable energy for the intended driving range
- deliver power for acceleration, hills, heating, cooling, and accessory loads
- accept charging power without exceeding cell limits
- stay within temperature and voltage limits
- survive vibration, crash loads, aging, and repeated cycling
- remain economically manufacturable and serviceable

The energy relationship can be introduced simply:

$$
E_\text{pack} \approx N_\text{cells} \times E_\text{cell} \times \eta_\text{usable}
$$

where the usable fraction depends on protection margins, temperature, age, and pack-management strategy. More nominal energy is not automatically better if it adds too much mass, cost, charging time, or thermal burden.

## Pack Integration

Automotive lithium-ion cells do not operate alone. They are connected into modules or structural pack arrangements, monitored by a battery management system, protected by contactors and fuses, cooled or heated by thermal systems, and integrated into crash structures.

This is why battery articles must connect to vehicle architecture. A battery pack affects floor height, center of gravity, body stiffness, repair strategy, underbody protection, cabin heating, charging route, and electrical isolation.

## Chemistry and Operating Limits

Automotive pack design is shaped by voltage windows, current limits, cell temperature, and cycle history. Charging too quickly at low temperature can create durability and safety concerns. High state of charge can increase stress for some chemistries. High discharge current can heat cells, cables, bus bars, contactors, and cooling plates. The practical pack is therefore smaller than the theoretical chemistry: engineers reserve margins so cells are not routinely pushed to damaging extremes.

Cell format also matters. Cylindrical, pouch, and prismatic cells package current paths, cooling surfaces, swelling behavior, and crash protection differently. The archive should avoid treating a nominal chemistry label as a complete description of the battery system. The cited DOE sources support a broad battery-technology and component overview, but not a claim that one cell format or chemistry is categorically preferable.

## Historical Role

Lithium-ion cells made modern BEVs and PHEVs more practical than earlier battery technologies for many passenger-vehicle uses, though infrastructure and cost remained major constraints. DOE battery sources are useful because they place lithium-ion alongside nickel-metal hydride, lead-acid, recycling, second-use, and research priorities rather than treating one chemistry as the entire story.

The chemistry family helped enable vehicles such as the Nissan Leaf, Chevrolet Volt, Tesla Model S, Hyundai IONIQ 5, and BYD Atto 3 / Yuan Plus, each with different pack, platform, and market assumptions.

## Neutral Reading

This page should not imply that lithium-ion batteries are impact-free or technically final. They enabled a major shift in electric-drive vehicles, but they also introduced supply-chain, recycling, fire-safety, cold-weather, degradation, cost, and infrastructure questions. The neutral lesson is that battery progress changes the feasible vehicle architecture while creating new engineering and policy constraints.
