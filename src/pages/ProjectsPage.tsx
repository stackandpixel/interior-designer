import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Eye, Compass, Layers } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import type { ProjectItem, DesignCategory } from '../types';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { ProjectModal } from '../components/common/ProjectModal';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<DesignCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories: DesignCategory[] = [
    'All',
    'Residential',
    'Luxury Apartments',
    'Villas',
    'Modular Kitchens',
    'Commercial',
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Residential') return project.propertyType.includes('Apartment') || project.propertyType.includes('Suite');
    if (selectedCategory === 'Luxury Apartments') return project.propertyType.includes('High-Rise') || project.propertyType.includes('Suite');
    if (selectedCategory === 'Villas') return project.propertyType.includes('Villa');
    if (selectedCategory === 'Modular Kitchens') return project.slug.includes('kitchen');
    if (selectedCategory === 'Commercial') return project.propertyType.includes('Commercial') || project.propertyType.includes('Office');
    return true;
  });

  return (
    <main className="pt-24 pb-20">
      {/* Header */}
      <section className="py-16 bg-[#F7F3EE] border-b border-[#ECE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold">
              <span className="w-6 h-px bg-[#C19A5B]" />
              <span>Architectural Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-medium tracking-tight text-[#1E1A17]">
              Selected Architectural & Interior Concept Studies
            </h1>
            <p className="text-base sm:text-lg text-[#6B625B] leading-relaxed">
              Explore our fictional concept projects spanning high-rise urban residences in Pune and Mumbai, lakeside country villas, and boutique creative studios.
            </p>
          </div>
        </div>
      </section>

      {/* Conceptual Notice */}
      <div className="bg-[#FAF4EB] border-b border-[#ECE5DC] py-2.5 px-4 text-center text-xs text-[#8C7A6B]">
        <strong>Portfolio Transparency Notice:</strong> All projects displayed are architectural design concept studies curated by AURA Spaces Studio for visual demonstration.
      </div>

      {/* Filterable Portfolio */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors whitespace-nowrap shrink-0 border ${
                selectedCategory === cat
                  ? 'bg-[#1E1A17] text-[#FAF7F2] border-[#1E1A17]'
                  : 'bg-[#FDFBF7] text-[#6B625B] border-[#ECE5DC] hover:text-[#1E1A17] hover:border-[#D6C8B8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-[#FAF7F2] rounded-sm overflow-hidden border border-[#ECE5DC] hover:border-[#D6C8B8] transition-all duration-300 flex flex-col justify-between shadow-2xs hover:shadow-md"
            >
              <div>
                <div className="relative overflow-hidden aspect-[4/3] bg-[#ECE5DC]">
                  <ImageWithFallback
                    src={project.coverImage}
                    alt={project.title}
                    aspectRatioClass="w-full h-full"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="px-4 py-2 bg-white/95 text-[#1E1A17] text-xs uppercase tracking-wider font-semibold rounded-xs shadow-md hover:bg-white transition-colors flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#C19A5B]" />
                      <span>Quick View Specs</span>
                    </button>
                  </div>
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#1E1A17]/85 backdrop-blur-xs text-[#FAF7F2] text-[11px] uppercase tracking-wider font-medium rounded-xs">
                    {project.propertyType}
                  </div>
                </div>

                <div className="p-6">
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

                  <h3 className="text-xl font-serif font-semibold text-[#1E1A17] group-hover:text-[#A75D43] transition-colors">
                    <Link to={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B625B] mt-2 line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#ECE5DC] flex items-center gap-2 text-[11px] text-[#8C7A6B]">
                    <Layers className="w-3.5 h-3.5 text-[#C19A5B] shrink-0" />
                    <span className="truncate">
                      {project.materialPalette.map((m) => m.name).join(' · ')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#ECE5DC]/60">
                <Link
                  to={`/projects/${project.slug}`}
                  className="text-xs uppercase tracking-wider font-semibold text-[#2C2724] hover:text-[#A75D43] transition-colors flex items-center gap-1"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs text-[#8C7A6B] hover:text-[#1E1A17] transition-colors"
                >
                  Specs
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </main>
  );
};
