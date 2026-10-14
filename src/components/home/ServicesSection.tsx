import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle, Clock } from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { createWhatsAppUrl, buildServiceEnquiryMessage } from '../../utils/whatsapp';

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FDFBF7] border-b border-[#ECE5DC]" id="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold mb-2">
            <span className="w-6 h-px bg-[#C19A5B]" />
            <span>Design Solutions</span>
            <span className="w-6 h-px bg-[#C19A5B]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-[#1E1A17]">
            Tailored Interior Architecture
          </h2>
          <p className="text-sm text-[#6B625B] mt-3 leading-relaxed">
            From single-room transformations to complete turnkey villa executions, we orchestrate every dimension of layout, lighting, joinery, and material curation.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const whatsappUrl = createWhatsAppUrl(buildServiceEnquiryMessage(service.title));

            return (
              <div
                key={service.id}
                className="group bg-[#FAF7F2] rounded-sm overflow-hidden border border-[#ECE5DC] hover:border-[#D6C8B8] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Service Visual */}
                  <div className="relative overflow-hidden aspect-[16/10] bg-[#ECE5DC]">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      aspectRatioClass="w-full h-full"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2.5 right-2.5 px-2 py-1 bg-[#1E1A17]/80 text-[#FAF7F2] text-[10px] uppercase tracking-wider font-mono rounded-xs flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5 text-[#C19A5B]" />
                      <span>{service.timelineEstimate.split(' ')[0]}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <span className="text-[11px] uppercase tracking-wider text-[#C19A5B] font-semibold block mb-1">
                      {service.subtitle}
                    </span>
                    <h3 className="text-xl font-serif font-semibold text-[#1E1A17] group-hover:text-[#A75D43] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B625B] mt-2.5 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mt-4 pt-4 border-t border-[#ECE5DC]">
                      <span className="text-[11px] uppercase tracking-wider text-[#8C7A6B] font-semibold block mb-2">
                        Deliverables Include
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#4A3B32]">
                        {service.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-[#C19A5B] shrink-0" />
                            <span className="truncate">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer CTAs: WhatsApp & Details */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-[#ECE5DC]/60 mt-4">
                  <Link
                    to="/services"
                    className="text-xs uppercase tracking-wider font-semibold text-[#2C2724] hover:text-[#A75D43] transition-colors flex items-center gap-1"
                  >
                    <span>Full Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-[#25D366] hover:bg-[#20BA5A] text-white text-[11px] uppercase tracking-wider font-semibold rounded-xs transition-colors flex items-center gap-1.5"
                    aria-label={`Enquire about ${service.title} on WhatsApp`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Service Note */}
        <div className="mt-12 text-center text-xs text-[#8C7A6B]">
          Looking for a custom scope such as architectural consultancy or builder civil handover review?{' '}
          <Link to="/contact" className="text-[#1E1A17] font-semibold underline underline-offset-4 hover:text-[#A75D43]">
            Talk to our Principal Designer
          </Link>
        </div>
      </div>
    </section>
  );
};
