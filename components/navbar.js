// components/Navbar.js
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/public/assets/profuse.jpg";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import ChatAndScrollButton from "@/components/ChatAndScrollButton";
import ConsultationFormModal from "./consultingForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeAllDropdowns = () => setActiveDropdown(null);
  const isActive = (href) => pathname === href;
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleDropdown = (key) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  const dropdownItems = {
    service: [
      { name: "Cloud Computing", href: "/service/cloud-computing" },
      { name: "Software Development", href: "/service/software-development" },
      { name: "Generative AI", href: "/service/generative-ai" },
      { name: "AI & Cybersecurity", href: "/service/cybersecurity" },
      { name: "Data & Analysis", href: "/service/data-analysis" },
    ],
    industry: [
      { name: "Healthcare", href: "/industry/healthcare" },
      { name: "Wholesale & Retail", href: "/industry/wholesale-retail" },
      { name: "Real Estate", href: "/industry/real-estate" },
      { name: "Industrial Manufacturing", href: "/industry/industrial-manufacturing" },
      { name: "Transportation & Logistics", href: "/industry/transportation-logistics" },
      { name: "Education", href: "/industry/education" },
      { name: "Banking & Finance", href: "/industry/banking-finance" },
      { name: "Telecommunication", href: "/industry/telecommunication" },
    ],
    page: [
      { name: "Why Choose Us", href: "/page/choose-us" },
      { name: "Team Members", href: "/page/team" },
      { name: "Our Mission", href: "/page/mission" },
      { name: "Our Location", href: "/page/location" },
      { name: "FAQ", href: "/page/faq" },
      { name: "Career", href: "/page/career" },
    ],
  };

  const renderDropdownLinks = (type) => (
    <div className="pl-4">
      {dropdownItems[type].map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={`block py-2 ${
            isActive(item.href) ? "text-[#FF0000]" : "text-gray-800"
          } hover:text-[#FF0000] transition-transform duration-300 hover:translate-x-2`}
          onClick={() => setIsOpen(false)}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );

  
  const Dropdown = ({ type }) => (
    <div className="absolute mt-2 w-72 bg-white shadow-lg rounded-lg py-2">
      {dropdownItems[type].map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={`block px-4 py-2 ${
            isActive(item.href) ? "text-[#FF0000]" : "text-gray-600"
          } hover:text-[#FF0000] transition-transform duration-300 hover:translate-x-2`}
          onClick={closeAllDropdowns}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-shadow duration-300 ${
          isScrolled ? "shadow-lg bg-black text-white" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl xl:container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image src={logo} alt="logo" width={60} height={60} className="cursor-pointer" />
            </Link>
            {/* Desktop nav stays same */}
            {/* ... */}
             <div className="hidden lg:flex space-x-6 ml-6">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/aboutUs" },
              { label: "Projects", href: "/project" },
              { label: "Contact", href: "/contact" },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className={`${isActive(link.href) ? "text-[#FF0000]" : isScrolled ? "" : "text-white"} hover:text-[#FF0000] relative group`}
                onClick={closeAllDropdowns}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0000] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Dropdowns */}
            {[
              { key: "service", label: "Service" },
              { key: "industry", label: "Industry" },
              { key: "page", label: "Pages" },
            ].map((dropdown) => (
              <div key={dropdown.key} className="relative">
                <button
                  onClick={() => toggleDropdown(dropdown.key)}
                  className={`${isActive(`/${dropdown.key}`) ? "text-[#FF0000]" : isScrolled ? "" : "text-white"} hover:text-[#FF0000] flex items-center relative group`}
                >
                  {dropdown.label}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0000] transition-all duration-300 group-hover:w-full"></span>
                </button>
                {activeDropdown === dropdown.key && <Dropdown type={dropdown.key} />}
              </div>
            ))}
          </div>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            {/* Social links and modal button */}
            {/* ... */}
            <div className="flex space-x-4">
            <Link target="_blank" href="https://www.facebook.com/share/1KTQg7oDM7/?mibextid=wwXIfr" className={`${isScrolled ? "" : "text-white"} hover:text-[#FF0000]`}>
              <FaFacebook size={24} />
            </Link>
            <Link target="_blank" href="https://www.instagram.com/profuse_cc/" className={`${isScrolled ? "" : "text-white"} hover:text-[#FF0000]`}>
              <FaInstagram size={24} />
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/company/profuscc/" className={`${isScrolled ? "" : "text-white"} hover:text-[#FF0000]`}>
              <FaLinkedin size={24} />
            </Link>
          </div>
          <button
            className={`relative bg-transparent border-2 ${isScrolled ? "" : "border-white text-white"} px-4 py-2 overflow-hidden group transition-colors duration-300`}
            onClick={openModal}
          >
            <span className="relative z-10">WORK WITH US</span>
            <span className="absolute inset-y-0 left-0 w-0 bg-[#FF0000] transition-all duration-500 group-hover:w-full"></span>
          </button>
          <ConsultationFormModal isOpen={isModalOpen} onClose={closeModal} />
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolled ? "" : "text-white"} lg:hidden focus:outline-none`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden fixed inset-y-0 left-0 w-80 bg-white z-40 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
  <Link href="/">
              <Image src={logo} alt="logo" width={60} height={60} className="w-12 h-12 cursor-pointer" />
            </Link>

  <button onClick={() => setIsOpen(false)} className="text-gray-800">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
</div>

            <Link href="/" className={`block py-2 ${isActive("/") ? "text-[#FF0000]" : "text-gray-800"} hover:text-[#FF0000]`} onClick={() => setIsOpen(false)}>
              Home
            </Link>

            <button onClick={() => toggleDropdown("service")} className="w-full text-left py-2 text-black flex items-center hover:text-[#FF0000]">
              Service
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === "service" && renderDropdownLinks("service")}

            <button onClick={() => toggleDropdown("industry")} className=" text-black w-full text-left py-2 flex items-center hover:text-[#FF0000]">
              Industry
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === "industry" && renderDropdownLinks("industry")}

            <button onClick={() => toggleDropdown("page")} className="w-full text-black text-left py-2 flex items-center hover:text-[#FF0000]">
              Pages
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === "page" && renderDropdownLinks("page")}

            <Link href="/aboutUs" className={`block py-2 ${isActive("/aboutUs") ? "text-[#FF0000]" : "text-gray-800"} hover:text-[#FF0000]`} onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link href="/project" className={`block py-2 ${isActive("/project") ? "text-[#FF0000]" : "text-gray-800"} hover:text-[#FF0000]`} onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link href="/contact" className={`block py-2 ${isActive("/contact") ? "text-[#FF0000]" : "text-gray-800"} hover:text-[#FF0000]`} onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <Link target="_blank" href="https://www.facebook.com/share/1KTQg7oDM7/?mibextid=wwXIfr" className="text-gray-800 hover:text-[#FF0000]">
                <FaFacebook size={24} />
              </Link>
              <Link target="_blank" href="https://www.instagram.com/profuse_cc/" className="text-gray-800 hover:text-[#FF0000]">
                <FaInstagram size={24} />
              </Link>
              <Link target="_blank" href="https://www.linkedin.com/company/profuscc/" className="text-gray-800 hover:text-[#FF0000]">
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        )}
      </nav>
      <ChatAndScrollButton />
    </>
  );
};

export default Navbar;
