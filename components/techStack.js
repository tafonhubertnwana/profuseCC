import { motion } from 'framer-motion';
import { MdArrowRight } from 'react-icons/md';
import Image from 'next/image';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const techCategories = [
  {
    title: 'AI Tools',
    image: '/assets/lightbulb-setting.png',
    items: [
      'SAP Business AI → SAP AI Core',
      'LlamaIndex → LangChain',
      'Hugging Face → PyTorch',
      'TensorFlow Lite ',
    ],
  },
  {
    title: 'Data Tools',
    image: '/assets/api.png',
    items: [
      'Databricks → Snowflake',
      'ClickHouse → Apache Airflow',
      'Kafka',
    ],
  },
  {
    title: 'Cloud Providers',
    image: '/assets/system-cloud.png',
    items: [
      'Microsoft Azure → AWS',
      'Google Cloud Platform',
    ],
  },
];

const TechCard = ({ title, image, items }) => (
  <div className='bg-white border-2 rounded-md shadow-lg p-6'>
    <div className='w-24 h-24 bg-orange-200 rounded-md flex items-center mb-4 justify-center'>
      <Image src={image} width={50} height={50} alt={title} />
    </div>
    <h2 className='text-xl md:text-2xl font-semibold mb-4'>{title}</h2>
    <ul>
      {items.map((item, index) => (
        <li key={index} className='flex items-center gap-2'>
          {/* Always show MdArrowRight at the beginning of each list item */}
          <MdArrowRight className='text-orange-500' />
          {/* Split the item by "→" and render with MdArrowRight in between */}
          {item.split(' → ').map((part, i) => (
            <span key={i} className='flex items-center'>
              {i > 0 && <MdArrowRight className='text-orange-500 mx-2' />}
              {part}
            </span>
          ))}
        </li>
      ))}
    </ul>
  </div>
);

const TechStack = () => {
  return (
    <div className='max-w-6xl mx-auto p-6 md:p-8 lg:p-12'>
      <motion.h1 
        className='text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center'
        initial='hidden'
        animate='visible'
        variants={fadeIn}
      >
        AI TECH STACK WE USE
      </motion.h1>
      <motion.div 
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
        initial='hidden'
        animate='visible'
        variants={fadeIn}
      >
        {techCategories.map((category, index) => (
          <TechCard key={index} {...category} />
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack;