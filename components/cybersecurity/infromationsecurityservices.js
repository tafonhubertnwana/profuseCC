"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Management of Detection & Response",
    img: "https://www.cisin.com/images/DatabaseCSLogo5.png",
    description:
      "The most reliable breach prevention tool is CrowdStrike. We pair it with 24/7/365 threat hunting and response services that are entirely American. We provide a customized MDR service that complies with DoD and compliance standards.",
  },
  {
    title: "Virtual CISO",
    img: "https://www.cisin.com/images/DataCSLogo1.png",
    description:
      "Your cyber security advisor may be our fictitious Chief Information Security Officer (vCISO). We deliver a specialist understanding of cyber security services for small businesses, assisting you in developing a strong program and lowering risk. You'll have a committed",
  },
  {
    title: "Penetration Testing",
    img: "https://www.cisin.com/images/dataAnalyticsCompanyLogo4.png",
    description:
      "Our penetration testing team can detect cybersecurity weaknesses before intruders infiltrate your computer network. We will find weaknesses in your network and within applications.",
  },
  {
    title: "Cyber Security Consulting",
    img: "https://www.cisin.com/images/DataCSLogo3.png",
    description:
      "We can assist your business because we have years of experience in cyber security consultancy. Some of the biggest companies in the world have hired us to work on their projects. You can use this knowledge to help with your tasks.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

export default function InformationSecurityServices() {
  return (
    <>
      <div className="container xl:max-w-6xl mx-auto my-8 p-4">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Information Security Services
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-700"
        >
          Both short-term and long-term services can benefit from our security
          program solutions. Whether you need an ongoing virtual CISO engagement
          or an annual penetration exam, our team of cyber security professionals
          can assist you.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={service.img}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
                <h4 className="text-xl font-semibold">{service.title}</h4>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
