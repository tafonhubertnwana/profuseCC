
import CloudServices from '@/components/aws/cloudservice';
import AwsServices from '@/components/aws/aws-service';
import TechnicalExpertise from '@/components/aws/awsExpertise';
import CloudAdoptionStrategies from '@/components/aws/cloudAdoptionStrategies';

import GoogleCloudServices from '@/components/aws/googleCloud';
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import CloudDeployment from '@/components/aws/cloudDeployment'
import { NextSeo } from 'next-seo';
import React from 'react'
import CloudCharacteristics from '@/components/aws/cloudCharacteristics';
import CloudComputing from '@/components/aws/cloudComputing';

const CloudPage = () => {
  return (
    <>
      <NextSeo
          title="Cloud Computing Services - ProfuseCC"
          description="ProfuseCC offers secure, scalable cloud computing solutions powered by AWS and Google Cloud tailored for AI-driven businesses."
          canonical="https://profusecc.ai/service/cloud-computing"
          openGraph={{
            url: 'https://profusecc.ai/service/cloud-computing',
            title: 'Cloud Computing Services - ProfuseCC',
            description: 'Secure and scalable cloud computing powered by AWS and Google Cloud for AI-driven transformation.',
            images: [
              {
                url: 'https://profusecc.ai/assets/profuse.jpg',
                width: 1200,
                height: 630,
                alt: 'Cloud Computing at ProfuseCC',
              },
            ],
          }}
        />
      <div>
        <Navbar />
        <HeroSection
    title="
  Customized and Scalable Cloud Based Applications"
    description="Scale your infrastructure seamlessly with secure, flexible, and cost-effective cloud solutions."
    backgroundImage="/assets/aws-bg.webp" 
    breadcrumb="Services > Cloud computing"
  />
  <CloudComputing />
  <CloudServices/>
  <CloudCharacteristics />


  <CloudDeployment />
  <GoogleCloudServices />
  <CloudAdoptionStrategies />
  <AwsServices />
  <TechnicalExpertise />

      </div>
    </>
  )
}

export default CloudPage