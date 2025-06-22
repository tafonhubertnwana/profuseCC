"use client";

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
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function WhyWeLeadSection() {
  return (
    <section className="bg-white py-10 px-4">
      <div className="container xl:max-w-7xl mx-auto text-center p-2">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 mb-6 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
        >
          Why We're Your Ideal AI Development Partner
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          Our team combines years of expertise with cutting-edge tools to deliver scalable, secure, and high-performing AI solutions tailored to your needs.
        </motion.p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">

          {features.map((feature, index) => (
            <motion.div
  key={index}
  className="p-5 border border-gray-100 rounded-xl bg-white transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-[#FF0000]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
  custom={index + 2}
>
  <h4 className="font-semibold text-lg text-gray-900 mb-2">
    {feature.title}
  </h4>
  <p className="text-gray-600 text-sm">{feature.description}</p>
</motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}
