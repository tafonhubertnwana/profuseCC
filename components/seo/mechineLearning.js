"use client";

import { motion } from "framer-motion";
import { FaGoogle, FaRobot, FaBrain, FaCloud } from "react-icons/fa";

const services = [
  {
    name: "Google Cloud AI Platform",
    description:
      "Managed platform for building, deploying, and managing ML models.",
    icon: <FaGoogle className="text-[#FF0000] text-4xl" />,
  },
  {
    name: "AutoML",
    description: "Automated machine learning for building custom ML models.",
    icon: <FaRobot className="text-[#FF0000] text-4xl" />,
  },
  {
    name: "TensorFlow",
    description:
      "Open-source ML framework for building and deploying ML models.",
    icon: <FaBrain className="text-[#FF0000] text-4xl" />,
  },
  {
    name: "Google Cloud ML Engine",
    description: "Managed service for training and deploying ML models.",
    icon: <FaCloud className="text-[#FF0000] text-4xl" />,
  },
];

const MachineLearningServices = () => {
  return (
    <>
    
      <section className=" bg-black py-10">

        <div className="mx-auto container xl:max-w-6xl p-6">
          <h2 className="text-3xl text-white font-bold text-center mb-8">
            Machine Learning Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="border border-gray-300 p-6 rounded-xl shadow-lg bg-white text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="mb-4 flex items-center justify-center">{service.icon}</div>

                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MachineLearningServices;
