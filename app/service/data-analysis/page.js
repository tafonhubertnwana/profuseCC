"use client";
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import DataServices from '@/components/seo/dataService';
import React from 'react'
import DataAnalysis from '@/components/seo/dataAnalysis'
import DataAndAnalyticsServices from '@/components/seo/datasection';
import DataVisualizationPage from '@/components/seo/dataVisualization';

const DataPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title="Data Analytics Consulting Services"
  description="Optimizing your online presence while ensuring top-notch security."
  backgroundImage="/assets/sac-bg.webp"
  breadcrumb="Services > Data Analysis"
/>
<DataAndAnalyticsServices/>
<DataVisualizationPage /> 
<DataServices />
<DataAnalysis />
  

</div>
  )
}

export default DataPage