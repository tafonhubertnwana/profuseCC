'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  { title: 'AWS Cloud Service', icon: '/assets/service-1.png', delay: 0.2, detail: 'Empower your business with our cutting-edge Cloud and DevOps solutions, driving efficiency & innovation for sustainable growth.' },
  { title: 'Software Development', icon: '/assets/service-2.png', delay: 0.4, detail: 'We help our clients solve overarching business problems & elevate their operations through spot-on Web & App solutions.' },
  { title: 'Data & AI', icon: '/assets/service-4.png', delay: 0.6, detail: 'Empower your business with our cutting-edge Cloud and DevOps solutions, driving efficiency & innovation for sustainable growth.' },
  { title: 'SEO & Security', icon: '/assets/service-3.png', delay: 0.8, detail: 'Empower your business with our cutting-edge Cloud and DevOps solutions, driving efficiency & innovation for sustainable growth.'},
];

export default function Services() {
  return (
    <div 
      className="relative bg-gray-900/50 text-white py-16 px-4 my-10 overflow-hidden"
      style={{ backgroundImage: "url('/assets/service-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay with increased opacity */}
      <div 
        className="absolute inset-0 bg-black/60" // Adjust the opacity by changing the value (e.g., 0.6 for 60% opacity)
        aria-hidden="true"
      ></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="justify-center w-1/2 mx-auto"
        >
          <p>SERVICE WE PROVIDE</p>
          <h2 className='text-3xl font-bold mb-4'>
            All Professional We’re Offering Best & IT Solutions & <span className="text-orange-500">Services</span>
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
                 {service.detail}
                </p>
                
                {/* Call-to-Action Button */}
                <button className="mt-2 text-orange-500 font-semibold flex items-center gap-2 hover:text-orange-400 transition-colors duration-300">
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