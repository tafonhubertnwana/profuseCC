import { motion } from 'framer-motion';
import Image from 'next/image';

const FeatureCard = ({
  title,
  description,
  iconImage, // Image source (required)
  iconAlt = "Feature icon", // Alt text for accessibility
  borderColor = "border-[#FF0000]",
  iconSize = 40, // Default image size (width/height in pixels)
  delay = 0,
  className = "",
  iconContainerClass = "" // Additional classes for icon container
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${borderColor} ${className}`}
    >
      <div className="flex items-start mb-4">
        {iconImage && (
          <div className={`mr-4 flex-shrink-0 ${iconContainerClass}`}>
            <Image 
              src={iconImage}
              alt={iconAlt}
              width={iconSize}
              height={iconSize}
              className="object-contain"
            />
          </div>
        )}
        <h3 className="text-xl font-semibold text-[#FF0000]">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;