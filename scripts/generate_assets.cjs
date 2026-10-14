const fs = require('fs');
const path = require('path');

const dirs = [
  'public/images/hero',
  'public/images/projects',
  'public/images/services',
  'public/images/styles',
  'public/images/gallery',
  'public/images/team',
  'public/images/before_after',
  'public/images/instagram',
  'public/images/moodboards',
];

dirs.forEach((dir) => {
  fs.mkdirSync(path.join(process.cwd(), dir), { recursive: true });
});

function createSvg({ title, subtitle, style, type, aspect = '16/9', palette = ['#FAF7F2', '#3F3127', '#C19A5B', '#EAE3D9'] }) {
  const [bgLight, darkTone, accent, midTone] = palette;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="wallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgLight}" />
      <stop offset="60%" stop-color="${midTone}" />
      <stop offset="100%" stop-color="#D9CFC4" />
    </linearGradient>
    <linearGradient id="woodGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${darkTone}" />
      <stop offset="100%" stop-color="#241B15" />
    </linearGradient>
    <linearGradient id="lightBeam" x1="0%" y1="0%" x2="100%" y2="80%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.35" />
      <stop offset="50%" stop-color="${accent}" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="glowWarm" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.8" />
      <stop offset="100%" stop-color="${accent}" stop-opacity="0" />
    </linearGradient>
    <pattern id="fluted" width="16" height="16" patternUnits="userSpaceOnUse">
      <rect width="8" height="16" fill="${darkTone}" opacity="0.9" />
      <rect x="8" width="8" height="16" fill="#201813" />
    </pattern>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${darkTone}" stroke-opacity="0.05" stroke-width="1" />
    </pattern>
    <filter id="softBlur" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="30" />
    </filter>
  </defs>

  <!-- Architectural Room Shell -->
  <rect width="1200" height="800" fill="url(#wallGrad)" />
  <rect width="1200" height="800" fill="url(#grid)" />

  <!-- Natural Light Wash from Window -->
  <polygon points="0,0 600,0 850,800 0,800" fill="url(#lightBeam)" />
  <circle cx="200" cy="120" r="180" fill="${accent}" opacity="0.12" filter="url(#softBlur)" />

  <!-- Floor Perspective -->
  <polygon points="0,520 1200,520 1200,800 0,800" fill="#E8DEC3" opacity="0.45" />
  <line x1="0" y1="520" x2="1200" y2="520" stroke="${darkTone}" stroke-opacity="0.15" stroke-width="2" />
  
  <!-- Architectural Fluted Feature Wall -->
  <rect x="580" y="80" width="460" height="440" fill="url(#fluted)" rx="6" />
  <rect x="580" y="80" width="460" height="12" fill="${accent}" opacity="0.8" />
  <!-- Concealed Cove Light Glow -->
  <rect x="570" y="72" width="480" height="30" fill="url(#glowWarm)" opacity="0.3" filter="url(#softBlur)" />

  <!-- Artwork / Floating Travertine Console -->
  <rect x="660" y="140" width="300" height="180" fill="#EFE8DE" stroke="${darkTone}" stroke-opacity="0.1" rx="4" />
  <rect x="680" y="160" width="260" height="140" fill="#FAF7F2" />
  <path d="M 700 250 Q 810 180 920 230" fill="none" stroke="${accent}" stroke-width="3" opacity="0.7" />
  <circle cx="810" cy="205" r="18" fill="${darkTone}" opacity="0.6" />

  <!-- Low Console Floating Credenza -->
  <rect x="620" y="380" width="380" height="70" fill="url(#woodGrad)" rx="3" />
  <rect x="640" y="445" width="340" height="4" fill="${accent}" opacity="0.9" />

  <!-- Elegant Sculptural Sofa & Lounge Furniture -->
  <g transform="translate(140, 430)">
    <!-- Main Sofa Base -->
    <rect x="0" y="40" width="460" height="110" rx="20" fill="#F0EBE1" stroke="${darkTone}" stroke-opacity="0.1" />
    <!-- Sofa Backrest Cushion -->
    <rect x="15" y="0" width="430" height="70" rx="16" fill="#E6DFD3" />
    <!-- Accent Bolster Cushions -->
    <ellipse cx="70" cy="40" rx="28" ry="18" fill="${accent}" opacity="0.75" />
    <ellipse cx="140" cy="40" rx="24" ry="16" fill="${darkTone}" opacity="0.4" />
    <ellipse cx="380" cy="40" rx="28" ry="18" fill="#D3C7B6" />
  </g>

  <!-- Architectural Coffee Table -->
  <ellipse cx="370" cy="620" rx="140" ry="46" fill="#FAF6EE" stroke="${darkTone}" stroke-opacity="0.15" stroke-width="2" />
  <ellipse cx="370" cy="620" rx="125" ry="38" fill="none" stroke="${accent}" stroke-opacity="0.4" stroke-width="1.5" />
  <!-- Ceramic Vase on Table -->
  <ellipse cx="350" cy="610" rx="10" ry="16" fill="${darkTone}" opacity="0.7" />
  <path d="M 350 594 Q 355 570 365 560" stroke="${accent}" stroke-width="2" fill="none" />

  <!-- Minimalist Brass Floor Lamp / Pendant -->
  <line x1="880" y1="0" x2="880" y2="280" stroke="${accent}" stroke-width="2" />
  <circle cx="880" cy="285" r="16" fill="${accent}" opacity="0.9" />
  <ellipse cx="880" cy="300" rx="45" ry="25" fill="${accent}" opacity="0.25" filter="url(#softBlur)" />

  <!-- Biophilic Ficus Planter in Ceramic Pot -->
  <g transform="translate(90, 360)">
    <path d="M 35 150 L 5 230 L 75 230 Z" fill="#9E5B42" opacity="0.8" />
    <path d="M 40 150 Q 10 90 30 40" stroke="#5A6B56" stroke-width="4" fill="none" />
    <path d="M 40 150 Q 80 80 50 20" stroke="#5A6B56" stroke-width="4" fill="none" />
    <ellipse cx="28" cy="40" rx="22" ry="14" fill="#5A6B56" opacity="0.85" />
    <ellipse cx="50" cy="25" rx="20" ry="12" fill="#6A7D65" opacity="0.9" />
    <ellipse cx="5" cy="90" rx="18" ry="12" fill="#4E5D4A" opacity="0.85" />
  </g>

  <!-- Title / Architectural Badge -->
  <g transform="translate(60, 720)">
    <rect x="0" y="0" width="460" height="48" rx="6" fill="#1E1A17" opacity="0.92" />
    <text x="20" y="24" fill="#FAF7F2" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" letter-spacing="1.5">
      ${title.toUpperCase()}
    </text>
    <text x="20" y="40" fill="${accent}" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" letter-spacing="1">
      ${subtitle ? subtitle.toUpperCase() : 'AURA SPACES STUDIO · ARCHITECTURAL CONCEPT'}
    </text>
  </g>
</svg>`;
}

function createKitchenSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="kWall" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F9F6F0" />
      <stop offset="100%" stop-color="#ECE3D7" />
    </linearGradient>
    <linearGradient id="walnutCab" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#4A3728" />
      <stop offset="100%" stop-color="#2D1F16" />
    </linearGradient>
    <linearGradient id="quartz" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="50%" stop-color="#F4EFEA" />
      <stop offset="100%" stop-color="#EBE3D7" />
    </linearGradient>
    <linearGradient id="brassK" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E0BA74" />
      <stop offset="100%" stop-color="#A67C38" />
    </linearGradient>
    <pattern id="subway" width="50" height="25" patternUnits="userSpaceOnUse">
      <rect width="48" height="23" fill="#FFFFFF" rx="1" />
      <rect width="50" height="25" fill="none" stroke="#D8CEBF" stroke-width="1" />
    </pattern>
  </defs>

  <rect width="1200" height="800" fill="url(#kWall)" />
  
  <!-- Backsplash Area -->
  <rect x="150" y="180" width="900" height="180" fill="url(#subway)" />
  <!-- Under-Cabinet Warm Lighting Strip -->
  <rect x="150" y="176" width="900" height="6" fill="url(#brassK)" opacity="0.9" />

  <!-- Overhead Fluted & Frosted Glass Wall Cabinets -->
  <rect x="150" y="60" width="900" height="120" fill="url(#walnutCab)" rx="2" />
  <g stroke="#3A281E" stroke-width="2">
    <line x1="375" y1="60" x2="375" y2="180" />
    <line x1="600" y1="60" x2="600" y2="180" />
    <line x1="825" y1="60" x2="825" y2="180" />
  </g>

  <!-- Modern Integrated Chimney Hood -->
  <rect x="520" y="40" width="160" height="140" fill="#221F1E" rx="3" />
  <rect x="530" y="170" width="140" height="10" fill="url(#brassK)" />

  <!-- Main Quartz Countertop Profile -->
  <rect x="120" y="360" width="960" height="30" fill="url(#quartz)" stroke="#D8CEBF" rx="2" />
  <rect x="120" y="390" width="960" height="220" fill="url(#walnutCab)" />
  
  <!-- Sleek Gola Profile Handleless Channels -->
  <rect x="120" y="415" width="960" height="8" fill="#1C1714" />
  <rect x="120" y="485" width="960" height="8" fill="#1C1714" />
  <rect x="120" y="555" width="960" height="8" fill="#1C1714" />

  <!-- Island Counter in Foreground -->
  <g transform="translate(280, 480)">
    <polygon points="40,30 580,30 640,110 0,110" fill="url(#quartz)" stroke="#D8CEBF" stroke-width="1.5" />
    <rect x="0" y="110" width="640" height="170" fill="#3D2D21" rx="4" />
    <!-- Island Bar Stools with Brass Footrests -->
    <g transform="translate(120, 150)">
      <ellipse cx="40" cy="15" rx="36" ry="12" fill="#D3C2AF" />
      <line x1="16" y1="20" x2="10" y2="120" stroke="#221C18" stroke-width="4" />
      <line x1="64" y1="20" x2="70" y2="120" stroke="#221C18" stroke-width="4" />
      <line x1="12" y1="80" x2="68" y2="80" stroke="url(#brassK)" stroke-width="3" />
    </g>
    <g transform="translate(340, 150)">
      <ellipse cx="40" cy="15" rx="36" ry="12" fill="#D3C2AF" />
      <line x1="16" y1="20" x2="10" y2="120" stroke="#221C18" stroke-width="4" />
      <line x1="64" y1="20" x2="70" y2="120" stroke="#221C18" stroke-width="4" />
      <line x1="12" y1="80" x2="68" y2="80" stroke="url(#brassK)" stroke-width="3" />
    </g>
  </g>

  <!-- Modern Dual Pendant Lamps -->
  <line x1="420" y1="0" x2="420" y2="280" stroke="url(#brassK)" stroke-width="2" />
  <polygon points="390,320 450,320 430,280 410,280" fill="url(#brassK)" />
  <line x1="720" y1="0" x2="720" y2="280" stroke="url(#brassK)" stroke-width="2" />
  <polygon points="690,320 750,320 730,280 710,280" fill="url(#brassK)" />

  <!-- Badge -->
  <g transform="translate(60, 720)">
    <rect x="0" y="0" width="460" height="48" rx="6" fill="#1E1A17" opacity="0.92" />
    <text x="20" y="24" fill="#FAF7F2" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" letter-spacing="1.5">
      MODERN MODULAR KITCHEN · PUNE
    </text>
    <text x="20" y="40" fill="#C19A5B" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" letter-spacing="1">
      IS 710 BWP MARINE PLY · HAFELE HARDWARE · CALACATTA QUARTZ
    </text>
  </g>
</svg>`;
}

function createBedroomSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="bWall" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F6F2EC" />
      <stop offset="100%" stop-color="#E8E0D5" />
    </linearGradient>
    <linearGradient id="brassSconce" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E8C98B" />
      <stop offset="100%" stop-color="#B28C48" />
    </linearGradient>
  </defs>

  <rect width="1200" height="800" fill="url(#bWall)" />

  <!-- Fluted Timber & Fabric Headboard Wall Accent -->
  <rect x="200" y="100" width="800" height="480" fill="#E2D9CC" rx="4" />
  <rect x="220" y="120" width="760" height="260" fill="#D3C7B6" rx="8" />

  <!-- Bed Base & Pillows -->
  <rect x="260" y="380" width="680" height="260" fill="#FAF7F2" rx="14" stroke="#C4B7A5" stroke-width="2" />
  <rect x="280" y="460" width="640" height="160" fill="#ECE5DB" rx="10" />

  <!-- Bed Runner / Throw -->
  <rect x="280" y="540" width="640" height="60" fill="#5F6D5B" opacity="0.85" rx="4" />

  <!-- Pillows Array -->
  <rect x="300" y="340" width="140" height="90" rx="8" fill="#FFFFFF" stroke="#D3C7B6" />
  <rect x="460" y="340" width="140" height="90" rx="8" fill="#FFFFFF" stroke="#D3C7B6" />
  <rect x="620" y="340" width="140" height="90" rx="8" fill="#FFFFFF" stroke="#D3C7B6" />
  <rect x="760" y="340" width="140" height="90" rx="8" fill="#FFFFFF" stroke="#D3C7B6" />

  <!-- Accent Cushions -->
  <rect x="370" y="375" width="100" height="70" rx="6" fill="#C19A5B" opacity="0.9" />
  <rect x="690" y="375" width="100" height="70" rx="6" fill="#4A3728" opacity="0.8" />

  <!-- Floating Bedside Tables -->
  <rect x="120" y="440" width="120" height="50" rx="3" fill="#3D2E24" />
  <rect x="960" y="440" width="120" height="50" rx="3" fill="#3D2E24" />

  <!-- Designer Bedside Sconces with Ambient Amber Halo -->
  <circle cx="180" cy="310" r="14" fill="url(#brassSconce)" />
  <circle cx="180" cy="310" r="45" fill="#E8C98B" opacity="0.2" />
  <line x1="180" y1="260" x2="180" y2="300" stroke="url(#brassSconce)" stroke-width="3" />

  <circle cx="1020" cy="310" r="14" fill="url(#brassSconce)" />
  <circle cx="1020" cy="310" r="45" fill="#E8C98B" opacity="0.2" />
  <line x1="1020" y1="260" x2="1020" y2="300" stroke="url(#brassSconce)" stroke-width="3" />

  <!-- Badge -->
  <g transform="translate(60, 720)">
    <rect x="0" y="0" width="460" height="48" rx="6" fill="#1E1A17" opacity="0.92" />
    <text x="20" y="24" fill="#FAF7F2" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" letter-spacing="1.5">
      LUXURY MASTER BEDROOM · THANE
    </text>
    <text x="20" y="40" fill="#C19A5B" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" letter-spacing="1">
      ACOUSTIC BOUCLÉ HEADBOARD · FLUTED BRONZE GLASS WARDROBE
    </text>
  </g>
