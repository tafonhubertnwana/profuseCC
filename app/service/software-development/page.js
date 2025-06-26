
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import CustomSoftwareDevelopment from '@/components/web-development/web-dev';
import React from 'react'
import Services from '@/components/web-development/web-service';
import TechnologyStack from '@/components/web-development/web-tech';
import CustomSoftware from '@/components/web-development/customSoftware';
// import { NextSeo } from 'next-seo';


const WebDevelopment = () => {
  return (
    <>
      {/* <NextSeo
        title="AI Software Development - ProfuseCC"
        description="We build intelligent, scalable, and secure software solutions for startups and enterprises using modern AI technologies."
        canonical="https://profusecc.ai/service/software-development"
        openGraph={{
          url: 'https://profusecc.ai/service/software-development',
          title: 'AI Software Development - ProfuseCC',
          description: 'Custom software solutions powered by AI, built for scalability, security, and performance.',
          images: [
            {
              url: 'https://profusecc.ai/assets/profuse.jpg',
              width: 1200,
              height: 630,
              alt: 'AI Software Development by ProfuseCC',
            },
          ],
        }}
      /> */}
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