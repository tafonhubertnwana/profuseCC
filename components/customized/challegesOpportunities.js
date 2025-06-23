// components/ChallengesOpportunities.js
"use client";

import { motion } from "framer-motion";
import Image from 'next/image'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ChallengesOpportunities({
  title,
  subtitle,
  sections,
  mainImageUrl,
  imagePosition = "right",
  backgroundColor = "",
  textColor = "text-gray-800",
}) {
  return (
    <div className={`${backgroundColor} ${textColor} py-8 px-4 sm:px-6 lg:px-8`}>
      <div className="container xl:max-w-7xl mx-auto p-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          className="text-left mb-2"
        >
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-md opacity-80">{subtitle}</p>}
        </motion.div>
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          className="text-left my-4"
        >
          <p className="text-md opacity-80">{subtitle}</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className=" rounded-sm border border-opacity-20  p-4"
            >
              <div className="flex items-start ">
                {section.imageUrl && (
                  <div className="flex-shrink-0 w-12 h-12">
                    <Image
                      src={section.imageUrl}
                      alt={section.title}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover rounded-lg filter grayscale brightness-75"
                    />
                  </div>
                )}
              </div>
                <div>
                  <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                  <p className="opacity-90 leading-relaxed">{section.content}</p>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
