import React from 'react';
import { MessageSquare, Ruler, Palette, FileText, CheckCircle2, Hammer } from 'lucide-react';

export const DesignProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Initial Consultation',
      subtitle: 'Discovery & Vision Alignment',
      icon: MessageSquare,
      desc: 'We meet at our Baner studio or conduct an in-depth video session to understand your lifestyle, aesthetic inclinations, family routines, and indicative budget targets.',
      duration: 'Week 1',
    },
    {
      step: '02',
      title: 'Requirements & Space Assessment',
      subtitle: 'Laser Measurements & As-Built Audit',
      icon: Ruler,
      desc: 'Our design team conducts an exhaustive on-site audit of your property, documenting structural columns, beam drops, plumbing shafts, natural daylight vectors, and electrical inlets.',
      duration: 'Week 1–2',
    },
    {
      step: '03',
      title: 'Concept & Moodboards',
      subtitle: 'Spatial Direction & Material Palette',
      icon: Palette,
      desc: 'We present 2–3 bespoke spatial concept directions. You explore physical swatches of wood veneers, stones, fabrics, and metal accents to establish your home’s sensory signature.',
      duration: 'Week 2–3',
    },
    {
      step: '04',
      title: 'Layout & 3D Visualization',
      subtitle: 'Photorealistic Visual Renders',
      icon: FileText,
      desc: 'Detailed 2D circulation drawings paired with high-fidelity 3D views of every room. We refine finishes, lighting circuits, modular kitchen ergonomics, and custom cabinetry down to the millimeter.',
      duration: 'Week 3–5',
    },
    {
      step: '05',
      title: 'Design Finalization & BOQ',
      subtitle: 'Transparent Technical Dossier',
      icon: CheckCircle2,
      desc: 'Delivery of complete working architectural drawings, joinery manufacturing blueprints, electrical switch schedules, and an itemized Bill of Quantities (BOQ) with transparent market pricing.',
      duration: 'Week 5–6',
    },
    {
      step: '06',
      title: 'Execution Coordination',
      subtitle: 'Site Supervision & Snag Handover',
      icon: Hammer,
      desc: 'Whether through our turnkey project delivery or periodic site quality audits, our team monitors site precision, inspects IS 710 ply joinery, conducts lighting checks, and completes the final styling.',
      duration: 'Week 7–Handover',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F3EE] border-b border-[#ECE5DC]" id="process-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold mb-2">
            <span className="w-6 h-px bg-[#C19A5B]" />
            <span>Workflow & Methodology</span>
            <span className="w-6 h-px bg-[#C19A5B]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-[#1E1A17]">
            How We Bring Your Vision to Life
          </h2>
          <p className="text-sm text-[#6B625B] mt-3 leading-relaxed">
            A structured, transparent six-phase roadmap ensuring design clarity, predictable budgets, and meticulous site craftsmanship.
          </p>
        </div>

        {/* 6 Steps Grid with Editorial Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#FDFBF7] p-8 rounded-sm border border-[#ECE5DC] hover:border-[#D6C8B8] transition-colors relative flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-serif font-bold text-[#C19A5B]">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#F4EFEA] flex items-center justify-center text-[#4A3B32]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-[11px] uppercase tracking-wider text-[#8C7A6B] font-semibold block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg font-serif font-semibold text-[#1E1A17]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B625B] mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#ECE5DC] flex items-center justify-between text-xs text-[#8C7A6B]">
                  <span>Timeline</span>
                  <span className="font-semibold text-[#1E1A17]">{item.duration}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deliverables Scope Disclaimer */}
        <p className="mt-12 text-center text-xs text-[#8C7A6B] max-w-2xl mx-auto">
          Note: Actual deliverables, site review frequency, and execution schedules are tailored to the contracted scope of each residence.
        </p>
      </div>
    </section>
  );
};
