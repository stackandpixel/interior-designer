import type { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'residential-interiors',
    slug: 'residential-interiors',
    title: 'Complete Residential Interiors',
    subtitle: 'End-to-End Design for Apartments, Penthouses & Villas',
    description:
      'Holistic interior architecture tailored to your family’s daily rituals. We transform bare-shell apartments and villas into deeply personal homes, orchestrating layout planning, custom furniture, electrical and false-ceiling layouts, material selections, and final styling.',
    idealFor:
      'Homeowners purchasing 2BHK, 3BHK, 4BHK apartments or independent villas in Pune & Mumbai seeking a bespoke, cohesive interior experience.',
    keyFeatures: [
      'Comprehensive 2D space planning & circulation optimization',
      'High-fidelity 3D photorealistic visualization & material moodboards',
      'Custom fixed joinery (wardrobes, TV units, foyer credenzas)',
      'Architectural lighting plan (ambient, task, and accent layers)',
      'Curated soft furnishing, wall finishes, and art curation',
    ],
    deliverables: [
      'Detailed 2D layout drawings & electrical schematics',
      'Photorealistic 3D interior renders of every living zone',
      'Complete Bill of Quantities (BOQ) with material specifications',
      'Vendor coordination & periodic site quality audits',
    ],
    image: `${import.meta.env.BASE_URL}images/services/service_residential.jpg`,
    timelineEstimate: '10–16 Weeks depending on carpet area & scope',
  },
  {
    id: 'living-dining',
    slug: 'living-and-dining',
    title: 'Living & Dining Room Design',
    subtitle: 'The Heart of Everyday Living & Thoughtful Hosting',
    description:
      'Creating an inviting, expansive gathering space that balances comfort with architectural refinement. We carefully curate focal walls, bespoke entertainment units, dining tables, ambient lighting, and bespoke rugs to create a welcoming rhythm.',
    idealFor:
      'Families wanting to elevate their primary living and entertaining zone with high-end materials, acoustic balance, and customized storage.',
    keyFeatures: [
      'Fluid transition between living, dining, and balcony zones',
      'Concealed cable routing and bespoke media console design',
      'Custom dining table concepts (solid wood, natural quartz, or marble)',
      'Layered lighting schemes for casual evenings vs. lively dinner parties',
      'Acoustic softening with natural linen curtains and woven rugs',
    ],
    deliverables: [
      'Full architectural elevations of TV and dining focal walls',
      'Custom furniture specification sheets for local carpenters or luxury brands',
      'Lighting circuit diagrams & dimmer compatibility guidelines',
      'Fabric & upholstery swatch selections',
    ],
    image: `${import.meta.env.BASE_URL}images/services/service_living.jpg`,
    timelineEstimate: '4–8 Weeks',
  },
  {
    id: 'modular-kitchens',
    slug: 'modular-kitchens',
    title: 'Ergonomic Modular Kitchens',
    subtitle: 'Precision Engineering Crafted for Indian Cooking Rituals',
    description:
      'A true blend of European precision hardware and deep understanding of Indian culinary requirements. We design wet and dry zones, high-capacity spice storage, durable stain-resistant countertops, and silent high-suction ventilation systems.',
    idealFor:
      'Homeowners requiring a practical, hygienic, low-maintenance kitchen with maximum usable storage and durable materials.',
    keyFeatures: [
      'Marine-grade boiling-waterproof ply (IS 710) carcass construction',
      'German soft-close drawer runners and hinge systems (Hafele / Blum)',
      'Dedicated heavy Indian cookware & kadhai tandem deep pull-outs',
      'Turmeric- and heat-resistant quartz or sintered stone countertops',
      'Concealed high-suction chimney ducting and smart corner solutions',
    ],
    deliverables: [
      'Detailed 2D kitchen modular elevation & internal section drawings',
      'Appliance integration and plumbing relocation drawings',
      'Hardware specification sheets & internal organizer catalog',
      'Countertop slab cutting & edge profile specifications',
    ],
    image: `${import.meta.env.BASE_URL}images/services/service_kitchen.jpg`,
    timelineEstimate: '4–6 Weeks',
  },
  {
    id: 'bedrooms-wardrobes',
    slug: 'bedrooms-and-wardrobes',
    title: 'Bedrooms & Bespoke Wardrobes',
    subtitle: 'Restful Sanctuaries with Intelligent, Clutter-Free Storage',
    description:
      'Designing peaceful bedroom retreats centered on acoustic quietude, tactile warmth, and ergonomic storage. From floor-to-ceiling walk-in wardrobes with sensor LEDs to integrated dressing mirrors and upholstered headboards.',
    idealFor:
      'Couples, kids, and elders wanting customized bedroom layouts tailored to their specific storage needs and sleep comfort.',
    keyFeatures: [
      'Ergonomically planned wardrobe internals (saree racks, hanging rods, jewelry trays)',
      'Fluted glass or matte laminate finish options with profile handles',
      'Integrated bedside cantilever ledges and clutter-free phone charging niches',
      'Acoustic wall paneling and blackout curtain pelmet integration',
      'Dressing vanity tables with shadowless warm backlit mirrors',
    ],
    deliverables: [
      'Internal wardrobe partitioning layout drawings with millimeter precision',
      'Bed frame & headboard manufacturing blueprints',
      'Electrical switchboard relocation & reading light positions',
      'Hardware and drawer runner load-rating schedules',
    ],
    image: `${import.meta.env.BASE_URL}images/services/service_bedroom.jpg`,
    timelineEstimate: '5–8 Weeks',
  },
  {
    id: 'commercial-interiors',
    slug: 'commercial-interiors',
    title: 'Commercial & Boutique Workspaces',
    subtitle: 'Work Environments That Inspire Creativity & Reflect Your Brand',
    description:
      'Purpose-built corporate and creative interiors for agencies, startups, executive suites, and boutique retail spaces. We engineer acoustic comfort, flexible collaborative zones, and professional brand identity into physical spaces.',
    idealFor:
      'Founders, business owners, and corporate leaders in Pune & Mumbai seeking inspiring workspaces that foster collaboration and impress clients.',
    keyFeatures: [
      'Strategic density planning & compliant fire/circulation corridors',
      'Acoustic privacy pods and collaborative breakout lounges',
      'Biophilic indoor greenery and natural daylight optimization',
      'Heavy-duty commercial floor finishes (microcement, engineered vinyl, terrazzo)',
      'Smart lighting automation and low operational energy footprint',
    ],
    deliverables: [
      'Complete space utilization and occupancy layouts',
      'MEP and HVAC coordination drawings',
      'Acoustic testing recommendations and baffle drawings',
      'Custom reception desk and boardroom furniture details',
    ],
    image: `${import.meta.env.BASE_URL}images/services/service_commercial.jpg`,
    timelineEstimate: '8–14 Weeks',
  },
  {
    id: 'renovation-turnkey',
    slug: 'renovation-and-turnkey',
    title: 'Renovation & Turnkey Execution',
    subtitle: 'Breathe New Life into Existing Spaces with Seamless Coordination',
    description:
      'Transforming outdated or poorly laid-out resale properties into luminous, contemporary spaces. We oversee selective demolition, civil updates, plumbing/electrical overhaul, and coordinate execution with vetted contractors.',
    idealFor:
      'Homeowners who purchased older resale apartments or families wanting to modernize a decade-old home without the stress of managing multiple vendors.',
    keyFeatures: [
      'Detailed structural assessment & non-load-bearing partition removal',
      'Modernization of old bathroom plumbing, waterproofing, and tilework',
      'Complete rewiring for modern appliances and home automation',
      'Single-point project manager coordinating carpentry, painting, and civil teams',
      'Transparent milestone-based progress tracking and quality checklists',
    ],
    deliverables: [
      'Demolition & reconstruction architectural drawings',
      'Comprehensive material procurement and brand schedule',
      'Weekly photo/video milestone reports',
      'Handover testing & snag-list closure protocol',
    ],
    image: `${import.meta.env.BASE_URL}images/services/service_renovation.jpg`,
    timelineEstimate: '12–18 Weeks',
  },
];
