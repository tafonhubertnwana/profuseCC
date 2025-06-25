// components/HeroSection.jsx
"use client";
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
    <section className="relative h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-white max-w-4xl"
        >
          <motion.h1
            variants={textVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="hidden sm:block text-sm sm:text-base md:text-lg lg:text-xl mb-6"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-6 pt-4"
        >
          {["badge-1.png", "badge-2.png", "badge-3.png", "aws-solution.jpg"].map((badge, i) => (
            <Image
              key={i}
              src={`/assets/${badge}`}
              alt="badge"
              width={50}
              height={50}
              className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]"
            />
          ))}
        </motion.div>

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-xs sm:text-sm md:text-base mt-6 flex items-center"
        >
          <Link href="/" className="hover:text-[#FF0000] flex items-center">
            <FaHome size={16} className="mr-2" /> Home
          </Link>
          <FaLongArrowAltRight size={16} className="mx-2" />
          <span className="text-[#FF0000]">{breadcrumb}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
