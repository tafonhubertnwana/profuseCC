'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ReviewBanner() {
  const googleReviewUrl = 'https://g.page/r/Cde6OzY64HTSEBM/review'; // Replace with your actual review link

  return (
    <div className="bg-[#FF0000] text-white w-full py-6 px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
        
        {/* Left Side: Clickable Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href={googleReviewUrl} passHref target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/review.jpg"
              alt="Leave a Google Review"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg cursor-pointer hover:opacity-90 transition"
            />
          </Link>
        </motion.div>

        {/* Right Side: Text & Button */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-start space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold ">
            Leave us a Google review and a message!
          </h2>
          <Link
            href={googleReviewUrl}
            rel="noopener noreferrer"
            target="_blank"
            passHref
            className="bg-black  hover:bg-black text-white font-semibold px-6 py-3 rounded transition"
          >
            Leave Us a Google Review
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
