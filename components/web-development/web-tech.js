import { motion } from "framer-motion";
import { useState } from "react";

const TechnologyStack = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const [selectedSection, setSelectedSection] = useState({
    name: "FRONT-END",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  });

  const sections = [
    { name: "FRONT-END", technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
    { name: "BACK-END", technologies: ["Node.js", "Express", "Django", "Flask"] },
    { name: "DATABASES", technologies: ["PostgreSQL", "MongoDB", "MySQL"] },
    { name: "INTEGRATIONS", technologies: ["REST APIs", "GraphQL", "WebSockets"] },
    { name: "DEVOPS", technologies: ["Docker", "Kubernetes", "CI/CD Pipelines"] },
    { name: "QUALITY ASSURANCE", technologies: ["Jest", "Cypress", "Selenium"] },
    { name: "ADVANCED TECHNOLOGIES", technologies: ["AI/ML", "Blockchain", "IoT"] },
  ];

  return (
    <section className="bg-[#0c1c40] py-16 px-4 sm:px-6 lg:px-8">
      <div className="container xl:max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold text-red-500 mb-6">
            TECHNOLOGY STACK
          </h1>
          <p className="text-lg text-gray-100 mb-8">
            Explore our comprehensive technology stack designed to deliver cutting-edge solutions for your business needs.
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
              {sections.map((section, index) => (
                <li
                  key={index}
                  className={`cursor-pointer text-lg font-semibold ${
                    selectedSection.name === section.name ? 'text-red-500' : 'text-gray-800'
                  }`}
                  onClick={() => setSelectedSection(section)}
                >
                  {section.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-3/4 bg-white rounded-lg shadow-lg p-6 ml-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{selectedSection.name}</h2>
            <ul className="list-disc list-inside text-gray-600">
              {selectedSection.technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
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
            onChange={(e) => setSelectedSection(sections[e.target.value])}
          >
            {sections.map((section, index) => (
              <option key={index} value={index}>
                {section.name}
              </option>
            ))}
          </select>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{selectedSection.name}</h2>
            <ul className="list-disc list-inside text-gray-600">
              {selectedSection.technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyStack;