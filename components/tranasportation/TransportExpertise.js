'use client';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';

const TransportExpertise = () => {
  const leadItems = [
    {
      id: 1,
      title: "Custom Software Development",
      description: "Logistic solutions go beyond shipping, warehousing, or packing. They are about managing and optimizing all the processes. Our custom software solutions help industries streamline their business models.",
      image: "/industry/log-23.webp",
      alt: "Software Development Services"
    },
    {
      id: 2,
      title: "Cloud Solutions",
      description: "These solutions are management solutions and comprise logistics technology solutions. Cloud computing is a collaborative solution that operates on a flexible usage-based model. This allows for scalability to account for market and customer conditions.",
      image: "/industry/log-24.webp",
      alt: "Software Development Services"
    },
    {
      id: 3,
      title: "Mobile Application Development",
      description: "Logistics solutions are crucial to the growth of the economy. In response to the increasing demands of customers in this industry, logistics service providers created a strategy for enterprise mobility that allows them to remain ahead of their competition. Our expert team fixes the service level and adds flexibility to build a sustainable supply with mobile application development.",
      image: "/industry/log-25.webp",
      alt: "Software Development Services"
    },
    {
      id: 4,
      title: "RFID Solutions",
      description: "RFID adoption in the supply chain has been a significant success for the logistics industry. The logistics sector, which involves trade between customers and suppliers, can benefit significantly from RFID tagging. CIS is a specialist in RFID and can help you configure a solution, regardless of the type or size of your business. We have years of experience in delivering complex solutions to a wide range of industries. Our comprehensive solution is implemented with ease.",
      image: "/industry/log-26.webp",
      alt: "Software Development Services"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
        <title>We Lead In | Your Company Name</title>
        <meta name="description" content="Discover our leading services in security operations, cyber security evaluation, ethical hacking, and employee training." />
      </Head>

      <div className="container mx-auto px-4 py-12 xl:max-w-7xl p-2">
        <motion.h2 
          className="text-3xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Expertise In Logistics Solutions
        </motion.h2>
        <motion.p 
          className="text-md font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
         
         Our end-to-end solutions will give you a better understanding of events and resources. They also enhance your business's responsiveness.
      
        </motion.p>

        <motion.div 
          className="mt-16 space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {leadItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              variants={itemVariants}
            >
              <div className="w-full md:w-1/2">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={680}
                    height={380}
                    className="rounded-sm shadow-sm object-cover f"
                    priority={index === 0}
                  />
                </motion.div>
              </div>
              
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-md text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default TransportExpertise;