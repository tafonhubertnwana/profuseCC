// File: app/pricing/page.js
'use client';
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    name: "Cloud Computing",
    description: "Scalable infrastructure and cloud-native solutions.",
    price: "$999/mo",
    features: [
      "99.99% Uptime Guarantee",
      "Managed Cloud Services",
      "DevOps Integration",
      "24/7 Support"
    ]
  },
  {
    name: "Software Development",
    description: "Custom software tailored to your business needs.",
    price: "$1999/mo",
    features: [
      "Full-Stack Development",
      "Agile & Scrum Methodologies",
      "Web & Mobile Apps",
      "Dedicated Project Manager"
    ]
  },
  {
    name: "Generative AI",
    description: "Implement cutting-edge AI for automation & creativity.",
    price: "$1499/mo",
    features: [
      "Custom AI Model Training",
      "Chatbot & Assistant Integration",
      "Text & Image Generation",
      "Prompt Engineering Support"
    ]
  },
  {
    name: "Cybersecurity & AI",
    description: "Secure your assets using AI-powered protection.",
    price: "$1799/mo",
    features: [
      "Real-Time Threat Detection",
      "Penetration Testing",
      "AI-Powered Firewalls",
      "Compliance Assistance (GDPR, HIPAA)"
    ]
  },
  {
    name: "Data & Analysis",
    description: "Leverage data for business intelligence & insights.",
    price: "$899/mo",
    features: [
      "Custom Dashboards",
      "Data Warehousing",
      "Predictive Analytics",
      "ETL Pipelines"
    ]
  }
];

export default function PricingView() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-10 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Pricing Plans
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container xl:max-w-7xl mx-auto px-2">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: "0px 20px 30px rgba(0,0,0,0.15)"
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white border border-gray-200 hover:border-[#FF0000]  shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden">
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">{service.name}</h2>
                <p className="text-gray-600">{service.description}</p>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <p className="text-3xl font-bold text-gray-800">{service.price}</p>
                <button
                  className="w-full py-2 px-4 bg-[#FF0000] text-white font-semibold rounded-sm transition-colors duration-200"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
