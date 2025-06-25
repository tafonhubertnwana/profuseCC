
import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosection/hero";
import ProjectSection from '@/components/project'
import Testimonials from '@/components/testimonial'
import LogoCarousel from "@/components/LogoCarousel";
import { NextSeo } from 'next-seo';

const ProjectPage = () => {
  return (
    <>
    <NextSeo
        title="Our Projects - ProfuseCC"
        description="Explore AI-powered projects and software solutions built by ProfuseCC across industries including health, finance, and cloud tech."
        canonical="https://profusecc.ai/project"
        openGraph={{
          url: 'https://profusecc.ai/project',
          title: 'Our Projects - ProfuseCC',
          description: 'See real-world projects where ProfuseCC delivered innovative AI, web, and cloud solutions.',
          images: [
            {
              url: 'https://profusecc.ai/assets/profuse.jpg',
              width: 1200,
              height: 630,
              alt: 'ProfuseCC Projects',
            },
          ],
        }}
      />
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