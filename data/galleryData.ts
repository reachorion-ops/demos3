export interface SuiteData {
  id: string;
  name: string;
  maison: string;
  level: number;
  levelName: string;
  category: "Haute Horlogerie & Joaillerie" | "Haute Couture" | "Michelin Gastronomy" | "Private Banking & VIP";
  floorAreaM2: number;
  floorAreaSqFt: number;
  ceilingHeightM: number;
  glazedFrontageM: number;
  cadRef: string;
  privateConciergePhone: string;
  directExtension: string;
  image: string;
  description: string;
  heritageYear: string;
  suiteCode: string;
  features: string[];
  auditedTurnover?: string;
  privateSalonCapacity: string;
  architecturalCoordinates: { x: number; y: number; width: number; height: number; shape?: string; path?: string };
}

export interface EngineeringPillar {
  id: string;
  index: string;
  title: string;
  shortTitle: string;
  category: string;
  cadRef: string;
  status: string;
  leadArchitect: string;
  summary: string;
  specifications: { label: string; value: string; unit?: string }[];
  telemetryHighlights: { metric: string; label: string }[];
  schematicDetails: string[];
  certificationBadge: string;
}

export interface LeasingSuite {
  id: string;
  name: string;
  zone: "Ground Promenade" | "Mezzanine Atrium" | "Sky Conservatory";
  cadCode: string;
  giaM2: number;
  giaSqFt: number;
  clearHeightM: number;
  frontageM: number;
  status: "Available Q2 2027" | "Lease Under Negotiation" | "Flagship Reserved" | "Atelier Fit-Out Review";
  targetProfile: string;
  image: string;
  description: string;
  deliverableSpec: string[];
  adjacentTenants: string[];
}

export interface EditorialEndorsement {
  id: string;
  maisonName: string;
  executiveName: string;
  executiveRole: string;
  portraitUrl: string;
  monogram: string;
  tenancyCommencement: string;
  flagshipLocation: string;
  editorialHeadline: string;
  editorialBody: string[];
  metrics: { value: string; label: string; footnote: string }[];
  publicationReference: string;
  cadUnitRef: string;
}

export interface CulturalEvent {
  id: string;
  dateStr: string;
  day: string;
  month: string;
  year: string;
  title: string;
  subtitle: string;
  curator: string;
  venue: string;
  duration: string;
  image: string;
  description: string;
  badge: string;
}

export interface FAQItem {
  question: string;
  category: string;
  answer: string;
}

/* =========================================================================
   SUITES DIRECTORY & BLUEPRINT DATA
   ========================================================================= */

