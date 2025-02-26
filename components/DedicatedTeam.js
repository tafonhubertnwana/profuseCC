import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaRss } from 'react-icons/fa';
import teamMembers from '@/utils/teamMembers.json'; // Import the JSON data

export default function TeamSection() {
  const [showAllMembers, setShowAllMembers] = useState(false);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-center sm:text-left">
              <h2 className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
                Dedicated Team
              </h2>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
                Meet Our Dedicated Members
              </h1>
              <p className="text-gray-600 mt-4 max-w-2xl">
                We are a team of highly skilled individuals committed to
                delivering superior cloud computing services.
              </p>
            </div>
            <div className="mt-8 sm:mt-0">
              <button
                onClick={() => setShowAllMembers(!showAllMembers)}
                className="bg-orange-500 text-white px-6 py-3 hover:bg-orange-600 transition-colors duration-300"
                aria-label="View all team members"
              >
                {showAllMembers ? 'Hide Members' : 'All Members →'}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Team Carousel */}
        {!showAllMembers && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="relative"
            >
              {teamMembers.map((member) => (
                <SwiperSlide key={member.id}>
                  <div className="bg-white shadow-lg overflow-hidden">
                    {/* Image Section */}
                    <div className="relative h-[450px]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300"
                      />

                      {/* Text Section */}
                      <div className="absolute group transform hover:shadow-xl group-hover:scale-110 bottom-0 w-full bg-orange-400/60 p-4 text-center transition-all duration-300 hover:bg-black/40">
                        <h5 className="text-lg font-semibold text-white">{member.name}</h5>
                        <p className="text-gray-300">{member.role}</p>

                        {/* Social Media Links */}
                        <div className="mt-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <div className="flex space-x-4 justify-center">
                            <Link
                              href="#"
                              className="text-gray-300 hover:text-blue-500 transition-colors"
                              aria-label="Facebook"
                            >
                              <FaFacebookF size={20} />
                            </Link>
                            <Link
                              href="#"
                              className="text-gray-300 hover:text-blue-400 transition-colors"
                              aria-label="Twitter"
                            >
                              <FaTwitter size={20} />
                            </Link>
                            <Link
                              href="#"
                              className="text-gray-300 hover:text-blue-600 transition-colors"
                              aria-label="LinkedIn"
                            >
                              <FaLinkedinIn size={20} />
                            </Link>
                            <Link
                              href="#"
                              className="text-gray-300 hover:text-orange-500 transition-colors"
                              aria-label="RSS Feed"
                            >
                              <FaRss size={20} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}

        {/* Display All Members */}
        {showAllMembers && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white shadow-lg overflow-hidden">
                <div className="relative h-[450px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300"
                  />

                  {/* Text Section */}
                  <div className="absolute group transform hover:shadow-xl group-hover:scale-110 bottom-0 w-full bg-orange-400/60 p-4 text-center transition-all duration-300 hover:bg-black/40">
                    <h5 className="text-lg font-semibold text-white">{member.name}</h5>
                    <p className="text-gray-300">{member.role}</p>

                    {/* Social Media Links */}
                    <div className="mt-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <div className="flex space-x-4 justify-center">
                        <Link
                          href="#"
                          className="text-gray-300 hover:text-blue-500 transition-colors"
                          aria-label="Facebook"
                        >
                          <FaFacebookF size={20} />
                        </Link>
                        <Link
                          href="#"
                          className="text-gray-300 hover:text-blue-400 transition-colors"
                          aria-label="Twitter"
                        >
                          <FaTwitter size={20} />
                        </Link>
                        <Link
                          href="#"
                          className="text-gray-300 hover:text-blue-600 transition-colors"
                          aria-label="LinkedIn"
                        >
                          <FaLinkedinIn size={20} />
                        </Link>
                        <Link
                          href="#"
                          className="text-gray-300 hover:text-orange-500 transition-colors"
                          aria-label="RSS Feed"
                        >
                          <FaRss size={20} />
                        </Link>
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