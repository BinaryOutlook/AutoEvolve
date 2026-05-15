export type MilestoneType =
  | 'invention'
  | 'commercialization'
  | 'regulation'
  | 'controversy'
  | 'infrastructure'
  | 'manufacturing';

export type Milestone = {
  title: string;
  date: string;
  datePrecision: 'year' | 'month' | 'day' | 'approximate';
  type: MilestoneType;
  summary: string;
  links: string[];
  technologies: string[];
  vehicles: string[];
  sources: string[];
};

export const milestones: Milestone[] = [
  {
    title: 'Early gasoline automobile packaging demonstrated',
    date: '1880s',
    datePrecision: 'approximate',
    type: 'invention',
    summary:
      'Small internal combustion engines, lightweight frames, steering, and drivetrain packaging began converging into practical road vehicles.',
    links: [
      '/eras/birth-of-practical-automobile/',
      '/vehicles/benz-patent-motorwagen/',
    ],
    technologies: ['four-stroke-engine'],
    vehicles: ['benz-patent-motorwagen'],
    sources: [],
  },
  {
    title: 'High-volume automotive manufacturing expands',
    date: '1910s',
    datePrecision: 'approximate',
    type: 'manufacturing',
    summary:
      'Assembly-line production and standardization changed the scale, repairability, and public availability of automobiles.',
    links: [
      '/eras/standardization-and-mass-production/',
      '/vehicles/ford-model-t/',
    ],
    technologies: ['four-stroke-engine'],
    vehicles: ['ford-model-t'],
    sources: [],
  },
  {
    title: 'Electronic fuel and emissions control become central',
    date: '1970s-1990s',
    datePrecision: 'approximate',
    type: 'regulation',
    summary:
      'Emissions and fuel-economy pressure accelerated adoption of catalytic converters, sensors, and electronic control units.',
    links: [
      '/eras/emissions-and-electronic-control/',
      '/technologies/catalytic-converter/',
    ],
    technologies: [
      'catalytic-converter',
      'engine-control-unit',
      'fuel-injection',
    ],
    vehicles: [],
    sources: [],
  },
  {
    title: 'Mass-market hybrid vehicles enter public use',
    date: '1997',
    datePrecision: 'year',
    type: 'commercialization',
    summary:
      'Hybrid systems combined combustion engines, electric machines, batteries, and control software to recover braking energy and reduce fuel use.',
    links: [
      '/eras/hybridization/',
      '/technologies/hybrid-electric-vehicle/',
      '/vehicles/toyota-prius/',
    ],
    technologies: ['hybrid-electric-vehicle', 'regenerative-braking'],
    vehicles: ['toyota-prius'],
    sources: ['doe-afdc-hybrid'],
  },
  {
    title: 'EPA issues Volkswagen diesel emissions notice',
    date: '2015',
    datePrecision: 'year',
    type: 'controversy',
    summary:
      'U.S. regulators identified defeat-device behavior in certain Volkswagen diesel vehicles, making software-controlled emissions compliance a major public issue.',
    links: [
      '/controversies/dieselgate/',
      '/vehicles/volkswagen-tdi-dieselgate-example/',
    ],
    technologies: [
      'diesel-engine',
      'selective-catalytic-reduction',
      'engine-control-unit',
    ],
    vehicles: ['volkswagen-tdi-dieselgate-example'],
    sources: ['epa-vw-violations', 'epa-vw-settlement'],
  },
  {
    title: 'Battery electric vehicles move into wider production',
    date: '2010s',
    datePrecision: 'approximate',
    type: 'commercialization',
    summary:
      'Lithium-ion battery packs, inverters, traction motors, and charging networks supported a new generation of battery electric vehicles.',
    links: [
      '/eras/battery-electric-vehicles/',
      '/technologies/battery-electric-vehicle/',
      '/vehicles/nissan-leaf/',
    ],
    technologies: [
      'battery-electric-vehicle',
      'lithium-ion-battery',
      'ev-charging',
    ],
    vehicles: ['nissan-leaf'],
    sources: ['doe-afdc-bev'],
  },
];
