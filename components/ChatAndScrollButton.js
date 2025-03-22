import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaArrowUp, FaInstagramSquare } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { IoIosChatbubbles } from "react-icons/io";

const ChatAndScrollButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };



  return (
    <>
      {/* Chat Box Button (Left Bottom) */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-10 left-4 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-800 z-50"
      >
        <IoIosChatbubbles  size={24} />
      </button>

      {/* Chat Box Content */}
      {isChatOpen && (
        <div className="fixed bottom-20 left-4 bg-white p-4 rounded-lg shadow-lg w-64 z-50">
          <div className="text-center">
            <Image src="/assets/logo.png" alt="logo" width={40} height={40} className="mx-auto" />
            <h3 className="font-semibold text-lg">Customer Service</h3>
            <p className="text-sm text-gray-600">Contact us via:</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link href="https://facebook.com" className="text-blue-600 hover:text-blue-800">
                <FaFacebook size={24} />
              </Link>
              <Link href="https://instagram.com" className="text-black hover:text-gray-800">
                <FaInstagramSquare size={24} />
              </Link>
              <Link href="https://linkedin.com" className="text-blue-500 hover:text-blue-700">
                <FaLinkedin size={24} />
              </Link>
            </div>
           
          </div>
        </div>
      )}

      {/* Scroll to Top Button (Right Bottom) */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-10 right-4 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors duration-300 z-50"
        animate={{
          y: [0, -10, 0], // Moves up and down
        }}
        transition={{
          duration: 2, // Slower animation (2 seconds per cycle)
          repeat: Infinity, // Loops forever
          ease: "easeInOut",
        }}
      >
        <FaArrowUp size={20} />
      </motion.button>

      {/* Overlay for Chat Box */}
      {isChatOpen && (
        <div
          onClick={() => setIsChatOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}
    </>
  );
};

export default ChatAndScrollButton;