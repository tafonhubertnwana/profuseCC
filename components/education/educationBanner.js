"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import ConsultationFormModal from "../consultingForm";

export default function EducationBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
      
        const openModal = () => setIsModalOpen(true);
        const closeModal = () => setIsModalOpen(false);
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="container xl:max-w-7xl mx-auto p-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-black">
              Education Industry
            </h1>
            <p className="text-gray-700 mb-6 text-lg">
              Your website is not just another thing to have, rather it is a
              powerful tool to generate leads and endorse conversions and we
              just know the right way to do that. Inspire need in your users
              with our awe-inspiring web designs, allowing you to stay top of
              the domain.
            </p>
            </motion.div>
              <div>
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
         
        

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full"
          >
            <Image
              src="/assets/student.webp" // Replace with your image path
              alt="Education industry"
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
              Innovative Education Solution For Education Industry
            </h2>
            <p className="text-white mb-4 text-lg">
              With these technologies, the education industry too thrives to become more advanced and productive, shaping the future better. At CIS, we help you discover those opportunities that come with the advancement of technology with our reliable e learning development, ensuring interactivity and knowledge retention. Furthermore, we extend you the benefits that tail along the digitalization of industry. With us you get to leverage the transformative powers of tools that help you stay ahead of the curve.
            </p>
            <p className="text-white text-lg">
              Find expert developers and designer team at CIS with hands on experience in creating endless e learning solutions, allowing you to explore new grounds in the industry. With our elearning mobile, web, and software solutions, we give you the boost needed to go global, opening up untapped markets. Not only that, we help you adapt to the technologies such as IoT, AI, AR/VR that are adding up to the advancement of industry while augmenting a learner&apos;s experience. In simple words, we are tech-enablers. Your business needs to get streamlined with modern solutions. We help you get hold of the solution that brings ease of management and execution while keeping your core audience engaged with our web and m learning solutions.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
