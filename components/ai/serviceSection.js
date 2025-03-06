import { motion } from "framer-motion";
import { FaChartLine, FaShieldAlt, FaCogs, FaProjectDiagram, FaFileAlt } from "react-icons/fa";

const pillars = [
  {
    title: "Built for Business Impact",
    description: "Aligning our efforts with your strategic objectives, we deliver AI solutions that drive tangible business outcomes.",
    icon: <FaChartLine className="text-green-500 text-3xl" />,
  },
  {
    title: "Ready to Deploy Expertise",
    description: "With a deep pool of AI expertise, our teams are ready to hit the ground running and meet your time-to-market demands.",
    icon: <FaFileAlt className="text-green-500 text-3xl" />,
  },
  {
    title: "Secure from the Ground up",
    description: "We proactively design and implement robust security at all levels, from authentication & authorization to communication & data protection.",
    icon: <FaShieldAlt className="text-green-500 text-3xl" />,
  },
  {
    title: "Architected for Scale",
    description: "Our solutions are designed to handle increasing data and user loads, ensuring consistent performance as your business grows.",
    icon: <FaCogs className="text-green-500 text-3xl" />,
  },
  {
    title: "Adaptable to Change",
    description: "Our solutions are implemented and documented with your future needs in mind, allowing for seamless knowledge transfer and easy extensibility.",
    icon: <FaProjectDiagram className="text-green-500 text-3xl" />,
  },
];

export default function ServiceSection() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col items-center justify-center px-6 py-12 ">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-gray-800"
      >
        AI solutions for today’s needs <br /> and tomorrow’s vision
      </motion.h1>
      <p className="text-center text-gray-600 mt-4 max-w-2xl">
        Each project we undertake is anchored in our five pillars of success, providing a strong foundation for an AI solution that not only meets your goals today, but can also scale and grow to serve you well into the future.
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white shadow-lg rounded-2xl p-6  border border-gray-200"
          >
            <div className="flex justify-center mb-4">{pillar.icon}</div>
            <h3 className="font-semibold text-lg text-gray-800">{pillar.title}</h3>
            <p className="text-gray-600 mt-2">{pillar.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
