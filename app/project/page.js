
import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosection/hero";
import ProjectSection from '@/components/project'
import Testimonials from '@/components/testimonial'
import LogoCarousel from "@/components/LogoCarousel";
export const metadata = {
  title: "Our Projects | profuseCC",
  description: "Explore our AI-powered projects showcasing real-world applications and innovative solutions for businesses.",
};

const ProjectPage = () => {
  return (
    <>
  
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
    </>
  );
};

export default ProjectPage;