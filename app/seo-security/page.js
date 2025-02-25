"use client";
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import React from 'react'

const SeoPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title="SEO & Security"
  description="Optimizing your online presence while ensuring top-notch security."
  backgroundImage="/assets/breadcrumb-bg.png"
  breadcrumb="SEO & Security"
/>
    </div>
  )
}

export default SeoPage