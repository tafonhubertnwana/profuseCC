"use client";
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import React from 'react'

const ChooseUsPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
    title="Why Choose Us"
    description="Discover why we are the best choice for your needs."
    backgroundImage="/assets/choose-us-bg.png"
    breadcrumb="Choose Us"
  /></div>
  )
}

export default ChooseUsPage