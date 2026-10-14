import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';
import { STUDIO_CONFIG } from '../../config/studioConfig';
import { createWhatsAppUrl, buildQuickGreetingMessage } from '../../utils/whatsapp';

export const Footer: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl(buildQuickGreetingMessage());

  return (
    <footer className="bg-[#1E1A17] text-[#FAF7F2] pt-20 pb-12 border-t border-[#3A332E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#3A332E]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-serif font-semibold tracking-tight text-[#FAF7F2]">
              {STUDIO_CONFIG.brandName}
            </h3>
            <p className="text-sm text-[#C8BCAB] max-w-sm leading-relaxed">
              {STUDIO_CONFIG.tagline} We shape light, spatial flow, and natural materials into calm, timeless homes and workspaces across Pune, Mumbai, and Maharashtra.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#C19A5B] hover:text-[#D9B575] transition-colors"
              >
                <span>WhatsApp Design Desk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#C8BCAB]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">Studio & Team</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">Featured Projects</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Design Services</Link>
              </li>
              <li>
                <Link to="/inspiration" className="hover:text-white transition-colors">Inspiration Gallery</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">Client FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Studio</Link>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-[#C8BCAB]">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Residential Interiors</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Living & Dining Design</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Modular Kitchens (IS 710)</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Master Bedrooms & Wardrobes</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Country Villas & Estates</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Boutique Office Interiors</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Civil Renovation & Turnkey</Link>
              </li>
            </ul>
          </div>

          {/* Studio Location & Hours */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold mb-4">
              Studio Address
            </h4>
            <div className="space-y-3 text-sm text-[#C8BCAB]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C19A5B] shrink-0 mt-0.5" />
                <span>
                  Solitaire Business Hub, Baner Road, Pune, Maharashtra 411045
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C19A5B] shrink-0" />
                <span>Mon–Sat: 10 AM – 7 PM IST</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C19A5B] shrink-0" />
                <span>{STUDIO_CONFIG.contact.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C19A5B] shrink-0" />
                <span>{STUDIO_CONFIG.contact.email}</span>
              </div>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={STUDIO_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#2C2724] hover:bg-[#3E3733] text-[#FAF7F2] transition-colors"
                  aria-label="Instagram profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8C7A6B]">
          <p>
            © {new Date().getFullYear()} {STUDIO_CONFIG.brandName}. All rights reserved.
          </p>
          <p className="text-center md:text-right max-w-xl">
            {STUDIO_CONFIG.contact.isDemoNotice}
          </p>
        </div>
      </div>
    </footer>
  );
};
