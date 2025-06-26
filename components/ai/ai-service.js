'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Expertise() {
  const [data, setData] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetch('utils/ai-data.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center py-12 bg-blue-50"
      >
        <h1 className="text-4xl font-bold text-blue-900">{data.header.title}</h1>
        <p className="mt-4 text-blue-700">{data.header.description}</p>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-12 px-4"
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Industries We Serve</h2>
        <ul className="space-y-4">
          {data.industries.map((industry, index) => (
            <li
              key={index}
              className={`p-4 rounded-lg cursor-pointer ${activeIndex === index ? 'bg-blue-100' : 'bg-white'}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="text-blue-700">{industry}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-12 px-4 bg-blue-50"
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Healthcare</h2>
        <ul className="space-y-4">
          {data.healthcareServices.map((service, index) => (
            <li
              key={index}
              className={`p-4 rounded-lg cursor-pointer ${activeIndex === index ? 'bg-blue-100' : 'bg-white'}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="text-blue-700">{service}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}