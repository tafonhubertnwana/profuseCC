"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Book a Free Discovery Call",
    description:
      "Start with a conversation. We listen to your challenges, goals, and vision to understand how AI can make a real difference for your business.",
  },
  {
    number: "2",
    title: "Get Expert AI Developers",
    description:
      "Our team of skilled AI developers takes the reins, using the latest technologies and models to create a tailored AI solution that fits your needs.",
  },
  {
    number: "3",
    title: "Build & Scale",
    description:
      "Once the AI is developed and optimized, we help you deploy, monitor, and scale it to deliver maximum impact, continuously improving to meet new challenges.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function AIProcessSteps() {
  return (
    <section className="py-24 ">
      <div className="  container xl:max-w-6xl mx-auto px-4 text-center">
        <motion.h3
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
        >
          Our AI Development Process in 3 Simple Steps
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-black p-6 rounded-sm shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={index + 1}
            >
              <div className=" text-white text-4xl font-bold mb-4">
                {step.number}
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">{step.title}</h4>
              <p className="text-white">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
