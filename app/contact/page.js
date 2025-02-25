"use client";
import Navbar from "@/components/navbar";
import ContactForm from "@/components/contactform";
import LogoCarousel from "@/components/LogoCarousel";
import AustinMap from "@/components/AustinMap";
import ContactInfo from "@/components/contactinfo";
import HeroSection from "@/components/herosection/hero";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title="Get in Touch"
  description="We'd love to hear from you. Whether you have a question, feedback,
              or just want to say hello, feel free to reach out."
  backgroundImage="/assets/breadcrumb-bg.png"
  breadcrumb="Contact" />
      {/* Add the rest of your contact page content here */}
      <ContactInfo />
      <ContactForm />
      <LogoCarousel />
      <AustinMap />
    </div>
  );
};

export default ContactPage;