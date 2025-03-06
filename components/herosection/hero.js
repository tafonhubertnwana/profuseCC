import Link from "next/link";
import { FaHome, FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroSection = ({ title, description, backgroundImage, breadcrumb }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <div className="relative h-[350px] sm:h-[350px] md:h-[350px] lg:h-[400px] xl:h-[500px] overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0  flex flex-col justify-center pl-8 sm:pl-12 md:pl-16 lg:pl-20 xl:pl-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-left text-white max-w-2xl"
          >
            <motion.h1
              variants={textVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              {title}
            </motion.h1>
            <motion.p
              variants={textVariants}
              className="text-sm sm:text-base md:text-lg lg:text-xl mb-6"
            >
              {description}
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-sm sm:text-base flex items-center"
          >
            <Link href="/" className="hover:text-blue-400 flex items-center">
              <FaHome size={24} className="mr-2" /> Home
            </Link>
            <span className="mx-2">
              <FaLongArrowAltRight size={24} />
            </span>
            <span className="text-orange-400">{breadcrumb}</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;