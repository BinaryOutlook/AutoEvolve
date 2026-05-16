---
title: 'Onboard Charger'
summary: 'Vehicle-mounted power electronics that convert incoming AC electricity into controlled DC power for a plug-in traction battery.'
status: 'published'
lastReviewed: '2026-05-16'
sources: ['doe-afdc-bev', 'doe-afdc-phev', 'doe-afdc-electricity-stations']
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
    'battery-electric-vehicle',
    'plug-in-hybrid-electric-vehicle',
    'battery-management-system',
    'dc-fast-charging',
  ]
relatedVehicles: ['chevrolet-volt', 'nissan-leaf']
---

## Definition

An onboard charger is the vehicle-mounted power-electronics unit that handles AC charging. It takes alternating current supplied through the charge port and converts it into direct current suitable for the traction battery. It also communicates with charging equipment and monitors battery-related limits during the charging session.

The name can be confusing because the wall box or public pedestal is often called a charger in everyday speech. In AC charging, much of the actual conversion from AC to battery DC happens inside the vehicle. In DC fast charging, that conversion is performed by offboard equipment, so the onboard charger is not the main power path.

## Mechanism

A simplified AC charging path is:

```text
AC supply -> EVSE and cable -> charge port -> onboard charger -> battery pack
```

The onboard charger rectifies AC into DC, regulates output, checks isolation and fault conditions, and follows limits from the battery management system. The requested current cannot exceed what the supply, cable, connector, onboard charger, and battery can safely support.

The power limit can be approximated as:

$$
P_\text{AC} \approx V_\text{AC} I_\text{AC} \eta
$$

where $\eta$ represents conversion efficiency and control losses. Real charging behavior also depends on phase count, circuit rating, charger design, battery temperature, and state of charge.

## Historical Context

Plug-in hybrids and battery-electric vehicles made the onboard charger a normal production-vehicle component. Early electric vehicles also needed charging equipment, but the modern unit sits in a more software-mediated system: it must coordinate with the battery management system, charge-port locking, thermal management, diagnostics, and external EV supply equipment.

The onboard charger helped make low-power daily charging practical because it allowed vehicles to use common AC electrical service. That mattered for home, workplace, and long-dwell parking, where the vehicle can spend hours connected without requiring a high-power DC station.

## Tradeoffs and Constraints

Onboard chargers are constrained by cost, mass, packaging, heat, and electrical service. A higher-power AC charger can shorten charging time, but it requires larger components, cooling capacity, and an upstream circuit that can actually supply the current. Carrying too much onboard charging hardware can be inefficient if many owners mainly use lower-power charging.

Because the onboard charger lives in the vehicle, durability and safety standards are demanding. It must tolerate vibration, temperature swings, electrical transients, moisture exposure near the charge port, and long unattended operation. It must also fail safely when communication, grounding, or isolation checks do not pass.

## Representative Uses

Onboard chargers are central to overnight home charging, workplace charging, fleet return-to-base charging, and destination charging where dwell time is measured in hours. Plug-in hybrids often rely heavily on onboard AC charging because their batteries are smaller and can be replenished without high-power infrastructure.

Battery-electric vehicles use onboard AC charging for routine energy replacement and reserve DC fast charging for use cases where time matters more than equipment simplicity.

## Regulatory and Standards Context

The onboard charger sits behind connector, communication, and electrical-safety rules. The public charging equipment must tell the vehicle what current is available, while the vehicle must decide what it can accept. The charging station may be simple compared with a DC fast charger, but the system still depends on standardized signaling, protective equipment, ground-fault behavior, and diagnostics.

This split between offboard AC equipment and onboard conversion is one reason charging power ratings are not interchangeable. A Level 2 station rated above a vehicle's onboard charger capacity will not force the vehicle to charge faster than its internal power electronics and battery limits allow.

## Study Next

- [EV Charging](/technologies/ev-charging/) for charging levels and infrastructure context.
- [DC Fast Charging](/technologies/dc-fast-charging/) for the offboard high-power path.
- [Plug-In Hybrid Electric Vehicle](/technologies/plug-in-hybrid-electric-vehicle/) for hybrid vehicles that add external charging.
