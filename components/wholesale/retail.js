// pages/ecommerce-solutions.js
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useState } from 'react';
import ConsultationFormModal from "../consultingForm";

export default function EcommerceSolutions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Head>
        <title>Custom E-Commerce Solutions & Services | ProfuseCC</title>
        <meta name="description" content="Tailored e-commerce solutions including B2C & B2B platforms, online store development, and retail digital transformation." />
      </Head>

      <main className=" bg-black py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="container xl:max-w-7xl mx-auto p-2 py-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-1 h-64 md:h-full"
          >
            <div className="relative h-full w-full overflow-hidden shadow-xl rounded-lg">
              <Image
                src="/industry/retail.webp"
                alt="E-Commerce Solutions"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Text Content */}
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
                Scalable E-Commerce Solutions for B2C & B2B
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="py-4 space-y-6"
              >
                <p className="text-white">
                  At ProfuseCC, we build custom e-commerce platforms that cater to both B2C and B2B needs—empowering your brand with scalable solutions for online retail, payment integration, inventory, logistics, and customer engagement.
                </p>
                <p className="text-white">
                  Whether you're launching an online store or expanding a retail enterprise, our solutions integrate AI, IoT, and cloud management to improve operations, enhance user experience, and boost conversions across all channels.
                </p>
              </motion.div>
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

        {/* Cards Section */}
        <div className="container xl:max-w-7xl mx-auto p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-sm shadow-md"
            >
              <img src="/industry/whole-14.webp" alt="Retail Management" className="w-12 h-12 mb-4 filter grayscale brightness-75" />
              <h4 className="text-xl font-semibold text-[#FF0000] mb-2">Retail Management Systems</h4>
              <p className="text-gray-700">
                Streamline your store operations with POS, inventory tracking, and CRM tools all integrated into one centralized platform.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-sm shadow-md"
            >
              <img src="/industry/whole-10.webp" alt="B2C B2B E-commerce" className="w-12 h-12 mb-4 filter grayscale brightness-75" />
              <h4 className="text-xl font-semibold text-[#FF0000] mb-2">B2C & B2B E-Commerce</h4>
              <p className="text-gray-700">
                From user-centric shopping experiences to secure backend operations, we tailor platforms for both consumers and business buyers.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-sm shadow-md"
            >
              <img src="/industry/whole-15.webp" alt="Cloud E-Commerce" className="w-12 h-12 mb-4 filter grayscale brightness-75" />
              <h4 className="text-xl font-semibold text-[#FF0000] mb-2">Cloud-Based Online Stores</h4>
              <p className="text-gray-700">
                Launch scalable online stores with smart dashboards, real-time analytics, and seamless inventory control through cloud integration.
              </p>
            </motion.div>

          </div>
        </div>
      </main>
    </>
  );
}
