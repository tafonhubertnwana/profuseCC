"use client";
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import CustomSoftwareDevelopment from '@/components/web-development/web-dev';
import React from 'react'
import Services from '@/components/web-development/web-service';
import TechnologyStack from '@/components/web-development/web-tech';
import CustomSoftware from '@/components/web-development/customSoftware';


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
          <CustomSoftware />
          <Services />
          <TechnologyStack />
      </div>
    </>
  )
}

export default WebDevelopment