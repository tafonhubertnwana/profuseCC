"use client";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosection/home";
import Services from "@/components/services";
import WorkProcess from "@/components/workprocess";
import ServiceCard from "@/components/serviceCard";
import TopTechSection from "@/components/topTechSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServiceCard /> 
      <TopTechSection />
      <Services />
      <WorkProcess />
    </div>
  );
}