"use client";
import { IndustriesList } from '@/components/businessDomain';
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import TransportChallengesPage from '@/components/tranasportation/transportation-challenges';
import TransportationSolutions from '@/components/tranasportation/transportationSolutions';
import React from 'react'

const Transportation = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title="
Logistics Technology Solutions"
  description="IT Solutions For Logistics
Transport And Logistics IT Services & Solution"
  backgroundImage="/assets/transportation-and-logistics-bg.webp" 
  breadcrumb="Industry > Transportation & Logistics"
/>
<TransportationSolutions />
<TransportChallengesPage />
<section className="bg-red-700 text-white py-16 px-6">
        <div className="container xl:max-w-6xl w-full mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            EXPLORE OTHER INDUSTRIES WE SERVE
          </h2>
          <IndustriesList
            excludeCurrent 
            currentIndustry="/industry/transportation-logistics" 
          />
        </div>
      </section>
    </div>
  )
}

export default Transportation