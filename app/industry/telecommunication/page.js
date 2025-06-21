"use client";

import { IndustriesList } from '@/components/businessDomain';
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import TelecomIntegrations from '@/components/telecommunication/telecomIntegration';
import TelecommunicationChallengesPage from '@/components/telecommunication/telecommunicationChallenges';
import TelecommunicationSolutions from '@/components/telecommunication/telecommunicationSolution';
import SuccessStoriesPage from '@/components/telecommunication/telecommunicationStoriesPage';
import WhyChooseUsPage from '@/components/telecommunication/telecommunicationWhyChooseUs';
import Testimonials from '@/components/testimonial';
import React from 'react'

const TeleCommunication = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title="
Cloud Computing"
  description="Scale your infrastructure seamlessly with secure, flexible, and cost-effective cloud solutions."
  backgroundImage="/assets/telecommunication-bg.webp" 
  breadcrumb="Industry > Telecommunication"
/>
    <TelecommunicationChallengesPage />
    <TelecommunicationSolutions />

    <WhyChooseUsPage />
    <TelecomIntegrations />
    <SuccessStoriesPage />
     <section className="bg-red-700 text-white py-16 px-6">
        <div className="container xl:max-w-6xl w-full mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            EXPLORE OTHER INDUSTRIES WE SERVE
          </h2>
          <IndustriesList 
            excludeCurrent 
            currentIndustry="/industry/telecommunication" 
          />
        </div>
      </section>
      <Testimonials />
    </div>
  )
}

export default TeleCommunication