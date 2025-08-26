"use client";

import AustinMap from '@/components/map';
import ContactInfo from '@/components/contactinfo';
import HeroSection from '@/components/herosection/hero';
import Navbar from '@/components/navbar';
import { useState, useEffect } from "react";
import ServiceSelector from '@/components/pricing/serviceSelector';
import PricingGrid from '@/components/pricing/pricingGrid';
import PaymentForm from '@/components/pricing/paymentForm';
import PaymentProcessor from '@/components/pricing/paymentProcessor';
import SuccessModal from '@/components/pricing/successModal';
import { AppwriteService, EmailService } from '@/services/appwriteService';
import { createInvoice, generateInvoiceHTML } from '@/utils/invoices';
import { motion } from "framer-motion";
import StatsSection from '@/components/statSection';
import { useRouter } from 'next/navigation';



const PricingPage = () => {
 const router = useRouter();
  const [selectedService, setSelectedService] = useState(null);

  const handlePlanSelect = (serviceId, serviceName, tierId, tierName, price) => {
    const paymentData = {
      serviceId,
      serviceName,
      tierId,
      tierName,
      price
    };

    // Save plan data in localStorage for payment form
    localStorage.setItem('selectedPlan', JSON.stringify(paymentData));

    // Redirect to payment form page
    router.push('/page/pricing/paymentform');
  };

  return (
    <div>
      <Navbar />
      <HeroSection
        title="Our Pricing"
        description="Find us at the heart of innovation."
        backgroundImage="/assets/location.webp"
        breadcrumb="Pages > Pricing"
      />

     {/* Main Content */}
      <main className="container xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
         <ServiceSelector selectedService={selectedService} onServiceSelect={setSelectedService} />
      {selectedService && (
        <PricingGrid
          selectedService={selectedService}
          onSelectPlan={handlePlanSelect} // Redirect now
        />
      )}
      </main>
        <StatsSection/>
      <ContactInfo />
      <AustinMap />
    </div>
  );
};

export default PricingPage;
