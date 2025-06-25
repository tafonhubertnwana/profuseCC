"use client";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosection/hero";
import ItSupportSection from "@/components/support";
import ExperienceSection from '@/components/experienceSection';
import TeamSection from "@/components/DedicatedTeam";
import StatsSection from "@/components/statSection";
import Testimonials from "@/components/testimonial";
import AustinMap from "@/components/map";
import { NextSeo } from 'next-seo';


const AboutPage = () => {
  return (
    <div>
      <NextSeo
        title="About Us - ProfuseCC"
        description="Learn about ProfuseCC, an AI software consulting startup delivering innovative software and secure cloud services."
        canonical="https://profusecc.ai/about"
        openGraph={{
          url: 'https://profusecc.ai/about',
          title: 'About Us - ProfuseCC',
          description: 'Learn about ProfuseCC, an AI software consulting startup delivering innovative software and secure cloud services.',
          images: [
            {
              url: 'https://profusecc.ai/assets/profuse.jpg',
              width: 1200,
              height: 630,
              alt: 'About ProfuseCC',
            },
          ],
        }}
      />
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
  );
};

export default AboutPage;