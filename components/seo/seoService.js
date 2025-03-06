import { motion } from 'framer-motion';

const SEOServices = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Advanced SEO Services Proven to Grow Your Business
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">E-Commerce SEO</h2>
            <p className="text-gray-700">
              Our SEO experts can help you optimize your e-commerce store and product pages to drive more organic traffic, improve your search rankings, and boost sales.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Local SEO</h2>
            <p className="text-gray-700">
              To help you overcome the giants in your industry, our team of experts can create a local SEO strategy that’s customized just for you. We’ll help you optimize your website, local directory listings, Google Business Profile, and online reviews.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">National SEO</h2>
            <p className="text-gray-700">
              Our customized national SEO strategies can help you compete on a national level by targeting backlinks, keywords, and more that will help you gain the exposure you need to engage a larger audience.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SEOServices;