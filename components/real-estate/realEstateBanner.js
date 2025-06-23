"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from 'react';
import ConsultationFormModal from "../consultingForm";

export default function RealEstateBanner() {
   const [isModalOpen, setIsModalOpen] = useState(false);
      
        const openModal = () => setIsModalOpen(true);
        const closeModal = () => setIsModalOpen(false);
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="container xl:max-w-7xl mx-auto p-2 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-black">
             Real Estate App Development Company
            </h1>
            <p className="text-gray-700 mb-6 text-lg">
              Well, we have left those days behind, where one needs to ask different brokers and are required traveling from one place to another in search of properties.


            </p>
           <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openModal}
                className=  "bg-[#FF0000] text-white font-bold py-3 px-8  text-lg shadow-lg transition-colors"
              >
                Request Free Consultation
              </motion.button>
              <ConsultationFormModal isOpen={isModalOpen} onClose={closeModal} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full"
          >
            <Image
              src="/industry/real-22.jpg" // Replace with your image path
              alt="real estate industry"
              width={600}
              height={400}
              className="rounded-sm object-cover w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-black py-12">
        <div className="container xl:max-w-7xl mx-auto p-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Real Estate App Development Company
            </h2>
            <p className="text-white mb-4 text-lg">
              Well, we have left those days behind, where one needs to ask different brokers and are required to travel from one place to another in search of properties. Nowadays, in the current digital times, people are switching to smartphones and websites for exploring the properties they want to look for. Our real estate app developer is well equipped when it comes to Real Estate web development. We make sure to infuse just the right UI/UX fundamentals with very friendly navigation standards. At ProfuseCC, we develop Real Estate Development Solutions that are highly helpful for setting your businesses ahead with a competitive edge. We design prototypes and other solutions that are highly beneficial in gaining user insights. ProfuseCC proffers impeccable real estate app development via which you can easily connect your businesses to the users. We visualize all the ventures in the right way and make sure that your company serves the clients in just the correct way.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
