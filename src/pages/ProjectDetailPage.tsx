import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, MessageCircle, MapPin, Calendar, Compass, Layers, CheckCircle2, Ruler } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { createWhatsAppUrl, buildProjectEnquiryMessage } from '../utils/whatsapp';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const whatsappUrl = createWhatsAppUrl(
    buildProjectEnquiryMessage(project.title, project.location)
  );

  return (
    <main className="pt-24 pb-20">
      {/* Back Link & Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#6B625B] hover:text-[#1E1A17] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Hero Media & Title Lockup */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-sm overflow-hidden bg-[#ECE5DC] border border-[#ECE5DC] aspect-[16/9] max-h-[640px]">
          <ImageWithFallback
            src={project.coverImage}
            alt={project.title}
            aspectRatioClass="w-full h-full"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-6 sm:p-12">
            <div className="text-white max-w-3xl space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#E8C98B] font-medium tracking-wide uppercase">
                <span>{project.propertyType}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {project.location}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-[#FAF4EB] border border-[#ECE5DC] p-4 rounded-sm text-xs text-[#8C7A6B] flex items-center justify-between">
          <span>
            <strong>Architectural Concept Notice:</strong> This project is a curated concept study developed by AURA Spaces Studio for demonstration.
          </span>
          <span className="font-mono text-[#4A3B32]">Pune / Maharashtra</span>
        </div>
      </div>

      {/* Project Meta Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-[#FAF7F2] rounded-sm border border-[#ECE5DC]">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-[#8C7A6B] font-semibold block">
              Design Style
            </span>
            <span className="text-sm font-semibold text-[#1E1A17] mt-1 block flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#C19A5B]" />
              {project.designStyle}
            </span>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-wider text-[#8C7A6B] font-semibold block">
              Carpet Area
            </span>
            <span className="text-sm font-semibold text-[#1E1A17] mt-1 block flex items-center gap-1.5">
              <Ruler className="w-3.5 h-3.5 text-[#C19A5B]" />
              {project.carpetArea}
            </span>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-wider text-[#8C7A6B] font-semibold block">
              Execution Timeline
            </span>
            <span className="text-sm font-semibold text-[#1E1A17] mt-1 block flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#C19A5B]" />
              {project.duration}
            </span>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-wider text-[#8C7A6B] font-semibold block">
              Location City
            </span>
            <span className="text-sm font-semibold text-[#1E1A17] mt-1 block flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C19A5B]" />
              {project.city}
            </span>
          </div>
        </div>
      </section>

      {/* Narrative & Scope Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Narrative */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#1E1A17] mb-3">
                Project Overview
              </h2>
              <p className="text-sm sm:text-base text-[#4A3B32] leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#ECE5DC]">
              <div className="p-6 bg-[#FAF7F2] rounded-sm border border-[#ECE5DC]">
                <h3 className="text-base font-serif font-semibold text-[#1E1A17] mb-2">
                  The Client Brief
                </h3>
                <p className="text-xs sm:text-sm text-[#6B625B] leading-relaxed">
                  {project.clientBrief}
                </p>
              </div>

              <div className="p-6 bg-[#FAF7F2] rounded-sm border border-[#ECE5DC]">
                <h3 className="text-base font-serif font-semibold text-[#1E1A17] mb-2">
                  The Design Solution
                </h3>
                <p className="text-xs sm:text-sm text-[#6B625B] leading-relaxed">
                  {project.designSolution}
                </p>
              </div>
            </div>

            {/* Scope of Work */}
            <div className="pt-4 border-t border-[#ECE5DC]">
              <h3 className="text-lg font-serif font-semibold text-[#1E1A17] mb-4">
                Detailed Scope of Execution
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#4A3B32]">
                {project.scopeOfWork.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#5A6B56] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Material Palette & Action Box */}
          <div className="lg:col-span-4 space-y-6">
            {/* Palette Card */}
            <div className="p-6 bg-[#FAF7F2] rounded-sm border border-[#ECE5DC] space-y-4">
              <h3 className="text-sm uppercase tracking-wider font-semibold text-[#1E1A17] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#C19A5B]" />
                <span>Material Palette</span>
              </h3>
              <div className="space-y-3">
                {project.materialPalette.map((mat, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-xs border border-[#ECE5DC]">
                    <div className="flex items-center gap-2.5 mb-1">
                      <span
                        className="w-4 h-4 rounded-full border border-black/10 shrink-0"
                        style={{ backgroundColor: mat.colorHex }}
                      />
                      <span className="text-xs font-semibold text-[#1E1A17]">
                        {mat.name}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#6B625B] block">
                      {mat.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Enquiry Box */}
            <div className="p-6 bg-[#1E1A17] text-[#FAF7F2] rounded-sm space-y-4">
              <h3 className="text-lg font-serif font-semibold">
                Love this design direction?
              </h3>
              <p className="text-xs text-[#C8BCAB] leading-relaxed">
                Connect with our design team to discuss how elements of this concept can be adapted for your residence.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Enquire via WhatsApp</span>
              </a>
              <Link
                to="/contact"
                className="w-full py-2.5 bg-transparent border border-white/20 hover:bg-white/10 text-white text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors block text-center"
              >
                Fill Consultation Form
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Renders */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-2xl font-serif font-bold text-[#1E1A17] mb-6">
          Architectural Gallery & Spatial Views
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {project.galleryImages.map((img, idx) => (
            <div key={idx} className="rounded-sm overflow-hidden border border-[#ECE5DC] bg-[#ECE5DC] aspect-[16/10]">
              <ImageWithFallback
                src={img}
                alt={`${project.title} - View ${idx + 1}`}
                aspectRatioClass="w-full h-full"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Next Projects Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-[#ECE5DC]">
        <div className="flex items-center justify-between">
          <Link
            to="/projects"
            className="text-xs uppercase tracking-wider font-semibold text-[#1E1A17] hover:text-[#A75D43] transition-colors"
          >
            ← View All Projects
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#A75D43] hover:text-[#1E1A17] transition-colors"
          >
            <span>Book A Design Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};
