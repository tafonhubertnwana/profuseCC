
import AustinMap from '@/components/map';
import ContactInfo from '@/components/contactinfo';
import PricingView from '@/components/pricingDetail';
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import React from 'react'

const PricingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title="Our Pricing"
  description="Find us at the heart of innovation."
  backgroundImage="/assets/location.webp"
  breadcrumb="Pages > Pricing"
/>
<PricingView />
<AustinMap />
<ContactInfo />
    </div>
  )
}

export default PricingPage