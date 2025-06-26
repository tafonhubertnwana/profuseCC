'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaArrowUp, FaInstagramSquare } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { IoIosChatbubbles } from "react-icons/io";
import LiveChat from './liveChat';

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
     <LiveChat />

      {/* Scroll to Top Button (Right Bottom) */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-10 right-4 bg-[#FF0000] text-white p-3  shadow-lg hover:bg-[#FF0000] transition-colors duration-300 z-50"
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

      
    </>
  );
};

export default ChatAndScrollButton;