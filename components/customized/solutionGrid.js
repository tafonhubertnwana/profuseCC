import { motion } from "framer-motion";
import Image from "next/image";

const SolutionsGrid = ({ title, items, columns = 3 }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="  py-6 px-4 sm:px-6 lg:px-8">
      <div className="container xl:max-w-7xl mx-auto p-4">
        <motion.h1 
          className="text-4xl font-bold text-left text-black mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>

        <motion.div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-8  `}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="shadow-lg overflow-hidden  p-6 hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="relative w-12 h-12">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover filter grayscale brightness-75"
                  priority={index < 3} // Prioritize loading first 3 images
                />
              </div>
              <div className="p-2">
                <h3 className="text-md font-semibold text-[#FF0000] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-justified">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SolutionsGrid;