"use client";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosection/home";
import Services from "@/components/services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
    </div>
  );
}