export type VisualStage = {
  label: string;
  detail: string;
};

type ThreeOrFourStages =
  | readonly [VisualStage, VisualStage, VisualStage]
  | readonly [VisualStage, VisualStage, VisualStage, VisualStage];

export type TechnologyVisualConfig = {
  theme: string;
  stages: ThreeOrFourStages;
  focus: string;
  grounding: string;
};

export const technologyVisuals = {
  'adaptive-cruise-control': {
    theme: 'Adaptive speed-control loop',
    stages: [
      { label: 'Radar or camera sensing', detail: 'Range and closing speed' },
      { label: 'Following gap logic', detail: 'Target time headway' },
      { label: 'Throttle and brake request', detail: 'Vehicle speed response' },
    ],
    focus:
      'Shows adaptive cruise control as a driver-assistance loop that measures traffic ahead before requesting acceleration or braking.',
    grounding:
      'ACC changes speed only after sensor inputs and gap logic produce a control request.',
  },
  'anti-lock-braking-system': {
    theme: 'Wheel-slip control loop',
    stages: [
      { label: 'Wheel-speed sensors', detail: 'Detect rapid deceleration' },
      { label: 'Slip calculation', detail: 'Controller estimates lock risk' },
      {
        label: 'Brake-pressure modulation',
        detail: 'Hydraulic valves pulse pressure',
      },
      { label: 'Rolling tire grip', detail: 'Steering authority retained' },
    ],
    focus:
      'Frames ABS as a measured brake-pressure control system rather than as a broad safety label.',
    grounding:
      'ABS repeatedly adjusts hydraulic pressure to keep tires near usable slip.',
  },
  'automatic-transmission': {
    theme: 'Automatic ratio-selection path',
    stages: [
      { label: 'Engine torque', detail: 'Input from crankshaft' },
      { label: 'Fluid coupling or clutch', detail: 'Launch and shift control' },
      { label: 'Planetary gearsets', detail: 'Selectable ratios' },
      { label: 'Output shaft', detail: 'Torque to final drive' },
    ],
    focus:
      'Connects automatic shifting to torque coupling, gear-ratio selection, and driveline output.',
    grounding:
      'The transmission changes ratio by controlling couplings and gear elements, not by changing engine power alone.',
  },
  'axial-flux-motor': {
    theme: 'Disc-motor magnetic path',
    stages: [
      { label: 'Battery DC supply', detail: 'High-voltage source' },
      { label: 'Inverter phase currents', detail: 'Controlled AC waveform' },
      { label: 'Axial air-gap flux', detail: 'Flat stator and rotor faces' },
      { label: 'Shaft torque', detail: 'Compact traction output' },
    ],
    focus:
      'Highlights the axial magnetic-flux direction that distinguishes disc motors from more common radial-flux layouts.',
    grounding:
      'Axial-flux motors turn electrical phase control into torque across flat rotor-stator faces.',
  },
  'battery-electric-vehicle': {
    theme: 'Battery-to-wheel energy path',
    stages: [
      { label: 'Battery pack', detail: 'Stored electrical energy' },
      {
        label: 'Inverter and controller',
        detail: 'DC converted to motor phases',
      },
      { label: 'Traction motor', detail: 'Electrical work to torque' },
      { label: 'Driven wheels', detail: 'Vehicle motion' },
    ],
    focus:
      'Shows the core BEV propulsion chain from stored electricity to traction torque.',
    grounding:
      'A BEV is organized around electrical storage, conversion, and motor torque delivery.',
  },
  'battery-management-system': {
    theme: 'Battery supervision loop',
    stages: [
      { label: 'Cell voltage and temperature', detail: 'Pack sensing inputs' },
      { label: 'State estimation', detail: 'SOC, SOH, and limits' },
      {
        label: 'Balancing and protection',
        detail: 'Contactors and cell balancing',
      },
      {
        label: 'Vehicle power limits',
        detail: 'Charge and discharge requests',
      },
    ],
    focus:
      'Treats the BMS as the pack supervisor that translates cell measurements into safe power limits.',
    grounding:
      'The BMS protects the pack by turning cell data into allowed current and voltage boundaries.',
  },
  carburetor: {
    theme: 'Venturi fuel-metering path',
    stages: [
      { label: 'Intake airflow', detail: 'Air drawn through throat' },
      { label: 'Venturi pressure drop', detail: 'Lower pressure at jet' },
      { label: 'Fuel jet metering', detail: 'Liquid fuel pulled in' },
      { label: 'Air-fuel mixture', detail: 'Charge enters intake manifold' },
    ],
    focus:
      'Shows how a carburetor meters fuel through airflow and pressure difference before electronic injection became common.',
    grounding:
      'Carburetors meter fuel mechanically through airflow, pressure drop, and calibrated jets.',
  },
  'catalytic-converter': {
    theme: 'Catalyst exhaust-treatment path',
    stages: [
      { label: 'Exhaust pollutants', detail: 'CO, HC, and NOx enter' },
      { label: 'Coated substrate', detail: 'High-surface-area catalyst' },
      {
        label: 'Oxidation and reduction',
        detail: 'Chemical conversion reactions',
      },
      { label: 'Lower regulated emissions', detail: 'Cleaner tailpipe stream' },
    ],
    focus:
      'Links the converter body to catalyst surfaces and the regulated exhaust reactions they enable.',
    grounding:
      'A converter changes exhaust chemistry on catalyst surfaces; it is not a filter for all pollutants.',
  },
  'combined-charging-system': {
    theme: 'CCS connector decision path',
    stages: [
      { label: 'Shared inlet pins', detail: 'AC contacts plus DC pins' },
      {
        label: 'Communication handshake',
        detail: 'Vehicle and charger negotiate',
      },
      { label: 'AC or DC route', detail: 'Onboard charger or direct DC' },
      { label: 'Battery charging', detail: 'Pack accepts bounded current' },
    ],
    focus:
      'Shows CCS as a connector and communication standard that can route either AC charging or high-power DC charging.',
    grounding:
      'CCS charging depends on connector pins, communication, charger type, and battery limits.',
  },
  'common-rail-diesel-injection': {
    theme: 'High-pressure diesel metering path',
    stages: [
      { label: 'Low-pressure diesel supply', detail: 'Fuel from tank' },
      { label: 'High-pressure rail', detail: 'Stored injection pressure' },
      { label: 'Electronic injectors', detail: 'Timed pulse events' },
      {
        label: 'Diesel spray in cylinder',
        detail: 'Atomization for combustion',
      },
    ],
    focus:
      'Shows how common-rail systems separate pressure generation from electronically timed injection.',
    grounding:
      'Common-rail injection uses a shared pressure reservoir so injector timing can be controlled electronically.',
  },
  'continuously-variable-transmission': {
    theme: 'Continuously variable ratio path',
    stages: [
      { label: 'Engine torque', detail: 'Input pulley receives torque' },
      { label: 'Variable pulley faces', detail: 'Effective diameter changes' },
      { label: 'Belt or chain span', detail: 'Ratio changes without steps' },
      { label: 'Output speed', detail: 'Torque sent to final drive' },
    ],
    focus:
      'Explains CVT operation as a changing pulley-ratio mechanism rather than a fixed set of gear steps.',
    grounding:
      'A CVT varies the speed ratio by changing pulley diameters while the belt or chain transfers torque.',
  },
  'controller-area-network': {
    theme: 'Vehicle message-bus path',
    stages: [
      { label: 'Control modules', detail: 'ECUs prepare messages' },
      { label: 'Framed CAN messages', detail: 'Identifier and data bytes' },
      { label: 'Shared two-wire bus', detail: 'Arbitrated communication' },
      { label: 'Coordinated actions', detail: 'Systems use received data' },
    ],
    focus:
      'Shows CAN as a message network that lets modules coordinate without point-to-point wiring for every signal.',
    grounding:
      'CAN organizes vehicle data as prioritized messages on a shared bus.',
  },
  'dc-fast-charging': {
    theme: 'External DC charging path',
    stages: [
      { label: 'Grid power to charger', detail: 'Offboard power conversion' },
      { label: 'Vehicle handshake', detail: 'Limits and authorization' },
      {
        label: 'High-voltage DC delivery',
        detail: 'Bypasses onboard AC conversion',
      },
      { label: 'BMS charge limits', detail: 'Pack temperature and SOC bounds' },
    ],
    focus:
      'Separates offboard DC power conversion from the battery-management limits that determine actual charging behavior.',
    grounding:
      'DC fast charging is controlled by the charger, connector, vehicle communication, and pack limits together.',
  },
  'diesel-engine': {
    theme: 'Compression-ignition cycle path',
    stages: [
      { label: 'Air compression', detail: 'High temperature from compression' },
      {
        label: 'Fuel injection near TDC',
        detail: 'Diesel spray enters hot air',
      },
      { label: 'Autoignition', detail: 'Combustion without spark plug' },
      { label: 'High-torque output', detail: 'Pressure drives piston' },
    ],
    focus:
      'Shows the diesel engine around compression ignition rather than broad internal-combustion wording.',
    grounding:
      'Diesel combustion depends on compressed hot air and timed fuel injection.',
  },
  'diesel-particulate-filter': {
    theme: 'Soot capture and regeneration path',
    stages: [
      {
        label: 'Soot-laden exhaust',
        detail: 'Particulate matter enters filter',
      },
      { label: 'Porous wall capture', detail: 'Soot trapped in channels' },
      {
        label: 'Pressure and temperature monitoring',
        detail: 'Loading is estimated',
      },
      {
        label: 'Regeneration burn-off',
        detail: 'Soot oxidized when conditions allow',
      },
    ],
    focus:
      'Shows DPF operation as capture, monitored loading, and regeneration instead of a simple exhaust box.',
    grounding:
      'A DPF must both trap soot and periodically regenerate to avoid excessive restriction.',
  },
  'diesel-vs-petrol-engines': {
    theme: 'Ignition-method comparison',
    stages: [
      {
        label: 'Mixture formation',
        detail: 'Air and fuel prepared differently',
      },
      { label: 'Ignition method', detail: 'Compression ignition or spark' },
      {
        label: 'Pressure and efficiency behavior',
        detail: 'Different combustion constraints',
      },
      {
        label: 'Aftertreatment needs',
        detail: 'NOx, PM, HC, and CO tradeoffs',
      },
    ],
    focus:
      'Visualizes the core technical comparison: how mixture preparation and ignition method shape the downstream system.',
    grounding:
      'Diesel and petrol engines differ most fundamentally in mixture preparation and ignition strategy.',
  },
  differential: {
    theme: 'Torque split with speed difference',
    stages: [
      { label: 'Driveshaft torque', detail: 'Input from transmission' },
      {
        label: 'Ring gear and carrier',
        detail: 'Torque turns differential case',
      },
      {
        label: 'Side gears permit speed difference',
        detail: 'Wheels rotate at unequal speeds',
      },
      { label: 'Axle shafts', detail: 'Torque reaches left and right wheels' },
    ],
    focus:
      'Shows why a differential can send torque while allowing wheel-speed differences in turns.',
    grounding:
      'A differential solves the cornering problem by allowing left and right wheels to rotate at different speeds.',
  },
  'direct-injection-petrol-engine': {
    theme: 'In-cylinder gasoline metering path',
    stages: [
      { label: 'Pressurized gasoline', detail: 'High-pressure fuel rail' },
      {
        label: 'Injector in cylinder',
        detail: 'Spray enters combustion chamber',
      },
      {
        label: 'Mixture and spark timing',
        detail: 'Charge prepared near ignition',
      },
      {
        label: 'Combustion and emissions tradeoff',
        detail: 'Efficiency with particle concerns',
      },
    ],
    focus:
      'Shows direct injection as fuel delivery into the cylinder, where timing and mixture formation become central.',
    grounding:
      'Gasoline direct injection moves mixture formation into the combustion chamber.',
  },
  'dual-clutch-transmission': {
    theme: 'Preselected gear-change path',
    stages: [
      { label: 'Engine torque', detail: 'Input to clutch packs' },
      { label: 'Odd and even gear shafts', detail: 'Two gear paths' },
      { label: 'Next gear preselected', detail: 'Synchronizer prepares ratio' },
      { label: 'Clutch swap', detail: 'Torque handoff during shift' },
    ],
    focus:
      'Shows how a DCT shortens shifts by preparing the next ratio on a parallel shaft.',
    grounding:
      'Dual-clutch shifting is a controlled torque handoff between two prearranged gear paths.',
  },
  'electronic-stability-control': {
    theme: 'Yaw-stability correction loop',
    stages: [
      {
        label: 'Steering and motion sensors',
        detail: 'Driver intent and vehicle state',
      },
      {
        label: 'Yaw-rate comparison',
        detail: 'Controller detects understeer or oversteer',
      },
      {
        label: 'Individual brake or torque request',
        detail: 'Corrective intervention',
      },
      {
        label: 'Stabilized path',
        detail: 'Vehicle response moves toward intent',
      },
    ],
    focus:
      'Shows ESC as a stability-control loop that compares intended path with measured yaw behavior.',
    grounding:
      'ESC uses selective braking and torque intervention to reduce a developing stability error.',
  },
  'electronic-throttle-control': {
    theme: 'Pedal-to-throttle control path',
    stages: [
      { label: 'Accelerator pedal sensors', detail: 'Driver demand signal' },
      { label: 'ECU torque request', detail: 'Software checks limits' },
      { label: 'Throttle motor actuation', detail: 'Plate angle commanded' },
      {
        label: 'Airflow and engine torque',
        detail: 'Combustion output changes',
      },
    ],
    focus:
      'Shows electronic throttle control as a torque-request system rather than a direct cable from foot to throttle plate.',
    grounding:
      'Electronic throttles place software logic between pedal position and engine airflow.',
  },
  'engine-control-unit': {
    theme: 'Engine software-control loop',
    stages: [
      { label: 'Sensor inputs', detail: 'Air, speed, temperature, oxygen' },
      {
        label: 'Calibration maps and logic',
        detail: 'Software chooses targets',
      },
      { label: 'Actuator commands', detail: 'Fuel, spark, throttle, EGR' },
      {
        label: 'Diagnostic feedback',
        detail: 'Fault monitoring and adaptation',
      },
    ],
    focus:
      'Shows the ECU as the software and calibration layer that connects sensors, actuators, and diagnostics.',
    grounding:
      'An ECU is consequential because it decides how physical engine systems respond to measured conditions.',
  },
  'ev-charging': {
    theme: 'Charging-system coordination path',
    stages: [
      { label: 'Grid or charger supply', detail: 'External energy source' },
      {
        label: 'Connector and communication',
        detail: 'Plug, pilot, and limits',
      },
      {
        label: 'AC or DC charging path',
        detail: 'Onboard or offboard conversion',
      },
      {
        label: 'Battery SOC and thermal limits',
        detail: 'Pack accepts bounded power',
      },
    ],
    focus:
      'Shows charging as a coordinated system between infrastructure, connector standards, power electronics, and the battery.',
    grounding:
      'Charging power is negotiated and limited by both the charger and the vehicle.',
  },
  'exhaust-gas-recirculation': {
    theme: 'Combustion-temperature control path',
    stages: [
      {
        label: 'Metered exhaust sample',
        detail: 'Exhaust diverted from manifold',
      },
      {
        label: 'EGR valve and cooler',
        detail: 'Flow rate and temperature controlled',
      },
      {
        label: 'Diluted intake charge',
        detail: 'Less oxygen per cylinder charge',
      },
      {
        label: 'Lower peak combustion temperature',
        detail: 'NOx formation reduced',
      },
    ],
    focus:
      'Shows EGR as measured exhaust dilution used to influence combustion temperature and NOx formation.',
    grounding:
      'EGR reduces NOx tendency by changing the intake charge, not by cleaning exhaust after combustion.',
  },
  'four-stroke-engine': {
    theme: 'Four-stroke cycle sequence',
    stages: [
      { label: 'Intake', detail: 'Fresh charge enters cylinder' },
      { label: 'Compression', detail: 'Piston raises pressure' },
      { label: 'Power', detail: 'Combustion pushes piston' },
      { label: 'Exhaust', detail: 'Burned gases leave cylinder' },
    ],
    focus:
      'Shows the four distinct piston strokes that organize most modern reciprocating engines.',
    grounding:
      'The four-stroke cycle separates breathing, compression, work, and exhaust clearing.',
  },
  'fuel-cell-electric-vehicle': {
    theme: 'Hydrogen-to-motor energy path',
    stages: [
      {
        label: 'Hydrogen tank and air supply',
        detail: 'Reactants delivered to stack',
      },
      { label: 'Fuel-cell stack', detail: 'Electrochemical conversion' },
      {
        label: 'Buffer battery and inverter',
        detail: 'Power smoothing and AC phases',
      },
      { label: 'Electric motor torque', detail: 'Traction output' },
    ],
    focus:
      'Shows fuel-cell propulsion as an electric drivetrain fed by onboard electrochemical generation.',
    grounding:
      'A fuel-cell vehicle still drives electrically; the stack supplies electricity from hydrogen and oxygen.',
  },
  'fuel-injection': {
    theme: 'Electronic fuel-metering path',
    stages: [
      { label: 'Fuel pressure supply', detail: 'Pump and rail feed injectors' },
      { label: 'Injector pulse width', detail: 'ECU controls open time' },
      {
        label: 'Atomized fuel delivery',
        detail: 'Spray reaches air stream or cylinder',
      },
      { label: 'Controlled mixture', detail: 'Combustion target supported' },
    ],
    focus:
      'Shows fuel injection as pressure plus electronic timing, replacing purely mechanical fuel metering.',
    grounding:
      'Injection systems meter fuel by controlling pressure, injector timing, and pulse duration.',
  },
  'heat-pump': {
    theme: 'Reversible heat-movement path',
    stages: [
      {
        label: 'Cabin or battery heat demand',
        detail: 'Thermal target requested',
      },
      {
        label: 'Compressor moves refrigerant',
        detail: 'Pressure and temperature change',
      },
      {
        label: 'Reversing valve and heat exchangers',
        detail: 'Heat source and sink switch',
      },
      {
        label: 'Managed temperature',
        detail: 'Cabin comfort or battery conditioning',
      },
    ],
    focus:
      'Shows a heat pump as a reversible refrigerant system that moves heat rather than simply generating it resistively.',
    grounding:
      'Vehicle heat pumps conserve energy by moving available heat to the place that needs it.',
  },
  'hybrid-electric-vehicle': {
    theme: 'Hybrid power-blending path',
    stages: [
      { label: 'Fuel and battery energy', detail: 'Two onboard energy stores' },
      {
        label: 'Hybrid control strategy',
        detail: 'Chooses engine, motor, or both',
      },
      {
        label: 'Blended wheel torque',
        detail: 'Mechanical and electrical paths combine',
      },
      {
        label: 'Regenerative recharge',
        detail: 'Braking energy returns to battery',
      },
    ],
    focus:
      'Shows hybrid propulsion as power blending plus energy recovery, not just an added electric motor.',
    grounding:
      'Hybrid control decides when to use fuel energy, stored electricity, and regenerative braking.',
  },
  'induction-motor': {
    theme: 'Induced-rotor torque path',
    stages: [
      { label: 'Inverter AC phases', detail: 'Variable frequency and current' },
      {
        label: 'Rotating stator field',
        detail: 'Magnetic field sweeps around air gap',
      },
      {
        label: 'Induced rotor current',
        detail: 'Current generated without magnets',
      },
      { label: 'Motor torque', detail: 'Rotor follows field with slip' },
    ],
    focus:
      'Shows the induction motor around the key mechanism: rotor current induced by the stator field.',
    grounding:
      'Induction motors create torque without permanent magnets by inducing current in the rotor.',
  },
  'integrated-starter-generator': {
    theme: 'Starter-assist-regeneration path',
    stages: [
      {
        label: 'Belt or crankshaft machine',
        detail: 'Motor-generator coupled to engine',
      },
      {
        label: 'Engine start and torque assist',
        detail: 'Electrical torque supports crankshaft',
      },
      { label: 'Generator mode', detail: 'Deceleration recovers energy' },
      {
        label: 'Low-voltage battery support',
        detail: '48 V or 12 V system buffer',
      },
    ],
    focus:
      'Shows an integrated starter-generator as a reversible machine that starts, assists, and regenerates.',
    grounding:
      'An ISG is useful because one machine can both add torque and recover electrical energy.',
  },
  'knock-sensor': {
    theme: 'Detonation-detection feedback path',
    stages: [
      { label: 'Block vibration', detail: 'Combustion noise reaches sensor' },
      {
        label: 'Knock-frequency detection',
        detail: 'Signal filtered for abnormal combustion',
      },
      {
        label: 'Ignition timing correction',
        detail: 'ECU retards spark or changes load',
      },
      { label: 'Protected combustion', detail: 'Pressure spikes avoided' },
    ],
    focus:
      'Shows the knock sensor as a feedback device that lets the ECU respond to abnormal combustion.',
    grounding:
      'Knock sensing protects the engine by linking vibration evidence to spark and load control.',
  },
  'lead-acid-battery': {
    theme: '12-volt electrochemical supply path',
    stages: [
      {
        label: 'Lead and lead-dioxide plates',
        detail: 'Positive and negative materials',
      },
      { label: 'Sulfuric acid electrolyte', detail: 'Ion path for reaction' },
      {
        label: '12 V electrical supply',
        detail: 'Starting and accessory power',
      },
      {
        label: 'Alternator recharge',
        detail: 'Reaction reversed after discharge',
      },
    ],
    focus:
      'Shows lead-acid batteries as electrochemical stores that support starting and low-voltage vehicle loads.',
    grounding:
      'Lead-acid batteries remain important because they provide robust low-voltage power and rechargeability.',
  },
  'lean-burn-combustion': {
    theme: 'Excess-air combustion path',
    stages: [
      {
        label: 'Air-rich mixture',
        detail: 'More oxygen than stoichiometric need',
      },
      {
        label: 'Lean or stratified burn',
        detail: 'Combustion with diluted fuel charge',
      },
      {
        label: 'Efficiency opportunity',
        detail: 'Reduced pumping and fuel use',
      },
      {
        label: 'NOx-control challenge',
        detail: 'Aftertreatment becomes harder',
      },
    ],
    focus:
      'Shows lean burn as a combustion strategy with efficiency potential and emissions-control constraints.',
    grounding:
      'Lean burn changes combustion chemistry and pushes more burden onto NOx control.',
  },
  'lithium-ion-battery': {
    theme: 'Lithium-ion pack energy path',
    stages: [
      {
        label: 'Lithium-ion cells',
        detail: 'Electrodes and electrolyte store charge',
      },
      {
        label: 'Modules and pack structure',
        detail: 'Cells connected and protected',
      },
      {
        label: 'BMS-controlled current',
        detail: 'Voltage, temperature, and limits',
      },
      { label: 'High-energy storage', detail: 'Traction or accessory supply' },
    ],
    focus:
      'Shows lithium-ion batteries as managed cell assemblies rather than a single plain battery box.',
    grounding:
      'Lithium-ion vehicle packs combine cell chemistry, structure, cooling, and BMS limits.',
  },
  'manual-transmission': {
    theme: 'Driver-selected gear path',
    stages: [
      {
        label: 'Clutch pedal input',
        detail: 'Driver disconnects engine torque',
      },
      {
        label: 'Gear lever selection',
        detail: 'Shift forks move synchronizers',
      },
      { label: 'Selected gear pair', detail: 'Ratio mechanically engaged' },
      { label: 'Output torque', detail: 'Power returns to driveline' },
    ],
    focus:
      'Shows the manual transmission as a driver-coordinated clutch and gear-engagement mechanism.',
    grounding:
      'Manual shifting depends on torque interruption, synchronization, and selected gear ratio.',
  },
  'mass-air-flow-sensor': {
    theme: 'Air-mass measurement path',
    stages: [
      { label: 'Intake air stream', detail: 'Air passes sensor element' },
      {
        label: 'Hot-wire cooling signal',
        detail: 'Air mass changes heat loss',
      },
      { label: 'ECU load calculation', detail: 'Measured air informs fueling' },
      { label: 'Fuel and throttle control', detail: 'Mixture target adjusted' },
    ],
    focus:
      'Shows the MAF sensor as a measured air-mass input for engine load and fueling decisions.',
    grounding:
      'MAF data matters because fueling depends on how much air actually enters the engine.',
  },
  'mild-hybrid-system': {
    theme: 'Low-power hybrid-assist path',
    stages: [
      { label: 'Small battery buffer', detail: 'Often 48 V storage' },
      { label: 'Belt or shaft motor assist', detail: 'Limited torque support' },
      {
        label: 'Start-stop and torque fill',
        detail: 'Engine operation smoothed',
      },
      { label: 'Regeneration', detail: 'Deceleration energy recovered' },
    ],
    focus:
      'Shows a mild hybrid as limited electrical assist and recovery rather than full electric-only propulsion.',
    grounding:
      'Mild hybrids improve transitions and recover energy without replacing the combustion drivetrain.',
  },
  'nickel-metal-hydride-battery': {
    theme: 'Hybrid battery-buffer path',
    stages: [
      {
        label: 'Nickel-based electrodes',
        detail: 'Cell materials store charge',
      },
      {
        label: 'Reversible cell reaction',
        detail: 'Charge and discharge cycles',
      },
      { label: 'Hybrid battery pack', detail: 'Modules controlled by BMS' },
      {
        label: 'Buffered motor assist',
        detail: 'Power sent to or from drivetrain',
      },
    ],
    focus:
      'Shows NiMH batteries as durable hybrid energy buffers rather than long-range EV packs.',
    grounding:
      'NiMH chemistry became useful in hybrids because it tolerates repeated charge-sustaining cycling.',
  },
  'on-board-diagnostics': {
    theme: 'Fault-monitoring and service path',
    stages: [
      {
        label: 'Monitored sensors and actuators',
        detail: 'Emissions and powertrain signals',
      },
      {
        label: 'Diagnostic thresholds',
        detail: 'ECU compares expected behavior',
      },
      { label: 'Fault-code storage', detail: 'DTC and freeze-frame data' },
      {
        label: 'Scan-tool service signal',
        detail: 'Technician reads evidence',
      },
    ],
    focus:
      'Shows OBD as monitored diagnostic logic that records service evidence, not as a plain dashboard warning.',
    grounding:
      'OBD turns monitored vehicle behavior into standardized diagnostic information.',
  },
  'onboard-charger': {
    theme: 'AC-to-pack charging path',
    stages: [
      { label: 'AC inlet power', detail: 'Grid AC enters vehicle' },
      {
        label: 'Rectifier and power-factor control',
        detail: 'AC converted and conditioned',
      },
      {
        label: 'Isolated DC charging stage',
        detail: 'Voltage matched to pack',
      },
      { label: 'Battery-pack current', detail: 'BMS accepts charge' },
    ],
    focus:
      'Shows the onboard charger as vehicle power electronics that convert AC supply into controlled battery current.',
    grounding:
      'Onboard chargers matter most during AC charging because the vehicle performs the power conversion.',
  },
  'oxygen-sensor': {
    theme: 'Exhaust oxygen feedback path',
    stages: [
      {
        label: 'Exhaust oxygen difference',
        detail: 'Sensor exposed to exhaust stream',
      },
      {
        label: 'Voltage or wideband signal',
        detail: 'Mixture evidence generated',
      },
      { label: 'ECU fuel trim', detail: 'Injection adjusted closed-loop' },
      {
        label: 'Catalyst mixture control',
        detail: 'Stoichiometric target protected',
      },
    ],
    focus:
      'Shows the oxygen sensor as closed-loop feedback for fuel control and catalyst effectiveness.',
    grounding:
      'Oxygen-sensor feedback lets the ECU correct mixture around the catalyst target.',
  },
  'permanent-magnet-synchronous-motor': {
    theme: 'Synchronous magnet-torque path',
    stages: [
      { label: 'Inverter phase current', detail: 'Controlled AC to stator' },
      {
        label: 'Permanent-magnet rotor field',
        detail: 'Rotor field already present',
      },
      {
        label: 'Synchronized stator field',
        detail: 'Controller keeps torque angle',
      },
      {
        label: 'Efficient traction torque',
        detail: 'Rotor follows rotating field',
      },
    ],
    focus:
      'Shows PMSM operation around permanent magnets and synchronized inverter control.',
    grounding:
      'PMSMs create torque by coordinating stator current with the rotor magnet field.',
  },
  'petrol-gasoline-engine': {
    theme: 'Spark-ignition energy path',
    stages: [
      { label: 'Air-fuel mixture', detail: 'Charge prepared for cylinder' },
      { label: 'Spark ignition', detail: 'Plug initiates flame front' },
      { label: 'Expanding gases', detail: 'Combustion pressure rises' },
      { label: 'Crankshaft torque', detail: 'Piston force becomes rotation' },
    ],
    focus:
      'Shows gasoline engine operation around spark ignition and controlled flame propagation.',
    grounding:
      'Spark-ignition engines depend on mixture preparation, spark timing, and combustion pressure.',
  },
  'plug-in-hybrid-electric-vehicle': {
    theme: 'Plug-in hybrid energy path',
    stages: [
      {
        label: 'Plug-in battery charge',
        detail: 'External electricity stored onboard',
      },
      { label: 'Electric-drive operation', detail: 'Motor can propel vehicle' },
      { label: 'Hybrid control blend', detail: 'Engine and motor coordinated' },
      {
        label: 'Engine backup and regeneration',
        detail: 'Range extension and energy recovery',
      },
    ],
    focus:
      'Shows a PHEV as a hybrid that adds externally charged electric driving before or alongside engine operation.',
    grounding:
      'PHEV behavior depends on battery charge, trip demand, and hybrid control strategy.',
  },
  'port-fuel-injection': {
    theme: 'Intake-port fuel-metering path',
    stages: [
      {
        label: 'Fuel rail pressure',
        detail: 'Injectors supplied near intake ports',
      },
      {
        label: 'Injector sprays at port',
        detail: 'Fuel enters before intake valve',
      },
      {
        label: 'Mixture enters cylinder',
        detail: 'Air and fuel travel together',
      },
      {
        label: 'Spark combustion',
        detail: 'Prepared charge burns in cylinder',
      },
    ],
    focus:
      'Shows port injection as fuel delivery upstream of the intake valve, unlike direct injection into the chamber.',
    grounding:
      'Port fuel injection prepares much of the air-fuel mixture before it enters the cylinder.',
  },
  'power-inverter': {
    theme: 'DC-to-traction AC conversion path',
    stages: [
      { label: 'Battery DC bus', detail: 'High-voltage direct current' },
      { label: 'Switching semiconductors', detail: 'Timed power pulses' },
      {
        label: 'Controlled AC phases',
        detail: 'Frequency and current commanded',
      },
      {
        label: 'Motor torque or regen DC',
        detail: 'Drive and energy recovery',
      },
    ],
    focus:
      'Shows the inverter as the power-electronics bridge between battery DC and motor phase control.',
    grounding:
      'The inverter determines motor torque by shaping high-voltage DC into controlled AC phases.',
  },
  'regenerative-braking': {
    theme: 'Kinetic-energy recovery path',
    stages: [
      { label: 'Wheel kinetic energy', detail: 'Vehicle slows from motion' },
      {
        label: 'Motor as generator',
        detail: 'Rotor drives electrical machine',
      },
      {
        label: 'Inverter-controlled current',
        detail: 'Electrical braking torque managed',
      },
      {
        label: 'Battery recharge and friction blend',
        detail: 'Recovered energy plus hydraulic brakes',
      },
    ],
    focus:
      'Shows regenerative braking as a controlled conversion from vehicle kinetic energy back into stored electrical energy.',
    grounding:
      'Regeneration is limited by traction, battery acceptance, and the need to blend with friction braking.',
  },
  'selective-catalytic-reduction': {
    theme: 'NOx reduction dosing path',
    stages: [
      {
        label: 'NOx-rich diesel exhaust',
        detail: 'Lean exhaust enters aftertreatment',
      },
      {
        label: 'DEF or urea dosing',
        detail: 'Ammonia-forming reductant injected',
      },
      { label: 'SCR catalyst reaction', detail: 'NOx reacts over catalyst' },
      { label: 'Nitrogen and water', detail: 'Reduced tailpipe NOx' },
    ],
    focus:
      'Shows SCR as controlled reductant dosing plus catalyst chemistry for lean-exhaust NOx control.',
    grounding:
      'SCR depends on accurate dosing, exhaust temperature, catalyst condition, and sensor feedback.',
  },
  'solid-state-battery': {
    theme: 'Solid-electrolyte cell concept path',
    stages: [
      { label: 'Lithium inventory', detail: 'Charge-carrying ions' },
      {
        label: 'Solid electrolyte separator',
        detail: 'Ion path without liquid electrolyte',
      },
      { label: 'Cell stack design', detail: 'Interfaces and pressure managed' },
      {
        label: 'High-density pack promise',
        detail: 'Potential safety and energy gains',
      },
    ],
    focus:
      'Shows solid-state batteries as a cell-architecture concept centered on the electrolyte and interfaces.',
    grounding:
      'Solid-state battery promise depends on practical electrolyte, interface, manufacturing, and durability solutions.',
  },
  'start-stop-system': {
    theme: 'Idle-shutdown restart path',
    stages: [
      {
        label: 'Stop conditions sensed',
        detail: 'Brake, speed, battery, and temperature checks',
      },
      { label: 'Engine shutdown', detail: 'Fuel and ignition pause at idle' },
      { label: 'Restart request', detail: 'Pedal or control demand returns' },
      { label: 'Starter or ISG cranks engine', detail: 'Combustion resumes' },
    ],
    focus:
      'Shows start-stop as a conditional control sequence, not just an engine that randomly turns off.',
    grounding:
      'Start-stop only works when sensors, battery state, and restart hardware can meet driver demand.',
  },
  supercharger: {
    theme: 'Mechanically driven boost path',
    stages: [
      { label: 'Crankshaft drive', detail: 'Belt, gear, or shaft power' },
      {
        label: 'Compressor rotation',
        detail: 'Air is compressed mechanically',
      },
      { label: 'Boosted intake air', detail: 'Higher manifold pressure' },
      {
        label: 'Higher cylinder charge',
        detail: 'More oxygen supports fuel burn',
      },
    ],
    focus:
      'Shows the supercharger as mechanically driven intake compression, distinct from exhaust-driven turbocharging.',
    grounding:
      'Superchargers trade engine drive power for immediate intake boost.',
  },
  'thermal-management-system': {
    theme: 'Vehicle heat-control network',
    stages: [
      {
        label: 'Heat sources and sensors',
        detail: 'Battery, cabin, motor, electronics',
      },
      {
        label: 'Coolant and refrigerant loops',
        detail: 'Heat moved through circuits',
      },
      {
        label: 'Valves, pumps, and heat exchangers',
        detail: 'Flow directed to targets',
      },
      {
        label: 'Controlled temperatures',
        detail: 'Performance, comfort, and durability',
      },
    ],
    focus:
      'Shows thermal management as a coordinated heat-transfer network across vehicle subsystems.',
    grounding:
      'Thermal management keeps components inside usable temperature windows as conditions change.',
  },
  'three-way-catalyst': {
    theme: 'Stoichiometric catalyst path',
    stages: [
      {
        label: 'Near-stoichiometric exhaust',
        detail: 'Mixture controlled around lambda 1',
      },
      {
        label: 'Oxygen storage and catalyst sites',
        detail: 'Ceramic substrate coating',
      },
      {
        label: 'CO and HC oxidation plus NOx reduction',
        detail: 'Three regulated reactions',
      },
      {
        label: 'Lower tailpipe emissions',
        detail: 'Works best near mixture target',
      },
    ],
    focus:
      'Shows why a three-way catalyst depends on mixture control as well as catalyst hardware.',
    grounding:
      'Three-way catalysts need close fuel-control feedback to treat CO, HC, and NOx together.',
  },
  'torque-converter': {
    theme: 'Hydrodynamic torque-transfer path',
    stages: [
      { label: 'Engine-driven pump', detail: 'Impeller accelerates fluid' },
      { label: 'Transmission fluid flow', detail: 'Fluid transmits torque' },
      { label: 'Turbine torque', detail: 'Transmission input turns' },
      {
        label: 'Lockup clutch',
        detail: 'Mechanical coupling improves efficiency',
      },
    ],
    focus:
      'Shows the torque converter as fluid coupling plus a lockup path used in automatic transmissions.',
    grounding:
      'Torque converters launch smoothly through fluid flow, then often lock mechanically to reduce slip.',
  },
  turbocharger: {
    theme: 'Exhaust-driven boost path',
    stages: [
      { label: 'Exhaust gas', detail: 'Hot flow leaves cylinders' },
      { label: 'Turbine wheel', detail: 'Exhaust energy spins shaft' },
      { label: 'Compressor wheel', detail: 'Intake air is compressed' },
      { label: 'Denser intake air', detail: 'More oxygen reaches cylinders' },
    ],
    focus:
      'Shows a turbocharger as an exhaust-energy recovery device that drives intake compression through a shared shaft.',
    grounding:
      'Turbocharging links exhaust energy to denser intake charge rather than creating power by itself.',
  },
  'variable-valve-lift': {
    theme: 'Valve-opening-height control path',
    stages: [
      {
        label: 'Cam or electrohydraulic actuator',
        detail: 'Lift mechanism selected',
      },
      {
        label: 'Changed valve opening height',
        detail: 'Valve curtain area changes',
      },
      { label: 'Air charge control', detail: 'Cylinder breathing adjusted' },
      {
        label: 'Efficiency or power tradeoff',
        detail: 'Losses and output shaped',
      },
    ],
    focus:
      'Shows variable valve lift as control over valve opening height and cylinder breathing.',
    grounding:
      'Changing valve lift changes how much air the engine can move at a given operating point.',
  },
  'variable-valve-timing': {
    theme: 'Cam-phasing timing path',
    stages: [
      {
        label: 'Crank and cam position sensing',
        detail: 'Engine phase measured',
      },
      {
        label: 'Cam phaser movement',
        detail: 'Valve events advanced or retarded',
      },
      {
        label: 'Valve timing shift',
        detail: 'Overlap and closing timing change',
      },
      {
        label: 'Torque and emissions optimization',
        detail: 'Breathing matched to load and speed',
      },
    ],
    focus:
      'Shows VVT as a cam-timing control system that changes when valves open and close.',
    grounding:
      'Variable valve timing adjusts engine breathing across speed, load, and emissions conditions.',
  },
  'vehicle-to-grid': {
    theme: 'Bidirectional energy-service path',
    stages: [
      {
        label: 'Plugged-in EV battery',
        detail: 'Stored energy connected to charger',
      },
      {
        label: 'Bidirectional charger',
        detail: 'Power can flow out as well as in',
      },
      {
        label: 'Grid signal and export logic',
        detail: 'Timing, limits, and authorization',
      },
      {
        label: 'Energy returned to building or grid',
        detail: 'Battery supports external load',
      },
    ],
    focus:
      'Shows V2G as bidirectional charging controlled by grid signals, vehicle limits, and battery-use policy.',
    grounding:
      'Vehicle-to-grid is a control and infrastructure problem, not merely a large battery plugged into a wall.',
  },
} as const satisfies Record<string, TechnologyVisualConfig>;

