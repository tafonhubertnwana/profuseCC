"use client";
import Expertise from '@/components/ai/ai-service';
import AIExpertise from '@/components/ai/aiExpertise';
import FeatureCards from '@/components/ai/aimSerivces';
import AIServiceSection from '@/components/ai/aiServices';
import Hero from '@/components/ai/aiServices';
import ServiceSection from '@/components/ai/serviceSection';
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import TechStack from '@/components/techStack';
import React from 'react'

const DataPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
        title="AI Solutions Implementation"
        description="Future-proof your business with AI-driven digital transformation."
        backgroundImage="/assets/ai-solutions-bg.webp"
        breadcrumb="Data & AI"
      />
      <AIServiceSection />
      <FeatureCards />
      <AIExpertise />
      <Expertise />
      <TechStack />
      <ServiceSection />
      
    </div>
  )
}

export default DataPage