import { motion } from 'framer-motion';
import { MdArrowRight } from 'react-icons/md';
import Image from 'next/image';

const TechStack = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-8 lg:p-12">
      <motion.h1 
        className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        AI TECH STACK WE USE
      </motion.h1>
      <div>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className='bg-white border-2 rounded-md p-6'>
          <div className=' w-10 h-10 p-2 bg-orange-400/50' >

<Image src='/assets/capsules.png' width={40} height={40} />
</div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">AI Tools</h2>
            <ul>
              <li className="flex items-center gap-2"><MdArrowRight className="text-orange-500" />SAP Business AI 4 SAP AI Core</li>
              <li className="flex items-center gap-2"><MdArrowRight className="text-orange-500" />LlamaIndex 4 LangChain</li>
              <li className="flex items-center gap-2"><MdArrowRight className="text-orange-500" />Hugging Face 4 PyTorch</li>
              <li className="flex items-center gap-2"><MdArrowRight className="text-orange-500" />TensorFlow Lite 4 Core ML 4 ML Kit</li>
            </ul>
          </div>

          <div className='bg-white border-2 rounded-md p-6'>
            <div className=' w-10 h-10 p-2 bg-orange-400/50' >

            <Image src='/assets/capsules.png' width={40} height={40} />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Data Tools</h2>
            <ul>
              <li className="flex items-center gap-2"><MdArrowRight className="text-orange-500" />Databricks 4 Snowflake</li>
              <li className="flex items-center gap-2"><MdArrowRight className="text-orange-500" />Click House 4 Apache Airflow</li>
              <li className="flex items-center gap-2"><MdArrowRight className="text-orange-500" />Kafka</li>
            </ul>
          </div>

          <div className='bg-white border-2 rounded-md p-6'>
          <div className=' w-10 h-10 p-2 bg-orange-400/50' >

<Image src='/assets/app.png' width={40} height={40} />
</div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Cloud Providers</h2>
            <ul>
              <li className="flex items-center gap-2"><MdArrowRight className="text-orange-500" />Microsoft Azure 4 AWS</li>
              <li className="flex items-center gap-2"><MdArrowRight className="text-orange-500" />Google Cloud Platform</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;