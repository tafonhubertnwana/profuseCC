import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaXTwitter, FaRobot, FaLinkedin, FaArrowUp, FaInstagramSquare } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ChatAndScrollButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: "bot", text: "Hello! How can I assist you today?" }]);
  const [input, setInput] = useState("");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };


  const handleSendMessage = () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const botMessage = { sender: "bot", text: "Thank you for your message! Our team will get back to you soon." };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };
  return (
    <>
      {/* Chat Box Button (Left Bottom) */}
      <button
        onClick={toggleChat}
        className="fixed bottom-10 left-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 z-50"
      >
        <FaRobot size={24} />
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
            <div className="mt-4 border p-2 h-40 overflow-auto text-left bg-gray-100 rounded">
              {messages.map((msg, index) => (
                <p key={index} className={msg.sender === "bot" ? "text-blue-600" : "text-black"}>
                  <strong>{msg.sender === "bot" ? "AI:" : "You:"}</strong> {msg.text}
                </p>
              ))}
            </div>
            <textarea
              className="w-full p-2 border rounded-lg text-sm mt-2"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={handleSendMessage}
              className="mt-2 w-full bg-blue-600 text-white py-1 rounded-lg hover:bg-blue-800"
            >
              Send
            </button>
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