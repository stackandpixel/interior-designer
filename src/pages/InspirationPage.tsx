import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/galleryData';
import type { GalleryItem } from '../types';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { Lightbox } from '../components/common/Lightbox';
import { Eye, MapPin, Layers } from 'lucide-react';

export const InspirationPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Living', 'Bedroom', 'Kitchen', 'Dining', 'Bathroom', 'Wardrobe', 'Workspace', 'Villa'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const moodboards = [
    {
      title: 'Tactile Warmth & Urban Calm',
      location: 'Pune High-Rise Concept',
      description: 'American walnut veneer, honed Navona travertine stone, brushed champagne brass trims, and raw Belgian linen drapery.',
      image: `${import.meta.env.BASE_URL}images/moodboards/moodboard_1.jpg`,
      elements: ['American Walnut', 'Navona Travertine', 'Champagne Brass', 'Belgian Linen'],
    },
    {
      title: 'Coastal Serenity & Wabi-Sabi',
      location: 'Mumbai Sea-Facing Concept',
      description: 'Breathable lime-wash wall finish, reclaimed teakwood joinery, hand-loomed jute rug, and patinated bronze hardware.',
      image: `${import.meta.env.BASE_URL}images/moodboards/moodboard_2.jpg`,
      elements: ['Lime-Wash Plaster', 'Reclaimed Teak', 'Hand-loomed Jute', 'Patinated Bronze'],
    },
    {
      title: 'Chef Modular Kitchen & Sintered Stone',
      location: 'Koregaon Park Penthouse Concept',
      description: 'Calacatta honed quartz, matte cashmere grey anti-fingerprint laminates, fluted smoked oak, and black anodized Gola channels.',
      image: `${import.meta.env.BASE_URL}images/moodboards/moodboard_3.jpg`,
      elements: ['Calacatta Quartz', 'Cashmere Laminate', 'Fluted Smoked Oak', 'Black Gola Channel'],
    },
  ];

  return (
    <main className="pt-24 pb-20">
      {/* Header */}
      <section className="py-16 bg-[#F7F3EE] border-b border-[#ECE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold">
              <span className="w-6 h-px bg-[#C19A5B]" />
              <span>Visual Archive & Moodboards</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-medium tracking-tight text-[#1E1A17]">
              Design Inspiration & Material Studies
            </h1>
            <p className="text-base sm:text-lg text-[#6B625B] leading-relaxed">
              Explore our curated archive of interior moments, spatial compositions, and tactile material flatlays created for modern Indian residences.
            </p>
          </div>
        </div>
      </section>

      {/* Moodboard Flatlays Spotlight */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#ECE5DC]">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C19A5B] font-semibold mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Tactile Material Compositions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1A17]">
            Physical Swatch Moodboards
          </h2>
          <p className="text-xs sm:text-sm text-[#6B625B] mt-1">
            Every home begins with physical touch. Here is how we curate veneers, stones, and hardware swatches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {moodboards.map((mb, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] rounded-sm overflow-hidden border border-[#ECE5DC] flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] bg-[#ECE5DC]">
                  <ImageWithFallback
                    src={mb.image}
                    alt={mb.title}
                    aspectRatioClass="w-full h-full"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[11px] uppercase tracking-wider text-[#C19A5B] font-semibold mb-1">
                    {mb.location}
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-[#1E1A17]">
                    {mb.title}
                  </h3>
                  <p className="text-xs text-[#6B625B] mt-2 leading-relaxed">
                    {mb.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-[#ECE5DC]/60 flex flex-wrap gap-1.5">
                {mb.elements.map((el, eIdx) => (
                  <span
                    key={eIdx}
                    className="text-[10px] text-[#4A3B32] bg-[#EAE2D5] px-2 py-0.5 rounded-xs"
                  >
                    {el}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Browsable Gallery with Lightbox */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1A17]">
            Spatial Gallery by Room
          </h2>
          <p className="text-xs sm:text-sm text-[#6B625B] mt-1">
            Filter through living rooms, bedrooms, kitchens, and architectural details. Click any image to view in fullscreen lightbox.
          </p>
        </div>

        {/* Categories */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors whitespace-nowrap shrink-0 border ${
                selectedCategory === cat
                  ? 'bg-[#1E1A17] text-[#FAF7F2] border-[#1E1A17]'
                  : 'bg-[#FDFBF7] text-[#6B625B] border-[#ECE5DC] hover:text-[#1E1A17] hover:border-[#D6C8B8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                const idx = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
                setActiveLightboxIndex(idx !== -1 ? idx : 0);
              }}
              className="group cursor-pointer bg-[#FAF7F2] rounded-sm overflow-hidden border border-[#ECE5DC] hover:border-[#D6C8B8] transition-all duration-300 shadow-2xs hover:shadow-md"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-[#ECE5DC]">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  aspectRatioClass="w-full h-full"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="px-3.5 py-2 bg-white/95 text-[#1E1A17] text-xs uppercase tracking-wider font-semibold rounded-xs shadow-md flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-[#C19A5B]" />
                    <span>Expand In Lightbox</span>
                  </div>
                </div>
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#1E1A17]/80 text-[#FAF7F2] text-[10px] uppercase tracking-wider font-medium rounded-xs">
                  {item.category}
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-1 text-[11px] text-[#C19A5B] font-medium mb-1">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
                <h4 className="text-sm font-serif font-semibold text-[#1E1A17] group-hover:text-[#A75D43] transition-colors truncate">
                  {item.title}
                </h4>
                <p className="text-xs text-[#6B625B] mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Viewer */}
      <Lightbox
        items={GALLERY_ITEMS}
        currentIndex={activeLightboxIndex ?? 0}
        isOpen={activeLightboxIndex !== null}
        onClose={() => setActiveLightboxIndex(null)}
        onSelectIndex={(idx) => setActiveLightboxIndex(idx)}
      />
    </main>
  );
};
