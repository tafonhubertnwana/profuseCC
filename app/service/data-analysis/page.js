"use client";
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import DataServices from '@/components/seo/dataService';
import React from 'react'
import DataAnalysis from '@/components/seo/dataAnalysis'
import DataAndAnalyticsServices from '@/components/seo/datasection';
import MachineLearningServices from '@/components/seo/mechineLearning';

const SeoPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title="Data Analysis"
  description="Optimizing your online presence while ensuring top-notch security."
  backgroundImage="/assets/SAP-Build-Code-bg.webp"
  breadcrumb="Data Analysis"
/>
<DataAndAnalyticsServices/>
<MachineLearningServices />
<DataServices />
<DataAnalysis />

    </div>
  )
}

export default SeoPage