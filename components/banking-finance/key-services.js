// app/key-services/page.tsx
"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

const KeyServices = () => {
  const services = [
    {
      title: "Payment Gateways",
      description: "Payment gateway integration is quick, safe, and guarantees a smooth checkout.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v12h16V6H4zm4 3h8v2H8V9zm0 3h5v2H8v-2z" />
        </svg>
      )
    },
    {
      title: "Mobile Banking",
      description: "The most effective mobile banking options are safe, dependable, and long-lasting.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h8V4H8zm4 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
        </svg>
      )
    },
    {
      title: "Simple Integration",
      description: "Integrate financial technology into your current software to receive customized, risk-free solutions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 5h5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-5v2h5a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-5v2zM4 9l4-4v3h9v2H8v3L4 9z" />
        </svg>
      )
    },
    {
      title: "Omnichannel Experience",
      description: "All significant international platforms readily link with our financial solutions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h18zm0 2H3v8h18v-8zM7 5a1 1 0 0 1 1 1v1h8V6a1 1 0 0 1 2 0v1h2a1 1 0 0 1 1 1H2a1 1 0 0 1 1-1h2V6a1 1 0 0 1 1-1z" />
        </svg>
      )
    },
    {
      title: "Analytics & Reporting",
      description: "Using trustworthy, illuminating analytics and reporting to assist in planning new business processes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4 8h2v4H8v-4zm4-6h2v10h-2V7zm4 3h2v7h-2v-7z" />
        </svg>
      )
    },
    {
      title: "Security & Compliance",
      description: "The highest security and compliance standards support the financial solutions that help you succeed.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1l9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4zm0 2.18L5 6.3v4.92C5 15.54 8.25 20 12 21c3.75-1 7-5.46 7-9.78V6.3l-7-3.12zM12 7a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1zm0 6a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1z" />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <Head>
        <title>Key Services | Financial Solutions</title>
        <meta name="description" content="Rethink how businesses buy, pay, and invest with our comprehensive financial services" />
      </Head>

      <div className=" bgs-white 0 py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-left mb-16"
        >
          <span className="inline-block bg-blue-100 text-[#FF0000] text-sm font-semibold px-3 py-1  mb-4">
            Our Services
          </span>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl bg-clip-text text-transparent bg-[#FF0000]">
            Comprehensive Financial Solutions
          </h1>
          <p className="mt-5 mx-auto text-xl text-gray-600">
            Empower your business with our suite of financial services designed for the modern economy.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container xl:max-w-7xl p-4 mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-sm shadow-lg overflow-hidden p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col h-full">
                <div className="flex-shrink-0 bg-[#FF0000] rounded-xl w-12 h-12 flex items-center justify-center text-white mb-4">
                  <div className="w-6 h-6">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
                <div className="mt-4">
                  <button className="text-[#FF0000] font-medium flex items-center transition-colors duration-200">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1">
                      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-7xl mx-auto mt-16  bg-black p-8 text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Ready to transform your financial operations?</h2>
              <p className="opacity-90">Get started with our solutions today.</p>
            </div>
            <Link href="/contact" passHref>
              <button className="bg-white text-[#FF0000] hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                Contact Our Team
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default KeyServices;