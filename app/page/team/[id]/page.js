"use client";
import { useEffect, useState } from 'react';
import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosection/hero";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { getTeamMemberById } from '@/lib/appwrite';
import { notFound } from 'next/navigation';

export default function TeamDetailPage() {
  const params = useParams();
  const id = params?.id;
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        if (!id) {
          console.error('No ID provided');
          setLoading(false);
          return;
        }

        console.log('Fetching member with ID:', id); // Debug log
        const data = await getTeamMemberById(id);
        
        if (!data) {
          console.error('No data returned for ID:', id);
          return notFound();
        }

        setMember(data);
      } catch (error) {
        console.error('Error fetching member:', error);
        return notFound();
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, [id]);

  if (loading) {
    return <div>Loading team member details...</div>;
  }

  if (!member) {
    return notFound();
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
            className="grid md:grid-cols-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={member.imageUrl}
              alt={member.fullName}
              width={400}
              height={400}
              className="object-cover rounded-md"
            />
            <div className="md:p-6 py-6 md:py-1 w-full">
              <h2 className="text-2xl font-bold text-gray-800">{member.fullName}</h2>
              <p className="text-gray-500">{member.role}</p>
              <p className="text-gray-600 mt-4 py-5 text-sm">{member.bio}</p>
              
              <div className="mt-6 flex md:py-5 space-x-4"> 
                {member.socialLinks?.linkedin && (
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                    <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn className="text-gray-500 cursor-pointer hover:text-blue-700" />
                    </a>
                  </div>
                )}
                {/* Add other social links similarly */}
              </div>

              <div className="mt-6 flex items-center space-x-2">
                <div className="rounded-full border-[#FF0000] border-2 p-3">
                  <FaMapMarkerAlt className="text-[#FF0000]" />
                </div>
                <span className="text-gray-700">{member.location}</span>
              </div>
            </div>
          </motion.div>
          
          {member.skills && member.skills.length > 0 && (
            <div className="py-10">
              <h2 className="text-2xl font-bold mb-6">My Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          )}
        </div>
      </section>
    </div>
  );
};

