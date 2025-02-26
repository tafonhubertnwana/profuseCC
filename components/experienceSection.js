import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "22+ Year Experience",
    description: "Completely fashion reliable more products grow business",
    icon: "🌍", // Replace with actual icon
  },
  {
    id: 2,
    title: "Dedicated Members",
    description: "Completely fashion reliable more products grow business",
    icon: "📂", // Replace with actual icon
  },
  {
    id: 3,
    title: "Valuable Supports",
    description: "Completely fashion reliable more products grow business",
    icon: "📊", // Replace with actual icon
  },
  {
    id: 4,
    title: "Valuable Supports",
    description: "Completely fashion reliable more products grow business",
    icon: "👤", // Replace with actual icon
  },
];

export default function ExperienceSection() {
  return (
    <div className="mb-[500px] sm:mb-[300px] lg:mb-24">
      {/* Background Section */}
      <div className="bg-orange-400 py-16 flex justify-center items-center h-[250px] relative">
        {/* Feature Cards Container */}
        <div className="absolute top-28 max-w-7xl w-full px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {features.map((feature) => (
      <motion.div
        key={feature.id}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: feature.id * 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center relative overflow-hidden group"
      >
        {/* Hover Effect Background */}
        <div className="absolute inset-0 bg-black w-0 transition-all duration-500 ease-in-out group-hover:w-full"></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="text-5xl text-blue-500 mb-4">{feature.icon}</div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-gray-600 mt-2 text-sm group-hover:text-white transition-colors duration-300">
            {feature.description}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</div>
      </div>
    </div>
  );
}