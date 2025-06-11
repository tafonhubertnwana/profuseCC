'use client'
import { motion } from 'framer-motion';

const SecurityServices = () => {
  const services = [
    {
      title: "Regression Audit",
      description: "Close security speculations of your website."
    },
    {
      title: "Remediate",
      description: "Fixtures in code deficiencies."
    },
    {
      title: "Reports",
      description: "Give you complete information on the important changes."
    },
    {
      title: "High Level Security",
      description: "We provide you ultimate cyber security solutions."
    },
    {
      title: "Scan & Detect",
      description: "Detection of security breaches and fix them."
    },
    {
      title: "Exploit",
      description: "Prevention from data exploitation"
    },
    {
      title: "Cyber Crime Consultancy",
      description: "Continuous connection for securing data."
    },
    {
      title: "POC With The Instructions",
      description: "Feasibility is rendered."
    },
    {
      title: "Manual Testing",
      description: "Cyber Security as a Service with quality"
    },
    {
      title: "Vulnerability Patching Sup.",
      description: "Decrease the vulnerability security is achieved."
    },
    {
      title: "Priority Based Auditing",
      description: "Share with us your needs, vision, priorities"
    },
    {
      title: "Annual Security Reports",
      description: "Transparency in process, annual reports are shared."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          Our Cyber Security Service That We Offer
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500"
            >
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SecurityServices;