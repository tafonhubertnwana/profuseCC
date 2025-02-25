import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaLocationDot, FaPhone, FaXTwitter , FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline Section */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/assets/logo.png" // Replace with your logo path
                alt="Company Logo" 
                className="h-12 w-12 mr-2"
              />
              <h2 className="text-xl font-semibold">Company Name</h2>
            </div>
            <p className="text-gray-400">
              Your tagline goes here. A short description of your company.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="https://facebook.com" className="text-blue-500 hover:text-white">
                <FaFacebook size={24} />
              </Link>
              <Link href="https://instagram.com" className="text-red-400 hover:text-white">
                <FaInstagram size={24} />
              </Link>
              
              <Link href="https://twitter.com" className="text-white hover:text-white">
                <FaXTwitter  size={24} />
              </Link>
              <Link href="https://linkedin.com" className="text-blue-300 hover:text-white">
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link href="/service-1" className="hover:text-white">Service 1</Link>
              </li>
              <li className="mb-2">
                <Link href="/service-2" className="hover:text-white">Service 2</Link>
              </li>
              <li className="mb-2">
                <Link href="/service-3" className="hover:text-white">Service 3</Link>
              </li>
              <li className="mb-2">
                <Link href="/service-4" className="hover:text-white">Service 4</Link>
              </li>
            </ul>
          </div>
          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link href="/about" className="hover:text-white">About Us</Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="hover:text-white">Services</Link>
              </li>
              <li className="mb-2">
                <Link href="/project" className="hover:text-white">Project</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-white">Contact</Link>
              </li>
              <li className="mb-2">
                <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="text-gray-400">
              <li className="mb-2 flex items-center">
                <FaLocationDot className="mr-2" />
                <span>123 Houston, Texas, State 12345, USA</span>
              </li>
              <li className="mb-2 flex items-center">
                <FaPhone className="mr-2" />
                <span>+281-942-0577</span>
              </li>
              <li className="mb-2 flex items-center">
                <FaEnvelope className="mr-2" />
                <span>info@profusecc.com</span>
              </li>
            </ul>
          </div>

          {/* Services Section */}
        </div>

        {/* Copyright Section */}
      </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ProfuseCC. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;