
import CloudServices from '@/components/aws/cloudservice';
import AwsServices from '@/components/aws/aws-service';
import TechnicalExpertise from '@/components/aws/awsExpertise';
import CloudAdoptionStrategies from '@/components/aws/cloudAdoptionStrategies';

import GoogleCloudServices from '@/components/aws/googleCloud';
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import CloudDeployment from '@/components/aws/cloudDeployment'

import React from 'react'
import CloudCharacteristics from '@/components/aws/cloudCharacteristics';
import CloudComputing from '@/components/aws/cloudComputing';
export const metadata = {
  title: "Cloud Computing Services | profuseCC",
  description: "Leverage scalable, secure, and cost-effective cloud solutions tailored to your enterprise needs with profuseCC.",
};

const CloudPage = () => {
  return (
    <>
      
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