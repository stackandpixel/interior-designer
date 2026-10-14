import type { ProjectItem } from '../types';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'project-1',
    slug: 'contemporary-3bhk-apartment-pune',
    title: 'Contemporary 3BHK Apartment',
    propertyType: '3BHK Premium High-Rise Apartment',
    location: 'Baner, Pune',
    city: 'Pune',
    carpetArea: '1,720 sq.ft.',
    designStyle: 'Contemporary Indian Minimalism',
    year: '2025',
    duration: '14 Weeks (Concept to Completion)',
    coverImage: `${import.meta.env.BASE_URL}images/projects/project_3bhk_pune.jpg`,
    galleryImages: [
      `${import.meta.env.BASE_URL}images/projects/project_3bhk_pune.jpg`,
  `${import.meta.env.BASE_URL}images/projects/dining_modern_indian.jpg`,
  `${import.meta.env.BASE_URL}images/projects/modular_kitchen_pune.jpg`,
  `${import.meta.env.BASE_URL}images/projects/project_master_bedroom.jpg`,
    ],
    shortDescription:
      'A serene, light-filled family residence pairing natural walnut panelling, soft travertine stone surfaces, and concealed architectural ambient illumination.',
    overview:
      'Designed for an IT executive couple and their young child, this 3BHK high-rise apartment in Baner balances the warmth of natural Indian timber with the crisp discipline of modern European minimalism. By removing a non-structural partition between the kitchen and living room, we established an effortless spatial rhythm and enhanced natural cross-ventilation.',
    clientBrief:
      'The clients sought a clutter-free sanctuary that resisted the cookie-cutter modular look. Key priorities included ample concealed storage for books and everyday essentials, a dedicated work-from-home corner with natural light, and a dining zone suitable for hosting weekend dinner gatherings.',
    designSolution:
      'We anchored the open living-dining pavilion with a bespoke fluted walnut feature wall that conceals all wiring and electrical distribution. Travertine-finished microcement covers the television niche, softly backlit with 2700K warm LED ribbons. Floor-to-ceiling sheer linen drapes soften the bright Pune afternoon daylight.',
    scopeOfWork: [
      'Comprehensive spatial re-planning & civil modifications',
      'Custom fluted walnut joinery & bespoke low credenza',
      'Architectural cove lighting & magnetic track system',
      'Integrated dining console with built-in bar cabinet',
      'Curated soft furnishings, custom rugs & curated art selection',
    ],
    materialPalette: [
      { name: 'American Walnut Veneer', description: 'Matte PU finish with open grain', colorHex: '#4A3728' },
      { name: 'Honed Navona Travertine', description: 'Beige natural stone with subtle vein cut', colorHex: '#D7CBBA' },
      { name: 'Brushed Champagne Brass', description: 'Hardware & concealed profile trims', colorHex: '#C5A059' },
      { name: 'Raw Belgian Linen', description: 'Triple-pleat sheer window treatments', colorHex: '#EAE5DC' },
    ],
    isConceptual: true,
  },
  {
    id: 'project-2',
    slug: 'warm-minimalist-living-room-mumbai',
    title: 'Warm Minimalist Living Room',
    propertyType: 'Sea-Facing 2BHK Apartment',
    location: 'Bandra West, Mumbai',
    city: 'Mumbai',
    carpetArea: '1,150 sq.ft.',
    designStyle: 'Wabi-Sabi & Warm Earthy',
    year: '2025',
    duration: '10 Weeks',
    coverImage: `${import.meta.env.BASE_URL}images/projects/project_minimalist_mumbai.jpg`,
    galleryImages: [
        `${import.meta.env.BASE_URL}images/projects/project_minimalist_mumbai.jpg`,
`${import.meta.env.BASE_URL}images/projects/project_3bhk_pune.jpg`,
`${import.meta.env.BASE_URL}images/projects/dining_modern_indian.jpg`,
    ],
    shortDescription:
      'A tactile coastal retreat celebrating breathable lime-washed walls, solid reclaimed teak low seating, and natural daylight filtering through sheer cotton drapery.',
    overview:
      'Located along the Bandra coastline, this apartment needed to feel like a tranquil oasis away from Mumbai’s kinetic energy. Our approach focused on sensory honesty—restricting the palette to limestone, untreated teak, and hand-loomed Indian cottons.',
    clientBrief:
      'Create an uncluttered, grounded living room that maximizes the horizon view, encourages barefoot living, and houses an extensive collection of Indian ceramic pottery and vinyl records.',
    designSolution:
      'We specified a breathable mineral lime-wash plaster across all walls and ceilings to handle coastal humidity while imparting a soft, velvety texture. Furniture was kept intentionally low-slung, with a custom platform bench carved from reclaimed teak that extends into window-side daybed seating.',
    scopeOfWork: [
      'Artisanal lime-wash wall & ceiling treatments',
      'Custom low-slung teakwood lounge chairs & daybed',
      'Handcrafted terracotta planters & bespoke ceramic display ledges',
      'Acoustic vinyl storage console with bronze detailing',
      'Concealed roller blinds with motorized sun-filtering fabrics',
    ],
    materialPalette: [
      { name: 'Mineral Lime Plaster', description: 'Warm bone-white breathable textured wash', colorHex: '#EFECE6' },
      { name: 'Reclaimed Teakwood', description: 'Hand-rubbed organic oil polish', colorHex: '#61432A' },
      { name: 'Hand-loomed Jute & Cotton', description: 'Custom floor rug with subtle geometric weave', colorHex: '#DDD1C1' },
      { name: 'Patinated Dark Bronze', description: 'Minimalist joinery accents', colorHex: '#3D352E' },
    ],
    isConceptual: true,
  },
  {
    id: 'project-3',
    slug: 'modern-modular-kitchen-pune',
    title: 'Modern Modular Kitchen',
    propertyType: 'Residential Penthouse Kitchen',
    location: 'Koregaon Park, Pune',
    city: 'Pune',
    carpetArea: '280 sq.ft.',
    designStyle: 'Euro-Indian Ergonomic Modular',
    year: '2025',
    duration: '6 Weeks',
    coverImage: `${import.meta.env.BASE_URL}images/projects/modular_kitchen_pune.jpg`,
    galleryImages: [
        `${import.meta.env.BASE_URL}images/projects/modular_kitchen_pune.jpg`,
`${import.meta.env.BASE_URL}images/projects/dining_modern_indian.jpg`,
`${import.meta.env.BASE_URL}images/projects/project_3bhk_pune.jpg`,
    ],
    shortDescription:
      'High-performance culinary workspace pairing seamless anti-fingerprint acrylic cabinetry, honed quartz countertops, and dedicated heavy Indian cooking zones.',
    overview:
      'Indian residential kitchens require a delicate balance between rigorous heavy-duty cooking demands and refined contemporary entertaining aesthetics. This kitchen separates the dry preparation and island breakfast bar from an intensive wet prep galley.',
    clientBrief:
      'A chef-grade modular kitchen with high suction concealed chimney, deep spice and pantry pull-outs, dedicated space for Indian cookware (kadhai, heavy cast iron), and seamless quartz surfaces that resist turmeric and oil staining.',
    designSolution:
      'We designed an ergonomic L-shaped counter layout anchored by a central fluted island. Cabinets use marine-grade waterproof ply (IS 710) finished in matte slate-beige and natural walnut veneer. Quartz countertops with a 20mm profile provide non-porous stain resistance.',
    scopeOfWork: [
      'IS 710 marine ply carcass construction with Hafele soft-close hardware',
      'Dual-zone ventilation plan with 1400 m³/hr filterless chimney',
      'Full-height pull-out pantry tall unit & tandem spice organizers',
      'Under-cabinet task lighting at 3000K warm neutral illumination',
      'Built-in microwave, convection oven, and induction cooktop integration',
    ],
    materialPalette: [
      { name: 'Anti-Fingerprint Matte Laminate', description: 'Soft Cashmere Grey with nano-coating', colorHex: '#D3CCC2' },
      { name: 'Calacatta Honed Quartz', description: 'Stain-proof 20mm engineered stone', colorHex: '#F2EDE4' },
      { name: 'Fluted Smoked Oak', description: 'Island accent panelling', colorHex: '#4E3C30' },
      { name: 'Anodized Black Aluminum', description: 'Gola profile handleless channel system', colorHex: '#252321' },
    ],
    isConceptual: true,
  },
  {
    id: 'project-4',
    slug: 'luxury-master-bedroom-thane',
    title: 'Luxury Master Bedroom Suite',
    propertyType: 'High-End Residential Suite',
    location: 'Ghubunder Road, Thane',
    city: 'Thane',
    carpetArea: '440 sq.ft.',
    designStyle: 'Quiet Luxury & Warm Modern',
    year: '2024',
    duration: '8 Weeks',
    coverImage: `${import.meta.env.BASE_URL}images/projects/project_master_bedroom.jpg`,
    galleryImages: [
        `${import.meta.env.BASE_URL}images/projects/project_master_bedroom.jpg`,
`${import.meta.env.BASE_URL}images/projects/walkin_wardrobe.jpg`,
`${import.meta.env.BASE_URL}images/projects/luxury_bathroom.jpg`,
    ],
    shortDescription:
      'An intimate master retreat defined by upholstered acoustic headboard panelling, ribbed glass walk-in wardrobe, and integrated bedside ambient warmth.',
    overview:
      'Created as a sanctuary for restful nights and slow mornings, this suite brings together plush acoustic fabric wall claddings, fluted timber accents, and ambient circadian lighting that subtly dims into warm amber tones before bedtime.',
    clientBrief:
      'The owners wanted a five-star boutique hotel feeling in their everyday home. Crucial requirements included sound insulation from street noise, a dedicated vanity dressing table, and ample his-and-hers wardrobe storage without visual bulk.',
    designSolution:
      'We integrated a full-width upholstered acoustic headboard panel flanked by brushed bronze reading sconces. The walk-in wardrobe uses dark tinted fluted glass doors with sensor-activated internal warm LED strips, providing visual depth while concealing wardrobe contents.',
    scopeOfWork: [
      'Full-width upholstered acoustic panel system with brass reveals',
      'Walk-in wardrobe with tinted fluted glass and motion-sensor LEDs',
      'Floating bedside cantilevered ledges with wireless charging docks',
      'Automated blackout drapery recessed in false-ceiling pelmet',
      'Dressing vanity with arched LED backlit mirror and velvet pouf',
    ],
    materialPalette: [
      { name: 'Textured Bouclé & Linen', description: 'Oatmeal upholstered wall panelling', colorHex: '#DFD8CE' },
      { name: 'Tinted Fluted Bronze Glass', description: 'Wardrobe door panels with micro-ribbing', colorHex: '#7C6753' },
      { name: 'Natural Oak Veneer', description: 'Ultra-matte finish with tactile grain', colorHex: '#8C745E' },
      { name: 'Antique Brushed Bronze', description: 'Minimalist bedside pendant lights', colorHex: '#B18E50' },
    ],
    isConceptual: true,
  },
  {
    id: 'project-5',
    slug: 'contemporary-villa-maharashtra',
    title: 'Contemporary Country Villa',
    propertyType: 'Weekend Villa & Farmhouse Estate',
    location: 'Pawna Lake, Maharashtra',
    city: 'Pune District',
    carpetArea: '4,200 sq.ft.',
    designStyle: 'Tropical Modern & Vernacular Fusion',
    year: '2025',
    duration: '22 Weeks',
    coverImage: `${import.meta.env.BASE_URL}images/projects/project_villa_maharashtra.jpg`,
    galleryImages: [
        `${import.meta.env.BASE_URL}images/projects/project_villa_maharashtra.jpg`,
`${import.meta.env.BASE_URL}images/projects/project_minimalist_mumbai.jpg`,
`${import.meta.env.BASE_URL}images/projects/dining_modern_indian.jpg`,
`${import.meta.env.BASE_URL}images/projects/project_3bhk_pune.jpg`,
    ],
    shortDescription:
      'A sprawling lakeside sanctuary fusing double-height exposed basalt stone walls, polished Kota stone flooring, and expansive glass portals framing the Sahyadri hills.',
    overview:
      'Perched on the rolling foothills overlooking Pawna Lake, this villa merges indoor and outdoor living. Locally quarried black basalt stone forms the anchor walls, creating natural thermal mass that keeps the interiors cool throughout the intense Maharashtra summers.',
    clientBrief:
      'Design a multi-generational retreat where extended family can gather for weekends. The space had to be durable, low-maintenance, deeply connected to nature, and capable of hosting up to 20 guests for festive lunches.',
    designSolution:
      'We designed a double-height living pavilion oriented towards the prevailing lake breeze. Large sliding glass portals open completely to a sheltered verandah (otla) lined with polished mirror-finish Kota stone. Custom oversized daybeds and cane-backed dining chairs pay homage to regional craftsmanship.',
    scopeOfWork: [
      'Full interior architecture & architectural lighting strategy',
      'Hand-dressed local black basalt accent masonry',
      'Mirror-polished greenish-grey Kota stone flooring throughout',
      'Custom 14-seater solid teak dining table with cane-weave seating',
      'Deep verandah daybeds and weather-resistant outdoor lounge pieces',
    ],
    materialPalette: [
      { name: 'Local Black Basalt Stone', description: 'Rough chisel-faced feature walls', colorHex: '#383634' },
      { name: 'Honed Green Kota Stone', description: 'Natural sedimentary limestone slabs', colorHex: '#586154' },
      { name: 'Solid Teak & Hand-Woven Cane', description: 'Custom artisanal dining and lounge furniture', colorHex: '#6F5036' },
      { name: 'Earthy Terracotta Tile', description: 'Verandah roof and courtyard accents', colorHex: '#9E5B42' },
    ],
    isConceptual: true,
  },
  {
    id: 'project-6',
    slug: 'boutique-commercial-workspace-pune',
    title: 'Boutique Creative Workspace',
    propertyType: 'Studio Office & Client Suite',
    location: 'Kalyani Nagar, Pune',
    city: 'Pune',
    carpetArea: '2,400 sq.ft.',
    designStyle: 'Biophilic Warm Industrial',
    year: '2024',
    duration: '12 Weeks',
    coverImage: `${import.meta.env.BASE_URL}images/projects/commercial_workspace_pune.jpg`,
    galleryImages: [
        `${import.meta.env.BASE_URL}images/projects/commercial_workspace_pune.jpg`,
`${import.meta.env.BASE_URL}images/projects/project_3bhk_pune.jpg`,
`${import.meta.env.BASE_URL}images/projects/modular_kitchen_pune.jpg`,
    ],
    shortDescription:
      'An inspiring commercial studio combining seamless microcement flooring, ribbed acoustic wall panels, lush indoor plant courtyards, and warm collaborative breakout zones.',
    overview:
      'Commissioned by a Pune-based digital design agency, this workspace departs from sterile corporate cubicles. Instead, it offers a collection of flexible work settings—ranging from high-focus quiet booths to an airy, sunlit communal cafe lounge.',
    clientBrief:
      'A workspace that attracts creative talent and leaves a memorable impression on visiting clients. Must accommodate 30 workstations, two private conference pods, a material sampling library, and a relaxed breakout pantry.',
    designSolution:
      'We implemented an open-ceiling MEP concept with acoustic ceiling baffles finished in natural sage green. Large bespoke oak workbenches feature concealed cable management, and biophilic planter boxes double as subtle zone dividers between open desks and client circulation routes.',
    scopeOfWork: [
      'Comprehensive commercial space planning & MEP layout',
      'Acoustic felt wall panelling & suspended ceiling baffle grid',
      'Custom solid oak collaboration desks with integrated power docks',
      'Private acoustic call pods with smart glass opacity control',
      'Boutique coffee bar and pantry island with terrazzo countertop',
    ],
    materialPalette: [
      { name: 'Seamless Microcement Floor', description: 'Warm grey matte finish with epoxy sealant', colorHex: '#B8B2A9' },
      { name: 'Ribbed Acoustic Felt Panels', description: 'Muted olive and charcoal sound absorption', colorHex: '#525B4D' },
      { name: 'Natural Solid Oak', description: 'Hand-waxed commercial grade work surfaces', colorHex: '#7C6752' },
      { name: 'Custom Terrazzo Slab', description: 'White marble and river pebble aggregate', colorHex: '#DED5C8' },
    ],
    isConceptual: true,
  },
];
