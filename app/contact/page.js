import Navbar from "@/components/navbar";
import ContactForm from "@/components/contactform";
import LogoCarousel from "@/components/LogoCarousel";
import AustinMap from "@/components/map";
import ContactInfo from "@/components/contactinfo";
import HeroSection from "@/components/herosection/hero";


export const metadata = {
  title: "Contact Us | profuseCC",
  description: "Reach out to profuseCC for AI software services, partnership inquiries, or customer support. We're here to help you grow.",
};
const ContactPage = () => {
  return (
    <>
    
      <div>
        <Navbar />
        <HeroSection
    title="Get in Touch"
    description="We'd love to hear from you. Whether you have a question, feedback,
                or just want to say hello, feel free to reach out."
    backgroundImage="/assets/contact.webp"
    breadcrumb="Contact" />
        <ContactInfo />
        <ContactForm />
        <LogoCarousel />
        <AustinMap />
      </div>
    </>
  );
};

export default ContactPage;