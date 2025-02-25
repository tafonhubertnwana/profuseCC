"use client";
import HeroSection from '@/components/herosection/hero'
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
    </div>
  )
}

export default CareerPage