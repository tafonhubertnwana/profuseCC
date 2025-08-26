'use client';



import Navbar from '@/components/navbar';
import HeroSection from '@/components/herosection/hero';
import StatsSection from '@/components/statSection';
import ContactInfo from '@/components/contactinfo';
import AustinMap from '@/components/map';

import PaymentForm from '@/components/pricing/paymentForm';

export default function PaymentFormPage() {
  

  return (
    <main>
      <Navbar />
      <HeroSection
        title="Our Pricing"
        description="Find us at the heart of innovation."
        backgroundImage="/assets/location.webp"
        breadcrumb="Pages > Pricing"
      />
      <PaymentForm />
      <StatsSection/>
      <ContactInfo />
      <AustinMap />
    </main>
  );
}
