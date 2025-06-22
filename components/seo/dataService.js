'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const advantages = [
  {
    image: '/industry/data-13.png',
    title: 'See The Big Picture',
    description:
      "Find accurate insights and identify patterns in complex data without having to rely on an expert in data science. AI helpants can also reveal patterns that aren't seen previously.",
  },
  {
    image: '/industry/data-14.png',
    title: 'Present Meaningful Data',
    description:
      'You can share your knowledge with other users in a simple format. For example, AI can help in the creation of dashboards or provide an illustration recommendation to tell your story the best way.',
  },
  {
    image: '/industry/data-15.png',
    title: 'Democratize Your Data',
    description:
      'Create a single point of truth for the entire company while taking advantage of the security and governance features to minimize errors made by humans when making uploads and manual cleaning of your information.',
  },
  {
    image: '/industry/data-16.png',
    title: 'Make Better Decisions',
    description:
      'Through integrated AI capabilities, you will be able to understand your next steps, and spend less time analyzing data using augmented decision making.',
  },
];

export default function DataServices() {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/data-bg.webp')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section>
        <div className="py-10 container xl:max-w-7xl mx-auto p-2">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-10 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Advantages Of Data Visualization For Business
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {advantages.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white  shadow-lg p-6 hover:shadow-2xl transform hover:scale-[1.02] transition duration-300 ease-in-out group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="object-contain filter grayscale brightness-75   transition duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
