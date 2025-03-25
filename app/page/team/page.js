"use client";
import Navbar from "@/components/navbar";
import TeamSection from "@/components/DedicatedTeam";
import HeroSection from "@/components/herosection/hero";

const TeamPage = () => {
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

export default TeamPage;