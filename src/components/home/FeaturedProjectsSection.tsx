import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Eye, Compass, Layers } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/projectsData';
import type { ProjectItem } from '../../types';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { ProjectModal } from '../common/ProjectModal';

export const FeaturedProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-[#F7F3EE] border-b border-[#ECE5DC]" id="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold mb-2">
              <span className="w-6 h-px bg-[#C19A5B]" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-[#1E1A17]">
              Curated Concept Studies
            </h2>
            <p className="text-sm text-[#6B625B] mt-2 max-w-xl">
              Explorations in residential architecture, bespoke cabinetry, and balanced material palettes across Western India.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            {/* Clear Concept Notice */}
            <span className="text-xs text-[#8C7A6B] bg-[#EAE2D5] px-3 py-1.5 rounded-xs">
              Sample Conceptual Designs
            </span>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#1E1A17] hover:text-[#A75D43] transition-colors"
            >
              <span>View All 6 Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, idx) => (
            <article
              key={project.id}
              className="group bg-[#FDFBF7] rounded-sm overflow-hidden border border-[#ECE5DC] hover:border-[#D6C8B8] transition-all duration-300 flex flex-col justify-between shadow-2xs hover:shadow-md"
            >
              <div>
                {/* Media Container with Quick Preview Overlay */}
                <div className="relative overflow-hidden bg-[#ECE5DC] aspect-[4/3]">
                  <ImageWithFallback
                    src={project.coverImage}
                    alt={`${project.title} - ${project.location}`}
                    aspectRatioClass="w-full h-full"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Quick View Button on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 bg-white/95 text-[#1E1A17] text-xs uppercase tracking-wider font-semibold rounded-xs shadow-md hover:bg-white transition-colors flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#C19A5B]" />
                      <span>Quick View Specs</span>
                    </button>
                  </div>

                  {/* Property type badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#1E1A17]/85 backdrop-blur-xs text-[#FAF7F2] text-[11px] uppercase tracking-wider font-medium rounded-xs">
                    {project.propertyType}
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6">
                  {/* Location & Style Meta */}
                  <div className="flex items-center justify-between text-xs text-[#8C7A6B] font-medium mb-2">
                    <span className="flex items-center gap-1 text-[#C19A5B]">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Compass className="w-3 h-3 text-[#8C7A6B]" />
                      {project.designStyle}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-semibold text-[#1E1A17] group-hover:text-[#A75D43] transition-colors">
                    <Link to={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#6B625B] mt-2 line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Material Teaser */}
                  <div className="mt-4 pt-3 border-t border-[#ECE5DC] flex items-center gap-2 text-[11px] text-[#8C7A6B]">
                    <Layers className="w-3.5 h-3.5 text-[#C19A5B] shrink-0" />
                    <span className="truncate">
                      {project.materialPalette.map((m) => m.name).join(' · ')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#ECE5DC]/60">
                <Link
                  to={`/projects/${project.slug}`}
                  className="text-xs uppercase tracking-wider font-semibold text-[#2C2724] hover:text-[#A75D43] transition-colors flex items-center gap-1"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs text-[#8C7A6B] hover:text-[#1E1A17] transition-colors"
                >
                  Specs
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 bg-[#FAF4EB] border border-[#ECE5DC] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold">
              Have a floor plan to discuss?
            </div>
            <div className="text-sm font-serif font-semibold text-[#1E1A17] mt-0.5">
              Send us your builder layout drawing for a complimentary spatial evaluation.
            </div>
          </div>
          <Link
            to="/contact"
            className="px-5 py-2.5 bg-[#2C2724] hover:bg-[#433B37] text-white text-xs uppercase tracking-widest font-semibold rounded-xs transition-colors whitespace-nowrap"
          >
            Share Your Floor Plan
          </Link>
        </div>
      </div>

      {/* Project Quick View Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
