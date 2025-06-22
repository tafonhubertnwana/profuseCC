"use client"
import AINeedSection from '@/components/ai/AINeedSection';
import AIProcessSteps from '@/components/ai/AIPRocessSteps';
import AIServiceSection from '@/components/ai/aiServices';
import GenerativeAI from '@/components/ai/generative-ai';
import IndustryAIServices from '@/components/ai/industryAI';
import WhyWeLeadSection from '@/components/ai/WhyWeLeadSection';
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import TechStack from '@/components/techStack';
import React from 'react'

const DataPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
        title="Leading Artificial Intelligence Development Company"
        description="We know how generative AI can help your business succeed."
        backgroundImage="/assets/Generative-AI-bg.webp"
        breadcrumb="Services > Generative AI"
      />     
      <AIServiceSection />
      <AINeedSection />
      <IndustryAIServices />
      <GenerativeAI />
     
      <WhyWeLeadSection />
      <AIProcessSteps /> 
      <TechStack />
    </div>
  )
}

export default DataPage