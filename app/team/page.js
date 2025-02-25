"use client";
import Navbar from "@/components/navbar";
import TeamSection from "@/components/DedicatedTeam";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title=" Our Members"
  description=" Meet the talented individuals who make up our team."
  backgroundImage="/assets/breadcrumb-bg.png"
  breadcrumb="Team" />
      {/* Add the rest of your contact page content here */}
      <TeamSection />
    </div>
  );
};

export default AboutPage;