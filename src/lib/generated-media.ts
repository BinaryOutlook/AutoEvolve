export type GeneratedMediaAsset = {
  id: string;
  title: string;
  src: string;
  alt: string;
  caption: string;
  generatedDate: string;
  model: string;
  methodLabel: string;
  methodUrl: string;
  promptSummary: string;
  editingNotes: string;
  usageNote: string;
};

const generationMethodUrl =
  'https://developers.openai.com/api/docs/guides/image-generation';
const generatedDate = '2026-06-07';
const model = 'OpenAI image generation via the Codex built-in image_gen tool';
const usageNote =
  'Illustrative AutoEvolve explainer image, not source evidence for factual claims. Read with the article sources and surrounding captions.';

export const generatedMediaAssets = {
  softwareDefinedVehicleArchitecture: {
    id: 'generated-software-defined-vehicle-architecture',
    title: 'Software-defined vehicle architecture explainer',
    src: '/images/generated/software-defined-vehicle-architecture.jpg',
    alt: 'Illustrative transparent vehicle architecture showing central computers, zonal modules, sensor paths, battery, charging, brakes, and stacked software layers.',
    caption:
      'AI-generated conceptual plate showing how central compute, zones, networks, and vehicle hardware can be discussed as one software-defined architecture.',
    generatedDate,
    model,
    methodLabel: 'OpenAI image generation',
    methodUrl: generationMethodUrl,
    promptSummary:
      'A restrained 16:9 technical illustration of a software-defined vehicle with central compute, zonal gateways, network lines, hardware icons, and translucent software layers, with no readable labels.',
    editingNotes:
      'Generated as PNG, visually inspected for brand neutrality and text risk, then copied into the project as an optimized JPEG.',
    usageNote,
  },
  zonalElectricalArchitecture: {
    id: 'generated-zonal-electrical-architecture',
    title: 'Zonal electrical architecture explainer',
    src: '/images/generated/zonal-electrical-architecture.jpg',
    alt: 'Illustrative top-view vehicle architecture showing four zone controllers, a central vehicle computer, local sensors, actuators, battery, thermal hardware, and network paths.',
    caption:
      'AI-generated conceptual plate showing a physical-zone view of vehicle wiring, local control, power distribution, and central compute.',
    generatedDate,
    model,
    methodLabel: 'OpenAI image generation',
    methodUrl: generationMethodUrl,
    promptSummary:
      'A 16:9 top-down technical illustration of four zone ECUs, a central computer, high-speed backbone, local sensors and actuators, and high-voltage paths, with no readable labels.',
    editingNotes:
      'Generated as PNG, visually inspected, then copied into the project as an optimized JPEG.',
    usageNote,
  },
  chargingCommunicationProtocols: {
    id: 'generated-charging-communication-protocols',
    title: 'Charging communication explainer',
    src: '/images/generated/charging-communication-protocols.jpg',
    alt: 'Illustrative electric vehicle connected to a charging station with separate digital handshake paths, power paths, safety icons, battery modules, and grid connection.',
    caption:
      'AI-generated conceptual plate separating the visible cable from the communication, authorization, battery-limit, and power-transfer paths in an EV charging session.',
    generatedDate,
    model,
    methodLabel: 'OpenAI image generation',
    methodUrl: generationMethodUrl,
    promptSummary:
      'A 16:9 EV charging illustration with a vehicle, station cabinet, teal data paths, amber power paths, safety interlocks, and abstract icons, with no readable labels.',
    editingNotes:
      'Generated as PNG, visually inspected for connector neutrality, then copied into the project as an optimized JPEG.',
    usageNote,
  },
  overTheAirSoftwareUpdates: {
    id: 'generated-over-the-air-software-updates',
    title: 'Over-the-air update workflow explainer',
    src: '/images/generated/over-the-air-software-updates.jpg',
    alt: 'Illustrative vehicle software update workflow showing a cloud server, wireless path, update checkpoints, parked vehicle state, controller modules, verification, and rollback loop.',
    caption:
      'AI-generated conceptual plate showing a software update as a lifecycle workflow with delivery, checks, installation, verification, and recovery paths.',
    generatedDate,
    model,
    methodLabel: 'OpenAI image generation',
    methodUrl: generationMethodUrl,
    promptSummary:
      'A 16:9 OTA update management illustration with cloud/server icon, wireless data path, staged checkpoints, vehicle controller modules, verification, and rollback, with no readable labels.',
    editingNotes:
      'Generated as PNG, visually inspected for non-sensational cybersecurity framing, then copied into the project as an optimized JPEG.',
    usageNote,
  },
  highVoltageSafetyDisconnects: {
    id: 'generated-high-voltage-safety-disconnects',
    title: 'High-voltage safety disconnect explainer',
    src: '/images/generated/high-voltage-safety-disconnects.jpg',
    alt: 'Illustrative electric vehicle cutaway showing a battery pack, contactors, precharge path, inverter, motor, charge port, interlock loop, isolation monitoring, and shutdown paths.',
    caption:
      'AI-generated conceptual plate showing high-voltage enablement, contactors, precharge, interlocks, and shutdown paths as a safety architecture.',
    generatedDate,
    model,
    methodLabel: 'OpenAI image generation',
    methodUrl: generationMethodUrl,
    promptSummary:
      'A 16:9 high-voltage EV safety illustration with battery pack, contactors, precharge, inverter, service disconnect, interlock loop, and fault/shutdown paths, with no readable labels.',
    editingNotes:
      'Generated as PNG, visually inspected for safety framing and no fire or crash sensationalism, then copied into the project as an optimized JPEG.',
    usageNote,
  },
  brakeByWire: {
    id: 'generated-brake-by-wire',
    title: 'Brake-by-wire and brake-blending explainer',
    src: '/images/generated/brake-by-wire.jpg',
    alt: 'Illustrative vehicle brake-by-wire architecture showing pedal sensor, brake controller, actuator modules, wheel brakes, regenerative path, friction brake path, and control signals.',
    caption:
      'AI-generated conceptual plate showing pedal demand, electronic brake control, regenerative braking, and friction braking as coordinated paths.',
    generatedDate,
    model,
    methodLabel: 'OpenAI image generation',
    methodUrl: generationMethodUrl,
    promptSummary:
      'A 16:9 brake-by-wire illustration with pedal sensor, controller, redundant actuators, wheel brake calipers, regenerative path, and friction braking paths, with no readable labels.',
    editingNotes:
      'Generated as PNG, visually inspected to avoid implying friction brakes are removed, then copied into the project as an optimized JPEG.',
    usageNote,
  },
  batterySwapping: {
    id: 'generated-battery-swapping',
    title: 'Battery swapping workflow explainer',
    src: '/images/generated/battery-swapping.jpg',
    alt: 'Illustrative battery swap station showing an electric vehicle lifted over a bay, a battery pack being exchanged, charged packs in a rack, alignment guides, and verification icons.',
    caption:
      'AI-generated conceptual plate showing battery swapping as a station workflow involving identification, isolation, pack exchange, inventory, and verification.',
    generatedDate,
    model,
    methodLabel: 'OpenAI image generation',
    methodUrl: generationMethodUrl,
    promptSummary:
      'A 16:9 battery-swapping station illustration with a vehicle over an automated bay, battery pack exchange, station rack, safety interlock icons, and workflow arrows, with no readable labels.',
    editingNotes:
      'Generated as PNG, visually inspected for brand neutrality, then copied into the project as an optimized JPEG.',
    usageNote,
  },
  largeStructuralCasting: {
    id: 'generated-large-structural-casting',
    title: 'Large structural casting process explainer',
    src: '/images/generated/large-structural-casting.jpg',
    alt: 'Illustrative manufacturing process showing many stamped body pieces, a casting machine, a large cast underbody section, inspection, a body shell, and nearby battery pack.',
    caption:
      'AI-generated conceptual plate showing large structural casting as a manufacturing sequence from many parts to a cast structure, inspection, and body integration.',
    generatedDate,
    model,
    methodLabel: 'OpenAI image generation',
    methodUrl: generationMethodUrl,
    promptSummary:
      'A 16:9 manufacturing illustration showing stamped pieces, die-casting cell, finished structural casting, inspection arm, body shell, and battery-pack integration, with no readable labels.',
    editingNotes:
      'Generated as PNG, visually inspected for non-brand-specific process framing, then copied into the project as an optimized JPEG.',
    usageNote,
  },
  adasSensorFusion: {
    id: 'generated-adas-sensor-fusion',
    title: 'ADAS sensor fusion explainer',
    src: '/images/generated/adas-sensor-fusion.jpg',
    alt: 'Illustrative driver-assistance vehicle scene showing radar arcs, camera field of view, nearby objects, wheel and yaw signals, central compute, path planning, and fallback cues.',
    caption:
      'AI-generated conceptual plate showing how sensor views, vehicle-state signals, uncertainty, planning, and driver-assistance outputs can be combined.',
    generatedDate,
    model,
    methodLabel: 'OpenAI image generation',
    methodUrl: generationMethodUrl,
    promptSummary:
      'A 16:9 ADAS perception illustration with radar cones, camera field, ultrasonic arcs, vehicle-state signals, central compute, path-planning ribbon, and uncertainty cues, with no readable labels.',
    editingNotes:
      'Generated as PNG, visually inspected to avoid implying unrestricted driverless operation, then copied into the project as an optimized JPEG.',
    usageNote,
  },
  supplierTierManufacturingNetworks: {
    id: 'generated-supplier-tier-manufacturing-networks',
    title: 'Supplier-tier manufacturing network explainer',
    src: '/images/generated/supplier-tier-manufacturing-networks.jpg',
    alt: 'Illustrative automotive manufacturing network showing material processing, battery cell plant, supplier factories, software validation, final assembly, logistics, charging, service, and recycling nodes.',
    caption:
      'AI-generated conceptual plate showing vehicle production as a network of materials, suppliers, validation, assembly, logistics, service, and recycling loops.',
    generatedDate,
    model,
    methodLabel: 'OpenAI image generation',
    methodUrl: generationMethodUrl,
    promptSummary:
      'A 16:9 supplier and vertical-integration illustration with factory nodes, material flows, battery and software nodes, final assembly, service, recycling, quality checkpoints, and logistics paths, with no readable labels.',
    editingNotes:
      'Generated as PNG, visually inspected to avoid maps, flags, rankings, or brand-specific factories, then copied into the project as an optimized JPEG.',
    usageNote,
  },
} satisfies Record<string, GeneratedMediaAsset>;

