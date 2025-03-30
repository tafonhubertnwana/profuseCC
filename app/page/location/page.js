"use client";
import AustinMap from '@/components/map';
import ContactInfo from '@/components/contactinfo';
import CountryCards from '@/components/countryCard';
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import React from 'react'

const LocationPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title="Our Location"
  description="Find us at the heart of innovation."
  backgroundImage="/assets/location.webp"
  breadcrumb="Location"
/>
<CountryCards />
<AustinMap />
<ContactInfo />
    </div>
  )
}

export default LocationPage