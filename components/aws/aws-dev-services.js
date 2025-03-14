import { motion } from "framer-motion";
import { FaRocket, FaDatabase, FaLightbulb } from "react-icons/fa";

const AWSDevelopmentServices = () => {
  return (
    <>
      <div
        className="flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800/60 text-white px-4 sm:px-6 lg:px-8 min-h-[60vh]"
        style={{
          backgroundImage: "url('/assets/bg-cta.jpg')", // Replace with your image path
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto container xl:max-w-6xl p-6 md:p-10"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center text-orange-400 mb-6 sm:mb-8">
            AWS Development Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/** AWS Application Development */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">AWS Application Development</h3>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li>&bull; AWS Web and Mobile Application Development</li>
                <li>&bull; Legacy Application Modernization</li>
                <li>&bull; AWS Integration Services</li>
                <li>&bull; AWS Optimization</li>
              </ul>
            </div>

            {/** Cloud Migration */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Cloud Migration</h3>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li>&bull; On-Premises, GCP, Azure migration to AWS Platform</li>
                <li>&bull; Hybrid Cloud</li>
              </ul>
            </div>

            {/** Cloud DevOps-as-a-Service */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Cloud DevOps-as-a-Service</h3>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li>&bull; AWS Native CI/CD</li>
                <li>&bull; Infrastructure as Code</li>
                <li>&bull; AWS Automation, Orchestration, and Testing</li>
                <li>&bull; Software Release Automation on AWS</li>
              </ul>
            </div>

            {/** Cloud Managed Services */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Cloud Managed Services</h3>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li>&bull; Infrastructure Modernization</li>
                <li>&bull; 24x7 AWS Managed Services</li>
              </ul>
            </div>

            {/** Business Intelligence and Analytics on AWS */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Business Intelligence & Analytics</h3>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li>&bull; Data Warehousing on AWS</li>
                <li>&bull; Cloud Business Intelligence Solutions</li>
                <li>&bull; Predictive Analytics</li>
                <li>&bull; ML and AI Services</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/** Let Us Help You Section */}
      <section className="text-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">Let Us Help You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/** Card 1 */}
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-md rounded-xl p-6 border flex flex-col items-center">
            <FaRocket className="text-orange-600 text-4xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 text-center">Modernize your applications</h3>
            <p className="text-gray-600 mt-2 text-center">for improved performance, security, and user experience.</p>
          </motion.div>

          {/** Card 2 */}
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-md rounded-xl p-6 border flex flex-col items-center">
            <FaDatabase className="text-orange-600 text-4xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 text-center">Optimize your data storage</h3>
            <p className="text-gray-600 mt-2 text-center">for better accessibility, scalability, and cost efficiency.</p>
          </motion.div>

          {/** Card 3 */}
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-md rounded-xl p-6 border flex flex-col items-center">
            <FaLightbulb className="text-orange-600 text-4xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 text-center">Gain actionable insights</h3>
            <p className="text-gray-600 mt-2 text-center">from your data with advanced analytics solutions.</p>
          </motion.div>
        </div>

        <p className="text-gray-700 mt-8 max-w-3xl mx-auto text-center">
          Unleash the full potential of your data and applications with our comprehensive modernization and cloud expertise.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-gradient-to-r from-orange-500 to-orange-300 text-white font-semibold py-3 px-6 rounded-full shadow-md"
        >
          Let’s Discuss Your Project →
        </motion.button>
      </section>
    </>
  );
};

export default AWSDevelopmentServices;
