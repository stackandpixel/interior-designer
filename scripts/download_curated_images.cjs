const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const imageMap = [
  // Hero
  {
    path: 'public/images/hero/hero_living_room.jpg',
    url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
  },
  // Projects
  {
    path: 'public/images/projects/project_3bhk_pune.jpg',
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    path: 'public/images/projects/project_minimalist_mumbai.jpg',
    url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
  },
  {
    path: 'public/images/projects/modular_kitchen_pune.jpg',
    url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    path: 'public/images/projects/project_master_bedroom.jpg',
    url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    path: 'public/images/projects/project_villa_maharashtra.jpg',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    path: 'public/images/projects/commercial_workspace_pune.jpg',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    path: 'public/images/projects/dining_modern_indian.jpg',
    url: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
  },
  {
    path: 'public/images/projects/luxury_bathroom.jpg',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
  },
  {
    path: 'public/images/projects/walkin_wardrobe.jpg',
    url: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=80',
  },
  // Before & After
  {
    path: 'public/images/before_after/living_room_before.jpg',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    path: 'public/images/before_after/living_room_after.jpg',
    url: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80',
  },
  // Services
  {
    path: 'public/images/services/service_residential.jpg',
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    path: 'public/images/services/service_living.jpg',
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    path: 'public/images/services/service_kitchen.jpg',
    url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    path: 'public/images/services/service_bedroom.jpg',
    url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    path: 'public/images/services/service_commercial.jpg',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    path: 'public/images/services/service_renovation.jpg',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  },
  // Design Styles
  {
    path: 'public/images/styles/style_modern_contemporary.jpg',
    url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    path: 'public/images/styles/style_minimalist.jpg',
    url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
  },
  {
    path: 'public/images/styles/style_japandi.jpg',
    url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    path: 'public/images/styles/style_indian_modern.jpg',
    url: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80',
  },
  {
    path: 'public/images/styles/style_luxury_modern.jpg',
    url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    path: 'public/images/styles/style_warm_earthy.jpg',
    url: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    path: 'public/images/styles/style_industrial.jpg',
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  },
  {
    path: 'public/images/styles/style_traditional_fusion.jpg',
    url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
  },
  // Gallery
  {
    path: 'public/images/gallery/gallery_living_1.jpg',
    url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    path: 'public/images/gallery/gallery_bedroom_1.jpg',
    url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80',
  },
  {
    path: 'public/images/gallery/gallery_kitchen_1.jpg',
    url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    path: 'public/images/gallery/gallery_dining_1.jpg',
    url: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80',
  },
  {
    path: 'public/images/gallery/gallery_bathroom_1.jpg',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
  },
  {
    path: 'public/images/gallery/gallery_wardrobe_1.jpg',
    url: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    path: 'public/images/gallery/gallery_workspace_1.jpg',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    path: 'public/images/gallery/gallery_villa_1.jpg',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    path: 'public/images/gallery/gallery_foyer_1.jpg',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
  },
  // Moodboards
  {
    path: 'public/images/moodboards/moodboard_1.jpg',
    url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
  },
  {
    path: 'public/images/moodboards/moodboard_2.jpg',
    url: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=1000&q=80',
  },
  {
    path: 'public/images/moodboards/moodboard_3.jpg',
    url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
  },
  // Team
  {
    path: 'public/images/team/team_aarav.jpg',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    path: 'public/images/team/team_meera.jpg',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  },
  {
    path: 'public/images/team/team_rohan.jpg',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
  },
  // Instagram
  {
    path: 'public/images/instagram/insta_1.jpg',
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
  },
  {
    path: 'public/images/instagram/insta_2.jpg',
    url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
  },
  {
    path: 'public/images/instagram/insta_3.jpg',
    url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
  },
  {
    path: 'public/images/instagram/insta_4.jpg',
    url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
  },
  {
    path: 'public/images/instagram/insta_5.jpg',
    url: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80',
  },
  {
    path: 'public/images/instagram/insta_6.jpg',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
];

console.log(`Starting download of ${imageMap.length} architectural photography assets...`);

for (const item of imageMap) {
  const fullDest = path.join(process.cwd(), item.path);
  fs.mkdirSync(path.dirname(fullDest), { recursive: true });
  try {
    console.log(`Downloading ${item.path}...`);
    execSync(`curl -L -s --connect-timeout 10 --max-time 30 -o "${fullDest}" "${item.url}"`);
    const stat = fs.statSync(fullDest);
    console.log(`  ✓ Done (${Math.round(stat.size / 1024)} KB)`);
  } catch (err) {
    console.error(`  ✗ Error downloading ${item.path}:`, err.message);
  }
}

console.log('All photography downloads completed!');