export type TechnologySlug = keyof typeof technologyVisuals;

function isTechnologySlug(slug: string): slug is TechnologySlug {
  return Object.hasOwn(technologyVisuals, slug);
}

export function technologyVisualForSlug(slug: string): TechnologyVisualConfig {
  if (isTechnologySlug(slug)) {
    return technologyVisuals[slug];
  }

  throw new Error(`Missing curated technology visual config for slug: ${slug}`);
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

export function wrapLabel(
  label: string,
  maxLineLength = 28,
  maxLines = 3,
): string[] {
  const words = label.split(/\s+/u).filter((word) => word.length > 0);

  if (words.length === 0) {
    return [''];
  }

  const lineLimit = Math.max(4, maxLineLength);
  const lineCount = Math.max(1, maxLines);
  const lines: string[] = [];

  for (let index = 0; index < words.length; index += 1) {
    const word = words[index] ?? '';
    const currentLine = lines.at(-1);

    if (currentLine === undefined) {
      lines.push(compactLabel(word, lineLimit));
      continue;
    }

    const candidate = `${currentLine} ${word}`;

    if (candidate.length <= lineLimit) {
      lines[lines.length - 1] = candidate;
      continue;
    }

    if (lines.length < lineCount) {
      lines.push(compactLabel(word, lineLimit));
      continue;
    }

    lines[lines.length - 1] = compactLabel(
      [currentLine, ...words.slice(index)].join(' '),
      lineLimit,
    );
    break;
  }

  return lines;
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
