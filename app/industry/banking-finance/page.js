"use client";
import BankingSolutions from '@/components/banking-finance/banking-solutions';
import FintechChallengesPage from '@/components/banking-finance/Fintech-challenges';
import FintechSolutions from '@/components/banking-finance/fintechSolutions';
import KeyServices from '@/components/banking-finance/key-services';
import SolutionsPage from '@/components/banking-finance/solution';
import WhyChooseUsPage from '@/components/banking-finance/why-choose-us';
import { IndustriesList } from '@/components/businessDomain';
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import React from 'react'

const Finance = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title="
Custom Fintech Solutions & Services"
  description="Custom Fintech Solutions & Services Fintech Digital Technology Solutions for Banking & Financial Software"
  backgroundImage="/assets/Fintech-bg.webp" 
  breadcrumb="Industry > Banking & Finance"
/>
<FintechSolutions />
  <FintechChallengesPage />
  <BankingSolutions />
   <WhyChooseUsPage />  
   <KeyServices />
   <SolutionsPage />
   <section className="bg-red-700 text-white py-16 px-6">
        <div className="container xl:max-w-6xl w-full mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            EXPLORE OTHER INDUSTRIES WE SERVE
          </h2>
          <IndustriesList 
            excludeCurrent 
            currentIndustry="/industry/banking-finance" 
          />
        </div>
      </section>
    </div>
  )
}

export default Finance