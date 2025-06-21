"use client";
import { IndustriesList } from '@/components/businessDomain';
import ChallengesOpportunities from '@/components/healthcare/healthcare-challenges';
import MedicalSolutions from '@/components/healthcare/mdicalServices';
import Medical from '@/components/healthcare/medical';
import WhyChooseUsPage from '@/components/healthcare/why-choose-us';
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import Testimonials from '@/components/testimonial';
import React from 'react'

const Healthcare = () => {
  return (
    <div>
         <Navbar />
            <HeroSection
        title="
      Healthcare Solutions"
        description="Health information technology is evolving at a high pace and mobile apps are revolutionizing the entire industry to provide high-end patient experience and business enterprise management systems. We, at ProfuseCC, are offering top-quality health & fitness software and mobile solutions."
        backgroundImage="/assets/Healthcare-bg.webp" 
        breadcrumb="Industry > Healthcare"
      />
      <Medical />
      <ChallengesOpportunities />
      <MedicalSolutions />
      <WhyChooseUsPage />
       <section className="bg-red-700 text-white py-16 px-6">
        <div className="container xl:max-w-6xl w-full mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            EXPLORE OTHER INDUSTRIES WE SERVE
          </h2>
          <IndustriesList
            excludeCurrent 
            currentIndustry="/industry/healthcare" 
          />
        </div>
      </section>
      <Testimonials />
    </div>
  )
}

export default Healthcare