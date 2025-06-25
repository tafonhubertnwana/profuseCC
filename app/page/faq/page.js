
import Navbar from "@/components/navbar";
import ITServices from "@/components/faqsection";
import LogoCarousel from "@/components/LogoCarousel";
import HeroSection from "@/components/herosection/hero";
import ConsultationForm from "@/components/consultingForm";
import AustinMap from "@/components/map";

const FAQPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
  title="Frequently Asked Questions"
  description="Find answers to common questions about our services, policies, and more."
  backgroundImage="/assets/faq-bg.webp"
  breadcrumb="Pages > FAQ" />
      {/* Add the rest of your contact page content here */}
      <ITServices />
      <LogoCarousel />
      <ConsultationForm />
      <AustinMap />
    </div>
  );
};

export default FAQPage;