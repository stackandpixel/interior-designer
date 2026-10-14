import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STUDIO_CONFIG } from '../../config/studioConfig';
import { createWhatsAppUrl, buildQuickGreetingMessage } from '../../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl(buildQuickGreetingMessage());

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with AURA Spaces Studio on WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline-block text-xs font-semibold tracking-wide uppercase whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>
      <div className="hidden group-hover:block absolute bottom-full right-0 mb-2 w-48 p-2 bg-[#1E1A17] text-[#FAF7F2] text-[11px] rounded shadow-md text-center pointer-events-none">
        Speak with our design team in Baner, Pune
      </div>
    </div>
  );
};
