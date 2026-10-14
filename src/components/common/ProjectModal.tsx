import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, MapPin, Calendar, Compass, Layers, CheckCircle2 } from 'lucide-react';
import type { ProjectItem } from '../../types';
import { ImageWithFallback } from './ImageWithFallback';
import { createWhatsAppUrl, buildProjectEnquiryMessage } from '../../utils/whatsapp';

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const projectWhatsappUrl = createWhatsAppUrl(
    buildProjectEnquiryMessage(project.title, project.location)
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Project details for ${project.title}`}
    >
      <div
        className="relative max-w-4xl w-full bg-[#FDFBF7] text-[#2C2724] rounded-sm overflow-hidden shadow-2xl my-8 border border-[#ECE5DC]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Banner */}
        <div className="relative h-64 sm:h-80 w-full bg-[#ECE5DC]">
          <ImageWithFallback
            src={project.coverImage}
            alt={project.title}
            aspectRatioClass="w-full h-full"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#E8C98B] font-medium tracking-wide uppercase mb-1">
                <span>{project.propertyType}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {project.location}
                </span>
                <span>·</span>
                <span>{project.carpetArea}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {project.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Conceptual Project Banner Notice */}
        <div className="bg-[#FAF4EB] border-b border-[#ECE5DC] px-6 py-2 text-xs text-[#8C7A6B] flex items-center gap-1.5">
          <span className="font-semibold text-[#A75D43]">Portfolio Concept Notice:</span>
          <span>Sample architectural showcase curated for design demonstration.</span>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Key Specs Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-[#ECE5DC]">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#8C7A6B] font-medium block">
                Style
              </span>
              <span className="text-sm font-semibold text-[#2C2724] mt-0.5 block flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-[#C19A5B]" />
                {project.designStyle}
              </span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#8C7A6B] font-medium block">
                Area
              </span>
              <span className="text-sm font-semibold text-[#2C2724] mt-0.5 block">
                {project.carpetArea}
              </span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#8C7A6B] font-medium block">
                Timeline
              </span>
              <span className="text-sm font-semibold text-[#2C2724] mt-0.5 block flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#C19A5B]" />
                {project.duration}
              </span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#8C7A6B] font-medium block">
                Location
              </span>
              <span className="text-sm font-semibold text-[#2C2724] mt-0.5 block">
                {project.city}
              </span>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold mb-2">
              Design Overview
            </h4>
            <p className="text-sm text-[#4A3B32] leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Material Palette */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#C19A5B]" />
              Curated Material Palette
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.materialPalette.map((mat, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#F7F3EE] rounded border border-[#ECE5DC] flex flex-col justify-between"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="w-4 h-4 rounded-full border border-black/10 shrink-0"
                      style={{ backgroundColor: mat.colorHex }}
                    />
                    <span className="text-xs font-semibold text-[#2C2724] truncate">
                      {mat.name}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#8C7A6B] line-clamp-2">
                    {mat.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Scope highlights */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold mb-2">
              Scope of Work
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4A3B32]">
              {project.scopeOfWork.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5A6B56] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#ECE5DC] flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to={`/projects/${project.slug}`}
              onClick={onClose}
              className="text-xs font-semibold text-[#2C2724] hover:text-[#A75D43] transition-colors flex items-center gap-1.5 uppercase tracking-wider"
            >
              <span>View Full Case Study & Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={projectWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors text-center"
            >
              Enquire About This Design on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
