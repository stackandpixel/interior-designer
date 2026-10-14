/**
 * AURA Spaces Studio — Central Brand Configuration
 * All contact details, addresses, and social links are centralized here.
 * Notice: Contact details are fictional demo placeholders and must be updated before production deployment.
 */

export const STUDIO_CONFIG = {
  brandName: 'AURA Spaces Studio',
  shortName: 'AURA Spaces',
  tagline: 'Thoughtfully Designed. Beautifully Lived.',
  subTagline: 'Boutique Interior Architecture & Space Planning',
  
  // Location & Presence
  location: {
    neighborhood: 'Baner',
    city: 'Pune',
    state: 'Maharashtra',
    country: 'India',
    pincode: '411045',
    fullAddress: 'AURA Spaces Studio, 4th Floor, Solitaire Business Hub, Baner Road, Baner, Pune, Maharashtra 411045, India',
    landmark: 'Near Balewadi High Street junction',
    serviceCities: ['Pune', 'Mumbai', 'Thane', 'Navi Mumbai', 'PCMC', 'Lonavala & Alibaug (Select Villas)'],
    coordinates: {
      lat: 18.5590,
      lng: 73.7868,
    },
  },

  // Contact Information (Fictional Placeholders)
  contact: {
    phoneDisplay: '+91 98765 43210',
    phoneRaw: '+919876543210',
    whatsappNumber: '919876543210', // Digits only with country code 91
    email: 'hello@auraspacesstudio.com',
    workingHours: 'Monday – Saturday: 10:00 AM – 7:00 PM IST (By Appointment)',
    isDemoNotice: 'Note: Contact information and projects shown are fictional portfolio samples for demonstration purposes.',
  },

  // Social Links
  social: {
    instagram: 'https://instagram.com/auraspaces.studio',
    instagramHandle: '@auraspaces.studio',
    pinterest: 'https://pinterest.com/auraspacesstudio',
    linkedin: 'https://linkedin.com/company/aura-spaces-studio',
  },

  // Consultation & Budget Ranges
  budgetCategories: [
    'Under ₹5 Lakh',
    '₹5 – ₹10 Lakh',
    '₹10 – ₹20 Lakh',
    '₹20 – ₹40 Lakh',
    '₹40 Lakh and above',
    'Not decided yet',
  ] as const,

  propertyTypes: [
    '1BHK Apartment',
    '2BHK Apartment',
    '3BHK Apartment',
    '4BHK Apartment',
    'Duplex / Penthouse',
    'Independent Villa / Bungalow',
    'Boutique Office / Commercial',
    'Full Home Renovation',
  ] as const,

  projectStages: [
    'Just exploring design ideas',
    'Possession expected in 1–3 months',
    'Possession received / Ready to start immediately',
    'Renovating existing occupied property',
  ] as const,

  // Disclaimers & Ethics
  disclaimers: {
    portfolio: 'All projects displayed are architectural design concepts & visual demonstrations curated by AURA Spaces Studio.',
    pricing: 'Budget categories and estimates are indicative design ranges based on standard finishes, and do not constitute a fixed quotation.',
    whatsappSubmission: 'Submitting the consultation form will launch WhatsApp Web or Mobile with your project parameters prefilled.',
  },
};
