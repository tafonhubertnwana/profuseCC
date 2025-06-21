"use client";

import { motion } from "framer-motion";

const items = [
  {
    icon: "https://www.cisin.com/images/hccoLogo1.png",
    title: "Managing The Data",
    description:
      "A lot of data storage problems can arise when rendering smart device solutions such as IoT and smartphones into the processes. Thus, adapting tools and technology comes with a data crisis.",
  },
  {
    icon: "https://www.cisin.com/images/hccoLogo2.png",
    title: "Trust Gap",
    description:
      "Rising news of corruption and drug prices have led people to lose trust in medical stores. This issue becomes a challenge in encouraging adoption of new-age tech solutions.",
  },
  {
    icon: "https://www.cisin.com/images/hccoLogo3.png",
    title: "Online Reputation Management",
    description:
      "Patient experience with new technology greatly impacts current investments in healthcare. Ensuring positive feedback is essential to success.",
  },
  {
    icon: "https://www.cisin.com/images/hccoLogo4.png",
    title: "Surge in Cost for Services",
    description:
      "Medicine is expensive. With technological intervention, costs may rise further, making healthcare less accessible for low-income populations.",
  },
  {
    icon: "https://www.cisin.com/images/hccoLogo5.png",
    title: "Thrive for Innovation",
    description:
      "Health and fitness software, digital tools, and smart devices are redefining medical operations. IT is now a driving force for better healthcare experiences.",
  },
  {
    icon: "https://www.cisin.com/images/hccoLogo6.png",
    title: "Reducing Cost",
    description:
      "To rebuild trust, it's essential that technology reduces costs and makes healthcare more accessible across all economic levels.",
  },
  {
    icon: "https://www.cisin.com/images/hccoLogo7.png",
    title: "Patient Care",
    description:
      "Healthcare IT improves patient experience and builds long-term relationships. Enhanced care leads to greater retention and trust.",
  },
  {
    icon: "https://www.cisin.com/images/hccoLogo8.png",
    title: "Fitness Awareness",
    description:
      "Mobile health solutions empower people to monitor their health continuously, while also helping providers manage data with precision.",
  },
  {
    icon: "https://www.cisin.com/images/hccoLogo9.png",
    title: "Artificial Intelligence",
    description:
      "AI and ML allow faster access to insights and better responses to challenges. Healthcare can leverage data analytics to improve services.",
  },
];

const fadeIn = {
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

export default function ChallengesOpportunities() {
  return (
    <div className="bg-red-600">

      <div className=" container xl:max-w-7xl mx-auto p-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-12 text-left"
            variants={fadeIn}
            custom={0}
          >
            Challenges and Opportunities
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                className=" p-6 border bg-red-700 border-gray-200 hover:shadow-lg transition-shadow"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={i}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-16 h-16 mb-4 filter grayscale brightness-75"
                />
                <h4 className=" text-white text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-white text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