const generatedMediaBySlug: Record<string, GeneratedMediaAsset> = {
  'adaptive-cruise-control': generatedMediaAssets.adasSensorFusion,
  'adas-sensor-fusion': generatedMediaAssets.adasSensorFusion,
  'anti-lock-braking-system': generatedMediaAssets.brakeByWire,
  'autonomous-driving-system-stack':
    generatedMediaAssets.softwareDefinedVehicleArchitecture,
  'battery-electric-vehicle': generatedMediaAssets.highVoltageSafetyDisconnects,
  'battery-management-system':
    generatedMediaAssets.highVoltageSafetyDisconnects,
  'battery-swapping': generatedMediaAssets.batterySwapping,
  'brake-by-wire': generatedMediaAssets.brakeByWire,
  'cell-to-pack-structural-battery':
    generatedMediaAssets.largeStructuralCasting,
  'charging-communication-protocols':
    generatedMediaAssets.chargingCommunicationProtocols,
  'combined-charging-system':
    generatedMediaAssets.chargingCommunicationProtocols,
  'controller-area-network': generatedMediaAssets.zonalElectricalArchitecture,
  'dc-fast-charging': generatedMediaAssets.chargingCommunicationProtocols,
  'electronic-stability-control': generatedMediaAssets.brakeByWire,
  'ev-charging': generatedMediaAssets.chargingCommunicationProtocols,
  'high-voltage-safety-disconnects':
    generatedMediaAssets.highVoltageSafetyDisconnects,
  'large-structural-casting': generatedMediaAssets.largeStructuralCasting,
  'on-board-diagnostics': generatedMediaAssets.overTheAirSoftwareUpdates,
  'over-the-air-software-updates':
    generatedMediaAssets.overTheAirSoftwareUpdates,
  'power-inverter': generatedMediaAssets.highVoltageSafetyDisconnects,
  'regenerative-braking': generatedMediaAssets.brakeByWire,
  'software-defined-vehicle-architecture':
    generatedMediaAssets.softwareDefinedVehicleArchitecture,
  'supplier-tier-manufacturing-networks':
    generatedMediaAssets.supplierTierManufacturingNetworks,
  'vehicle-cybersecurity': generatedMediaAssets.overTheAirSoftwareUpdates,
  'vehicle-startup-shutdown-states':
    generatedMediaAssets.highVoltageSafetyDisconnects,
  'vehicle-to-grid': generatedMediaAssets.chargingCommunicationProtocols,
  'vertical-integration-ev-manufacturing':
    generatedMediaAssets.supplierTierManufacturingNetworks,
  'zonal-electrical-architecture':
    generatedMediaAssets.zonalElectricalArchitecture,
} satisfies Record<string, GeneratedMediaAsset>;

export function generatedMediaForSlug(slug: string) {
  return generatedMediaBySlug[slug];
}
