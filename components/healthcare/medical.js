// pages/Medical-solutions.js
'use client';
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useState } from 'react';
import ConsultationFormModal from "../consultingForm";

export default function Medical() {
  const [isModalOpen, setIsModalOpen] = useState(false);
    
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <>
      <Head>
        <title>Custom Medical Solutions & Services | ProfuseCC</title>
        <meta name="description" content="Medical Digital Technology Solutions for Banking & Financial Software" />
      </Head>

      <main className=" bg-black py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Image on Left */}
        <section className="container xl:max-w-7xl mx-auto p-2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Image on Left - Now first on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-1 h-64 md:h-full" // Added fixed height on mobile
          >
            <div className="relative h-full w-full overflow-hidden shadow-xl rounded-sm">
              <Image
                src="/industry/medical.jpeg"
                alt="Medical Solutions"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Text and Button on Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-2 flex flex-col justify-between"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-[#FF0000] mb-6 text-center md:text-left"
              >
                Healthcare IT Solutions
              </motion.h2>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="py-4"
                >
                  <p className="text-white mb-4">
                    Health Information Technology or Health IT is evolving at a high pace and Mobile Apps are revolutionizing the entire industry to provide high end patient experience and business enterprise management systems. Abridging the gap between you and technology, we help you translate your dreams into technology to fight your challenges and cut throat competition.
                  </p>
                  <p className="text-white">
                    Our Medical Software Development Services allows you to amp your infrastructural abilities and provide you healthcare application development solutions such as recording, analyzing and sharing patient data. Providing high-end Healthcare software and mobile health solutions we provide you smart device technologies and enterprise management solutions that helps you achieve health equity with the help of healthcare app developers. Inclusion of high-end technology such as AI, ML, and IoT we thus make sure no patients stand up and attend even when help is not physically available to monitor. Quality and scalability are rendered at CIS with the help of our in-depth knowledge and experience of our expert healthcare app developers.
                  </p>
                </motion.div>
              </div>
            </div>
            
            <div className="text-center md:text-left mt-6 md:mt-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openModal}
                className="bg-[#FF0000] text-white font-bold py-3 px-8 text-lg shadow-lg transition-colors"
              >
                Request Free Consultation
              </motion.button>
            </div>
            <ConsultationFormModal isOpen={isModalOpen} onClose={closeModal} />
          </motion.div>
        </section>
      </main>
    </>
  );
}