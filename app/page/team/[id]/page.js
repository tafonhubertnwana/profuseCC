"use client";
import { useEffect, useState } from 'react';
import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosection/hero";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import teamData from '@/data/team.json';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function TeamDetailPage() {
  const params = useParams();
  const id = params?.id;
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true); // Changed to true initially

  useEffect(() => {
    if (id) {
      const foundMember = teamData.find(member => member.id === id);
      setMember(foundMember || null);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="flex justify-center items-center py-32">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
        </div>
      </div>
    );
  }

  if (!member) {
    return (
      <div>
        <Navbar />
        <div className="flex justify-center items-center py-32">
          <p>Member not found</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <HeroSection
        title="Our Members Details"
        description="Meet the talented individuals who make up our team."
        backgroundImage="/assets/partner-bg.webp"
        breadcrumb="Pages > Team" />
      
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[500px]">
              <Image
                src={member.imageUrl}
                alt={member.fullName}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="md:p-6 py-6 md:py-1 w-full">
              <h2 className="text-3xl font-bold text-gray-800">{member.fullName}</h2>
              <p className="text-xl text-gray-500 mt-2">{member.role}</p>
              <p className="text-gray-600 mt-6 text-base leading-relaxed">{member.bio}</p>
              
             
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Professional Background</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Education</h3>
                  <p className="text-gray-600 mt-1">{member.education}</p>
                </div>
              
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
              <div className="space-y-6">
                {member.skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-full">
                      <p className="text-gray-600">{skill.name}</p>
                      <div className="relative w-full h-2 bg-gray-200 rounded-lg mt-1">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 1 }}
                          className="absolute top-0 left-0 h-full bg-[#FF0000] rounded-lg"
                        ></motion.div>
                      </div>
                    </div>
                    <span className="ml-4 text-gray-700 font-semibold">{skill.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};