import React, { useState, useRef, useCallback } from 'react';
import { Layers, Lightbulb, Box, Sparkles, SlidersHorizontal, Columns2 } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const BeforeAfterSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isSideBySide, setIsSideBySide] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FDFBF7] border-b border-[#ECE5DC]" id="before-after-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold mb-2">
              <span className="w-6 h-px bg-[#C19A5B]" />
              <span>Spatial Metamorphosis</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-[#1E1A17]">
              The Power of Thoughtful Architecture
            </h2>
            <p className="text-sm text-[#6B625B] mt-2 max-w-xl">
              See how intentional circulation, concealed storage, and layered illumination completely redefine an underutilized 3BHK living room.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsSideBySide(!isSideBySide)}
              className="px-3.5 py-2 bg-[#F7F3EE] hover:bg-[#ECE5DC] text-[#2C2724] border border-[#ECE5DC] rounded-xs text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5"
            >
              {isSideBySide ? (
                <>
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#C19A5B]" />
                  <span>Interactive Slider</span>
                </>
              ) : (
                <>
                  <Columns2 className="w-3.5 h-3.5 text-[#C19A5B]" />
                  <span>Side-by-Side View</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Concept Notice */}
        <div className="mb-6 p-3 bg-[#FAF4EB] border border-[#ECE5DC] rounded-xs text-xs text-[#8C7A6B] flex items-center justify-between">
          <span>
            <strong>Concept Study Notice:</strong> Fictional demonstration of living room spatial redesign for a Pune apartment.
          </span>
          <span className="text-[11px] font-mono text-[#4A3B32]">Camera angle 1:1 match</span>
        </div>

        {/* Visual Comparison: Draggable Slider or Side-by-Side */}
        {!isSideBySide ? (
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[620px] rounded-sm overflow-hidden select-none border border-[#ECE5DC] shadow-lg cursor-ew-resize bg-[#ECE5DC]"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0 w-full h-full">
              <ImageWithFallback
                src={`${import.meta.env.BASE_URL}images/before_after/living_room_after.jpg`}
                alt="Proposed redesigned contemporary Indian living room"
                aspectRatioClass="w-full h-full"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1 bg-[#5A6B56]/90 backdrop-blur-xs text-white text-xs uppercase tracking-wider font-semibold rounded-xs">
                Proposed Redesign / After
              </div>
            </div>

            {/* Before Image (Clipped Foreground) */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="w-full h-full min-w-full" style={{ width: containerRef.current?.offsetWidth || '100%' }}>
                <ImageWithFallback
                  src={`${import.meta.env.BASE_URL}images/before_after/living_room_before.jpg`}
                  alt="Original dated Indian apartment living room"
                  aspectRatioClass="w-full h-full"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#A75D43]/90 backdrop-blur-xs text-white text-xs uppercase tracking-wider font-semibold rounded-xs">
                Dated Original / Before
              </div>
            </div>

            {/* Draggable Divider Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-[#1E1A17] border border-[#ECE5DC]">
                <div className="flex items-center gap-0.5">
                  <span className="text-[10px] font-bold">◀</span>
                  <span className="text-[10px] font-bold">▶</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Side-by-Side Mode */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-sm overflow-hidden border border-[#ECE5DC] bg-[#ECE5DC]">
              <div className="p-3 bg-[#FAF4EB] border-b border-[#ECE5DC] text-xs uppercase tracking-wider font-semibold text-[#A75D43]">
                Dated Original State
              </div>
              <ImageWithFallback
                src={`${import.meta.env.BASE_URL}images/before_after/living_room_before.jpg`}
                alt="Dated original living room"
                aspectRatioClass="aspect-[16/10]"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-sm overflow-hidden border border-[#ECE5DC] bg-[#ECE5DC]">
              <div className="p-3 bg-[#FAF4EB] border-b border-[#ECE5DC] text-xs uppercase tracking-wider font-semibold text-[#5A6B56]">
                Proposed Architectural Redesign
              </div>
              <ImageWithFallback
                src={`${import.meta.env.BASE_URL}images/before_after/living_room_after.jpg`}
                alt="Redesigned contemporary living room"
                aspectRatioClass="aspect-[16/10]"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* 4 Improvement Factors */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-[#FAF7F2] rounded-sm border border-[#ECE5DC]">
            <div className="w-8 h-8 rounded-full bg-[#EAE3D9] flex items-center justify-center text-[#C19A5B] mb-3">
              <Box className="w-4 h-4" />
            </div>
            <h4 className="text-base font-serif font-semibold text-[#1E1A17]">
              Fluid Space Planning
            </h4>
            <p className="text-xs text-[#6B625B] mt-2 leading-relaxed">
              Eliminated bulky partitions and awkward corners, establishing an unobstructed sightline from the entrance foyer to the window garden.
            </p>
          </div>

          <div className="p-6 bg-[#FAF7F2] rounded-sm border border-[#ECE5DC]">
            <div className="w-8 h-8 rounded-full bg-[#EAE3D9] flex items-center justify-center text-[#5A6B56] mb-3">
              <Lightbulb className="w-4 h-4" />
            </div>
            <h4 className="text-base font-serif font-semibold text-[#1E1A17]">
              Circadian Layered Light
            </h4>
            <p className="text-xs text-[#6B625B] mt-2 leading-relaxed">
              Replaced single harsh fluorescent tube with 2700K indirect ceiling cove lighting, magnetic architectural tracks, and warm wall sconces.
            </p>
          </div>

          <div className="p-6 bg-[#FAF7F2] rounded-sm border border-[#ECE5DC]">
            <div className="w-8 h-8 rounded-full bg-[#EAE3D9] flex items-center justify-center text-[#C19A5B] mb-3">
              <Layers className="w-4 h-4" />
            </div>
            <h4 className="text-base font-serif font-semibold text-[#1E1A17]">
              Tactile Warm Finishes
            </h4>
            <p className="text-xs text-[#6B625B] mt-2 leading-relaxed">
              Upgraded stark cold tiles and mismatched paints to breathable mineral lime-wash, natural walnut veneer, and honed Navona travertine.
            </p>
          </div>

          <div className="p-6 bg-[#FAF7F2] rounded-sm border border-[#ECE5DC]">
            <div className="w-8 h-8 rounded-full bg-[#EAE3D9] flex items-center justify-center text-[#A75D43] mb-3">
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="text-base font-serif font-semibold text-[#1E1A17]">
              Concealed Joinery Storage
            </h4>
            <p className="text-xs text-[#6B625B] mt-2 leading-relaxed">
              Replaced cluttered exposed TV cabinets with a seamless fluted wall that completely conceals all set-top boxes, gaming consoles, and cabling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
