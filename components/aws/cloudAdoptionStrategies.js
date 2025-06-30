'use client';

import { motion } from 'framer-motion';

const cloudStrategies = [
  {
    title: 'MIGRATION',
    description:
      'Move existing or new applications to your chosen cloud platform to gain better connectivity and reduce performance issues.',
    img: '/industry/cloud-15.png',
  },
  {
    title: 'CONSULTATION',
    description:
      'It is important to have industry knowledge to select the best cloud platform, architecture, and technology.',
    img: '/industry/cloud-16.png',
  },
  {
    title: 'DEPLOYMENT',
    description:
      'You can rely on multiple cloud providers, such as AWS and Microsoft, OpenStack, VMware, or OpenStack, for multiple applications.',
    img: '/industry/cloud-17.png',
  },
  {
    title: 'MAINTENANCE',
    description:
      'Cyber Infrastructure, ProfuseCC, protects your Cloud software environment even in production. We manage cloud assets, monitoring and hardware configuration, and performance optimization.',
    img: '/industry/cloud-18.png',
  },
  {
    title: 'DEVOPS',
    description:
      'ProfuseCC uses DevOps to maximize continuous innovation, integration, and development. We manage our internal processes and integrate your internal IT teams.',
    img: '/industry/cloud-19.png',
  },
  {
    title: 'DISASTER RECOVERY',
    description:
      'ProfuseCC develops innovative disaster recovery plans that minimize data loss and provide the best availability for cloud-based applications.',
    img: '/industry/cloud-20.png',
  },
];

export default function CloudAdoptionStrategies() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <motion.h3
          className="text-4xl font-semibold mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Cloud Adoption Strategies
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-10">
          {cloudStrategies.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 p-6 rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={item.img}
                  alt={`${item.title.toLowerCase()}-icon`}
                  className="w-16 h-16 object-contain filter grayscale brightness-75"
                />
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
