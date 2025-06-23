'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    image: '/industry/manu-22.png',
    title: 'Digital Factory Management Solution - Asset Management And Optimization',
    description:
      'Perform, work, adapt and manage your business to utilize your critical assets and reduce cost of asset management. At CIS we give you technology solutions that make it easy for you to check availability and plan utilization for improved efficiency and optimization.',
  },
  {
    image: '/industry/manu-23.png',
    title: 'Cloud Data Management - Enterprise And Supply Chain System',
    description:
      'Enterprise Resource Planning System that now focuses on supply chain management. Learn, execute, integrate, shop and manage your internally oriented supply chain. Our team implements managed systems like HPE NSX Load Balancer, PTC Digital Manufacturing, VMware Carbon Black, and more.',
  },
  {
    image: '/industry/manu-24.png',
    title: 'Digital Manufacturers - Smart Manufacturing Solutions',
    description:
      'Utilize internet connected machinery to monitor manufacturing processes. Smart solutions help identify opportunities, automate operations, and use advanced analytics for better performance.',
  },
  {
    image: '/industry/manu-25.png',
    title: 'Digital Business Data Services - Inventory Management',
    description:
      'Our manufacturing IT solutions address inventory management challenges. Install robust inventory management systems that consolidate complex data into streamlined dashboards.',
  },
  {
    image: '/industry/manu-26.png',
    title: 'Data Analytics - Field Service Operations',
    description:
      'Increase your employee productivity to ten folds, with better resource management options and solutions. Upgrade your processes by installing technology solutions that ease up the process of managing your employee activity, scheduling and dispatching work, ensuring driver safety and integrating multiple functions for better results.',
  }
  ,
  {
    image: '/industry/manu-27.png',
    title: 'Digital First - Order Management',
    description:
      'Efficiently track your orders and be one step ahead to always stay ahead of your industrial curve. An order management system that sees into your processes, supplies and imparts a better customer experience for your clients by allowing them to keep track of their orders.',
  }
  
];

export default function FactoryServices() {
  return (
    <div className=" container xl:max-w-7xl mx-auto p-2 py-8">
      <motion.h1
        className="text-3xl font-bold text-center text-gray-900 mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Manufacturing IT Services - Factory Automation
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="mb-4">
              <Image
                src={service.image}
                alt={service.title}
                width={50}
                height={50}
                className="object-contain grayscale brightness-75"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
