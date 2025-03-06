'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CustomSoftwareDevelopment() {
  return (
    <section className='max-w-6xl mx-auto '>
      <div className="flex flex-col lg:flex-row items-center justify-between px-10 py-16 bg-white">

        {/* Text Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-gray-900">
            Custom Software <br /> Development
          </h1>
          <p className="mt-4 text-gray-600">
            We transform bold business and e-commerce ideas into exceptional digital products.
            Our more than 10 years as a successful custom software development company allows us
            to bring insightful design experience into the full-stack enterprise application development
            that enhances your competitive advantage and customer relationships.
          </p>
          <button className="mt-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:opacity-90">
            BOOK A FREE CONSULTATION
          </button>
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
          src="/assets/web-development.webp"
          alt="Software Development"
          width={500}
          height={500}
          className=""
        />
      </motion.div>
    </div>
      </div>
    </section>
  );
}
