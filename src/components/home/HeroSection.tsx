import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-[#ECE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Grid: Left Typography, Right Architectural Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Typographic Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Location & Studio Kicker */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold">
              <span className="w-6 h-px bg-[#C19A5B]" />
              <span>Interior Design Studio · Pune, India</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-[#1E1A17] leading-[1.1] text-balance">
              Spaces That Feel Like You.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#6B625B] leading-relaxed max-w-xl font-normal">
              Thoughtful interiors, timeless natural materials, and functional spaces designed around the way you live. Tailored for apartments, penthouses, and country villas across Maharashtra.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/projects"
                className="px-7 py-3.5 bg-[#2C2724] hover:bg-[#433B37] text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold rounded-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-xs group"
              >
                <span>Explore Our Projects</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/contact"
                className="px-7 py-3.5 bg-transparent hover:bg-[#ECE5DC]/60 text-[#2C2724] border border-[#2C2724]/30 text-xs uppercase tracking-widest font-semibold rounded-sm transition-colors text-center"
              >
                Book a Consultation
              </Link>
            </div>

            {/* Trust Markers */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#8C7A6B]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C19A5B]" />
                Baner Studio, Pune
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5A6B56]" />
                IS 710 Marine Ply Standards
              </span>
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#C19A5B]" />
                Vastu-Sensitive Planning
              </span>
            </div>
          </div>

          {/* Architectural Media Showcase Container */}
          <div className="lg:col-span-6">
            <div className="relative rounded-sm overflow-hidden shadow-xl border border-[#ECE5DC] bg-[#ECE5DC]">
              <ImageWithFallback
                src="/images/hero/hero_living_room.jpg"
                alt="Contemporary luxury apartment living room in Pune designed by AURA Spaces Studio"
                aspectRatioClass="aspect-[16/11]"
                className="w-full h-full object-cover"
              />
              {/* Subtle architectural overlay card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 bg-[#FDFBF7]/95 backdrop-blur-md rounded-sm border border-[#ECE5DC] flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#8C7A6B] font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#C19A5B]" />
                    Featured Concept Study
                  </div>
                  <div className="text-sm font-serif font-semibold text-[#1E1A17] mt-0.5">
                    Contemporary 3BHK Apartment · Baner, Pune
                  </div>
                </div>
                <Link
                  to="/projects/contemporary-3bhk-apartment-pune"
                  className="text-xs uppercase tracking-wider font-semibold text-[#4A3B32] hover:text-[#A75D43] transition-colors whitespace-nowrap flex items-center gap-1"
                >
                  <span>View Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Strip Below Hero Split */}
        <div className="mt-16 pt-10 border-t border-[#ECE5DC] grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#8C7A6B] font-medium">Location</div>
            <div className="text-sm font-semibold text-[#1E1A17] mt-1">Baner, Pune</div>
            <div className="text-xs text-[#6B625B] mt-0.5">Projects across MH</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[#8C7A6B] font-medium">Core Disciplines</div>
            <div className="text-sm font-semibold text-[#1E1A17] mt-1">Residential & Commercial</div>
            <div className="text-xs text-[#6B625B] mt-0.5">Apartments, Villas & Studios</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[#8C7A6B] font-medium">Delivery Modes</div>
            <div className="text-sm font-semibold text-[#1E1A17] mt-1">Turnkey & Consultancy</div>
            <div className="text-xs text-[#6B625B] mt-0.5">Complete civil to styling</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[#8C7A6B] font-medium">Enquiry Range</div>
            <div className="text-sm font-semibold text-[#1E1A17] mt-1">₹10L – ₹40L+</div>
            <div className="text-xs text-[#6B625B] mt-0.5">Transparent BOQ pricing</div>
          </div>
        </div>
      </div>
    </section>
  );
};
