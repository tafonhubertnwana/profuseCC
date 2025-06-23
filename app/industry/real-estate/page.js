"use client";
import { IndustriesList } from '@/components/businessDomain';
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import RealEstateChallengesPage from '@/components/real-estate/realEstateChallenges';
import RealEstateSolutions from '@/components/real-estate/realEstateSolution';
import SuccessStoriesPage from '@/components/real-estate/realEstateStoriesPage';
import WhyChooseUsPage from '@/components/real-estate/realEstateWhyChooseUs';
import RealEstateBanner from '@/components/real-estate/realEstateBanner';
import Testimonials from '@/components/testimonial';
import React from 'react';


const Mining = () => {
  return (
    <div>
      <Navbar />
   <HeroSection
  title="Transforming Real Estate Through Innovation"
  description="Leverage cutting-edge digital tools to streamline property management, enable immersive virtual tours, and boost client engagement in a competitive real estate market."
  backgroundImage="/assets/real-estate-bg.webp"
  breadcrumb="Industry > Real Estate"
/>

<RealEstateBanner />
<RealEstateChallengesPage />
<RealEstateSolutions />
<WhyChooseUsPage />
<SuccessStoriesPage />

     <section className="bg-red-700 text-white py-16 px-6">
        <div className="container xl:max-w-6xl w-full mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            EXPLORE OTHER INDUSTRIES WE SERVE
          </h2>
          <IndustriesList
            excludeCurrent 
            currentIndustry="/industry/real-estate" 
          />
        </div>
      </section>
      <Testimonials />
    </div>
  )
}

export default Mining