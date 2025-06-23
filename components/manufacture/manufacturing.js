'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import ConsultationFormModal from "../consultingForm";
export default function ManufactureBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
      
        const openModal = () => setIsModalOpen(true);
        const closeModal = () => setIsModalOpen(false);
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 container xl:max-w-7xl mx-auto p-2">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Manufacturing IT Solutions</h1>
          <p className="text-xl mb-6">
            Leading Manufacturing Solution for Industrial IOT & Industry 4.0 Manufacturing Solutions
          </p>
          <button className="bg-[#FF0000] text-white px-6 py-3 rounded hover:bg-red-700 transition duration-300">
            Request Free Consultation
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 mt-10 lg:mt-0"
        >
          <Image
            src="/industry/manu-21.webp" // replace with actual image path
            alt="Manufacturing IT"
            width={600}
            height={400}
            className="rounded shadow-lg"
          />
        </motion.div>
      </section>

      {/* Description Section */}
      <section className="bg-black text-white py-12 px-6">
        <div className="container xl:max-w-7xl mx-auto p-2">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            IT Solutions For Manufacturing Industry
          </motion.h2>

          <motion.p
            className="mb-4 text-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            Our industrial IOT solutions & services help you focus on IoT, artificial intelligence, machine learning, etc by transporting your factory business into the future swiftly. It is easy to combat your production challenges and boost business growth with our manufacturing IT services.
          </motion.p>

          <motion.p
            className="text-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            viewport={{ once: true }}
          >
            Get the visibility advantage in your core factory operations and live your business life like the leaders of the domain. Rule your industrial kingdom with our cloud manufacturing industry solutions & services that give you the benefit of enhanced customer experience and improved efficiency to manage your business through cloud while exploring new opportunities in it.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
