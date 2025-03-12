"use client";
import Expertise from '@/components/ai/ai-service';
import AIExpertise from '@/components/ai/aiExpertise';
import FeatureCards from '@/components/ai/aimSerivces';
import AIServiceSection from '@/components/ai/aiServices';
import Hero from '@/components/ai/aiServices';
import GenerativeAI from '@/components/ai/generative-ai';
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
        title="GENERATIVE AI"
        description="We know how generative AI can help your business succeed."
        backgroundImage="/assets/ai-solutions-bg.webp"
        breadcrumb="Generative AI"
      />
      <div className=''  style={{ backgroundImage: "url('/assets/service-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>

      </div>
      <AIServiceSection />
      <FeatureCards />
      <AIExpertise />
      <GenerativeAI />
      <TechStack />
      <ServiceSection />
      
    </div>
  )
}

export default DataPage