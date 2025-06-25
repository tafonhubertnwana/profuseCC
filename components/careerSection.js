// components/CGJHeroWithImages.js
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Import your images (replace with actual image paths)


const CGJHeroWithImages = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
      },
    },
  };

  const sections = [
    {
      title: "Be an owner",
      description:
        "At CGJ, you are more than an employee. You are invited to be a company owner to benefit from the rewards of our collective success and actively shape the future direction of your company.",
      linkText: "What being an owner means ",
      linkHref: "#owner",
      image: '/assets/career-1.png',
      alt: "Team celebrating success",
    },
    {
      title: "Be creative",
      description:
        "Interesting assignments and job rotations enable you to deepen your skills as you consult with clients and communities to create value through innovative solutions that effect change.",
      linkText: "How we support your creativity ",
      linkHref: "#creative",
      image: '/assets/career-2.png',
      alt: "Creative workspace with team brainstorming",
    },
    {
      title: "Be supported",
      description:
        "You put a premium on your professional development and health and well-being. So do we. Known for our friendly and collaborative environment and focus on continuous learning, we help you thrive professionally and personally.",
      linkText: "How we set you up for success ",
      linkHref: "#supported",
      image: '/assets/career-3.png',
      alt: "Team members supporting each other",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 ">
      <div className="container xl:max-w-6xl mx-auto p-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Develop your skills. Share your insights. Reach your full potential.
          </h1>
        </motion.div>

        {/* Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 lg:grid-cols-3"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <motion.div
                variants={imageVariants}
                whileHover="hover"
                className="relative h-48 w-full"
              >
                <Image
                  src={section.image}
                  alt={section.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0} // Only prioritize first image for loading
                />
              </motion.div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-2xl font-bold text-[#FF0000] mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 mb-6 flex-grow">
                  {section.description}
                </p>
                <Link
                  href={section.linkHref}
                  className="text-[#FF0000] font-medium hover:text-[#FF0000] transition-colors flex items-center mt-auto"
                >
                  {section.linkText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CGJHeroWithImages;