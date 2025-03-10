import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: '/assets/thunderstorm.png',
    title: "Supercharge Your Innovation",
    description:
      "Get your new features and app updates to market faster. The Kanda team will also improve your service level agreements (SLAs) and minimize downtime with reduced Recovery Time Objectives (RTOs) and Recovery Point Objectives (RPOs).",
  },
  {
    icon: "/assets/balance-scale-left.png",
    title: "Scale Seamlessly",
    description:
      "Leverage the power of AWS to 'scale up' and 'scale down' your resources effortlessly, ensuring your applications are always available and meet demand.",
  },
  {
    icon: "/assets/screen-shield.png",
    title: "Uncompromising Security",
    description:
      "Rest assured your data is always protected with our end-to-end privacy and security solutions. Kanda adheres to the strictest industry standards and ensures IP protection, the integrity and confidentiality of your information.",
  },
  {
    icon: "/assets/trust-alt.png",
    title: "Trusted AWS experts",
    description:
      "We are an authorized AWS Advanced Tier Services partner with over 350+ successful projects, meaning we have the expertise to evaluate and optimize your cloud environment for peak efficiency and security.",
  },
  {
    icon: "/assets/optimization.png",
    title: "Optimize Your Costs",
    description:
      "We'll modernize your infrastructure and solutions using the most cost-effective methods available, without compromising performance or security.",
  },
];

export default function CloudAgilitySection() {
  const firstThreeFeatures = features.slice(0, 3);
  const lastTwoFeatures = features.slice(3);

  return (
    <section className="mx-auto max-w-6xl">
      <div className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-orange-600">
          Unlock Cloud Agility and Security
        </h2>
        <h3 className="text-2xl font-semibold text-orange-600 mt-2">
          with ProfuseCC's Expertise
        </h3>

        {/* First three features in a 3-column grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4">
          {firstThreeFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-md rounded-lg p-6 border flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <span className="absolute top-[-30px] sm:top-[-35px] left-1/2 transform -translate-x-1/2 bg-white   p-3 rounded-full">
                <Image src={feature.icon} alt="icon" width={60} height={60} />
              </span>
              <h4 className="text-lg font-semibold mt-10">{feature.title}</h4>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Last two features in a 2-column grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
  {lastTwoFeatures.map((feature, index) => (
    <motion.div
      key={index + 3} // Ensure unique keys
      className="relative bg-white shadow-md rounded-lg p-6 border flex flex-col items-center pt-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index + 3) * 0.2 }}
    >
      {/* Image Wrapper with Background */}
      <div className="absolute top-[-25px] sm:top-[-30px] left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full opacity-100">
        <Image src={feature.icon} alt="icon" width={60} height={60} />
      </div>

      <h4 className="text-lg font-semibold mt-4">{feature.title}</h4>
      <p className="text-gray-600 mt-2">{feature.description}</p>
    </motion.div>
  ))} 
</div>


<motion.button
  className="mt-8 bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition flex items-center justify-center mx-auto"
  whileHover={{ scale: 1.05 }}
  onClick={() => {
    window.location.href = '/contact'; // Replace with your desired link
  }}
>
  Talk to an Expert →
</motion.button>
      </div>
    </section>
  );
}