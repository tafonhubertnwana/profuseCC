import { motion } from 'framer-motion';

const TechStack = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className="max-w-4xl  mx-auto p-8">
      <motion.h1 
        className="text-4xl font-bold mb-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        AI TECH STACK WE USE
      </motion.h1>
      <div >

        <motion.div 
          className=" grid grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-4">AI tools</h2>
            <ul className="list-disc list-inside">
              <li>SAP Business AI 4 SAP AI Core</li>
              <li>LlamaIndex 4 LangChain</li>
              <li>Hugging Face 4 PyTorch</li>
              <li>TensorFlow Lite 4 Core ML 4 ML Kit</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Data Tools</h2>
            <ul className="list-disc list-inside">
              <li>Databricks 4 Snowflake</li>
              <li>Click House 4 Apache Airflow</li>
              <li>Kafka</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Cloud providers</h2>
            <ul className="list-disc list-inside">
              <li>Microsoft Azure 4 AWS</li>
              <li>Google Cloud Platform</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;