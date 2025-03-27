import { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaRss } from 'react-icons/fa';
import teamMembers from '@/utils/teamMembers.json';

export default function TeamSection() {
  const [showAllMembers, setShowAllMembers] = useState(false);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-center sm:text-left">
              <h2 className="text-[#FF0000]  text-sm font-semibold uppercase tracking-wider">
                Dedicated Team
              </h2>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
                Meet Our Dedicated Members
              </h1>
              <p className="text-gray-600 mt-4 max-w-2xl">
                We are a team of highly skilled individuals committed to delivering superior cloud computing services.
              </p>
            </div>
            <button
              onClick={() => setShowAllMembers(!showAllMembers)}
              className="mt-8 sm:mt-0 bg-[#FF0000]  text-white px-6 py-3 hover:bg-red-600 transition-colors duration-300"
            >
              {showAllMembers ? 'Hide Members' : 'All Members →'}
            </button>
          </div>
        </motion.div>

        {!showAllMembers && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Slider {...sliderSettings}>
              {teamMembers.map((member) => (
                <div key={member.id} className="px-3">
                  <div className="bg-white shadow-lg overflow-hidden cursor-pointer">
                    <div className="relative h-[450px]">
                      <Link href={`/page/team/${member.id}`}>
                        <Image src={member.image} alt={member.name} width={300} height={450} className="w-full h-full object-cover" />
                      </Link>
                      <div className="absolute group transform hover:shadow-xl group-hover:scale-110 bottom-0 w-full bg-[#FF0000]/60 p-4 text-center transition-all duration-300 hover:bg-black/40">
                        <h5 className="text-lg font-semibold text-white">{member.name}</h5>
                        <p className="text-gray-300">{member.role}</p>
                        <div className='mt-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300'>
                        
                          <div className="flex space-x-4 justify-center">
                            <Link href="#" className="text-gray-300 hover:text-blue-500 transition-colors"><FaFacebookF size={20} /></Link>
                            <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors"><FaTwitter size={20} /></Link>
                            <Link href="#" className="text-gray-300 hover:text-blue-600 transition-colors"><FaLinkedinIn size={20} /></Link>
                            <Link href="#" className="text-gray-300 hover:text-[#FF0000]  transition-colors"><FaRss size={20} /></Link>
                          </div>
                            
                        </div> 
                          
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        )}

        {showAllMembers && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {teamMembers.map((member) => (
              <div className="bg-white shadow-lg overflow-hidden cursor-pointer" key={member.id}>
                <div className="relative h-[450px]">
                  <Link href={`/page/team/${member.id}`}>
                    <Image src={member.image} alt={member.name} width={300} height={450} className="w-full h-full object-cover" />
                  </Link>
                  <div className="absolute group transform hover:shadow-xl group-hover:scale-110 bottom-0 w-full bg-red-400/60 p-4 text-center transition-all duration-300 hover:bg-black/40">
                        <h5 className="text-lg font-semibold text-white">{member.name}</h5>
                        <p className="text-gray-300">{member.role}</p>
                        <div className='mt-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300'>
                        
                          <div className="flex space-x-4 justify-center">
                            <Link href="#" className="text-gray-300 hover:text-blue-500 transition-colors"><FaFacebookF size={20} /></Link>
                            <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors"><FaTwitter size={20} /></Link>
                            <Link href="#" className="text-gray-300 hover:text-blue-600 transition-colors"><FaLinkedinIn size={20} /></Link>
                            <Link href="#" className="text-gray-300 hover:text-[#FF0000]  transition-colors"><FaRss size={20} /></Link>
                          </div>
                            
                        </div> 
                          
                      </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
