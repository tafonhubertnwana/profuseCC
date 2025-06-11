"use client";
import ExperienceSection from '@/components/experienceSection';
import HeroSection from '@/components/herosection/hero'
import LogoCarousel from '@/components/LogoCarousel';
import MissionSection from '@/components/mission';
import Navbar from '@/components/navbar'
import React from 'react'

const MissionPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
    title="Our Mission Vision & Goal"
    description="Driving innovation and delivering excellence."
    backgroundImage="/assets/mission-bg.webp"
    breadcrumb="Pages > Mission"
  />
  <MissionSection />
  <ExperienceSection />
  <LogoCarousel />
  
  </div>
  )
}

export default MissionPage