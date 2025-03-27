"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ConsultationFormModal from "../consultingForm";
import { useState } from "react";

const slide = {
  id: 1,
  image: "/assets/home-2025-bg.webp",
  h2: 'Giving you confidence in complex TECH projects',
  p: "Professionally optimize interdependent intellectual interoperable connect best practices. Progressively fabricate done",
  button: "EXPERT CONSULTATION",
};

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getTextAnimation = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

    if (isMobile) {
      return { y: ["20%", "0%"], opacity: [0, 1] }; // Slide from bottom to center
    } else {
      return { x: ["25%", "0%"], opacity: [0, 1] }; // Slide from right to center
    }
  };

  return (
    <div className="relative h-[400px] sm:h-[400px] md:h-[450px] lg:h-[550px] xl:h-[700px] overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 pt-10 md:pt-20">
          <motion.div
            initial={{
              x: getTextAnimation().x?.[0],
              y: getTextAnimation().y?.[0],
              opacity: 0,
            }}
            animate={{
              x: getTextAnimation().x?.[1],
              y: getTextAnimation().y?.[1],
              opacity: 1,
            }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-left max-w-2xl px-4"
          >
            <motion.h2 className="uppercase text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
              {slide.h2}
            </motion.h2>
            <motion.p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-6">
              {slide.p}
            </motion.p>
            {slide.button && (
              <div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openModal}
                  className="bg-[#FF0000] text-white my-4 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
                >
                  {slide.button}
                </motion.button>
                <ConsultationFormModal isOpen={isModalOpen} onClose={closeModal} />
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-2 sm:gap-4 md:gap-6 pt-4 sm:pt-6"
          >
            <Image
              src="/assets/badge-1.png"
              alt="badge"
              width={40}
              height={40}
              className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px]"
            />
            <Image
              src="/assets/badge-2.png"
              alt="badge"
              width={40}
              height={40}
              className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px]"
            />
            <Image
              src="/assets/badge-3.png"
              alt="badge"
              width={40}
              height={40}
              className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px]"
            />
            <Image
              src="/assets/aws-solution.jpg"
              alt="badge"
              width={40}
              height={40}
              className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px]"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;