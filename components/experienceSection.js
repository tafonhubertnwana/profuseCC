import { motion } from "framer-motion";
import { FaDatabase, FaHeadset, FaUserFriends, FaBookOpen } from 'react-icons/fa';


const features = [
  {
    id: 1,
    icon: <FaDatabase size={40} className="text-[#FF0000]" />, 
    title: "Data Security",
    description: "Protect sensitive information with robust encryption, secure access controls, and proactive threat detection."
  },
  {
    id: 2,
    icon: <FaBookOpen size={40} className="text-[#FF0000]" />, 
    title: "IT Services",
    description: "Empowering businesses with cutting-edge IT solutions, from cloud computing to network infrastructure management."
  },
  {
    id: 3,
    icon: <FaHeadset size={40} className="text-[#FF0000]" />, 
    title: "Support",
    description: "Round-the-clock technical assistance to ensure seamless operations and quick resolution of IT challenges."
  },
  {
    id: 4,
    icon: <FaUserFriends size={40} className="text-[#FF0000]" />, 
    title: "People",
    description: "Building strong collaborations and fostering innovation through a team of skilled professionals."
  }
]
;
export default function ExperienceSection() {
  return (
    <div className="mb-[500px] sm:mb-[300px] lg:mb-24">
      {/* Background Section */}
      <div className="bg-black py-16 flex justify-center items-center h-[250px] relative">
        {/* Feature Cards Container */}
        <div className="absolute top-28 max-w-7xl w-full px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
   {features.map((feature) => (
               <motion.div
                 key={feature.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: feature.id * 0.2 }}
                 viewport={{ once: true }}
                 className="bg-white p-6 rounded-lg shadow-md text-center"
               >
                 <div className="flex justify-center mb-4">{feature.icon}</div>
                 <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                 <p className="text-gray-600 mt-2 text-sm">{feature.description}</p>
               </motion.div>
             ))}
  </div>
</div>
      </div>
    </div>
  );
}