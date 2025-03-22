import { motion } from 'framer-motion';
import { useState } from 'react';

export default function DataAnalysis() {
  const industries = [
    {
      name: 'Healthcare',
      services: [
        'Patient data analysis for personalized treatment plans',
        'Predictive analytics for disease outbreaks',
        'Optimization of hospital resource allocation',
        'Telemedicine and remote patient monitoring',
        'Fraud detection in healthcare claims',
      ],
    },
    {
      name: 'Financial and Banking Services',
      services: [
        'Fraud detection and prevention',
        'Credit risk assessment and management',
        'Customer segmentation for targeted marketing',
        'Investment portfolio optimization',
        'Real-time transaction monitoring',
      ],
    },
    {
      name: 'Retail and E-commerce',
      services: [
        'Customer behavior analysis for personalized shopping experiences',
        'Inventory management and demand forecasting',
        'Dynamic pricing strategies',
        'Supply chain optimization',
        'Customer sentiment analysis from reviews and feedback',
      ],
    },
    {
      name: 'Education and E-learning',
      services: [
        'Student performance tracking and predictive analytics',
        'Personalized learning paths',
        'Course recommendation systems',
        'Resource allocation for educational institutions',
        'Engagement analysis for online learning platforms',
      ],
    },
    {
      name: 'Marketing and AdTech',
      services: [
        'Campaign performance analysis',
        'Customer journey mapping',
        'Programmatic advertising optimization',
        'A/B testing and conversion rate optimization',
        'Social media sentiment analysis',
      ],
    },
    {
      name: 'Transportation and Logistics',
      services: [
        'Route optimization for delivery efficiency',
        'Predictive maintenance for fleet management',
        'Demand forecasting for public transportation',
        'Real-time tracking and analytics',
        'Warehouse management optimization',
      ],
    },
    {
      name: 'Real Estate and PropTech',
      services: [
        'Property valuation and market trend analysis',
        'Investment risk assessment',
        'Tenant and lease management analytics',
        'Smart building optimization',
        'Predictive maintenance for property management',
      ],
    },
    {
      name: 'Travel and Hospitality',
      services: [
        'Personalized recommendations, rewards, and promotions',
        'Dynamic pricing based on demand, seasonality, and competitive prices',
        'Forecasting demand for flights, hotel rooms, and travel packages',
        'Travel itinerary optimization based on preferences and travel history',
        'Operational analytics to optimize staff scheduling, resource allocation, and inventory management',
      ],
    },
  ];

  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);

  return (
    <>
    <section className='bg-[#0c1c40]'>

      <div className="container xl:max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold text-red-500 mb-6">
            Expert Data Analytics Services for Your Scenario
          </h1>
          <p className="text-lg text-gray-100 mb-8">
            At ProfuseCC, we help turn data into industry success by leveraging the power of predictive and prescriptive analytics to uncover hidden patterns, mitigate risks, and seize new opportunities.
          </p>
        </motion.div>

        {/* Desktop Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex"
        >
          <div className="w-1/4 bg-white rounded-lg shadow-lg p-6">
            <ul className="space-y-4">
              {industries.map((industry, index) => (
                <li
                  key={index}
                  className={`cursor-pointer text-lg font-semibold ${
                    selectedIndustry.name === industry.name ? 'text-red-500' : 'text-gray-800'
                  }`}
                  onClick={() => setSelectedIndustry(industry)}
                >
                  {industry.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-3/4 bg-white rounded-lg shadow-lg p-6 ml-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{selectedIndustry.name}</h2>
            <ul className="list-disc list-inside text-gray-600">
              {selectedIndustry.services.map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Mobile Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:hidden"
        >
          <select
            className="w-full p-3 bg-white rounded-lg shadow-lg mb-6"
            onChange={(e) => setSelectedIndustry(industries[e.target.value])}
          >
            {industries.map((industry, index) => (
              <option key={index} value={index}>
                {industry.name}
              </option>
            ))}
          </select>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{selectedIndustry.name}</h2>
            <ul className="list-disc list-inside text-gray-600">
              {selectedIndustry.services.map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}