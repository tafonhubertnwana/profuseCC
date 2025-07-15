
import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosection/hero";
import ItSupportSection from "@/components/support";
import ExperienceSection from '@/components/experienceSection';
import TeamSection from "@/components/DedicatedTeam";
import StatsSection from "@/components/statSection";
import Testimonials from "@/components/testimonial";
import AustinMap from "@/components/map";

export const metadata = {
  title: "About Us | profuseCC",
  description: "Discover profuseCC's mission, values, and the talented team behind our cutting-edge AI software solutions.",
};

const AboutPage = () => {
  return (
  <>
   
    <div>
     
      <Navbar />
      <HeroSection
          title="About Us"
          description="Learn more about our mission, vision, and the team behind our success."
          backgroundImage="/assets/company-bg.webp"
          breadcrumb="About" />
              {/* Add the rest of your contact page content here */}
      <ExperienceSection />
      
      <ItSupportSection />
      <StatsSection />
      <TeamSection />
      <Testimonials />
      <AustinMap />
    </div>
  </>
  );
};

export default AboutPage;