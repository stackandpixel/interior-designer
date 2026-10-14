import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/faqData';
import { createWhatsAppUrl, buildQuickGreetingMessage } from '../utils/whatsapp';

export const FAQPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openItems, setOpenItems] = useState<{ [id: string]: boolean }>({
    'faq-1': true,
    'faq-3': true,
  });

  const categories = [
    'All',
    'Consultation & Pricing',
    'Design Process',
    'Execution & Materials',
    'Timelines',
  ];

  const filteredFaqs = activeCategory === 'All'
    ? FAQ_DATA
    : FAQ_DATA.filter((item) => item.category === activeCategory);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const whatsappUrl = createWhatsAppUrl(buildQuickGreetingMessage());

  return (
    <main className="pt-24 pb-20">
      {/* Header */}
      <section className="py-16 bg-[#F7F3EE] border-b border-[#ECE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold">
              <span className="w-6 h-px bg-[#C19A5B]" />
              <span>Questions & Transparency</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-medium tracking-tight text-[#1E1A17]">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-[#6B625B] leading-relaxed">
              Clear answers regarding our design fee structure, execution timelines, IS 710 material standards, and site coordination.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors whitespace-nowrap shrink-0 border ${
                activeCategory === cat
                  ? 'bg-[#1E1A17] text-[#FAF7F2] border-[#1E1A17]'
                  : 'bg-[#FDFBF7] text-[#6B625B] border-[#ECE5DC] hover:text-[#1E1A17]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openItems[faq.id];

            return (
              <div
                key={faq.id}
                className="bg-[#FAF7F2] rounded-sm border border-[#ECE5DC] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 focus:outline-hidden hover:bg-[#F4EFEA] transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-[#C19A5B] font-semibold block">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-serif font-semibold text-[#1E1A17]">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="p-1 rounded-full bg-white border border-[#ECE5DC] text-[#4A3B32] shrink-0 mt-1">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#4A3B32] leading-relaxed border-t border-[#ECE5DC]/60 bg-[#FDFBF7]">
                    <p className="mt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions */}
        <div className="mt-16 p-8 bg-[#1E1A17] text-[#FAF7F2] rounded-sm text-center space-y-4">
          <HelpCircle className="w-8 h-8 text-[#C19A5B] mx-auto" />
          <h3 className="text-xl font-serif font-semibold">
            Have a question specific to your floor plan?
          </h3>
          <p className="text-xs sm:text-sm text-[#C8BCAB] max-w-lg mx-auto leading-relaxed">
            Every building has unique plumbing shafts, beam structures, and society renovation bylaws. Drop us a message on WhatsApp for instant guidance.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Ask on WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-transparent border border-white/20 hover:bg-white/10 text-white text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors"
            >
              Book Studio Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
