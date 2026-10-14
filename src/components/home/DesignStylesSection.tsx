import React, { useState } from 'react';
import { DESIGN_STYLES } from '../../data/stylesData';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { Sparkles, Palette } from 'lucide-react';

export const DesignStylesSection: React.FC = () => {
  const [activeStyleId, setActiveStyleId] = useState(DESIGN_STYLES[0].id);
  const activeStyle = DESIGN_STYLES.find((s) => s.id === activeStyleId) || DESIGN_STYLES[0];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F3EE] border-b border-[#ECE5DC]" id="styles-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold mb-2">
            <span className="w-6 h-px bg-[#C19A5B]" />
            <span>Design Languages</span>
            <span className="w-6 h-px bg-[#C19A5B]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-[#1E1A17]">
            Find Your Aesthetic Vocabulary
          </h2>
          <p className="text-sm text-[#6B625B] mt-2.5">
            We adapt architectural principles to your personal taste, harmonizing European minimalism with indigenous Indian craft.
          </p>
        </div>

        {/* Style Selector Tabs (Interactive Filter Buttons compliant with frontend-design) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {DESIGN_STYLES.map((style) => {
            const isActive = style.id === activeStyleId;
            return (
              <button
                key={style.id}
                onClick={() => setActiveStyleId(style.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-xs transition-all whitespace-nowrap shrink-0 border ${
                  isActive
                    ? 'bg-[#1E1A17] text-[#FAF7F2] border-[#1E1A17] shadow-xs'
                    : 'bg-[#FDFBF7] text-[#6B625B] border-[#ECE5DC] hover:text-[#1E1A17] hover:border-[#D6C8B8]'
                }`}
              >
                {style.name}
              </button>
            );
          })}
        </div>

        {/* Active Style Showcase */}
        <div className="bg-[#FDFBF7] rounded-sm border border-[#ECE5DC] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Media Column */}
          <div className="lg:col-span-7 relative bg-[#ECE5DC] min-h-[320px] lg:min-h-[460px]">
            <ImageWithFallback
              src={activeStyle.image}
              alt={activeStyle.name}
              aspectRatioClass="w-full h-full"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1 bg-[#1E1A17]/85 backdrop-blur-xs text-[#FAF7F2] text-xs uppercase tracking-wider font-medium rounded-xs">
              {activeStyle.name}
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#C19A5B] font-semibold mb-1">
                Aesthetic Blueprint
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1A17]">
                {activeStyle.name}
              </h3>
              <p className="text-sm font-medium text-[#4A3B32] mt-2 font-serif italic">
                "{activeStyle.shortDesc}"
              </p>
              <p className="text-xs sm:text-sm text-[#6B625B] mt-4 leading-relaxed">
                {activeStyle.fullDesc}
              </p>

              {/* Key Elements */}
              <div className="mt-6 pt-5 border-t border-[#ECE5DC]">
                <div className="text-xs uppercase tracking-wider text-[#8C7A6B] font-semibold mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C19A5B]" />
                  Defining Elements
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4A3B32]">
                  {activeStyle.keyElements.map((el, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C19A5B] shrink-0" />
                      <span>{el}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Signature Palette */}
            <div className="pt-4 border-t border-[#ECE5DC]">
              <div className="text-xs uppercase tracking-wider text-[#8C7A6B] font-semibold mb-2.5 flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-[#C19A5B]" />
                Signature Palette Swatches
              </div>
              <div className="flex items-center gap-3">
                {activeStyle.palette.map((hex, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1">
                    <div
                      className="w-10 h-10 rounded-sm border border-black/10 shadow-2xs"
                      style={{ backgroundColor: hex }}
                      title={hex}
                    />
                    <span className="text-[10px] font-mono text-[#8C7A6B]">
                      {hex}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
