"use client";
import WhatWeBelieve from '@/components/careerBelieve';
import CareerSection from '@/components/careerSection';
import HeroSection from '@/components/herosection/hero'
import JobListings from '@/components/jobsListing';
import LogoCarousel from '@/components/LogoCarousel';
import Navbar from '@/components/navbar'
import React from 'react'

const CareerPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title="Career"
  description="Leverage the power of AWS Cloud for your business."
  backgroundImage="/assets/breadcrumb-bg.png"
  breadcrumb="Career"
/>
<CareerSection />
<JobListings />
<WhatWeBelieve />
<LogoCarousel />
    </div>
  )
}

export default CareerPage