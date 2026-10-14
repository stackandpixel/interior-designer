import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import type { GalleryItem } from '../../types';
import { ImageWithFallback } from './ImageWithFallback';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onSelectIndex,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onSelectIndex((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onSelectIndex((currentIndex + 1) % items.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex, items.length, onClose, onSelectIndex]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex + 1) % items.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Content Container */}
      <div
        className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center bg-[#1E1A17] rounded-sm overflow-hidden border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full relative flex-1 min-h-[300px] max-h-[65vh] bg-black flex items-center justify-center">
          <ImageWithFallback
            src={currentItem.image}
            alt={currentItem.title}
            aspectRatioClass="w-full h-full"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Captions and Metadata */}
        <div className="w-full p-5 bg-[#1E1A17] text-[#FAF7F2] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#C19A5B] font-medium uppercase tracking-wider mb-1">
              <span>{currentItem.category}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {currentItem.location}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-serif font-semibold text-[#FAF7F2]">
              {currentItem.title}
            </h3>
            {currentItem.caption && (
              <p className="text-xs sm:text-sm text-[#C8BCAB] mt-1 max-w-2xl">
                {currentItem.caption}
              </p>
            )}
          </div>

          <div className="text-xs text-[#8C7A6B] font-mono shrink-0">
            {currentIndex + 1} / {items.length}
          </div>
        </div>
      </div>
    </div>
  );
};
