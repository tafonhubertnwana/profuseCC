"use client";
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import CustomSoftwareDevelopment from '@/components/web-development/web-dev';
import React from 'react'
import ServicesSlider from '@/components/web-development/serviceSlide'
import Services from '@/components/web-development/web-service';
import TechStack from '@/components/techStack';

const WebDevelopment = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title="Web Development"
  description="Building modern, responsive, and scalable web applications."
  backgroundImage="/assets/web-dev-bg.webp"
  breadcrumb="Web Development"
/>
<CustomSoftwareDevelopment />
<Services />
<ServicesSlider />
<TechStack />
    </div>
  )
}

export default WebDevelopment