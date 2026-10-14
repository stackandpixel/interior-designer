import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { StudioIntroSection } from '../components/home/StudioIntroSection';
import { FeaturedProjectsSection } from '../components/home/FeaturedProjectsSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { DesignStylesSection } from '../components/home/DesignStylesSection';
import { BeforeAfterSection } from '../components/home/BeforeAfterSection';
import { DesignProcessSection } from '../components/home/DesignProcessSection';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { InspirationGallerySection } from '../components/home/InspirationGallerySection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { InstagramShowcaseSection } from '../components/home/InstagramShowcaseSection';
import { ConsultationFormSection } from '../components/home/ConsultationFormSection';

export const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <StudioIntroSection />
      <FeaturedProjectsSection />
      <ServicesSection />
      <DesignStylesSection />
      <BeforeAfterSection />
      <DesignProcessSection />
      <WhyChooseUsSection />
      <InspirationGallerySection />
      <TestimonialsSection />
      <InstagramShowcaseSection />
      <ConsultationFormSection />
    </main>
  );
};
