"use client";

import { motion } from "framer-motion";

const stats = [
  {
    text: (
      <>
        <strong>72%</strong> of organizations have integrated AI, reflecting a
        growing global shift toward AI adoption.
      </>
    ),
  },
  {
    text: (
      <>
        By 2030, the AI technology market is anticipated to exceed{" "}
        <strong>1.8 trillion</strong> U.S. dollars, marking significant
        expansion.
      </>
    ),
  },
  {
    text: (
      <>
        A survey found that <strong>59%</strong> of organizations experienced
        revenue growth, while <strong>42%</strong> saw a decrease in operational
        costs after adopting AI.
      </>
    ),
  },
];

const fadeIn = {
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

export default function AINeedSection() {
  return (
    <section className="py-20">
      <div className="container xl:max-w-7xl mx-auto p-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8"
            variants={fadeIn}
            custom={0}
          >
            The Growing Need for AI in Today's Digital World
          </motion.h2>

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((item, index) => (
              <motion.li
                key={index}
                className="bg-[#FF0000] text-white rounded-sm p-6 shadow-md text-center text-lg md:text-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={index + 1}
              >
                <p>{item.text}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