export const SUITES_DATA: SuiteData[] = [
  {
    id: "cartier-g01",
    name: "Maison Cartier Grand Flagship & Joaillerie",
    maison: "Cartier",
    level: 1,
    levelName: "Level 1 Promenade",
    category: "Haute Horlogerie & Joaillerie",
    floorAreaM2: 1420,
    floorAreaSqFt: 15285,
    ceilingHeightM: 7.2,
    glazedFrontageM: 38.4,
    cadRef: "NX-SUITE-G01-A",
    privateConciergePhone: "+33 1 89 20 44 01",
    directExtension: "EXT-CARTIER-77",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=85",
    description: "An expansive tri-level flagship maison showcasing High Jewelry masterpieces and heritage archival timepieces, featuring a dedicated private VIP courtyard, armored subterranean viewing vault, and bespoke bridal salon.",
    heritageYear: "1847",
    suiteCode: "G-01 (Grand Rotunda Anchor)",
    features: [
      "Class III reinforced high-jewelry safe room",
      "Private mezzanine lounge with separate VIP ingress",
      "Double-height curved low-iron glazing (38.4m frontage)",
      "Dedicated pneumatic delivery drop from security dispatch"
    ],
    auditedTurnover: "€44.8M Annually",
    privateSalonCapacity: "14 Private Guests / 3 Salons",
    architecturalCoordinates: { x: 80, y: 140, width: 140, height: 95 }
  },
  {
    id: "patek-g02",
    name: "Patek Philippe Salons & Chronométrie",
    maison: "Patek Philippe",
    level: 1,
    levelName: "Level 1 Promenade",
    category: "Haute Horlogerie & Joaillerie",
    floorAreaM2: 980,
    floorAreaSqFt: 10548,
    ceilingHeightM: 6.8,
    glazedFrontageM: 28.6,
    cadRef: "NX-SUITE-G02-P",
    privateConciergePhone: "+33 1 89 20 44 02",
    directExtension: "EXT-PATEK-12",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=85",
    description: "Geneva's pinnacle horological institution recreated with burr walnut panelling, museum-grade grand complication display vitrines, and a dedicated watchmaker's workshop for on-site master regulation.",
    heritageYear: "1839",
    suiteCode: "G-02 (Promenade West Wing)",
    features: [
      "Acoustically isolated Grand Complication evaluation salon",
      "CRI >98 color-true precision inspection lighting",
      "Private collectors' vault with retinal biometric ingress",
      "Master horologist regulation bench with vibration dampening"
    ],
    auditedTurnover: "€32.1M Annually",
    privateSalonCapacity: "8 Collectors / 2 Salons",
    architecturalCoordinates: { x: 235, y: 110, width: 115, height: 85 }
  },
  {
    id: "hermes-g03",
    name: "Hermès Haute Maroquinerie & Équitation",
    maison: "Hermès",
    level: 1,
    levelName: "Level 1 Promenade",
    category: "Haute Couture",
    floorAreaM2: 1650,
    floorAreaSqFt: 17760,
    ceilingHeightM: 7.4,
    glazedFrontageM: 42.0,
    cadRef: "NX-SUITE-G03-H",
    privateConciergePhone: "+33 1 89 20 44 03",
    directExtension: "EXT-HERMES-24",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",
    description: "A monumental corner flagship anchored by hand-carved French limestone colonnades, housing the complete universe of leather goods, silk scarves, ready-to-wear, and an exclusive equestrian bespoke saddlery studio.",
    heritageYear: "1837",
    suiteCode: "G-03 (South-West Colonnade)",
    features: [
      "Dedicated artisan leathercrafting studio in open rotunda view",
      "Two VIP private suites with direct subterranean lift access",
      "Hand-blown Saint-Louis crystal architectural chandeliers",
      "Climate-controlled exotic leather conservation vault"
    ],
    auditedTurnover: "€58.2M Annually",
    privateSalonCapacity: "20 VIP Clients / 4 Salons",
    architecturalCoordinates: { x: 80, y: 250, width: 140, height: 110 }
  },
  {
    id: "chanel-g04",
    name: "Chanel Joaillerie & Haute Parfumerie",
    maison: "Chanel",
    level: 1,
    levelName: "Level 1 Promenade",
    category: "Haute Horlogerie & Joaillerie",
    floorAreaM2: 1220,
    floorAreaSqFt: 13132,
    ceilingHeightM: 6.9,
    glazedFrontageM: 32.5,
    cadRef: "NX-SUITE-G04-C",
    privateConciergePhone: "+33 1 89 20 44 04",
    directExtension: "EXT-CHANEL-05",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=85",
    description: "Peter Marino-designed monolithic black lacquer and gold-leaf pavilion dedicated exclusively to Chanel Fine Jewelry, exceptional watchmaking, and private bespoke salon fittings.",
    heritageYear: "1910",
    suiteCode: "G-04 (Promenade East Arc)",
    features: [
      "Peter Marino commissioned architectural bronze screens",
      "Class III modular vaulting system with seismic sensors",
      "Private fitting salon featuring 18th-century Coromandel screens",
      "Custom acoustic dampening tuned for chamber music"
    ],
    auditedTurnover: "€39.7M Annually",
    privateSalonCapacity: "12 Guests / 3 Salons",
    architecturalCoordinates: { x: 580, y: 140, width: 140, height: 95 }
  },
  {
    id: "rolex-g05",
    name: "Rolex Crown Flagship & Certified Pre-Owned",
    maison: "Rolex",
    level: 1,
    levelName: "Level 1 Promenade",
    category: "Haute Horlogerie & Joaillerie",
    floorAreaM2: 1100,
    floorAreaSqFt: 11840,
    ceilingHeightM: 6.6,
    glazedFrontageM: 30.0,
    cadRef: "NX-SUITE-G05-R",
    privateConciergePhone: "+33 1 89 20 44 05",
    directExtension: "EXT-ROLEX-01",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85",
    description: "Architectural fluted emerald glass and bronze facade housing one of the world's most comprehensive permanent selections of Oyster Perpetual and Perpetual 1908 references.",
    heritageYear: "1905",
    suiteCode: "G-05 (North-East Gallery)",
    features: [
      "Full-height emerald fluted water wall architectural installation",
      "Two private client appraisal rooms with calibrated scale balances",
      "Subterranean secure vault connection for high-value allocations",
      "Swiss trained on-site master technicians in cleanroom suite"
    ],
    auditedTurnover: "€41.0M Annually",
    privateSalonCapacity: "10 Clients / 2 Salons",
    architecturalCoordinates: { x: 450, y: 110, width: 115, height: 85 }
  },
  {
    id: "audemars-g06",
    name: "Audemars Piguet AP House & Complications",
    maison: "Audemars Piguet",
    level: 1,
    levelName: "Level 1 Promenade",
    category: "Haute Horlogerie & Joaillerie",
    floorAreaM2: 890,
    floorAreaSqFt: 9580,
    ceilingHeightM: 6.8,
    glazedFrontageM: 26.0,
    cadRef: "NX-SUITE-G06-AP",
    privateConciergePhone: "+33 1 89 20 44 06",
    directExtension: "EXT-AP-88",
    image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1200&q=85",
    description: "An urban apartment concept reimagining the boutique experience, featuring a grand piano lounge, private mixology bar, and curated Royal Oak Concept showcases.",
    heritageYear: "1875",
    suiteCode: "G-06 (South-East Arcade)",
    features: [
      "Residential-style lounge with handcrafted walnut bar",
      "Private soundproof listening room for Minute Repeaters",
      "VIP private salon overlooking the central water feature",
      "Class III safe enclosure with triple-redundant telemetry"
    ],
    auditedTurnover: "€29.4M Annually",
    privateSalonCapacity: "16 VIP Guests / Lounge + 2 Salons",
    architecturalCoordinates: { x: 580, y: 250, width: 140, height: 110 }
  },
  {
    id: "dior-l201",
    name: "Christian Dior Couture & Haute Horlogerie",
    maison: "Dior",
    level: 2,
    levelName: "Level 2 Couture",
    category: "Haute Couture",
    floorAreaM2: 1350,
    floorAreaSqFt: 14531,
    ceilingHeightM: 5.8,
    glazedFrontageM: 36.0,
    cadRef: "NX-SUITE-L2-01-D",
    privateConciergePhone: "+33 1 89 20 44 07",
    directExtension: "EXT-DIOR-30",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85",
    description: "Trocadéro stone and canework woodwork salon with an expansive Haute Couture dressing pavilion, displaying ready-to-wear, leather goods, and high jewelry under crystal chandeliers.",
    heritageYear: "1946",
    suiteCode: "L2-01 (Mezzanine West)",
    features: [
      "Double-height fitting salons with 360-degree biometric mirrors",
      "Private bar and champagne service salon for bespoke clients",
      "Dedicated fitting room for runway bridal couture",
      "Direct security escort pathway from VIP parking"
    ],
    auditedTurnover: "€36.5M Annually",
    privateSalonCapacity: "15 Clients / 3 Salons",
    architecturalCoordinates: { x: 90, y: 130, width: 150, height: 105 }
  },
  {
    id: "cucinelli-l202",
    name: "Brunello Cucinelli Solomeo Sartorial Atelier",
    maison: "Brunello Cucinelli",
    level: 2,
    levelName: "Level 2 Couture",
    category: "Haute Couture",
    floorAreaM2: 820,
    floorAreaSqFt: 8826,
    ceilingHeightM: 5.5,
    glazedFrontageM: 24.5,
    cadRef: "NX-SUITE-L2-02-BC",
    privateConciergePhone: "+33 1 89 20 44 08",
    directExtension: "EXT-CUCINELLI-04",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=85",
    description: "An Umbrian-inspired sanctuary of cashmere and tailored menswear, detailed with travertine stone, natural wool tapestries, and an open fire reading library.",
    heritageYear: "1978",
    suiteCode: "L2-02 (Mezzanine North Arc)",
    features: [
      "Su Misura bespoke tailoring suite with master Italian tailor",
      "Rare cashmere textile vault and library of 2,000+ cloth rolls",
      "Private tasting salon offering Solomeo olive oils and wines",
      "Zero-carbon certified timber and stone architecture"
    ],
    auditedTurnover: "€18.9M Annually",
    privateSalonCapacity: "6 Clients / 2 Salons",
    architecturalCoordinates: { x: 260, y: 110, width: 125, height: 90 }
  },
  {
    id: "loropiana-l203",
    name: "Loro Piana Bespoke & Vicuña Salon",
    maison: "Loro Piana",
    level: 2,
    levelName: "Level 2 Couture",
    category: "Haute Couture",
    floorAreaM2: 910,
    floorAreaSqFt: 9795,
    ceilingHeightM: 5.6,
    glazedFrontageM: 27.0,
    cadRef: "NX-SUITE-L2-03-LP",
    privateConciergePhone: "+33 1 89 20 44 09",
    directExtension: "EXT-LORO-18",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=85",
    description: "Showcasing the world's most precious natural fibers — Vicuña, The Gift of Kings merino wool, and baby cashmere — with a dedicated VIP suiting atelier and private client salon.",
    heritageYear: "1924",
    suiteCode: "L2-03 (Mezzanine East Arc)",
    features: [
      "Hermetically sealed Vicuña archive and rare fabric chamber",
      "Private fitting lounge overlooking the gallerie atrium",
      "Custom Italian saddlery and interiors bespoke service",
      "Ultra-fine natural fiber climate conditioning system"
    ],
    auditedTurnover: "€22.3M Annually",
    privateSalonCapacity: "8 Clients / 2 Salons",
    architecturalCoordinates: { x: 415, y: 110, width: 125, height: 90 }
  },
  {
    id: "saintlaurent-l204",
    name: "Saint Laurent Rive Gauche & Architecture",
    maison: "Saint Laurent",
    level: 2,
    levelName: "Level 2 Couture",
    category: "Haute Couture",
    floorAreaM2: 1180,
    floorAreaSqFt: 12700,
    ceilingHeightM: 5.8,
    glazedFrontageM: 34.0,
    cadRef: "NX-SUITE-L2-04-SL",
    privateConciergePhone: "+33 1 89 20 44 10",
    directExtension: "EXT-YSL-55",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85",
    description: "A striking, minimalist composition of French black marble, raw concrete, mirror-polished chrome, and vintage furniture personally curated by Anthony Vaccarello.",
    heritageYear: "1961",
    suiteCode: "L2-04 (Mezzanine South)",
    features: [
      "Curated rare vinyl and art book salon for VIP patrons",
      "Two private dressing suites with bespoke directional runway lighting",
      "Dedicated eveningwear bespoke fitting chamber",
      "Monolithic marble vitrines with biometric glass locks"
    ],
    auditedTurnover: "€26.8M Annually",
    privateSalonCapacity: "10 Clients / 2 Salons",
    architecturalCoordinates: { x: 560, y: 130, width: 150, height: 105 }
  },
  {
    id: "lambroisie-l301",
    name: "L'Ambroisie Rotunda & Chef Frederic Anton",
    maison: "L'Ambroisie",
    level: 3,
    levelName: "Level 3 Michelin Salons",
    category: "Michelin Gastronomy",
    floorAreaM2: 850,
    floorAreaSqFt: 9149,
    ceilingHeightM: 6.2,
    glazedFrontageM: 32.0,
    cadRef: "NX-SUITE-L3-01-AMB",
    privateConciergePhone: "+33 1 89 20 44 11",
    directExtension: "EXT-AMBROISIE-03",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85",
    description: "Pinnacle Three-Star Parisian haute cuisine overlooking the monumental glass rotunda, with antique Aubusson tapestries, silver gueridons, and an 8,000-bottle Grand Cru cellar.",
    heritageYear: "1986 (Paris)",
    suiteCode: "L3-01 (Grand Dining Room West)",
    features: [
      "Triple-filtered culinary risers with dedicated acoustic isolation",
      "Chef's private table inside the stainless-steel Molteni kitchen",
      "Private dining salons with dedicated sommelier and butler",
      "Sommelier cellar with Romanée-Conti & Château d'Yquem vertical collections"
    ],
    auditedTurnover: "€14.2M Annually",
    privateSalonCapacity: "48 Covers Main Room / 3 Private Salons (12 each)",
    architecturalCoordinates: { x: 120, y: 120, width: 180, height: 130 }
  },
  {
    id: "shikon-l302",
    name: "Sushi Shikon Edomae Atelier (3 Michelin Stars)",
    maison: "Sushi Shikon",
    level: 3,
    levelName: "Level 3 Michelin Salons",
    category: "Michelin Gastronomy",
    floorAreaM2: 420,
    floorAreaSqFt: 4520,
    ceilingHeightM: 5.2,
    glazedFrontageM: 16.0,
    cadRef: "NX-SUITE-L3-02-SK",
    privateConciergePhone: "+33 1 89 20 44 12",
    directExtension: "EXT-SHIKON-08",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=85",
    description: "Exclusive 10-seat 350-year-old Yoshino Hinoki cypress sushi counter with fish flown daily from Tokyo's Toyosu Market on morning cargo flights.",
    heritageYear: "Tokyo & Hong Kong",
    suiteCode: "L3-02 (Sky Mezzanine North)",
    features: [
      "Continuous 10-seat single slab Yoshino Hinoki counter",
      "Dedicated airlock fish prep lab with ozone sanitization",
      "Independent cold chain logistics from airport tarmac",
      "Private 6-seat counter room for state and sovereign guests"
    ],
    auditedTurnover: "€9.8M Annually",
    privateSalonCapacity: "10 Counter Seats + 6 VIP Private Room",
    architecturalCoordinates: { x: 320, y: 100, width: 160, height: 100 }
  },
  {
    id: "kaspia-l303",
    name: "Caviar Kaspia & The Sommelier Reserve Vault",
    maison: "Caviar Kaspia",
    level: 3,
    levelName: "Level 3 Michelin Salons",
    category: "Michelin Gastronomy",
    floorAreaM2: 680,
    floorAreaSqFt: 7320,
    ceilingHeightM: 5.6,
    glazedFrontageM: 22.0,
    cadRef: "NX-SUITE-L3-03-CK",
    privateConciergePhone: "+33 1 89 20 44 13",
    directExtension: "EXT-KASPIA-19",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=85",
    description: "The storied Parisian salon established at Place de la Madeleine, serving imperial Ossetra and Beluga caviar, frozen vodka carafes, and rare vintage champagnes in silk-lined alcoves.",
    heritageYear: "1927",
    suiteCode: "L3-03 (East Balcony)",
    features: [
      "Minus-4°C nitrogen-cooled crystal caviar bar counter",
      "Private salon with direct access to sky terrace",
      "Dedicated humidor and rare spirits reserve cabinet",
      "Members-only discrete entry portal with biometric badge"
    ],
    auditedTurnover: "€11.5M Annually",
    privateSalonCapacity: "32 Covers / 2 Silk Alcoves",
    architecturalCoordinates: { x: 500, y: 120, width: 180, height: 130 }
  },
  {
    id: "skypavilion-l401",
    name: "The Glass Atrium Observatory & Private Family Offices",
    maison: "Palais Royale Consortia",
    level: 4,
    levelName: "Level 4 Sky Pavilion",
    category: "Private Banking & VIP",
    floorAreaM2: 2100,
    floorAreaSqFt: 22604,
    ceilingHeightM: 8.5,
    glazedFrontageM: 64.0,
    cadRef: "NX-SUITE-L4-01-SKY",
    privateConciergePhone: "+33 1 89 20 44 14",
    directExtension: "EXT-SKY-01",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    description: "An awe-inspiring cantilevered glass observatory perched beneath the Pritzker glass canopy, offering 360-degree metropolitan and harbour panoramas, boardroom facilities, and discrete UHNW family offices.",
    heritageYear: "2026",
    suiteCode: "L4-01 (Apex Pavilion)",
    features: [
      "Direct express elevator from subterranean armored valet bays",
      "SCIF-rated secure soundproof boardrooms for executive summits",
      "Curved structural glass perimeter with motorized solar louvres",
      "Dedicated rooftop helipad lounge with private passport clearance"
    ],
    auditedTurnover: "Proprietary Institutional Facility",
    privateSalonCapacity: "Up to 120 Guests for Global Summits",
    architecturalCoordinates: { x: 180, y: 110, width: 440, height: 180 }
  }
];

