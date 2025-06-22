import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaHospital, 
  FaMoneyBillWave, 
  FaShoppingCart, 
  FaGraduationCap,
  FaBroadcastTower,
  FaTruck,
  FaBuilding,
  FaIndustry,
  FaCheckCircle
} from 'react-icons/fa';

export default function DataAnalysis() {
  const industries = [
    {
      name: 'Healthcare',
      Icon: FaHospital,
      services: [
        'Patient data analysis for personalized treatment plans',
        'Predictive analytics for disease outbreaks',
        'Optimization of hospital resource allocation',
        'Telemedicine and remote patient monitoring',
        'Fraud detection in healthcare claims',
      ]
    },
    {
      name: 'Financial Services',
      Icon: FaMoneyBillWave,
      services: [
        'Fraud detection and prevention',
        'Credit risk assessment and management',
        'Customer segmentation for targeted marketing',
        'Investment portfolio optimization',
        'Real-time transaction monitoring',
      ]
    },
    {
      name: 'Retail',
      Icon: FaShoppingCart,
      services: [
        'Customer behavior analysis for personalized experiences',
        'Inventory management and demand forecasting',
        'Dynamic pricing strategies',
        'Supply chain optimization',
        'Customer sentiment analysis from reviews',
      ]
    },
    {
      name: 'Education',
      Icon: FaGraduationCap,
      services: [
        'Student performance tracking and analytics',
        'Personalized learning paths',
        'Course recommendation systems',
        'Resource allocation for institutions',
        'Engagement analysis for online learning',
      ]
    },
    {
      name: 'Telecommunication',
      Icon: FaBroadcastTower,
      services: [
        'Network performance optimization',
        'Customer churn prediction',
        '5G deployment analytics',
        'Call data record (CDR) analysis',
        'Bandwidth usage forecasting',
      ]
    },
    {
      name: 'Transportation',
      Icon: FaTruck,
      services: [
        'Route optimization for delivery efficiency',
        'Predictive maintenance for fleet management',
        'Demand forecasting for public transit',
        'Real-time tracking and analytics',
        'Warehouse management optimization',
      ]
    },
    {
      name: 'Real Estate',
      Icon: FaBuilding,
      services: [
        'Property valuation and market trend analysis',
        'Investment risk assessment',
        'Tenant and lease management analytics',
        'Smart building optimization',
        'Predictive maintenance for properties',
      ]
    },
    {
      name: 'Industrial Manufacturing & Automation',
      Icon: FaIndustry,
      services: [
        'Predictive maintenance for machinery',
        'Production line optimization',
        'Quality control with AI-driven defect detection',
        'Supply chain and inventory automation',
        'Energy consumption analytics for cost reduction',
      ]
    },
  ];

  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);
  const [hoveredIndustry, setHoveredIndustry] = useState(null);

  const handleIndustryClick = (industry) => {
    setSelectedIndustry(industry);
    if (window.innerWidth < 768) {
      document.getElementById('industry-details').scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='bg-gradient-to-b from-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8'>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-[#FF0000] mb-6">
            Data Analytics Solutions for Every Industry
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Transform your data into actionable insights with our cutting-edge analytics services.
          </p>
        </motion.div>

        {/* Desktop Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex gap-8"
        >
          <div className="w-1/3 bg-gray-800 rounded-xl shadow-2xl p-6 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-700">Industries We Serve</h2>
            <ul className="space-y-3">
              {industries.map((industry, index) => {
                const Icon = industry.Icon;
                return (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`cursor-pointer p-3 rounded-lg transition-all flex items-center ${
                      selectedIndustry.name === industry.name 
                        ? 'bg-red-600 text-white shadow-lg' 
                        : hoveredIndustry === index 
                          ? 'bg-white/10 backdrop-blur-sm text-white' 
                          : 'text-gray-300 hover:bg-white/10 backdrop-blur-sm'
                    }`}
                    onClick={() => handleIndustryClick(industry)}
                    onMouseEnter={() => setHoveredIndustry(index)}
                    onMouseLeave={() => setHoveredIndustry(null)}
                  >
                    <Icon className="text-xl mr-3" />
                    <span className="font-medium">{industry.name}</span>
                  </motion.li>
                );
              })}
            </ul>
          </div>
          
          <motion.div 
            key={selectedIndustry.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="w-2/3 bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700"
            id="industry-details"
          >
            <div className="flex items-center mb-6">
              <selectedIndustry.Icon className="text-3xl mr-4 text-[#FF0000]" />
              <h2 className="text-2xl font-bold text-white">{selectedIndustry.name} Analytics</h2>
            </div>
            <ul className="space-y-4">
              {selectedIndustry.services.map((service, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="flex items-start"
                >
                  <FaCheckCircle className="w-5 h-5 text-[#FF0000] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Mobile Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:hidden"
        >
          <div className="mb-6">
            <select
              className="w-full p-4 bg-gray-800 text-white rounded-xl border border-gray-700 appearance-none"
              onChange={(e) => handleIndustryClick(industries[e.target.value])}
            >
              {industries.map((industry, index) => {
                const Icon = industry.Icon;
                return (
                  <option key={index} value={index} className="bg-gray-800 flex items-center">
                    <Icon className="inline mr-2" /> {industry.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div 
            className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700"
            id="industry-details"
          >
            <div className="flex items-center mb-4">
              <selectedIndustry.Icon className="text-2xl mr-3 text-[#FF0000]" />
              <h2 className="text-xl font-bold text-white">{selectedIndustry.name}</h2>
            </div>
            <ul className="space-y-3">
              {selectedIndustry.services.map((service, idx) => (
                <li key={idx} className="flex items-start">
                  <FaCheckCircle className="w-4 h-4 text-[#FF0000] mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}