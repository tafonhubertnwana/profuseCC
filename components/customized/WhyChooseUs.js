import { motion } from "framer-motion";
import Image from "next/image";

const WhyChooseUs = ({ title, subtitle, features }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="container xl:max-w-7xl mx-auto p-2">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">{title}</h2>
          {subtitle && <p className="text-white text-lg">{subtitle}</p>}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-sm  p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#FF0000] p-3  mr-4">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={24}
                    height={24}
                    className="h-10 w-10  filter grayscale brightness-75"
                  />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-white">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;