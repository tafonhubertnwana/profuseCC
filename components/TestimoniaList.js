// components/TestimonialList.js
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Image from 'next/image';

export default function TestimonialList({ testimonials }) {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...carouselSettings}>
      {testimonials.map((testimonial) => (
      <div key={testimonial.$id} className="px-2 mx-auto">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="min-h-[480px] flex flex-col justify-between p-8 rounded-xl shadow-xl relative overflow-hidden bg-white"
  >
    <FaQuoteLeft className="text-4xl text-[#FF0000] absolute top-4 left-4" />

    <div className="flex-grow flex items-center justify-center text-center px-2">
      <p className="text-lg italic">{testimonial.review}</p>
    </div>

    <div className="flex flex-col items-center mt-6">
      {testimonial.imageUrl && (
        <div className="w-20 h-20 rounded-full border-4 shadow-md overflow-hidden relative">
          <Image
            src={testimonial.imageUrl}
            alt={testimonial.name}
            width={80}
            height={80}
            className="object-cover"
          />
        </div>
      )}
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">{testimonial.name}</h2>
        <p className="text-sm text-gray-600">
          {testimonial.position} at {testimonial.company}
        </p>
        <div className="flex justify-center mt-1 space-x-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-xl ${
                i < testimonial.rating ? "text-yellow-400" : "text-gray-400"
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>

    <FaQuoteRight className="text-4xl text-[#FF0000] absolute bottom-4 right-4" />
  </motion.div>
</div>


      ))}
    </Slider>
  );
}