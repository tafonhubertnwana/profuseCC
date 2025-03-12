// components/AIServiceSection.js
import { motion } from 'framer-motion';
import { IoSettingsOutline } from "react-icons/io5";

const services = [
  { title: "Empower users with data insights", icon: <IoSettingsOutline size={40}/> },
  { title: "Personalize the customer experience", icon: <IoSettingsOutline size={40}/> },
  { title: "Automate and streamline processes", icon: <IoSettingsOutline size={40}/> },
  { title: "Accelerate agility and innovation", icon: <IoSettingsOutline size={40}/> },
];

const AIServiceSection = () => {
  return (
    <section className='bg-gradient-to-r from-gray-900 to-gray-800 text-white py-10'>

      <div className=" max-w-6xl mx-auto  p-10">
        <h2 className="text-3xl font-bold mb-4">Generative AI Services</h2>
        <p className="mb-8">
          Tap into our proven track record of incorporating Generative AI technologies to deliver tangible business value – creating a competitive advantage, growing revenues, and increasing operational efficiency.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white text-gray-800 rounded-lg p-5 shadow-lg"
            >
              <span className='pb-10'>{service.icon}</span>
              <h3 className="font-semibold">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIServiceSection;