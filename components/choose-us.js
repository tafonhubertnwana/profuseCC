'use client';

import { motion } from 'framer-motion';

export default function ITServicesSection() {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center px-6 pt-12">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h5 className="text-orange-600 font-semibold">IT Support For Business</h5>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">The Toptech IT Services Promise</h2>
          <p className="text-gray-600 mt-4">
            Monotonectally synergize granular markets and front markets collaboratively task
            state of the art infrastructures for granular Maecenas varius sem dui buildings
            semper ante a viverra posuere maecenas fermentum.
          </p>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li className="flex items-start space-x-2">
              <span className="text-orange-600 pe-4">●</span> Achieve your goals and exceed expectations.
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-orange-600 pe-4">●</span> Building a website, mobile app or software.
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-orange-600 pe-4">●</span> Our platform is designed to help you.
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-orange-600 pe-4">●</span> Our platform places emphasis on user experience.
            </li>
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="assets/choose-us-thumb.png"
            alt="IT Services Team"
            className="shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
