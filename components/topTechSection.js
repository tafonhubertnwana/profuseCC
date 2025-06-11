'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function TopTechSection() {
  return (
    <section className='mx-auto max-w-6xl xl:container '>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 md:px-20 py-12">
    {/* Left Side - Image and Overlay */}
    <motion.div 
      initial={{ opacity: 0, x: -50 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.8 }}
      className="relative flex justify-center"
    >
      <div className="relative w-[90%] md:w-[80%] rounded-full overflow-hidden">
        <Image src="/assets/about3-.png" width={500} height={500} alt="Teamwork" className="w-full h-auto" />
      </div>
      {/* <div className="absolute top-5 right-5 bg-white p-3 shadow-md rounded-md">
        <p className="text-lg font-bold">98%</p>
        <p className="text-sm text-gray-500">Business Goal</p>
      </div> */}
    </motion.div>
    
    {/* Right Side - Content */}
    <motion.div 
  initial={{ opacity: 0, x: 50 }} 
  animate={{ opacity: 1, x: 0 }} 
  transition={{ duration: 0.8 }}
  className="mt-8 md:mt-0 mx-2"
>
  <p className="text-[#FF0000] font-semibold uppercase">Who We Are</p>
  <h2 className="text-2xl md:text-4xl font-bold leading-tight mt-2">
    AI-Powered Cloud Solutions From <span className="text-[#FF0000]">ProfuseCC</span>
  </h2>
  <p className="text-gray-600 mt-4">
    ProfuseCC is an innovative AI cloud software startup revolutionizing how businesses leverage artificial intelligence. 
    We combine cutting-edge machine learning with scalable cloud infrastructure to deliver intelligent solutions 
    that grow with your business.
  </p>
  <p className="text-gray-600 mt-4">
    As a dynamic startup, we're agile enough to provide customized AI solutions while maintaining the robust 
    architecture expected from enterprise cloud platforms. Our passion lies in transforming complex AI technologies 
    into accessible, business-ready tools.
  </p>

  <div className="mt-6 space-y-4">
    <div className="flex items-start space-x-4">
      <div className="bg-red-100 p-3 rounded-md">
        <Image src="/assets/about3-icon1.png" width={30} height={30} alt="AI Solutions" />
      </div>
      <div>
        <h3 className="font-bold">AI Cloud Platform</h3>
        <p className="text-gray-600 text-sm">
          Our proprietary AI engine delivers predictive analytics and intelligent automation 
          through an intuitive cloud interface.
        </p>
      </div>
    </div>
    <div className="flex items-start space-x-4">
      <div className="bg-red-100 p-3 rounded-md">
        <Image src="/assets/about3-icon2.png" width={30} height={30} alt="Startup Agility" />
      </div>
      <div>
        <h3 className="font-bold">Startup Innovation</h3>
        <p className="text-gray-600 text-sm">
          As a growing startup, we bring fresh perspectives and rapid iteration to solve 
          your most pressing challenges.
        </p>
      </div>
    </div>
  </div>

  <motion.button 
    whileHover={{ scale: 1.05 }} 
    whileTap={{ scale: 0.95 }}
    className="mt-6 bg-[#FF0000] text-white px-6 py-2 rounded-md flex items-center space-x-2"
  >
    <Link href='/aboutUs'>
      <span>Our AI Vision</span>
      <span>&rarr;</span>
    </Link>
  </motion.button>

  <div className="mt-6 flex items-center space-x-4">
    <Image src="/assets/person-3.jpg" width={40} height={40} className="w-12 h-12 object-cover rounded-full" alt="Isaac Tabeh" />
    <div>
      <p className="font-bold">Isaac Tabeh</p>
      <p className="text-gray-500 text-sm">CEO & Founder</p>
      <p className="text-gray-500 text-xs mt-1">
        "We are building the AI cloud platform solutions for the next generation."
      </p>
    </div>
  </div>
</motion.div>
  </div>
</section>
  );
}
