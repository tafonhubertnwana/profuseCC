'use client';

import { motion } from 'framer-motion';

const industries = [
  { name: 'Retail & Wholesale', icon: '🛒' },
  { name: 'Industrial Manufacturing', icon: '🔧' },
  { name: 'Banking & Finance', icon: '💰' },
  { name: 'Healthcare', icon: '❤️' },
  { name: 'Transportation & Logistics', icon: '🚚' },
  { name: 'Automotive', icon: '⚙️' },
  { name: 'Metals & Mining', icon: '⛏️' },
  { name: 'Chemicals', icon: '🧪' },
  { name: 'Pharmaceuticals & Life Science', icon: '💊' },
];

export default function BusinessDomains() {
  return (
    <div className="bg-blue-700 text-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">WE SUPPORT YOUR BUSINESS DOMAIN</h2>
      <p className="max-w-2xl mx-auto mb-8 text-lg">
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
            className="bg-blue-600 p-4 rounded-lg flex items-center gap-4 shadow-md"
          >
            <span className="text-2xl">{industry.icon}</span>
            <span className="font-semibold">{industry.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
