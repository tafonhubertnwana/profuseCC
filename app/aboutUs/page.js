"use client";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosection/hero";
import ItSupportSection from "@/components/support";
import ExperienceSection from '@/components/experienceSection';
import TeamSection from "@/components/DedicatedTeam";
import StatsSection from "@/components/statSection";
import Testimonials from "@/components/testimonial";
import AustinMap from "@/components/AustinMap";


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
      <ExperienceSection />
      
      <ItSupportSection />
      <StatsSection />
      <TeamSection />
      <Testimonials />
      <AustinMap />
    </div>
  );
};

export default AboutPage;