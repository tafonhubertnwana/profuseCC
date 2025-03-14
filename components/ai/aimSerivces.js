// components/FeatureCards.js

import { motion } from 'framer-motion';
import { VscGraphLine, VscPersonAdd } from "react-icons/vsc";
import { TbAutomaticGearboxFilled } from "react-icons/tb";
import { GrOptimize } from "react-icons/gr";

const features = [
  {
    title: "Innovate",
    description: "Create dynamic solutions that drive continuous improvement in your products and services."
    , icon: <VscGraphLine size={40}/>
  },
  {
    title: "Automate",
    description: "Streamline processes to increase productivity with intelligent automation.", icon: <TbAutomaticGearboxFilled size={40}/>
  },
  {
    title: "Optimize",
    description: "Leverage data insights to enhance decision-making and maximize business outcomes.", icon: <GrOptimize size={40}/>
  },
  {
    title: "Personalize",
    description: "Deliver tailored experiences that meet individual customer needs and preferences.", icon: <VscPersonAdd size={40}/>
  },
];

const FeatureCards = () => {
  return (
    <section className='container xl:max-w-6xl mx-auto'>
       
      <div className="flex flex-col items-center justify-center p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center text-white">Don’t Get Left Behind</h2>
        <p className="text-center text-gray-100">
          AI is rapidly transforming every industry, creating opportunities for businesses that stay at the forefront of technology to leap ahead of the competition.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <span className='py-5 text-orange-400'>
                  {feature.icon}
              </span>
              <h3 className="text-xl font-semibold text-orange-400">{feature.title}</h3>
              <p className="mt-2 text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;