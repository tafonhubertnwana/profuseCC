// components/AIServiceSection.js
import { motion } from 'framer-motion';
import { IoSettingsOutline } from "react-icons/io5";
import FeatureCards from './aimSerivces';



const AIServiceSection = () => {
  return (
    <section className='bg-black  py-10'>

      <FeatureCards />
    </section>
  );
};

export default AIServiceSection;