import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';

const contentData = {
  paragraphs: [
    "The regulations and standards governing the gathering, arrangement, and storage of transport & logistics IT services for data are known as logistics data standards. Supply chain visibility refers to the ability to track your items at every level of the supply chain in real-time. Logistics technology providers deliver the critical technology that supports the operation of the entire supply chain.",
    "Container management logistics refers to the techniques and procedures used to control the movement of containers. The supply chain industry includes companies involved in the production, transportation, and distribution of goods.",
    "Optimization logistics data are the datasets used to improve logistics processes. Logistics technology trends reflect changes in the technologies driving the industry. Business process services refer to outsourced services supporting logistics business operations.",
    "Mobile device management ensures the security and efficiency of mobile devices used in logistics. These tools help streamline operations and enhance real-time communication throughout the logistics chain."
  ],
  highlight: "We strive to deliver the best work for every single project!",
  services: [
    {
      title: "Dealer Management Systems",
      description: "Manage your dealership with ease using our responsive system accessible across smartphones and desktops, allowing full control from anywhere.",
      image: "/industry/log-2.png",
      alt: "Dealer management system dashboard"
    },
    {
      title: "Fleet Management System",
      description: "Track and manage your fleet in real-time with mobile and desktop apps tailored for performance, safety, and cost-efficiency.",
      image: "/industry/log-3.png",
      alt: "Fleet tracking on map"
    },
    {
      title: "Shipping & Delivery System",
      description: "Optimize delivery and transportation operations with web and app solutions that provide full visibility into your logistics pipeline.",
      image: "/industry/log-4.png",
      alt: "Shipping system dashboard"
    },
    {
      title: "Inventory Solutions",
      description: "Advanced inventory management tailored to your logistics flow with pre-enabled categories and flexible configuration.",
      image: "/industry/log-5.png",
      alt: "Inventory management dashboard"
    },
    {
      title: "Supply Chain Management",
      description: "Track production, demand, and logistics workflows with our integrated supply chain management and custom logistics app design.",
      image: "/industry/log-6.png",
      alt: "Supply chain dashboard"
    },
    {
      title: "Data Warehousing Solutions",
      description: "Enterprise-grade data warehousing tools to securely store, manage, and access large volumes of logistics and operational data.",
      image: "/industry/log-7.png",
      alt: "Data warehouse interface"
    },
    {
      title: "Manufacturing Solutions",
      description: "Custom web and mobile platforms tailored to meet manufacturing demands, improving transparency and reducing delays.",
      image: "/industry/log-8.png",
      alt: "Manufacturing software dashboard"
    },
    {
      title: "Logistics on Demand",
      description: "On-demand logistics solutions that allow customers to book, track, and interact through an intelligent service platform.",
      image: "/industry/log-9.png",
      alt: "Logistics on-demand mobile app"
    },
    {
      title: "Location Tracking Solutions",
      description: "Gain real-time visibility over your vehicles and staff with location tracking tools designed for coordination and performance.",
      image: "/industry/log-10.png",
      alt: "Real-time location tracking map"
    }
  ]
};

export default function TransportationSolutions() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Transportation & Logistics IT Solutions</title>
      </Head>

      <main className="py-16 container mx-auto px-4 max-w-7xl">
        {/* Intro Paragraphs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-5 text-gray-700 leading-relaxed text-md mb-10"
        >
          {contentData.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>

        {/* Highlight Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="text-xl font-semibold text-[#FF0000]  italic text-center mb-16"
        >
          {contentData.highlight}
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentData.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="bg-white rounded-sn shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <Image
                src={service.image}
                alt={service.alt}
                width={600}
                height={400}
                className=" m-4 w-12 h-12 object-cover grayscale brightness-75"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 text-base">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
