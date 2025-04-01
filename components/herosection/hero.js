import Link from "next/link";
import { FaHome, FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = ({ title, description, backgroundImage, breadcrumb }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <div className="relative h-[300px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[550px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center sm:bg-contain md:bg-cover"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        {/* Overlay for better text readability */}
        {/* <div className="absolute inset-0 "></div> */}

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 pt-10 md:pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-left text-white py-2 md:py-4 max-w-2xl"
          >
            {/* Title */}
            <motion.h1
              variants={textVariants}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 md:mb-4"
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={textVariants}
              className="hidden sm:flex text-xs sm:text-sm md:text-base lg:text-lg mb-4 md:mb-6"
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Badge Images */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-start items-center gap-4 md:gap-6 pt-6"
          >
            <Image src="/assets/badge-1.png" alt="badge" width={60} height={60} className="sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px]" />
            <Image src="/assets/badge-2.png" alt="badge" width={60} height={60} className="sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px]" />
            <Image src="/assets/badge-3.png" alt="badge" width={60} height={60} className="sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px]" />
            <Image src="/assets/aws-solution.jpg" alt="badge" width={60} height={60} className="sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px]" />

          </motion.div>

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-xs sm:text-sm md:text-base pt-6 md:pt-10 flex items-center"
          >
            <Link href="/" className="hover:text-[#FF0000] flex items-center">
              <FaHome size={16} className="mr-1 sm:mr-2" /> Home
            </Link>
            <span className="mx-1 sm:mx-2">
              <FaLongArrowAltRight size={16} />
            </span>
            <span className="text-[#FF0000]">{breadcrumb}</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
