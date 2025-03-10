"use client";
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import DataServices from '@/components/seo/dataService';
import SEOServices from '@/components/seo/seoService';
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
<SEOServices />
<DataServices />
    </div>
  )
}

export default SeoPage