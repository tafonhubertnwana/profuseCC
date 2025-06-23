"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function TelComBanner() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="container xl:max-w-7xl mx-auto p-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-black">
              Telecom IT Solutions
            </h1>
            <p className="text-gray-700 font-medium mb-6 text-lg">
              Transformations to stay alive as Market leader.
            </p>
            <Link href="/consultation">
              <button className="bg-[#FF0000] text-white py-3 px-6 rounded hover:bg-[#FF0000] transition">
                Request Free Consultation
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full"
          >
            <Image
              src="/industry/tel-23.webp" // Replace with your image path
              alt="YelCom industry"
              width={600}
              height={400}
              className="rounded-sm object-cover w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-black py-12">
        <div className="container xl:max-w-7xl mx-auto p-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Custom Telecom Solutions
            </h2>
             <h4 className="text-xl font-bold text-white mb-6">
              Custom Telecom Solutions
            </h4>
            <p className="text-white mb-4 text-lg">
Telecom solutions are more critical than ever for companies and organizations that rely on telecommunications services to stay connected. Communications service providers (CSPs) are under pressure to improve operational efficiency and deliver digital experiences that meet customer expectations. Business process services (BPS) and digital assurance services can help CSPs drive operational excellence, reduce costs, and improve customer satisfaction. Cloud services, such as digital business applications and service provider-led engineering, can help CSPs deliver the agility and flexibility of their customer's demand.            </p>
            
          </motion.div>
        </div>
      </section>
    </div>
  );
}
