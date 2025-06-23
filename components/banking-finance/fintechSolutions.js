// pages/fintech-solutions.js
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useState } from 'react';
import ConsultationFormModal from "../consultingForm";

export default function FintechSolutions() {
   const [isModalOpen, setIsModalOpen] = useState(false);
    
      const openModal = () => setIsModalOpen(true);
      const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Head>
        <title>Custom Fintech Solutions & Services | ProfuseCC</title>
        <meta name="description" content="Fintech Digital Technology Solutions for Banking & Financial Software" />
      </Head>

      <main className=" bg-gradient-to-b from-blue-50 to-white py-6 sm:px-6 ">
        {/* Hero Section with Image on Left */}
        <section className="container xl:max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image on Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1 h-full"
          >
            <div className="relative h-full w-full  overflow-hidden shadow-xl">
              <Image
                src="/assets/fintech-img.webp" // Replace with your actual image path
                alt="Fintech Solutions"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Text and Button on Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-[#FF0000] mb-4 text-center"
          >
            Finance Management Software Solutions
          </motion.h2>
            
            <div className="space-y-6">
                <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-2"
          >
            <p className="text-gray-700 mb-4">
              ProfuseCC helps you focus on offering next-gen services to your customer with our inventive telecom IT solution, which involves IoT, high-speed internet, VOP & much more. You can ensure superior customer experiences & operational efficiency with custom fintech solutions.
            </p>
            <p className="text-gray-700">
              Digital technology is evolving, and about every industry is leveraging its benefits to improve its processes, management, and customer services. Financial institutions are also rethinking their traditional delayed methods and slowly adopting the fintech solutions that define how they are providing their services.
            </p>
          </motion.div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openModal}
                className=  "bg-[#FF0000] text-white font-bold py-3 px-8  text-lg shadow-lg transition-colors"
              >
                Request Free Consultation
              </motion.button>
              <ConsultationFormModal isOpen={isModalOpen} onClose={closeModal} />
              
            </div>
          </motion.div>
        </section>

       
      </main>
    </>
  );
}