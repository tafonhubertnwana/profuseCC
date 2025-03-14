"use client"; // Required for Swiper to work in Next.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

const LogoCarousel = () => {
  const logos = [
    "/assets/log1.png",
    "/assets/log2.png",
    "/assets/log3.png",
    "/assets/log4.png",
    "/assets/log5.png",
    "/assets/log6.png",
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // Pause autoplay on hover
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center group">
                <Image
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  width={50}
                  height={50}
                  className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain filter grayscale transition-all duration-300 group-hover:grayscale-0"
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