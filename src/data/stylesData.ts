import type { DesignStyleItem } from '../types';

export const DESIGN_STYLES: DesignStyleItem[] = [
  {
    id: 'modern-contemporary',
    name: 'Modern Contemporary',
    shortDesc: 'Clean lines, fluid spaces, and subtle luxury designed for modern urban apartments.',
    fullDesc:
      'Defined by crisp horizontal silhouettes, concealed architectural lighting, neutral backdrops with occasional brass highlights, and functional bespoke joinery that makes spaces feel airy and uncluttered.',
    keyElements: ['Concealed profile lighting', 'Fluted wall panels', 'Neutral microcement & stone', 'Curved sculptural seating'],
    palette: ['#F5EFEB', '#D4C5B9', '#4A3B32', '#C19A5B'],
    image: '${import.meta.env.BASE_URL}images/styles/style_modern_contemporary.jpg',
  },
  {
    id: 'minimalist',
    name: 'Warm Minimalism',
    shortDesc: 'Eliminating the superfluous to focus on light, tactile material textures, and breathable calm.',
    fullDesc:
      'Rather than cold or sterile minimalism, Warm Minimalism embraces tactile plaster finishes, untreated woods, raw linen curtains, and purposeful negative space that allows every carefully chosen piece to breathe.',
    keyElements: ['Lime-wash wall finishes', 'Low-profile timber furniture', 'Recessed shadow gaps', 'Belgian linen drapery'],
    palette: ['#FAF8F5', '#E3DDD3', '#8C7A6B', '#2B2521'],
    image: '${import.meta.env.BASE_URL}images/styles/style_minimalist.jpg',
  },
  {
    id: 'japandi',
    name: 'Japandi Fusion',
    shortDesc: 'A harmonious intersection of Japanese wabi-sabi simplicity and Scandinavian functional warmth.',
    fullDesc:
      'Characterized by slatted wooden screens, low platform beds, tatami-inspired weaves, paper light lanterns, and honest natural materials that age gracefully over time.',
    keyElements: ['Vertical wood battens', 'Paper pendant lights', 'Light oak & bamboo textures', 'Earthy ceramic accessories'],
    palette: ['#F3EFEA', '#D9CEBF', '#6B5B4D', '#1D1A18'],
    image: '${import.meta.env.BASE_URL}images/styles/style_japandi.jpg',
  },
  {
    id: 'indian-modern',
    name: 'Indian Modern',
    shortDesc: 'Traditional Indian spatial elements and artisanal crafts reinterpreted through a contemporary lens.',
    fullDesc:
      'Seamlessly blends indigenous natural stones (Kota, Jaisalmer yellow stone, Kadappa), hand-woven cane webbing, brass pooja niches, and handcrafted textiles with contemporary European architectural forms.',
    keyElements: ['Honed Kota stone flooring', 'Hand-woven cane cabinetry', 'Brushed brass pooja accents', 'Handloom dhurrie rugs'],
    palette: ['#F7F3EE', '#586154', '#8C5A3C', '#C5A059'],
    image: '${import.meta.env.BASE_URL}images/styles/style_indian_modern.jpg',
  },
  {
    id: 'luxury-modern',
    name: 'Luxury Modern',
    shortDesc: 'Sophisticated glamour, bookmatched marbles, metallic accents, and tailored acoustic upholstery.',
    fullDesc:
      'Designed for grand penthouses and luxury suites. Features backlit onyx or marble surfaces, smoked mirror accents, rich bouclé and velvet upholstery, and custom statement lighting.',
    keyElements: ['Bookmatched Italian marble', 'Smoked bronze glass', 'Velvet & bouclé textures', 'High-gloss lacquer details'],
    palette: ['#ECE7DE', '#786858', '#C19A5B', '#1A1817'],
    image: '${import.meta.env.BASE_URL}images/styles/style_luxury_modern.jpg',
  },
  {
    id: 'warm-earthy',
    name: 'Warm Earthy Interiors',
    shortDesc: 'Terracotta, clay plasters, jute, and raw timbers creating deep grounding and connection to nature.',
    fullDesc:
      'Rooted in the organic warmth of the earth, this aesthetic layers burnt sienna, warm taupes, hand-molded terracotta tiles, raw jute rugs, and leafy indoor plants that thrive in Indian climates.',
    keyElements: ['Terracotta floor tiles', 'Unpolished natural teak', 'Jute & sisal floor coverings', 'Clay pottery & botanicals'],
    palette: ['#F9F6F0', '#DFCFBE', '#9E5B42', '#3D4238'],
    image: '${import.meta.env.BASE_URL}images/styles/style_warm_earthy.jpg',
  },
  {
    id: 'industrial',
    name: 'Refined Industrial',
    shortDesc: 'Exposed structural masonry, blackened metal profiles, and warm salvaged timber accents.',
    fullDesc:
      'A softer, more residential take on urban loft aesthetics. Balances exposed raw brick or polished concrete with warm amber filament lighting, plush leather loungers, and custom black steel partition glazing.',
    keyElements: ['Matte black steel framework', 'Exposed concrete / microcement', 'Distressed vintage leather', 'Edison warm pendants'],
    palette: ['#EAE6DF', '#7D756C', '#322E2B', '#8C4D35'],
    image: '${import.meta.env.BASE_URL}images/styles/style_industrial.jpg',
  },
  {
    id: 'traditional-fusion',
    name: 'Traditional Indian Fusion',
    shortDesc: 'Heirloom wood carvings, brass diyas, and jali fretwork celebrating rich heritage in modern settings.',
    fullDesc:
      'Celebrates regional Indian architectural traditions—such as carved Chettinad pillars, delicate wooden jali screens for ventilation, and brass Urli bowls—balanced against crisp white walls and modern furniture silhouettes.',
    keyElements: ['Laser-cut geometric jali screens', 'Reclaimed carved wooden elements', 'Brass temple bells & lanterns', 'Vibrant silk cushion accents'],
    palette: ['#FBF7F0', '#D3B89E', '#A74A32', '#415243'],
    image: '${import.meta.env.BASE_URL}images/styles/style_traditional_fusion.jpg',
  },
];
