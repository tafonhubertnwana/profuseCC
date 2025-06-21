"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Years of Hands-On AI Experience",
    description:
      "With a proven track record, we've built and deployed AI solutions that solve real-world challenges across multiple industries.",
  },
  {
    title: "No More AI Bias",
    description:
      "Our AI models are designed to be fair, ethical, and unbiased, ensuring accurate and responsible decision-making.",
  },
  {
    title: "Faster, Smarter AI Models",
    description:
      "We fine-tune AI for top-notch performance, so you get quick, reliable, and efficient results without delays.",
  },
  {
    title: "Handles Big Data with Ease",
    description:
      "Our AI solutions process massive amounts of data smoothly, helping you uncover insights without slowdowns.",
  },
  {
    title: "Built to Scale",
    description:
      "Whether you're a startup or an enterprise, our AI solutions grow with you, ensuring they remain fast and efficient as your business expands.",
  },
  {
    title: "Easy Integration, Zero Disruptions",
    description:
      "Our AI seamlessly fits into your existing systems, so you can boost efficiency without any downtime.",
  },
  {
    title: "Rock-Solid Security & Compliance",
    description:
      "Your AI is protected against cyber threats and built to comply with global data security regulations.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function WhyWeLeadSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start gap-12">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/assets/ai-1.png"
            alt="software development services"
            width={1000}
            height={667}
            className="rounded-lg w-full h-auto object-cover"
          />
        </motion.div>

        <div className="md:w-1/2 space-y-6">
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
          >
            Why We Are the Right Artificial Intelligence Development Partner
          </motion.h3>

          <motion.p
            className="text-lg text-gray-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={1}
          >
            Smarter AI starts with the right team. With deep experience and
            cutting-edge tech, we make AI work the way it should.
          </motion.p>

          <ul className="space-y-5 mt-6">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="text-base text-gray-800"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={index + 2}
              >
                <p className="text-lg">
                  <strong>{feature.title}</strong> – {feature.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
