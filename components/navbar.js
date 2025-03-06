"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import Image from "next/image";
import logo from "@/public/assets/logo.png";
import { FaFacebook, FaLinkedin, FaArrowUp, FaInstagram} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [pageOpen, setPageOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => pathname === href; // Helper function to check if the link is active

  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
        <nav
          className={`fixed w-full z-50 transition-shadow duration-300 ${
            isScrolled ? "shadow-lg bg-white" : "bg-transparent"
          }`}
        >
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/">
                <Image src={logo} alt="logo" width={40} height={40} className="cursor-pointer" />
              </Link>
              <div className="hidden md:flex space-x-6 ml-6">
                <Link
                  href="/"
                  className={`${
                    isActive("/") ? "text-orange-500" : isScrolled ? "text-black" : "text-white"
                  } hover:text-orange-500 relative group`}
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <div className="relative">
                  <button
                    onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                    className={`${
                      isActive("/services") ? "text-orange-500" : isScrolled ? "text-black" : "text-white"
                    } hover:text-orange-500 flex items-center relative group`}
                  >
                    Service
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                  {isServiceDropdownOpen && (
                    <div className="absolute mt-2 w-72 bg-white shadow-lg rounded-lg py-2">
                      {[
                        { name: "AWS Cloud Service", href: "/service/aws-cloud" },
                        { name: "Web Development", href: "/service/web-development" },
                        { name: "Data & AI", href: "/service/data-ai" },
                        { name: "SEO & Security", href: "/service/seo-security" },
                      ].map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className={`block px-4 py-2 ${
                            isActive(service.href) ? "text-orange-500" : "text-gray-600"
                          } hover:text-orange-500 transition-transform duration-300 hover:translate-x-2`}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link
                  href="/aboutUs"
                  className={`${
                    isActive("/aboutUs") ? "text-orange-500" : isScrolled ? "text-black" : "text-white"
                  } hover:text-orange-500 relative group`}
                >
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/project"
                  className={`${
                    isActive("/project") ? "text-orange-500" : isScrolled ? "text-black" : "text-white"
                  } hover:text-orange-500 relative group`}
                >
                  Projects
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              
                <div className="relative">
                  <button
                    onClick={() => setPageOpen(!pageOpen)}
                    className={`${
                      isActive("/page") ? "text-orange-500" : isScrolled ? "text-black" : "text-white"
                    } hover:text-orange-500 flex items-center relative group`}
                  >
                    Pages
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                  {pageOpen && (
                    <div className="absolute mt-2 w-72 bg-white shadow-lg rounded-lg py-2 transform transition-transform duration-300 hover:translate-x-2">
                      {[
                        { name: "Why Choose Us", href: "/page/choose-us" },
                        { name: "Team Members", href: "/page/team" },
                        { name: "Our Mission", href: "/page/mission" },
                        { name: "Pricing Plan", href: "/page/pricing" },
                        { name: "Our Location", href: "/page/location" },
                        { name: "FAQ", href: "/page/faq" },
                        { name: "Career", href: "/page/career" },
                        
                      ].map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className={`block px-4 py-2 ${
                            isActive(item.href) ? "text-orange-500" : "text-gray-600"
                          } hover:text-orange-500 transition-transform duration-300 hover:translate-x-2`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link
                  href="/contact"
                  className={`${
                    isActive("/contact") ? "text-orange-500" : isScrolled ? "text-black" : "text-white"
                  } hover:text-orange-500 relative group`}
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex space-x-4">
                <Link href="https://facebook.com" className={`${isScrolled ? "text-black" : "text-white"} hover:text-orange-500`}>
                  <FaFacebook size={24} />
                </Link>
                <Link href="https://instagram.com"  className={`${isScrolled ? "text-black" : "text-white"} hover:text-orange-500`}>
                <FaInstagram size={24} />
              </Link>
                <Link href="https://linkedin.com" className={`${isScrolled ? "text-black" : "text-white"} hover:text-orange-500`}>
                  <FaLinkedin size={24} />
                </Link>
              </div>
              <button
                className={`relative bg-transparent border-2 ${
                  isScrolled ? "border-black text-black" : "border-white text-white"
                } px-4 py-2 overflow-hidden group transition-colors duration-300`}
              >
                <span className="relative z-10">WORK WITH US</span>
                <span className="absolute inset-y-0 left-0 w-0 bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
              </button>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolled ? "text-black" : "text-white"} md:hidden text-white focus:outline-none`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          {/* Mobile Menu */}
          <div
            className={`md:hidden fixed inset-y-0 left-0 w-64 bg-white transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out z-50`}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <Link href="/">
                <Image src={logo} alt="logo" width={40} height={40} className="cursor-pointer" />
              </Link>
              <button onClick={() => setIsOpen(false)} className="text-gray-800 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <Link
                href="/"
                className={`block py-2 ${isActive("/") ? "text-orange-500" : "text-gray-800"} hover:text-orange-500`}
              >
                Home
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                  className={`w-full text-left py-2 ${
                    isActive("/tech-services") ? "text-orange-500" : "text-gray-800"
                  } hover:text-orange-500 flex items-center`}
                >
                  Service
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServiceDropdownOpen && (
                  <div className="pl-4">
                    {[
                       { name: "AWS Cloud Service", href: "/service/aws-cloud" },
                       { name: "Web Development", href: "/service/web-development" },
                       { name: "Data & AI", href: "/service/data-ai" },
                       { name: "SEO & Security", href: "/service/seo-security" },
                    ].map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className={`block py-2 ${
                          isActive(service.href) ? "text-orange-500" : "text-gray-800"
                        } hover:text-orange-500 transition-transform duration-300 hover:translate-x-2`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/aboutUs"
                className={`block py-2 ${
                  isActive("/aboutUs") ? "text-orange-500" : "text-gray-800"
                } hover:text-orange-500`}
              >
                About Us
              </Link>
              <Link
                href="/project"
                className={`block py-2 ${
                  isActive("/project") ? "text-orange-500" : "text-gray-800"
                } hover:text-orange-500`}
              >
                Projects
              </Link>
              
              <div className="relative">
                <button
                  onClick={() => setPageOpen(!pageOpen)}
                  className={` ${
                    isActive("/page") ?  "text-orange-500" : isScrolled ? "text-black" : "text-white"
                    } hover:text-orange-500 flex items-center relative group`}
                >
                  page
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {pageOpen && (
                  <div className="pl-4">
                    {[
                       { name: "Why Choose Us", href: "/page/choose-us" },
                       { name: "Team Members", href: "/page/team" },
                       { name: "Our Mission", href: "/page/mission" },
                       { name: "Pricing Plan", href: "/page/pricing" },
                       { name: "Our Location", href: "/page/location" },
                       { name: "FAQ", href: "/page/faq" },
                       { name: "Career", href: "/page/career" },
                      
                    ].map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className={`block px-4 py-2 ${
                          isActive(item.href) ? "text-orange-500" : "text-gray-800"
                        } hover:text-orange-500 transition-transform duration-300 hover:translate-x-2`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/contact"
                className={`block py-2 ${
                  isActive("/contact") ? "text-orange-500" : "text-gray-800"
                } hover:text-orange-500`}
              >
                Contact
              </Link>
            </div>
          </div>
          {/* Overlay */}
          {isOpen && (
            <div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            />
          )}
        </nav>
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

export default Navbar;