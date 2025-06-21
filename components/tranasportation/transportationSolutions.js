import { motion } from 'framer-motion';
import Head from 'next/head';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const slideUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

export default function TransportationSolutions() {
  return (
    <>
      <Head>
        <title>ProfuseCC | Logistics Technology Solutions</title>
        <meta name="description" content="Advanced web and mobile solutions for the transportation industry" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center bg-gradient-to-br from-blue-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 }
            }
          }}
          className="relative z-10 px-6 text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={slideUp}
            className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Transform Your <span className="text-yellow-300">Logistics Operations</span>
          </motion.h1>
          
          <motion.p 
            variants={slideUp}
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-10"
          >
            Cutting-edge web and mobile solutions that reduce costs while exponentially improving management effectiveness.
          </motion.p>
          
          <motion.div variants={slideUp} className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg shadow-md transition-all">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-3 px-8 rounded-lg transition-all">
              Free Consultation
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Supply Chain Visibility */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <motion.h2 
                variants={slideUp}
                className="text-3xl font-bold text-gray-800 mb-6"
              >
                Real-Time <span className="text-blue-600">Supply Chain Visibility</span>
              </motion.h2>
              
              <motion.p 
                variants={slideUp}
                className="text-gray-600 mb-6 text-lg"
              >
                ProfuseCC delivers practical web and mobile solutions that provide complete visibility across your transportation network.
              </motion.p>
              
              <motion.p 
                variants={slideUp}
                className="text-gray-600 mb-6 text-lg"
              >
                Businesses must implement innovative strategies to manage operations efficiently. Our solutions help you track both internal and external processes with precision.
              </motion.p>
              
              <motion.div variants={slideUp}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all">
                  Learn More
                </button>
              </motion.div>
            </div>
            
            <div className="md:w-1/2 bg-gray-50 p-8 rounded-xl shadow-sm">
              <motion.img 
                src="/supply-chain-visual.svg" 
                alt="Supply chain visualization"
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.section>

        {/* Logistics Technology */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <div className="md:w-1/2">
              <motion.h2 
                variants={slideUp}
                className="text-3xl font-bold text-gray-800 mb-6"
              >
                Advanced <span className="text-blue-600">Logistics Technology</span>
              </motion.h2>
              
              <motion.p 
                variants={slideUp}
                className="text-gray-600 mb-6 text-lg"
              >
                Despite the potential of digital freight solutions, many transportation networks remain underdeveloped. We help you navigate these challenges.
              </motion.p>
              
              <motion.p 
                variants={slideUp}
                className="text-gray-600 mb-6 text-lg"
              >
                Our strategy focuses on creating affordable, interactive solutions that engage your customers while streamlining operations.
              </motion.p>
              
              <motion.div variants={slideUp}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all">
                  Explore Solutions
                </button>
              </motion.div>
            </div>
            
            <div className="md:w-1/2 bg-gray-50 p-8 rounded-xl shadow-sm">
              <motion.img 
                src="/logistics-tech.svg" 
                alt="Logistics technology"
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.section>

        {/* Value Proposition */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-blue-50 rounded-2xl p-12 text-center"
        >
          <motion.h2 
            variants={slideUp}
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            Why Partner With ProfuseCC?
          </motion.h2>
          
          <motion.div 
            variants={fadeIn}
            className="w-20 h-1 bg-blue-600 mx-auto mb-12"
          ></motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              variants={slideUp}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Cost Efficiency</h3>
              <p className="text-gray-600">
                Reduce operational expenses while improving efficiency across your logistics network.
              </p>
            </motion.div>
            
            <motion.div 
              variants={slideUp}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">10x Effectiveness</h3>
              <p className="text-gray-600">
                Transform your management with tools that provide exponential productivity gains.
              </p>
            </motion.div>
            
            <motion.div 
              variants={slideUp}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Future Ready</h3>
              <p className="text-gray-600">
                Scalable solutions designed for tomorrow's logistics challenges.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Consultation CTA */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-24 text-center"
        >
          <motion.h2 
            variants={slideUp}
            className="text-3xl font-bold text-gray-800 mb-6"
          >
            Ready to Optimize Your Operations?
          </motion.h2>
          
          <motion.p 
            variants={slideUp}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            Schedule a free consultation with our logistics technology experts today.
          </motion.p>
          
          <motion.div variants={slideUp}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all transform hover:scale-105">
              Book Consultation
            </button>
          </motion.div>
        </motion.section>
      </div>
    </>
  );
}