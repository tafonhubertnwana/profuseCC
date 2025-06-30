"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const benefits = [
  {
    icon: "/industry/cloud-1.png",
    title: "Save More",
    description:
      "With the aid of Cloud application development, organizations can minimize the use of giant data storage machines and cut down IT investments and connected servers.",
  },
  {
    icon: "/industry/cloud-2.png",
    title: "Enhanced Collaboration",
    description:
      "Cloud applications are attuned to high collaborative standards and allow connected users to share information easily.",
  },
  {
    icon: "/industry/cloud-3.png",
    title: "Easy to Migrate",
    description:
      "The running projects and applications can be easily migrated to the cloud servers to handle the data better. This helps deliver a flexible ecosystem to process and store the data more conveniently.",
  },
  {
    icon: "/industry/cloud-4.png",
    title: "Reduced Cost Structure",
    description:
      "The adoption of cloud technology vanishes the requirement for buying the equipment to process the data and also saves on the additional cost of building separate data centers.",
  },
  {
    icon: "/industry/cloud-5.png",
    title: "Delivers Improvised Mobility",
    description:
      "The Cloud integration services allow users to fetch data and information from anywhere in the world via smartphones and tablets.",
  },
  {
    icon: "/industry/cloud-6.png",
    title: "Environmentally Safe",
    description:
      "Since cloud computing services cut down the requirements of data centers and huge devices, it helps lessen the heat released on the environment.",
  },
];

const providers = [
  {
    icon: "/industry/cloud-7.png",
    title: "Amazon Web Services",
    description:
      "AWS is the most recognized cloud provider, offering a wide landscape of enterprise-grade solutions. We specialize in building AWS-based infrastructure that suits your business.",
  },
  {
    icon: "/industry/cloud-8.png",
    title: "Azure",
    description:
      "Microsoft Azure enables efficient data processing at low cost. Our certified Azure developers help build solutions that align with your business goals.",
  },
  {
    icon: "/industry/cloud-9.png",
    title: "Google Cloud Platform",
    description:
      "GCP offers integrated storage and live data fetching capabilities using VMs, disks, and centralized infrastructure in Google data centers.",
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

export default function CloudServices() {
  return (
    <div className="container xl:max-w-7xl mx-auto p-4">
      {/* Section 1: Why Cloud Services */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-3xl md:text-4xl font-bold mb-4"
          variants={fadeIn}
          custom={0}
        >
          Why Adopting Cloud Services Is The Best Choice For Enterprises?
        </motion.h3>
        <motion.p className="text-lg text-gray-700 mb-10" variants={fadeIn} custom={1}>
          Our sophisticated cloud computing solutions allow you to reserve an impressive capital that otherwise would have been invested into building massive storage channels. Cloud software solutions lay a safeguarding ecosystem for processing, storing, and accessing bulk data at a cost-effective price.
        </motion.p>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
  {benefits.map((item, i) => (
    <motion.div
      key={i}
      className="group p-6 border border-gray-200 hover:shadow-lg hover:scale-[1.03] transition-all duration-300 ease-in-out rounded-sm bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      custom={i}
    >
      <img
        src={item.icon}
        alt={item.title}
        width={64}
        height={64}
        className="mb-4 filter grayscale brightness-75 transition-all duration-300  "
      />
      <h4 className="text-xl text-[#FF0000] font-semibold mb-2">{item.title}</h4>
      <p className="text-gray-700 text-sm">{item.description}</p>
    </motion.div>
  ))}
</div>

      </motion.div>

      {/* Section 2: Providers */}
      <motion.div
        className="mt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-3xl text-[#FF0000] md:text-4xl font-bold mb-4"
          variants={fadeIn}
          custom={0}
        >
          Let's Unravel The Impact Of The Most Remarkable Cloud Service Providers
        </motion.h3>
        <motion.p className="text-lg text-gray-700 mb-10" variants={fadeIn} custom={1}>
          We engineer cloud-powered solutions aligned with AWS, Azure, Google Cloud Platform &amp; Oracle Cloud paradigms that are highly impactful in terms of performance and quality standards.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 my-12">
  {providers.map((provider, i) => (
    <motion.div
      key={i}
      className="p-6 border border-gray-200 transition duration-300 hover:bg-red-600 hover:text-white group"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      custom={i}
    >
      <img
        src={provider.icon}
        alt={provider.title}
        width={64}
        height={64}
        className="mb-4 filter grayscale brightness-75 transition duration-300 group-hover:invert group-hover:brightness-0"
      />
      <h4 className="text-xl font-semibold mb-2">{provider.title}</h4>
      <p className="text-sm text-gray-700 group-hover:text-white">{provider.description}</p>
    </motion.div>
  ))}
</div>

      </motion.div>
    </div>
  );
}
