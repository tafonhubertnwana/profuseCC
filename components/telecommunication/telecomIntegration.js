"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const integrations = [
  {
    image: '/industry/tel-16.png', // replace with your actual image path
    title: "Telecommunications API",
    description:
      "To maximize workflow efficiency, we incorporate reliable and adaptable telecom APIs from top global telecom industry players into your current business software solutions.",
  },
  {
    image: '/industry/tel-17.png', // replace with your actual image path
    title: "Cloud Communication Platforms",
    description:
      "We provide telecom organizations with a quick, easy, and scalable approach to upgrading their business communications through our integration with cloud communication systems.",
  },
  {
    image: '/industry/tel-18.png', // replace with your actual image path
    title: "Telecommunications Expense Management Software",
    description:
      "We provide telecom expense management solutions to assist organizations in keeping track of and managing their assets and expenses.",
  },
  {
    image: '/industry/tel-19.webp', // replace with your actual image path
    title: "Contact & Call Center Software",
    description:
      "We can improve client engagement in contact centers worldwide thanks to our connection with call center software solutions.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function TelecomIntegrations() {
  return (
    <div className="container py-12 px-4 xl:max-w-7xl mx-auto p-2">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Telecom Software Integrations
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          We integrate third-party APIs, cloud communication platforms,
          telecom expense management systems, and call center software with
          your existing systems and apps to offer a successful telecom
          operation.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {integrations.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="mb-4">
              <Image 
                src={item.image} 
                alt={item.title}
                width={48}
                height={48}
                className="h-12 w-auto filter grayscale brightness-75"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}