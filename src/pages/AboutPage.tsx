import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/teamData';
import { STUDIO_CONFIG } from '../config/studioConfig';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export const AboutPage: React.FC = () => {
  return (
    <main className="pt-24 pb-20">
      {/* Editorial Page Header */}
      <section className="py-16 bg-[#F7F3EE] border-b border-[#ECE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold">
              <span className="w-6 h-px bg-[#C19A5B]" />
              <span>Studio & Ethos</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-medium tracking-tight text-[#1E1A17] text-balance">
              Thoughtfully Designed. Beautifully Lived.
            </h1>
            <p className="text-base sm:text-lg text-[#6B625B] leading-relaxed">
              Founded in Baner, Pune, <strong className="font-semibold text-[#1E1A17]">AURA Spaces Studio</strong> is an architectural interior practice dedicated to the sensory and functional balance of modern Indian homes.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Notice Banner */}
      <div className="bg-[#FAF4EB] border-b border-[#ECE5DC] py-2.5 px-4 text-center text-xs text-[#8C7A6B]">
        <strong>Illustrative Profile Notice:</strong> Team member profiles and practice histories are demo concept placeholders for studio customization.
      </div>

      {/* Philosophy & Narrative Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#ECE5DC]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase tracking-widest text-[#C19A5B] font-semibold">
              Our Design Stance
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#1E1A17]">
              Architecture is not an afterthought to interior decoration.
            </h2>
            <p className="text-sm sm:text-base text-[#4A3B32] leading-relaxed">
              We approach each apartment or villa as an architectural volume. Instead of disguising structural columns or loading walls with superficial trims, we sculpt sightlines, celebrate raw structural mass, and introduce light wells that draw the Maharashtra sunlight deep into interior rooms.
            </p>
            <p className="text-sm text-[#6B625B] leading-relaxed">
              Our material palette is deliberately anchored in honesty: local black basalt, polished Kota stone, untreated teak, and lime-wash plasters that breathe in high humidity and age with natural patina.
            </p>
            <div className="pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#1E1A17] hover:text-[#A75D43] transition-colors"
              >
                <span>Explore Completed Concept Studies</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-sm overflow-hidden border border-[#ECE5DC] shadow-md bg-[#ECE5DC]">
              <ImageWithFallback
                src="/images/projects/project_minimalist_mumbai.jpg"
                alt="Architectural studio material philosophy"
                aspectRatioClass="aspect-[4/3]"
                className="w-full h-full object-cover"
              />
              <div className="p-4 bg-[#F7F3EE] border-t border-[#ECE5DC] text-xs text-[#8C7A6B]">
                Tactile wall finishes and low-slung teak joinery designed for quiet living.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#ECE5DC]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-medium text-[#1E1A17]">
            Core Tenets of Our Practice
          </h2>
          <p className="text-sm text-[#6B625B] mt-2">
            The non-negotiables that guide our drawing boards and job sites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-[#FAF7F2] rounded-sm border border-[#ECE5DC]">
            <Compass className="w-8 h-8 text-[#C19A5B] mb-4" />
            <h3 className="text-lg font-serif font-semibold text-[#1E1A17] mb-2">
              Spatial Integrity
            </h3>
            <p className="text-xs sm:text-sm text-[#6B625B] leading-relaxed">
              We never sacrifice cross-ventilation or natural light for decorative symmetry. Every wall placement must justify its presence.
            </p>
          </div>

          <div className="p-8 bg-[#FAF7F2] rounded-sm border border-[#ECE5DC]">
            <ShieldCheck className="w-8 h-8 text-[#5A6B56] mb-4" />
            <h3 className="text-lg font-serif font-semibold text-[#1E1A17] mb-2">
              Engineering Rigor
            </h3>
            <p className="text-xs sm:text-sm text-[#6B625B] leading-relaxed">
              100% IS 710 marine ply, branded German fittings, waterproof membranes, and concealed electrical conduits engineered to last decades.
            </p>
          </div>

          <div className="p-8 bg-[#FAF7F2] rounded-sm border border-[#ECE5DC]">
            <HeartHandshake className="w-8 h-8 text-[#A75D43] mb-4" />
            <h3 className="text-lg font-serif font-semibold text-[#1E1A17] mb-2">
              Radical Transparency
            </h3>
            <p className="text-xs sm:text-sm text-[#6B625B] leading-relaxed">
              Itemized BOQs with verifiable brands and direct contractor quotes. No hidden percentages, no surprise invoices.
            </p>
          </div>
        </div>
      </section>

      {/* Team Profiles (3-in-a-row following frontend-design guidelines) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#ECE5DC]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold mb-2">
            <span className="w-6 h-px bg-[#C19A5B]" />
            <span>The Design Team</span>
            <span className="w-6 h-px bg-[#C19A5B]" />
          </div>
          <h2 className="text-3xl font-serif font-medium text-[#1E1A17]">
            Meet the Minds Behind the Spaces
          </h2>
          <p className="text-sm text-[#6B625B] mt-2">
            A collaborative team of architects, material researchers, and execution engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] rounded-sm overflow-hidden border border-[#ECE5DC] p-6 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-square w-full rounded-sm overflow-hidden bg-[#ECE5DC] mb-5 border border-[#ECE5DC]">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    aspectRatioClass="w-full h-full"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs uppercase tracking-wider text-[#C19A5B] font-semibold">
                  {member.specialization}
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1E1A17] mt-1">
                  {member.name}
                </h3>
                <div className="text-xs text-[#8C7A6B] mt-0.5">
                  {member.role} · {member.experience}
                </div>
                <p className="text-xs sm:text-sm text-[#6B625B] mt-3 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ECE5DC] text-[11px] text-[#8C7A6B]">
                AURA Spaces Studio · Baner
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Studio Location & Studio Visit CTA */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-[#1E1A17] text-[#FAF7F2] rounded-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C19A5B] font-semibold">
              <MapPin className="w-4 h-4" />
              <span>Studio Visit By Appointment</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold">
              Visit our Material Library in Baner, Pune
            </h2>
            <p className="text-xs sm:text-sm text-[#C8BCAB] max-w-xl">
              Touch real travertine slabs, test soft-close drawer fittings, and review sample moodboard textiles over freshly brewed coffee.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3.5 bg-[#FAF7F2] hover:bg-white text-[#1E1A17] text-xs uppercase tracking-widest font-semibold rounded-xs transition-colors whitespace-nowrap"
          >
            Schedule a Studio Meeting
          </Link>
        </div>
      </section>
    </main>
  );
};
