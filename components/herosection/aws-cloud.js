import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import ConsultationForm from "../consultingForm";

const AwsHeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <div className="relative h-[500px] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/aws-cloud.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
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
            AWS Cloud Service
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-6"
          >
            Leverage the power of AWS Cloud for your business.
          </motion.p>
        </motion.div>

        {/* Breadcrumb Navigation */}
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
          <span className="text-blue-400">AWS Cloud</span>
        </motion.div>
      <ConsultationForm />
      </div>
    </div>
  );
};

export default AwsHeroSection;
