import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaXTwitter, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ChatAndScrollButton = ({ logo }) => {
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
        className="fixed bottom-4 left-4 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300 z-50"
      >
        💬
      </button>

      {/* Chat Box Content */}
      {isChatOpen && (
        <div className="fixed bottom-20 left-4 bg-white p-4 rounded-lg shadow-lg w-64 z-50">
          <div className="text-center">
            <Image src={logo} alt="logo" width={40} height={40} className="cursor-pointer items-center" />
            <h3 className="font-semibold text-lg">Customer Service</h3>
            <p className="text-sm text-gray-600">Contact us via:</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link href="https://facebook.com" className="text-blue-600 hover:text-blue-800">
                <FaFacebook size={24} />
              </Link>
              <Link href="https://twitter.com" className="text-black hover:text-gray-800">
                <FaXTwitter size={24} />
              </Link>
              <Link href="https://linkedin.com" className="text-blue-500 hover:text-blue-700">
                <FaLinkedin size={24} />
              </Link>
            </div>
            {/* Live Chat Section */}
            <div className="mt-4">
              <textarea
                className="w-full p-2 border rounded-lg text-sm"
                placeholder="Type your message..."
              />
              <button className="mt-2 w-full bg-blue-600 text-white py-1 rounded-lg hover:bg-blue-800">
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scroll to Top Button (Right Bottom) */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300 z-50"
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