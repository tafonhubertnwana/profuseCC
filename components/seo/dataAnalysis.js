import { motion } from 'framer-motion';

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

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Expert Data Analytics Services for Your Scenario
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          At Kanda, we help turn data into industry success by leveraging the power of predictive and prescriptive analytics to uncover hidden patterns, mitigate risks, and seize new opportunities.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {industries.map((industry, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{industry.name}</h2>
            <ul className="list-disc list-inside text-gray-600">
              {industry.services.map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </div>
  );
}