"use client";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosection/hero";

const ServicePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
    title=" Our Services"
    description="Explore the wide range of services we offer to meet your needs."
    backgroundImage="/assets/breadcrumb-bg.png"
    breadcrumb="Services" />
      {/* Add the rest of your contact page content here */}
      
    </div>
  );
};

export default ServicePage;