</svg>`;
}

function createBeforeSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
  <rect width="1200" height="800" fill="#E6E0D6" />
  <!-- Harsh overhead fluorescent tube light simulation -->
  <rect x="450" y="40" width="300" height="15" fill="#FFFFFF" stroke="#999" />
  <polygon points="450,55 750,55 950,400 250,400" fill="#FFFFFF" opacity="0.18" />

  <!-- Dated plain tiled floor with stark seams -->
  <polygon points="0,480 1200,480 1200,800 0,800" fill="#DCD4C7" />
  <g stroke="#B8AEA0" stroke-width="2">
    <line x1="200" y1="480" x2="0" y2="800" />
    <line x1="500" y1="480" x2="350" y2="800" />
    <line x1="800" y1="480" x2="750" y2="800" />
    <line x1="1100" y1="480" x2="1150" y2="800" />
    <line x1="0" y1="580" x2="1200" y2="580" />
    <line x1="0" y1="690" x2="1200" y2="690" />
  </g>

  <!-- Bulky outdated dark laminate TV unit with exposed cables -->
  <rect x="250" y="220" width="700" height="260" fill="#54433A" stroke="#33251F" stroke-width="3" />
  <rect x="360" y="250" width="320" height="180" fill="#2A2422" />
  <!-- Tangled wires -->
  <path d="M 520 430 Q 510 490 530 510 Q 560 520 540 550" stroke="#111" stroke-width="3" fill="none" />
  <path d="M 600 430 Q 640 480 620 530" stroke="#111" stroke-width="2.5" fill="none" />

  <!-- Boxy synthetic sofa in awkward position -->
  <rect x="180" y="490" width="420" height="140" fill="#886E58" rx="4" />
  <rect x="200" y="460" width="380" height="70" fill="#6E5642" rx="4" />

  <!-- Stamp: DATED BEFORE STATE -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="220" height="38" rx="4" fill="#C84B31" />
    <text x="20" y="24" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" letter-spacing="2">
      ORIGINAL / BEFORE
    </text>
  </g>
  <g transform="translate(60, 720)">
    <rect x="0" y="0" width="520" height="48" rx="6" fill="#2B2521" opacity="0.9" />
    <text x="20" y="24" fill="#FAF7F2" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600">
      UNDERUTILIZED LAYOUT · HARSH LIGHTING
    </text>
    <text x="20" y="40" fill="#E28F79" font-family="'Plus Jakarta Sans', sans-serif" font-size="11">
      Exposed wiring, outdated bulky joinery, and lack of functional storage.
    </text>
  </g>
</svg>`;
}

function createAfterSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="warmWall" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FBF8F3" />
      <stop offset="100%" stop-color="#EBE3D7" />
    </linearGradient>
    <linearGradient id="brassA" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E8C98B" />
      <stop offset="100%" stop-color="#B28C48" />
    </linearGradient>
    <pattern id="afterFluted" width="12" height="12" patternUnits="userSpaceOnUse">
      <rect width="6" height="12" fill="#4A3728" />
      <rect x="6" width="6" height="12" fill="#38281C" />
    </pattern>
  </defs>

  <rect width="1200" height="800" fill="url(#warmWall)" />

  <!-- Ambient Cove Lighting at Ceiling -->
  <rect x="0" y="0" width="1200" height="14" fill="url(#brassA)" opacity="0.8" />
  <rect x="0" y="14" width="1200" height="30" fill="url(#brassA)" opacity="0.15" />

  <!-- Seamless Microcement Flooring -->
  <polygon points="0,480 1200,480 1200,800 0,800" fill="#DFD6C9" />
  <!-- Textured Organic Wool Rug -->
  <polygon points="180,510 1020,510 1100,750 100,750" fill="#EDE7DC" stroke="#CFC4B2" stroke-width="1.5" />

  <!-- Elegant Fluted Walnut Accent Wall with Integrated Media Unit -->
  <rect x="220" y="100" width="760" height="380" fill="url(#afterFluted)" rx="6" />
  <!-- Backlit Honed Travertine TV Panel -->
  <rect x="360" y="140" width="480" height="230" fill="#F4EFEA" rx="4" />
  <rect x="350" y="130" width="500" height="250" fill="none" stroke="url(#brassA)" stroke-width="2" opacity="0.6" />
  <!-- Flush Mounted Frame Television with Curated Art -->
  <rect x="420" y="170" width="360" height="170" fill="#2C2622" rx="2" />
  <path d="M 460 270 Q 560 210 660 250" stroke="#C19A5B" stroke-width="2.5" fill="none" />
  <circle cx="600" cy="220" r="14" fill="#C19A5B" opacity="0.8" />

  <!-- Floating Walnut Low Console with Concealed Channels -->
  <rect x="280" y="410" width="640" height="55" fill="#3D2E24" rx="4" />
  <rect x="300" y="460" width="600" height="4" fill="url(#brassA)" />

  <!-- Curved Bouclé Lounge Seating in Foreground -->
  <g transform="translate(180, 520)">
    <rect x="0" y="40" width="460" height="120" rx="28" fill="#F7F3EC" stroke="#C8BCAB" stroke-width="1.5" />
    <rect x="20" y="0" width="420" height="80" rx="20" fill="#EFE8DE" />
    <!-- Sage Velvet Throw Cushion -->
    <ellipse cx="90" cy="50" rx="28" ry="18" fill="#5F6D5B" opacity="0.9" />
    <ellipse cx="370" cy="50" rx="28" ry="18" fill="#C19A5B" opacity="0.85" />
  </g>

  <!-- Travertine Low Coffee Table with Ceramic Vessel -->
  <ellipse cx="780" cy="620" rx="130" ry="46" fill="#F4EFEA" stroke="#C8BCAB" stroke-width="2" />
  <ellipse cx="760" cy="610" rx="14" ry="20" fill="#3D2E24" />

  <!-- Stamp: PROPOSED REDESIGN -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="260" height="38" rx="4" fill="#5F6D5B" />
    <text x="20" y="24" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" letter-spacing="2">
      PROPOSED REDESIGN / AFTER
    </text>
  </g>
  <g transform="translate(60, 720)">
    <rect x="0" y="0" width="560" height="48" rx="6" fill="#1E1A17" opacity="0.95" />
    <text x="20" y="24" fill="#FAF7F2" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600">
      FLUTED WALNUT · CONCEALED MEDIA · LAYERED COVE LIGHTING
    </text>
    <text x="20" y="40" fill="#C19A5B" font-family="'Plus Jakarta Sans', sans-serif" font-size="11">
      Space-efficient circulation, hidden wiring, and tactile natural materials.
    </text>
  </g>
