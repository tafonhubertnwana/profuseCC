'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TopTechSection() {
  return (
    <section className='container mx-auto '>

    <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12">
      {/* Left Side - Image and Overlay */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="relative w-full md:w-1/2 flex justify-center"
      >
        <div className="relative w-[90%] md:w-[80%] rounded-full overflow-hidden">
          <Image src="/assets/about3-.png" width={500} height={500} alt="Teamwork" className="rounded-full" />
        </div>
        <div className="absolute top-5 right-5 bg-white p-3 shadow-md rounded-md">
          <p className="text-lg font-bold">98%</p>
          <p className="text-sm text-gray-500">Business Goal</p>
        </div>
      </motion.div>
      
      {/* Right Side - Content */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 mt-8 md:mt-0"
      >
        <p className="text-orange-600 font-semibold uppercase">Who We Are</p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mt-2">
          Get Exclusive IT Solutions & Services With <span className="text-orange-600">ProfuseCC</span>
        </h2>
        <p className="text-gray-600 mt-4">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex items-start space-x-4">
            <div className="bg-orange-100 p-3 rounded-md">
              <Image src="/assets/about3-icon1.png" width={30} height={30} alt="Certified" />
            </div>
            <div>
              <h3 className="font-bold">Certified Company</h3>
              <p className="text-gray-600 text-sm">Lorem Ipsum is not simply random text. It has roots in classical Latin.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-orange-100 p-3 rounded-md">
              <Image src="/assets/about3-icon2.png" width={30} height={30} alt="Networking" />
            </div>
            <div>
              <h3 className="font-bold">Internet Networking</h3>
              <p className="text-gray-600 text-sm">Lorem Ipsum is not simply random text. It has roots in classical Latin.</p>
            </div>
          </div>
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-orange-600 text-white px-6 py-2 rounded-md flex items-center space-x-2"
        >
          <span>More About</span>
          <span>&rarr;</span>
        </motion.button>

        <div className="mt-6 flex items-center space-x-4">
          <Image src="/assets/person-3.jpg" width={40} height={40} className=" w-12 h-12 object-cover rounded-full" alt="Kevin Martin" />
          <div>
            <p className="font-bold">Kevin Martin</p>
            <p className="text-gray-500 text-sm">CEO & Founder</p>
          </div>
        </div>
      </motion.div>
    </div>
    </section>
  );
}
