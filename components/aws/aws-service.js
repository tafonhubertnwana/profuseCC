import { motion } from "framer-motion";
import Image from "next/image";
import ConsultationFormModal from "../consultingForm";
import { useState } from "react";

export default function AwsServices() {

  const [isModalOpen, setIsModalOpen] = useState(false);
    
      const openModal = () => setIsModalOpen(true);
      const closeModal = () => setIsModalOpen(false);
  return (
    <>
      
      <div className="bg-black text-white p-4 sm:p-8">
        <div className="container xl:max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div>
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-[#FF0000] "
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                AWS Development Services & Solutions
              </motion.h1>

              <p className="mt-4 text-base sm:text-lg text-gray-300">
                Fuel your business growth with secure, robust, and scalable solutions on AWS
              </p>

              <motion.p 
                className="mt-6 text-sm sm:text-base text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                ProfuseCC is a reliable non-reseller cloud agnostic Advanced Tier Services partner in AWS
                development, management, optimization, automation, and deployment. We help clients to
                develop custom applications on AWS tailored to their unique business objectives and budget.
                From innovative startups to large enterprises, we leverage our thorough expertise to deliver,
                manage, and deploy scalable cloud solutions.
              </motion.p>

              <motion.p 
                className="mt-4 text-sm sm:text-base text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9 }}
              >
                With over eight years as an AWS trusted services provider, ProfuseCC reduces time to market and
                ensures that client cloud initiatives adhere to the best practices set by AWS.
              </motion.p>
              <div >


                <motion.button 
                  className="mt-6 bg-[#FF0000] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-[#FF0000]  transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openModal}
                >
                  Talk to AWS Experts →
                </motion.button>
                <ConsultationFormModal isOpen={isModalOpen} onClose={closeModal} />
              </div>
            </motion.div>
            <div className="flex justify-center items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Image 
                  src="/assets/AWS-Partner.webp" 
                  alt="AWS Partner Logo" 
                  width={200} 
                  height={200} 
                  className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}