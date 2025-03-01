'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { IoLocation } from "react-icons/io5";

const locations = [
  {
    country: 'Cameroon',
    address: 'Bepanda-Ambiance, Douala Cameroon',
    flag: '/assets/cameroon.jpg',
  },
  {
    country: 'United States',
    address: '123 Houston, Texas, State 12345, USA',
    flag: '/assets/usa.png',
  },
];

export default function CountryCards() {
  return (
    <div className="container mx-auto py-10 mt-10 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-4">
        {locations.map((location, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center h-[400px] w-full max-w-sm mx-auto relative"
          >
            {/* Image Container */}
            <div className="flex justify-center relative -mt-14">
              <div
                className={`w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200 relative z-10 ${
                  index === 0 ? 'w-48 h-48' : '' // Adjust size for Cameroon
                }`}
              >
                <Image
                  src={location.flag}
                  alt={location.country}
                  width={index === 0 ? 256 : 200} // Adjust width for Cameroon
                  height={index === 0 ? 256 : 200} // Adjust height for Cameroon
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Animated Dotted Line */}
              <div
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                  index === 0 ? 'w-52 h-52' : 'w-52 h-52' // Adjust size for Cameroon
                } rounded-full border-2 border-dashed border-orange-300 animate-spin-slow`}
              ></div>
            </div>

            <h3 className="text-xl font-semibold mt-4">{location.country}</h3>
            <p className="text-gray-500 mt-2">{location.address}</p>
            <div className="mt-4 flex justify-center items-center relative">
              {/* Left Line */}
              <div className="absolute left-0 right-1/2 h-1 bg-gray-300 transform -translate-y-1/2 top-1/2"></div>
              {/* Right Line */}
              <div className="absolute right-0 left-1/2 h-1 bg-gray-300 transform -translate-y-1/2 top-1/2"></div>
              {/* Icon */}
              <span className="text-blue-500 text-2xl relative z-10">
                <IoLocation size={30} />
              </span>
            </div>
            <button className="mt-4 w-full py-2 bg-transparent border rounded-full hover:bg-orange-500 hover:text-white transition">
              Help Center
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}