/* =========================================================================
   MASTERPLAN ENGINEERING & MEP DATA (6 PILLARS)
   ========================================================================= */

export const ENGINEERING_PILLARS: EngineeringPillar[] = [
  {
    id: "pillar-canopy",
    index: "01",
    title: "Biophilic Low-Iron Glass Canopy & Thermal Envelope",
    shortTitle: "Biophilic Glass Canopy",
    category: "Structural Envelope & Solar Physics",
    cadRef: "CAD-MEP-CAN-44M",
    status: "Commissioned & Certified",
    leadArchitect: "Werner Sobek Engineering & Foster Partners Structural",
    summary: "A free-form diagrid of 9,400 m² double-curved laminated low-iron glass panels engineered with selective solar coatings to transmit 71% visible light while rejecting 78% infrared heat gain.",
    specifications: [
      { label: "Glazing Surface Area", value: "9,400", unit: "m²" },
      { label: "Solar Heat Gain (SHGC)", value: "0.22", unit: "ISO 9050" },
      { label: "Thermal Transmittance (U-Value)", value: "1.08", unit: "W/m²K" },
      { label: "Acoustic Dampening", value: "49.2", unit: "dB (Rw+Ctr)" },
      { label: "Apex Clearance Height", value: "44.5", unit: "m" },
      { label: "Diagrid Node Tolerance", value: "±0.8", unit: "mm" }
    ],
    telemetryHighlights: [
      { metric: "71%", label: "Natural Daylight Transmission" },
      { metric: "-44%", label: "HVAC Chilling Load Offset" },
      { metric: "120 yr", label: "Structural Design Lifespan" }
    ],
    schematicDetails: [
      "Concealed pneumatic perimeter venting louvres automatically actuate based on atrium micro-climate sensors.",
      "Integrated photovoltaic fritting in southern exposure rings generates 180 kWp clean power.",
      "Internal condensate evacuation channels prevent any water vapor collection over public walkways."
    ],
    certificationBadge: "LEED Platinum & BREEAM Outstanding (Envelope Ref: E-2026)"
  },
  {
    id: "pillar-logistics",
    index: "02",
    title: "Subterranean Armored Logistics & Secure Egress",
    shortTitle: "Armored Logistics & Egress",
    category: "Sub-grade Security Infrastructure",
    cadRef: "CAD-SEC-LOG-B3",
    status: "Military / Banking Grade Operational",
    leadArchitect: "GardaWorld Consortia & Buro Happold Subterranean",
    summary: "A dedicated Level B3 armored logistics interchange isolated from public traffic, featuring 4 heavy armored-carrier loading docks, ballistic airlocks, and discrete express lifts direct to Maison vaults.",
    specifications: [
      { label: "Heavy Carrier Bays", value: "4", unit: "Berths (Up to 32 Ton)" },
      { label: "Ballistic Rating", value: "FB7 / BR7", unit: "EN 1522/1523" },
      { label: "Subterranean Depth", value: "-14.8", unit: "m Below Grade" },
      { label: "Pneumatic Capsule Speed", value: "18.5", unit: "m/s" },
      { label: "Anti-Ram Barrier Rating", value: "K12 / M50", unit: "ASTM F2656" },
      { label: "Security Dispatch Staffing", value: "24/7/365", unit: "Armed On-Site" }
    ],
    telemetryHighlights: [
      { metric: "<90 sec", label: "Direct Dock-to-Vault Delivery" },
      { metric: "100%", label: "Isolated Air & Waste Systems" },
      { metric: "Zero", label: "Public Interaction Exposure" }
    ],
    schematicDetails: [
      "Under-vehicle laser scanning chassis inspection with automated explosive residue spectroscopy.",
      "Double interlocked hydraulic airlock gates prevent simultaneous ingress and egress.",
      "Private discrete subterranean chauffeur arrival foyer with direct biometric lifts to VIP salons."
    ],
    certificationBadge: "Class 5 Logistics Security Protocol (NATO & Interpol Validated)"
  },
  {
    id: "pillar-vault",
    index: "03",
    title: "Class III Reinforced High-Jewelry Vault Pads",
    shortTitle: "Class III Vault Pads",
    category: "High-Jewelry Structural Engineering",
    cadRef: "CAD-STR-VLT-C60",
    status: "Insurable to Unlimited Value",
    leadArchitect: "Fichet-Bauche & Arup Structural Geotechnics",
    summary: "Individual monolithic concrete vault foundation pads engineered with C50/60 steel-fiber reinforced concrete, integrated acoustic fiber-optic sensor mesh, and independent seismic vibration dampening.",
    specifications: [
      { label: "Slab Thickness", value: "380", unit: "mm Solid Concrete" },
      { label: "Concrete Grade", value: "C50/60", unit: "High Performance" },
      { label: "Insurance Underwriting", value: "Class III+", unit: "Lloyd's of London" },
      { label: "Vibration Sensor Grid", value: "50", unit: "mm Spacing Mesh" },
      { label: "Core Drill Resistance", value: ">120", unit: "Minutes" },
      { label: "Thermal Lance Rating", value: "T2 Certified", unit: "EN 1143-1" }
    ],
    telemetryHighlights: [
      { metric: "€500M+", label: "Underwriting Capacity Per Suite" },
      { metric: "10 ms", label: "Seismic Alarm Trip Latency" },
      { metric: "380 mm", label: "Steel-Fiber Monolithic Slab" }
    ],
    schematicDetails: [
      "Multi-layer high-tensile rebar cages intertwined with corundum and tungsten-carbide anti-drill nuggets.",
      "Embedded piezoelectric vibration sensors detect micro-drilling, thermal cutting, or explosive percussion.",
      "Secondary nitrogen fire-suppression system non-destructive to delicate historic horology."
    ],
    certificationBadge: "EN 1143-1 Grade VI & Lloyd's Spec VLT-2026"
  },
  {
    id: "pillar-lighting",
    index: "04",
    title: "Circadian Spectral Lighting (CRI >98, 2700K–5500K)",
    shortTitle: "Circadian Spectral Lighting",
    category: "Photometric & Optical Systems",
    cadRef: "CAD-MEP-LGT-CRI98",
    status: "Automated Astronomical Tracking",
    leadArchitect: "Erco Luminaires & L'Observatoire International",
    summary: "Museum-grade solid-state LED infrastructure achieving Color Rendering Index (CRI) Ra >98 and TM-30 Rf 96, automatically synchronizing correlated color temperature with astronomical daylight azimuth.",
    specifications: [
      { label: "Color Rendering Index", value: "98.4", unit: "Ra" },
      { label: "Fidelity Index (TM-30)", value: "96.8", unit: "Rf" },
      { label: "CCT Dynamic Range", value: "2,400 – 6,500", unit: "Kelvin" },
      { label: "Modulation Flicker", value: "0.02%", unit: "IEEE 1789-2015" },
      { label: "DALI-2 Addressable Nodes", value: "14,800", unit: "Circuits" },
      { label: "Optical Glare Rating", value: "<10", unit: "UGR Superb" }
    ],
    telemetryHighlights: [
      { metric: "CRI 98+", label: "Diamond & Gemstone Purity" },
      { metric: "0.02%", label: "Zero-Flicker Camera Eye" },
      { metric: "24-hr", label: "Bio-Harmonic Sync" }
    ],
    schematicDetails: [
      "Custom diamond appraisal spots with 5500K high-CRI pinpoint beams reveal true diamond color grades.",
      "Warm 2700K indirect cove grazing illuminates French limestone walls without hot spots.",
      "Complete absence of ultraviolet (UV) and infrared (IR) emissions preserves priceless couture fabrics."
    ],
    certificationBadge: "WELL Building Standard Platinum Light Quality (IES LM-80)"
  },
  {
    id: "pillar-kitchen",
    index: "05",
    title: "Independent High-Capacity Culinary Risers & Extraction",
    shortTitle: "Dedicated Culinary Risers",
    category: "Heavy Mechanical & Environmental Services",
    cadRef: "CAD-MEP-KIT-RISER",
    status: "Triple-Zone Acoustic Isolation",
    leadArchitect: "Meinhardt Mechanical Services & Halton Marine",
    summary: "Independent stainless-steel exhaust shafts with dual-stage electrostatic precipitators, ultraviolet grease destruction, and active carbon scrubbing discharging odor-free air at the exterior parapet.",
    specifications: [
      { label: "Air Exhaust Capacity", value: "32,000", unit: "m³/hour / Riser" },
      { label: "Electrostatic Efficiency", value: "99.8%", unit: "DOP 0.3μm" },
      { label: "Odor Removal Index", value: "99.4%", unit: "Active Carbon Bed" },
      { label: "Duct Material", value: "316L", unit: "Stainless Steel 2mm" },
      { label: "Acoustic Attenuation", value: "NC-30", unit: "Dining Room Spec" },
      { label: "Fire Resistance", value: "240", unit: "Minutes EI 240" }
    ],
    telemetryHighlights: [
      { metric: "99.8%", label: "Grease Particulate Capture" },
      { metric: "NC-30", label: "Whisper-Quiet Atrium" },
      { metric: "16", label: "Full Michelin Kitchens Supported" }
    ],
    schematicDetails: [
      "UV-C ozone generators neutralize airborne grease vapors inside ductwork preventing build-up.",
      "Vibration isolators with spring hangers eliminate kitchen blower noise from reaching luxury salons.",
      "Dedicated make-up air units conditioned with heat recovery wheels save 38% heating/cooling energy."
    ],
    certificationBadge: "NFPA 96 & ISO 16890 Filtration Class ISO ePM1 90%"
  },
  {
    id: "pillar-power",
    index: "06",
    title: "Triple-Redundant Tier IV Power & Dark Fibre Backbone",
    shortTitle: "Tier IV Power & Dark Fibre",
    category: "Electrical & High-Speed Network Systems",
    cadRef: "CAD-EE-PWR-T4",
    status: "99.999% Fault Tolerant (2N+1)",
    leadArchitect: "Schneider Electric & Colt Data Services Infrastructure",
    summary: "Dedicated 20kV dual-loop electrical feeds from separate grid substations, supported by 4,000 kVA rotary dynamic UPS sets and high-speed dark fiber loops linking directly to the financial exchanges.",
    specifications: [
      { label: "Dedicated Grid Feeds", value: "Dual 20kV", unit: "Diverse Substation Routes" },
      { label: "Rotary UPS Capacity", value: "4,000", unit: "kVA Dynamic Ride-Through" },
      { label: "Switchover Interruption", value: "0", unit: "Milliseconds (Seamless)" },
      { label: "On-Site Diesel Autonomy", value: "72", unit: "Hours Continuous" },
      { label: "Dark Fiber Pairs", value: "96", unit: "Single-Mode Strands" },
      { label: "Network Round-Trip Latency", value: "<0.4", unit: "ms to Bourse/Exchange" }
    ],
    telemetryHighlights: [
      { metric: "99.999%", label: "Electrical Availability" },
      { metric: "0 ms", label: "UPS Transfer Time" },
      { metric: "72 hrs", label: "Autonomous Island Capability" }
    ],
    schematicDetails: [
      "Physical fiber cable paths utilize dual blast-proof subterranean conduits on opposite building perimeters.",
      "Private secure meet-me room for tenant private point-to-point cryptographic banking connections.",
      "Continuous thermal infrared scanning of all busduct joints and main distribution switchboards."
    ],
    certificationBadge: "Uptime Institute Tier IV Fault-Tolerant Criteria"
  }
];

/* =========================================================================
   COMMERCIAL FLAGSHIP LEASING PORTFOLIO
   ========================================================================= */

export const LEASING_SUITES: LeasingSuite[] = [
  {
    id: "lease-promenade-01",
    name: "The Royal Colonnade Duplex Suite",
    zone: "Ground Promenade",
    cadCode: "SUITE PR-01 (Duplex Anchor)",
    giaM2: 1840,
    giaSqFt: 19805,
    clearHeightM: 8.2,
    frontageM: 46.0,
    status: "Available Q2 2027",
    targetProfile: "Global Haute Joaillerie Maison or Legacy Watchmaker Flagship",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=85",
    description: "An exceptional dual-level flagship opportunity enjoying the most prominent corner position in the Grand Rotunda. Features dramatic 8.2m double-height volume, sweeping monumental bronze staircase opening, and direct pneumatic connection to Level B3 armored logistics.",
    deliverableSpec: [
      "Bare-shell delivery with screeded concrete floor and structural perimeter core",
      "Double-height curved low-iron glass shopfront (46m continuous display)",
      "High-load slab capacity: 7.5 kN/m² suited for monumental stone works and heavy safes",
      "Dedicated 400A 3-phase power supply with Tier IV rotary UPS backup",
      "Direct structural provisions for private internal elevator and helical staircase"
    ],
    adjacentTenants: ["Cartier", "Patek Philippe", "Hermès"]
  },
  {
    id: "lease-promenade-02",
    name: "The West Rotunda Jewel Pavilion",
    zone: "Ground Promenade",
    cadCode: "SUITE PR-04B (Mid-Arc)",
    giaM2: 760,
    giaSqFt: 8180,
    clearHeightM: 6.8,
    frontageM: 22.4,
    status: "Lease Under Negotiation",
    targetProfile: "Independent Geneva Master Horology or High-End Fine Jewelry",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
    description: "Centrally positioned along the main pedestrian gallery directly facing the central water feature. Engineered with high-density security glass, pre-installed Class III safe foundation pad, and whisper-quiet displacement ventilation.",
    deliverableSpec: [
      "Turnkey core & shell with pre-installed Class III reinforced safe pad",
      "22.4m seamless structural glass facade with recessed bronze profile rails",
      "Dedicated variable refrigerant flow (VRF) HVAC branch with filtration",
      "Comprehensive fiber optical connectivity to building command center"
    ],
    adjacentTenants: ["Rolex", "Audemars Piguet"]
  },
  {
    id: "lease-mezzanine-01",
    name: "The Haute Couture Balcony Atelier",
    zone: "Mezzanine Atrium",
    cadCode: "SUITE MZ-07 (Overlook)",
    giaM2: 1120,
    giaSqFt: 12055,
    clearHeightM: 5.8,
    frontageM: 34.0,
    status: "Available Q2 2027",
    targetProfile: "Parisian / Milanese Haute Couture or High-End Luxury Ready-to-Wear",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=85",
    description: "Commanding an elevated vantage point over the Grand Rotunda atrium, this suite provides supreme brand visibility from ground level while offering discreet private salon spaces for couture VIP clients.",
    deliverableSpec: [
      "Custom acoustic ceiling baffles engineered to NC-32 sound criteria",
      "Pre-engineered private VIP fitting suite layout with plumbing rough-ins",
      "Private service door opening to dedicated secure service corridor",
      "Motorized solar sunscreens integrated into glass parapet"
    ],
    adjacentTenants: ["Christian Dior", "Brunello Cucinelli", "Loro Piana"]
  },
  {
    id: "lease-sky-01",
    name: "The Michelin Penthouse Conservatory",
    zone: "Sky Conservatory",
    cadCode: "SUITE SC-01 (Apex North)",
    giaM2: 1290,
    giaSqFt: 13885,
    clearHeightM: 7.2,
    frontageM: 52.0,
    status: "Atelier Fit-Out Review",
    targetProfile: "International Multi-Star Michelin Chef / Private Gastronomy Club",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    description: "The pinnacle culinary offering of the precinct. Features an expansive column-free dining pavilion framed by the Pritzker glass canopy, a 280 m² private sky terrace with harbour views, and dual high-capacity stainless-steel grease exhaust risers.",
    deliverableSpec: [
      "Dual 28,000 m³/h 316L stainless-steel kitchen exhaust risers to roof parapet",
      "Gas connection: High-pressure 150 kW commercial gas supply",
      "Heavy load kitchen floor slab (10.0 kN/m²) with anti-vibration isolation",
      "Private dedicated guest elevator and separate service lift"
    ],
    adjacentTenants: ["L'Ambroisie", "Caviar Kaspia"]
  }
];

