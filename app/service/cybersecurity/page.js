"use client";
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import React from 'react'
import ServicesSection from '@/components/cybersecurity/serviceSection';
import AboutCyber from '@/components/cybersecurity/aboutCyber';
import SecurityServices from '@/components/cybersecurity/ServicesGrid';


const CybersecurityPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title="AI & Cybersecurity"
  description="Safeguard your digital assets with AI-driven cybersecurity solutions."
  backgroundImage="/assets/SAP-Build-Code-bg.webp"
  breadcrumb="Services > AI & Cybersecurity"
/>

<ServicesSection />
<SecurityServices />
 <AboutCyber />
    </div>
  )
}

export default CybersecurityPage