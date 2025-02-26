'use client';

import { motion } from 'framer-motion';
import { FaLaptopCode, FaPencilRuler, FaBullhorn, FaCode, FaRobot, FaLightbulb } from 'react-icons/fa';

const services = [
  { title: 'Web Design', icon: <FaLaptopCode />, delay: 0.2 },
  { title: 'Motion Design', icon: <FaPencilRuler />, delay: 0.4 },
  { title: 'Digital Marketing', icon: <FaBullhorn />, delay: 0.6 },
  { title: 'Web Development', icon: <FaCode />, delay: 0.8 },
  { title: 'App Development', icon: <FaRobot />, delay: 1.0 },
  { title: 'Creative Solution', icon: <FaLightbulb />, delay: 1.2 }
];

export default function Services() {
  return (
    <div className="bg-gray-900 text-white py-16 px-4 my-10">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-4 uppercase"
        >
          All Professional We’re Offering Best & IT Solutions & <span className="text-blue-500">Services</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: service.delay }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-start hover:bg-gray-700 cursor-pointer"
            >
              <div className="text-4xl mb-4 text-blue-500">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">Proin Pulvinar Eu Sem Eu Vehicula and, Integer Urna Libero, Semper mes.</p>
              <button className="mt-4 text-blue-500 font-semibold flex items-center gap-2">
                READ MORE <span>&#187;</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
