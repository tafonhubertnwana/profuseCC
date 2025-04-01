"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import Image from "next/image";
import logo from "@/public/assets/profuse.jpg";
import { FaFacebook, FaLinkedin, FaArrowUp, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import ChatAndScrollButton from "@/components/ChatAndScrollButton";
import ConsultationFormModal from "./consultingForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [pageOpen, setPageOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  

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
        isScrolled ? "shadow-lg bg-black text-white" : "bg-transparent "
      }`}
    >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image src={logo} alt="logo" width={60} height={60} className="cursor-pointer" />
            </Link>
            <div className="hidden lg:flex space-x-6 ml-6">
              <Link
                href="/"
                className={`${
                  isActive("/") ? "text-[#FF0000]" : isScrolled ? "" : "text-white"
                } hover:text-[#FF0000] relative group`}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0000] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                  className={`${
                    isActive("/services") ? "text-[#FF0000]" : isScrolled ? "" : "text-white"
                  } hover:text-[#FF0000] flex items-center relative group`}
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
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0000] transition-all duration-300 group-hover:w-full"></span>
                </button>
                {isServiceDropdownOpen && (
                  <div className="absolute mt-2 w-72 bg-white shadow-lg rounded-lg py-2">
                    {[
                      { name: "AWS Cloud Service", href: "/service/aws-cloud" },
                      { name: "Software Development", href: "/service/software-development" },
                      { name: "Generative AI", href: "/service/generative-ai" },
                      { name: "Data & Analysis", href: "/service/data-analysis" },
                    ].map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className={`block px-4 py-2 ${
                          isActive(service.href) ? "text-[#FF0000]" : "text-gray-600"
                        } hover:text-[#FF0000] transition-transform duration-300 hover:translate-x-2`}
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
                  isActive("/aboutUs") ? "text-[#FF0000]" : isScrolled ? "" : "text-white"
                } hover:text-[#FF0000] relative group`}
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0000] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/project"
                className={`${
                  isActive("/project") ? "text-[#FF0000]" : isScrolled ? "" : "text-white"
                } hover:text-[#FF0000] relative group`}
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0000] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <div className="relative">
                <button
                  onClick={() => setPageOpen(!pageOpen)}
                  className={`${
                    isActive("/page") ? "text-[#FF0000]" : isScrolled ? "" : "text-white"
                  } hover:text-[#FF0000] flex items-center relative group`}
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
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0000] transition-all duration-300 group-hover:w-full"></span>
                </button>
                {pageOpen && (
                  <div className="absolute mt-2 w-72 bg-white shadow-lg rounded-lg py-2 transform transition-transform duration-300 hover:translate-x-2">
                    {[
                      { name: "Why Choose Us", href: "/page/choose-us" },
                      { name: "Team Members", href: "/page/team" },
                      { name: "Our Mission", href: "/page/mission" },
                      { name: "Our Location", href: "/page/location" },
                      { name: "FAQ", href: "/page/faq" },
                      { name: "Career", href: "/page/career" },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className={`block px-4 py-2 ${
                          isActive(item.href) ? "text-[#FF0000]" : "text-gray-600"
                        } hover:text-[#FF0000] transition-transform duration-300 hover:translate-x-2`}
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
                  isActive("/contact") ? "text-[#FF0000]" : isScrolled ? "" : "text-white"
                } hover:text-[#FF0000] relative group`}
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0000] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/share/1KTQg7oDM7/?mibextid=wwXIfr" className={`${isScrolled ? "" : "text-white"} hover:text-[#FF0000]`}>
                <FaFacebook size={24} />
              </Link>
              <Link href="https://instagram.com" className={`${isScrolled ? "" : "text-white"} hover:text-[#FF0000]`}>
                <FaInstagram size={24} />
              </Link>
              <Link href="https://linkedin.com" className={`${isScrolled ? "" : "text-white"} hover:text-[#FF0000]`}>
                <FaLinkedin size={24} />
              </Link>
            </div>
            <div>
              <button
                className={`relative bg-transparent border-2 ${
                  isScrolled ? " " : "border-white text-white"
                } px-4 py-2 overflow-hidden group transition-colors duration-300`}
                onClick={openModal}
              >
                <span className="relative z-10">WORK WITH US</span>
                <span className="absolute inset-y-0 left-0 w-0 bg-[#FF0000] transition-all duration-500 group-hover:w-full"></span>
              </button>

              <ConsultationFormModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${isScrolled ? "" : "text-white"} lg:hidden focus:outline-none`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-y-0 left-0 w-80 bg-white transform ${
            isOpen ? "translate-x-0 " : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <Link href="/">
              <Image src={logo} alt="logo" width={50} height={50} className="cursor-pointer" />
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
              className={`block py-2 ${isActive("/") ? "text-[#FF0000]" : "text-gray-800"} hover:text-[#FF0000]`}
            >
              Home
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                className={`w-full text-left py-2 ${
                  isActive("/tech-services") ? "text-[#FF0000]" : "text-gray-800"
                } hover:text-[#FF0000] flex items-center`}
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
                    { name: "Software Development", href: "/service/software-development" },
                    { name: "Generative AI", href: "/service/generative-ai" },
                    { name: "Data & Analysis", href: "/service/data-analysis" },
                  ].map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className={`block py-2 ${
                        isActive(service.href) ? "text-[#FF0000]" : "text-gray-800"
                      } hover:text-[#FF0000] transition-transform duration-300 hover:translate-x-2`}
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
                isActive("/aboutUs") ? "text-[#FF0000]" : "text-gray-800"
              } hover:text-[#FF0000]`}
            >
              About Us
            </Link>
            <Link
              href="/project"
              className={`block py-2 ${
                isActive("/project") ? "text-[#FF0000]" : "text-gray-800"
              } hover:text-[#FF0000]`}
            >
              Projects
            </Link>
            <div className="relative">
              <button
                onClick={() => setPageOpen(!pageOpen)}
                className={`w-full text-left py-2 ${
                  isActive("/page") ? "text-[#FF0000]" : "text-gray-800"
                } hover:text-[#FF0000] flex items-center`}
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
              </button>
              {pageOpen && (
                <div className="pl-4">
                  {[
                    { name: "Why Choose Us", href: "/page/choose-us" },
                    { name: "Team Members", href: "/page/team" },
                    { name: "Our Mission", href: "/page/mission" },
                    { name: "Our Location", href: "/page/location" },
                    { name: "FAQ", href: "/page/faq" },
                    { name: "Career", href: "/page/career" },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className={`block py-2 ${
                        isActive(item.href) ? "text-[#FF0000]" : "text-gray-800"
                      } hover:text-[#FF0000] transition-transform duration-300 hover:translate-x-2`}
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
                isActive("/contact") ? "text-[#FF0000]" : "text-gray-800"
              } hover:text-[#FF0000]`}
            >
              Contact
            </Link>
            {/* Add "WORK WITH US" Button in Mobile Menu */}
            {/* <div>
            <button
        className={`relative bg-transparent border-2 ${
          isScrolled ? "border-black   text-black" : "border-black text-black"
        } px-4 py-2 overflow-hidden group transition-colors duration-300`}
      
      >
        <span className="relative z-10">WORK WITH US</span>
        <span className="absolute inset-y-0 left-0 w-0 bg-[#FF0000] transition-all duration-500 group-hover:w-full"></span>
      </button>

     
    </div> */}
            {/* Add Social Links in Mobile Menu */}
            <div className="flex space-x-4 mt-4">
              <Link href="https://www.facebook.com/share/1KTQg7oDM7/?mibextid=wwXIfr" className="text-gray-800 hover:text-[#FF0000]">
                <FaFacebook size={24} />
              </Link>
              <Link href="https://instagram.com" className="text-gray-800 hover:text-[#FF0000]">
                <FaInstagram size={24} />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-800 hover:text-[#FF0000]">
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
        {/* Overlay */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          />
        )}
      </nav>
      <div>

      <ChatAndScrollButton />
      </div>
    </>
  );
};

export default Navbar;