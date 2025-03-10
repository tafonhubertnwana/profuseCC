"use client";
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import CustomSoftwareDevelopment from '@/components/web-development/web-dev';
import React from 'react'
import ServicesSlider from '@/components/web-development/serviceSlide'
import Services from '@/components/web-development/web-service';
import TechStack from '@/components/techStack';
import Solutions from '@/components/web-development/serviceSlide';

const WebDevelopment = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className=' relative'>

        <HeroSection
          title="Web Development"
          description="Building modern, responsive, and scalable web applications."
          backgroundImage="/assets/web-dev-bg.webp"
          breadcrumb="Web Development"
        />
        
        </div>
  <CustomSoftwareDevelopment />
  <Services />
  <ServicesSlider />
 

      </div>
    </>
  )
}

export default WebDevelopment