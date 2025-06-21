"use client";

import { motion } from "framer-motion";

const characteristics = [
  {
    title: "Self-service on-demand",
    description:
      "Cloud computing services do not require human administrators. Users can provision, monitor, and manage their computing resources as they need.",
  },
  {
    title: "Broad network connectivity",
    description:
      "Computing services can be accessed over both standard networks and heterogeneous devices.",
  },
  {
    title: "Rapid elasticity",
    description:
      "Computing services must have IT resources that can scale quickly and as often as necessary. It is provided whenever the user requires it and scaled out when it is no longer required.",
  },
  {
    title: "Resource pooling",
    description:
      "IT resources (e.g., servers, storage, networks, applications) are shared among multiple applications and users. The same physical resource can serve multiple clients.",
  },
  {
    title: "Measured service",
    description:
      "Each application and user are tracked for resource usage. This helps with billing and ensures efficient use of resources.",
  },
  {
    title: "Multi-tenancy",
    description:
      "Cloud computing can support multiple tenants (users and organizations) using a shared set of resources.",
  },
  {
    title: "Virtualization",
    description:
      "Cloud providers use virtualization to abstract the underlying hardware and present it as logical resources to users.",
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

export default function CloudCharacteristics() {
  return (
    <div style={{
      backgroundImage: "url('/assets/aws-bg.webp')", // Replace with your image path
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>

      <div className="container xl:max-w-7xl mx-auto p-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#FF0000]"
            variants={fadeIn}
            custom={0}
          >
            Cloud Computing has essential characteristics.
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {characteristics.map((item, i) => (
              <motion.div
    key={item.title}
    className="group bg-black text-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
    custom={i + 1}
  >
    <h4 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#FF0000]">
      {item.title}
    </h4>
    <p className="text-sm transition-colors duration-300">
      {item.description}
    </p>
  </motion.div>

            ))}
          </div>
        </motion.div>
         <motion.button
            className="mt-8 bg-[#FF0000] text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition flex items-center justify-center mx-auto"
            whileHover={{ scale: 1.05 }}
            
            onClick={() => {
              window.location.href = '/contact'; // Replace with your desired link
            }}
          >
            Talk to an Expert →
          </motion.button>
      </div>
    </div>
  );
}