/* =========================================================================
   EDITORIAL MAISON ENDORSEMENTS (PORTFOLIO TESTIMONIALS)
   ========================================================================= */

export const EDITORIAL_ENDORSEMENTS: EditorialEndorsement[] = [
  {
    id: "endorsement-cartier",
    maisonName: "Maison Cartier",
    executiveName: "Cyrille Vigneron",
    executiveRole: "President & CEO, Cartier International",
    portraitUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
    monogram: "CARTIER",
    tenancyCommencement: "Anchor Tenant Since 2024 (Suite G-01)",
    flagshipLocation: "Grand Rotunda Promenade, Suite G-01",
    editorialHeadline: "“The architectural integrity of The Rotunda has redefined our high-jewelry private salon volume in Europe.”",
    editorialBody: [
      "When evaluating locations for our largest European flagship outside Rue de la Paix, the structural criteria were non-negotiable. Our High Jewelry and historic archival pieces require a level of physical security and micro-environmental precision that few real estate projects can satisfy.",
      "The dedicated Class III vault pads, subterranean armored carriage docks, and soaring 7.2m clear volumes enabled our architectural team to execute a vision that transcends standard luxury retail. The Rotunda has established an unprecedented benchmark in commercial architecture."
    ],
    metrics: [
      { value: "+44.2%", label: "Private Salon Sales Growth", footnote: "Audited Year-on-Year Growth across VIP Private Orders" },
      { value: "€44.8M", label: "First-Year Flagship Turnover", footnote: "Delivered in First 12 Months of Physical Operations" },
      { value: "100%", label: "Security & Discretion Compliance", footnote: "Zero-Incident Subterranean Ingress & Armored Transfer" }
    ],
    publicationReference: "Published in Robb Report & Financial Times Luxury Real Estate Quarterly",
    cadUnitRef: "CAD REF: NX-SUITE-G01-A"
  },
  {
    id: "endorsement-kering",
    maisonName: "Kering Luxury Group",
    executiveName: "François-Henri Pinault",
    executiveRole: "Chairman & Chief Executive Officer, Kering",
    portraitUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85",
    monogram: "KERING",
    tenancyCommencement: "Multi-Brand Portfolio Tenancy Since 2025",
    flagshipLocation: "Mezzanine & Promenade Arcades (Suites L2-04, G-07, G-09)",
    editorialHeadline: "“A monumental destination where architectural gravitas directly elevates brand equity.”",
    editorialBody: [
      "For Kering's maisons, physical retail is not merely a transaction channel—it is the physical incarnation of culture and craftsmanship. In The Rotunda, the spatial proportions, natural light filtered through the biophilic canopy, and rigorous tenant curatorial policy provide the ideal setting.",
      "The cross-pollination between ultra-high-net-worth collectors visiting haute horlogerie salons and haute couture clienteles has yielded dwell times and average order values that outperform our global flagship benchmarks by double-digit percentages."
    ],
    metrics: [
      { value: "+38.6%", label: "Average Transaction Size", footnote: "Comparative Basket vs. Boulevard St. Germain Flagships" },
      { value: "84 min", label: "Average Client Dwell Time", footnote: "Measured via Passive Precision Bluetooth Telemetry" },
      { value: "3 Maisons", label: "Multi-Year Group Commitments", footnote: "Spanning 3,800 m² of Gross Leasable Area" }
    ],
    publicationReference: "Vogue Business Executive Interview & Portfolio Report",
    cadUnitRef: "CAD REF: NX-GRP-KER-2026"
  },
  {
    id: "endorsement-patek",
    maisonName: "Patek Philippe Genève",
    executiveName: "Thierry Stern",
    executiveRole: "President, Patek Philippe Genève",
    portraitUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=85",
    monogram: "PATEK PHILIPPE",
    tenancyCommencement: "Bespoke Chronométrie Suite (Suite G-02)",
    flagshipLocation: "Promenade West Wing, Suite G-02",
    editorialHeadline: "“Our master watchmakers require acoustic stillness and optical purity. The Rotunda provided both.”",
    editorialBody: [
      "Evaluating a minute repeater requires complete acoustic isolation. Observing the hand-finished anglage of a grand complication caliber requires light that does not deceive the eye. Most commercial developments treat mechanical specifications as an afterthought.",
      "The engineering team behind The Rotunda consulted directly with our horological architects from the blueprint stage. The resulting CRI >98 circadian lighting and NC-25 sound dampening make our Suite G-02 one of the most acoustically and visually perfect salons in the world."
    ],
    metrics: [
      { value: "€32.1M", label: "Annual Allocated Reference Value", footnote: "Grand Complications and Rare Handcrafts Delivered" },
      { value: "NC-25", label: "Acoustic Noise Criterion", footnote: "Verified In-Situ for Chime Calibration" },
      { value: "98.4 Ra", label: "Color Rendering Index", footnote: "Zero Visual Distortion on Enamel Dials" }
    ],
    publicationReference: "The Hour Glass Horological Review & Swiss Watchmaking Journal",
    cadUnitRef: "CAD REF: NX-SUITE-G02-P"
  },
  {
    id: "endorsement-anton",
    maisonName: "Le Pré Catelan & L'Ambroisie",
    executiveName: "Chef Frédéric Anton",
    executiveRole: "Three-Star Michelin Chef & Meilleur Ouvrier de France",
    portraitUrl: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=85",
    monogram: "FREDERIC ANTON",
    tenancyCommencement: "Grand Culinary Salon (Suite L3-01)",
    flagshipLocation: "Level 3 Michelin Conservatory, Suite L3-01",
    editorialHeadline: "“To operate a three-star kitchen at 25 metres above ground level requires monumental engineering.”",
    editorialBody: [
      "A gastronomy kitchen is an engine room of intense fire, steam, and pressure. We produce thousands of courses of delicate langoustines, truffles, and reductions without a single whiff of cooking grease ever escaping into the public gallerie.",
      "The 32,000 m³/h stainless-steel risers and electrostatic scrubbing systems engineered into The Rotunda operate with surgical efficiency. Dining here under the stars while looking down at the illuminated rotunda below is an unforgettable experience."
    ],
    metrics: [
      { value: "3 Stars", label: "Michelin Guide Validation", footnote: "Confirmed in the First In-Precinct Evaluation" },
      { value: "100%", label: "Odorless Public Air Quality", footnote: "Zero Smoke or Culinary Exhaust at Atrium Level" },
      { value: "8,400", label: "Bottle Grand Cru Cellar Capacity", footnote: "Continuous 12.5°C / 70% RH Sub-Structure" }
    ],
    publicationReference: "Michelin Guide Special Feature & Le Figaro Gastronomie",
    cadUnitRef: "CAD REF: NX-SUITE-L3-01-AMB"
  }
];

