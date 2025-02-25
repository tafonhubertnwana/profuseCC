"use client";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosection/hero";

const ProjectPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
    title="Our Projects"
    description="Discover the projects we've worked on and see how we bring ideas to life."
    backgroundImage="/assets/breadcrumb-bg.png"
    breadcrumb="Projects" />
      {/* Add the rest of your contact page content here */}
      
    </div>
  );
};

export default ProjectPage;