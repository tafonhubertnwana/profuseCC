'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { Menu } from '@headlessui/react';

const ITEMS = ['DevOps', 'Mobile', 'Application', 'Data and Analytics', 'Infrastructure', 'AI and Machine Learning', 'Security, Identity & Compliance'];

const SERVICES = {
  DevOps: [
    { name: 'AWS CodeCommit', icon: '/assets/devops-1.png' },
    { name: 'AWS CodeDeploy', icon: '/assets/devops-2.png' },
    { name: 'AWS CodePipeline', icon: '/assets/devops-3.png' },
    { name: 'Amazon CloudWatch', icon: '/assets/devops4.png' },
    { name: 'AWS Service Catalog', icon: '/assets/devops-5.png' },
    { name: 'AWS Config', icon: '/assets/devops-6.png' },
    { name: 'AWS CloudFormation', icon: '/assets/devops-7.png' },
    { name: 'AWS OpsWorks', icon: '/assets/devops-1.png' },
  ],
  Mobile: [
    { name: 'AWS Cognito', icon: '/assets/mobile-1.png' },
    { name: 'AWS Device Farm', icon: '/assets/mobile-2.png' },
    { name: 'Amazon Pinpoint', icon: '/assets/mobile-3.png' },
    { name: 'Amazon SNS', icon: '/assets/mobile-4.png' },
  ],
  Application: [
    { name: 'Amazon SES', icon: '/assets/app-1.png' },
    { name: 'Amazon API Gateway', icon: '/assets/app-2.png' },
    { name: 'Amazon SQS', icon: '/assets/app-3.png' },
    { name: 'Amazon CloudSearch', icon: '/assets/app-4.png' },
  ],
  'Data and Analytics': [
    { name: 'Amazon Kinesis', icon: '/assets/analysis-1.png' },
    { name: 'Amazon EMR', icon: '/assets/analysis-2.png' },
    { name: 'Amazon Data Pipeline', icon: '/assets/analysis-3.png' },
    { name: 'Amazon Glue', icon: '/assets/analysis-4.png' },
    { name: 'Amazon Athena', icon: '/assets/analysis-5.png' },
    { name: 'Amazon Open Search', icon: '/assets/analysis-9.png' },
    { name: 'Amazon Redshift', icon: '/assets/analysis-6.png' },
    { name: 'Amazon RDS', icon: '/assets/analysis-7.png' },
    { name: 'Amazon DynamoDB', icon: '/assets/analysis-8.png' },
    { name: 'Amazon ElastiCache', icon: '/assets/analysis-10.png' },
    { name: 'Amazon Database Migration Service', icon: '/assets/analysis-11.png' },
  ],
  Infrastructure: [
    { name: 'Amazon EC2', icon: '/assets/infastructure-1.png' },
    { name: 'Amazon ECS', icon: '/assets/infastructure-2.png' },
    { name: 'Amazon Lambda', icon: '/assets/infastructure-3.png' },
    { name: 'Amazon S3', icon: '/assets/infastructure-4.png' },
    { name: 'Amazon Glacier', icon: '/assets/infastructure-5.png' },
    { name: 'Amazon Gateway', icon: '/assets/infastructure-6.png' },
    { name: 'Amazon VPC', icon: '/assets/infastructure-7.png' },
    { name: 'Amazon Route 53', icon: '/assets/infastructure-8.png' },
    { name: 'Elastic Load Balancing', icon: '/assets/infastructure-9.png' },
    { name: 'AWA Direct Connect', icon: '/assets/infastructure-10.png' },
    { name: 'Amazon CloudFront', icon: '/assets/infastructure-11.png' },
  ],
  'AI and Machine Learning': [
    { name: 'Amazon Rekognition', icon: '/assets/ai-1.png' },
    { name: 'Amazon SageMaker', icon: '/assets/ai-2.png' },
    { name: 'Amazon HealthOmics', icon: '/assets/ai-3.png' },
    { name: 'Amazon Textract', icon: '/assets/ai-4.png' },
  ],
  'Security, Identity & Compliance': [
    { name: 'AWS Identity and Access Management', icon: '/assets/security-1.png' },
    { name: 'AWS Key Management Service', icon: '/assets/security-2.png' },
    { name: 'AWS Web Application Firewall', icon: '/assets/security-3.png' },
  ],
};

const TechnicalExpertise = () => {
  const [selectedItem, setSelectedItem] = useState(ITEMS[0]);

  return (
    <section className="bg-gray-800 py-10 px-5">
      <div className="container xl:max-w-6xl mx-auto text-center">
        <motion.h2 className="text-3xl font-bold text-orange-500 inline-block px-5 py-2 rounded" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Technical Expertise</motion.h2>
        <motion.p className="mt-4 text-white text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>We offer expertise across AWS technologies.</motion.p>
      </div>
      <div className="container xl:max-w-6xl mx-auto pt-10">
        <div className="md:grid md:grid-cols-2 gap-8 flex flex-col">
          <div className="space-y-3 text-left hidden md:block">
            {ITEMS.map((item, index) => (
              <motion.p key={index} className={`text-white font-medium cursor-pointer px-4 py-2 rounded-md transition-colors ${selectedItem === item ? 'text-orange-400' : 'hover:bg-gray-200 hover:text-black'}`} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }} onClick={() => setSelectedItem(item)}>{item}</motion.p>
            ))}
          </div>
          {/* Mobile Dropdown */}
          <div className="md:hidden">
            <Menu as="div" className="relative">
              <Menu.Button className="w-full bg-gray-700 text-white px-4 py-2 rounded-md text-left">{selectedItem}</Menu.Button>
              <Menu.Items className="absolute left-0 mt-2 w-full bg-gray-700 text-white rounded-md shadow-lg">
                {ITEMS.map((item, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <p className={`cursor-pointer px-4 py-2 ${active ? 'bg-gray-600' : ''}`} onClick={() => setSelectedItem(item)}>{item}</p>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>
          </div>
          <motion.div className="bg-white shadow-md rounded-lg p-6 flex justify-center items-center flex-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
            {selectedItem && SERVICES[selectedItem]?.map((service, index) => (
              <motion.div key={index} className="text-center text-pink-600 flex flex-col items-center w-32 h-32" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }}>
                <div className="text-4xl">
                  <Image src={service.icon} alt={service.name} width={45} height={45} />
                </div>
                <p className="mt-2 text-gray-800 font-medium">{service.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;
