import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MissionSection() {
  return (
    <section className="py-10">
      {/* Mission Section */}
      <div className="container xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 items-center">
          {/* Image Section (Background Image) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[600px] w-full bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url('/assets/mission-1.png')" }}
          >
            {/* Optional: Add an overlay if needed */}
            <div className="absolute inset-0 bg-black/10"></div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className=" h-auto md:h-[600px] w-full p-6 md:p-10 "
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3 py-4">
                <span className="flex items-center justify-center w-8 h-8 bg-[#FF0000] rounded-full text-white text-xl">
                  ✔
                </span>
                <span className="flex-1 text-black">
                  To empower businesses with cutting-edge IT solutions, enabling seamless digital transformation and operational efficiency.
                </span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="flex items-center justify-center w-8 h-8 bg-[#FF0000] rounded-full text-white text-xl">
                  ✔
                </span>
                <span className="flex-1 text-black">
                  Deliver scalable cloud services that drive innovation, reduce costs, and ensure business continuity.
                </span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="flex items-center justify-center w-8 h-8 bg-[#FF0000] rounded-full text-white text-xl">
                  ✔
                </span>
                <span className="flex-1 text-black">
                  Leverage generative AI and data analysis to unlock actionable insights and foster data-driven decision-making.
                </span>
              </li>
            </ul>
            <Link href="/aboutUs">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-[#FF0000] text-white py-2 px-4 md:py-3 md:px-6 shadow-md hover:bg-orange-500 transition"
              >
                FIND OUT MORE
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className=" h-auto md:h-[600px] w-full p-6 md:p-10  order-2 md:order-1"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3 py-4">
                <span className="flex items-center justify-center w-8 h-8 bg-[#FF0000] rounded-full text-white text-xl">
                  ✔
                </span>
                <span className="flex-1 text-black">
                  To be a global leader in IT innovation, transforming industries through advanced cloud solutions and AI-driven technologies.
                </span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="flex items-center justify-center w-8 h-8 bg-[#FF0000] rounded-full text-white text-xl">
                  ✔
                </span>
                <span className="flex-1 text-black">
                  Create a future where businesses thrive by harnessing the power of data and intelligent automation.
                </span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="flex items-center justify-center w-8 h-8 bg-[#FF0000] rounded-full text-white text-xl">
                  ✔
                </span>
                <span className="flex-1 text-black">
                  Build a world where technology is accessible, scalable, and sustainable for all.
                </span>
              </li>
            </ul>
            <Link href="/aboutUs">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-[#FF0000] text-white py-2 px-4 md:py-3 md:px-6 shadow-md hover:bg-orange-500 transition"
              >
                FIND OUT MORE
              </motion.button>
            </Link>
          </motion.div>

          {/* Image Section (Background Image) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[600px] w-full bg-cover bg-center overflow-hidden order-1 md:order-2"
            style={{ backgroundImage: "url('/assets/mission-2.png')" }}
          >
            {/* Optional: Add an overlay if needed */}
            <div className="absolute inset-0 bg-black/10"></div>
          </motion.div>
        </div>
      </div>

      {/* Goal Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 items-center">
          {/* Image Section (Background Image) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[600px] w-full bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url('/assets/mission-1.png')" }}
          >
            {/* Optional: Add an overlay if needed */}
            <div className="absolute inset-0 bg-black/10"></div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className=" h-auto md:h-[600px] w-full p-6 md:p-10 "
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Goal</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3 py-4">
                <span className="flex items-center justify-center w-8 h-8 bg-[#FF0000] rounded-full text-white text-xl">
                  ✔
                </span>
                <span className="flex-1 text-black">
                  Provide end-to-end IT solutions that enhance productivity, security, and scalability for businesses of all sizes.
                </span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="flex items-center justify-center w-8 h-8 bg-[#FF0000] rounded-full text-white text-xl">
                  ✔
                </span>
                <span className="flex-1 text-black">
                  Enable organizations to leverage generative AI for creative problem-solving and innovation.
                </span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="flex items-center justify-center w-8 h-8 bg-[#FF0000] rounded-full text-white text-xl">
                  ✔
                </span>
                <span className="flex-1 text-black">
                  Deliver data analysis tools that provide actionable insights, driving smarter business decisions.
                </span>
              </li>
            </ul>
            <Link href="/aboutUs">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-[#FF0000] text-white py-2 px-4 md:py-3 md:px-6 shadow-md hover:bg-orange-500 transition"
              >
                FIND OUT MORE
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}