/* =========================================================================
   CHRONOLOGICAL CULTURAL SEASON AGENDA
   ========================================================================= */

export const CULTURAL_EVENTS: CulturalEvent[] = [
  {
    id: "event-01",
    dateStr: "28 NOV 2026",
    day: "28",
    month: "NOV",
    year: "2026",
    title: "Horlogerie Monolithica: 250 Years of High Complications",
    subtitle: "A curated survey of rare celestial, perpetual, and chiming masterpieces from Geneva's most secluded private archives.",
    curator: "Curated by Fondation Cartier & Patek Philippe Patrimoine Archive",
    venue: "Central Oculus & Level 1 Promenade Void",
    duration: "28 NOV 2026 – 12 JAN 2027",
    image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=85",
    description: "Displaying 48 one-of-one pocket watches and wrist complications under custom biometric vitrines with optical anti-reflective glass.",
    badge: "Exclusive Cultural Opening"
  },
  {
    id: "event-02",
    dateStr: "15 DEC 2026",
    day: "15",
    month: "DEC",
    year: "2026",
    title: "The Architecture of Drape: Balenciaga to Modern Geometry",
    subtitle: "An examination of structural tailoring, architectural proportion, and sculpture in textile from 1950 to the contemporary era.",
    curator: "In collaboration with Musée des Arts Décoratifs & Kering Heritage",
    venue: "Level 2 Couture Gallery Pavilion",
    duration: "15 DEC 2026 – 28 FEB 2027",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=85",
    description: "Features 32 historic runway archival gowns juxtaposed against brutalist limestone pedestals within the Mezzanine Gallery.",
    badge: "Haute Couture Retrospective"
  },
  {
    id: "event-03",
    dateStr: "18 JAN 2027",
    day: "18",
    month: "JAN",
    year: "2027",
    title: "Gastronomic Summit: Ten Three-Star Masters of the Terroir",
    subtitle: "A four-evening culinary symposium featuring collaborative 10-hand banquets beneath the Pritzker glass canopy.",
    curator: "Chaired by Chef Frédéric Anton & Michelin Guide International",
    venue: "Level 3 & Level 4 Sky Pavilion",
    duration: "18 JAN 2027 – 22 JAN 2027",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=85",
    description: "Seating strictly limited to 60 patron couples per evening, paired with exceptional historical vintages from Domaine de la Romanée-Conti.",
    badge: "VIP Gastronomy Summit"
  },
  {
    id: "event-04",
    dateStr: "04 MAR 2027",
    day: "04",
    month: "MAR",
    year: "2027",
    title: "Pritzker Laureates: Glass, Tension & The New Cathedral",
    subtitle: "An architectural blueprint retrospective charting the engineering evolution of the modern retail gallerie.",
    curator: "Curated by Royal Institute of British Architects (RIBA) & Arup Fellows",
    venue: "The Rotunda Atrium Gallery & CAD Pavilion",
    duration: "04 MAR 2027 – 30 APR 2027",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85",
    description: "Original hand-drawn ink blueprints, 1:50 structural timber models, and computational wind-tunnel aerodynamics telemetry.",
    badge: "Architectural Biennale"
  }
];

