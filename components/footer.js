'use client';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaLocationDot, FaPhone, FaXTwitter , FaEnvelope } from "react-icons/fa6";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    
    <footer className="bg-black border-t-2 border-t-white text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Tagline Section */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/assets/profuse.jpg" // Replace with your logo path
                alt="Company Logo" 
                className="h-24 w-30 mr-2"
              />
              
            </div>
            <p className="text-gray-400">
            ProfuseCC Your partner in AI-powered innovation. We're a cutting-edge AI software startup dedicated to crafting intelligent solutions that propel your business forward. Designed specifically for startups, ambitious professionals, and scaling businesses, ProfuseCC provides the custom-built tools you need to thrive in today's competitive landscape. Unlock your potential with AI designed for growth.
</p>
            <div className="flex space-x-4 mt-4">
              <Link target="_blank" href="https://www.facebook.com/share/1KTQg7oDM7/?mibextid=wwXIfr" className="text-blue-500 hover:text-white">
                <FaFacebook size={24} />
              </Link>
              <Link target="_blank" href="https://www.instagram.com/profuse_cc/" className="text-red-400 hover:text-white">
                <FaInstagram size={24} />
              </Link>
              
              <Link target="_blank" href="https://www.linkedin.com/company/profuscc/" className="text-blue-300 hover:text-white">
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>

          <div>
  <h3 className="text-lg font-semibold mb-4">Services</h3>
  <ul className="text-gray-400">
    <li className="mb-2 group">
      <Link href="/service/cloud-computing" className="hover:text-white flex items-center transition-transform duration-300 group-hover:translate-x-2">

        <span className="mr-2 ">
          <FaRegArrowAltCircleRight className='text-[#FF0000]' />
        </span>
        Cloud Computing
      </Link>
    </li>
    <li className="mb-2 group">
      <Link href= "/service/software-development" className='hover:text-white flex items-center transition-transform duration-300 group-hover:translate-x-2'>
        <span className="mr-2">
          <FaRegArrowAltCircleRight className='text-[#FF0000]' />
        </span>
        Software Development
      </Link>
    </li>
    <li className="mb-2 group">
      <Link href="/service/generative-ai" className='hover:text-white flex items-center transition-transform duration-300 group-hover:translate-x-2'>
        <span className="mr-2">
          <FaRegArrowAltCircleRight className='text-[#FF0000]' />
        </span>
        Generative AI
      </Link>
    </li>
     <li className="mb-2 group">
      <Link href="/service/cybersecurity" className='hover:text-white flex items-center transition-transform duration-300 group-hover:translate-x-2'>
        <span className="mr-2">
          <FaRegArrowAltCircleRight className='text-[#FF0000]' />
        </span>
        AI and Cybersecurity
      </Link>
    </li>
    <li className="mb-2 group">
      <Link href="/service/data-analysis" className='hover:text-white flex items-center transition-transform duration-300 group-hover:translate-x-2'>
        <span className="mr-2">
          <FaRegArrowAltCircleRight className='text-[#FF0000]' />
        </span>
        Data Analysis
      </Link>
    </li>
  </ul>
</div>

{/* Quick Links Section */}
<div>
  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
  <ul className="text-gray-400">
    <li className="mb-2 group">
      <Link href="/aboutUs" className='hover:text-white flex items-center transition-transform duration-300 group-hover:translate-x-2'>
        <span className="mr-2">
          <FaRegArrowAltCircleRight className='text-[#FF0000]' />
        </span>
        About Us
      </Link>
    </li>
    
    <li className="mb-2 group">
      <Link href="/project" className='hover:text-white flex items-center transition-transform duration-300 group-hover:translate-x-2'>
        <span className="mr-2">
          <FaRegArrowAltCircleRight className='text-[#FF0000]' />
        </span>
        Project
      </Link>
    </li>
    <li className="mb-2 group">
      <Link href="/contact" className='hover:text-white flex items-center transition-transform duration-300 group-hover:translate-x-2'>
        <span className="mr-2">
          <FaRegArrowAltCircleRight className='text-[#FF0000]' />
        </span>
        Contact
      </Link>
    </li>
    <li className="mb-2 group">
      <Link href="/private-policy" className='hover:text-white flex items-center transition-transform duration-300 group-hover:translate-x-2'>
        <span className="mr-2">
          <FaRegArrowAltCircleRight className='text-[#FF0000]' />
        </span>
        Privacy Policy
      </Link>
    </li>
  </ul>
</div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="text-gray-400 ">
              <li className="mb-2 group  ">
                <div className="hover:text-white flex items-center transition-transform duration-300 group-hover:translate-x-2">

                <FaLocationDot className="mr-2 text-[#FF0000]" />
                <span>1944 Katy Fort Bend County Rd, Katy, TX 77493

                </span>
                </div>
              </li>
              <li className="mb-2 group ">
              <div className="hover:text-white flex items-center transition-transform duration-300 group-hover:translate-x-2">
                  
                <FaPhone className="mr-2 text-[#FF0000]" />
                <span>+1 646-509-9274

                </span>
                  </div>
              </li>
              <li className="mb-2 group ">
              <div className="hover:text-white flex items-center transition-transform duration-300 group-hover:translate-x-2">
                  
                <FaEnvelope className="mr-2 text-[#FF0000]" />
                <span>tabehisaac@gmail.com</span>
                  </div>
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
    </>
  );
};

export default Footer;