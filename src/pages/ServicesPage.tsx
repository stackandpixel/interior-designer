import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, CheckCircle2, Clock, Layers, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { createWhatsAppUrl, buildServiceEnquiryMessage } from '../utils/whatsapp';

export const ServicesPage: React.FC = () => {
  return (
    <main className="pt-24 pb-20">
      {/* Header */}
      <section className="py-16 bg-[#F7F3EE] border-b border-[#ECE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold">
              <span className="w-6 h-px bg-[#C19A5B]" />
              <span>Scope of Practice</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-medium tracking-tight text-[#1E1A17]">
              Comprehensive Interior Architecture & Turnkey Services
            </h1>
            <p className="text-base sm:text-lg text-[#6B625B] leading-relaxed">
              From bare-shell 3BHK high-rise apartments to sprawling country villas and creative workspaces, we provide disciplined design and meticulous site execution.
            </p>
          </div>
        </div>
      </section>

      {/* Services List with Detailed Scope */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {SERVICES_DATA.map((service, idx) => {
          const isEven = idx % 2 === 0;
          const whatsappUrl = createWhatsAppUrl(buildServiceEnquiryMessage(service.title));

          return (
            <article
              key={service.id}
              id={service.slug}
              className="bg-[#FAF7F2] rounded-sm border border-[#ECE5DC] overflow-hidden p-6 sm:p-10 scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Media */}
                <div className={`lg:col-span-5 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                  <div className="rounded-sm overflow-hidden border border-[#ECE5DC] bg-[#ECE5DC] aspect-[16/11]">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      aspectRatioClass="w-full h-full"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Scope Content */}
                <div className={`lg:col-span-7 ${isEven ? 'order-2' : 'order-2 lg:order-1'} space-y-5`}>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#8C7A6B]">
                    <span className="text-[#C19A5B] font-semibold uppercase tracking-wider">
                      {service.subtitle}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      {service.timelineEstimate}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1A17]">
                    {service.title}
                  </h2>

                  <p className="text-sm text-[#4A3B32] leading-relaxed">
                    {service.description}
                  </p>

                  <div className="p-3.5 bg-[#FDFBF7] rounded-xs border border-[#ECE5DC] text-xs text-[#6B625B]">
                    <strong className="text-[#1E1A17]">Ideal For:</strong> {service.idealFor}
                  </div>

                  {/* Dual Grid: Features vs Deliverables */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-[#8C7A6B] font-semibold mb-2 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5A6B56]" />
                        Key Engineering Focus
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#4A3B32]">
                        {service.keyFeatures.map((item, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C19A5B] mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-[#8C7A6B] font-semibold mb-2 flex items-center gap-1">
                        <Layers className="w-3.5 h-3.5 text-[#C19A5B]" />
                        Dossier Deliverables
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#4A3B32]">
                        {service.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#5A6B56] mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#ECE5DC] flex flex-wrap items-center gap-4">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Enquire on WhatsApp</span>
                    </a>

                    <Link
                      to="/contact"
                      className="px-5 py-2.5 bg-transparent border border-[#2C2724]/30 hover:bg-[#ECE5DC] text-[#2C2724] text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors"
                    >
                      Book Consultation Form
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Material Standards Banner */}
      <section className="py-16 bg-[#FDFBF7] border-t border-[#ECE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 bg-[#FAF4EB] border border-[#ECE5DC] rounded-sm">
            <h3 className="text-xl font-serif font-semibold text-[#1E1A17] mb-2">
              Our Non-Negotiable Material Quality Standards
            </h3>
            <p className="text-xs sm:text-sm text-[#6B625B] max-w-3xl leading-relaxed">
              We never compromise on internal substrate durability. Every kitchen carcass is built exclusively from certified IS 710 Boiling Waterproof (BWP) Marine Plywood with calibrated core veneers. Motion hardware is specified only from authorized distributors of Hafele, Blum, and Hettich, carrying standard manufacturer lifetime warranties.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
