"use client";
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import CustomSoftwareDevelopment from '@/components/web-development/web-dev';
import React from 'react'
import ServicesSlider from '@/components/web-development/serviceSlide'
import Services from '@/components/web-development/web-service';
import TechStack from '@/components/techStack';
import Solutions from '@/components/web-development/serviceSlide';
import TechnologyStack from '@/components/web-development/web-tech';

const WebDevelopment = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className=' relative'>

        <HeroSection
          title="Software development"
          description="We build scalable web and mobile apps tailored to your business goals and user needs."
          backgroundImage="/assets/web-dev-bg.webp"
          breadcrumb="Services > Software development"
        />
        
        </div>
  <CustomSoftwareDevelopment />
  <Services />
  <ServicesSlider />
  <TechnologyStack />
 

      </div>
    </>
  )
}

export default WebDevelopment