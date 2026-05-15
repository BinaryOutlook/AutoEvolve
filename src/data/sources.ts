export type SourceType =
  | 'government'
  | 'technical-reference'
  | 'manufacturer'
  | 'museum'
  | 'academic';

export type Source = {
  id: string;
  title: string;
  organization: string;
  type: SourceType;
  url: string;
  accessedDate: string;
  supports: string[];
  notes?: string;
};

export const sources: Source[] = [
  {
    id: 'doe-afdc-hybrid',
    title: 'How Do Hybrid Electric Cars Work?',
    organization: 'U.S. Department of Energy Alternative Fuels Data Center',
    type: 'government',
    url: 'https://afdc.energy.gov/vehicles/how-do-hybrid-electric-cars-work',
    accessedDate: '2026-05-15',
    supports: ['Hybrid architecture overview', 'regenerative braking overview'],
  },
  {
    id: 'doe-afdc-phev',
    title: 'How Do Plug-In Hybrid Electric Cars Work?',
    organization: 'U.S. Department of Energy Alternative Fuels Data Center',
    type: 'government',
    url: 'https://afdc.energy.gov/vehicles/how-do-plug-in-hybrid-electric-cars-work',
    accessedDate: '2026-05-15',
    supports: [
      'Plug-in hybrid operating modes',
      'charging and dual-powertrain context',
    ],
  },
  {
    id: 'doe-afdc-bev',
    title: 'How Do All-Electric Cars Work?',
    organization: 'U.S. Department of Energy Alternative Fuels Data Center',
    type: 'government',
    url: 'https://afdc.energy.gov/vehicles/how-do-all-electric-cars-work',
    accessedDate: '2026-05-15',
    supports: ['Battery electric vehicle component overview', 'EV energy path'],
  },
  {
    id: 'epa-vw-settlement',
    title: 'Volkswagen Clean Air Act Civil Settlement',
    organization: 'U.S. Environmental Protection Agency',
    type: 'government',
    url: 'https://www.epa.gov/enforcement/volkswagen-clean-air-act-civil-settlement',
    accessedDate: '2026-05-15',
    supports: ['Dieselgate settlement context', 'regulatory outcome summary'],
  },
  {
    id: 'epa-vw-violations',
    title: 'Learn About Volkswagen Violations',
    organization: 'U.S. Environmental Protection Agency',
    type: 'government',
    url: 'https://www.epa.gov/vw/learn-about-volkswagen-violations',
    accessedDate: '2026-05-15',
    supports: [
      'Volkswagen diesel emissions violation overview',
      'defeat device context',
    ],
  },
  {
    id: 'nhtsa-safety-tech',
    title: 'Vehicle Safety Technologies',
    organization: 'National Highway Traffic Safety Administration',
    type: 'government',
    url: 'https://www.nhtsa.gov/vehicle-safety',
    accessedDate: '2026-05-15',
    supports: ['Safety technology context', 'driver assistance terminology'],
  },
  {
    id: 'museoauto-cugnot-steam-car',
    title: "Cugnot's Steam-Powered Car",
    organization: "MAUTO - Museo Nazionale dell'Automobile",
    type: 'museum',
    url: 'https://www.museoauto.com/en/qrcode/cugnots-steam-powered-car/',
    accessedDate: '2026-05-16',
    supports: [
      'Cugnot steam vehicle context',
      'early self-propelled vehicle constraints',
    ],
  },
  {
    id: 'smithsonian-technological-choices',
    title: 'Technological Choices',
    organization: 'Smithsonian National Museum of American History',
    type: 'museum',
    url: 'https://americanhistory.si.edu/explore/exhibitions/america-on-the-move/online/americans-adopt-auto/technological-choices',
    accessedDate: '2026-05-16',
    supports: [
      'early competition between steam, electric, and combustion vehicles',
      'emergence of front-engine internal-combustion layouts',
    ],
  },
  {
    id: 'doe-history-electric-car',
    title: 'The History of the Electric Car',
    organization: 'U.S. Department of Energy',
    type: 'government',
    url: 'https://www.energy.gov/articles/history-electric-car',
    accessedDate: '2026-05-16',
    supports: [
      'early electric vehicle history',
      'turn-of-the-century electric vehicle context',
    ],
  },
  {
    id: 'mercedes-benz-patent-motorwagen',
    title: 'Benz Patent Motor Car: The First Automobile (1885-1886)',
    organization: 'Mercedes-Benz Group',
    type: 'manufacturer',
    url: 'https://group.mercedes-benz.com/company/tradition/company-history/1885-1886.html',
    accessedDate: '2026-05-16',
    supports: [
      'Benz Patent-Motorwagen technical layout',
      'early gasoline automobile integration',
    ],
  },
  {
    id: 'ford-moving-assembly-line',
    title: 'Assembly Line Revolution',
    organization: 'Ford Motor Company',
    type: 'manufacturer',
    url: 'https://corporate.ford.com/articles/history/moving-assembly-line/',
    accessedDate: '2026-05-16',
    supports: [
      'Ford moving assembly line context',
      'Model T production system changes',
    ],
  },
  {
    id: 'ford-model-t-history',
    title: 'The Ford Model T',
    organization: 'Ford Motor Company',
    type: 'manufacturer',
    url: 'https://corporate.ford.com/articles/history/the-model-t.html',
    accessedDate: '2026-05-16',
    supports: [
      'Model T production history',
      'Model T design and color context',
    ],
  },
  {
    id: 'mercedes-benz-260d-archive',
    title: '260 D (W 138), 1936-1940',
    organization: 'Mercedes-Benz Archive',
    type: 'manufacturer',
    url: 'https://mercedes-benz-archive.com/marsClassic/en/instance/ko/260-D-W-138-1936---1940.xhtml?oid=4294',
    accessedDate: '2026-05-16',
    supports: [
      'Mercedes-Benz 260 D diesel passenger-car context',
      'early series-production diesel passenger-car history',
    ],
  },
  {
    id: 'fhwa-interstate-history',
    title: 'History of the Interstate Highway System',
    organization: 'Federal Highway Administration',
    type: 'government',
    url: 'https://highways.dot.gov/highway-history/interstate-system/50th-anniversary/history-interstate-highway-system',
    accessedDate: '2026-05-16',
    supports: [
      'Federal-Aid Highway Act of 1956 context',
      'postwar highway infrastructure history',
    ],
  },
  {
    id: 'michelin-radial-tire-history',
    title: 'Michelin Radial Tyre History',
    organization: 'Michelin',
    type: 'manufacturer',
    url: 'https://news.michelin.co.uk/articles/the-triumph-of-the-radial-tyre',
    accessedDate: '2026-05-16',
    supports: [
      'radial tire development context',
      'postwar tire construction changes',
    ],
  },
  {
    id: 'national-motor-museum-mini',
    title: 'Austin Mini Seven',
    organization: 'National Motor Museum',
    type: 'museum',
    url: 'https://nationalmotormuseum.org.uk/collections/vehicles/austin-mini-seven/',
    accessedDate: '2026-05-16',
    supports: [
      '1959 Mini packaging context',
      'transverse front-engine and front-wheel-drive layout',
    ],
  },
  {
    id: 'volkswagen-beetle-postwar-production',
    title: 'Volkswagen Beetle Wolfsburg Production Launch',
    organization: 'Volkswagen Newsroom',
    type: 'manufacturer',
    url: 'https://www.volkswagen-newsroom.com/en/press-releases/production-launch-for-an-icon-the-first-vw-beetle-rolled-off-the-line-at-the-wolfsburg-plant-70-years-ago-1961',
    accessedDate: '2026-05-16',
    supports: [
      'postwar Volkswagen Type 1 production context',
      'high-volume postwar vehicle manufacturing example',
    ],
  },
  {
    id: 'epa-clean-air-act-history',
    title: 'Clean Air Act Requirements and History',
    organization: 'U.S. Environmental Protection Agency',
    type: 'government',
    url: 'https://www.epa.gov/clean-air-act-overview/clean-air-act-requirements-and-history',
    accessedDate: '2026-05-16',
    supports: [
      'Clean Air Act historical context',
      'U.S. emissions regulation background',
    ],
  },
  {
    id: 'epa-lead-catalytic-converter',
    title: 'Lead Poisoning: A Historical Perspective',
    organization: 'U.S. Environmental Protection Agency',
    type: 'government',
    url: 'https://www.epa.gov/archive/epa/aboutepa/lead-poisoning-historical-perspective.html',
    accessedDate: '2026-05-16',
    supports: [
      '1975 catalytic converter adoption context',
      'relationship between unleaded fuel and catalytic converters',
    ],
  },
  {
    id: 'volvo-lambda-sensor',
    title: "30 Years of Volvo's Lambda Sensor",
    organization: 'Volvo Cars',
    type: 'manufacturer',
    url: 'https://www.volvocars.com/us/media/press-releases/A0E9919C3B537B3A/',
    accessedDate: '2026-05-16',
    supports: [
      'three-way catalyst and oxygen sensor context',
      'closed-loop emissions-control example',
    ],
  },
  {
    id: 'bosch-common-rail-history',
    title: 'History of Common Rail',
    organization: 'Bosch Global',
    type: 'manufacturer',
    url: 'https://www.bosch.com/stories/history-of-common-rail/',
    accessedDate: '2026-05-16',
    supports: [
      'common-rail diesel injection history',
      '1990s diesel injection development',
    ],
  },
  {
    id: 'toyota-prius-launch',
    title: 'Toyota Prius Hybrid Passenger Vehicle Launch Release',
    organization: 'Toyota Motor Corporation',
    type: 'manufacturer',
    url: 'https://global.toyota/en/detail/7905316/',
    accessedDate: '2026-05-16',
    supports: [
      '1997 Toyota Prius launch context',
      'early hybrid packaging and system goals',
    ],
  },
  {
    id: 'doe-chevrolet-volt-operation-data',
    title:
      'Plug-In Hybrid Electric Vehicle Operation Data Summary for 2011 Chevrolet Volt VIN 0914',
    organization: 'U.S. Department of Energy',
    type: 'government',
    url: 'https://www.energy.gov/sites/prod/files/2015/01/f19/ftr2011ChevroletVolt0914.pdf',
    accessedDate: '2026-05-16',
    supports: [
      'Chevrolet Volt plug-in hybrid operation data',
      'charge-depleting and gasoline-supported driving context',
    ],
  },
  {
    id: 'nissan-leaf-heritage-2010',
    title: '2010s Company Heritage',
    organization: 'Nissan Motor Corporation',
    type: 'manufacturer',
    url: 'https://www.nissan-global.com/EN/COMPANY/PROFILE/HERITAGE/2010/',
    accessedDate: '2026-05-16',
    supports: [
      '2010 Nissan Leaf launch context',
      'mass-produced battery electric vehicle history',
    ],
  },
  {
    id: 'tesla-roadster-production-2008',
    title: 'Tesla Motors Begins Regular Production of 2008 Tesla Roadster',
    organization: 'Tesla Investor Relations',
    type: 'manufacturer',
    url: 'https://ir.tesla.com/press-release/tesla-motors-begins-regular-production-2008-tesla-roadster',
    accessedDate: '2026-05-16',
    supports: [
      '2008 Tesla Roadster production context',
      'lithium-ion battery electric vehicle example',
    ],
  },
  {
    id: 'unece-software-update-regulation',
    title:
      'UN Regulation No. 156 - Software Update and Software Update Management System',
    organization: 'United Nations Economic Commission for Europe',
    type: 'government',
    url: 'https://unece.org/transport/documents/2021/03/standards/un-regulation-no-156-software-update-and-software-update',
    accessedDate: '2026-05-16',
    supports: [
      'vehicle software update management context',
      'regulatory treatment of software updates',
    ],
  },
  {
    id: 'nhtsa-cybersecurity-practices',
    title: 'Cybersecurity Practices for the Safety of Modern Vehicles',
    organization: 'National Highway Traffic Safety Administration',
    type: 'government',
    url: 'https://www.nhtsa.gov/sites/nhtsa.gov/files/2022-09/cybersecurity-best-practices-safety-modern-vehicles-2022-pre-final-tag_0_0.pdf',
    accessedDate: '2026-05-16',
    supports: [
      'vehicle cybersecurity context',
      'over-the-air software update security considerations',
    ],
  },
  {
    id: 'tesla-software-updates',
    title: 'Software Updates',
    organization: 'Tesla Support',
    type: 'manufacturer',
    url: 'https://www.tesla.com/software',
    accessedDate: '2026-05-16',
    supports: [
      'over-the-air vehicle software update example',
      'connected vehicle update workflow context',
    ],
  },
  {
    id: 'tesla-model-s-deliveries-2012',
    title: 'Tesla Model S Customer Deliveries Release',
    organization: 'Tesla Investor Relations',
    type: 'manufacturer',
    url: 'https://ir.tesla.com/press-release/tesla-motors-begin-customer-deliveries-model-s-june-22nd',
    accessedDate: '2026-05-16',
    supports: [
      '2012 Tesla Model S delivery timing',
      'purpose-built battery electric sedan packaging context',
    ],
    notes:
      'Used for launch timing and vehicle architecture context; marketing claims are not treated as independent conclusions.',
  },
  {
    id: 'tesla-supercharger-launch-2012',
    title: 'Tesla Supercharger Network Launch Release',
    organization: 'Tesla Investor Relations',
    type: 'manufacturer',
    url: 'https://ir.tesla.com/press-release/tesla-motors-launches-revolutionary-supercharger-enabling',
    accessedDate: '2026-05-16',
    supports: [
      'initial 2012 Supercharger network context',
      'connection between Model S and dedicated DC fast charging',
    ],
    notes:
      'Used for infrastructure timing and system context; promotional framing is avoided in article text.',
  },
  {
    id: 'byd-yuan-plus-singapore-2022',
    title: 'BYD and E-Auto Will Debut Yuan Plus in Singapore in 2022',
    organization: 'BYD USA',
    type: 'manufacturer',
    url: 'https://en.byd.com/news/byd-and-e-auto-will-debut-yuan-plus-in-singapore-in-2022/',
    accessedDate: '2026-05-16',
    supports: [
      'Yuan Plus 2022 market introduction context',
      'BYD passenger-vehicle expansion beyond China',
    ],
  },
  {
    id: 'byd-atto3-eu',
    title: 'BYD ATTO 3 Product Page',
    organization: 'BYD Europe',
    type: 'manufacturer',
    url: 'https://www.byd.com/eu/electric-cars/atto3.html',
    accessedDate: '2026-05-16',
    supports: [
      'BYD Atto 3 e-Platform 3.0 context',
      'Blade Battery and LFP vehicle packaging statements',
    ],
    notes:
      'Used for manufacturer-stated platform and battery details, not for subjective product claims.',
  },
  {
    id: 'byd-e-platform-3',
    title: 'BYD e-Platform 3.0',
    organization: 'BYD Europe',
    type: 'manufacturer',
    url: 'https://www.byd.com/eu/technology/byd-e-platform-3',
    accessedDate: '2026-05-16',
    supports: [
      'BYD e-Platform 3.0 integration context',
      'BYD vertical integration description',
      'Blade Battery and cell-to-body platform explanation',
    ],
    notes:
      'Used for platform architecture description while avoiding manufacturer marketing language.',
  },
  {
    id: 'iea-global-ev-outlook-2025-executive-summary',
    title: 'Global EV Outlook 2025: Executive Summary',
    organization: 'International Energy Agency',
    type: 'technical-reference',
    url: 'https://www.iea.org/reports/global-ev-outlook-2025/executive-summary',
    accessedDate: '2026-05-16',
    supports: [
      'China electric car production scale in 2024',
      'battery cost and supply-chain integration context',
    ],
  },
  {
    id: 'iea-global-ev-outlook-2025-batteries',
    title: 'Global EV Outlook 2025: Electric Vehicle Batteries',
    organization: 'International Energy Agency',
    type: 'technical-reference',
    url: 'https://www.iea.org/reports/global-ev-outlook-2025/electric-vehicle-batteries',
    accessedDate: '2026-05-16',
    supports: [
      'LFP battery market share context',
      'China-centered battery production and chemistry trends',
    ],
  },
  {
    id: 'hyundai-ioniq5-egmp',
    title: 'Hyundai IONIQ 5 E-GMP Platform Release',
    organization: 'Hyundai Motor Company',
    type: 'manufacturer',
    url: 'https://www.hyundai.com/worldwide/en/newsroom/detail/0000000551',
    accessedDate: '2026-05-16',
    supports: [
      '800 V charging architecture example',
      'vehicle-to-load and dedicated EV platform context',
    ],
  },
  {
    id: 'wikimedia-tesla-model-s-2012-image',
    title: 'File:Tesla Model S (2012) IMG 3200.jpg',
    organization: 'Wikimedia Commons',
    type: 'technical-reference',
    url: 'https://commons.wikimedia.org/wiki/File:Tesla_Model_S_(2012)_IMG_3200.jpg',
    accessedDate: '2026-05-16',
    supports: ['Image attribution and license record for Tesla Model S page'],
    notes:
      'Creator: Alexander Migl. License: Creative Commons Attribution-Share Alike 4.0 International. Local file resized for site delivery.',
  },
  {
    id: 'wikimedia-byd-atto3-image',
    title: 'File:BYD Atto 3 1X7A6495.jpg',
    organization: 'Wikimedia Commons',
    type: 'technical-reference',
    url: 'https://commons.wikimedia.org/wiki/File:BYD_Atto_3_1X7A6495.jpg',
    accessedDate: '2026-05-16',
    supports: ['Image attribution and license record for BYD Atto 3 page'],
    notes:
      'Creator: Alexander Migl. License: Creative Commons Attribution-Share Alike 4.0 International. Local file resized for site delivery.',
  },
  {
    id: 'wikimedia-hyundai-ioniq5-image',
    title: 'File:Hyundai Ioniq 5.jpg',
    organization: 'Wikimedia Commons',
    type: 'technical-reference',
    url: 'https://commons.wikimedia.org/wiki/File:Hyundai_Ioniq_5.jpg',
    accessedDate: '2026-05-16',
    supports: ['Image attribution and usage-basis record for Hyundai IONIQ 5 page'],
    notes:
      'Creator: TTTNIS. Usage basis: CC0 1.0 public domain dedication. Local file resized for site delivery.',
  },
  {
    id: 'mercedes-drive-pilot',
    title: 'DRIVE PILOT Automated Driving',
    organization: 'Mercedes-Benz USA',
    type: 'manufacturer',
    url: 'https://www.mbusa.com/en/drive-pilot',
    accessedDate: '2026-05-16',
    supports: [
      'conditionally automated driving example',
      'production driver assistance and automation context',
    ],
  },
  {
    id: 'doe-afdc-gasoline-car',
    title: 'How Do Gasoline Cars Work?',
    organization: 'U.S. Department of Energy Alternative Fuels Data Center',
    type: 'government',
    url: 'https://afdc.energy.gov/vehicles/how-do-gasoline-cars-work',
    accessedDate: '2026-05-16',
    supports: [
      'spark-ignition gasoline vehicle component overview',
      'gasoline vehicle fuel and power flow',
    ],
  },
  {
    id: 'doe-afdc-diesel-biodiesel',
    title: 'How Do Diesel Vehicles Work Using Biodiesel?',
    organization: 'U.S. Department of Energy Alternative Fuels Data Center',
    type: 'government',
    url: 'https://afdc.energy.gov/vehicles/how-do-biodiesel-cars-work',
    accessedDate: '2026-05-16',
    supports: [
      'compression-ignition diesel vehicle component overview',
      'diesel aftertreatment and fuel-system context',
    ],
  },
  {
    id: 'doe-afdc-fuel-cell-how-it-works',
    title: 'How Do Fuel Cell Electric Vehicles Work Using Hydrogen?',
    organization: 'U.S. Department of Energy Alternative Fuels Data Center',
    type: 'government',
    url: 'https://afdc.energy.gov/vehicles/how-do-fuel-cell-electric-cars-work',
    accessedDate: '2026-05-16',
    supports: [
      'fuel-cell electric vehicle component overview',
      'hydrogen fuel-cell and battery power-flow distinctions',
    ],
  },
  {
    id: 'doe-afdc-fuel-cell',
    title: 'Fuel Cell Electric Vehicles',
    organization: 'U.S. Department of Energy Alternative Fuels Data Center',
    type: 'government',
    url: 'https://afdc.energy.gov/vehicles/fuel-cell',
    accessedDate: '2026-05-16',
    supports: [
      'PEM fuel-cell operating basics',
      'fuel-cell electric vehicle infrastructure context',
    ],
  },
  {
    id: 'epa-advanced-gasoline-diesel',
    title: 'Advanced Gasoline and Diesel Vehicles',
    organization: 'U.S. Environmental Protection Agency',
    type: 'government',
    url: 'https://www.epa.gov/greenvehicles/advanced-gasoline-and-diesel-vehicles',
    accessedDate: '2026-05-16',
    supports: [
      'gasoline and diesel fuel differences',
      'advanced transmission and CVT overview',
    ],
  },
  {
    id: 'epa-automotive-trends-2025',
    title:
      'The 2025 EPA Automotive Trends Report: Fuel Economy and Technology since 1975',
    organization: 'U.S. Environmental Protection Agency',
    type: 'government',
    url: 'https://www.epa.gov/system/files/documents/2026-02/420r26001.pdf',
    accessedDate: '2026-05-16',
    supports: [
      '2024 model-year transmission and powertrain trends',
      'drivetrain component definitions',
      'gasoline, diesel, BEV, PHEV, and FCEV technology context',
    ],
  },
  {
    id: 'nhtsa-transmission-technologies-2012',
    title: 'Impact of Transmission Technology on Fuel Efficiency',
    organization: 'National Highway Traffic Safety Administration',
    type: 'government',
    url: 'https://static.nhtsa.gov/nhtsa/downloads/p2017-documents/Effect_of_Transmission_Technologies-8116667.pdf',
    accessedDate: '2026-05-16',
    supports: [
      'torque-converter lockup strategy',
      'automatic, DCT, and CVT transmission modeling context',
    ],
  },
  {
    id: 'britannica-automobile-transmission',
    title: 'Automobile: Transmission',
    organization: 'Encyclopaedia Britannica',
    type: 'technical-reference',
    url: 'https://www.britannica.com/technology/automobile/Transmission',
    accessedDate: '2026-05-16',
    supports: [
      'automotive clutch and gearbox basics',
      'automatic transmission and torque-converter basics',
    ],
  },
  {
    id: 'britannica-transmission-engineering',
    title: 'Transmission',
    organization: 'Encyclopaedia Britannica',
    type: 'technical-reference',
    url: 'https://www.britannica.com/technology/transmission-engineering',
    accessedDate: '2026-05-16',
    supports: [
      'fixed and continuously variable transmission concepts',
      'variable-diameter pulley transmission basics',
    ],
  },
  {
    id: 'britannica-fluid-coupling',
    title: 'Fluid Coupling',
    organization: 'Encyclopaedia Britannica',
    type: 'technical-reference',
    url: 'https://www.britannica.com/technology/fluid-coupling',
    accessedDate: '2026-05-16',
    supports: [
      'fluid-coupling and torque-converter terminology',
      'automatic transmission coupling context',
    ],
  },
  {
    id: 'britannica-differential-gear',
    title: 'Differential Gear',
    organization: 'Encyclopaedia Britannica',
    type: 'technical-reference',
    url: 'https://www.britannica.com/technology/differential-gear',
    accessedDate: '2026-05-16',
    supports: [
      'differential purpose in automotive drivetrains',
      'wheel-speed differences while cornering',
    ],
  },
];

export function getSourceById(id: string) {
  return sources.find((source) => source.id === id);
}
