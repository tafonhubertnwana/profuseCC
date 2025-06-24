// app/components/hero/HeroSection.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ConsultationFormModal from "../consultingForm";
import { useState } from "react";

const slide = {
  id: 1,
  image: "/assets/home-2025-bg.webp",
  h2: "Giving you confidence in complex AI & cloud-native transformations",
  p: "We build ProfuseCC’s scalable AI cloud platforms with secure, interoperable architectures—transforming complexity into seamless intelligence.",
  button: "EXPERT CONSULTATION",
};

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getTextAnimation = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
    return isMobile
      ? { y: ["20%", "0%"], opacity: [0, 1] }
      : { x: ["25%", "0%"], opacity: [0, 1] };
  };

  return (
    <section className="relative overflow-hidden h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 pt-16 sm:pt-24">
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
            className="text-left max-w-5xl"
          >
            <motion.h2 className="uppercase text-white font-bold leading-tight text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4">
              {slide.h2}
            </motion.h2>
            <motion.p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 max-w-4xl">
              {slide.p}
            </motion.p>
            {slide.button && (
              <div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openModal}
                  className="bg-[#FF0000] text-white font-semibold px-6 py-3 text-sm sm:text-base rounded-sm shadow-lg"
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
            className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-10"
          >
            {["badge-1.png", "badge-2.png", "badge-3.png", "aws-solution.jpg"].map(
              (src, idx) => (
                <Image
                  key={idx}
                  src={`/assets/${src}`}
                  alt="badge"
                  width={100}
                  height={100}
                  className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]"
                />
              )
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
