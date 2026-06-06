export type SourcedMediaAsset = {
  id: string;
  title: string;
  src: string;
  alt: string;
  caption: string;
  sourceLabel: string;
  sourceUrl: string;
  originalUrl?: string;
  rights: string;
};

export type MediaChoice = {
  asset: SourcedMediaAsset;
  title: string;
  description: string;
  tags: string[];
};

export type ArchiveMediaInput = {
  collection: 'eras' | 'technologies' | 'vehicles' | 'controversies';
  slug: string;
  title: string;
  category?: string;
  dateRange?: string;
  manufacturer?: string;
  productionPeriod?: string;
  marketContext?: string;
  relatedTechnologies?: string[];
  relatedVehicles?: string[];
  affectedTechnologies?: string[];
  keyThemes?: string[];
};

export const mediaAssets = {
  electricCutaway: {
    id: 'afdc-electric-cutaway',
    title: 'All-electric vehicle component cutaway',
    src: '/images/systems/afdc-electric-vehicle.jpg',
    alt: 'Cutaway all-electric sedan showing battery pack, charge port, power electronics, motor, onboard charger, thermal system, and transmission.',
    caption:
      'All-electric vehicle component cutaway from the U.S. Department of Energy Alternative Fuels Data Center.',
    sourceLabel: 'DOE AFDC: How Do All-Electric Cars Work?',
    sourceUrl: 'https://afdc.energy.gov/vehicles/how-do-all-electric-cars-work',
    originalUrl: 'https://afdc.energy.gov/files/vehicles/electric-high-res.jpg',
    rights:
      'U.S. government source image; local copy resized for site delivery.',
  },
  hybridCutaway: {
    id: 'afdc-hybrid-cutaway',
    title: 'Hybrid electric vehicle component cutaway',
    src: '/images/systems/afdc-hybrid-vehicle.jpg',
    alt: 'Cutaway hybrid electric vehicle showing combustion engine, electric traction motor, generator, power electronics, battery pack, exhaust, fuel tank, and transmission.',
    caption:
      'Hybrid vehicle component cutaway from the U.S. Department of Energy Alternative Fuels Data Center.',
    sourceLabel: 'DOE AFDC: How Do Hybrid Electric Cars Work?',
    sourceUrl: 'https://afdc.energy.gov/vehicles/how-do-hybrid-electric-cars-work',
    originalUrl: 'https://afdc.energy.gov/files/vehicles/hybrid-high-res.jpg',
    rights:
      'U.S. government source image; local copy resized for site delivery.',
  },
  gasolineCutaway: {
    id: 'afdc-gasoline-cutaway',
    title: 'Gasoline vehicle component cutaway',
    src: '/images/systems/afdc-gasoline-vehicle.jpg',
    alt: 'Cutaway gasoline car showing the engine, fuel tank, fuel line, exhaust, transmission, battery, radiator, and wheels.',
    caption:
      'Gasoline vehicle component cutaway from the U.S. Department of Energy Alternative Fuels Data Center.',
    sourceLabel: 'DOE AFDC: How Do Gasoline Cars Work?',
    sourceUrl: 'https://afdc.energy.gov/vehicles/how-do-gasoline-cars-work',
    originalUrl: 'https://afdc.energy.gov/files/vehicles/gas-high-res.jpg',
    rights:
      'U.S. government source image; local copy resized for site delivery.',
  },
  dieselCutaway: {
    id: 'afdc-diesel-cutaway',
    title: 'Diesel vehicle component cutaway',
    src: '/images/systems/afdc-diesel-vehicle.jpg',
    alt: 'Cutaway diesel vehicle showing the diesel engine, fuel tank, fuel injection path, exhaust aftertreatment, transmission, battery, and radiator.',
    caption:
      'Diesel vehicle component cutaway from the U.S. Department of Energy Alternative Fuels Data Center.',
    sourceLabel: 'DOE AFDC: How Do Diesel Cars Work?',
    sourceUrl: 'https://afdc.energy.gov/vehicles/how-do-diesel-cars-work',
    originalUrl: 'https://afdc.energy.gov/files/vehicles/diesel-high-res.jpg',
    rights:
      'U.S. government source image; local copy resized for site delivery.',
  },
  teslaModelS: {
    id: 'wikimedia-tesla-model-s',
    title: 'Tesla Model S photograph',
    src: '/images/vehicles/tesla-model-s-2012.jpg',
    alt: 'Black 2012 Tesla Model S photographed from a front three-quarter view in Stuttgart.',
    caption:
      'Tesla Model S photographed in Stuttgart by Alexander Migl; Wikimedia Commons source record.',
    sourceLabel: 'Wikimedia Commons: Tesla Model S (2012) IMG 3200',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Tesla_Model_S_(2012)_IMG_3200.jpg',
    rights:
      'Creator: Alexander Migl. License: CC BY-SA 4.0. Local file resized for site delivery.',
  },
  bydAtto3: {
    id: 'wikimedia-byd-atto3',
    title: 'BYD Atto 3 photograph',
    src: '/images/vehicles/byd-atto-3.jpg',
    alt: 'White BYD Atto 3 photographed from a front-left view in Stuttgart-Vaihingen.',
    caption:
      'BYD Atto 3 photographed in Stuttgart-Vaihingen by Alexander Migl; Wikimedia Commons source record.',
    sourceLabel: 'Wikimedia Commons: BYD Atto 3 1X7A6495',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:BYD_Atto_3_1X7A6495.jpg',
    rights:
      'Creator: Alexander Migl. License: CC BY-SA 4.0. Local file resized for site delivery.',
  },
  hyundaiIoniq5: {
    id: 'wikimedia-hyundai-ioniq5',
    title: 'Hyundai IONIQ 5 photograph',
    src: '/images/vehicles/hyundai-ioniq-5.jpg',
    alt: 'White Hyundai IONIQ 5 photographed from a side-front angle in Japan.',
    caption:
      'Hyundai IONIQ 5 photograph from TTTNIS; Wikimedia Commons source record.',
    sourceLabel: 'Wikimedia Commons: Hyundai Ioniq 5',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hyundai_Ioniq_5.jpg',
    rights:
      'Creator: TTTNIS. Usage basis: CC0 1.0 public domain dedication. Local file resized for site delivery.',
  },
  toyotaPrius: {
    id: 'wikimedia-toyota-prius-xw11',
    title: 'Toyota Prius XW11 photograph',
    src: '/images/vehicles/toyota-prius-xw11.jpg',
    alt: 'First-generation Toyota Prius photographed from a front-left view in a museum setting.',
    caption:
      'First-generation Toyota Prius photograph by Benespit; Wikimedia Commons source record.',
    sourceLabel: 'Wikimedia Commons: 1st Toyota Prius (XW11) front',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:1st_Toyota_Prius_(XW11)_front.jpg',
    rights:
      'Creator: Benespit. License: CC BY-SA 4.0. Local file copied for site delivery.',
  },
} satisfies Record<string, SourcedMediaAsset>;

