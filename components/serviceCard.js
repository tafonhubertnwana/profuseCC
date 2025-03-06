import { motion } from "framer-motion";
import { FaServer, FaCloud, FaBrain, FaShieldAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaServer className="text-orange-600 text-5xl" />, 
    title: "Managed IT Services",
    description: "Proin Pulvinar Eu Sem Endro thes Vehicula. Integer Urna Libero and, Semper emper business.",
  },
  {
    icon: <FaCloud className="text-orange-600 text-5xl" />, 
    title: "Cloud Services",
    description: "Proin Pulvinar Eu Sem Endro thes Vehicula. Integer Urna Libero and, Semper emper business.",
  },
  {
    icon: <FaBrain className="text-orange-600 text-5xl" />, 
    title: "Machine Learning",
    description: "Proin Pulvinar Eu Sem Endro thes Vehicula. Integer Urna Libero and, Semper emper business.",
  },
  {
    icon: <FaShieldAlt className="text-orange-600 text-5xl" />, 
    title: "Data Security",
    description: "Proin Pulvinar Eu Sem Endro thes Vehicula. Integer Urna Libero and, Semper emper business.",
  },
];

export default function ServiceCard() {
  return (
    <div className="relative bg-orange-100 py-12">
      <div className="max-w-6xl mx-auto absolute -top-40 left-64">

        <div className=" ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg p-6 rounded-lg text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
                <a
                  href="#"
                  className="text-orange-600 font-semibold mt-4 inline-block hover:underline"
                >
                  Read More &raquo;
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
