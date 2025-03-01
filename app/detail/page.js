"use client";
import Navbar from "@/components/navbar";
import TeamSection from "@/components/DedicatedTeam";
import HeroSection from "@/components/herosection/hero";
import TeamDetail from "@/components/teamdetail";

const TeamDetailPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title=" Our Members Details"
  description=" Meet the talented individuals who make up our team."
  backgroundImage="/assets/breadcrumb-bg.png"
  breadcrumb="Team" />
      {/* Add the rest of your contact page content here */}
      <TeamDetail/>
    </div>
  );
};

export default TeamDetailPage;