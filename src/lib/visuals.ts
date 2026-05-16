export type TechnologyVisualBlueprint = {
  theme: string;
  flow: readonly [string, string, string];
  focus: string;
};

const fallbackTechnologyBlueprint: TechnologyVisualBlueprint = {
  theme: 'System mechanism',
  flow: ['Inputs and constraints', 'System mechanism', 'Vehicle-level effect'],
  focus: 'Shows how metadata turns into a neutral reading path.',
};

const technologyCategoryBlueprints = {
  propulsion: {
    theme: 'Propulsion conversion path',
    flow: ['Stored energy', 'Prime mover', 'Wheel torque'],
    focus: 'Tracks how an energy source becomes vehicle motion.',
  },
  'engine-subsystem': {
    theme: 'Engine subsystem feedback',
    flow: ['Mechanical signal', 'Control or actuation', 'Combustion behavior'],
    focus: 'Places the part inside the engine-control problem.',
  },
  'fuel-energy': {
    theme: 'Fuel and energy pathway',
    flow: ['Energy carrier', 'Storage and metering', 'Useful vehicle work'],
    focus: 'Connects the fuel or storage medium to vehicle operation.',
  },
  'transmission-driveline': {
    theme: 'Torque transfer path',
    flow: ['Engine or motor torque', 'Ratio or coupling', 'Driven wheels'],
    focus: 'Follows how torque is adapted before reaching the road.',
  },
  emissions: {
    theme: 'Emissions-control chain',
    flow: ['Exhaust stream', 'Sensing and control', 'Aftertreatment result'],
    focus: 'Frames emissions hardware as part of a measured system.',
  },
  'chassis-safety': {
    theme: 'Chassis safety control loop',
    flow: [
      'Driver and road inputs',
      'Sensors and controller',
      'Vehicle response',
    ],
    focus: 'Shows why safety systems depend on feedback and calibration.',
  },
  'electric-drive': {
    theme: 'Electric-drive energy path',
    flow: [
      'Stored electricity',
      'Power electronics',
      'Motor and charging loop',
    ],
    focus: 'Links electrical storage, conversion, propulsion, and charging.',
  },
  'software-diagnostics': {
    theme: 'Software and diagnostics loop',
    flow: ['Sensor network', 'Control logic', 'Diagnostics and service'],
    focus: 'Treats software as a visible part of vehicle behavior.',
  },
} as const satisfies Record<string, TechnologyVisualBlueprint>;

type KnownTechnologyCategory = keyof typeof technologyCategoryBlueprints;

function isKnownTechnologyCategory(
  category: string,
): category is KnownTechnologyCategory {
  return Object.hasOwn(technologyCategoryBlueprints, category);
}

export function technologyVisualForCategory(
  category: string,
): TechnologyVisualBlueprint {
  if (isKnownTechnologyCategory(category)) {
    return technologyCategoryBlueprints[category];
  }

  return fallbackTechnologyBlueprint;
}

export function compactLabel(label: string, maxLength = 30): string {
  if (label.length <= maxLength) {
    return label;
  }

  const truncated = label
    .slice(0, Math.max(1, maxLength - 1))
    .replace(/[\s-]+$/u, '');

  return `${truncated}…`;
}

export function labelFromSlug(slug: string): string {
  return slug
    .split('-')
    .filter((part) => part.length > 0)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export function visualId(value: string): string {
  const slug = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return `visual-${slug.length > 0 ? slug : 'diagram'}`;
}

export function pickVisualItems(
  items: readonly string[],
  fallback: readonly string[],
  limit = 4,
): string[] {
  const source = items.length > 0 ? items : fallback;

  return source.slice(0, limit);
}
