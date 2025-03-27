"use client";
import Navbar from "@/components/navbar";

import HeroSection from "@/components/herosection/hero";
import { useParams } from "next/navigation";

import { GetStaticProps, GetStaticPaths } from "next";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import teamMembers from "@/utils/teamMembers.json";
import Link from "next/link";



const skills = [
  { name: "Design Analytics", percentage: 95 },
  { name: "Digital Marketing", percentage: 85 },
  { name: "UI / UX Design & Development", percentage: 75 },
  { name: "Content Strategy", percentage: 90 },
];
const TeamDetailPage = () => {
  
  
  const params = useParams();
  const { id } = params;

  // Find the correct team member
  const member = teamMembers.find((m) => m.id.toString() === id);
// Specifically check skills

  if (!member) return notFound(); 
  const { contacts = {} } = member;

  return (
    <div>
      <Navbar />
      <HeroSection
  title=" Our Members Details"
  description=" Meet the talented individuals who make up our team."
  backgroundImage="/assets/breadcrumb-bg.png"
  breadcrumb="Team" />
      {/* Add the rest of your contact page content here */}
      <section className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="grid md:grid-cols-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={member.image}
            alt={member.name}
            width={400}
            height={400}
            className="object-cover rounded-md"
          />
         <div className="md:p-6 py-6 md:py-1 w-full">
          <h2 className="text-  font-bold text-gray-800">Dillur Rahman</h2>
          <p className="text-gray-500">Dream Land Founder & CEO</p>
          <p className="text-gray-600 mt-4 py-5 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          
          <div className="mt-6 flex flex-col sm:flex-row md:py-5 items-center sm:space-x-4 space-y-3 sm:space-y-0">
  <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg w-full sm:w-auto justify-center sm:justify-start">
    <FaPhoneAlt className="text-[#FF0000]" />
    <span className="text-gray-700">+123 (4547) 563</span>
  </div>
  <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg w-full sm:w-auto justify-center sm:justify-start">
    <FaEnvelope className="text-[#FF0000]" />
    <span className="text-gray-700">info@gmail.com</span>
  </div>
</div>


          <div className="mt-6 flex md:py-5 space-x-4"> 
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
              <FaFacebookF className="text-gray-500 cursor-pointer hover:text-blue-600" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
              <FaTwitter className="text-gray-500 cursor-pointer hover:text-blue-400" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
              <FaLinkedinIn className="text-gray-500 cursor-pointer hover:text-blue-700" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
              <FaPinterestP className="text-gray-500 cursor-pointer hover:text-red-600" />
            </div>
          </div>


          <div className="mt-6 flex items-center space-x-2">
            <div className="rounded-full border-[#FF0000] border-2 p-3">

            <FaMapMarkerAlt className="text-[#FF0000]" />
            </div>
            <span className="text-gray-700">21 King Street 5th Floor Hamilton, Ontario Canada</span>
          </div>
        </div>
      </motion.div>
      <div className="py-10">
      <h2 className="text-2xl font-bold mb-6">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center">
            <div className="w-full">
              <p className="text-gray-600">{skill.name}</p>
              <div className="relative w-full h-2 bg-gray-200 rounded-lg mt-1">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1 }}
                  className="absolute top-0 left-0 h-full bg-orange-600 rounded-lg"
                ></motion.div>
              </div>
            </div>
            <span className="ml-4 text-gray-700 font-semibold">{skill.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
      </div>
    </section>
    </div>
  );
};

export default TeamDetailPage;