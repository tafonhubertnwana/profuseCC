"use client";
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import React from 'react'
import ServicesSection from '@/components/cybersecurity/serviceSection';

import SecurityServices from '@/components/cybersecurity/ServicesGrid';
import InformationSecurityServices from '@/components/cybersecurity/infromationsecurityservices';
import Portfolio from '@/components/cybersecurity/cyberPortfolio';
import WeLeadInPage from '@/components/cybersecurity/weLeadInPage';


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
<WeLeadInPage />
<SecurityServices />
 <InformationSecurityServices />
 <Portfolio />
    </div>
  )
}

export default CybersecurityPage