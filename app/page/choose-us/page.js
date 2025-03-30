"use client";
import ITServicesSection from '@/components/choose-us';
import FeaturesSection from '@/components/featureChoose';
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import React from 'react'

const ChooseUsPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
    title="Why Choose Us"
    description="Discover why we are the best choice for your needs."
    backgroundImage="/assets/integration-bg.webp"
    breadcrumb="Choose Us"
  />
  <ITServicesSection />
  <FeaturesSection />
  </div>
  )
}

export default ChooseUsPage