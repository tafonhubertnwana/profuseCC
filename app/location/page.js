"use client";
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import React from 'react'

const LocationPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title="Our Location"
  description="Find us at the heart of innovation."
  backgroundImage="/assets/breadcrumb-bg.png"
  breadcrumb="Location"
/>
    </div>
  )
}

export default LocationPage