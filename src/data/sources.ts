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
    id: 'wikimedia-toyota-prius-xw11-image',
    title: 'File:1st Toyota Prius (XW11) front.jpg',
    organization: 'Wikimedia Commons',
    type: 'technical-reference',
    url: 'https://commons.wikimedia.org/wiki/File:1st_Toyota_Prius_(XW11)_front.jpg',
    accessedDate: '2026-05-16',
    supports: ['Image attribution and license record for Toyota Prius page'],
    notes:
      'Creator: Benespit. License: Creative Commons Attribution-Share Alike 4.0 International. Local file copied for site delivery.',
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

  {
    id: 'epa-nhtsa-2017-2025-technical-assessment',
    title:
      'Draft Technical Assessment Report: Midterm Evaluation of Light-Duty Vehicle Greenhouse Gas Emission Standards and Corporate Average Fuel Economy Standards for Model Years 2022-2025',
    organization:
      'U.S. Environmental Protection Agency, National Highway Traffic Safety Administration, and California Air Resources Board',
    type: 'government',
    url: 'https://www.epa.gov/sites/production/files/2016-10/documents/ldv-ghg-tar.pdf',
    accessedDate: '2026-05-16',
    supports: [
      'technical definitions for variable valve timing, variable valve lift, gasoline direct injection, turbocharging and downsizing, and cooled EGR',
      'regulatory technology-assessment context for gasoline engine efficiency packages',
    ],
  },
  {
    id: 'doe-vto-advanced-combustion-strategies',
    title: 'Advanced Combustion Strategies',
    organization: 'U.S. Department of Energy Vehicle Technologies Office',
    type: 'government',
    url: 'https://www.energy.gov/cmei/vehicles/advanced-combustion-strategies',
    accessedDate: '2026-05-16',
    supports: [
      'lean-burn and dilute gasoline combustion mechanisms',
      'EGR role in lowering combustion temperature and NOx formation',
      'direct injection and port fuel injection context for gasoline combustion strategies',
    ],
  },
  {
    id: 'doe-vto-energy-recovery-exhaust-materials',
    title:
      'Materials for Energy Recovery Systems and Controlling Exhaust Gases',
    organization: 'U.S. Department of Energy Vehicle Technologies Office',
    type: 'government',
    url: 'https://www.energy.gov/cmei/vehicles/materials-energy-recovery-systems-and-controlling-exhaust-gases',
    accessedDate: '2026-05-16',
    supports: [
      'turbocharger use of exhaust energy otherwise lost as heat',
      'thermal tradeoffs between efficient engines and exhaust aftertreatment',
    ],
  },
  {
    id: 'doe-vto-emission-control',
    title: 'Emission Control',
    organization: 'U.S. Department of Energy Vehicle Technologies Office',
    type: 'government',
    url: 'https://www.energy.gov/cmei/vehicles/emission-control',
    accessedDate: '2026-05-16',
    supports: [
      'regulated exhaust pollutant context for combustion technologies',
      'particulate-filter and lean direct-injection gasoline aftertreatment challenges',
    ],
  },
  {
    id: 'cummins-how-turbocharger-works',
    title: 'How a Turbocharger Works',
    organization: 'Cummins Inc.',
    type: 'manufacturer',
    url: 'https://www.cummins.com/en-na/components/turbochargers/how-a-turbocharger-works',
    accessedDate: '2026-05-16',
    supports: [
      'turbocharger turbine and compressor mechanism',
      'compressed intake-air role in engine power and efficiency',
    ],
    notes:
      'Manufacturer technical explainer; used for component mechanism, not product preference.',
  },
  {
    id: 'eaton-tvs-supercharger-overview',
    title: 'TVS Technology Overview',
    organization: 'Eaton',
    type: 'manufacturer',
    url: 'https://www.eaton.com/ca/en-gb/products/engine-solutions/superchargers/tvs-overview.html',
    accessedDate: '2026-05-16',
    supports: [
      'supercharger airflow control independent of exhaust energy',
      'modern Roots-type supercharger technology context',
    ],
    notes:
      'Manufacturer technical source; product claims are paraphrased cautiously and not used as rankings.',
  },
  {
    id: 'eaton-tvs-performance-automotive',
    title: 'Supercharger Boosting for High Performance Automotive Applications',
    organization: 'Eaton',
    type: 'manufacturer',
    url: 'https://www.eaton.com/us/en-us/products/engine-solutions/superchargers/TVS-technology-applications/tvs-performance-automotive.html',
    accessedDate: '2026-05-16',
    supports: [
      'automotive supercharger response and pressure-ratio context',
      'compound boosting context using turbochargers and superchargers together',
    ],
    notes:
      'Manufacturer technical source; used for mechanism and packaging context while avoiding promotional language.',
  },
  {
    id: 'sae-application-superchargers-automotive-1928',
    title: 'The Application of Superchargers to Automotive Vehicles',
    organization: 'SAE International',
    type: 'technical-reference',
    url: 'https://saemobilus.sae.org/papers/application-superchargers-automotive-vehicles-280040',
    accessedDate: '2026-05-16',
    supports: [
      'early automotive discussion of supercharging and engine downsizing tradeoffs',
      'historical context for supercharger use only when additional power is required',
    ],
  },
  {
    id: 'toyota-vvti-1995',
    title: 'Toyota Develops New VVT-i Engine Technology',
    organization: 'Toyota Motor Corporation',
    type: 'manufacturer',
    url: 'https://global.toyota/en/detail/7893162',
    accessedDate: '2026-05-16',
    supports: [
      'VVT-i historical introduction and mechanism',
      'intake valve timing, valve overlap, pumping-loss, and emissions-control context',
    ],
    notes:
      'Manufacturer technical release; used for Toyota system history and mechanism, not comparative claims.',
  },
  {
    id: 'toyota-valvematic-2007',
    title: 'Toyota Develops Next-generation Engine Valve Mechanism',
    organization: 'Toyota Motor Corporation',
    type: 'manufacturer',
    url: 'https://global.toyota/en/detail/279298',
    accessedDate: '2026-05-16',
    supports: [
      'Valvematic variable valve lift mechanism context',
      'air-intake control through valve lift and timing rather than only throttle position',
    ],
    notes:
      'Manufacturer technical release; used for mechanism and timing context, not product evaluation.',
  },
  {
    id: 'honda-b16a-vtec-technology',
    title:
      "B16A: Honda's Innovative Engine with VTEC World-First Variable Valve Timing and Lift Technology",
    organization: 'Honda Motor Co., Ltd.',
    type: 'manufacturer',
    url: 'https://global.honda/en/tech/engine/car/B16A_integra_vtec/',
    accessedDate: '2026-05-16',
    supports: [
      'VTEC variable valve timing and lift mechanism',
      'cam-profile switching and representative 1989 production context',
    ],
    notes:
      'Manufacturer technical history; used for mechanism and chronology while avoiding promotional framing.',
  },
  {
    id: 'bosch-gasoline-port-fuel-injection',
    title: 'Gasoline Port Fuel Injection',
    organization: 'Bosch Mobility',
    type: 'manufacturer',
    url: 'https://www.bosch-mobility.com/en/solutions/powertrain/gasoline/gasoline-port-fuel-injection/',
    accessedDate: '2026-05-16',
    supports: [
      'port fuel injection mixture formation in the intake manifold',
      'fuel rail, injector, ECU, air-management, ignition, and lambda-control components',
    ],
    notes:
      'Supplier technical source; used for system description, not market preference.',
  },
  {
    id: 'doe-fotw-gdi-2021',
    title:
      'FOTW #1178: Gasoline Direct Injection was Installed on 55% of all Light-Duty Vehicles Produced in 2020',
    organization: 'U.S. Department of Energy Vehicle Technologies Office',
    type: 'government',
    url: 'https://www.energy.gov/cmei/vehicles/articles/fotw-1178-march-22-2021-gasoline-direct-injection-was-installed-55-all-light',
    accessedDate: '2026-05-16',
    supports: [
      'gasoline direct injection definition and light-duty production adoption context',
      'GDI first broad market appearance and 2020 adoption share based on EPA Automotive Trends data',
    ],
  },
  {
    id: 'bosch-di-motronic-2000',
    title: 'Gasoline Direct Injection System (DI-Motronic), 2000',
    organization: 'Bosch Media Service',
    type: 'manufacturer',
    url: 'https://www.bosch-presse.de/pressportal/de/en/gasoline-direct-injection-system-di-motronic-2000-60556.html',
    accessedDate: '2026-05-16',
    supports: [
      'Bosch gasoline direct injection historical context',
      'Mercedes-Benz 300 SL direct-injection reference and 2000 DI-Motronic context',
    ],
    notes:
      'Supplier historical source; used for chronology and system context, not independent evaluation.',
  },
  {
    id: 'doe-afdc-electric-batteries',
    title: 'Batteries for Electric Vehicles',
    organization: 'U.S. Department of Energy Alternative Fuels Data Center',
    type: 'government',
    url: 'https://afdc.energy.gov/vehicles/electric-batteries',
    accessedDate: '2026-05-16',
    supports: [
      'lithium-ion, nickel-metal hydride, and lead-acid battery comparison',
      'electric-drive vehicle energy storage context',
      'battery recycling and second-use context',
    ],
  },
  {
    id: 'doe-vto-batteries',
    title: 'Batteries',
    organization: 'U.S. Department of Energy Vehicle Technologies Office',
    type: 'government',
    url: 'https://www.energy.gov/cmei/vehicles/batteries',
    accessedDate: '2026-05-16',
    supports: [
      'Vehicle Technologies Office battery research goals',
      'nickel-metal hydride battery role in first-generation hybrids',
      'battery performance, cost, durability, and abuse-tolerance framing',
    ],
  },
  {
    id: 'doe-next-generation-batteries',
    title: 'Breaking It Down: Next-Generation Batteries',
    organization:
      'U.S. Department of Energy Advanced Materials and Manufacturing Technologies Office',
    type: 'government',
    url: 'https://www.energy.gov/cmei/ammto/breaking-it-down-next-generation-batteries',
    accessedDate: '2026-05-16',
    supports: [
      'solid-state battery basic construction and potential benefits',
      'next-generation battery manufacturing and application context',
    ],
  },
  {
    id: 'doe-solid-state-flow-manufacturing-2023',
    title:
      'Department of Energy Announces $16 Million to Boost Domestic Capabilities in Solid-State and Flow Battery Manufacturing',
    organization:
      'U.S. Department of Energy Advanced Materials and Manufacturing Technologies Office',
    type: 'government',
    url: 'https://www.energy.gov/cmei/ammto/articles/department-energy-announces-16-million-boost-domestic-capabilities-solid-state',
    accessedDate: '2026-05-16',
    supports: [
      'solid-state battery manufacturing scale-up barriers',
      'large-format solid-state cell production and commercialization context',
    ],
    notes:
      'Funding announcement used for manufacturing-readiness context, not as proof of broad production adoption.',
  },
  {
    id: 'doe-vto-electric-drive-systems',
    title: 'Electric Drive Systems Research and Development',
    organization: 'U.S. Department of Energy Vehicle Technologies Office',
    type: 'government',
    url: 'https://www.energy.gov/cmei/vehicles/electric-drive-systems-research-and-development',
    accessedDate: '2026-05-16',
    supports: [
      'electric motor, inverter, boost converter, and onboard charger roles',
      'electric-drive cost, weight, volume, efficiency, reliability, and integration priorities',
    ],
  },
  {
    id: 'doe-vto-power-electronics-rd',
    title: 'Power Electronics Research and Development',
    organization: 'U.S. Department of Energy Vehicle Technologies Office',
    type: 'government',
    url: 'https://www.energy.gov/cmei/vehicles/power-electronics-research-and-development',
    accessedDate: '2026-05-16',
    supports: [
      'inverter role converting battery DC to motor AC',
      'DC/DC converter and onboard charger context',
      'wide-bandgap power electronics and thermal packaging constraints',
    ],
  },
  {
    id: 'doe-vto-electric-motors-rd',
    title: 'Electric Motors Research and Development',
    organization: 'U.S. Department of Energy Vehicle Technologies Office',
    type: 'government',
    url: 'https://www.energy.gov/cmei/vehicles/electric-motors-research-and-development',
    accessedDate: '2026-05-16',
    supports: [
      'electric motor rotor and stator basics',
      'internal permanent magnet motor advantages and rare-earth constraints',
      'induction motor reliability, starting torque, efficiency, and power-density tradeoffs',
    ],
  },
  {
    id: 'epa-2022-2025-ldv-ghg-tsd-mild-hybrids',
    title:
      'Proposed Determination on the Appropriateness of the Model Year 2022-2025 Light-Duty Vehicle Greenhouse Gas Emissions Standards under the Midterm Evaluation: Technical Support Document',
    organization: 'U.S. Environmental Protection Agency',
    type: 'government',
    url: 'https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P100Q3L4.TXT',
    accessedDate: '2026-05-16',
    supports: [
      'mild hybrid functions including limited launch assist, regeneration, and stop-start capability',
      'belt integrated, crank integrated, and transmission integrated starter-generator architecture context',
    ],
  },
  {
    id: 'sae-bisg-mild-hybrid-2014',
    title:
      'Specification and Design of a Switched Reluctance 48 V Belt Integrated Starter Generator (B-ISG) for Mild Hybrid Passenger Car Applications',
    organization: 'SAE International',
    type: 'technical-reference',
    url: 'https://saemobilus.sae.org/papers/specification-design-a-switched-reluctance-48-v-belt-integrated-starter-generator-b-isg-mild-hybrid-passenger-car-applications-2014-01-1890',
    accessedDate: '2026-05-16',
    supports: [
      '48 V belt integrated starter generator passenger-car design context',
      'mild hybrid architecture variation and commonality tradeoffs',
    ],
    notes:
      'SAE abstract and citation page used for high-level technical context; detailed paper content may require access.',
  },
  {
    id: 'ornl-axial-flux-ev-comparison-2023',
    title:
      'A Comparison of Outer Rotor Radial and Axial Flux Machines for Application in Electric Vehicles',
    organization: 'Oak Ridge National Laboratory',
    type: 'academic',
    url: 'https://www.ornl.gov/publication/comparison-outer-rotor-radial-and-axial-flux-machines-application-electric-vehicles',
    accessedDate: '2026-05-16',
    supports: [
      'axial flux and radial flux machine comparison for electric vehicles',
      'high-torque low-weight candidate framing for axial flux machines',
    ],
  },
  {
    id: 'ornl-axial-flux-review-2023',
    title: 'A Review of Axial Flux Permanent Magnet Machine Technology',
    organization: 'Oak Ridge National Laboratory',
    type: 'academic',
    url: 'https://impact.ornl.gov/en/publications/a-review-of-axial-flux-permanent-magnet-machine-technology',
    accessedDate: '2026-05-16',
    supports: [
      'axial flux permanent magnet machine geometry and application context',
      'manufacturing, sizing, flux weakening, and thermal-management research issues',
    ],
  },
  {
    id: 'nrel-edv-thermal-management',
    title: 'Electric-Drive Vehicle Thermal Management',
    organization: 'National Renewable Energy Laboratory',
    type: 'government',
    url: 'https://www.nrel.gov/transportation/electric-drive-vehicle-thermal-management',
    accessedDate: '2026-05-16',
    supports: [
      'electric-drive vehicle cabin and component thermal-load context',
      'range impact from climate-control energy use',
      'benefits of combining thermal-management loops in electrified vehicles',
    ],
  },
  {
    id: 'doe-vto-thermal-control-system-integration',
    title: 'Thermal Control & System Integration',
    organization: 'U.S. Department of Energy Vehicle Technologies Office',
    type: 'government',
    url: 'https://www.energy.gov/cmei/vehicles/thermal-control-system-integration',
    accessedDate: '2026-05-16',
    supports: [
      'power electronics and electric machine thermal-control requirements',
      'dedicated coolant loops and higher-temperature coolant research context',
      'integrated inverter and motor system thermal-management goals',
    ],
  },
  {
    id: 'doe-bev-cold-ambient-performance-2024',
    title:
      'Program Record: Impact of Cold Ambient Temperatures and Extreme Conditions on Electric Vehicles',
    organization: 'U.S. Department of Energy Vehicle Technologies Office',
    type: 'government',
    url: 'https://www.energy.gov/sites/default/files/2024-10/Impact_of_Cold_Ambient_Temperature_on_BEV_Performance_v15_TechEditFinal_12Sep2024__0.pdf',
    accessedDate: '2026-05-16',
    supports: [
      'battery and cabin thermal-management effects on cold-weather BEV range',
      'heat pump efficiency and extreme-cold limitations',
      'preconditioning and battery heater context',
    ],
  },
  {
    id: 'nrel-ev-heat-pump-frost-2021',
    title:
      'Superhydrophobic Heat Exchangers Delay Frost Formation and Enhance Efficency of Electric Vehicle Heat Pumps',
    organization: 'National Renewable Energy Laboratory',
    type: 'academic',
    url: 'https://research-hub.nrel.gov/en/publications/superhydrophobic-heat-exchangers-delay-frost-formation-and-enhanc/',
    accessedDate: '2026-05-16',
    supports: [
      'automotive heat pump frost and defrosting constraints',
      'air-source heat pump replacement of resistive heating for cabin heating efficiency context',
    ],
  },

  {
    id: 'doe-afdc-electricity-stations',
    title: 'Electric Vehicle Charging Stations',
    organization: 'U.S. Department of Energy Alternative Fuels Data Center',
    type: 'government',
    url: 'https://afdc.energy.gov/fuels/electricity-stations',
    accessedDate: '2026-05-16',
    supports: [
      'EV charging level and connector definitions',
      'DC fast charging power and connector context',
      'charging-time factors including internal charger capacity',
    ],
  },
  {
    id: 'charin-ccs-technology',
    title: 'Technology',
    organization: 'Charging Interface Initiative e.V. (CharIN)',
    type: 'technical-reference',
    url: 'https://www.charin.global/technology/',
    accessedDate: '2026-05-16',
    supports: [
      'Combined Charging System architecture overview',
      'CCS implementation guidance and standards relationship context',
    ],
  },
  {
    id: 'charin-ccs-specification',
    title: 'CCS Specification',
    organization: 'Charging Interface Initiative e.V. (CharIN)',
    type: 'technical-reference',
    url: 'https://www.charin.global/technology/ccs-specification/',
    accessedDate: '2026-05-16',
    supports: [
      'CCS technical-document set context',
      'implementation guide and design guide availability',
    ],
  },
  {
    id: 'dot-fhwa-nevi-standards-final-rule-2023',
    title:
      'National Electric Vehicle Infrastructure Standards and Requirements',
    organization:
      'U.S. Department of Transportation / Federal Highway Administration',
    type: 'government',
    url: 'https://www.transportation.gov/regulations/federal-register-documents/2023-03500',
    accessedDate: '2026-05-16',
    supports: [
      'NEVI minimum standards and requirements final rule context',
      'federally funded EV charging interoperability, data, network connectivity, and public-information requirements',
    ],
  },
  {
    id: 'doe-femp-bidirectional-charging-mobile-storage',
    title: 'Bidirectional Charging and Electric Vehicles for Mobile Storage',
    organization: 'U.S. Department of Energy Federal Energy Management Program',
    type: 'government',
    url: 'https://www.energy.gov/cmei/femp/bidirectional-charging-and-electric-vehicles-mobile-storage',
    accessedDate: '2026-05-16',
    supports: [
      'bidirectional EV charging definition',
      'vehicle-to-building and vehicle-to-grid use cases',
      'resilience and demand-response context',
    ],
  },
  {
    id: 'nrel-electric-vehicle-grid-integration',
    title: 'Electric Vehicle Grid Integration',
    organization: 'National Renewable Energy Laboratory',
    type: 'government',
    url: 'https://www.nrel.gov/transportation/project-ev-grid-integration',
    accessedDate: '2026-05-16',
    supports: [
      'EV and facility integration with the larger utility grid',
      'charging-infrastructure grid-impact and control-solution context',
    ],
  },
  {
    id: 'iso-15118-1-2019',
    title:
      'ISO 15118-1:2019 Road vehicles — Vehicle to grid communication interface — Part 1: General information and use-case definition',
    organization: 'International Organization for Standardization',
    type: 'technical-reference',
    url: 'https://www.iso.org/standard/69113.html',
    accessedDate: '2026-05-16',
    supports: [
      'vehicle-to-grid communication interface scope',
      'charging and discharging use cases between EV and supply equipment',
      'identification, payment, cybersecurity, and load-levelling communication context',
    ],
  },
  {
    id: 'bosch-abs-history',
    title:
      "Safe Braking: Start of developing Bosch's anti-lock braking system ABS",
    organization: 'Bosch Global',
    type: 'manufacturer',
    url: 'https://www.bosch.com/stories/beginnings-of-abs/',
    accessedDate: '2026-05-16',
    supports: [
      'Bosch ABS development history',
      '1978 ABS 2 production-ready electronic ABS context',
      'anti-lock braking mechanism and steering-control explanation',
    ],
    notes:
      'Manufacturer history source; used for Bosch development chronology and system description, not independent safety-effectiveness claims.',
  },
  {
    id: 'bosch-esp-history',
    title: 'Preventing skidding: The Electronic Stability Program ESP®',
    organization: 'Bosch Global',
    type: 'manufacturer',
    url: 'https://www.bosch.com/stories/the-electronic-stability-program-esp/',
    accessedDate: '2026-05-16',
    supports: [
      'electronic stability program development context',
      'relationship between ABS and stability control',
      'yaw-rate and steering-angle comparison explanation',
    ],
    notes:
      'Manufacturer history source; regulatory claims are supported separately by NHTSA records.',
  },
  {
    id: 'nhtsa-fmvss-126-final-rule-2007',
    title:
      'Federal Motor Vehicle Safety Standards; Electronic Stability Control Systems; Controls and Displays',
    organization: 'National Highway Traffic Safety Administration',
    type: 'government',
    url: 'https://www.nhtsa.gov/document/final-rule-federal-motor-vehicle-safety-standards-electronic-stability-control-systems-0',
    accessedDate: '2026-05-16',
    supports: [
      'FMVSS No. 126 final rule context',
      'ESC definition using automatic computer-controlled individual-wheel braking',
      'light-vehicle ESC phase-in and regulatory history',
    ],
  },
  {
    id: 'nhtsa-fmvss-126-test-procedure-2011',
    title:
      'Laboratory Test Procedure for FMVSS 126 Electronic Stability Control Systems',
    organization: 'National Highway Traffic Safety Administration',
    type: 'government',
    url: 'https://www.nhtsa.gov/document/laboratory-test-procedure-fmvss-126-03-electronic-stability-control-systems',
    accessedDate: '2026-05-16',
    supports: [
      'FMVSS No. 126 compliance-test procedure context',
      'ESC telltale, mode, stability, and lateral displacement testing context',
    ],
  },
  {
    id: 'nhtsa-driver-assistance-shoppers-guide-2018',
    title: 'Vehicle Shopper’s Guide: Driver Assistance Technologies',
    organization: 'National Highway Traffic Safety Administration',
    type: 'government',
    url: 'https://www.nhtsa.gov/document/driver-assistance-technologies-vehicle-shoppers-guide',
    accessedDate: '2026-05-16',
    supports: [
      'adaptive cruise control definition',
      'driver assistance technology boundaries',
      'human-driver responsibility framing',
    ],
  },
  {
    id: 'nhtsa-automated-vehicle-safety',
    title: 'Automated Vehicle Safety',
    organization: 'National Highway Traffic Safety Administration',
    type: 'government',
    url: 'https://www.nhtsa.gov/vehicle-safety/automated-vehicles-safety',
    accessedDate: '2026-05-16',
    supports: [
      'NHTSA automation-level framing',
      'adaptive cruise control as Level 1 driver assistance example',
      'driver attention and responsibility context',
    ],
  },
  {
    id: 'iihs-advanced-driver-assistance',
    title: 'Advanced Driver Assistance',
    organization: 'Insurance Institute for Highway Safety',
    type: 'technical-reference',
    url: 'https://www.iihs.org/research-areas/advanced-driver-assistance',
    accessedDate: '2026-05-16',
    supports: [
      'adaptive cruise control and lane-centering automation-level distinctions',
      'driver monitoring and engagement context for partial automation',
    ],
  },
  {
    id: 'bosch-acc-history',
    title: 'A quarter of a century of ACC adaptive cruise control',
    organization: 'Bosch Global',
    type: 'manufacturer',
    url: 'https://www.bosch.com/stories/beginnings-of-the-bosch-acc/',
    accessedDate: '2026-05-16',
    supports: [
      'radar-based adaptive cruise control development history',
      'ACC mechanism using vehicle detection, speed estimation, braking, and accelerating',
      'sensor edge-case context from Bosch development history',
    ],
    notes:
      'Manufacturer history source; used for Bosch ACC chronology and technical description while avoiding promotional conclusions.',
  },
  {
    id: 'bosch-can-history',
    title: 'Data network for the car: The Controller Area Network CAN',
    organization: 'Bosch Global',
    type: 'manufacturer',
    url: 'https://www.bosch.com/stories/the-controller-area-network/',
    accessedDate: '2026-05-16',
    supports: [
      'Bosch CAN development history',
      'vehicle wiring and ECU communication context',
      '1985 initial patent context',
    ],
    notes:
      'Manufacturer history source; standards details are supported separately by ISO records.',
  },
  {
    id: 'can-cia-can-history',
    title: 'History of CAN technology',
    organization: 'CAN in Automation (CiA)',
    type: 'technical-reference',
    url: 'https://www.can-cia.org/can-knowledge/history-of-can-technology',
    accessedDate: '2026-05-16',
    supports: [
      '1986 SAE congress introduction of CAN',
      'CAN technology historical timeline',
    ],
  },
  {
    id: 'iso-11898-1-2024',
    title:
      'ISO 11898-1:2024 Road vehicles — Controller area network (CAN) — Part 1: Data link layer and physical coding sublayer',
    organization: 'International Organization for Standardization',
    type: 'technical-reference',
    url: 'https://www.iso.org/standard/86384.html',
    accessedDate: '2026-05-16',
    supports: [
      'current ISO 11898-1 CAN data link layer and physical coding sublayer scope',
      'CAN XL data field context and standards status',
    ],
  },
  {
    id: 'epa-dpf-operation-maintenance',
    title:
      'Technical Bulletin: Diesel Particulate Filter Operation and Maintenance',
    organization: 'U.S. Environmental Protection Agency',
    type: 'government',
    url: 'https://www.epa.gov/sites/default/files/2016-03/documents/420f10027.pdf',
    accessedDate: '2026-05-16',
    supports: [
      'diesel particulate filter soot trapping and regeneration overview',
      'backpressure monitoring, ash buildup, and periodic cleaning context',
    ],
  },
  {
    id: 'doe-afdc-diesel-vehicle',
    title: 'How Do Diesel Vehicles Work?',
    organization: 'U.S. Department of Energy Alternative Fuels Data Center',
    type: 'government',
    url: 'https://afdc.energy.gov/vehicles/how-do-diesel-cars-work',
    accessedDate: '2026-05-16',
    supports: [
      'light-duty diesel vehicle component overview',
      'diesel aftertreatment path including DPF, diesel oxidation catalyst, DEF, and SCR',
    ],
  },
  {
    id: 'bosch-lambda-sensor-history',
    title: 'Sensing the Adequate Mixture - The Bosch Lambda Sensor',
    organization: 'Bosch Global',
    type: 'manufacturer',
    url: 'https://www.bosch.com/stories/40-years-of-bosch-lambda-sensor/',
    accessedDate: '2026-05-16',
    supports: [
      'Bosch lambda sensor development and 1976 series-production context',
      'relationship between lambda sensing and three-way catalyst operation',
    ],
    notes:
      'Manufacturer history source; used for Bosch development chronology and technology framing, not for independent emissions-performance claims.',
  },
  {
    id: 'bosch-switching-lambda-sensor',
    title: 'Switching-Type Lambda Sensor',
    organization: 'Bosch Mobility',
    type: 'manufacturer',
    url: 'https://www.bosch-mobility.com/en/solutions/sensors/switching-type-lambda-sensor/',
    accessedDate: '2026-05-16',
    supports: [
      'oxygen-content measurement for engine-control air-fuel feedback',
      'stoichiometric switching behavior and OBD/emissions-control context',
    ],
  },
  {
    id: 'carb-obd-ii-fact-sheet',
    title: 'On-Board Diagnostic II (OBD II) Systems Fact Sheet',
    organization: 'California Air Resources Board',
    type: 'government',
    url: 'https://ww2.arb.ca.gov/resources/fact-sheets/board-diagnostic-ii-obd-ii-systems-fact-sheet',
    accessedDate: '2026-05-16',
    supports: [
      'OBD II purpose and hardware/software monitoring explanation',
      'malfunction indicator lamp and repair-information context',
    ],
  },
  {
    id: 'epa-obd-final-rule-1998',
    title:
      'Final Rule for Control of Air Pollution From Motor Vehicles and New Motor Vehicle Engines; Modification of Federal Onboard Diagnostic Regulations',
    organization: 'U.S. Environmental Protection Agency',
    type: 'government',
    url: 'https://www.epa.gov/regulations-emissions-vehicles-and-engines/final-rule-control-air-pollution-motor-vehicles-and-new',
    accessedDate: '2026-05-16',
    supports: [
      'federal OBD rule harmonization with California OBD II requirements',
      'emission-control system evaluation and federal certification context',
    ],
  },
  {
    id: 'carb-in-use-compliance-testing',
    title: 'In-Use Compliance Testing',
    organization: 'California Air Resources Board',
    type: 'government',
    url: 'https://ww2.arb.ca.gov/overview-use-compliance-testing',
    accessedDate: '2026-05-16',
    supports: [
      'in-use emissions compliance context',
      'regulatory link between certification, monitored operation, and field performance',
    ],
  },
  {
    id: 'bosch-hotfilm-air-mass-meter',
    title: 'Hot-Film Air-Mass Meter',
    organization: 'Bosch Mobility',
    type: 'manufacturer',
    url: 'https://www.bosch-mobility.com/en/solutions/sensors/hotfilm-airflow-sensor/',
    accessedDate: '2026-05-16',
    supports: [
      'hot-film air-mass measurement principle',
      'relationship between measured air mass, fuel quantity, and engine-control input',
    ],
  },
  {
    id: 'sae-engine-mass-air-flow-meter-1976',
    title: 'An Engine Mass Air Flow Meter',
    organization: 'SAE International',
    type: 'technical-reference',
    url: 'https://doi.org/10.4271/760017',
    accessedDate: '2026-05-16',
    supports: [
      '1970s technical context for engine mass-air-flow measurement',
      'historical placement of air-mass sensing in electronic engine control',
    ],
  },
  {
    id: 'sae-automotive-engine-control-sensor-1978',
    title:
      'A Worldwide Overview of Automotive Engine Control Sensor Technology',
    organization: 'SAE International',
    type: 'technical-reference',
    url: 'https://doi.org/10.4271/780207',
    accessedDate: '2026-05-16',
    supports: [
      'engine-control sensor categories including mass air flow and oxygen sensing',
      'late-1970s sensor-development context for electronic engine management',
    ],
  },
  {
    id: 'bosch-knock-sensor',
    title: 'Knock Sensor',
    organization: 'Bosch Mobility',
    type: 'manufacturer',
    url: 'https://www.bosch-mobility.com/en/solutions/sensors/knock-sensor',
    accessedDate: '2026-05-16',
    supports: [
      'piezoelectric knock-sensor structure-borne noise measurement principle',
      'ECU ignition-timing response to knocking signals',
    ],
  },
  {
    id: 'sae-knock-detector-boost-control-1980',
    title: 'Knock Detector System Controlling Turbocharger Boost Pressure',
    organization: 'SAE International',
    type: 'technical-reference',
    url: 'https://doi.org/10.4271/800833',
    accessedDate: '2026-05-16',
    supports: [
      'Saab turbocharged-engine knock detector and boost-control example',
      'historical use of knock feedback to manage charge pressure',
    ],
  },
  {
    id: 'sae-combustion-knock-sensing-1990',
    title: 'Combustion Knock Sensing: Sensor Selection and Application Issues',
    organization: 'SAE International',
    type: 'technical-reference',
    url: 'https://doi.org/10.4271/900488',
    accessedDate: '2026-05-16',
    supports: [
      'knock-sensor selection, placement, and application pitfalls',
      'production knock-sensing methodology and vibration-sensing context',
    ],
  },
  {
    id: 'bosch-electronic-throttle-valve',
    title:
      'Electronic Throttle Valve for Passenger Cars and Light Commercial Vehicles',
    organization: 'Bosch Mobility',
    type: 'manufacturer',
    url: 'https://www.bosch-mobility.com/en/solutions/air-management/electronic-throttle-valve/',
    accessedDate: '2026-05-16',
    supports: [
      'electronic throttle-valve actuator and position-feedback architecture',
      'air-mass regulation and torque-influencing system inputs',
    ],
  },
  {
    id: 'bosch-accelerator-pedal-module',
    title: 'Accelerator-Pedal Module',
    organization: 'Bosch Mobility',
    type: 'manufacturer',
    url: 'https://www.bosch-mobility.com/en/solutions/air-management/accelerator-pedal-module/',
    accessedDate: '2026-05-16',
    supports: [
      'accelerator-pedal position sensing as driver torque-request input',
      'pedal module sensor construction and engine-management signal role',
    ],
  },
  {
    id: 'sae-electronic-throttle-control-1991',
    title:
      'The Development of an Automotive Drive-By-Wire Throttle System as a Research Tool',
    organization: 'SAE International',
    type: 'technical-reference',
    url: 'https://doi.org/10.4271/910081',
    accessedDate: '2026-05-16',
    supports: [
      'early automotive drive-by-wire throttle research architecture',
      'pedal demand mapping, throttle-position control, and safety-circuit context',
    ],
  },
  {
    id: 'nhtsa-toyota-etc-technical-assessment',
    title:
      'Technical Assessment of Toyota Electronic Throttle Control (ETC) Systems',
    organization: 'National Highway Traffic Safety Administration',
    type: 'government',
    url: 'https://static.nhtsa.gov/odi/inv/2014/INRP-DP14003-61485.pdf',
    accessedDate: '2026-05-16',
    supports: [
      'electronic throttle control safety assessment context',
      'NHTSA-NASA review framework for unintended-acceleration investigations',
    ],
  },
  {
    id: 'doe-afdc-idle-reduction-research',
    title: 'Idle Reduction Research and Development',
    organization: 'U.S. Department of Energy Alternative Fuels Data Center',
    type: 'government',
    url: 'https://afdc.energy.gov/conserve/idle-reduction-research',
    accessedDate: '2026-05-16',
    supports: [
      'idling versus stopping-and-restarting fuel and emissions context',
      'starter and battery wear considerations for idle reduction',
    ],
  },
];

export function getSourceById(id: string) {
  return sources.find((source) => source.id === id);
}
