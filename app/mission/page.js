"use client";
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import React from 'react'

const MissionPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
    title="Our Mission"
    description="Driving innovation and delivering excellence."
    backgroundImage="/assets/breadcrumb-bg.png"
    breadcrumb="Mission"
  /></div>
  )
}

export default MissionPage