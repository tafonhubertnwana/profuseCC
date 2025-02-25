import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const BlogHeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <div className="relative h-[500px] overflow-hidden"> {/* Adjusted height */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/breadcrumb-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-center text-white max-w-2xl px-4"
          >
            <motion.h1
              variants={textVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Our Blog
            </motion.h1>
            <motion.p
              variants={textVariants}
              className="text-sm sm:text-base md:text-lg lg:text-xl mb-6"
            >
              Stay updated with the latest news, tips, and insights from our team.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-sm sm:text-base mt-4 p-5 flex items-center"
          >
            <Link href="/" className="hover:text-blue-400 flex items-center">
              <FaHome size={20} className="mr-2" /> Home
            </Link>
            <span className="mx-2">
              <FaChevronRight size={20} />
            </span>
            <span className="text-blue-400">Blog</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeroSection;
