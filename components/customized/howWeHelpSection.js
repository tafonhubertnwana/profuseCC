import { motion } from "framer-motion";
import Image from "next/image";

const SuccessCard = ({ title, subtitle, description, category, imageUrl, ctaText = "Read more →" }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-sm shadow-lg group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative h-96">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <motion.span 
          className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-white bg- rounded-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {category}
        </motion.span>

        <motion.h3
          className="text-2xl font-bold leading-tight"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="mt-1 text-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="mt-4 overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm">{description}</p>
          <button className="flex items-center font-medium text-[#FF0000] hover:text-white transition-colors">
            {ctaText}
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const HowWeHelpSection = ({ heading, cards }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container xl:max-w-7xl mx-auto p-2">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {heading}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <SuccessCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelpSection;