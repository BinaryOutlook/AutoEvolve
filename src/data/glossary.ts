export type GlossaryTerm = {
  term: string;
  slug: string;
  definition: string;
  relatedTechnologies: string[];
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'Aftertreatment',
    slug: 'aftertreatment',
    definition: 'Exhaust-system hardware that chemically or physically reduces pollutants after combustion.',
    relatedTechnologies: ['catalytic-converter', 'selective-catalytic-reduction'],
  },
  {
    term: 'Battery management system',
    slug: 'battery-management-system',
    definition: 'Electronics and software that monitor, protect, balance, and estimate the state of a traction battery pack.',
    relatedTechnologies: ['battery-management-system'],
  },
  {
    term: 'Carburetor',
    slug: 'carburetor',
    definition: 'A mechanical device that meters fuel into intake air before electronic fuel injection became dominant.',
    relatedTechnologies: ['carburetor'],
  },
  {
    term: 'Catalytic converter',
    slug: 'catalytic-converter',
    definition: 'An exhaust device that uses catalyst materials to convert selected pollutants into less harmful compounds.',
    relatedTechnologies: ['catalytic-converter'],
  },
  {
    term: 'Compression ignition',
    slug: 'compression-ignition',
    definition: 'Ignition caused by heat from compressed air, most closely associated with diesel engines.',
    relatedTechnologies: ['diesel-engine'],
  },
  {
    term: 'DC fast charging',
    slug: 'dc-fast-charging',
    definition: 'Charging that supplies direct current to an EV battery pack through offboard power electronics.',
    relatedTechnologies: ['ev-charging'],
  },
  {
    term: 'Defeat device',
    slug: 'defeat-device',
    definition: 'A regulated concept for hardware or software that reduces emissions-control effectiveness under certain conditions.',
    relatedTechnologies: ['engine-control-unit', 'selective-catalytic-reduction'],
  },
  {
    term: 'Diesel particulate filter',
    slug: 'diesel-particulate-filter',
    definition: 'A filter that traps soot particles from diesel exhaust and periodically regenerates by oxidizing accumulated material.',
    relatedTechnologies: ['diesel-engine'],
  },
  {
    term: 'Electric traction motor',
    slug: 'electric-traction-motor',
    definition: 'An electric machine that converts electrical energy into mechanical torque for vehicle propulsion.',
    relatedTechnologies: ['battery-electric-vehicle', 'hybrid-electric-vehicle'],
  },
  {
    term: 'Engine control unit',
    slug: 'engine-control-unit',
    definition: 'A computer that uses sensor inputs and calibration data to control fuel, ignition, boost, and emissions systems.',
    relatedTechnologies: ['engine-control-unit'],
  },
  {
    term: 'Exhaust gas recirculation',
    slug: 'exhaust-gas-recirculation',
    definition: 'A system that routes a controlled portion of exhaust gas back into the intake to reduce combustion temperature and NOx formation.',
    relatedTechnologies: ['diesel-engine'],
  },
  {
    term: 'Four-stroke cycle',
    slug: 'four-stroke-cycle',
    definition: 'An engine cycle with intake, compression, power, and exhaust strokes completed across two crankshaft revolutions.',
    relatedTechnologies: ['four-stroke-engine'],
  },
  {
    term: 'Hybrid electric vehicle',
    slug: 'hybrid-electric-vehicle',
    definition: 'A vehicle that combines an internal combustion engine, electric machine, battery, and control system for propulsion.',
    relatedTechnologies: ['hybrid-electric-vehicle'],
  },
  {
    term: 'Inverter',
    slug: 'inverter',
    definition: 'Power electronics that convert battery direct current into controlled alternating current for an electric motor.',
    relatedTechnologies: ['battery-electric-vehicle'],
  },
  {
    term: 'Lean combustion',
    slug: 'lean-combustion',
    definition: 'Combustion with more air than the chemically ideal amount required to burn the fuel.',
    relatedTechnologies: ['diesel-engine'],
  },
  {
    term: 'Lithium-ion battery',
    slug: 'lithium-ion-battery',
    definition: 'A rechargeable battery family widely used in modern electric-drive vehicles because of its energy density and cycle performance.',
    relatedTechnologies: ['lithium-ion-battery'],
  },
  {
    term: 'NOx',
    slug: 'nox',
    definition: 'Nitrogen oxides formed during combustion, especially at high temperatures and oxygen availability.',
    relatedTechnologies: ['selective-catalytic-reduction', 'diesel-engine'],
  },
  {
    term: 'On-board charger',
    slug: 'on-board-charger',
    definition: 'Vehicle hardware that converts external AC electricity into DC electricity suitable for charging the traction battery.',
    relatedTechnologies: ['ev-charging'],
  },
  {
    term: 'Plug-in hybrid electric vehicle',
    slug: 'plug-in-hybrid-electric-vehicle',
    definition: 'A hybrid vehicle with a traction battery that can be recharged from an external electrical source.',
    relatedTechnologies: ['plug-in-hybrid-electric-vehicle'],
  },
  {
    term: 'Power split',
    slug: 'power-split',
    definition: 'A hybrid architecture that blends mechanical and electrical power paths, often through a planetary gearset.',
    relatedTechnologies: ['hybrid-electric-vehicle'],
  },
  {
    term: 'Regenerative braking',
    slug: 'regenerative-braking',
    definition: 'A braking strategy that uses an electric machine as a generator to recover some vehicle kinetic energy.',
    relatedTechnologies: ['regenerative-braking'],
  },
  {
    term: 'Selective catalytic reduction',
    slug: 'selective-catalytic-reduction',
    definition: 'An exhaust aftertreatment process that uses a reductant to convert NOx into nitrogen and water over a catalyst.',
    relatedTechnologies: ['selective-catalytic-reduction'],
  },
  {
    term: 'Spark ignition',
    slug: 'spark-ignition',
    definition: 'Ignition initiated by a spark plug, commonly associated with gasoline engines.',
    relatedTechnologies: ['four-stroke-engine'],
  },
  {
    term: 'State of charge',
    slug: 'state-of-charge',
    definition: 'An estimate of how much usable energy remains in a battery relative to its current capacity.',
    relatedTechnologies: ['battery-management-system'],
  },
  {
    term: 'Thermal efficiency',
    slug: 'thermal-efficiency',
    definition: 'The ratio of useful work output to heat energy supplied by fuel or another energy source.',
    relatedTechnologies: ['four-stroke-engine', 'diesel-engine'],
  },
  {
    term: 'Torque',
    slug: 'torque',
    definition: 'Rotational force that can produce angular acceleration or do work through rotation.',
    relatedTechnologies: ['four-stroke-engine', 'battery-electric-vehicle'],
  },
  {
    term: 'Traction battery',
    slug: 'traction-battery',
    definition: 'A high-voltage battery pack used to supply propulsion energy in hybrid, plug-in hybrid, or electric vehicles.',
    relatedTechnologies: ['battery-electric-vehicle', 'plug-in-hybrid-electric-vehicle'],
  },
  {
    term: 'Turbocharger',
    slug: 'turbocharger',
    definition: 'An exhaust-driven compressor that increases intake-air density and can raise engine power or efficiency under some conditions.',
    relatedTechnologies: ['diesel-engine'],
  },
  {
    term: 'Vehicle-to-load',
    slug: 'vehicle-to-load',
    definition: 'A feature that allows a vehicle battery to supply external electrical loads.',
    relatedTechnologies: ['ev-charging'],
  },
  {
    term: 'WLTP',
    slug: 'wltp',
    definition: 'A laboratory vehicle test procedure used in many markets to estimate emissions and energy use under standardized conditions.',
    relatedTechnologies: ['engine-control-unit'],
  },
];
