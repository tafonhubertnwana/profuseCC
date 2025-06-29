'use client';

import React from 'react';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/herosection/hero';
import ITServicesSection from '@/components/choose-us';
import FeaturesSection from '@/components/featureChoose';

export default function ChooseUsClient() {
  return (
    <div>
      <Navbar />
      <HeroSection
        title="Why Choose Us"
        description="Discover why we are the best choice for your needs."
        backgroundImage="/assets/integration-bg.webp"
        breadcrumb="Pages > Choose Us"
      />
      <ITServicesSection />
      <FeaturesSection />
    </div>
  );
}
