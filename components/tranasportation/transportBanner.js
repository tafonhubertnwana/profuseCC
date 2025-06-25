// pages/logistics-technology-solutions.js
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import ConsultationFormModal from "../consultingForm";

const LogisticsBanner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
      
        const openModal = () => setIsModalOpen(true);
        const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-black ">
      <Head>
        <title>Logistics Technology Solutions | ProfuseCC</title>
        <meta name="description" content="High-end transportation and logistics technology solutions for your business" />
      </Head>
       {/* Main Content */}
      <div className="container xl:max-w-7xl mx-auto p-2">
        {/* High-End Solutions Section */}
        <motion.section 
          className="mb-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-red-500 my-6"
            variants={itemVariants}
          >
            High-End Transportation And Logistics Technology Solutions
          </motion.h2>
          <motion.p 
            className="text-lg text-white mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Solutions for the automotive industry on the web and on mobile devices let you cut operational costs while ten-folding management effectiveness. For your car and IT solution for transportation business, ProfuseCC is the greatest technological solution supplier on the market, offering you affordable web and mobile development services. With the help of our logistical and transportation strategies, see the significant shifts.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {['Web Solutions', 'Mobile Apps', 'Cost Reduction'].map((feature) => (
              <motion.div 
                key={feature}
                whileHover={{ y: -10 }}
                className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-800"
              >
                <h3 className="text-xl font-semibold mb-3 text-red-500">{feature}</h3>
                <p className="text-gray-400">Delivering scalable and secure platforms that optimize your transport operations in real time.</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Supply Chain Visibility Section */}
        <motion.section 
          className="bg-white rounded-sm p-8 md:p- mb-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 bg-white">
              <h2 className="text-3xl font-bold text-[#FF0000] mb-6">
                Supply Chain Visibility: Real-Time Supply Chain
              </h2>
              <p className="text-lg  mb-6 leading-relaxed">
                You may get practical web and mobile solutions for your transportation and automotive business at ProfuseCC, a top provider of technological solutions. Businesses must implement innovative strategies to manage and track both their internal and external operations given the expansion of the auto industry and the use of technology to high-perform in their industrial vertical.
              </p>
              <p className="text-lg  mb-8 leading-relaxed">
                Your search is over thanks to our web, mobile, and software solutions for supply chain visibility in the transportation sector.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FF0000] text-white font-bold py-3 px-8  text-lg shadow-md"
              >
                Learn More
              </motion.button>
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative  rounded-sm shadow-lg"
              >
                <Image
                  src="/industry/log-32.webp"
                  alt="Real-time supply chain visualization"
                  width={600}
                  height={400}
                  className=""
                />
                <p className="absolute bottom-3 right-4 text-xs text-white bg-black bg-opacity-80 px-2 py-1 rounded shadow-sm">
                  Real-time freight tracking and inventory dashboards
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
     

     
    </div>
  );
};

export default LogisticsBanner;
