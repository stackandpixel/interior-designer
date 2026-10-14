import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';
import { STUDIO_CONFIG } from '../config/studioConfig';
import type { ConsultationFormData, PropertyType, BudgetRange, ProjectStage } from '../types';
import { createWhatsAppUrl, buildConsultationMessage, buildQuickGreetingMessage } from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errors.phone = 'Valid phone or WhatsApp number required';
    }
    if (!formData.propertyLocation.trim()) {
      errors.propertyLocation = 'Please provide property location';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    const message = buildConsultationMessage(formData);
    const url = createWhatsAppUrl(message);
    setWhatsappLink(url);
    setIsSubmitted(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const directGreetingUrl = createWhatsAppUrl(buildQuickGreetingMessage());

  return (
    <main className="pt-24 pb-20">
      {/* Header */}
      <section className="py-16 bg-[#F7F3EE] border-b border-[#ECE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold">
              <span className="w-6 h-px bg-[#C19A5B]" />
              <span>Get In Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-medium tracking-tight text-[#1E1A17]">
              Start Your Design Conversation
            </h1>
            <p className="text-base sm:text-lg text-[#6B625B] leading-relaxed">
              We look forward to hearing about your home or workspace. Connect with our principal designers in Baner, Pune.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Notice */}
      <div className="bg-[#FAF4EB] border-b border-[#ECE5DC] py-2.5 px-4 text-center text-xs text-[#8C7A6B]">
        <strong>Demonstration Notice:</strong> All contact information below is sample placeholder data for AURA Spaces Studio.
      </div>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Studio Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#1E1A17] mb-2">
                Baner Design Studio
              </h2>
              <p className="text-sm text-[#6B625B]">
                Located in the heart of West Pune’s design corridor, minutes away from Balewadi High Street.
              </p>
            </div>

            <div className="space-y-5 text-sm text-[#4A3B32]">
              <div className="flex items-start gap-3.5 p-4 bg-[#FAF7F2] rounded-sm border border-[#ECE5DC]">
                <MapPin className="w-5 h-5 text-[#C19A5B] mt-0.5 shrink-0" />
                <div>
                  <strong className="block text-[#1E1A17] text-xs uppercase tracking-wider mb-1">
                    Studio Address
                  </strong>
                  <span>{STUDIO_CONFIG.location.fullAddress}</span>
                  <span className="block text-xs text-[#8C7A6B] mt-1">
                    Landmark: {STUDIO_CONFIG.location.landmark}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 bg-[#FAF7F2] rounded-sm border border-[#ECE5DC]">
                <Clock className="w-5 h-5 text-[#C19A5B] mt-0.5 shrink-0" />
                <div>
                  <strong className="block text-[#1E1A17] text-xs uppercase tracking-wider mb-1">
                    Studio Working Hours
                  </strong>
                  <span>{STUDIO_CONFIG.contact.workingHours}</span>
                  <span className="block text-xs text-[#8C7A6B] mt-1">
                    In-person consultations are scheduled by prior appointment.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 bg-[#FAF7F2] rounded-sm border border-[#ECE5DC]">
                <Phone className="w-5 h-5 text-[#C19A5B] mt-0.5 shrink-0" />
                <div>
                  <strong className="block text-[#1E1A17] text-xs uppercase tracking-wider mb-1">
                    Direct Phone Desk
                  </strong>
                  <span>{STUDIO_CONFIG.contact.phoneDisplay}</span>
                  <span className="block text-xs text-[#8C7A6B] mt-1">
                    Mon–Sat: 10:00 AM – 7:00 PM IST
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 bg-[#FAF7F2] rounded-sm border border-[#ECE5DC]">
                <Mail className="w-5 h-5 text-[#C19A5B] mt-0.5 shrink-0" />
                <div>
                  <strong className="block text-[#1E1A17] text-xs uppercase tracking-wider mb-1">
                    Studio Email
                  </strong>
                  <span>{STUDIO_CONFIG.contact.email}</span>
                  <span className="block text-xs text-[#8C7A6B] mt-1">
                    Expect a response within 24 business hours.
                  </span>
                </div>
              </div>
            </div>

            {/* Fast WhatsApp Box */}
            <div className="p-6 bg-[#1E1A17] text-white rounded-sm space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#25D366] font-semibold">
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Instant Design Desk</span>
              </div>
              <h3 className="text-lg font-serif font-semibold">
                Prefer a quick chat on WhatsApp?
              </h3>
              <p className="text-xs text-[#C8BCAB] leading-relaxed">
                Connect directly with our design coordination desk to share site photos or schedule a studio visit.
              </p>
              <a
                href={directGreetingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors flex items-center justify-center gap-2 text-center"
              >
                <span>Chat with Design Team</span>
              </a>
            </div>

            {/* Social Link */}
            <div className="flex items-center gap-3 text-xs text-[#8C7A6B]">
              <span>Follow studio updates:</span>
              <a
                href={STUDIO_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-[#1E1A17] hover:text-[#A75D43]"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>{STUDIO_CONFIG.social.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Detailed Consultation Form */}
          <div className="lg:col-span-7 bg-[#FAF7F2] p-8 sm:p-10 rounded-sm border border-[#ECE5DC] shadow-sm">
            <div className="mb-6">
              <h2 className="text-2xl font-serif font-bold text-[#1E1A17]">
                Book a Design Consultation
              </h2>
              <p className="text-xs sm:text-sm text-[#6B625B] mt-1">
                Fill out the details below. Our system will format your enquiry and launch WhatsApp so you can dispatch it directly to our design architects.
              </p>
            </div>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-[#E8F8EE] border border-[#25D366]/40 rounded-sm text-xs text-[#1E1A17] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">WhatsApp Launched!</p>
                  <p className="mt-1 text-[#4A3B32]">
                    Please hit send in the opened WhatsApp window. If it did not open,{' '}
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[#25D366] underline font-bold">
                      click here to retry launching WhatsApp
                    </a>.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4A3B32] font-semibold mb-1.5">
                    Your Name <span className="text-[#A75D43]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Priya Kulkarni"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#ECE5DC] rounded-xs text-sm text-[#1E1A17] focus:outline-hidden focus:border-[#4A3B32]"
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
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#ECE5DC] rounded-xs text-sm text-[#1E1A17] focus:outline-hidden focus:border-[#4A3B32]"
                  />
                  {formErrors.phone && (
                    <p className="text-[11px] text-[#A75D43] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {formErrors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4A3B32] font-semibold mb-1.5">
                    Email Address <span className="text-xs text-[#8C7A6B] normal-case">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. priya@example.com"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#ECE5DC] rounded-xs text-sm text-[#1E1A17] focus:outline-hidden focus:border-[#4A3B32]"
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
                    placeholder="e.g. Baner, Pune"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#ECE5DC] rounded-xs text-sm text-[#1E1A17] focus:outline-hidden focus:border-[#4A3B32]"
                  />
                  {formErrors.propertyLocation && (
                    <p className="text-[11px] text-[#A75D43] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {formErrors.propertyLocation}
                    </p>
                  )}
                </div>
              </div>

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
                    Approximate Carpet Area <span className="text-xs text-[#8C7A6B] normal-case">(sq.ft.)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.approximateArea}
                    onChange={(e) => setFormData({ ...formData, approximateArea: e.target.value })}
                    placeholder="e.g. 1,600 sq.ft."
                    className="w-full px-3.5 py-2.5 bg-white border border-[#ECE5DC] rounded-xs text-sm text-[#1E1A17] focus:outline-hidden focus:border-[#4A3B32]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4A3B32] font-semibold mb-1.5">
                    Preferred Service
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

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#4A3B32] font-semibold mb-1.5">
                  Project Vision & Specific Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.additionalRequirements}
                  onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                  placeholder="Share details regarding family needs, preferred wood finishes, modular kitchen requirements, or possession dates."
                  className="w-full px-3.5 py-2.5 bg-white border border-[#ECE5DC] rounded-xs text-sm text-[#1E1A17] focus:outline-hidden focus:border-[#4A3B32]"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs uppercase tracking-widest font-semibold rounded-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send Consultation Request on WhatsApp</span>
                </button>
                <p className="text-[11px] text-[#8C7A6B] text-center mt-2">
                  No automated emails. Submitting prepares a WhatsApp message for direct review with our Baner studio team.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};
