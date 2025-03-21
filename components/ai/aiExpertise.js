"use client";

import { motion } from "framer-motion";

import { GiSoundWave } from 'react-icons/gi';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { RiSettings3Line } from 'react-icons/ri';

export default function AIExpertise() {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="container xl:max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 leading-tight">
          <span className="relative">
            <span className="bg-red-500 text-white px-2 py-1 rounded-md">
              Generative AI
            </span>
          </span>{" "}
          Learning Expertise:
        </h1>
        <h2 className="text-3xl text-red-500 font-semibold mt-2">
          From Generative to Predictive and Everything in Between
        </h2>
        <p className="text-gray-600 mt-4">
          With a deep pool of resources around the globe, we are ready to
          provide the skills, scale, and speed to deliver your Generative AI
          Learning project on time and on budget.
        </p>
      </div>

      <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200 flex items-start space-x-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <feature.icon className="w-24 h-24 text-red-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const features = [
  {
    title: "Generative AI",
    description:
      "Harness the power of Generative AI to enhance customer interactions by generating human-like responses to customer inquiries and automating issue resolution without human intervention.",
    icon: RiSettings3Line,
  },
  {
    title: "Image & Voice Recognition",
    description:
      "Provide seamless and intuitive user experiences by implementing advanced features ranging from facial recognition to object detection and speech-to-text conversion.",
    icon: RiSettings3Line,
  },
  {
    title: "Natural Language Processing",
    description:
      "Unlock the potential of Natural Language Processing (NLP) to improve customer support through chatbots, automate text recognition, and analyze user sentiment.",
    icon: BiMessageSquareDetail,
  },
  {
    title: "Process Automation",
    description:
      "Use the power of AI to intelligently automate complex tasks to reduce operational costs, minimize human error, and free up your team to focus on more strategic initiatives.",
    icon: RiSettings3Line,
  },
];