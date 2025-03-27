"use client";
import CloudAgilitySection from '@/components/aws/aws-benefit';
import CloudServices from '@/components/aws/aws-cloud';
import AWSDevelopmentServices from '@/components/aws/aws-dev-services';
import AwsServices from '@/components/aws/aws-service';
import TechnicalExpertise from '@/components/aws/awsExpertise';
import GoogleCloudServices from '@/components/aws/googleCloud';
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'

import React from 'react'

const CloudPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title="
AWS Cloud"
  description="Optimize landscape for cloud operations with AWS cloud"
  backgroundImage="/assets/AWS-Cloud-bg.webp" 
  breadcrumb="AWS Cloud"
/>
<CloudServices />
<GoogleCloudServices />
<CloudAgilitySection />
<AwsServices />
<AWSDevelopmentServices />
<TechnicalExpertise />

    </div>
  )
}

export default CloudPage