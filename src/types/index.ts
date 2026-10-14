export type PropertyType =
  | '1BHK Apartment'
  | '2BHK Apartment'
  | '3BHK Apartment'
  | '4BHK Apartment'
  | 'Duplex / Penthouse'
  | 'Independent Villa / Bungalow'
  | 'Boutique Office / Commercial'
  | 'Full Home Renovation';

export type BudgetRange =
  | 'Under ₹5 Lakh'
  | '₹5 – ₹10 Lakh'
  | '₹10 – ₹20 Lakh'
  | '₹20 – ₹40 Lakh'
  | '₹40 Lakh and above'
  | 'Not decided yet';

export type ProjectStage =
  | 'Just exploring design ideas'
  | 'Possession expected in 1–3 months'
  | 'Possession received / Ready to start immediately'
  | 'Renovating existing occupied property';

export type DesignCategory =
  | 'All'
  | 'Residential'
  | 'Luxury Apartments'
  | 'Villas'
  | 'Modular Kitchens'
  | 'Commercial';

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  propertyType: string;
  location: string;
  city: string;
  carpetArea: string;
  designStyle: string;
  year: string;
  duration: string;
  coverImage: string;
  galleryImages: string[];
  shortDescription: string;
  overview: string;
  clientBrief: string;
  designSolution: string;
  scopeOfWork: string[];
  materialPalette: {
    name: string;
    description: string;
    colorHex: string;
  }[];
  isConceptual: boolean;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  idealFor: string;
  keyFeatures: string[];
  deliverables: string[];
  image: string;
  timelineEstimate: string;
}

export interface DesignStyleItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  keyElements: string[];
  palette: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Living' | 'Bedroom' | 'Kitchen' | 'Dining' | 'Bathroom' | 'Wardrobe' | 'Workspace' | 'Villa';
  location: string;
  image: string;
  aspectRatio: 'square' | 'landscape' | 'portrait';
  caption: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  propertyType: string;
  location: string;
  isFictionalDemo: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  bio: string;
  image: string;
  specialization: string;
}

export interface FAQItem {
  id: string;
  category: 'Consultation & Pricing' | 'Design Process' | 'Execution & Materials' | 'Timelines';
  question: string;
  answer: string;
}

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email: string;
  propertyLocation: string;
  propertyType: PropertyType;
  approximateArea: string;
  preferredService: string;
  estimatedBudget: BudgetRange;
  projectStage: ProjectStage;
  additionalRequirements: string;
}
