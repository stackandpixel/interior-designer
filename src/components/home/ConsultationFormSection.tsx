import React, { useState } from 'react';
import { MessageCircle, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { STUDIO_CONFIG } from '../../config/studioConfig';
import type { ConsultationFormData, PropertyType, BudgetRange, ProjectStage } from '../../types';
import { createWhatsAppUrl, buildConsultationMessage } from '../../utils/whatsapp';

export const ConsultationFormSection: React.FC = () => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    phone: '',
    email: '',
    propertyLocation: 'Pune',
    propertyType: '3BHK Apartment',
    approximateArea: '',
    preferredService: 'Complete Residential Interiors',
    estimatedBudget: '₹10 – ₹20 Lakh',
    projectStage: 'Possession expected in 1–3 months',
    additionalRequirements: '',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<string | null>(null);

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errors.fullName = 'Please enter your name';
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errors.phone = 'Please enter a valid phone or WhatsApp number';
    }
    if (!formData.propertyLocation.trim()) {
      errors.propertyLocation = 'Please mention property locality/city';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setIsSubmitting(true);

    const message = buildConsultationMessage(formData);
    const whatsappUrl = createWhatsAppUrl(message);

    // Save state and launch WhatsApp
    setSubmittedWhatsAppUrl(whatsappUrl);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FDFBF7] border-b border-[#ECE5DC]" id="consultation-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold">
              <span className="w-6 h-px bg-[#C19A5B]" />
              <span>Let's Design Your Space</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-[#1E1A17] leading-[1.15] text-balance">
              Planning a New Home or Renovation?
            </h2>

            <p className="text-base text-[#6B625B] leading-relaxed">
              Tell us a little about your space, your vision, and what you have in mind. Let's explore the possibilities together.
            </p>

            <div className="pt-4 space-y-4">
              <div className="flex items-start gap-3 p-4 bg-[#FAF7F2] rounded-sm border border-[#ECE5DC]">
                <Sparkles className="w-5 h-5 text-[#C19A5B] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-[#1E1A17]">
                    Complimentary Initial Review
                  </h4>
                  <p className="text-xs text-[#6B625B] mt-0.5">
                    We review your floor plan layout, room orientations, and space potential before recommending design phases.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#FAF7F2] rounded-sm border border-[#ECE5DC]">
                <MessageCircle className="w-5 h-5 text-[#25D366] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-[#1E1A17]">
                    Instant WhatsApp Dispatch
                  </h4>
                  <p className="text-xs text-[#6B625B] mt-0.5">
                    Submitting this form prepares a formatted brief and immediately launches WhatsApp so our designers can review your space directly.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#FAF4EB] rounded-sm border border-[#ECE5DC] text-xs text-[#8C7A6B]">
              <p className="font-semibold text-[#A75D43] mb-1">Indicative Budget Notice:</p>
              Budget options below are indicative planning ranges for materials & fit-outs, not fixed contract rates. Final estimations depend on exact square footage and chosen finishes.
            </div>
          </div>

          {/* Right Column: Detailed Consultation Form */}
          <div className="lg:col-span-7 bg-[#FAF7F2] p-8 sm:p-10 rounded-sm border border-[#ECE5DC] shadow-sm">
            {submittedWhatsAppUrl && (
              <div className="mb-6 p-4 bg-[#E8F8EE] border border-[#25D366]/40 rounded-sm flex items-start gap-3 text-xs text-[#1E1A17]">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1E1A17]">
                    WhatsApp chat opened in a new tab!
                  </p>
                  <p className="mt-1 text-[#4A3B32]">
                    Please hit "Send" in WhatsApp to dispatch your project brief to our design desk. If the tab did not open,{' '}
                    <a
                      href={submittedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] font-bold underline"
                    >
                      click here to launch WhatsApp
                    </a>.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4A3B32] font-semibold mb-1.5">
                    Full Name <span className="text-[#A75D43]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Aditya Sharma"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#ECE5DC] rounded-xs text-sm text-[#1E1A17] focus:outline-hidden focus:border-[#4A3B32] focus:ring-1 focus:ring-[#4A3B32] transition-colors"
                  />
                  {formErrors.fullName && (
                    <p className="text-[11px] text-[#A75D43] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {formErrors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4A3B32] font-semibold mb-1.5">
                    Phone / WhatsApp <span className="text-[#A75D43]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98220 12345"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#ECE5DC] rounded-xs text-sm text-[#1E1A17] focus:outline-hidden focus:border-[#4A3B32] focus:ring-1 focus:ring-[#4A3B32] transition-colors"
                  />
                  {formErrors.phone && (
                    <p className="text-[11px] text-[#A75D43] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {formErrors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Email & Property Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4A3B32] font-semibold mb-1.5">
                    Email Address <span className="text-xs text-[#8C7A6B] normal-case font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. aditya@example.com"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#ECE5DC] rounded-xs text-sm text-[#1E1A17] focus:outline-hidden focus:border-[#4A3B32] focus:ring-1 focus:ring-[#4A3B32] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4A3B32] font-semibold mb-1.5">
                    Property Location <span className="text-[#A75D43]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.propertyLocation}
                    onChange={(e) => setFormData({ ...formData, propertyLocation: e.target.value })}
                    placeholder="e.g. Baner, Pune or Bandra, Mumbai"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#ECE5DC] rounded-xs text-sm text-[#1E1A17] focus:outline-hidden focus:border-[#4A3B32] focus:ring-1 focus:ring-[#4A3B32] transition-colors"
                  />
                  {formErrors.propertyLocation && (
                    <p className="text-[11px] text-[#A75D43] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {formErrors.propertyLocation}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Property Type & Approximate Area */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4A3B32] font-semibold mb-1.5">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as PropertyType })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#ECE5DC] rounded-xs text-sm text-[#1E1A17] focus:outline-hidden focus:border-[#4A3B32]"
                  >
                    {STUDIO_CONFIG.propertyTypes.map((pt) => (
                      <option key={pt} value={pt}>
                        {pt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4A3B32] font-semibold mb-1.5">
                    Approximate Carpet Area <span className="text-xs text-[#8C7A6B] normal-case font-normal">(sq.ft.)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.approximateArea}
                    onChange={(e) => setFormData({ ...formData, approximateArea: e.target.value })}
                    placeholder="e.g. 1,450 sq.ft."
                    className="w-full px-3.5 py-2.5 bg-white border border-[#ECE5DC] rounded-xs text-sm text-[#1E1A17] focus:outline-hidden focus:border-[#4A3B32]"
                  />
                </div>
              </div>

              {/* Row 4: Service & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4A3B32] font-semibold mb-1.5">
                    Preferred Service Scope
                  </label>
                  <select
                    value={formData.preferredService}
                    onChange={(e) => setFormData({ ...formData, preferredService: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#ECE5DC] rounded-xs text-sm text-[#1E1A17] focus:outline-hidden focus:border-[#4A3B32]"
                  >
                    <option value="Complete Residential Interiors">Complete Residential Interiors</option>
                    <option value="Modular Kitchens & Dining">Modular Kitchens & Dining</option>
                    <option value="Living & Dining Transformation">Living & Dining Transformation</option>
                    <option value="Master Bedrooms & Wardrobes">Master Bedrooms & Wardrobes</option>
                    <option value="Full Villa / Penthouse Design">Full Villa / Penthouse Design</option>
                    <option value="Boutique Commercial / Studio Office">Boutique Commercial / Studio Office</option>
                    <option value="Civil Renovation & Turnkey Execution">Civil Renovation & Turnkey Execution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4A3B32] font-semibold mb-1.5">
                    Indicative Budget Range
                  </label>
                  <select
                    value={formData.estimatedBudget}
                    onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value as BudgetRange })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#ECE5DC] rounded-xs text-sm text-[#1E1A17] focus:outline-hidden focus:border-[#4A3B32]"
                  >
                    {STUDIO_CONFIG.budgetCategories.map((bg) => (
                      <option key={bg} value={bg}>
                        {bg}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 5: Project Stage */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#4A3B32] font-semibold mb-1.5">
                  Current Project Stage
                </label>
                <select
                  value={formData.projectStage}
                  onChange={(e) => setFormData({ ...formData, projectStage: e.target.value as ProjectStage })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#ECE5DC] rounded-xs text-sm text-[#1E1A17] focus:outline-hidden focus:border-[#4A3B32]"
                >
                  {STUDIO_CONFIG.projectStages.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 6: Additional Requirements */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#4A3B32] font-semibold mb-1.5">
                  Any Specific Requirements or Aesthetic Vision?
                </label>
                <textarea
                  rows={3}
                  value={formData.additionalRequirements}
                  onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                  placeholder="e.g. Interested in warm minimalism with walnut wood and fluted panels. We have 2 young children and need plenty of concealed toy and book storage."
                  className="w-full px-3.5 py-2.5 bg-white border border-[#ECE5DC] rounded-xs text-sm text-[#1E1A17] focus:outline-hidden focus:border-[#4A3B32]"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs uppercase tracking-widest font-semibold rounded-xs shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
                <p className="text-[11px] text-[#8C7A6B] text-center mt-2">
                  Clicking will open WhatsApp with your details prefilled. You simply need to click send to initiate your consultation.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
