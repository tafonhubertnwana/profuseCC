'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import { useState } from 'react';
import ConsultationFormModal from '../consultingForm';

const features = [
  {
    title: "US-based Project Leadership",
    description:
      "Our Delivery Manager is a senior technology leader that becomes an extension of your team, ensuring your software development milestones and goals are met from kickoff to delivery.",
    imgSrc: "/assets/crown.png",
    delay: 0.2,
  },
  {
    title: "Optimized Global Talent and Skill Mix",
    description:
      "Our teams are strategically staffed to deliver industry-leading breadth and depth of technology skills and expertise while optimizing delivery costs.",
    imgSrc: "/assets/earth-europa.png",
    delay: 0.4,
  },
  {
    title: "On-demand Hard-to-find Experts",
    description:
      "Specialized resources like business analysts, architects, DevSecOps, AI/ML engineers, and others can be added on-demand to serve specific software project requirements.",
    imgSrc: "/assets/users-alt.png",
    delay: 0.6,
  },
  {
    title: "Cost-effective US-based UX Talent",
    description:
      "Our partnership with Bentley University’s User Experience Center enables us to deliver award-winning designs and user experiences at an affordable price point.",
    imgSrc: "/assets/quality.png",
    delay: 0.8,
  },
];

export default function CustomSoftwareDevelopment() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  return (
    <>
    
       <section className='container xl:max-w-6xl mx-auto '>
      <div className="flex flex-col lg:flex-row items-center justify-between px-10 py-16 bg-white">

        {/* Text Content */}
        <div className='max-w-xl'>
          <h1 className="text-4xl font-bold text-gray-900">
            Custom Software <br /> Development
          </h1>
          <p className="mt-4 text-gray-600">
            We transform bold business and e-commerce ideas into exceptional digital products.
            Our more than 10 years as a successful custom software development company allows us
            to bring insightful design experience into the full-stack enterprise application development
            that enhances your competitive advantage and customer relationships.
          </p>
          <div>

            <button className="mt-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:opacity-90" onClick={openModal} >
              BOOK A FREE CONSULTATION
            </button>
            <ConsultationFormModal isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>

        {/* Image with Highlights */}
        <div className="relative mt-10 lg:mt-0">
      <motion.div
        animate={{
          y: [0, -10, 0], // Moves the image up and down
        }}
        transition={{
          duration: 2, // Duration of one full animation cycle
          repeat: Infinity, // Repeat the animation indefinitely
          ease: "easeInOut", // Smooth easing
        }}
      >
        <Image
          src="/assets/web-development.webp"
          alt="Software Development"
          width={500}
          height={500}
          className=""
        />
      </motion.div>
    </div>
      </div>
    </section>
        <section className='bg-[#0c1c40] py-10'>

          <div className="container xl:max-w-6xl mx- px-4">
            <Head>
              <title>Designed to Deliver Faster Time to Innovation</title>
            </Head>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-left mb-10"
                >
                  <h1 className="text-4xl font-bold text-orange-400 mb-4">Designed to Deliver Faster Time to Innovation</h1>
                  <p className="text-gray-100">Every project team is structured to optimize your custom software development objectives and business goals.</p>
                </motion.div>
                <div className="px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: feature.delay }}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-left text-left min-h-[300px]"
                >
                  <Image src={feature.imgSrc} alt="icon" width={50} height={50} className="mb-4 filter hue-rotate-30 brightness-110" />
                  <h2 className="text-2xl font-semibold text-orange-400 mb-2">{feature.title}</h2>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          </div>
        </section>
    
    </>
   
  );
}
