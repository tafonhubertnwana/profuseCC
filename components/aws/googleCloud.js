import { motion } from 'framer-motion';
import Head from 'next/head';

const GoogleCloudServices = () => {
  const nlpServices = [
    {
      title: 'Google Cloud Natural Language',
      description: 'API for text analysis, sentiment analysis, and entity recognition.'
    },
    {
      title: 'Google Cloud Speech-to-Text',
      description: 'API for speech recognition and transcription.'
    },
    {
      title: 'Google Cloud Text-to-Speech',
      description: 'API for text-to-speech synthesis.'
    }
  ];

  const visionServices = [
    {
      title: 'Google Cloud Vision',
      description: 'API for image analysis, object detection, and facial recognition.'
    },
    {
      title: 'Google Cloud Video Intelligence',
      description: 'API for video analysis and object detection.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="p-20 bg-black  py-12 px-4 sm:px-6 lg:px-8">
    

      <div className="container xl:max-w-7xl mx-auto p-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          Google Cloud Services
        </motion.h1>

        <div className="space-y-16">
          {/* NLP Services Section */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-semibold text-white mb-6"
            >
              Natural Language Processing (NLP)
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nlpServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Computer Vision Services Section */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-semibold text-white mb-6"
            >
              Computer Vision Services
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visionServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default GoogleCloudServices;