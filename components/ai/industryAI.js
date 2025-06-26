'use client';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { 
  FaHospital, 
  FaMoneyBillWave, 
  FaShoppingCart, 
  FaChartLine, 
  FaTools, 
  FaShieldAlt,
  FaLightbulb,
  FaSyncAlt
} from 'react-icons/fa';

const IndustryAIServices = () => {
  const industryServices = [
    {
      title: 'Google Cloud Healthcare AI',
      description: 'AI services for healthcare and life sciences.',
      icon: <FaHospital className="text-[#FF0000]" size={50} />
    },
    {
      title: 'Google Cloud Financial Services AI',
      description: 'AI services for financial services and banking.',
      icon: <FaMoneyBillWave className="text-[#FF0000]" size={50} />
    },
    {
      title: 'Google Cloud Retail AI',
      description: 'AI services for retail and e-commerce.',
      icon: <FaShoppingCart className="text-[#FF0000]" size={50} />
    }
  ];

  const benefits = [
    {
      title: 'Scalability',
      description: 'Google AI services can handle large volumes of data and traffic.',
      icon: <FaChartLine className="text-[#FF0000]" size={50} />
    },
    {
      title: 'Ease of Use',
      description: 'Pre-built APIs and managed services simplify AI development.',
      icon: <FaTools className="text-[#FF0000]" size={50} />
    },
    {
      title: 'Seamless Integration',
      description: 'Works effortlessly with other Google Cloud services.',
      icon: <FaSyncAlt className="text-[#FF0000]" size={50} />
    },
    {
      title: 'Enterprise Security',
      description: 'Industry-leading security and compliance standards.',
      icon: <FaShieldAlt className="text-[#FF0000]" size={50} />
    },
    {
      title: 'Cutting-Edge Innovation',
      description: 'Access to Google\'s latest AI research and technology.',
      icon: <FaLightbulb className="text-[#FF0000]" size={50} />
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
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
    }
  };

  return (
    <div  style={{
      backgroundImage: "url('/assets/ai-bg.webp')", // Replace with your image path
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      
      <div className="container  px-6 py-12 xl:max-w-7xl mx-auto p-2 ">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          Google Cloud Industry AI Solutions
        </motion.h1>

        <div className="space-y-16">
          {/* Industry-Specific Services Section */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-semibold text-white mb-6 "
            >
              Industry-Specific AI Services
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="mb-4 flex justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2 text-center">{service.title}</h3>
                    <p className="text-gray-600 text-center flex-grow">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Benefits Section */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-semibold text-white mb-6 "
            >
              Key Benefits of Google AI Services
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="mb-4 flex justify-center">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2 text-center">{benefit.title}</h3>
                    <p className="text-gray-600 text-center flex-grow">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default IndustryAIServices;