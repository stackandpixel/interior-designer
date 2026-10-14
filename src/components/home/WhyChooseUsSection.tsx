import React from 'react';
import { UserCheck, LayoutGrid, Layers, HeartHandshake, SunMedium, MessageSquareQuote } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const points = [
    {
      icon: UserCheck,
      title: 'Personalized Design Approach',
      desc: 'No cookie-cutter templates. We tailor each room around your specific lifestyle, family demographics, and daily rituals.',
    },
    {
      icon: LayoutGrid,
      title: 'Functional Space Planning',
      desc: 'Smart storage, ergonomic circulation, and spatial optimization specifically designed for contemporary Indian apartment layouts.',
    },
    {
      icon: Layers,
      title: 'Thoughtful Material Selection',
      desc: 'Durable IS 710 marine ply, certified non-porous quartz, natural veneers, and breathable lime washes suited for Maharashtra climates.',
    },
    {
      icon: HeartHandshake,
      title: 'Aligned With Your Preferences',
      desc: 'We listen closely to your visual inspirations and lifestyle constraints rather than imposing an uncompromising studio ego.',
    },
    {
      icon: SunMedium,
      title: 'Attention to Lighting & Details',
      desc: 'Layered 2700K ambient illumination, shadowless vanity lighting, and glare-free work zones mapped out down to every switch.',
    },
    {
      icon: MessageSquareQuote,
      title: 'Clear, Transparent Communication',
      desc: 'Itemized line-by-line BOQs with verified specifications, weekly photo progress updates, and dedicated WhatsApp studio coordination.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FDFBF7] border-b border-[#ECE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold mb-2">
            <span className="w-6 h-px bg-[#C19A5B]" />
            <span>Why Homeowners Trust Us</span>
            <span className="w-6 h-px bg-[#C19A5B]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-[#1E1A17]">
            Crafting Homes with Care & Discipline
          </h2>
          <p className="text-sm text-[#6B625B] mt-3 leading-relaxed">
            We bridge the gap between creative architectural vision and rigorous on-site execution management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-[#FAF7F2] rounded-sm border border-[#ECE5DC] hover:border-[#D6C8B8] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#EAE3D9] flex items-center justify-center text-[#4A3B32] mb-4">
                  <Icon className="w-5 h-5 text-[#C19A5B]" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-[#1E1A17] mb-2">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B625B] leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
