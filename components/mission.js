import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MissionSection() {
  return (
    <section className="bg-orange-200/25 py-10">
      {/* Mission Section */}
      <div className="container xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2  items-center">
          {/* Image Section (Background Image) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[600px] w-full bg-cover bg-center  overflow-hidden"
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
            className="bg-gray-100 h-auto md:h-[600px] w-full p-6 md:p-10  shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3 py-4">
                <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full text-black text-xl">
                  ✔
                </span>
                <span className="flex-1 text-black">
                  We Communicate clearly, because in a world crowded with over-the-top marketing, simple wins.
                </span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full text-black text-xl">
                  ✔
                </span>
                <span className="flex-1 text-black">
                  We are not rock stars, ninjas or any other disingenuous buzz term. We are creative professionals.
                </span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full text-black text-xl">
                  ✔
                </span>
                <span className="flex-1 text-black">
                  Before you can market a business, you need to know its story and have support staff always there when needed.
                </span>
              </li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-orange-600 text-white py-2 px-4 md:py-3 md:px-6  shadow-md hover:bg-orange-500 transition"
            >
              FIND OUT MORE
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid md:grid-cols-2  items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-100 h-auto md:h-[600px] w-full p-6 md:p-10  shadow-lg order-2 md:order-1"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3 py-4">
                <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full text-black text-xl">
                  ✔
                </span>
                <span className="flex-1 text-black">
                  We Communicate clearly, because in a world crowded with over-the-top marketing, simple wins.
                </span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full text-black text-xl">
                  ✔
                </span>
                <span className="flex-1 text-black">
                  We are not rock stars, ninjas or any other disingenuous buzz term. We are creative professionals.
                </span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full text-black text-xl">
                  ✔
                </span>
                <span className="flex-1 text-black">
                  Before you can market a business, you need to know its story and have support staff always there when needed.
                </span>
              </li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-orange-600 text-white py-2 px-4 md:py-3 md:px-6  shadow-md hover:bg-orange-500 transition"
            >
              FIND OUT MORE
            </motion.button>
          </motion.div>

          {/* Image Section (Background Image) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[600px] w-full bg-cover bg-center  overflow-hidden order-1 md:order-2"
            style={{ backgroundImage: "url('/assets/mission-2.png')" }}
          >
            {/* Optional: Add an overlay if needed */}
            <div className="absolute inset-0 bg-black/10"></div>
          </motion.div>
        </div>
      </div>

      {/* Goal Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid md:grid-cols-2  items-center">
          {/* Image Section (Background Image) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[600px] w-full bg-cover bg-center  overflow-hidden"
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
            className="bg-gray-100 h-auto md:h-[600px] w-full p-6 md:p-10  shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Goal</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3 py-4">
                <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full text-black text-xl">
                  ✔
                </span>
                <span className="flex-1 text-black">
                  We Communicate clearly, because in a world crowded with over-the-top marketing, simple wins.
                </span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full text-black text-xl">
                  ✔
                </span>
                <span className="flex-1 text-black">
                  We are not rock stars, ninjas or any other disingenuous buzz term. We are creative professionals.
                </span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full text-black text-xl">
                  ✔
                </span>
                <span className="flex-1 text-black">
                  Before you can market a business, you need to know its story and have support staff always there when needed.
                </span>
              </li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-orange-600 text-white py-2 px-4 md:py-3 md:px-6  shadow-md hover:bg-orange-500 transition"
            >
              FIND OUT MORE
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}