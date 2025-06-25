// pages/Medical-solutions.js
'use client';
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useState } from 'react';
import ConsultationFormModal from "../consultingForm";

export default function CloudComputing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
    
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <>
      <Head>
        <title>Custom cloud computing Solutions & Services | ProfuseCC</title>
        <meta name="description" content="cloud computing Digital Technology Solutions for Banking & Financial Software" />
      </Head>

      <main className=" bg-black py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Image on Left */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-12">
  {/* Image Section */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="h-64 sm:h-80 md:h-96 lg:h-full"
  >
    <div className="relative h-full w-full overflow-hidden shadow-xl rounded-xl">
      <Image
        src="/assets/cloud.webp"
        alt="Medical Solutions"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  </motion.div>

  {/* Text and CTA Section */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="flex flex-col justify-between h-full"
  >
    <div>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FF0000] mb-6 text-center lg:text-left"
      >
        Cloud Application Developments
      </motion.h2>

      <div className="space-y-6 text-sm sm:text-base text-white leading-relaxed">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          With our submersible experience in the cloud computing niche, we deliver a diverse range of cloud integration services and solutions to help businesses flourish in the current market domain.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          At ProfuseCC, we craft the most innovative cloud software solutions that are scalable and tailored to address distinctive infrastructure, database, computation, and storage requirements.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Known for delivering professional cloud computing solutions globally, our result-driven cloud application development reshapes organizational workflows without the need for expensive hardware.
        </motion.p>
      </div>
    </div>

    <div className="mt-8 text-center lg:text-left">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={openModal}
        className="bg-[#FF0000] text-white font-semibold py-3 px-6 sm:px-8 text-base sm:text-lg rounded shadow-lg transition-all duration-300"
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