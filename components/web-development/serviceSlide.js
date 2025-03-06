'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

const services = [
  {
    title: 'Cloud-based development',
    description:
      'This is a popular service methodology with our hybrid and remote workforce-based clients. All of the development capabilities are hosted in the cloud with supportive software for coding, design integration, and more.',
    icon: '/assets/web-dev-1.png',
  },
  {
    title: 'Agile development',
    description:
      'We break down your project into smaller digestible pieces that ensure rapid development. This clean feedback loop helps identify any defects or questions that need addressing before going to market.',
    icon: '/assets/web-dev-1.png',
  },
  {
    title: 'DevOps',
    description:
      'Many of our business clients require custom website development services that meet the demands of both their IT and development teams. This approach allows us to bridge these teams and ensures a smooth deployment with the support already in place.',
    icon: '/assets/web-dev-1.png',
  },
  {
    title: 'DevOps',
    description:
      'Many of our business clients require custom website development services that meet the demands of both their IT and development teams. This approach allows us to bridge these teams and ensures a smooth deployment with the support already in place.',
    icon: '/assets/web-dev-1.png',
  },
  {
    title: 'DevOps',
    description:
      'Many of our business clients require custom website development services that meet the demands of both their IT and development teams. This approach allows us to bridge these teams and ensures a smooth deployment with the support already in place.',
    icon: '/assets/web-dev-1.png',
  },

  {
    title: 'DevOps',
    description:
      'Many of our business clients require custom website development services that meet the demands of both their IT and development teams. This approach allows us to bridge these teams and ensures a smooth deployment with the support already in place.',
    icon: '/assets/web-dev-1.png',
  },
];

export default function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  return (
    <section className='mx-auto max-w-6xl '>

      <div className="  ">
        <div className="text-center mb-6 ">
          <h2 className="text-2xl font-bold">Proven to Work Product Development Methods</h2>
          <p className="text-gray-600 mt-2">We are a versatile custom software development firm willing to adopt any methodology used in the industry. In those rare cases where one of these systems does not rise to the occasion of your project, we will communicate a new process aligned with your brand and project goals.</p>
        </div>
        <div className="relative grid grid-cols-3 gap-6 w-full px-20 my-10 ">
          {services.map((service, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: service.delay }}
            whileHover={{ scale: 1.05 }}
              className='p-6 rounded-lg shadow-lg bg-white border '
            >
              <div className="flex items-center space-x-4">
                <Image 
                                  src={service.icon} 
                                  alt={service.title} 
                                  width={75} 
                                  height={75}
                                
                                />
              </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
        {/* <div className="flex space-x-4 mt-6">
          <button
            onClick={prevSlide}
            className="p-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-full shadow-md"
          >
            <FiArrowLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-full shadow-md"
          >
            <FiArrowRight size={20} />
          </button>
        </div> */}
      </div>
    </section>
  );
}