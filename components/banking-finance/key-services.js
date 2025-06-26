'use client';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';

const KeyServices = () => {
  const leadItems = [
    {
      id: 1,
      title: "Loan Management Solutions",
      description: "Our Fintech solutions company offers a range of financial institutions and specialized legal loan management solutions. You can screen, manage, track, and keep an eye on the performance of your loan portfolio using the adaptable features of our loan management software, along with numerous other crucial duties. We've integrated BI into our loan management software to offer comprehensive analytical capabilities, reports, and performance tracking.",
      image: "/industry/fin-23.jpg",
      alt: "Software Development Services"
    },
    {
      id: 2,
      title: "Software Marketplace Connection",
      description: "We develop marketplace lending solutions that assist loan originators in connecting institutional loan lenders with loan customers. Our marketplace lending platform uses contacts in the industry to provide loan seekers with the finest offers.",
      image: "/industry/fin-24.webp",
      alt: "Software Development Services"
    },
    {
      id: 3,
      title: "Individual-to-individual loan lending",
      description: "The software for providing individual-to-individual loans enables loan transfers between people. It can be utilized to carry out loan-related tasks like taking part in loan processing and doing away with traditional banking support.",
      image: "/industry/fin-25.webp",
      alt: "Software Development Services"
    },
    {
      id: 4,
      title: "Expense Management Systems",
      description: "Thanks to the effective, multilingual, and personalized expense management systems we design, you may make expenses across many expense categories and upload them to the cloud. Our cost management systems provide you with a comprehensive snapshot of your expenses so you can keep informed.",
      image: "/industry/fin-26.jpg",
      alt: "Software Development Services"
    },
    {
      id: 5,
      title: "Credit Assessment Solution",
      description: "Our credit evaluation tool is the best in the business. It enables an insight-based evaluation of many demographic and behavioral parameters, hastening the loan decision-making procedure.",
      image: "/industry/fin-27.webp",
      alt: "Software Development Services"
    }
    ,
    {
      id: 6,
      title: "Digital Wallet Solution",
      description: "Our FinTech developers create digital wallets that support bill payment, mobile recharging, and money transfers. They also develop point or reward systems to encourage users to add value to their apps.",
      image: "/industry/fin-28.jpg",
      alt: "Software Development Services"
    },
    {
      id: 7,
      title: "Gateways for Custom Payments",
      description: "As financial institutions require, we develop specialized, secure, and reliable payment gateways that enable safe payments using OTP verifications and various authentication and verification techniques.",
      image: "/industry/fin-29.jpg",
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
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          FinTech Solutions
        </motion.h2>
        <motion.p 
          className="text-md font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
         
         We partner with several businesses globally as the world's top provider of FinTech solutions. Our extensive selection of FinTech Software Development companies gives our customers a top FinTech edge. All FinTech solutions abide by the banking laws and regulations of the relevant nation. You may be sure that the FinTech solutions provided by CIS are dependable, secure, effective, compliant, and resilient.
      
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
                    className="rounded-sm shadow-sm object-cover"
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

export default KeyServices;