'use client';



import Navbar from '@/components/navbar';
import {useState, useEffect} from "react"
import HeroSection from '@/components/herosection/hero';
import StatsSection from '@/components/statSection';
import ContactInfo from '@/components/contactinfo';
import AustinMap from '@/components/map';
import { useRouter } from 'next/navigation';
import Stepper from '@/components/pricing/stipper';
import PaymentProcessor from '@/components/pricing/paymentProcessor';
import SuccessModal from '@/components/pricing/successModal';


export default function PaymentProcessorPage() {
   const router = useRouter();
  const [paymentData, setPaymentData] = useState(null);
  const [modalData, setModalData] = useState(null);

  const demoMode = true;

  useEffect(() => {
    const data = localStorage.getItem('paymentFormData');
    if (data) {
      setPaymentData(JSON.parse(data));
    } else if (demoMode) {
      // Dummy demo account
      setPaymentData({
        name: 'Demo User',
        email: 'demo@example.com',
        phone: '+10000000000',
        serviceName: 'Demo Subscription',
        tierName: 'Demo Plan',
        price: 99,
        demoCard: {
          number: '4242 4242 4242 4242',
          expiry: '12/34',
          cvv: '123',
        },
      });
    } else {
      router.push('/page/pricing');
    }
  }, []);

  const handlePaymentComplete = (success, transactionId) => {
    if (success) {
      setModalData({
        title: 'Payment Successful 🎉',
        message: `Your payment of $${paymentData.price} was successful! Transaction ID: ${transactionId}`,
        type: 'success',
      });
      // Redirect to home after 3 seconds
      setTimeout(() => router.push('/'), 3000);
    } else {
      setModalData({
        title: 'Payment Failed ',
        message: `Payment of $${paymentData.price} failed. Please try again.`,
        type: 'error',
      });
    }
  };

  const handleCancel = () => {
    setModalData({
      title: 'Payment Cancelled ',
      message: `Payment of $${paymentData?.price || 0} was cancelled.`,
      type: 'error',
    });
    setTimeout(() => router.push('/'), 3000);
  };

  if (!paymentData) return null;

  return (
    <main>
      <Navbar />
      <HeroSection
        title="Our Pricing"
        description="Find us at the heart of innovation."
        backgroundImage="/assets/location.webp"
        breadcrumb="Pages > Pricing"
      />
         <div className="container mx-auto px-4 py-12 max-w-5xl">
      <Stepper currentStep={3} />

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Finalize Payment</h1>
        <p className="text-gray-600">Secure checkout for your subscription</p>
      </div>

      {!modalData && (
        <PaymentProcessor
          paymentData={paymentData}
          onPaymentComplete={handlePaymentComplete}
          onCancel={handleCancel}
        />
      )}

      {modalData && (
        <SuccessModal
          isOpen={true}
          title={modalData.title}
          message={modalData.message}
          onClose={() => router.push('/')}
        />
      )}
    </div>

      
      <StatsSection/>
      <ContactInfo />
      <AustinMap />
    </main>
  );
}
