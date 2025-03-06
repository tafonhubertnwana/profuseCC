"use client";
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import React from 'react'

const PricingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title="Pricing"
  description="Flexible pricing plans tailored to your requirements."
  backgroundImage="/assets/breadcrumb-bg.png"
  breadcrumb="Pricing"
/>
    </div>
  )
}

export default PricingPage