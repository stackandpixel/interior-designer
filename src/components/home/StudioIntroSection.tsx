import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Sparkles, Feather } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const StudioIntroSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FDFBF7] border-b border-[#ECE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Supporting Photograph / Architectural Vignette */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-sm overflow-hidden border border-[#ECE5DC] shadow-md bg-[#ECE5DC]">
              <ImageWithFallback
                src="/images/projects/dining_modern_indian.jpg"
                alt="Contemporary Indian dining room with solid walnut table and cane-weave seating"
                aspectRatioClass="aspect-[4/5]"
                className="w-full h-full object-cover"
              />
              <div className="p-4 bg-[#F7F3EE] border-t border-[#ECE5DC]">
                <div className="text-[11px] uppercase tracking-wider text-[#8C7A6B] font-semibold">
                  Material Honesty
                </div>
                <div className="text-xs text-[#4A3B32] mt-0.5 font-serif italic">
                  Natural walnut, honed stone, woven cane, and natural Indian sunlight.
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold">
              <span className="w-6 h-px bg-[#C19A5B]" />
              <span>Studio Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-[#1E1A17] leading-[1.15] text-balance">
              Good Design Is More Than What You See.
            </h2>

            <p className="text-base text-[#4A3B32] leading-relaxed">
              At <strong className="font-semibold text-[#1E1A17]">AURA Spaces Studio</strong>, we believe true luxury in an Indian home isn't measured in glossy surfaces or gold moldings—it is found in quiet circulation, abundant cross-ventilation, intuitive storage for everyday rituals, and materials that grow richer with age.
            </p>

            <p className="text-sm text-[#6B625B] leading-relaxed">
              Every residence we shape starts not with a catalogue of furniture, but with understanding how you start your morning, where you unpack groceries, where you read quietly, and how you gather with family during Diwali. By uniting architectural rigor with tactile craftsmanship, we craft homes that feel effortless to live in.
            </p>

            {/* Three Pillar Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#ECE5DC]">
              <div>
                <div className="w-8 h-8 rounded-full bg-[#F4EFEA] flex items-center justify-center text-[#C19A5B] mb-2.5">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-[#1E1A17] font-serif">Spatial Flow</h4>
                <p className="text-xs text-[#6B625B] mt-1 leading-normal">
                  Circulation and proportion planned before cosmetic finishes.
                </p>
              </div>

              <div>
                <div className="w-8 h-8 rounded-full bg-[#F4EFEA] flex items-center justify-center text-[#5A6B56] mb-2.5">
                  <Feather className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-[#1E1A17] font-serif">Tactile Materials</h4>
                <p className="text-xs text-[#6B625B] mt-1 leading-normal">
                  Honest timber, lime wash, Kota stone, and Belgian linens.
                </p>
              </div>

              <div>
                <div className="w-8 h-8 rounded-full bg-[#F4EFEA] flex items-center justify-center text-[#A75D43] mb-2.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-[#1E1A17] font-serif">Layered Light</h4>
                <p className="text-xs text-[#6B625B] mt-1 leading-normal">
                  Concealed 2700K ambient illumination and glare-free task spots.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#2C2724] hover:text-[#A75D43] transition-colors group"
              >
                <span>Read More About Our Studio & Team</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
