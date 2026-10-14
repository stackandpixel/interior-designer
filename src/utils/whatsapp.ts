import { STUDIO_CONFIG } from '../config/studioConfig';
import type { ConsultationFormData } from '../types';

/**
 * Normalizes a phone number to only digits suitable for WhatsApp wa.me links
 */
export function normalizeWhatsAppNumber(numberStr: string): string {
  return numberStr.replace(/[^0-9]/g, '');
}

/**
 * Builds the official WhatsApp click-to-chat URL
 */
export function createWhatsAppUrl(messageText: string, customPhone?: string): string {
  const phone = normalizeWhatsAppNumber(customPhone || STUDIO_CONFIG.contact.whatsappNumber);
  const encodedText = encodeURIComponent(messageText.trim());
  return `https://wa.me/${phone}?text=${encodedText}`;
}

/**
 * Generates an enquiry message from the consultation form
 */
export function buildConsultationMessage(data: ConsultationFormData): string {
  return `Hello AURA Spaces Studio,

I would like to enquire about your interior design services for my space:

• Full Name: ${data.fullName || 'Not provided'}
• Contact Phone: ${data.phone || 'Not provided'}
• Email: ${data.email || 'Not provided'}
• Property Location: ${data.propertyLocation || 'Not specified'}
• Property Type: ${data.propertyType}
• Approximate Area: ${data.approximateArea ? `${data.approximateArea} sq.ft.` : 'Not specified'}
• Preferred Service: ${data.preferredService}
• Estimated Budget Range: ${data.estimatedBudget}
• Project Stage: ${data.projectStage}
${data.additionalRequirements ? `• Additional Notes / Vision: ${data.additionalRequirements}` : ''}

Looking forward to discussing design concepts and next steps. Thank you!`;
}

/**
 * Generates a project-specific enquiry message
 */
export function buildProjectEnquiryMessage(projectTitle: string, location: string): string {
  return `Hello AURA Spaces Studio,

I was exploring your portfolio and was particularly impressed by the "${projectTitle}" project in ${location}.

I have a similar project in mind and would love to know if something inspired by this design style could be tailored for my space. Could we arrange an initial design consultation?

Thank you!`;
}

/**
 * Generates a service-specific enquiry message
 */
export function buildServiceEnquiryMessage(serviceTitle: string): string {
  return `Hello AURA Spaces Studio,

I am interested in your "${serviceTitle}" service.

Could you please share your typical scope, design process, and how we can get started with a site assessment or initial concept meeting?

Thank you!`;
}

/**
 * Generates a quick consultation greeting
 */
export function buildQuickGreetingMessage(): string {
  return `Hello AURA Spaces Studio,

I am planning an interior design project in Pune/Maharashtra and would like to speak with a designer to discuss my space requirements and schedule a consultation.`;
}
