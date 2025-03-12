'use client';

import { motion } from 'framer-motion';
import { FaDatabase } from 'react-icons/fa';
import { HiOutlineChartBar } from 'react-icons/hi';

const services = [
  {
    id: 1,
    title: 'Data Platform Architecture Design',
    description:
      'Start your data journey off on the right foot with a robust data architecture that allows you to take the most of your data. Our team of seasoned data architects and engineers work closely with you to design a future-proof data architecture that aligns with your growth strategy. Whether it\'s a cloud-based, on-premise, or hybrid solution, we define data models, underlying data structures, integration approaches, data governance strategies and more to ensure your data is consistent, secure, and readily accessible.',
    icon: <FaDatabase className="text-3xl text-orange-600" />,
  },
  {
    id: 2,
    title: 'Data Engineering',
    description:
      'Streamline your data from multiple sources into a unified system. Our highly experienced data engineers build scalable yet flexible ETL and ELT pipelines that seamlessly integrate data in different formats, with different structures, and via different APIs and custom connectors. Data Platforms we help clients build are scalable, secure, and can handle the increasing data volumes.',
    icon: <HiOutlineChartBar className="text-3xl text-orange-600" />,
  },
  {
    id: 2,
    title: 'Data Warehousing',
    description:
      'Take advantage of Kanda’s excellence in building robust and reliable databases, warehouses, and data lakes that serve as a central component for any data initiatives. Designed with scalability in mind, our data warehousing solutions can store and process massive amounts of structured and unstructured data, providing a reliable foundation for diverse analytics workloads.',
    icon: <HiOutlineChartBar className="text-3xl text-orange-600" />,
  },
  {
    id: 2,
    title: 'Data Governance and Compliance',
    description:
      'Protect your data and ensure compliance with our robust data governance solutions. We help you establish policies and procedures to manage data quality, security, and privacy, ensuring your data remains a valuable and trustworthy asset.',
    icon: <HiOutlineChartBar className="text-3xl text-orange-600" />,
  },
  {
    id: 2,
    title: 'Data Analytics, Visualization, and Business Intelligence ',
    description:
      'Tap into our Business Intelligence and Data Visualization experience and skills to make your data come to life. We are proficient in Power BI, Tableau, and other tools to help you create interactive and easy-to-understand dashboards and reports that provide real-time insights, fuel decision-making and monetize your data.',
    icon: <HiOutlineChartBar className="text-3xl text-orange-600" />,
  }
];

export default function DataServices() {
  return (
    <section className="py-16 px-6 max-w-6xl  mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold "
      >
        Explore our Data and Analytics Services rooted in
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl md:text-3xl font-semibold mt-2"
      >
        30+ years of hands-on experience
      </motion.h3>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
  {services.map((service) => (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: service.id * 0.2 }}
      className="p-6 bg-white shadow-md rounded-xl flex gap-4 items-start border border-gray-200 h-full w-full"
    >
      <div>{service.icon}</div>
      <div className="text-left">
        <h4 className="text-xl font-semibold text-gray-800">{service.title}</h4>
        <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
      </div>
    </motion.div>
  ))}
</div>

    </section>
  );
}
