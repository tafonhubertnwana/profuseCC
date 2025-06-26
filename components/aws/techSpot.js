// components/TechSpotlight.js
'use client';
import { motion } from 'framer-motion';
import { MdArrowRight } from 'react-icons/md'; // Import the MdArrowRight icon

const techData = [
  {
    category: "Cloud",
    items: ["AWS", "Azure", "GCP"]
  },
  {
    category: "Data Storage",
    items: ["Snowflake", "Google BigQuery", "Amazon Redshift", "Azure Data Lake Storage"]
  },
  {
    category: "Data Integration and Processing",
    items: ["SSIS", "Oracle Data Integrator", "Tableau", "Apache NiFi", "Informatic PowerCenter"]
  },
  {
    category: "Data Visualization",
    items: ["Tableau", "Power BI", "Looker", "Qlik Sense"]
  },
  {
    category: "Machine Learning",
    items: ["TensorFlow", "Keras", "PyTorch", "NumPy", "XGBoost", "Pandas"]
  },
];

const TechSpotlight = () => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Tech Spotlight</h2>
      <div className="space-y-4">
        {techData.map((tech) => (
          <motion.div
            key={tech.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-100 border border-blue-300 rounded-lg p-4"
          >
            <h3 className="text-xl font-semibold">{tech.category}</h3>
            <ul className="list-none pl-5">
              {tech.items.map((item) => (
                <li key={item} className="text-gray-700 flex items-center">
                  <MdArrowRight className="text-[#FF0000] mr-2" /> {/* Use MdArrowRight icon with red color */}
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechSpotlight;