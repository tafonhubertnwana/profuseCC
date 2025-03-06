'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '10K+', label: 'HAPPY CUSTOMERS' },
  { value: '20K+', label: 'WORKS COMPLETED' },
  { value: '99', label: 'EXPERT MEMBERS' },
  { value: '100%', label: 'SATISFACTION RATES' }
];

export default function StatsSection() {
  return (
    <div className=" my-5 bg-gradient-to-b from-blue-900 to-blue-800 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white px-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-center"
          >
            <span className="text-4xl font-bold">{stat.value}</span>
            <span className="text-sm mt-2 uppercase tracking-wide">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
