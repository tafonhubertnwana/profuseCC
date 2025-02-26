"use client";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosection/hero";


const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title="About Us"
  description="Learn more about our mission, vision, and the team behind our success."
  backgroundImage="/assets/breadcrumb-bg.png"
  breadcrumb="About" />
      {/* Add the rest of your contact page content here */}
      
    </div>
  );
};

export default AboutPage;