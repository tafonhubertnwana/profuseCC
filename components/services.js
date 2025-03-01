'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  { title: 'AWS Cloud Service', icon: '/assets/service-1.png', delay: 0.2 },
  { title: 'Web Development', icon: '/assets/service-2.png', delay: 0.4 },
  { title: 'Data & AI', icon: '/assets/service-4.png', delay: 0.6 },
  { title: 'SEO & Security', icon: '/assets/service-3.png', delay: 0.8 },
];

export default function Services() {
  return (
    <div className="bg-gray-900 text-white py-16 px-4 my-10">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="justify-center w-1/2 mx-auto"
        >
          <p>SERVICE WE PROVIDE</p>
          <h2 className='text-3xl font-bold mb-4'>
            All Professional We’re Offering Best & IT Solutions & <span className="text-blue-500">Services</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: service.delay }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-6 hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
            >
              {/* Icon Section - Left Side */}
              <div className="flex-shrink-0">
               <Image 
  src={service.icon} 
  alt={service.title} 
  width={75} 
  height={75}
  className={service.title === 'Data & AI' ? 'filter-gray' : ''}
/>

              </div>
              
              {/* Content Section - Right Side */}
              <div className="flex flex-col space-y-2 text-left">
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Proin Pulvinar Eu Sem Eu Vehicula and, Integer Urna Libero, Semper mes.
                </p>
                
                {/* Call-to-Action Button */}
                <button className="mt-2 text-blue-500 font-semibold flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
                  READ MORE <span className="text-xl">&#187;</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