export const vehicleMediaBySlug = {
  'tesla-model-s': mediaAssets.teslaModelS,
  'byd-atto-3-yuan-plus': mediaAssets.bydAtto3,
  'hyundai-ioniq-5': mediaAssets.hyundaiIoniq5,
  'toyota-prius': mediaAssets.toyotaPrius,
} satisfies Record<string, SourcedMediaAsset>;

const electricSignals = [
  'battery',
  'bev',
  'charging',
  'electric',
  'ev',
  'fuel-cell',
  'inverter',
  'lithium',
  'motor',
  'regenerative',
  'solid-state',
  'vehicle-to-grid',
];

const hybridSignals = [
  'hybrid',
  'integrated-starter-generator',
  'mild-hybrid',
  'plug-in-hybrid',
  'prius',
];

const dieselSignals = [
  'aftertreatment',
  'biodiesel',
  'common-rail',
  'diesel',
  'dieselgate',
  'particulate',
  'selective-catalytic',
  'tdi',
  'volkswagen-tdi',
];

const gasolineSignals = [
  'automatic-transmission',
  'carburetor',
  'catalyst',
  'combustion',
  'differential',
  'direct-injection',
  'engine',
  'fuel-injection',
  'gasoline',
  'manual-transmission',
  'petrol',
  'supercharger',
  'throttle',
  'torque-converter',
  'transmission',
  'turbocharger',
  'valve',
];

