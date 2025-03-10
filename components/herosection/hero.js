import Link from "next/link";
import { FaHome, FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroSection = ({ title, description, backgroundImage, breadcrumb }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-left text-white py-4 max-w-2xl"
          >
            {/* Title */}
            <motion.h1
              variants={textVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4"
            >
              {title}
            </motion.h1>

            
            <motion.p
              variants={textVariants}
              className="hidden md:flex text-sm sm:text-base md:text-lg lg:text-xl mb-6"
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-sm sm:text-base flex items-center"
          >
            <Link href="/" className="hover:text-blue-400 flex items-center">
              <FaHome size={20} className="mr-2" /> Home
            </Link>
            <span className="mx-2">
              <FaLongArrowAltRight size={20} />
            </span>
            <span className="text-orange-400">{breadcrumb}</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;