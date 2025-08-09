
import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosection/home";
import Services from "@/components/services";
import WorkProcess from "@/components/workprocess";
import ServiceCard from "@/components/serviceCard";
import TopTechSection from "@/components/topTechSection";
import TeamSection from "@/components/DedicatedTeam";
import LogoCarousel from "@/components/LogoCarousel";
import Testimonials from "@/components/testimonial";
import BusinessDomains from "@/components/businessDomain";
import FeaturesSection from "@/components/featureChoose";
import StatsSection from "@/components/statSection";
import AustinMap from "@/components/map";
import ReviewBanner from "@/components/reviewBanner";



export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <TopTechSection />
      <Services />
      {/* <WorkProcess /> */}
      
      <BusinessDomains />
      
      <TeamSection />
      <ReviewBanner />
      <Testimonials />
      <LogoCarousel />
      <AustinMap/>
      
    </div>
  );
}