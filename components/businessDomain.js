'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const industries = [
  { name: 'Retail & Wholesale', icon: '/assets/cart-shopping-fast.png' },
  { name: 'Industrial Manufacturing', icon: '/assets/air-pollution.png' },
  { name: 'Banking & Finance', icon: '/assets/growth-chart-invest.png' },
  { name: 'Healthcare', icon: '/assets/hands-brain.png' },
  { name: 'Transportation & Logistics', icon: '/assets/shipping-fast.png' },
  { name: 'Automotive', icon: '/assets/cart-shopping-fast.png' },
  { name: 'Metals & Mining', icon: '/assets/picaxe-minning.png' },
  { name: 'Chemicals', icon: '/assets/test.png' },
  { name: 'Pharmaceuticals & Life Science', icon: '/assets/capsules.png' },
];

export default function BusinessDomains() {
  return (
    <section 
      className="bg-red-700 text-white py-16 px-6"
      aria-labelledby="business-domains-heading"
    >
      <div className="container xl:max-w-6xl w-full mx-auto">
        <header className="text-left">
          <h2 
            id="business-domains-heading"
            className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4"
          >
            WE SUPPORT YOUR BUSINESS DOMAIN
          </h2>
          <p className="sm:max-w-xl lg:max-w-2xl mb-8 text-base sm:text-lg">
            With more than 8 years of collaboration with different industries, we possess deep
            expertise in the challenges each industry faces and know how to cope with them using innovations.
            Here are the industries we serve:
          </p>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 p-4 rounded-lg flex items-center gap-4 shadow-md"
            >
              <span className="text-2xl">
                <Image 
                  src={industry.icon} 
                  alt="" 
                  width={40} 
                  height={40} 
                  aria-hidden="true"
                />
              </span>
              <span className="font-semibold">{industry.name}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}