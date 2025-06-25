"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const WhatWeBelieve = () => {
  return (
    <section className="relative min-h-[500px] mt-32">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/assets/change-management-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Overlay to improve text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 bg-black bg-opacity-90 w-full -mt-36 max-w-4xl mx-auto p-6 md:p-8 lg:p-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#FF0000]">
            What We Believe
          </h1>

          <p className="text-base md:text-lg text-white leading-relaxed">
            We believe a diverse, inclusive, and equitable work environment is essential to the work we do.
          </p>

          <p className="text-base md:text-lg text-white leading-relaxed">
            We continually strive to ensure our company is a place where all people feel like they belong and are respected and valued regardless of who they are, where they are from, and what experiences they've had.
          </p>

          <p className="text-base md:text-lg text-white leading-relaxed">
            Beyond being the right thing to do, it is a business imperative that is fundamental to how we bring our mission and values to life.
          </p>

          <motion.div 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }} 
            className="pt-4"
          >
            <Link 
              href="/aboutUs" 
              className="font-bold text-base md:text-lg text-[#FF0000] hover:text-[#FF0000] transition-colors"
            >
              <button className="w-full text-left">
                LEARN MORE ABOUT OUR EFFORTS
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeBelieve;