"use client";
import HeroSection from '@/components/herosection/hero'
import Navbar from '@/components/navbar'
import React from 'react'

const WebDevelopment = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title="Web Development"
  description="Building modern, responsive, and scalable web applications."
  backgroundImage="/assets/breadcrumb-bg.png"
  breadcrumb="Web Development"
/>
    </div>
  )
}

export default WebDevelopment