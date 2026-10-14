import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../../data/galleryData';
import type { GalleryItem } from '../../types';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { Lightbox } from '../common/Lightbox';
import { Eye, MapPin } from 'lucide-react';

export const InspirationGallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Living', 'Bedroom', 'Kitchen', 'Dining', 'Bathroom', 'Wardrobe', 'Workspace', 'Villa'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
    setActiveLightboxIndex(idx !== -1 ? idx : 0);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F7F3EE] border-b border-[#ECE5DC]" id="gallery-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold mb-2">
            <span className="w-6 h-px bg-[#C19A5B]" />
            <span>Visual Archive</span>
            <span className="w-6 h-px bg-[#C19A5B]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-[#1E1A17]">
            Design Inspiration Gallery
          </h2>
          <p className="text-sm text-[#6B625B] mt-2.5">
            Explore curated design moments, bespoke joinery details, and spatial compositions crafted for Indian residences.
          </p>
        </div>

        {/* Category Filters */}
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

        {/* Gallery Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="group cursor-pointer bg-[#FDFBF7] rounded-sm overflow-hidden border border-[#ECE5DC] hover:border-[#D6C8B8] transition-all duration-300 shadow-2xs hover:shadow-md"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-[#ECE5DC]">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  aspectRatioClass="w-full h-full"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="px-3.5 py-2 bg-white/95 text-[#1E1A17] text-xs uppercase tracking-wider font-semibold rounded-xs shadow-md flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-[#C19A5B]" />
                    <span>Expand In Lightbox</span>
                  </div>
                </div>

                {/* Category tag */}
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#1E1A17]/80 text-[#FAF7F2] text-[10px] uppercase tracking-wider font-medium rounded-xs">
                  {item.category}
                </div>
              </div>

              {/* Information */}
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
      </div>

      {/* Lightbox Viewer */}
      <Lightbox
        items={GALLERY_ITEMS}
        currentIndex={activeLightboxIndex ?? 0}
        isOpen={activeLightboxIndex !== null}
        onClose={() => setActiveLightboxIndex(null)}
        onSelectIndex={(idx) => setActiveLightboxIndex(idx)}
      />
    </section>
  );
};
