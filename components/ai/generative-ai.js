import { motion } from 'framer-motion';

export default function GenerativeAI() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">OUR GENERATIVE AI SERVICES</h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-lg mb-8"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Generative AI consulting</h2>
          <p className="text-gray-600">
            What are the potential use cases for generative AI within my organization? What AI technology and tools to choose? Are there any untapped opportunities in the AI solutions I am already using? LeverX will guide you through all your concerns and help you maximize the benefits of generative AI for your business innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-6 rounded-lg shadow-lg mb-8"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Generative AI model customization</h2>
          <p className="text-gray-600">
            Do you need to tailor your AI system to their specific industry requirements, unique data, regulatory standards, and performance goals? We specialize in fine-tuning open-source models to meet customer needs, delivering exceptional results in RAG, NL-SQL, and other generative AI applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Generative AI integration</h2>
          <p className="text-gray-600">
            Without expert knowledge, businesses integrating generative AI may face challenges related to quality control, data privacy, bias, legal compliance, etc. Our team seamlessly integrates existing generative AI products and APIs with your customer landscape, ensuring a secure, cost-effective, and efficient deployment of advanced generative AI solutions.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}