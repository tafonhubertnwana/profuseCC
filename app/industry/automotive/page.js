"use client";
import { IndustriesList } from '@/components/businessDomain';
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import React from 'react'

const Automotive = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title="
Cloud Computing"
  description="Scale your infrastructure seamlessly with secure, flexible, and cost-effective cloud solutions."
  backgroundImage="/assets/Automotive-bg.webp" 
  breadcrumb="Industry > Automotive"
/>

    <section className="bg-red-700 text-white py-16 px-6">
        <div className="container xl:max-w-6xl w-full mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            EXPLORE OTHER INDUSTRIES WE SERVE
          </h2>
          <IndustriesList 
            excludeCurrent 
            currentIndustry="/industry/automotive" 
          />
        </div>
      </section>
    </div>
  )
}

export default Automotive