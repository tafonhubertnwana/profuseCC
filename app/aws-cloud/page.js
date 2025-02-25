"use client";
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import React from 'react'

const CloudPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title="AWS Cloud"
  description="Leverage the power of AWS Cloud for your business."
  backgroundImage="/assets/breadcrumb-bg.png"
  breadcrumb="AWS Cloud"
/>
    </div>
  )
}

export default CloudPage