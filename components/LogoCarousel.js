"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import Image from "next/image";

const LogoCarousel = () => {
  const logos = [
    "/assets/logo-1.png",
    "/assets/logo-2.png",
    "/assets/logo-3.png",
    "/assets/logo-4.png",
    "/assets/logo-5.png",
    "/assets/logo-6.png",
    "/assets/logo-7.png",
    "/assets/logo-8.png",
    "/assets/logo-9.png",
    "/assets/logo-10.png",
  ];

  return (
    <div className="py-12 ">
      <div className="container mx-auto px-4 overflow-hidden">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={40}
          slidesPerView="auto"
          loop={true}
          freeMode={true}
          speed={8000} // Adjust scroll speed (higher = slower)
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false, // Set to true to scroll left-to-right
          }}
          breakpoints={{
            320: {
              spaceBetween: 30,
            },
            640: {
              spaceBetween: 50,
            },
            1024: {
              spaceBetween: 100,
            },
          }}
          className="!overflow-visible"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="!w-auto select-none">
              <div className="flex items-center justify-center group px-4">
                <Image
                  src={logo}
                  alt={`Partner Logo ${index + 1}`}
                  width={120}
                  height={80}
                  className="w-20 h-14 md:w-28 md:h-24 object-contain opacity-80 hover:opacity-100 transition-opacity  hover:scale-110 duration-300 grayscale hover:grayscale-0"
                  loading="eager"
                  draggable="false"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LogoCarousel;