'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const TechnicalExpertise = () => {
  const items = ['DevOps', 'Mobile', 'Application', 'Data and Analytics', 'Infrastructure', 'AI and Machine Learning Section', 'Security, Identity & Compliance'];

  // Set the first item as the default selected item
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const services = {
    DevOps: [
      { name: 'AWS CodePipeline', icon: '🚀' },
      { name: 'AWS CodeBuild', icon: '🛠' },
      { name: 'AWS CodeDeploy', icon: '📦' },
    ],
    Mobile: [
      { name: 'AWS Amplify', icon: '📱' },
      { name: 'AWS AppSync', icon: '🔗' },
    ],
    Application: [
      { name: 'AWS Elastic Beanstalk', icon: '🌱' },
      { name: 'AWS Lambda', icon: 'λ' },
    ],
    'Data and Analytics': [
      { name: 'Amazon Redshift', icon: '🔴' },
      { name: 'AWS Glue', icon: '🧩' },
    ],
    Infrastructure: [
      { name: 'Amazon EC2', icon: '🖥' },
      { name: 'Amazon VPC', icon: '🌐' },
    ],
    'AI and Machine Learning Section': [
      { name: 'Amazon SageMaker', icon: '🤖' },
      { name: 'Amazon Comprehend', icon: '📖' },
    ],
    'Security, Identity & Compliance': [
      { name: 'AWS IAM', icon: '🔑' },
      { name: 'AWS KMS', icon: '🔐' },
    ],
    ManagementGovernment: [
      { name: 'Amazon EC2', icon: '🖥' },
      { name: 'Amazon VPC', icon: '🌐' },
    ],
    'AI and Machine Learning Section': [
      { name: 'Amazon SageMaker', icon: '🤖' },
      { name: 'Amazon Comprehend', icon: '📖' },
    ],
    'Security, Identity & Compliance': [
      { name: 'AWS IAM', icon: '🔑' },
      { name: 'AWS KMS', icon: '🔐' },
    ],
  };

  return (
    <section className="bg-gray-100 py-10 px-5">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-white bg-gradient-to-r from-green-400 to-teal-600 inline-block px-5 py-2 rounded"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Expertise
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-600 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className=" px-2 py-1 rounded-md">
            As an AWS Advanced Consulting Partner, we offer robust expertise
          </span>{' '}
          across a diverse spectrum of AWS technologies, supported by the successful completion of over 350+ projects.
        </motion.p>
      </div>
      
      <div className="max-w-5xl mx-auto mt-10 flex flex-col md:flex-row gap-8">
        <div className="space-y-3 text-left">
          {items.map((item, index) => (
            <motion.p
              key={index}
              className={`text-gray-800 font-medium cursor-pointer px-4 py-2 rounded-md transition-colors ${
                selectedItem === item ? ' px-4 bg-gradient-to-r from-green-400 to-teal-600 text-white' : 'hover:bg-gray-200'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setSelectedItem(item)}
            >
              {item}
            </motion.p>
          ))}
          {/* <motion.button
            className=" text-gray-800 px-4 py-2 "
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            Management & Governance
          </motion.button> */}
        </div>
        
        <motion.div
          className="bg-white shadow-md rounded-lg p-6 flex justify-center items-center flex-wrap gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {selectedItem &&
  services[selectedItem].map((service, index) => (
    <motion.div
      key={index}
      className="text-center text-pink-600 flex flex-col items-center w-40 h-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="text-4xl">{service.icon}</div>
      <p className="mt-2 text-gray-800 font-medium">{service.name}</p>
    </motion.div>
  ))}

        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;