'use client';
import { FaGoogle } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function GoogleReviewButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center my-6"
    >
      <a
        href="https://g.page/r/Cde6OzY64HTSEBM/review"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-2 bg-black text-white text-lg font-semibold "
      >
        <FaGoogle className="mr-2 text-md" />
        Leave us a Google Review
      </a>
    </motion.div>
  );
}
