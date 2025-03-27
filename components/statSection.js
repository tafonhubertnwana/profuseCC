"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "950+", label: "WORKS COMPLETED" },
  { value: '100+', label: 'HAPPY CUSTOMERS' },
  { value: "99+", label: "EXPERT MEMBERS" },
  { value: '100%', label: 'SATISFACTION RATES' },
];

const StatsSection = () => {
  return (
    <section className="bg-black py-12 px-6">
      {/* Heading and Description */}
      <div className="container xl:max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <motion.div>

            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white text-left "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              ProfuseCC IS YOUR TRUSTED PARTNER WITHIN THE TECH ECOSYSTEM
            </motion.h2>
          </motion.div>
          <motion.div>
            
            <motion.p
              className=" text-white text-sm md:text-base text-justify"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              ProfuseCC is an artificial intelligence cloud startup focused on delivering innovative AI-driven solutions. Our goal is to empower businesses with cutting-edge cloud technologies and intelligent automation to enhance efficiency and drive growth in a competitive landscape
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mt-10 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
  {stats.map((stat, index) => (
    <motion.div
      key={index}
      className={`flex flex-col items-center relative ${
        index !== stats.length - 1 ? "border-r border-[#FF0000] " : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      <span className="text-3xl md:text-4xl font-bold text-[#FF0000] ">
        {stat.value}
      </span>
      <span className="text-white text-sm md:text-base">{stat.label}</span>
    </motion.div>
  ))}
</div>


    </section>
  );
};

export default StatsSection;
