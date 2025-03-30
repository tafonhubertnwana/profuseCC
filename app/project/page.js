"use client";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosection/hero";
import ProjectSection from '@/components/project'
import Testimonials from '@/components/testimonial'
import LogoCarousel from "@/components/LogoCarousel";

const ProjectPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
    title="Our Projects"
    description="Discover the projects we've worked on and see how we bring ideas to life."
    backgroundImage="/assets/project.png"
    breadcrumb="Projects" />
      {/* Add the rest of your contact page content here */}
      <ProjectSection />
      <Testimonials />
      <LogoCarousel />
    </div>
  );
};

export default ProjectPage;