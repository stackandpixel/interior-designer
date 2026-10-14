import React from 'react';
import { TESTIMONIALS_DATA } from '../../data/testimonialsData';
import { Quote, MapPin } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F3EE] border-b border-[#ECE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold mb-2">
            <span className="w-6 h-px bg-[#C19A5B]" />
            <span>Sample Client Stories</span>
            <span className="w-6 h-px bg-[#C19A5B]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-[#1E1A17]">
            What Living With Our Design Feels Like
          </h2>
          <p className="text-xs text-[#8C7A6B] mt-2 italic">
            (The feedback below represents sample illustrative homeowner responses for portfolio demonstration)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-[#FDFBF7] rounded-sm border border-[#ECE5DC] flex flex-col justify-between shadow-2xs hover:border-[#D6C8B8] transition-colors"
            >
              <div>
                <Quote className="w-7 h-7 text-[#C19A5B] opacity-40 mb-3" />
                <p className="text-xs sm:text-sm text-[#4A3B32] leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ECE5DC]">
                <div className="font-serif font-semibold text-sm text-[#1E1A17]">
                  {item.clientName}
                </div>
                <div className="text-[11px] text-[#8C7A6B] mt-0.5">
                  {item.propertyType}
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#C19A5B] mt-1 font-medium">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-[#8C7A6B]">
          Note for client onboarding: Real client references and completed site walkthroughs can be scheduled during in-person studio consultations.
        </div>
      </div>
    </section>
  );
};
