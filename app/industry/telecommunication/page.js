

import { IndustriesList } from '@/components/businessDomain';
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import TelComBanner from '@/components/telecommunication/telBanner';
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
  title="Driving Connectivity in the Digital Era"
  description="Empower your telecom operations with scalable cloud infrastructure, 5G integration, and real-time data solutions to deliver faster, smarter, and more reliable communication services."
  backgroundImage="/industry/telecommunications-bg.webp"
  breadcrumb="Industry > Telecommunication"
/>
<TelComBanner />
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