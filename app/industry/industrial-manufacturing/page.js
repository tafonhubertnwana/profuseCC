"use client";
import { IndustriesList } from '@/components/businessDomain';
import HeroSection from '@/components/herosection/hero'
import ManufactureChallengesPage from '@/components/manufacture/manufactureChallenges';
import FactoryServices from '@/components/manufacture/manufactureFactory'
import SuccessStoriesPage from '@/components/manufacture/manufactureStoriesPage';
import ManufactureChooseUs from '@/components/manufacture/manufactureWhyChooseUs';
import ManufactureBanner from '@/components/manufacture/manufacturing';

import Navbar from '@/components/navbar'
import Testimonials from '@/components/testimonial';
import React from 'react'

const Manufacturing = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title="
Manufacturing IT Solutions"
  description="Leading Manufacturing Solution for Industrial IOT & Industry 4.0 Manufacturing Solutions"
  backgroundImage="/assets/industrial-manufacturing-bg.webp" 
  breadcrumb="Industry > Industrial Manufacturing"
/>
<ManufactureBanner />
<FactoryServices />
<ManufactureChallengesPage />
<ManufactureChooseUs />
<SuccessStoriesPage />

 <section className="bg-red-700 text-white py-16 px-6">
        <div className="container xl:max-w-6xl w-full mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            EXPLORE OTHER INDUSTRIES WE SERVE
          </h2>
          <IndustriesList
            excludeCurrent 
            currentIndustry="/industry/industrial-manufacturing" 
          />
        </div>
      </section>
      <Testimonials />
    </div>
  )
}

export default Manufacturing