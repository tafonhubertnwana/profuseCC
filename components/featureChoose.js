'use client';

import { motion } from 'framer-motion';
import { FaDatabase, FaHeadset, FaUserFriends, FaBookOpen } from 'react-icons/fa';

const features =[
  {
    id: 1,
    icon: <FaDatabase size={40} className="text-black" />, 
    title: "Data Security",
    description: "Protect sensitive information with robust encryption, secure access controls, and proactive threat detection."
  },
  {
    id: 2,
    icon: <FaBookOpen size={40} className="text-black" />, 
    title: "IT Services",
    description: "Empowering businesses with cutting-edge IT solutions, from cloud computing to network infrastructure management."
  },
  {
    id: 3,
    icon: <FaHeadset size={40} className="text-black" />, 
    title: "Support",
    description: "Round-the-clock technical assistance to ensure seamless operations and quick resolution of IT challenges."
  },
  {
    id: 4,
    icon: <FaUserFriends size={40} className="text-black" />, 
    title: "People",
    description: "Building strong collaborations and fostering innovation through a team of skilled professionals."
  }
]


export default function FeaturesSection() {
  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="container xl:max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1 }}
          className="border-t-2 border-red-500 w-full mb-8"
        ></motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.id * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