function hasSignal(values: string[], signals: string[]) {
  return values.some((value) => {
    const tokens = value.split(/[^a-z0-9]+/u).filter(Boolean);

    return signals.some((signal) =>
      signal.includes('-') ? value.includes(signal) : tokens.includes(signal),
    );
  });
}

function tagLabel(value: string) {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function valuesFor(input: ArchiveMediaInput) {
  return [
    input.slug,
    input.category,
    input.dateRange,
    input.manufacturer,
    input.productionPeriod,
    input.marketContext,
    ...(input.relatedTechnologies ?? []),
    ...(input.relatedVehicles ?? []),
    ...(input.affectedTechnologies ?? []),
    ...(input.keyThemes ?? []),
  ]
    .filter((value): value is string => typeof value === 'string')
    .map((value) => value.toLowerCase());
}

export function systemAssetForEntry(input: ArchiveMediaInput) {
  const values = valuesFor(input);

  if (input.category === 'electric-drive') {
    return mediaAssets.electricCutaway;
  }

  if (hasSignal(values, hybridSignals)) {
    return mediaAssets.hybridCutaway;
  }

  if (hasSignal(values, dieselSignals)) {
    return mediaAssets.dieselCutaway;
  }

  if (hasSignal(values, electricSignals)) {
    return mediaAssets.electricCutaway;
  }

  if (input.category === 'emissions' && hasSignal(values, dieselSignals)) {
    return mediaAssets.dieselCutaway;
  }

  if (hasSignal(values, gasolineSignals)) {
    return mediaAssets.gasolineCutaway;
  }

  if (
    input.category === 'transmission-driveline' ||
    input.category === 'propulsion' ||
    input.category === 'engine-subsystem' ||
    input.category === 'fuel-energy'
  ) {
    return mediaAssets.gasolineCutaway;
  }

  return mediaAssets.gasolineCutaway;
}

export function mediaForArchiveEntry(input: ArchiveMediaInput): MediaChoice {
  const vehicleAsset =
    input.collection === 'vehicles'
      ? vehicleMediaBySlug[input.slug as keyof typeof vehicleMediaBySlug]
      : undefined;
  const asset = vehicleAsset ?? systemAssetForEntry(input);
  const isVehiclePhoto = vehicleAsset !== undefined;
  const tags =
    input.collection === 'technologies'
      ? [input.category ?? 'technology', ...(input.relatedTechnologies ?? [])]
      : input.collection === 'controversies'
        ? ['case study', ...(input.affectedTechnologies ?? [])]
        : input.collection === 'vehicles'
          ? [
              input.manufacturer ?? 'vehicle example',
              ...(input.relatedTechnologies ?? []),
            ]
          : [input.dateRange ?? 'era', ...(input.keyThemes ?? [])];

  return {
    asset,
    title: isVehiclePhoto ? asset.title : `${asset.title} reference`,
    description: isVehiclePhoto
      ? 'Vehicle photographs are used as examples, not endorsements. The surrounding article should explain what broader technology the vehicle illustrates.'
      : 'This sourced component image anchors the article in physical systems. It is a reference image, not a claim that every vehicle or technology page shares this exact layout.',
    tags: tags.slice(0, 5).map(tagLabel),
  };
}
