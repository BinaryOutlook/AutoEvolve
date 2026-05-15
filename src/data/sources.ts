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
];

export function getSourceById(id: string) {
  return sources.find((source) => source.id === id);
}
