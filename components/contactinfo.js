"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <div className="container xl:max-w-7xl mx-auto p-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="group relative flex items-center gap-4 border border-[#FF0000] px-6 py-6 rounded-lg shadow-md overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            {/* Hover effect background */}
            <span className="absolute inset-y-0 left-0 w-0 bg-[#FF0000] transition-all duration-500 group-hover:w-full"></span>

            {/* Content */}
            <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full border-2 border-[#FF0000] text-[#FF0000] text-3xl group-hover:text-white group-hover:border-white transition-colors duration-500">
              {item.icon}
            </div>
            <div className="relative z-10">
              <p className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-500">
                {item.title}
              </p>
              <p className="text-[#FF0000] font-bold group-hover:text-white transition-colors duration-500">
                {item.info}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    icon: <FaPhoneAlt />,
    title: "Call Us Anytime",
    info: "+1 646-509-9274"
  },
  {
    icon: <MdEmail />,
    title: "Send E-Mail",
    info: "tabehisaac@gmail.com"
  },
  {
    icon: <IoTimeOutline />,
    title: "Opening Hours",
    info: "MON-FRI (08:00AM -05:00PM)"
  },
];

export default ContactInfo;