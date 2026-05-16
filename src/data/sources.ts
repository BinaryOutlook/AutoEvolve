export type SourceType =
  | 'government'
  | 'court'
  | 'technical-reference'
  | 'manufacturer'
  | 'museum'
  | 'academic'
  | 'journalism';

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
    id: 'doj-vw-criminal-sentencing-2017',
    title:
      'Volkswagen AG Sentenced in Connection with Conspiracy to Cheat U.S. Emissions Tests',
    organization: 'U.S. Department of Justice',
    type: 'government',
    url: 'https://www.justice.gov/opa/pr/volkswagen-ag-sentenced-connection-conspiracy-cheat-us-emissions-tests',
    accessedDate: '2026-05-16',
    supports: [
      'Volkswagen criminal plea and sentencing context',
      'Dieselgate criminal enforcement consequences',
    ],
  },
  {
    id: 'icct-vw-real-world-emissions-2014',
    title: 'Real-World Exhaust Emissions from Modern Diesel Cars',
    organization: 'International Council on Clean Transportation',
    type: 'technical-reference',
    url: 'https://theicct.org/sites/default/files/publications/ICCT_PEMS-study_diesel-cars_20141010.pdf',
    accessedDate: '2026-05-16',
    supports: [
      'pre-enforcement real-world diesel NOx testing context',
      'portable emissions measurement evidence that informed regulator attention',
    ],
  },
  {
    id: 'nhtsa-ford-pinto-recall-1978',
    title: 'NHTSA Recall Campaign 78V143000',
    organization: 'National Highway Traffic Safety Administration',
    type: 'government',
    url: 'https://api.nhtsa.gov/recalls/campaignNumber?campaignNumber=78V143000',
    accessedDate: '2026-05-16',
    supports: [
      '1978 Ford Pinto and Mercury Bobcat fuel-system recall details',
      'fuel filler pipe and fuel tank shield remedy description',
    ],
  },
  {
    id: 'california-court-grimshaw-ford-1981',
    title: 'Grimshaw v. Ford Motor Co.',
    organization: 'California Court of Appeal via Justia',
    type: 'court',
    url: 'https://law.justia.com/cases/california/court-of-appeal/3d/119/757.html',
    accessedDate: '2026-05-16',
    supports: [
      'civil litigation findings and appellate review of the Pinto case',
      'court-record context for design knowledge and punitive damages',
    ],
  },
  {
    id: 'business-history-pinto-safety-regulation',
    title:
      'The Ford Pinto Case and the Development of Auto Safety Regulations, 1893-1978',
    organization: 'Business and Economic History',
    type: 'academic',
    url: 'https://www.jstor.org/stable/23703151',
    accessedDate: '2026-05-16',
    supports: [
      'historical interpretation of Pinto safety regulation',
      'context for public controversy and NHTSA investigation timing',
    ],
  },
  {
    id: 'nhtsa-gm-ignition-consent-order-2014',
    title: 'TQ14-001 General Motors Consent Order',
    organization: 'National Highway Traffic Safety Administration',
    type: 'government',
    url: 'https://www.nhtsa.gov/sites/nhtsa.gov/files/2021-11/TQ14-001-General-Motors-Consent-Order-5-6-2014-tag.pdf',
    accessedDate: '2026-05-16',
    supports: [
      'NHTSA enforcement response to GM ignition switch recall timing',
      'civil penalty and reporting obligations',
    ],
  },
  {
    id: 'doj-gm-ignition-deferred-prosecution-2015',
    title:
      'Manhattan U.S. Attorney Announces Criminal Charges Against General Motors and Deferred Prosecution Agreement',
    organization: 'U.S. Department of Justice',
    type: 'government',
    url: 'https://www.justice.gov/usao-sdny/pr/manhattan-us-attorney-announces-criminal-charges-against-general-motors-and-deferred',
    accessedDate: '2026-05-16',
    supports: [
      'GM deferred-prosecution agreement context',
      'DOJ allegations about disclosure of low-torque ignition switch defect',
    ],
  },
  {
    id: 'gm-valukas-ignition-switch-report-2014',
    title:
      'Report to Board of Directors of General Motors Company Regarding Ignition Switch Recalls',
    organization: 'General Motors / Jenner & Block, archived by NHTSA',
    type: 'manufacturer',
    url: 'https://www.nhtsa.gov/document/report-board-directors-general-motors-company-regarding-ignition-switch-recalls',
    accessedDate: '2026-05-16',
    supports: [
      'GM-commissioned internal investigation findings',
      'organizational escalation and defect-decision process context',
    ],
    notes:
      'Company-commissioned investigation; used for GM internal chronology and findings while preserving regulator and DOJ findings separately.',
  },
  {
    id: 'nhtsa-takata-recall-spotlight',
    title: 'Takata Air Bag Recall Spotlight',
    organization: 'National Highway Traffic Safety Administration',
    type: 'government',
    url: 'https://www.nhtsa.gov/equipment/takata-recall-spotlight',
    accessedDate: '2026-05-16',
    supports: [
      'Takata recall scope and owner remedy context',
      'risk factors involving age, heat, and humidity',
    ],
  },
  {
    id: 'nhtsa-takata-coordinated-remedy-2015',
    title: 'Takata Coordinated Remedy Order',
    organization: 'National Highway Traffic Safety Administration',
    type: 'government',
    url: 'https://www.nhtsa.gov/document/takata-coordinated-remedy-order',
    accessedDate: '2026-05-16',
    supports: [
      'coordinated Takata remedy schedule',
      'risk-based recall prioritization across manufacturers',
    ],
  },
  {
    id: 'doj-takata-plea-2017',
    title:
      'Takata Corporation Agrees to Plead Guilty and Pay $1 Billion in Criminal Penalties for Airbag Scheme',
    organization: 'U.S. Department of Justice',
    type: 'government',
    url: 'https://www.justice.gov/opa/pr/takata-corporation-agrees-plead-guilty-and-pay-1-billion-criminal-penalties-airbag-scheme',
    accessedDate: '2026-05-16',
    supports: [
      'Takata wire-fraud plea context',
      'DOJ findings about falsified and manipulated inflator test data',
    ],
  },
  {
    id: 'dot-nhtsa-nasa-toyota-unintended-acceleration-2011',
    title:
      'U.S. Department of Transportation Releases Results from NHTSA-NASA Study of Unintended Acceleration in Toyota Vehicles',
    organization: 'U.S. Department of Transportation',
    type: 'government',
    url: 'https://www.transportation.gov/briefing-room/us-department-transportation-releases-results-nhtsa-nasa-study-unintended-acceleration',
    accessedDate: '2026-05-16',
    supports: [
      'DOT summary of NHTSA-NASA unintended-acceleration study',
      'public finding that no electronic cause for high-speed events was found',
    ],
  },
  {
    id: 'nasa-toyota-unintended-acceleration-report-2011',
    title:
      'Toyota Unintended Acceleration Investigation: Technical Support to NHTSA',
    organization: 'NASA Engineering and Safety Center',
    type: 'government',
    url: 'https://www.nhtsa.gov/document/appendix-tech-support-nhtsa-reported-toyota-motor-corporation-unintended-acceleration',
    accessedDate: '2026-05-16',
    supports: [
      'NASA technical assessment of Toyota electronic throttle control systems',
      'software and electromagnetic-interference review context',
    ],
  },
  {
    id: 'doj-toyota-unintended-acceleration-dpa-2014',
    title:
      'Manhattan U.S. Attorney Announces Criminal Charge Against Toyota Motor Corporation and Deferred Prosecution Agreement',
    organization: 'U.S. Department of Justice',
    type: 'government',
    url: 'https://www.justice.gov/usao-sdny/pr/manhattan-us-attorney-announces-criminal-charge-against-toyota-motor-corporation-and',
    accessedDate: '2026-05-16',
    supports: [
      'Toyota deferred-prosecution agreement context',
      'DOJ allegations about floor-mat entrapment and sticky-pedal communications',
    ],
  },
  {
    id: 'mitsubishi-improper-fuel-consumption-testing-2016',
    title:
      'Improper Conduct in Fuel Consumption Testing on Products Manufactured by Mitsubishi Motors Corporation',
    organization: 'Mitsubishi Motors Corporation',
    type: 'manufacturer',
    url: 'https://www.mitsubishi-motors.com/jp/publish/pressrelease_en/corporate/2016/news/detailg420.html',
    accessedDate: '2026-05-16',
    supports: [
      'Mitsubishi disclosure of improper fuel-consumption testing',
      'Japanese MLIT certification data context',
    ],
  },
  {
    id: 'mitsubishi-special-investigation-fuel-consumption-2016',
    title:
      'Special Investigation Committee Report on Fuel Consumption Testing Issues',
    organization: 'Mitsubishi Motors Corporation',
    type: 'manufacturer',
    url: 'https://www.mitsubishi-motors.com/content/dam/com/ir_jp/pdf/irnews/2016/20160802-01.pdf',
    accessedDate: '2026-05-16',
    supports: [
      'special investigation findings on Mitsubishi fuel-consumption testing',
      'internal governance and testing-process causes',
    ],
    notes:
      'Japanese-language company investigation report; article wording relies on the company record without treating it as independent regulator analysis.',
  },
  {
    id: 'mitsubishi-annual-report-fuel-economy-2016',
    title: 'Annual Report 2016',
    organization: 'Mitsubishi Motors Corporation',
    type: 'manufacturer',
    url: 'https://www.mitsubishi-motors.com/content/dam/com/ir_en/pdf/anual/2016/annual2016.pdf',
    accessedDate: '2026-05-16',
    supports: [
      'financial and governance consequences of Mitsubishi fuel-economy issue',
      'company-reported corrective action context',
    ],
  },
  {
    id: 'nissan-final-inspection-issue-2017',
    title:
      "Regarding Nonconforming Final Vehicle Inspection at Nissan's Plants in Japan",
    organization: 'Nissan Motor Corporation',
    type: 'manufacturer',
    url: 'https://www.nissan-global.com/EN/SUSTAINABILITY/SOCIAL/QUALITY/VEHICLE_INSPECTIONS/',
    accessedDate: '2026-05-16',
    supports: [
      'Nissan final-inspection issue chronology',
      'company countermeasures and links to official disclosures',
    ],
  },
  {
    id: 'nissan-final-inspection-investigation-summary-2017',
    title:
      'Report Summary of Final Vehicle Inspection Issue at Plants in Japan',
    organization: 'Nissan Motor Corporation',
    type: 'manufacturer',
    url: 'https://global.nissannews.com/en/releases/171117-02-e',
    accessedDate: '2026-05-16',
    supports: [
      'Nissan investigation summary for unauthorized final inspections',
      'causes and recurrence-prevention measures',
    ],
  },
  {
    id: 'nissan-emissions-fuel-economy-measurement-2018',
    title:
      'Report on Conformity of Production Sampling Test Data for Emissions/Fuel Consumption at Nissan',
    organization: 'Nissan Motor Corporation',
    type: 'manufacturer',
    url: 'https://www.nissan-global.com/PDF/180709_report-e.pdf',
    accessedDate: '2026-05-16',
    supports: [
      'Nissan 2018 emissions and fuel-consumption measurement disclosure',
      'altered measurement values and nonconforming test-environment context',
    ],
  },
  {
    id: 'subaru-completion-inspection-announcement-2017',
    title:
      'Statement Concerning Findings of Internal Investigation on Final Inspection of Subaru-Made Vehicles',
    organization: 'Subaru Corporation',
    type: 'manufacturer',
    url: 'https://www.subaru.co.jp/press/file/uploads/news-en/en2017_1027_1.pdf',
    accessedDate: '2026-05-16',
    supports: [
      'Subaru 2017 completion-inspection disclosure',
      'Japanese-market final inspection authorization context',
    ],
  },
  {
    id: 'subaru-completion-inspection-investigation-report-2017',
    title:
      'Investigation Report on Inappropriate Final Vehicle Inspections at Subaru',
    organization: 'Subaru Corporation',
    type: 'manufacturer',
    url: 'https://www.subaru.co.jp/press/file/uploads/news-en/en2017_1219_1-2.pdf',
    accessedDate: '2026-05-16',
    supports: [
      'Subaru 2017 investigation findings and countermeasures',
      'training, certification, and audit-control causes',
    ],
  },
  {
    id: 'subaru-emissions-fuel-economy-investigation-2018',
    title:
      "Reinvestigation of the Measurement of Fuel Economy and Emissions during Final Vehicle Inspections at Subaru's Gunma Manufacturing Division",
    organization: 'Subaru Corporation',
    type: 'manufacturer',
    url: 'https://www.subaru.co.jp/press/news-en/2018_06_05_5921/',
    accessedDate: '2026-05-16',
    supports: [
      'Subaru emissions and fuel-economy measurement issues',
      'sampling inspection and measurement-procedure context',
    ],
  },
  {
    id: 'carb-zero-emission-vehicle-regulation-history',
    title: 'Zero-emission Vehicle Regulation',
    organization: 'California Air Resources Board',
    type: 'government',
    url: 'https://ww2.arb.ca.gov/our-work/programs/zero-emission-vehicle-program/about',
    accessedDate: '2026-05-16',
    supports: [
      'California ZEV regulation history',
      '1990s regulatory context for early battery-electric programs',
    ],
  },
  {
    id: 'cbs-gm-pulls-plug-ev1-2003',
    title: 'GM Pulls Plug on Electric Car',
    organization: 'CBS News',
    type: 'journalism',
    url: 'https://www.cbsnews.com/news/gm-pulls-plug-on-electric-car/',
    accessedDate: '2026-05-16',
    supports: [
      'contemporary reporting on EV1 lease returns',
      'public controversy around ending the EV1 program',
    ],
  },
  {
    id: 'justia-us-v-delorean-1983',
    title: 'United States v. DeLorean',
    organization:
      'United States District Court for the Central District of California via Justia',
    type: 'court',
    url: 'https://law.justia.com/cases/federal/district-courts/FSupp/561/797/1894920/',
    accessedDate: '2026-05-16',
    supports: [
      'federal criminal case procedural context',
      'court-record distinction between prosecution proceedings and vehicle engineering',
    ],
  },
  {
    id: 'washington-post-delorean-acquitted-1984',
    title: 'DeLorean Acquitted of All Eight Charges in Drug-Scheme Trial',
    organization: 'The Washington Post',
    type: 'journalism',
    url: 'https://www.washingtonpost.com/archive/politics/1984/08/17/delorean-acquitted-of-all-eight-charges-in-drug-scheme-trial/3a2de886-9c81-468f-80ff-386f4e527201/',
    accessedDate: '2026-05-16',
    supports: [
      'contemporary reporting on John DeLorean acquittal',
      'trial outcome and entrapment-defense context',
    ],
  },
  {
    id: 'delorean-museum-company-history',
    title: 'DeLorean Museum',
    organization: 'DeLorean Museum',
    type: 'museum',
    url: 'https://www.deloreanmuseum.org/',
    accessedDate: '2026-05-16',
    supports: [
      'DeLorean preservation and company-history context',
      'archival framing for the DMC-12 business story',
    ],
    notes:
      'Preservation source used only for company-history context, not for independent legal conclusions.',
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
    supports: [
      'Image attribution and usage-basis record for Hyundai IONIQ 5 page',
    ],
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
  {
    id: 'vw-beetle-1945-1953-newsroom',
    title: 'Beetle (Käfer) 1100 (1945-1953)',
    organization: 'Volkswagen Newsroom',
    type: 'manufacturer',
    url: 'https://www.volkswagen-newsroom.com/en/beetle-kaefer-1100-19451953-19568',
    accessedDate: '2026-05-16',
    supports: [
      'Volkswagen Type 1 production beginning on 27 December 1945',
      'early postwar export and standard/export model context',
    ],
  },
  {
    id: 'vw-beetle-technical-through-years',
    title: 'VW Beetle Through the Years',
    organization: 'Volkswagen Newsroom',
    type: 'manufacturer',
    url: 'https://www.volkswagen-newsroom.com/en/the-volkswagen-beetle-a-success-story-2341/vw-beetle-through-the-years-2361?set_locale=true',
    accessedDate: '2026-05-16',
    supports: [
      'rear-mounted air-cooled boxer engine layout',
      'load-bearing underbody and separable body construction context',
    ],
  },
  {
    id: 'revs-lancia-lambda-1927',
    title: '1927 Lancia Lambda Torpedo Tourer',
    organization: 'Revs Institute',
    type: 'museum',
    url: 'https://museum.revsinstitute.org/the-collection/1927-lancia-lambda/',
    accessedDate: '2026-05-16',
    supports: [
      'Lancia Lambda unitary body design context',
      'independent front suspension engineering context',
    ],
  },
  {
    id: 'mauto-lancia-lambda',
    title: 'Lancia Lambda',
    organization: "MAUTO - Museo Nazionale dell'Automobile",
    type: 'museum',
    url: 'https://www.museoauto.com/en/collection/lancia-lambda/',
    accessedDate: '2026-05-16',
    supports: [
      'stamped-steel body skeleton description',
      'Lancia Lambda collection and construction context',
    ],
  },
  {
    id: 'stellantis-citroen-traction-90-years',
    title: 'Citroën Traction Avant 90th Anniversary Release',
    organization: 'Stellantis Media / Citroën',
    type: 'manufacturer',
    url: 'https://www.media.stellantis.com/me-en/citroen/press/citroen-celebrates-90-years-of-the-traction-avant-an-iconic-model-with-100-patents',
    accessedDate: '2026-05-16',
    supports: [
      'Traction Avant presentation on 18 April 1934',
      'front-wheel drive, monocoque structure, hydraulic brakes, and independent suspension context',
      'production ending in 1957',
    ],
  },
  {
    id: 'citroen-comfort-history-driving-comfort',
    title: 'The History of Citroën Comfort Episode 1: Driving Comfort',
    organization: 'Stellantis Media / Citroën UK',
    type: 'manufacturer',
    url: 'https://www.media.stellantis.com/uk-en/citroen/press/the-history-of-citroen-comfort-episode-1-driving-comfort',
    accessedDate: '2026-05-16',
    supports: [
      'Traction Avant front-wheel-drive monocoque and aerodynamic context',
      'Citroën DS hydropneumatic suspension and high-pressure hydraulic pump context',
    ],
  },
  {
    id: 'citroen-origins-ds',
    title: 'Citroën DS',
    organization: 'Citroën Origins',
    type: 'manufacturer',
    url: 'https://www.citroenorigins.com/en/cars/ds',
    accessedDate: '2026-05-16',
    supports: [
      'Citroën DS 1955 motor-show context',
      'aerodynamic line and hydropneumatic suspension overview',
    ],
  },
  {
    id: 'british-motor-museum-mini-1959',
    title: 'Austin Seven Mini Saloon',
    organization: 'British Motor Museum',
    type: 'museum',
    url: 'https://www.britishmotormuseum.co.uk/online-collections/details-page?row_id=76417800291',
    accessedDate: '2026-05-16',
    supports: [
      'Mini launch date of 26 August 1959',
      'transverse engine and front-wheel-drive small-car layout influence',
      'more than five million classic Minis built over a 41-year production life',
    ],
  },
  {
    id: 'asme-jeep-model-mb',
    title: 'Jeep Model MB',
    organization: 'American Society of Mechanical Engineers',
    type: 'technical-reference',
    url: 'https://www.asme.org/about-asme/engineering-history/landmarks/152-jeep-model-mb',
    accessedDate: '2026-05-16',
    supports: [
      'Willys MB and Ford GPW wartime production scale from 1941 to 1945',
      'engineering landmark context for the Jeep Model MB',
      'postwar civilian Jeep development context',
    ],
  },
  {
    id: 'usaf-willys-quarter-ton-jeep',
    title: 'Willys Quarter-ton Jeep',
    organization: 'National Museum of the United States Air Force',
    type: 'government',
    url: 'https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/579673/willys-quarter-ton-jeep/',
    accessedDate: '2026-05-16',
    supports: [
      '1940 Army one-quarter-ton four-wheel-drive truck bid context',
      'American Bantam, Willys-Overland, and Ford testing context',
    ],
  },
  {
    id: 'jeep-1940s-history-willys-mb',
    title: 'Willys Jeep MB 1940s History',
    organization: 'Jeep',
    type: 'manufacturer',
    url: 'https://www.jeep.com/history/1940s.html',
    accessedDate: '2026-05-16',
    supports: [
      'Willys MB heritage context',
      'July 1941 Willys-Overland production contract context',
    ],
  },
  {
    id: 'mercedes-benz-publicarchive-w116',
    title: 'S-Class Saloons of the 116 Series, 1972-1980',
    organization: 'Mercedes-Benz Public Archive',
    type: 'manufacturer',
    url: 'https://mercedes-benz-publicarchive.com/marsClassic/de/instance/ko.xhtml?oid=4862&relId=1002&resultInfoTypeId=2155',
    accessedDate: '2026-05-16',
    supports: [
      'W116 S-Class introduction and production period',
      'passive safety structure and protected fuel tank context',
      '300 SD diesel variant for USA and Canada',
      '1978 anti-lock braking system introduction with Bosch',
    ],
  },
  {
    id: 'saab-car-museum-history-99-turbo',
    title: 'The Story of Saab',
    organization: 'Saab Car Museum',
    type: 'museum',
    url: 'https://saabcarmuseum.se/en/saabs-historia/',
    accessedDate: '2026-05-16',
    supports: [
      'Saab 99 launch and model-family context',
      'Saab 99 Turbo premiere at the Frankfurt motor show in September 1977',
      'Saab 99 Turbo sales as a 1978 model',
    ],
  },
  {
    id: 'saab-99-turbo-period-brochure',
    title: '1978 Saab 99 Turbo Brochure',
    organization: 'Saab, archived by Vintage Saab Manuals',
    type: 'manufacturer',
    url: 'https://www.vintagesaabmanuals.org/uploads/1/9/1/5/19154273/1978_saab_99_turbo_brochure.pdf.pdf',
    accessedDate: '2026-05-16',
    supports: [
      'period Saab framing of turbocharging around high torque',
      'period Saab framing of turbocharging for everyday needs',
    ],
    notes:
      'Period manufacturer brochure hosted by a manual archive; used for Saab contemporaneous product framing, not independent evaluation.',
  },
  {
    id: 'audi-quattro-official-40-years',
    title: 'The Quattro Celebrates Its 40th Anniversary',
    organization: 'Audi',
    type: 'manufacturer',
    url: 'https://www.audi.com/en/innovation/product-innovation/quattro.html',
    accessedDate: '2026-05-16',
    supports: [
      'Audi quattro 1980 introduction context',
      'permanent all-wheel-drive development and Torsen transition context',
    ],
  },
  {
    id: 'audi-company-history-quattro',
    title: 'The History of AUDI AG',
    organization: 'Audi',
    type: 'manufacturer',
    url: 'https://www.audi.com/en/company/profile/audi-tradition/company-history/',
    accessedDate: '2026-05-16',
    supports: [
      'Audi quattro unveiling at the Geneva Motor Show in March 1980',
      'permanent all-wheel drive and manually lockable differential context',
    ],
  },
  {
    id: 'audi-mediacenter-quattro-40-facts',
    title: "40 Years of Audi's Quattro Technology",
    organization: 'Audi MediaCenter',
    type: 'manufacturer',
    url: 'https://www.audi-mediacenter.com/en/press-releases/40-years-40-figures-40-images-fascinating-facts-and-tales-about-audis-quattro-technology-14227',
    accessedDate: '2026-05-16',
    supports: [
      'original Audi quattro production count from 1980 to 1991',
      'five-cylinder turbo engine and rally-car context',
    ],
  },
  {
    id: 'volkswagen-phaeton-2002-2016',
    title: 'Phaeton (2002-2016)',
    organization: 'Volkswagen Newsroom',
    type: 'manufacturer',
    url: 'https://www.volkswagen-newsroom.com/en/phaeton-20022016-19707',
    accessedDate: '2026-05-16',
    supports: [
      'Volkswagen Phaeton world premiere at Geneva on 6 March 2002',
      'Transparent Factory production setting',
      'technology and comfort system ambition with more than 100 patents',
    ],
  },
  {
    id: 'volkswagen-transparent-factory-dresden',
    title: 'Volkswagen Sachsen GmbH Gläserne Manufaktur Dresden',
    organization: 'Volkswagen Newsroom',
    type: 'manufacturer',
    url: 'https://www.volkswagen-newsroom.com/en/volkswagen-sachsen-gmbh-glaeserne-manufaktur-the-transparent-factory-dresden-5906?set_locale=true',
    accessedDate: '2026-05-16',
    supports: [
      'Phaeton production at the Transparent Factory from 2001 to 2016',
      'Dresden factory production and later electric-vehicle repurposing context',
    ],
  },
  {
    id: 'volkswagen-phaeton-20-years',
    title: '20 Years of the Phaeton',
    organization: 'Volkswagen Newsroom',
    type: 'manufacturer',
    url: 'https://www.volkswagen-newsroom.com/en/press-releases/20-years-of-the-phaeton-for-the-first-time-volkswagen-shows-the-successor-that-was-never-built-8056',
    accessedDate: '2026-05-16',
    supports: [
      'Phaeton premium-segment strategy context',
      '2016 discontinuation and electric-mobility realignment context',
      'unbuilt successor project context',
    ],
  },
];

export function getSourceById(id: string) {
  return sources.find((source) => source.id === id);
}
