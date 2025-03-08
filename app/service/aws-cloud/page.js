"use client";
import CloudAgilitySection from '@/components/aws/aws-benefit';
import CloudServices from '@/components/aws/aws-cloud';
import AWSDevelopmentServices from '@/components/aws/aws-dev-services';
import AwsServices from '@/components/aws/aws-service';
import TechnicalExpertise from '@/components/aws/awsExpertise';
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import TechStack from '@/components/techStack';
import React from 'react'

const CloudPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title="SAP Migration to
AWS Cloud"
  description="Optimize SAP system landscape for cloud operations with AWS cloud"
  backgroundImage="/assets/AWS-Cloud-bg.webp" 
  breadcrumb="AWS Cloud"
/>
<CloudServices />
<AwsServices />
<CloudAgilitySection />
<AWSDevelopmentServices />
<TechnicalExpertise />
<TechStack />
    </div>
  )
}

export default CloudPage