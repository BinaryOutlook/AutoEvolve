---
title: 'Controller Area Network'
summary: 'A robust in-vehicle communication bus that lets electronic control units exchange short, prioritized messages over shared wiring.'
status: 'published'
lastReviewed: '2026-05-16'
sources:
  [
    'bosch-can-history',
    'can-cia-can-history',
    'iso-11898-1-2024',
    'nhtsa-cybersecurity-practices',
  ]
category: 'software-diagnostics'
eras: ['emissions-and-electronic-control', 'software-defined-connected-vehicles']
relatedTechnologies:
  [
    'engine-control-unit',
    'anti-lock-braking-system',
    'electronic-stability-control',
    'adaptive-cruise-control',
    'battery-management-system',
  ]
relatedVehicles: []
---

## Definition

Controller Area Network, usually shortened to CAN, is an in-vehicle communication bus designed so electronic control units can exchange messages over shared wiring. Instead of giving every sensor and actuator a dedicated point-to-point wire to every controller that needs it, CAN lets multiple nodes communicate on a common bus with message arbitration and error handling.

CAN is one reason modern vehicles could add more electronic functions without letting wiring complexity grow without limit.

## Mechanism

A CAN network carries frames, not long file-like streams. Each message has an identifier that helps determine priority and meaning. When multiple nodes attempt to transmit, arbitration lets the highest-priority message proceed without destroying the message on the bus. Receiving nodes decide whether the message identifier matters to them.

A simplified control-network model is:

```text
sensor or ECU -> CAN transceiver -> shared bus -> receiving ECUs
```

The value of the network is not only fewer wires. It gives braking, powertrain, body, diagnostic, and battery systems a structured way to share state. For example, wheel-speed messages can matter to ABS, ESC, transmission control, all-wheel-drive control, and diagnostics.

## Historical Context

Bosch describes CAN as a response to the growing number of electronic control units, sensors, motors, and actuators in vehicles. Bosch researchers filed an initial patent in 1985, and CAN was introduced publicly in the mid-1980s. CAN in Automation records the 1986 SAE congress introduction as a key milestone.

The timing matters. Emissions controls, anti-lock brakes, electronically controlled transmissions, airbags, body electronics, and later driver assistance all required controllers to cooperate. CAN became part of the hidden infrastructure that made vehicle electronics scalable.

## Tradeoffs and Constraints

CAN is robust and efficient for short control messages, but it is not a universal answer for every modern data need. Camera streams, lidar data, high-resolution maps, and infotainment traffic can require higher-bandwidth networks such as Automotive Ethernet. Many vehicles therefore use several networks bridged by gateways.

Security is another constraint. Classic in-vehicle CAN was designed for reliable control communication, not for a world where vehicles might be connected to telematics, phones, cloud services, repair tools, and over-the-air update paths. Network segmentation, gateways, authentication, diagnostics access control, and cybersecurity processes are now part of vehicle architecture.

## Representative Uses

CAN is used in powertrain control, braking systems, body electronics, climate control, diagnostic communication, steering-angle sharing, battery management, and many vehicle-status messages. A technician using diagnostics is often reading data that controllers publish or make available through networked services.

Electric vehicles continue to use CAN alongside newer networks because battery packs, chargers, inverters, thermal systems, and body controllers still need reliable low-latency status messages.

## Regulatory and Standards Context

ISO 11898 standardizes the controller area network data link layer and physical coding sublayer. That standards context keeps CAN from being only a proprietary supplier design and gives manufacturers, toolmakers, and component suppliers a common technical reference.

Safety and cybersecurity guidance now treats in-vehicle networks as part of the safety-critical environment. NHTSA's cybersecurity practices emphasize risk-based protection for safety-critical vehicle control systems, which includes the networks that connect those systems.

## Study Next

- [Engine Control Unit](/technologies/engine-control-unit/) for a controller that depends on sensor and actuator communication.
- [Electronic Stability Control](/technologies/electronic-stability-control/) for networked chassis control.
- [Battery Management System](/technologies/battery-management-system/) for electric-drive control messages and pack limits.
