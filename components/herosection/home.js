"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/assets/slide1.png",
    h2: "Helping you Build inner Resilience.",
    p: "Pellentesque odio aliquam vitae amet, elementum at urna facilisis purus, integer nam libero pharetra viverra et dolor tellus, eget commodo tellus tempus vitae.",
    button: "Let's work together",
  },
  {
    id: 2,
    image: "/assets/slide2.jpg",
    h2: "Helping inner Resilience.",
    p: "Elementum at urna facilisis purus, integer nam libero pharetra viverra et dolor tellus, eget commodo tellus tempus vitae.",
    buttons: ["Let's work", "Join us"],
  },
  {
    id: 3,
    image: "/assets/slide3.jpeg",
    h2: "Resilience.",
    p: "Pellentesque odio libero pharetra viverra et dolor tellus, eget commodo tellus tempus vitae.",
    button: "Together",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const getTextAnimation = (slideIndex) => {
    // Check if window is defined (to avoid SSR errors)
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

    if (isMobile) {
      // Mobile-specific animations
      switch (slideIndex) {
        case 0:
          return { x: ["100%", "0%"], opacity: [0, 1] }; // Slide from right to center
        case 1:
          return { x: ["-100%", "0%"], opacity: [0, 1] }; // Slide from left to center
        case 2:
          return { y: ["100%", "0%"], opacity: [0, 1] }; // Slide from bottom to center
        default:
          return { x: 0, opacity: 1 };
      }
    } else {
      // Desktop/tablet animations
      switch (slideIndex) {
        case 0:
          return { x: ["25%", "-20%"], opacity: [0, 1] }; // Slide from left to halfway
        case 1:
          return { x: ["25%", "-20%"], opacity: [0, 1] }; // Slide from left to halfway
        case 2:
          return { x: ["-25%", "20%"], opacity: [0, 1] }; // Slide from right to left
        default:
          return { x: 0, opacity: 1 };
      }
    }
  };

  return (
    <div className="relative h-[350px] sm:h-[350px] md:h-[350px] lg:h-[550px] xl:h-[700px] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={slides[currentSlide].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <motion.div
              initial={{
                x: getTextAnimation(currentSlide).x?.[0],
                y: getTextAnimation(currentSlide).y?.[0],
                opacity: 0,
              }}
              animate={{
                x: getTextAnimation(currentSlide).x?.[1],
                y: getTextAnimation(currentSlide).y?.[1],
                opacity: 1,
              }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-white text-center max-w-2xl px-4"
            >
              <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {slides[currentSlide].h2}
              </motion.h2>
              <motion.p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">
                {slides[currentSlide].p}
              </motion.p>
              {slides[currentSlide].button ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-lg font-semibold"
                >
                  {slides[currentSlide].button}
                </motion.button>
              ) : (
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  {slides[currentSlide].buttons?.map((btn, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-lg font-semibold"
                    >
                      {btn}
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;