/* =========================================================================
   FAQ DATA
   ========================================================================= */

export const FAQ_DATA: FAQItem[] = [
  {
    question: "What are the protocol specifications for private helicopter and subterranean VIP transfers?",
    category: "VIP Logistics & Security",
    answer: "The Rotunda features a dual-ingress protocol for high-profile patrons. The Level 4 rooftop helipad accommodates twin-engine executive helicopters (up to 8 tonnes) with direct private elevator connection to the VIP suites. Alternatively, subterranean Level B3 provides 4 blast-rated armored vehicle bays with biometric airlocks, ensuring zero exposure to public thoroughfares."
  },
  {
    question: "What physical and seismic classifications are applied to high-jewelry tenant vault pads?",
    category: "Structural & Security",
    answer: "All jewelry and watchmaking tenancy suites are poured on isolated 380mm steel-fiber reinforced C50/60 concrete slabs equipped with embedded piezoelectric vibration sensors. Certified to EN 1143-1 Grade VI standards, they are insurable up to €500M+ per individual salon under standard Lloyd's of London bullion and fine gems syndication."
  },
  {
    question: "How does the commercial leasing selection and architectural review process operate?",
    category: "Commercial Leasing",
    answer: "Tenancy in The Rotunda is strictly curated by our Architectural Review Committee. Prospective maisons submit an Architectural Fit-Out Dossier demonstrating alignment with our Pritzker design criteria, low-iron glazed shopfront requirements, and CRI >98 photometric guidelines. Standard leases are structured on 9-to-12 year commitments with customized landlord fit-out capital contributions."
  },
  {
    question: "How are the culinary grease extraction and acoustic isolation systems separated from luxury boutiques?",
    category: "Mechanical & MEP",
    answer: "Level 3 and 4 culinary salons are serviced by four independent 316L stainless-steel riser shafts capable of 32,000 m³/h exhaust. Utilizing multi-stage electrostatic precipitators, UV-C ozone grease breakdown, and active carbon scrubbers, all exhaust air is purged of 99.8% particulates before roof parapet discharge. Mechanical acoustic isolators guarantee ambient dining noise criteria of NC-30 or lower."
  },
  {
    question: "Can private collectors reserve after-hours private viewing salons across multiple maisons?",
    category: "VIP Concierge",
    answer: "Yes. The Royale Concierge Desk orchestrates multi-maison itineraries for private clients. A dedicated private client attaché coordinates coordinated access across participating haute horlogerie and couture houses, complete with private armored transport between vaults, sommelier hospitality, and discretion agreements."
  }
];

