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
    <section className="bg-gray-100 py-12 px-6">
      {/* Heading and Description */}
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-2 gap-10">

          <motion.div>

            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 text-left "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              ProfuseCC IS YOUR TRUSTED PARTNER WITHIN THE TECH ECOSYSTEM
            </motion.h2>
          </motion.div>
          <motion.div>
            
            <motion.p
              className=" text-gray-600 text-sm md:text-base text-justify"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              ProfuseCC is a global system integrator and a top-tier SAP consultancy
              dedicated to delivering professional, customer-centric solutions and
              services. Founded in 2003 on the principles of technological
              excellence and personalized service, ProfuseCC has established itself as
              a trusted partner in the digital transformation journey of Fortune 500
              clients worldwide.
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
        index !== stats.length - 1 ? "border-r border-orange-300" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      <span className="text-3xl md:text-4xl font-bold text-orange-600">
        {stat.value}
      </span>
      <span className="text-gray-600 text-sm md:text-base">{stat.label}</span>
    </motion.div>
  ))}
</div>


    </section>
  );
};

export default StatsSection;
