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
  { name: 'Chemicals', icon: '/assets/flask.png' },
  { name: 'Pharmaceuticals & Life Science', icon: '/assets/capsules.png' },
];

export default function BusinessDomains() {
  return (
    <div className="bg-orange-700 text-white py-16 px-6 text-center">
     <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
  WE SUPPORT YOUR BUSINESS DOMAIN
</h2>
<p className="max-w-full sm:max-w-xl lg:max-w-2xl mx-auto mb-8 text-base sm:text-lg">
  With more than 8 years of collaboration with different industries, we possess deep
  expertise in the challenges each industry faces and know how to cope with them using innovations.
  Here are the industries we serve:
</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-600 p-4 rounded-lg flex items-center gap-4 shadow-md"
          >
            <span className="text-2xl ">
              <Image src={industry.icon} alt="logo"  width={40} height={40} />
            </span>
            <span className="font-semibold">{industry.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