</svg>`;
}

// Generate base SVGs
const assets = [
  { path: 'public/images/hero/hero_living_room.svg', title: 'AURA Spaces Studio', subtitle: 'Thoughtfully Designed · Beautifully Lived · Pune, India' },
  { path: 'public/images/projects/project_3bhk_pune.svg', title: 'Contemporary 3BHK Apartment', subtitle: 'Baner, Pune · 1,720 sq.ft.' },
  { path: 'public/images/projects/project_minimalist_mumbai.svg', title: 'Warm Minimalist Living Room', subtitle: 'Bandra, Mumbai · Wabi-Sabi Lime Wash' },
  { path: 'public/images/projects/project_villa_maharashtra.svg', title: 'Contemporary Country Villa', subtitle: 'Pawna Lake, Maharashtra · Basalt & Kota' },
  { path: 'public/images/projects/commercial_workspace_pune.svg', title: 'Boutique Creative Workspace', subtitle: 'Kalyani Nagar, Pune · Microcement & Oak' },
  { path: 'public/images/projects/dining_modern_indian.svg', title: 'Contemporary Indian Dining Room', subtitle: 'Solid Walnut & Hand-Woven Cane' },
  { path: 'public/images/projects/luxury_bathroom.svg', title: 'Spa-Inspired Master Bathroom', subtitle: 'Navona Travertine & Brushed Brass' },
  { path: 'public/images/projects/walkin_wardrobe.svg', title: 'Bespoke Walk-in Wardrobe', subtitle: 'Bronze Fluted Glass & LED Sensors' },
  { path: 'public/images/services/service_residential.svg', title: 'Complete Residential Interiors', subtitle: 'Apartments, Penthouses & Villas' },
  { path: 'public/images/services/service_living.svg', title: 'Living & Dining Room Design', subtitle: 'The Heart of Everyday Living' },
  { path: 'public/images/services/service_kitchen.svg', title: 'Ergonomic Modular Kitchens', subtitle: 'Engineered for Indian Culinary Rituals' },
  { path: 'public/images/services/service_bedroom.svg', title: 'Bedrooms & Bespoke Wardrobes', subtitle: 'Restful Sanctuaries & Clutter-Free Storage' },
  { path: 'public/images/services/service_commercial.svg', title: 'Commercial & Boutique Workspaces', subtitle: 'Inspiring Work Environments' },
  { path: 'public/images/services/service_renovation.svg', title: 'Renovation & Turnkey Interiors', subtitle: 'Civil Modifications & Coordinated Handover' },
  { path: 'public/images/styles/style_modern_contemporary.svg', title: 'Modern Contemporary Style', subtitle: 'Clean Lines & Fluid Spaces' },
  { path: 'public/images/styles/style_minimalist.svg', title: 'Warm Minimalism', subtitle: 'Lime Wash Plaster & Breathable Calm' },
  { path: 'public/images/styles/style_japandi.svg', title: 'Japandi Fusion', subtitle: 'Wabi-Sabi Simplicity & Scandinavian Function' },
  { path: 'public/images/styles/style_indian_modern.svg', title: 'Indian Modern Design', subtitle: 'Kota Stone, Cane & Contemporary Forms' },
  { path: 'public/images/styles/style_luxury_modern.svg', title: 'Luxury Modern Interiors', subtitle: 'Bookmatched Marble & Smoked Bronze' },
  { path: 'public/images/styles/style_warm_earthy.svg', title: 'Warm Earthy Interiors', subtitle: 'Terracotta, Clay & Reclaimed Teak' },
  { path: 'public/images/styles/style_industrial.svg', title: 'Refined Industrial', subtitle: 'Matte Black Steel & Exposed Masonry' },
  { path: 'public/images/styles/style_traditional_fusion.svg', title: 'Traditional Indian Fusion', subtitle: 'Jali Screens, Brass & Heritage Carvings' },
  { path: 'public/images/gallery/gallery_living_1.svg', title: 'Baner Penthouse Living Pavilion', subtitle: 'Architectural Lighting & Fluted Joinery' },
  { path: 'public/images/gallery/gallery_bedroom_1.svg', title: 'Bandra Master Suite', subtitle: 'Acoustic Bouclé & Linen Treatments' },
  { path: 'public/images/gallery/gallery_kitchen_1.svg', title: 'Koregaon Park Chef Galley', subtitle: 'Calacatta Quartz Island' },
  { path: 'public/images/gallery/gallery_dining_1.svg', title: 'Aundh Residence Dining Suite', subtitle: '8-Seater Walnut Table & Cane Seating' },
  { path: 'public/images/gallery/gallery_bathroom_1.svg', title: 'Thane West Travertine Bathroom', subtitle: 'Frameless Glass & Backlit Arch Mirror' },
  { path: 'public/images/gallery/gallery_wardrobe_1.svg', title: 'Kalyani Nagar Dressing Lounge', subtitle: 'Integrated Sensor LEDs & Fluted Glass' },
  { path: 'public/images/gallery/gallery_workspace_1.svg', title: 'Viman Nagar Design Studio', subtitle: 'Communal Oak Work Library' },
  { path: 'public/images/gallery/gallery_villa_1.svg', title: 'Pawna Country Verandah', subtitle: 'Sheltered Otla & Kota Stone Floor' },
  { path: 'public/images/gallery/gallery_foyer_1.svg', title: 'Wakad Foyer & Pooja Niche', subtitle: 'Brass Jali Screen & Floating Credenza' },
  { path: 'public/images/team/team_aarav.svg', title: 'Aarav Singhania', subtitle: 'Principal Interior Architect · CEPT' },
  { path: 'public/images/team/team_meera.svg', title: 'Meera Nandkarni', subtitle: 'Creative Director & Material Stylist' },
  { path: 'public/images/team/team_rohan.svg', title: 'Rohan Patil', subtitle: 'Head of Modular Engineering & Civil' },
  { path: 'public/images/instagram/insta_1.svg', title: 'Concept 3BHK Living', subtitle: '#AuraSpaces #PuneInteriors' },
  { path: 'public/images/instagram/insta_2.svg', title: 'Modular Kitchen Island Details', subtitle: '#ModularKitchenPune' },
  { path: 'public/images/instagram/insta_3.svg', title: 'Warm Minimalist Bedroom', subtitle: '#MasterBedroomDesign' },
  { path: 'public/images/instagram/insta_4.svg', title: 'Material Flatlay Moodboard', subtitle: '#InteriorStyling #Travertine' },
  { path: 'public/images/instagram/insta_5.svg', title: 'Before & After Transformation', subtitle: '#HomeRenovationPune' },
  { path: 'public/images/instagram/insta_6.svg', title: 'Double Height Villa Verandah', subtitle: '#VillaInteriors #Maharashtra' },
  { path: 'public/images/moodboards/moodboard_1.svg', title: 'Tactile Warmth Material Palette', subtitle: 'Walnut Veneer, Travertine & Brass' },
  { path: 'public/images/moodboards/moodboard_2.svg', title: 'Coastal Serenity Material Palette', subtitle: 'Lime Wash, Raw Teak & Belgian Linen' },
  { path: 'public/images/moodboards/moodboard_3.svg', title: 'Chef Kitchen Technical Palette', subtitle: 'IS 710 Ply, Calacatta Quartz & Black Gola' },
];

assets.forEach((a) => {
  fs.writeFileSync(path.join(process.cwd(), a.path), createSvg(a));
});

// Custom SVGs for specific views
fs.writeFileSync(path.join(process.cwd(), 'public/images/projects/modular_kitchen_pune.svg'), createKitchenSvg());
fs.writeFileSync(path.join(process.cwd(), 'public/images/projects/project_master_bedroom.svg'), createBedroomSvg());
fs.writeFileSync(path.join(process.cwd(), 'public/images/before_after/living_room_before.svg'), createBeforeSvg());
fs.writeFileSync(path.join(process.cwd(), 'public/images/before_after/living_room_after.svg'), createAfterSvg());

console.log('Successfully generated all architectural visual assets!');
