"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const solutions = [
  {
    title: "WEB PORTALS",
    description:
      "Our experts create custom web portals that cater to your unique business requirements. With an engaging and user-friendly interface, our portals offer seamless navigation and intuitive user experiences. Whether you need an E-commerce platform, customer portal, or any other web-based solution, we have the expertise to deliver exceptional results that align with your specific needs and drive your business forward.",
    image: "/assets/web-portals.webp",
  },
  {
    title: "PWA",
    description:
      "ProfuseCC specializes in cutting-edge Progressive Web App (PWA) development, seamlessly blending web and mobile capabilities. Our experience empowers businesses to enhance user engagement, increase conversions, and provide offline capabilities through the power of PWAs.",
    image: "/assets/pwa.webp",
  },
  {
    title: "SAAS PLATFORMS",
    description:
      "We create scalable Software as a Service (SaaS) platforms, enabling businesses to deliver powerful and flexible cloud-based solutions that can be accessed anytime, anywhere. From concept to deployment, we work closely with our clients to tailor SaaS platforms that meet their unique requirements and drive business growth.",
    image: "/assets/saas-platform.webp",
  },
  {
    title: "ENTERPRISE-LEVEL SOLUTIONS",
    description:
      "With a proven track record of serving enterprises, we possess a deep understanding of the challenges they encounter, particularly in managing and leveraging data effectively. By partnering with us, enterprises gain access to our expertise and benefit from tailored solutions that propel their data-driven initiatives forward.",
    image: "/assets/enterprise-level-solutions.webp",
  },
];

export default function Solutions() {

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };
  return (
    <>
    
      <section className="py-16 px-6 container xl:max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10">
      SOLUTIONS WE DELIVER
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {solutions.map((solution, index) => (
        <motion.div
          key={index}
          className="relative rounded-lg overflow-hidden shadow-lg flex justify-between cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src={solution.image}
            alt={solution.title}
            width={500}
            height={100}
            className="object-cover"
          />
          <div className="relative bg-black  p-6 text-white flex flex-col">
            <h3 className="text-lg font-bold">{solution.title}</h3>
            <p className="text-sm mt-2">{solution.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
  
    </>
  );
}
