export type SystemFlowStep = {
  title: string;
  body: string;
  href?: string;
};

export type SystemFlow = {
  id: string;
  title: string;
  summary: string;
  steps: SystemFlowStep[];
};

const systemFlows: Record<string, SystemFlow> = {
  'adaptive-cruise-control': {
    id: 'adaptive-cruise-control',
    title: 'Adaptive cruise control decision loop',
    summary:
      'A production ACC system is best read as a sensing and request loop rather than as an independent driver.',
    steps: [
      {
        title: 'Sense traffic ahead',
        body: 'Radar, camera, or fused sensor inputs estimate range, relative speed, lane context, and whether a target vehicle is relevant.',
      },
      {
        title: 'Compare with set speed and gap',
        body: 'The controller compares the selected cruising speed and following interval with the measured closing behavior.',
      },
      {
        title: 'Request torque or braking',
        body: 'The system asks powertrain, regenerative braking, or service-brake controllers for a bounded response.',
        href: '/technologies/regenerative-braking/',
      },
      {
        title: 'Monitor driver authority',
        body: 'Steering, brake, accelerator, and fault signals can cancel or limit the automated request.',
      },
    ],
  },
  'battery-electric-vehicle': {
    id: 'battery-electric-vehicle',
    title: 'Battery-electric power path',
    summary:
      'A BEV routes stored electrical energy through managed high-voltage hardware, then can reverse part of the path during regenerative braking.',
    steps: [
      {
        title: 'Store energy in the traction battery',
        body: 'Cells, modules, pack structure, thermal controls, contactors, and the BMS define the usable energy window.',
        href: '/technologies/battery-management-system/',
      },
      {
        title: 'Convert DC to controlled AC',
        body: 'The inverter switches high-voltage DC into timed phases for the traction motor.',
        href: '/technologies/power-inverter/',
      },
      {
        title: 'Produce wheel torque',
        body: 'The electric machine converts electromagnetic force into shaft torque through reduction gearing or direct drive.',
      },
      {
        title: 'Recover energy when slowing',
        body: 'During suitable deceleration, the motor-generator and inverter send limited energy back toward the battery.',
        href: '/technologies/regenerative-braking/',
      },
    ],
  },
  'controller-area-network': {
    id: 'controller-area-network',
    title: 'CAN message path',
    summary:
      'CAN is a shared communication layer for short control messages, not a central computer by itself.',
    steps: [
      {
        title: 'A controller prepares a signal',
        body: 'An ECU packages a measurement, status, or request into a CAN frame with an identifier.',
        href: '/technologies/engine-control-unit/',
      },
      {
        title: 'Transceiver places it on the bus',
        body: 'Physical-layer hardware drives the differential bus while other nodes listen.',
      },
      {
        title: 'Arbitration resolves priority',
        body: 'When more than one node tries to speak, the identifier priority decides which message continues first.',
      },
      {
        title: 'Receiving ECUs act or ignore',
        body: 'Each controller filters messages, updates local logic, and may publish a follow-up status or diagnostic frame.',
        href: '/technologies/on-board-diagnostics/',
      },
    ],
  },
  'engine-control-unit': {
    id: 'engine-control-unit',
    title: 'ECU control cycle',
    summary:
      'An ECU is a repeated measurement, calculation, actuation, and diagnostic loop under changing operating conditions.',
    steps: [
      {
        title: 'Read sensor inputs',
        body: 'Air, temperature, crank position, oxygen, pedal, knock, and aftertreatment signals describe the current state.',
      },
      {
        title: 'Select calibrated commands',
        body: 'Software maps and control logic choose fuel, spark, throttle, boost, EGR, or dosing requests.',
      },
      {
        title: 'Drive actuators',
        body: 'Injector drivers, throttle motors, valves, relays, and communication outputs translate calculations into hardware behavior.',
      },
      {
        title: 'Check plausibility and report faults',
        body: 'Diagnostics compare expected and observed behavior, then store fault information or send network messages when needed.',
        href: '/technologies/on-board-diagnostics/',
      },
    ],
  },
  'hybrid-electric-vehicle': {
    id: 'hybrid-electric-vehicle',
    title: 'Hybrid energy-routing cycle',
    summary:
      'A hybrid coordinates combustion, electric drive, storage, and braking instead of relying on one one-way power path.',
    steps: [
      {
        title: 'Choose the energy source',
        body: 'Control software weighs driver demand, battery state, temperature, speed, and efficiency targets.',
      },
      {
        title: 'Blend engine and motor torque',
        body: 'The transmission or power-split device combines mechanical and electrical paths within the vehicle limits.',
      },
      {
        title: 'Buffer energy in the battery',
        body: 'The pack absorbs or supplies short bursts rather than behaving like a long-range BEV battery.',
        href: '/technologies/nickel-metal-hydride-battery/',
      },
      {
        title: 'Recover braking energy',
        body: 'Regeneration captures part of the kinetic energy that would otherwise become heat in friction brakes.',
        href: '/technologies/regenerative-braking/',
      },
    ],
  },
  'regenerative-braking': {
    id: 'regenerative-braking',
    title: 'Regenerative-braking stages',
    summary:
      'Regeneration is a controlled energy-recovery path with battery and stability limits, not a friction-brake replacement.',
    steps: [
      {
        title: 'Driver requests deceleration',
        body: 'Pedal position, one-pedal settings, stability logic, and speed establish the requested slowdown.',
      },
      {
        title: 'Motor acts as a generator',
        body: 'Vehicle motion turns the electric machine, producing electrical power through the inverter.',
        href: '/technologies/power-inverter/',
      },
      {
        title: 'Battery accepts limited current',
        body: 'The BMS limits charge power according to temperature, state of charge, cell limits, and fault state.',
        href: '/technologies/battery-management-system/',
      },
      {
        title: 'Friction brakes cover the remainder',
        body: 'Brake blending supplies deceleration when available regeneration is insufficient or inappropriate.',
      },
    ],
  },
  'charging-communication-protocols': {
    id: 'charging-communication-protocols',
    title: 'Charging-session negotiation',
    summary:
      'The charging plug is the visible part; the vehicle and station still have to negotiate a bounded energy transfer.',
    steps: [
      {
        title: 'Confirm connection state',
        body: 'The vehicle and supply equipment detect plug presence, proximity, cable capability, and basic safety conditions.',
        href: '/technologies/ev-charging/',
      },
      {
        title: 'Exchange limits and identity',
        body: 'Higher-level communication can carry vehicle limits, station capability, identification, authorization, and optional grid-use cases.',
      },
      {
        title: 'Transfer controlled power',
        body: 'The station follows the vehicle battery limits while contactors, temperature, voltage, and current are monitored.',
        href: '/technologies/battery-management-system/',
      },
      {
        title: 'Stop and verify',
        body: 'The session ends by tapering or stopping power, opening safe paths, and returning status to the user, network, or vehicle logs.',
      },
    ],
  },
  'over-the-air-software-updates': {
    id: 'over-the-air-software-updates',
    title: 'OTA update control path',
    summary:
      'A remote update is a release-management and vehicle-state problem, not just a wireless download.',
    steps: [
      {
        title: 'Publish a signed package',
        body: 'The release system prepares software with version, compatibility, authorization, and integrity metadata.',
      },
      {
        title: 'Download under vehicle limits',
        body: 'The vehicle receives the update while checking network, battery, storage, and parked-state conditions.',
      },
      {
        title: 'Install and verify',
        body: 'Target controllers are updated, then the vehicle checks software identity, diagnostics, and rollback or recovery state.',
        href: '/technologies/on-board-diagnostics/',
      },
      {
        title: 'Record lifecycle evidence',
        body: 'Regulated update workflows need traceability for what changed, when it changed, and whether the vehicle remains compliant.',
        href: '/technologies/vehicle-cybersecurity/',
      },
    ],
  },
  'battery-swapping': {
    id: 'battery-swapping',
    title: 'Battery-swap station sequence',
    summary:
      'Swapping moves charging time into station inventory, but it adds pack-compatibility, isolation, and verification steps.',
    steps: [
      {
        title: 'Identify the vehicle and pack',
        body: 'The station verifies the vehicle, battery type, state, authorization, and physical alignment before work begins.',
      },
      {
        title: 'Make high voltage safe',
        body: 'The vehicle opens high-voltage paths and confirms safe isolation before the pack is released.',
        href: '/technologies/high-voltage-safety-disconnects/',
      },
      {
        title: 'Exchange the pack',
        body: 'Automation removes the depleted pack, installs a charged compatible pack, and secures the mechanical interface.',
      },
      {
        title: 'Verify and return to service',
        body: 'The vehicle and station check pack health, locks, communication, billing, and readiness before departure.',
        href: '/technologies/battery-management-system/',
      },
    ],
  },
  'high-voltage-safety-disconnects': {
    id: 'high-voltage-safety-disconnects',
    title: 'High-voltage enable and isolate sequence',
    summary:
      'Electric-drive readiness depends on deliberate checks before high-voltage hardware is connected to the vehicle.',
    steps: [
      {
        title: 'Check isolation and interlocks',
        body: 'The vehicle verifies that high-voltage paths, covers, connectors, and monitored circuits are in an acceptable state.',
      },
      {
        title: 'Precharge the DC link',
        body: 'A controlled path limits inrush current before the main contactors connect the battery to power electronics.',
        href: '/technologies/power-inverter/',
      },
      {
        title: 'Close main contactors',
        body: 'The battery connects to propulsion, charging, and auxiliary high-voltage systems within allowed conditions.',
        href: '/technologies/battery-management-system/',
      },
      {
        title: 'Open on shutdown or fault',
        body: 'Crash, service, fault, or shutdown logic opens the high-voltage path and verifies discharge or safe isolation.',
      },
    ],
  },
  'zonal-electrical-architecture': {
    id: 'zonal-electrical-architecture',
    title: 'Zonal routing model',
    summary:
      'Zonal architecture separates local hardware connection from centralized function logic.',
    steps: [
      {
        title: 'Local hardware enters a zone ECU',
        body: 'Nearby sensors, actuators, legacy buses, and power outputs connect through a physical vehicle zone.',
      },
      {
        title: 'Zone ECU normalizes access',
        body: 'The zone controller bridges local signals and power paths to the vehicle network backbone.',
        href: '/technologies/controller-area-network/',
      },
      {
        title: 'Vehicle computers run functions',
        body: 'Central or cross-domain computers host more application logic across chassis, body, powertrain, and assistance features.',
        href: '/technologies/software-defined-vehicle-architecture/',
      },
      {
        title: 'Security and diagnostics bound behavior',
        body: 'Gateways, update rules, fault handling, and cybersecurity controls define what software can command.',
        href: '/technologies/vehicle-cybersecurity/',
      },
    ],
  },
  'large-structural-casting': {
    id: 'large-structural-casting',
    title: 'Large casting production tradeoff',
    summary:
      'A large casting can reduce assembly operations, but it concentrates material, tooling, quality, and repair decisions.',
    steps: [
      {
        title: 'Define structural load paths',
        body: 'Engineers decide which body region can become one cast part while preserving crash, stiffness, and packaging needs.',
      },
      {
        title: 'Cast the part',
        body: 'Tooling, alloy, fill behavior, cooling, porosity control, and heat treatment shape the usable structure.',
      },
      {
        title: 'Finish and inspect',
        body: 'Machining, dimensional checks, and non-destructive inspection become critical because many joints have been removed.',
      },
      {
        title: 'Join to the vehicle body',
        body: 'The casting still has to connect to stamped, extruded, bonded, or battery-structure components.',
        href: '/technologies/cell-to-pack-structural-battery/',
      },
    ],
  },
};

export function getSystemFlow(slug: string) {
  return systemFlows[slug];
}
