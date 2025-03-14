'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Mobile UI/UX Design',
    category: 'Design',
    image: '/assets/portfolio2-1.png',
  },
  {
    title: 'Cyber Security & Protect',
    category: 'Technology',
    image: '/assets/portfolio2-2.png',
  },
  {
    title: 'Website Development',
    category: 'IT Solution',
    image: '/assets/portfolio2-3.png',
  },
];

export default function ProjectSection() {
  return (
    <section className="bg-[#0c1c40] text-white py-16 px-6">
      <div className="container xl:max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-orange-400">IT Support For Business</p>
          <h2 className="text-3xl font-bold mt-2">Ensuring Your Success Trusted IT Services Source</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
  {services.map((service, index) => (
    <motion.div
    key={index}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="relative overflow-hidden shadow-lg pb-20" // Add padding-bottom
  >
    <Image src={service.image} alt={service.title} width={400} height={400} className="w-full object-cover" />
    <div className="absolute inset-x-0  bottom-10 bg-orange-500 bg-opacity-90 p-4 w-3/4 mx-auto ">
      <p className="text-white text-sm font-semibold">{service.category}</p>
      <h3 className="text-xl font-bold mt-2 text-white">{service.title}</h3>
    </div>
  </motion.div>
  ))}
</div>
      </div>
    </section>
  );
}