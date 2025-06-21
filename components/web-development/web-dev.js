'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import { useState } from 'react';
import ConsultationFormModal from '../consultingForm';



export default function CustomSoftwareDevelopment() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  return (
    <>
    
       <section className='container xl:max-w-6xl mx-auto '>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between px-10 py-16 bg-white">

        {/* Text Content */}
        <div className='max-w-xl'>
          <h1 className="text-4xl font-bold text-gray-900">
            Custom Software <br /> Development
          </h1>
          <p className="mt-4 text-gray-600">
            We transform bold business and e-commerce ideas into exceptional digital products.
            Our more than 10 years as a successful custom software development company allows us
            to bring insightful design experience into the full-stack enterprise application development
            that enhances your competitive advantage and customer relationships.
          </p>
          <div>

            <button className="mt-6 bg-[#FF0000]  text-white font-semibold px-6 py-3  shadow-lg hover:opacity-90" onClick={openModal} >
              BOOK A FREE CONSULTATION
            </button>
            <ConsultationFormModal isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>

        {/* Image with Highlights */}
        <div className="relative mt-10 lg:mt-0">
      <motion.div
        animate={{
          y: [0, -10, 0], // Moves the image up and down
        }}
        transition={{
          duration: 2, // Duration of one full animation cycle
          repeat: Infinity, // Repeat the animation indefinitely
          ease: "easeInOut", // Smooth easing
        }}
      >
        <Image
          src="/assets/web-development.png"
          alt="Software Development"
          width={500}
          height={500}
          className=""
        />
      </motion.div>
    </div>
      </div>
    </section>
        
    
    </>
   
  );
}
