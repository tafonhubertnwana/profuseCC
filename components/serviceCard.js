'use client';
import { motion } from "framer-motion";
import { FaServer, FaCloud, FaBrain, FaShieldAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaServer className="text-[#FF0000] text-5xl" />, 
    title: "Managed IT Services",
    description: "Proin Pulvinar Eu Sem Endro thes Vehicula. Integer Urna Libero and, Semper emper business.",
  },
  {
    icon: <FaCloud className="text-[#FF0000] text-5xl" />, 
    title: "Cloud Services",
    description: "Proin Pulvinar Eu Sem Endro thes Vehicula. Integer Urna Libero and, Semper emper business.",
  },
  {
    icon: <FaBrain className="text-[#FF0000] text-5xl" />, 
    title: "Machine Learning",
    description: "Proin Pulvinar Eu Sem Endro thes Vehicula. Integer Urna Libero and, Semper emper business.",
  },
  {
    icon: <FaShieldAlt className="text-[#FF0000] text-5xl" />, 
    title: "Data Security",
    description: "Proin Pulvinar Eu Sem Endro thes Vehicula. Integer Urna Libero and, Semper emper business.",
  },
];

export default function ServiceCard() {
  return (
    <div className="relative bg-red-100 py-12">
    <div className="container xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
            <a
              href="#"
              className="text-[#FF0000] font-semibold mt-4 inline-block hover:underline"
            >
              Read More &raquo;
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
  );
}
