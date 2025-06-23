"use client";
import { IndustriesList } from '@/components/businessDomain';
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import React from 'react'
import Testimonials from '@/components/testimonial'
import EducationChallengesPage from '@/components/education/educationChallenges';
import EducationSolutions from '@/components/education/educationSolution';
import WhyChooseUsPage from '@/components/education/WhychooseUs';
import SuccessStoriesPage from '@/components/education/successStories';
import EducationBanner from '@/components/education/educationBanner';

const Education = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
          title="
        Education"
          description="Scale your infrastructure seamlessly with secure, flexible, and cost-effective cloud solutions."
          backgroundImage="/assets/education.webp" 
          breadcrumb="Industry > Education"
        />
    <EducationBanner />
        <EducationChallengesPage />
        <EducationSolutions />
        <WhyChooseUsPage />
        <SuccessStoriesPage />
  <section className="bg-red-700 text-white py-16 px-6">
      <div className="container xl:max-w-6xl w-full mx-auto">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
          EXPLORE OTHER INDUSTRIES WE SERVE
        </h2>
        <IndustriesList
          excludeCurrent 
          currentIndustry="/industry/education" 
        />
      </div>
    </section>
    <Testimonials />
  </div>
  )
}

export default Education