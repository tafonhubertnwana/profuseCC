
import { IndustriesList } from '@/components/businessDomain';
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import Retail from '@/components/wholesale/retail';
import RetailDevelopmentServices from '@/components/wholesale/retailService';
import RetailSolutions from '@/components/wholesale/retailSolutions';
import SuccessStoriesPage from '@/components/wholesale/retailStory';
import React from 'react'
import Testimonials from '@/components/testimonial';
const Wholesale = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title="
Retail IT Solution"
  description="Retail Ecommerce Solution for B2B Ecommerce Solutions and Retailers Online Shopping Store Development"
  backgroundImage="/assets/Retail-bg.webp" 
  breadcrumb="Industry > Wholesale & Retail"
/>
  <Retail />
  <RetailDevelopmentServices />
  <RetailSolutions />
  <SuccessStoriesPage />
  <section className="bg-red-700 text-white py-16 px-6">
    <div className="container xl:max-w-6xl w-full mx-auto">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
        EXPLORE OTHER INDUSTRIES WE SERVE
      </h2>
      <IndustriesList 
        excludeCurrent 
        currentIndustry="/industry/wholesale-retail" 
      />
    </div>
  </section>
       <Testimonials />
    </div>
  )
}

export default Wholesale