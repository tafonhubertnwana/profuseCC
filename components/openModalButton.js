'use client';

import { motion } from 'framer-motion';

export default function OpenModalButton({ onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300"
    >
      Request Consultation
    </motion.button>
  );
}