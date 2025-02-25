"use client";
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import React from 'react'

const DataPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title="Data & AI"
  description="Harnessing the power of data and artificial intelligence to drive insights."
  backgroundImage="/assets/breadcrumb-bg.png"
  breadcrumb="Data & AI"
/>
    </div>
  )
}

export default DataPage