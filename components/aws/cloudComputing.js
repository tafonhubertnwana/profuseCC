// pages/Medical-solutions.js
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
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Image on Left - Now first on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-1 h-64 md:h-full" // Added fixed height on mobile
          >
            <div className="relative h-full w-full overflow-hidden shadow-xl rounded-lg">
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
                Cloud application developments
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
                   With our submersible experience in the cloud computing niche, we deliver a diverse range of cloud integration services, solutions, and cloud computing services to help the business flourish in the current market domain.

At ProfuseCC, we craft the most innovative cloud software solutions that are scalable and allow businesses to enjoy their perks. We infuse solutions to address distinctive infrastructure, database, computation, and storage requirements. Our pool of cloud software solutions will help you to escalate to a higher altitude. It will help simplify sharing, storing, accessing, and protecting data from any third-party intervention.
                  </p>
                  <p className="text-white">
                   We are a reputed and comprehended Cloud computing solutions company that has stretched its global horizons. Known for delivering professional cloud computing solutions, we help businesses to evolve at a monumental pace. Our result-driven cloud application development helps shape any organization's workflow and helps them establish the systems for locating the data being communicated and retrieved for connected channels.

With our services, organizations are not required to invest in expensive hardware as our cloud computing services can lend the ability to operate and easily process information.
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