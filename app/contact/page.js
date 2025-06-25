"use client";
import Navbar from "@/components/navbar";
import ContactForm from "@/components/contactform";
import LogoCarousel from "@/components/LogoCarousel";
import AustinMap from "@/components/map";
import ContactInfo from "@/components/contactinfo";
import HeroSection from "@/components/herosection/hero";
import { NextSeo } from 'next-seo';


const ContactPage = () => {
  return (
    <>
      <NextSeo
          title="Contact Us - ProfuseCC"
          description="Get in touch with ProfuseCC for AI consulting, software development, or cloud computing inquiries."
          canonical="https://profusecc.ai/contact"
          openGraph={{
            url: 'https://profusecc.ai/contact',
            title: 'Contact Us - ProfuseCC',
            description: 'Reach out to ProfuseCC for collaboration, services, or questions about AI software and cloud infrastructure.',
            images: [
              {
                url: 'https://profusecc.ai/assets/profuse.jpg',
                width: 1200,
                height: 630,
                alt: 'Contact ProfuseCC',
              },
            ],
          }}
        />
      <div>
        <Navbar />
        <HeroSection
    title="Get in Touch"
    description="We'd love to hear from you. Whether you have a question, feedback,
                or just want to say hello, feel free to reach out."
    backgroundImage="/assets/contact.webp"
    breadcrumb="Contact" />
        {/* Add the rest of your contact page content here */}
        <ContactInfo />
        <ContactForm />
        <LogoCarousel />
        <AustinMap />
      </div>
    </>
  );
};

export default ContactPage;