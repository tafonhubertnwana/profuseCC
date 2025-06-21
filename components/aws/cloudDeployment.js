"use client";

import { motion } from "framer-motion";

const deployments = [
  {
    title: "Public Cloud",
    description:
      "Third-party cloud service provider. Multi-tenant architecture that is scalable for unstable traffic.",
    image: "https://www.cisin.com/images/studies81.jpg",
  },
  {
    title: "Private Cloud",
    description:
      "Only one company can use cloud resources. One tenant environment with dedicated servers and high security.",
    image: "https://www.cisin.com/images/studies48.jpg",
  },
  {
    title: "Hybrid Cloud",
    description:
      "Combination of private and public clouds and data centers for application and sharing. This combination offers flexibility and allows for more deployment options.",
    image: "https://www.cisin.com/images/studies43.jpg",
  },
  {
    title: "Multi-Cloud",
    description:
      "For seamless data and application sharing, combine multiple cloud providers. Multiple cloud providers can be used for multiple applications.",
    image: "https://www.cisin.com/images/studies89.jpg",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function CloudDeployment() {
  return (
    <div className=" container xl:max-w-6xl mx-auto p-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
          variants={fadeIn}
          custom={0}
        >
          Cloud Services
        </motion.h3>

        <motion.p
          className="text-base md:text-lg text-center max-w-7xl mx-auto mb-16"
          variants={fadeIn}
          custom={1}
        >
          The majority of Cloud Computing Solutions can be divided into three
          broad categories: Infrastructure as a Service, Platform as a Service,
          and Software as a Service. Because they are built on top of each
          other, these are often called the cloud computing stack. It is easier
          to achieve your business goals by understanding what they are and how
          they differ.
        </motion.p>

        <motion.h4
          className="text-2xl md:text-3xl font-semibold mb-12 text-center"
          variants={fadeIn}
          custom={2}
        >
          Cloud Deployments
        </motion.h4>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
          {deployments.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-black rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={i + 3}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h5 className="text-xl text-[#FF0000] font-semibold mb-3">{item.title}</h5>
                <p className="text-sm text-white">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
